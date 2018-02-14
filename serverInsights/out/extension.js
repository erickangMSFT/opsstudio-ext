'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    let config = vscode.workspace.getConfiguration('dashboard.server');
    let current = config.inspect('widgets');
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
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map