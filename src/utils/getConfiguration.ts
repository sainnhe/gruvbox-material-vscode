import { workspace } from "vscode";
import { Configuration } from "../interface";

export function getConfiguration(): Configuration {
  let workspaceConfiguration = workspace.getConfiguration("gruvboxMaterial");
  return {
    contrast: workspaceConfiguration.get<string>("contrast"),
    workbench: workspaceConfiguration.get<string>("workbench"),
    palette: workspaceConfiguration.get<string>("palette"),
    italicKeywords: workspaceConfiguration.get<boolean>("italicKeywords"),
    italicComments: workspaceConfiguration.get<boolean>("italicComments")
  };
}
