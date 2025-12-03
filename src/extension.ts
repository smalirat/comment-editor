import * as vscode from 'vscode';
import { removeComments } from './commands/RemoveComments';

export function activate(context: vscode.ExtensionContext) {
    console.log('Comment Editor extension activated.');

    context.subscriptions.push(
        removeComments()
    );
}

export function deactivate() {}