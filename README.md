# SQL Ops Studio Extension Sample
This sample project demonstrates the extensibility of SQL Ops Studio. For the simplicity, this sample enables following:
    
1. Install various server insight sample widgets.
    
2. Automatically configure "dashboard.server.widget" settings in settings.json.

## Key scenarios
1. Downloads and install insight-extension.vsix using install from VSIX functionality.

2. Connect to a sql server instance and open Server Dashboard.

3. Dashboard visualizes newly installed server insight widgets.

4. Browses installed insight widgets from Extension Manager.

5. Remove installed extension using Extension Manager.

## Preparation 

1. Install SQL Operations Studio from https://aka.ms/sqlopsstudio

2. Clone this repository

    ```bash
    git clone https://github.com/erickangMSFT/opsstudio-ext.git
    ```

### Simple demo

1. Connect to a sql server instance. 

2. Open server dashboard by clicking "Manage" context menu from the connected server in OE.

3. Show the default Dashboard.

4. 'Enable Extension Manager' icon on the Ops Studio Activity bar by right-mouse-click Activity bar.

5. Open Extension Manager and click 'Install from VSIX' context menu from the top "..." menu icon.

6. Install ./serverInsight/Insight-Extension-0.2.0.vsix and reload sqlopsstudio

7. Open the same server dashboard and show new insight widgets.


## Clean up.

1. Go to Extension Manager.

2. Uninstall Insight-Extension-0.2.0 extension and reload sqlopsstudio.

3. Open "User Settings" and delete "dashboard.server.widget" property.


## Build Extension
To modify and build this sample extension, run following: 

```bash
CD ./serverInsights
npm install --save-dev vscode
npm install --save-dev typescript
node ./node_modules/vscode/bin/install

npm run compile
vsce package
```