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
  let dark: Palette, light: Palette;
  if (configuration.palette === "material") {
    switch (configuration.contrast) {
      case "hard": {
        dark = mDarkHard;
        light = mLightHard;
        break;
      }
      case "medium": {
        dark = mDarkMedium;
        light = mLightMedium;
        break;
      }
      case "soft": {
        dark = mDarkSoft;
        light = mLightSoft;
        break;
      }
      default: {
        dark = mDarkMedium;
        light = mLightMedium;
      }
    }
  } else if (configuration.palette === "original") {
    switch (configuration.contrast) {
      case "hard": {
        dark = oDarkHard;
        light = oLightHard;
        break;
      }
      case "medium": {
        dark = oDarkMedium;
        light = oLightMedium;
        break;
      }
      case "soft": {
        dark = oDarkSoft;
        light = oLightSoft;
        break;
      }
      default: {
        dark = oDarkMedium;
        light = oLightMedium;
      }
    }
  }

  if (variant === "dark") {
    return dark;
  } else {
    return light;
  }
}
