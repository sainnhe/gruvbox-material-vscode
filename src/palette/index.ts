import { Configuration, Palette } from "../interface";
import { default as darkForegroundMaterial } from "./dark/foreground/material";
import { default as darkForegroundMix } from "./dark/foreground/mix";
import { default as darkForegroundOriginal } from "./dark/foreground/original";
import { default as darkBackgroundHard } from "./dark/background/hard";
import { default as darkBackgroundMedium } from "./dark/background/medium";
import { default as darkBackgroundSoft } from "./dark/background/soft";
import { default as lightForegroundMaterial } from "./light/foreground/material";
import { default as lightForegroundMix } from "./light/foreground/mix";
import { default as lightForegroundOriginal } from "./light/foreground/original";
import { default as lightBackgroundHard } from "./light/background/hard";
import { default as lightBackgroundMedium } from "./light/background/medium";
import { default as lightBackgroundSoft } from "./light/background/soft";

export function getPalette(
  configuration: Configuration,
  variant: string
): Palette {
  let paletteBackground = darkBackgroundMedium;
  let paletteForeground = darkForegroundMaterial;
  if (variant === "dark") {
    // {{{
    switch (
      configuration.darkContrast // {{{
    ) {
      case "hard": {
        paletteBackground = darkBackgroundHard;
        break;
      }
      case "medium": {
        paletteBackground = darkBackgroundMedium;
        break;
      }
      case "soft": {
        paletteBackground = darkBackgroundSoft;
        break;
      }
      default: {
        paletteBackground = darkBackgroundMedium;
      }
    } // }}}
    switch (
      configuration.darkPalette // {{{
    ) {
      case "material": {
        paletteForeground = darkForegroundMaterial;
        break;
      }
      case "mix": {
        paletteForeground = darkForegroundMix;
        break;
      }
      case "original": {
        paletteForeground = darkForegroundOriginal;
        break;
      }
      default: {
        paletteForeground = darkForegroundMaterial;
      } // }}}
    } // }}}
  } else {
    // {{{
    switch (
      configuration.lightContrast // {{{
    ) {
      case "hard": {
        paletteBackground = lightBackgroundHard;
        break;
      }
      case "medium": {
        paletteBackground = lightBackgroundMedium;
        break;
      }
      case "soft": {
        paletteBackground = lightBackgroundSoft;
        break;
      }
      default: {
        paletteBackground = lightBackgroundMedium;
      }
    } // }}}
    switch (
      configuration.lightPalette // {{{
    ) {
      case "material": {
        paletteForeground = lightForegroundMaterial;
        break;
      }
      case "mix": {
        paletteForeground = lightForegroundMix;
        break;
      }
      case "original": {
        paletteForeground = lightForegroundOriginal;
        break;
      }
      default: {
        paletteForeground = lightForegroundMaterial;
      }
    } // }}}
  } // }}}
  return {
    // {{{
    bg0: paletteBackground.bg0,
    bg1: paletteBackground.bg1,
    bg: paletteBackground.bg,
    bg2: paletteBackground.bg2,
    bg3: paletteBackground.bg3,
    bg4: paletteBackground.bg4,
    bg5: paletteBackground.bg5,
    bg6: paletteBackground.bg6,
    bg7: paletteBackground.bg7,
    bg8: paletteBackground.bg8,
    bg9: paletteBackground.bg9,
    grey0: paletteBackground.grey0,
    grey1: paletteBackground.grey1,
    grey2: paletteBackground.grey2,
    shadow: paletteBackground.shadow,
    fg0: paletteForeground.fg0,
    fg: paletteForeground.fg,
    fg1: paletteForeground.fg1,
    red: paletteForeground.red,
    orange: paletteForeground.orange,
    yellow: paletteForeground.yellow,
    green: paletteForeground.green,
    aqua: paletteForeground.aqua,
    blue: paletteForeground.blue,
    purple: paletteForeground.purple,
    dimRed: paletteForeground.dimRed,
    dimOrange: paletteForeground.dimOrange,
    dimYellow: paletteForeground.dimYellow,
    dimGreen: paletteForeground.dimGreen,
    dimAqua: paletteForeground.dimAqua,
    dimBlue: paletteForeground.dimBlue,
    dimPurple: paletteForeground.dimPurple,
  }; // }}}
}
