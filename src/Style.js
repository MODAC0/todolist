import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// todo: 전역스타일
export const GlobalStyle = createGlobalStyle`
*, *::before,*::after{
    box-sizing: border-box;
    border: none;
    list-style: none;
    padding: 0;
    margin: 0;
    letter-spacing: -0.02;
}
html {
    background-color: #f0f0f0;
    width: 100%;
}
body {
  padding: 1.5vw 1.25vw 0 1.25vw;
    background-color: #ffffff;
    font-family: 'Pretendard';
    overflow: hidden; 
    left: 0; 
    top: 0; 
    width: 20vw;
    height: 42vw;
    margin: 5vw auto;
    border-radius: 0.8333vw;
}
`;

// todo: tagStyle
export const TagsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  > .title {
    margin-top: 2.5vw;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0 0 0;
    > .tag {
      width: auto;
      height: 1.25vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.73vw;
      color: #bdd0d9;
      padding: 0 0.61vw;
      border: 1px solid #d8e5ea;
      border-radius: 2em;
      margin-right: 0.63em;
      margin-bottom: 0.63em;
      cursor: pointer;
      :active {
        background-color: #e3f6fd;
        color: #3f778c;
      }
      > .tag-close-icon {
        display: block;
        width: 0.6vw;
        height: 1vw;
        text-align: center;
        margin-left: 0.6vw;
        color: #bdd0d9;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        & .closebtn-delete {
          display: none;
        }
      }
      > :active {
        background-color: #e3f6fd;
        border: none;
        color: #3f778c;
      }
    }
  }
  > input {
    border: none;
    width: 100%;
    height: 40px;
    color: #666666;
    background-color: #f9fafb;
    padding-left: 1.2em;
    margin-top: 0.88rem;
    border-radius: 30em;
    ::placeholder {
      color: #ced7e0;
    }
  }
`;

// todo: HeaderStyle
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 1.6667vw;
  line-height: 1.6667vw;
  color: #3f778c;
`;
export const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 0.0781vw;
  color: #b1b1b1;
  font-size: 0.8333vw;
  margin-top: 1vw;
`;
export const PlusLink = styled(Link)``;

//작업 추가 버튼 구현
export const BtnImg = styled.img`
  width: 1.5625vw;
  cursor: pointer;
  &.removeBtn {
    display: none;
  }
`;

// todo: TodoListStyle

export const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.25rem;
  padding: 1.25rem;
  background: #e3f8ff;
  border-radius: 1rem;
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em 0;
`;

export const ListTitle = styled.h3`
  font-size: 1.0417vw;
  font-weight: 500;
`;

export const OtherBtn = styled.img``;

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

//todo: TodoStyle

export const Radio = styled.input`
  margin-right: 0.5%;
`;
export const TodoLi = styled.li`
  display: flex;
  width: 100%;
  padding: 0.5em 0;
`;
export const TodoText = styled.p`
  width: 88%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: #666666;
`;
export const DeleteBtn = styled.img`
  cursor: pointer;
  margin-left: 0.5rem;
`;
