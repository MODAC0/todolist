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

export const Todo = ({ cate, list }) => {
  console.log(cate);
  const handleUpdate = (id) => {};
  const handleRemove = (index) => {};
  return (
    <Fragment>
      {list.map((data, i) => {
        if (data.cate === cate)
          return (
            <TodoLi key={i}>
              <Radio type={"radio"} />
              <TodoText>{data.todo}</TodoText>
              <DeleteBtn
                src="img/close_btn.svg"
                alt="닫기 버튼"
                onClick={(e) => handleRemove(e)}
              ></DeleteBtn>
            </TodoLi>
          );
      })}
    </Fragment>
  );
};

export const TodoList = ({ tags, todo }) => {
  console.log(todo);
  console.log(tags);
  return (
    <Fragment>
      {tags.map((cate, i) => (
        <TodoListSection key={i}>
          <TodoHeader>
            <ListTitle>{cate}</ListTitle>
            <OtherBtn src="img/Other_btn.svg" />
          </TodoHeader>
          <ListUl>
            <Todo cate={cate} list={todo} />
          </ListUl>
        </TodoListSection>
      ))}
    </Fragment>
  );
};

export const TodoHandller = () => {
  const createTodo = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
    }
  };
  return (
    <TodoInput>
      <ListTitle>작업 추가하기</ListTitle>
      <input
        onKeyUp={(e) => createTodo(e)}
        type="text"
        placeholder="추가하실 내용을 입력해 주세요."
      />
    </TodoInput>
  );
};
