import React from "react";
import { HeaderContainer, Title1, BtnImg, SubText } from "../Style";

import { Link, useLocation } from "react-router-dom";

export default function Header({ Title, Subtext }) {
  return (
    <>
      <HeaderContainer>
        <Title1>{Title}</Title1>
        {useLocation().pathname === "/add" ? (
          <Link to="/main">
            <BtnImg src="img/close_btn_2.svg" alt="게시글 추가 버튼" />
          </Link>
        ) : (
          <Link to="/add">
            <BtnImg src="img/add_btn.svg" alt="게시글 추가 버튼" />
          </Link>
        )}
      </HeaderContainer>
      <SubText>{Subtext}</SubText>
    </>
  );
}
