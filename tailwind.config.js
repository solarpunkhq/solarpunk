// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      title: ['var(--font-esbuild)', ...defaultTheme.fontFamily.sans],
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
      25: '25px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      42: '42px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52: '52px',
      55: '55px',
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
      snug: '-0.03em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.04em',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#040406',
      white: '#FFFFFF',
      primary: {
        green: '#D5FF00',
      },
      secondary: {
        1: '',
      },
      gray: {
        5: '#0B0C0E',
        8: '#121317',
        12: '#1C1D22',
        20: '#2E3038',
        30: '#464853',
        40: '#5E616E',
        50: '#777A88',
        60: '#9194A1',
        70: '#ABAEBB',
        80: '#C7C9D1',
        90: '#E3E4E9',
        94: '#EEEFF1',
        98: '#F9FAFB',
      },
    }),
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
    extend: {
      backgroundImage: () => ({
        'sources-card-bg':
          'linear-gradient(160deg, rgba(153, 153, 153, 0.40) 9.03%, rgba(255, 255, 255, 0.10) 97.76%)',
        'sources-card-border':
          'conic-gradient( from 0deg, rgba(255, 255, 255, 0.47) 15%, rgba(255, 255, 255, 0.10) 24%, rgba(255, 255, 255, 1.00) 47%, rgba(255, 255, 255, 0.30) 71%, rgba(255, 255, 255, 0.10) 81%, rgba(255, 255, 255, 0.60) 100%)',
        'sun-icon-bg': 'linear-gradient(180deg, #FFDE6B 0%, #FF7511 117.52%)',
      }),
      boxShadow: {
        'sources-card': '0px 4px 20px 0px rgba(0, 0, 0, 0.08);',
        'sun-icon': '0px 0px 1.982px rgba(216, 143, 0, 0.48)',
      },
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
