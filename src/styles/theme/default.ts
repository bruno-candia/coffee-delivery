import { css } from "styled-components";

export const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    background: '#FAFAFA',
    'base-card': '#F3F2F2',
    'base-input': '#EDEDED',
    'base-button': '#E6E6E5',
    'base-hover': '#D7D5D5',
    'base-label': '#8D8686',
    'base-text': '#574F4D',
    'base-subtitle': '#403937',
    'base-title': '#272221',

    'purple-light': '#EBE5F9',
    purple: '#8047F8',
    'purple-dark': '#4B2995',

    'yellow-light': '#F1E9C9',
    yellow: '#DBAC2C',
    'yellow-dark': '#C47F17',


    "red-light": "#F9E5E5",
    red: "#F88080",
    "red-dark": "#B95A5A",
  },
  fonts: {
    titleXL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleM: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,

    titleXS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 700;
    `,

    textL: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textLBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,

    textM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textMBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 700;
    `,

    textS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textSBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: .75rem;
      line-height: 130%;
      font-weight: 700;
      word-spacing: -6%;
    `,



    textXS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
    `,

    tag: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,

    buttonG: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,

    buttonS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
};


