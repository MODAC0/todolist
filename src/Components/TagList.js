//태그기능 구현
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TagsList, ListTitle } from "../Style";
export const TagList = ({ tags, setTags }) => {
  const location = useLocation().pathname;
  const [isOn, setIsOn] = useState("");

  const handleTag = (e) => {
    setIsOn(() => {
      return tags.indexOf(e.target.textContent);
    });
  };

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !tags.includes(event.target.value)
    ) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsList>
        <ListTitle className="title">태그</ListTitle>
        <ul>
          {tags.map((tag, index) => (
            <li
              key={index}
              onClick={(e) => handleTag(e)}
              className={`${index === isOn ? "one-tag" : "tag"}`}
            >
              {tag}
              <img
                src="img/tag_close_btn.svg"
                onClick={() => removeTags(index)}
                className={`tag-close-icon ${
                  location === "/add" ? null : "closebtn-delete"
                }`}
              />
            </li>
          ))}
        </ul>
        <input
          className={location === "/add" ? null : "input-delete"}
          type="text"
          onKeyUp={(e) => {
            addTags(e);
          }}
          placeholder="태그를 입력해 주세요."
        />
      </TagsList>
    </>
  );
};
