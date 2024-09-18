// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      title: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      19: '19px',
      20: '20px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      28: '28px',
      29: '29px',
      30: '30px',
      31: '31px',
      32: '32px',
      33: '33px',
      34: '34px',
      36: '36px',
      37: '37px',
      40: '40px',
      41: '41px',
      44: '44px',
      45: '45px',
      48: '48px',
      51: '51px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      80: '80px',
      81: '81px',
      96: '96px',
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
        green: '#E0FF20',
      },
      secondary: {
        green: '#D5FF00',
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
        'cta-card-bg':
          'linear-gradient(-20deg, rgba(15, 17, 14, 0.00) 58.27%, rgba(15, 17, 14, 0.54) 71.43%, rgba(15, 17, 14, 0.54) 81.9%, rgba(15, 17, 14, 0.60) 89.94%), linear-gradient(146deg, rgba(15, 17, 14, 0.00) 80.43%, rgba(15, 17, 14, 0.25) 86.19%, rgba(15, 17, 14, 0.51) 90.94%), linear-gradient(187deg, rgba(15, 17, 14, 0.00) 62.07%, rgba(15, 17, 14, 0.46) 75.4%, rgba(15, 17, 14, 0.51) 86.37%)',
        'cta-card-bg-sm':
          'linear-gradient(-20deg, rgba(15, 17, 14, 0.00) 58.27%, rgba(15, 17, 14, 0.54) 71.43%, rgba(15, 17, 14, 0.54) 81.9%, rgba(15, 17, 14, 0.60) 89.94%), linear-gradient(146deg, rgba(15, 17, 14, 0.00) 80.43%, rgba(15, 17, 14, 0.25) 86.19%, rgba(15, 17, 14, 0.51) 90.94%), linear-gradient(190deg, rgba(15, 17, 14, 0.1) 56.07%, rgb(15 17 14 / 51%) 75.4%, rgb(15 17 14 / 56%) 86.37%)',
        'hero-sm':
          'linear-gradient(146deg, rgba(15, 17, 14, 0.00) 62.4%, rgba(15, 17, 14, 0.10) 82.15%), linear-gradient(341deg, rgba(15, 17, 14, 0.00) 37.35%, rgba(15, 17, 14, 0.50) 51.02%, rgba(15, 17, 14, 0.50) 59.53%, rgba(15, 17, 14, 0.89) 91.15%)',
      }),
      boxShadow: {
        'sources-card': '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
        'sun-icon': '0px 0px 8px 4px rgba(4, 4, 6, 1)',
        'mission-sticker': '0px 2px 4px 0px rgba(0, 0, 0, 0.20)',
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
