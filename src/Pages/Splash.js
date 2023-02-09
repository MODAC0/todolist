import React, { Fragment } from "react";
import { ImgText, SplashImg, NextBtn, SplashLayout } from "../Style";
import { Link } from "react-router-dom";

export const Splash = () => {
  return (
    <Fragment>
      <SplashImg src="img/img_main.svg" />
      <SplashLayout>
        <ImgText>나만의 Todo List 만들기</ImgText>
        <Link to="/main">
          <NextBtn>Click</NextBtn>
        </Link>
      </SplashLayout>
    </Fragment>
  );
};
