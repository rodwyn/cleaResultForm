import { createMuiTheme } from '@material-ui/core/styles';
import { poppinsRegular } from './Fonts';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppinsRegular],
      },
    },
  },
});
