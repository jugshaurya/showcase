import {
  primary,
  neutral,
  dark_primary,
  warning,
  error,
  success,
} from './colors';
import { fontfamily } from './typography';

const baseTheme = {
  primaryFont: fontfamily.normal,
  crazyFont: fontfamily.crazy,
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300],
  },
  disabled: neutral[400],
  textOnDisabled: neutral[300],
};
// light theme
// primary_light.png
export const defaultTheme = {
  ...baseTheme,
  backgroundColor: neutral[100],
  backgroundColor_2: primary[100],
  backgroundColor_3: primary[200],

  primaryColor: primary[400],
  primaryColorHover: primary[300],
  primaryColorActive: primary[200],
  textColorOnPrimary: primary[600],

  textColor: primary[600],
  textColorInverted: primary[100],
};

export const darkTheme = {
  ...baseTheme,
  backgroundColor: primary[600],
  backgroundColor_2: dark_primary[600],
  backgroundColor_3: dark_primary[500],

  primaryColor: dark_primary[500],
  primaryColorHover: dark_primary[400],
  primaryColorActive: dark_primary[300],
  textColorOnPrimary: dark_primary[100],

  textColor: dark_primary[100],
  textColorInverted: dark_primary[600],
};
