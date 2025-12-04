import * as vscode from "vscode";
import { CommandFacade } from "../core/commandFacade";

export function commandRunAll() {
    return vscode.commands.registerCommand(
        "comment-editor.runAll",
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const language = editor.document.languageId;

            const picked = await vscode.window.showQuickPick(
                ["comments", "logs"],
                { canPickMany: true, title: "Select filters to apply" }
            );

            if (!picked || picked.length === 0) return;

            const ctx = {
                language,
                rules: picked
            };

            const code = editor.document.getText();
            const output = CommandFacade.apply(code, ctx);

            editor.edit(editBuilder => {
                const fullRange = new vscode.Range(
                    0,
                    0,
                    editor.document.lineCount,
                    0
                );
                editBuilder.replace(fullRange, output);
            });
        }
    );
}
