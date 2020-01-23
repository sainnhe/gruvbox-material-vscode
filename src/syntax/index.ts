import { Configuration, Palette } from "../interface";
import { getCommonSyntax } from "./common";

export function getSyntax(configuration: Configuration, palette: Palette) {
  let syntax = getCommonSyntax(palette);
  return syntax;
}
