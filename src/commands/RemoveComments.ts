import * as vscode from 'vscode';
import { filterRegistry } from '../core/FilterRegistry';

export function removeComments() {

    return vscode.commands.registerCommand(
        "comment-editor.removeComments",
        async () => {

            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('No active editor found.');
                return;
            }

            const document = editor.document;
            const languageId = document.languageId;
            if (languageId === 'plaintext') {
            vscode.window.showWarningMessage(
                'Comment Editor: El archivo es de texto plano y no tiene comentarios para remover.'
            );
            return;
}
            const code = document.getText();

            const pipeline = filterRegistry.getPipeline(languageId);

            if (!pipeline) {
                vscode.window.showWarningMessage(
                    `No comment rules defined for language: ${languageId}`
                );
                return;
            }

            const cleaned = pipeline.apply(code);

            await editor.edit(edit => {
                edit.replace(
                    new vscode.Range(
                        document.positionAt(0),
                        document.positionAt(code.length)
                    ),
                    cleaned
                );
            });

            vscode.window.showInformationMessage("Comments removed successfully.");
        }
    );
}
