import Header from "../Components/Header";
import { TagList } from "../Components/TagList";
import { TodoHandller } from "../Components/TodoList";

export const AddPage = ({ tags, setTags }) => {
  return (
    <>
      <Header
        Title="할 일 추가하기"
        Subtext="태그와 작업을 마음껏 만들어 보세요!"
      />
      <TagList tags={tags} setTags={setTags} />
      <TodoHandller />
    </>
  );
};
