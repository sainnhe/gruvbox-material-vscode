import { join } from "path";
import { default as data } from "../src/utils/themeData";
import { writeFile } from "../src/utils/writeFile";

writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
  data.dark
);

writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-light.json"),
  data.light
);
