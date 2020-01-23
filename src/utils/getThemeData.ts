import { Configuration, Palette } from "../interface";
import { getWorkbench } from "../workbench";
import { getSyntax } from "../syntax";
import { getPalette } from "../palette";

export function getThemeData(configuration: Configuration) {
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
      tokenColors: getSyntax(configuration, getPalette(configuration, "light"))
    }
  };
}
