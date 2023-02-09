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
} from "../Style";

export const Todo = ({ cate, list }) => {
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
