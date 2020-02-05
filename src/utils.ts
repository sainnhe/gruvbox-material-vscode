import * as fs from "fs";
import { join } from "path";
import { ConfigurationChangeEvent, workspace, window, commands } from "vscode";
import { Configuration } from "./interface";
import { getWorkbench } from "./workbench";
import { getSyntax } from "./syntax";

export default class Utils {
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
      darkContrast: workspaceConfiguration.get<string>("darkContrast"),
      lightContrast: workspaceConfiguration.get<string>("lightContrast"),
      darkWorkbench: workspaceConfiguration.get<string>("darkWorkbench"),
      lightWorkbench: workspaceConfiguration.get<string>("lightWorkbench"),
      darkPalette: workspaceConfiguration.get<string>("darkPalette"),
      lightPalette: workspaceConfiguration.get<string>("lightPalette"),
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
        colors: getWorkbench(configuration, "dark"),
        tokenColors: getSyntax(configuration, "dark")
      },
      light: {
        name: "Gruvbox Material Light",
        type: "light",
        colors: getWorkbench(configuration, "light"),
        tokenColors: getSyntax(configuration, "light")
      }
    };
  } // }}}
  isNewlyInstalled(): boolean {
    // {{{
    const flagPath = join(__dirname, "../temp", "flag.txt");
    if (!fs.existsSync(flagPath)) {
      this.writeFile(flagPath, "");
      return true;
    } else {
      return false;
    }
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
      .showInformationMessage("Reload required.", action)
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
  isDefaultConfiguration(configuration: Configuration): boolean {
    // {{{
    return (
      configuration.italicComments === true &&
      configuration.italicKeywords === false &&
      configuration.lightPalette === "material" &&
      configuration.darkPalette === "material" &&
      configuration.lightWorkbench === "material" &&
      configuration.darkWorkbench === "material" &&
      configuration.lightContrast === "medium" &&
      configuration.darkContrast === "medium"
    );
  } // }}}
}
