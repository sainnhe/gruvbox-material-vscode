import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getCommonSyntax } from "./common";

export function getSyntax(configuration: Configuration, variant: string) {
  let palette = getPalette(configuration, variant);
  let syntax = getCommonSyntax(palette);
  return syntax;
}
