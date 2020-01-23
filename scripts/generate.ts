import { join } from "path";
import * as fs from "fs";
import { default as data } from "../src/utils/themeData";

export async function writeFile(path: string, data: unknown) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data, null, 2), err =>
      err ? reject(err) : resolve()
    );
  });
}

writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-dark.json"),
  data.dark
);
writeFile(
  join(__dirname, "..", "themes", "gruvbox-material-light.json"),
  data.light
);
