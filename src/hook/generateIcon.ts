/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/gruvbox-material-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import * as sharp from "sharp";
import { join } from "path";

const svgPath = join(__dirname, "..", "..", "icon.svg");
const pngPath = join(__dirname, "..", "..", "icon.png");

sharp(svgPath).png().toFile(pngPath);

// vim: fdm=marker fmr={{{,}}}:
