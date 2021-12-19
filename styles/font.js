const ManropeFontFile = "";
const EbGaramondWoff = "";
const EbGaramondWoff2 = "";

export const fontFamilyNames = {
  Poppins: '"Poppins"',
  Inter: '"Inter"',
};

const { Poppins, Inter } = fontFamilyNames;

const fontFamilies = `
  @font-face {
    font-family: ${Poppins};
    src: url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  @font-face {
    font-family: ${Inter};
    src: @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
  }
`;

export default fontFamilies;
