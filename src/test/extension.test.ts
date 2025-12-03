import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Remove Comments Command Tests', () => {

    test('Should remove comments in a JavaScript document', async () => {
        const doc = await vscode.workspace.openTextDocument({
            content: `
                // comentario 1
                const x = 10; // comentario inline
                /* bloque */
                const y = 20;
            `,
            language: 'javascript'
        });

        await vscode.window.showTextDocument(doc);

        await vscode.commands.executeCommand('comment-editor.removeComments');

        const updatedText = doc.getText();

        assert.ok(!updatedText.includes('// comentario'));
        assert.ok(!updatedText.includes('/*'));
        assert.ok(!updatedText.includes('*/'));

        assert.ok(updatedText.includes('const x = 10'));
        assert.ok(updatedText.includes('const y = 20'));
    });

});
