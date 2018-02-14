'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    let config = vscode.workspace.getConfiguration('dashboard.server');
    let current = config.inspect<Array<any>>('widgets');
    let mod = [
        {
            "name": "Wait Counts",
            "widget": {
                "extension-wait-counts-by-Paul-Randal": null
            },
            "gridItemConfig": {
                "sizex": 2,
                "sizey": 1
            }
        },
        {
            "name": "Database Space Usage",
            "widget": {
                "extension-dbspace-usage": null
            },
            "gridItemConfig": {
                "sizex": 2,
                "sizey": 1
            }
        },
        {
            "name": "Backup Size Growth",
            "widget": {
                "extension-backup-growth-trend": null
            },
            "gridItemConfig": {
                "sizex": 2,
                "sizey": 1

            }
        },
        {
            "name": "Database Memory Usage",
            "widget": {
                "extension-dbbuffer-usage": null
            },
            "gridItemConfig": {
                "sizex": 2,
                "sizey": 1
            }
        },
        {
            "name": "CPU Utilization",
            "widget": {
                "extension-cpu-utilization": null
            },
            "gridItemConfig": {
                "sizex": 2,
                "sizey": 1
            }
        },
        {
            "widget": {
                "backup-history-server-insight": {
                    "cacheId": "0c7cba8b-c87a-4bcc-ae54-2f40a5503a90"
                }
            }
        },
        {
            "name": "Tasks",
            "widget": {
                "tasks-widget": {}
            },
            "gridItemConfig": {
                "sizex": 1,
                "sizey": 1
            }
        },
        {
            "name": "Search",
            "gridItemConfig": {
                "sizex": 1,
                "sizey": 1
            },
            "widget": {
                "explorer-widget": {}
            }
        }
    ];

    //mod = mod.concat(current.defaultValue);
    config.update('widgets', mod, vscode.ConfigurationTarget.Global);
}

// this method is called when your extension is deactivated
export function deactivate() {
    let config = vscode.workspace.getConfiguration('dashboard.server');
    let original = [
        {
            "widget": {
                "backup-history-server-insight": {
                    "cacheId": "0c7cba8b-c87a-4bcc-ae54-2f40a5503a90"
                }
            }
        },
        {
            "name": "Tasks",
            "widget": {
                "tasks-widget": {}
            },
            "gridItemConfig": {
                "sizex": 1,
                "sizey": 1
            }
        },
        {
            "gridItemConfig": {
                "sizex": 1,
                "sizey": 1
            },
            "widget": {
                "explorer-widget": {}
            }
        }
    ];
    config.update('widgets', original, vscode.ConfigurationTarget.Global)
}