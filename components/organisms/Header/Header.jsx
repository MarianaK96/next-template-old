import { HeaderCategories } from "components/atoms";
import { HeaderStyles, LogoProxy } from "./Header.styles";

const Header = () => {
  return (
    <HeaderStyles>
      <LogoProxy />
      <HeaderCategories />
    </HeaderStyles>
  );
};

export default Header;
