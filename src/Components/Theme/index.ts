import { createTheme } from '@mui/material/styles';
import createPalette from '@mui/material/styles/createPalette';
import { createBreakpoints } from '@mui/system';

const defaultTheme = createTheme();

const palette = createPalette({
  primary: {
    main: '#168D63',
  },
  secondary: {
    main: '#095134',
  },
  titles: {
    main: '#9F9F9F',
  },
});

const breakpoints = createBreakpoints({
  values: {
    ...defaultTheme.breakpoints.values,
    'iphone-5-SE': 320,
    'iphone-6-7-8': 375,
    'iphone-6-7-8-plus': 414,
  },
});

const theme = createTheme({ palette, breakpoints });

export const LiderTheme = () =>
  createTheme({
    ...theme,
    typography: {
      fontFamily: ["Open Sans", "Poppins", "sans-serif"].join(","),
      htmlFontSize: 10,
    },
  });

declare module '@mui/material/styles' {
  interface Palette {
    subTitles: Palette['primary'];
    titles: Palette['primary'];
  }

  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    subTitles?: PaletteOptions['primary'];
    titles?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    'iphone-6-7-8': true;
    'iphone-6-7-8-plus': true;
    'iphone-5-SE': true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionSubtitle: true;
  }
}
