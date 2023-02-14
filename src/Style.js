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
    background-color: #F4F7FE;
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
    margin: 10vh auto;
    border-radius: 0.8333vw;
    -webkit-box-shadow: 0px 0px 25px -3px rgba(28,138,235,0.33); 
box-shadow: 0px 0px 25px -3px rgba(28,138,235,0.33);
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
    margin: 0.8vw 0 0 0;
    > .tag {
      width: auto;
      height: 1.25vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.73vw;
      color: #bdd0d9;
      padding: 0 0.4vw;
      border: 1px solid #d8e5ea;
      border-radius: 2vw;
      margin-right: 0.4vw;
      margin-bottom: 0.4vw;
      cursor: pointer;
      > .tag-close-icon {
        cursor: pointer;
        width: 0.5vw;
        margin-left: 0.2vw;
        &.closebtn-delete {
          display: none;
        }
      }
    }
    > .one-tag {
      width: auto;
      height: 1.25vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.73vw;
      padding: 0 0.4vw;
      border: 1px solid #d8e5ea;
      border-radius: 2vw;
      margin-right: 0.4vw;
      margin-bottom: 0.4vw;
      font-weight: 600;
      background-color: #e3f6fd;
      color: #3f778c;
      border: 1px solid #e3f6fd;
      cursor: pointer;
      > .tag-close-icon {
        cursor: pointer;
        width: 0.5vw;
        margin-left: 0.2vw;
        &.closebtn-delete {
          display: none;
        }
      }
    }
  }
  > input {
    border: none;
    width: 100%;
    padding: 1vw 0vw 1vw 1vw;
    color: #666666;
    background-color: #f9fafb;
    margin-top: 0.72vw;
    border-radius: 0.6vw;
    font-size: 0.8vw;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #ced7e0;
      font-size: 0.8vw;
    }
    &.input-delete {
      display: none;
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

// todo: MainPageStyle

export const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1vw;
  padding: 1vw;
  background: #e3f8ff;
  border-radius: 0.6vw;
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.4vw;
  padding-bottom: 1vw;
`;

export const ListTitle = styled.h3`
  font-size: 1vw;
  font-weight: 500;
`;

export const OtherBtn = styled.img`
  height: 1vw;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

//todo: TodoListStyle

export const NoneImg = styled.img`
  margin-top: 4vw;
  width: 100%;
`;
export const ImgText = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  color: #b1b1b1;
  font-size: 0.8333vw;
`;
export const TodoLi = styled.li`
  display: flex;
  width: 100%;
`;
export const Radio = styled.input`
  margin-right: 0.5vw;
  border-radius: 10vw;
`;
export const TodoText = styled.p`
  width: 88%;
  font-size: 0.8vw;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: #666666;
`;
export const DeleteBtn = styled.img`
  cursor: pointer;
  width: 1vw;
  margin-left: 0.5rem;
`;
export const TodoInput = styled.div`
  > h3 {
    margin-top: 2.5vw;
  }
  > input {
    border: none;
    width: 100%;
    color: #666666;
    background-color: #f9fafb;
    padding: 1vw 0vw 6vw 1vw;
    margin-top: 0.72vw;
    border-radius: 0.6vw;
    font-size: 0.8vw;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #ced7e0;
      font-size: 0.8vw;
    }
  }
`;

//todo: SplashStyle
export const SplashLayout = styled.div`
  text-align: center;
`;
export const SplashImg = styled.img`
  width: 100%;
  margin-bottom: 1vw;
`;
export const NextBtn = styled.button`
  font-size: 0.8vw;
  border-radius: 10vw;
  margin-top: 2vw;
  padding: 0.5vw 1.2vw;
  color: white;
  background-color: #57889a;
  cursor: pointer;
`;
