import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: 'blue',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
      },
    },
    Paper: {
      defaultProps: {
        shadow: 'xs',
        radius: 'md',
      },
    },
  },
});
