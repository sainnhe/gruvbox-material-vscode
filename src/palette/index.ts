import { default as configuration } from "../configuration";
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

let paletteDark = mDarkHard;
let paletteLight = mLightHard;

if (configuration.palette === "material") {
  switch (configuration.contrast) {
    case "hard": {
      paletteDark = mDarkHard;
      paletteLight = mLightHard;
      break;
    }
    case "medium": {
      paletteDark = mDarkMedium;
      paletteLight = mLightMedium;
      break;
    }
    case "soft": {
      paletteDark = mDarkSoft;
      paletteLight = mLightSoft;
      break;
    }
  }
} else if (configuration.palette === "original") {
  switch (configuration.contrast) {
    case "hard": {
      paletteDark = oDarkHard;
      paletteLight = oLightHard;
      break;
    }
    case "medium": {
      paletteDark = oDarkMedium;
      paletteLight = oLightMedium;
      break;
    }
    case "soft": {
      paletteDark = oDarkSoft;
      paletteLight = oLightSoft;
      break;
    }
  }
}

export default {
  paletteDark: paletteDark,
  paletteLight: paletteLight
};
