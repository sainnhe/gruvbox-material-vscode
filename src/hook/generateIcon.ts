import * as sharp from "sharp";
import { join } from "path";

const svgPath = join(__dirname, "../../icon.svg");
const pngPath = join(__dirname, "../../icon.png");

sharp(svgPath).png().toFile(pngPath);
