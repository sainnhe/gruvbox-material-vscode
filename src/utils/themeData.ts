import { darkCommon, lightCommon } from "../syntax";
import { default as workbench } from "../workbench";

export default {
  dark: {
    name: "Gruvbox Material Dark",
    type: "dark",
    colors: workbench(),
    tokenColors: darkCommon
  },
  light: {
    name: "Gruvbox Material Light",
    type: "light",
    colors: workbench(),
    tokenColors: lightCommon
  }
};
