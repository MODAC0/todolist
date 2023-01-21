import React, { Fragment, useState } from "react";
import data from "../data.json";
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

export const Todo = () => {
  const [tag, setTag] = useState({});
  const handleCreate = () => {};
  const handleUpdate = (id, data) => {};
  const handleRemove = (id) => {};

  console.log(data[0].title);
  return (
    <Fragment>
      <TodoLi>
        <Radio type={"radio"} />
        <TodoText>{data[0].content.text}</TodoText>
        <DeleteBtn src="img/close_btn.svg" alt="닫기 버튼"></DeleteBtn>
      </TodoLi>
    </Fragment>
  );
};

export const TodoList = () => {
  return (
    <Fragment>
      <TodoListSection>
        <TodoHeader>
          <ListTitle>{data[0].title}</ListTitle>
          <OtherBtn src="img/Other_btn.svg" />
        </TodoHeader>
        <ListUl>
          <Todo />
        </ListUl>
      </TodoListSection>
    </Fragment>
  );
};
