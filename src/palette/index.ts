import { Configuration, Palette } from "../interface";
import { default as mDarkHard } from "./material/darkHard";
import { default as mDarkMedium } from "./material/darkMedium";
import { default as mDarkSoft } from "./material/darkSoft";
import { default as mLightHard } from "./material/lightHard";
import { default as mLightMedium } from "./material/lightMedium";
import { default as mLightSoft } from "./material/lightSoft";
import { default as oDarkHard } from "./original/darkHard";
import { default as oDarkMedium } from "./original/darkMedium";
import { default as oDarkSoft } from "./original/darkSoft";
import { default as oLightHard } from "./original/lightHard";
import { default as oLightMedium } from "./original/lightMedium";
import { default as oLightSoft } from "./original/lightSoft";

export function getPalette(
  configuration: Configuration,
  variant: string
): Palette {
  let palette: Palette;
  if (variant === "dark") {
    if (configuration.darkPalette === "material") {
      switch (configuration.darkContrast) {
        case "hard": {
          palette = mDarkHard;
          break;
        }
        case "medium": {
          palette = mDarkMedium;
          break;
        }
        case "soft": {
          palette = mDarkSoft;
          break;
        }
        default: {
          palette = mDarkMedium;
        }
      }
    } else if (configuration.darkPalette === "original") {
      switch (configuration.darkContrast) {
        case "hard": {
          palette = oDarkHard;
          break;
        }
        case "medium": {
          palette = oDarkMedium;
          break;
        }
        case "soft": {
          palette = oDarkSoft;
          break;
        }
        default: {
          palette = oDarkMedium;
        }
      }
    }
  } else {
    if (configuration.lightPalette === "material") {
      switch (configuration.lightContrast) {
        case "hard": {
          palette = mLightHard;
          break;
        }
        case "medium": {
          palette = mLightMedium;
          break;
        }
        case "soft": {
          palette = mLightSoft;
          break;
        }
        default: {
          palette = mLightMedium;
        }
      }
    } else if (configuration.lightPalette === "original") {
      switch (configuration.lightContrast) {
        case "hard": {
          palette = oLightHard;
          break;
        }
        case "medium": {
          palette = oLightMedium;
          break;
        }
        case "soft": {
          palette = oLightSoft;
          break;
        }
        default: {
          palette = oLightMedium;
        }
      }
    }
  }
  return palette;
}
