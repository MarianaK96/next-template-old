import { css } from "styled-components";
import mediaQueries from "./mediaQueries";
import { fontFamilyNames } from "./font";

const { Poppins, Inter } = fontFamilyNames;

const t1Base = {
  fontSize: "3.5rem",
  lineHeight: "3.5rem",

  mq: {
    atTablet: {
      fontSize: "6rem",
      lineHeight: "6.5rem",
    },
    atDesktop: {
      fontSize: "7.5rem",
      lineHeight: "7.5rem",
    },
  },
};

const t2 = {
  fontSize: "2.5rem",
  lineHeight: "3.5rem",

  mq: {
    atTablet: {
      fontSize: "3rem",
      lineHeight: "4rem",
    },
    atDesktop: {
      fontSize: "4rem",
      lineHeight: "5rem",
    },
  },
};

const t3Base = {
  fontSize: "1.3rem",
  lineHeight: "1.9rem",

  mq: {
    atTablet: {
      fontSize: "1.6rem",
      lineHeight: "2.2rem",
    },
    atDesktop: {
      fontSize: "1.7rem",
      lineHeight: "2.5rem",
    },
  },
};

const bmBase = {
  fontSize: "1.25rem",
  mq: {
    atTablet: {
      fontSize: "1.25rem",
    },
    atDesktop: {
      fontSize: "1.25rem",
    },
  },
};

const bxsBase = {
  fontSize: "0.8rem",
  mq: {
    atTablet: {
      fontSize: "1rem",
    },
    atDesktop: {
      fontSize: "1rem",
    },
  },
};

const standardTextStyles = {
  t1: {
    ...t1Base,
    fontFamily: Poppins,
  },
  t2: {
    ...t2,
    fontFamily: Poppins,
  },
  t3: {
    ...t3Base,
    fontFamily: Inter,
  },
  bm: {
    ...bmBase,
    fontFamily: Inter,
  },

  bxs: {
    ...bxsBase,
    fontFamily: Inter,
  },
};

// Add any custom text styling here.
const customTextStyles = {};

const textStyles = {
  ...standardTextStyles,
  ...customTextStyles,
};

const generateTextMediaQueries = (textStyleMediaQueries) =>
  css`
    ${() => mediaQueries.atTablet`
    font-size: ${textStyleMediaQueries.atTablet.fontSize};
    line-height: ${textStyleMediaQueries.atTablet.lineHeight};
  `}
    ${() => mediaQueries.atDesktop`
    font-size: ${textStyleMediaQueries.atDesktop.fontSize};
    line-height: ${textStyleMediaQueries.atDesktop.lineHeight};

  `}
  `;

const text = Object.keys(textStyles).reduce((accum, label) => {
  const textCss = () => css`
    font-family: ${textStyles[label].fontFamily};
    font-size: ${textStyles[label].fontSize};
    line-height: ${textStyles[label].lineHeight};

    ${generateTextMediaQueries(textStyles[label].mq)}
  `;
  return { ...accum, [label]: textCss };
}, {});

export default text;
