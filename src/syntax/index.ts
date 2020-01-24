import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getCommonSyntax } from "./common";
import { getExtendedSyntax } from "./extended";

export function getSyntax(configuration: Configuration, variant: string) {
  let palette = getPalette(configuration, variant);
  let commonSyntax = getCommonSyntax(palette);
  let syntax = getExtendedSyntax(palette);
  commonSyntax.forEach(item => {
    syntax.push(item);
  });
  return syntax;
}
