import * as vscode from "vscode";
import { CommandFacade } from "../core/commandFacade";

export function commandRemoveLogsCommand() {
    return vscode.commands.registerCommand(
        "comment-editor.removeLogs",
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const document = editor.document;
            const code = document.getText();

            const ctx = {
                language: document.languageId,
                rules: ["logs"]
            };

            const output = CommandFacade.apply(code, ctx);

            editor.edit(editBuilder => {
                const fullRange = new vscode.Range(
                    0,
                    0,
                    document.lineCount,
                    0
                );
                editBuilder.replace(fullRange, output);
            });
        }
    );
}