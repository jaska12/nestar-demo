import { common } from '@mui/material/colors';
import shadow from './shadow';
import typography from './typography';

/**
 * LIGHT THEME (DEFAULT)
 */
export const light = {
  palette: {
    type: 'light',
    background: {
      default: '#f4f6f8',
      paper: common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#E92C28',
    },
    secondary: {
      main: '#1646C1',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      dark: common.black,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '0',
        },
      },
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
        },
      },
    },
  },
  shadow,
  typography,
};
