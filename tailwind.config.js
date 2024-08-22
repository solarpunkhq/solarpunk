// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      // FIXME: Add the real project "mono" font family (or remove if it is not used in the project)
      mono: ['', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      46: '46px',
      48: '48px',
      52: '52px',
      56: '56px',
      64: '64px',
      80: '80px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      dense: '1.125',
    },
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // FIXME: Add colors which are used in the project. Make sure that they are prepared
      // in the Figma and followed the naming "primary/secondary/gray-${number}"
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      black: '',
      white: '',
      primary: {
        1: '',
      },
      secondary: {
        1: '',
      },
      gray: {
        1: '',
      },
    }),
    // FIXME: Check if the breakpoints ("screens") are correct for the project
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('tailwindcss-safe-area'),
  ],
};
