import { Configuration, Palette } from "../interface";
import { getPalette } from "../palette";
import { flatWorkbench } from "./flat";
import { highContrastWorkbench } from "./highContrast";
import { materialWorkbench } from "./material";

export function getWorkbench(configuration: Configuration, variant: string) {
  let palette: Palette = getPalette(configuration, variant);
  if (variant === "dark") {
    switch (configuration.darkWorkbench) {
      case "material":
        return materialWorkbench(palette);
      case "flat":
        return flatWorkbench(palette);
      case "high-contrast":
        return highContrastWorkbench(palette);
      default:
        return materialWorkbench(palette);
    }
  } else {
    switch (configuration.lightWorkbench) {
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
}
