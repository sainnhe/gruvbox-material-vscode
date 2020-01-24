import { commands, ExtensionContext } from "vscode";
import { join } from "path";
import { default as Utils } from "./utils";

export function activate(context: ExtensionContext) {
  let generateTheme = commands.registerCommand(
    "gruvboxMaterial.generateTheme",
    () => {
      let utils = new Utils();
      utils.generate(
        join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
        join(__dirname, "..", "themes", "gruvbox-material-light.json"),
        utils.getThemeData(utils.getConfiguration())
      );
    }
  );
  context.subscriptions.push(generateTheme);
}

export function deactivate() {}
