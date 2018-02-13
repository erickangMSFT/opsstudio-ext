'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "sd" is now active!');

    let config = vscode.workspace.getConfiguration('dashboard.server');

    let current = config.inspect<Array<any>>('widgets');

    console.log(current.defaultValue);

    let mod = current.defaultValue.concat([
        {
            "name": "Wait Counts",
            "widget": {
              "extension-wait-counts-by-Paul-Randal": null
            },
            "gridItemConfig": {
              "sizex": 2,
              "sizey": 1
            }
          }
    ]);

    config.update('widgets', mod, vscode.ConfigurationTarget.Global);
}

// this method is called when your extension is deactivated
export function deactivate() {
}