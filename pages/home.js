import React, { useState } from "react";
import { Button, Title, Subtitle } from "common_components/atoms";
import { Header, TitleAndBtn } from "components/organisms";
import { HomeWrapper } from "./home.styles";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Header />
        <TitleAndBtn />
      </HomeWrapper>
    </>
  );
};

export default Home;

//wrapper on whole component, not just button and styles
