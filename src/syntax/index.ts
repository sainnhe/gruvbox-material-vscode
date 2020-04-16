import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getDefaultSyntax } from "./default";
import { getItalicSyntax } from "./italic";
import { getEnhancedSyntax } from "./enhanced";
import { getEnhancedItalicSyntax } from "./enhancedItalic";

export function getSyntax(configuration: Configuration, variant: string) {
  let palette = getPalette(configuration, variant);
  let syntax: any;
  if (configuration.enhancedSyntax === false) {
    if (configuration.italicKeywords === true) {
      syntax = getItalicSyntax(palette, configuration.italicComments);
    } else {
      syntax = getDefaultSyntax(palette, configuration.italicComments);
    }
  } else {
    if (configuration.italicKeywords === true) {
      syntax = getEnhancedItalicSyntax(palette, configuration.italicComments);
    } else {
      syntax = getEnhancedSyntax(palette, configuration.italicComments);
    }
  }
  return syntax;
}
