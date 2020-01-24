import * as fs from "fs";
import { ConfigurationChangeEvent, workspace, window, commands } from "vscode";
import { Configuration } from "./interface";
import { getWorkbench } from "./workbench";
import { getSyntax } from "./syntax";
import { getPalette } from "./palette";

export default class {
  detectConfigChanges(
    // {{{
    event: ConfigurationChangeEvent,
    onConfigChange: () => void
  ): void {
    if (event.affectsConfiguration("gruvboxMaterial")) {
      onConfigChange();
    }
  } // }}}
  getConfiguration(): Configuration {
    // {{{
    let workspaceConfiguration = workspace.getConfiguration("gruvboxMaterial");
    return {
      contrast: workspaceConfiguration.get<string>("contrast"),
      workbench: workspaceConfiguration.get<string>("workbench"),
      palette: workspaceConfiguration.get<string>("palette"),
      italicKeywords: workspaceConfiguration.get<boolean>("italicKeywords"),
      italicComments: workspaceConfiguration.get<boolean>("italicComments")
    };
  } // }}}
  getThemeData(configuration: Configuration) {
    // {{{
    return {
      dark: {
        name: "Gruvbox Material Dark",
        type: "dark",
        colors: getWorkbench(configuration, getPalette(configuration, "dark")),
        tokenColors: getSyntax(configuration, getPalette(configuration, "dark"))
      },
      light: {
        name: "Gruvbox Material Light",
        type: "light",
        colors: getWorkbench(configuration, getPalette(configuration, "light")),
        tokenColors: getSyntax(
          configuration,
          getPalette(configuration, "light")
        )
      }
    };
  } // }}}
  private async writeFile(path: string, data: unknown) {
    // {{{
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), err =>
        err ? reject(err) : resolve()
      );
    });
  } // }}}
  private promptToReload() {
    // {{{
    const action = "Reload";
    window
      .showInformationMessage(
        "Please reload to apply the theme configuration changes.",
        action
      )
      .then(selectedAction => {
        if (selectedAction === action) {
          commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  } // }}}
  async generate(darkPath: string, lightPath: string, data: any) {
    // {{{
    this.writeFile(darkPath, data.dark).then(this.promptToReload);
    this.writeFile(lightPath, data.light);
  } // }}}
}
