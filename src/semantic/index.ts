/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/gruvbox-material-vscode
 *  Copyright:  2020 Sainnhe Park <sainnhe@gmail.com>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getDefaultSemantic } from "./default";
import { getColorfulSemantic } from "./colorful";

export function getSemantic(configuration: Configuration, variant: string) {
  const palette = getPalette(configuration, variant);
  let semantic: any;
  if (configuration.colorfulSyntax === false) {
    semantic = getDefaultSemantic(palette);
  } else {
    semantic = getColorfulSemantic(palette);
  }
  return semantic;
}

// vim: fdm=marker fmr={{{,}}}:
