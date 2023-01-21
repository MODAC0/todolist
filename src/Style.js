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
    letter-spacing: -0.02rem;
}
html {
    background-color: #f0f0f0;
}
body {
    background-color: #ffffff;
    font-family: 'Pretendard';
    overflow: hidden; 
    left: 0; 
    top: 0; 
    width: 23.44em;
    height: 48em;
    margin: 4rem auto;
    border-radius: 1rem;
}
`;

// todo: tagStyle
export const TagsList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1.5em 0.88em 1.25em;
  > .title {
    margin-top: 2.5em;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0 0 0;
    > .tag {
      width: auto;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      color: #bdd0d9;
      padding: 0 0.5rem;
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
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        margin-left: 8px;
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
    flex: 1;
    border: none;
    width: 100%;
    color: #666666;
    background-color: #f9fafb;
    height: 46px;
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
  padding: 2.5em 1.5em 1.25em 1.25em;
`;
export const Title1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -1px;
  color: #3f778c; ;
`;
export const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  color: #b1b1b1;
  font-size: 1em;
  padding: 0 1.25em 0 1.25em;
`;
export const PlusLink = styled(Link)``;

//작업 추가 버튼 구현
export const BtnImg = styled.img`
  width: 30px;
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
  font-size: 1.25rem;
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
  margin-right: 0.5rem;
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
