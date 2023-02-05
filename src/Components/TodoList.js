import React, { Fragment, useState } from "react";
import {
  TodoListSection,
  TodoHeader,
  ListTitle,
  OtherBtn,
  ListUl,
  Radio,
  TodoLi,
  TodoText,
  DeleteBtn,
  TodoInput,
} from "../Style";

export const Todo = ({ text }) => {
  const handleCreate = () => {};
  const handleUpdate = (id) => {};
  const handleRemove = (index) => {};
  console.log(text);
  return (
    <Fragment>
      <TodoLi>
        <Radio type={"radio"} />
        <TodoText>adsfasdf</TodoText>
        <DeleteBtn
          src="img/close_btn.svg"
          alt="닫기 버튼"
          onClick={(e) => handleRemove(e)}
        ></DeleteBtn>
      </TodoLi>
    </Fragment>
  );
};

export const TodoList = ({ tags, todo }) => {
  return (
    <Fragment>
      {tags.map((e, i) => (
        <TodoListSection>
          <TodoHeader>
            <ListTitle>{e}</ListTitle>
            <OtherBtn src="img/Other_btn.svg" />
          </TodoHeader>
          <ListUl>
            {todo.map((text) => {
              todo.indexOf(text) === i ? (
                <Todo key={i} text={text} />
              ) : (
                <Todo key={i} text={text}></Todo>
              );
            })}
          </ListUl>
        </TodoListSection>
      ))}
    </Fragment>
  );
};

export const TodoHandller = () => {
  return (
    <TodoInput>
      <ListTitle>작업 추가하기</ListTitle>
      <input type="text" placeholder="추가하실 내용을 입력해 주세요." />
    </TodoInput>
  );
};
