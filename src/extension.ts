import { workspace, commands } from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const configuration = workspace.getConfiguration('gruvboxMaterial');
  let generateTheme = commands.registerCommand('gruvboxMaterial.generateTheme', () => {
    
  })
}

export function deactivate() {}
