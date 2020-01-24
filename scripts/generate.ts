import { join } from "path";
import { default as Utils } from "../src/utils";

let utils = new Utils();
utils.generate(
  join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
  join(__dirname, "..", "themes", "gruvbox-material-light.json"),
  utils.getThemeData(utils.getConfiguration())
);
