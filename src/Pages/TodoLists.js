import React from "react";
import Header from "../Components/Header";
import { TodoList } from "../Components/TodoList";
import { TagList } from "../Components/Tag";

export const TodoLists = ({ tags, setTags }) => {
  return (
    <>
      <Header
        Title={"오늘의 할 일"}
        Subtext={"자정이 지나면 달성한 할 일들이 초기화 돼요!"}
      ></Header>
      <TagList tags={tags} setTags={setTags} />
      <TodoList />
    </>
  );
};
