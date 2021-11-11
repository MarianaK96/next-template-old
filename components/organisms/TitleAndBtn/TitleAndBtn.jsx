import { Title, Subtitle, Button } from "common_components/atoms";
import { TitleAndBtnStyles } from "./TitleAndBtn.styles";

const TitleAndBtn = () => {
  return (
    <>
      <TitleAndBtnStyles>
        <Title />
        <Subtitle />
        <Button />
      </TitleAndBtnStyles>
    </>
  );
};

export default TitleAndBtn;
