import * as vscode from "vscode";
import { applyFilters } from "./engine/filterEngine";
import { ALL_FILTERS } from "./filters";

export function activate(context: vscode.ExtensionContext) {
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = "commentEditor.showMenu";
    statusBarItem.text = "$(edit) Comment Editor";
    statusBarItem.tooltip = "Click to clean comments, logs or TODOs";

    const updateStatusBar = () => {
        if (vscode.window.activeTextEditor) {
            statusBarItem.show();
        } else {
            statusBarItem.hide();
        }
    };

    context.subscriptions.push(
            vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
            vscode.window.onDidChangeTextEditorSelection(updateStatusBar),
            statusBarItem
        );

    updateStatusBar();

    const showMenu = vscode.commands.registerCommand("commentEditor.showMenu", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const lang = editor.document.languageId;

        const options = ALL_FILTERS
            .filter(f => f.patterns.some(p => p.languages.includes("*") || p.languages.includes(lang)))
            .map(f => ({
                label: `$(trash) Remove ${f.id.toUpperCase()}`,
                description: `Clean ${f.id} from this ${lang} file`,
                id: f.id
            }));

        if (options.length === 0) {
            vscode.window.showInformationMessage(`No filters available for ${lang}`);
            return;
        }

        options.push({
            label: "$(zap) Run All Filters",
            description: "Clean everything compatible",
            id: "all"
        });

        const selected = await vscode.window.showQuickPick(options, {
            placeHolder: `Comment Editor (${lang})`
        });

        if (selected) {
            const filterIds = selected.id === "all" ? ALL_FILTERS.map(f => f.id) : [selected.id];
            vscode.commands.executeCommand("commentEditor.applyFilters", filterIds);
        }
    });

    const runFilterAction = (filterId: string) => {
        vscode.commands.executeCommand("commentEditor.applyFilters", [filterId]);
    };

    context.subscriptions.push(
        vscode.commands.registerCommand("commentEditor.cleanComments", () => runFilterAction("comments")),
        vscode.commands.registerCommand("commentEditor.cleanLogs", () => runFilterAction("logs")),
        vscode.commands.registerCommand("commentEditor.cleanTODOs", () => runFilterAction("TODOs")),
        vscode.commands.registerCommand("commentEditor.cleanEmojis", () => runFilterAction("emojis"))
    );

    const applyFiltersCommand = vscode.commands.registerCommand(
        "commentEditor.applyFilters",
        async (filterIds?: string[]) => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const document = editor.document;
            const code = document.getText();
            const lang = document.languageId;

            const selectedFilters = filterIds
                ? ALL_FILTERS.filter(f => filterIds.includes(f.id))
                : ALL_FILTERS;

            const newText = applyFilters(code, lang, selectedFilters);

            if (newText !== code) {
                const edit = new vscode.WorkspaceEdit();
                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(code.length)
                );

                edit.replace(document.uri, fullRange, newText);
                await vscode.workspace.applyEdit(edit);
                vscode.window.showInformationMessage(`Cleaned: ${selectedFilters.map(f => f.id).join(", ")}`);
            }
        }
    );

    context.subscriptions.push(showMenu, applyFiltersCommand);
}

export function deactivate() {}