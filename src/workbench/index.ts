import { Configuration, Palette } from "../interface";
import { flatWorkbench } from "./flat";
import { highContrastWorkbench } from "./highContrast";
import { materialWorkbench } from "./material";

export function getWorkbench(configuration: Configuration, palette: Palette) {
  switch (configuration.workbench) {
    case "material":
      return materialWorkbench(palette);
    case "flat":
      return flatWorkbench(palette);
    case "high-contrast":
      return highContrastWorkbench(palette);
    default:
      return materialWorkbench(palette);
  }
}

