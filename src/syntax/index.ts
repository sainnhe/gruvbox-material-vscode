import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getDefaultSyntax } from "./default";
import { getItalicSyntax } from "./italic";

export function getSyntax(configuration: Configuration, variant: string) {
  let palette = getPalette(configuration, variant);
  let syntax: any;
  if (configuration.italicKeywords === true) {
    syntax = getItalicSyntax(palette, configuration.italicComments);
  } else {
    syntax = getDefaultSyntax(palette, configuration.italicComments);
  }
  return syntax;
}
