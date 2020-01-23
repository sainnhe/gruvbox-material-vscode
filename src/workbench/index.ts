import { default as configuration } from "../configuration";
import { default as flatWorkbench } from "./flat";
import { default as highContrastWorkbench } from "./highContrast";
import { default as materialWorkbench } from "./material";

export default () => {
  switch (configuration.workbench) {
    case "material":
      return materialWorkbench;
    case "flat":
      return flatWorkbench;
    case "high-contrast":
      return highContrastWorkbench;
  }
};
