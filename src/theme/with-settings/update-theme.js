import COLORS from '../core/colors.json';
import { createPaletteChannel } from '../styles';
import PRIMARY_COLOR from './primary-color.json';
import SECONDARY_COLOR from './secondary-color.json';
import { primary as corePrimary, secondary as coreSecondary } from '../core/palette';
import { createShadowColor, customShadows as coreCustomShadows } from '../core/custom-shadows';

// ----------------------------------------------------------------------

const PRIMARY_COLORS = {
  default: COLORS.primary,
  preset1: PRIMARY_COLOR.preset1,
  preset2: PRIMARY_COLOR.preset2,
  preset3: PRIMARY_COLOR.preset3,
  preset4: PRIMARY_COLOR.preset4,
  preset5: PRIMARY_COLOR.preset5,
};

const SECONDARY_COLORS = {
  default: COLORS.secondary,
  preset1: SECONDARY_COLOR.preset1,
  preset2: SECONDARY_COLOR.preset2,
  preset3: SECONDARY_COLOR.preset3,
  preset4: SECONDARY_COLOR.preset4,
  preset5: SECONDARY_COLOR.preset5,
};

// ----------------------------------------------------------------------

export function updateCoreWithSettings(theme, settings) {
  const { colorSchemes, customShadows } = theme;

  const updatedPrimary = getPalette(
    settings.primaryColor,
    corePrimary,
    PRIMARY_COLORS[settings.primaryColor]
  );

  const updatedSecondary = getPalette(
    settings.primaryColor,
    coreSecondary,
    SECONDARY_COLORS[settings.primaryColor]
  );

  return {
    ...theme,
    colorSchemes: {
      ...colorSchemes,
      light: {
        palette: {
          ...colorSchemes?.light?.palette,
          primary: updatedPrimary,
          secondary: updatedSecondary,
        },
      },
      dark: {
        palette: {
          ...colorSchemes?.dark?.palette,
          primary: updatedPrimary,
          secondary: updatedSecondary,
        },
      },
    },
    customShadows: {
      ...customShadows,
      primary:
        settings.primaryColor === 'default'
          ? coreCustomShadows('light').primary
          : createShadowColor(updatedPrimary.mainChannel),
      secondary:
        settings.primaryColor === 'default'
          ? coreCustomShadows('light').secondary
          : createShadowColor(updatedSecondary.mainChannel),
    },
  };
}

// ----------------------------------------------------------------------

function getPalette(name, initialPalette, updatedPalette) {
  return name === 'default' ? initialPalette : createPaletteChannel(updatedPalette);
}
