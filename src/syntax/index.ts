import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getDefaultSyntax } from "./default";
import { getItalicSyntax } from "./italic";
import { getColorfulSyntax } from "./colorful";
import { getColorfulItalicSyntax } from "./colorfulItalic";

export function getSyntax(configuration: Configuration, variant: string) {
  const palette = getPalette(configuration, variant);
  let syntax: any;
  if (configuration.colorfulSyntax === false) {
    if (configuration.italicKeywords === true) {
      syntax = getItalicSyntax(palette, configuration.italicComments);
    } else {
      syntax = getDefaultSyntax(palette, configuration.italicComments);
    }
  } else {
    if (configuration.italicKeywords === true) {
      syntax = getColorfulItalicSyntax(palette, configuration.italicComments);
    } else {
      syntax = getColorfulSyntax(palette, configuration.italicComments);
    }
  }
  return syntax;
}
