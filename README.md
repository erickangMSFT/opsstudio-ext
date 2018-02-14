# opsstudio-ext

CD ./serverInsights

npm install --save-dev vscode
npm install --save-dev typescript
node ./node_modules/vscode/bin/install

npm run compile
vsce package
