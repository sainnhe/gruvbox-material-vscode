import { workspace, commands, ExtensionContext } from "vscode";
import { join } from "path";
import { getThemeData } from "./utils/getThemeData";
import { getConfiguration } from "./utils/getConfiguration";
import { writeFile } from "./utils/writeFile";

export function activate(context: ExtensionContext) {
  let generateTheme = commands.registerCommand(
    "gruvboxMaterial.generateTheme",
    () => {
      let data = getThemeData(getConfiguration());
      writeFile(
        join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
        data.dark
      );
      writeFile(
        join(__dirname, "..", "themes", "gruvbox-material-light.json"),
        data.light
      );
    }
  );
  context.subscriptions.push(generateTheme);
}

export function deactivate() {}
