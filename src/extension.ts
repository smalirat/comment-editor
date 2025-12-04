import * as vscode from "vscode";
import { commandRemoveCommentsCommand } from "./commands/removeComments";
import { commandRemoveLogsCommand } from "./commands/removeLogs";
import { commandRunAll } from "./commands/runAll";

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        commandRemoveCommentsCommand(),
        commandRemoveLogsCommand(),
        commandRunAll()
    );
}

export function deactivate() {}
