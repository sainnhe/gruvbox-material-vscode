import { join } from "path";
import { writeFile } from "../src/utils/writeFile";
import { getThemeData } from "../src/utils/getThemeData";
import { getConfiguration } from "../src/utils/getConfiguration";

let data = getThemeData(getConfiguration());

writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
  data.dark
);

writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-light.json"),
  data.light
);
