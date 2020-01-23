import { workspace } from "vscode";

let workspaceConfiguration = workspace.getConfiguration("gruvboxMaterial");

export default {
  contrast: workspaceConfiguration.get<string>("contrast"),
  workbench: workspaceConfiguration.get<string>("workbench"),
  palette: workspaceConfiguration.get<string>("palette"),
  italicKeywords: workspaceConfiguration.get<boolean>("italicKeywords"),
  italicComment: workspaceConfiguration.get<boolean>("italicComment")
};
