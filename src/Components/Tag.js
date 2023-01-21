//태그기능 구현
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TagsList, ListTitle } from "../Style";

export const TagList = ({ tags, setTags, tagState }) => {
  console.log(useLocation().pathname);
  const [isOn, setIsOn] = useState(false);

  const handleTag = (e) => {
    console.log(e);
    setIsOn(!isOn);
  };

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((element, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !tags.includes(event.target.value)
    ) {
      setTags([...tags, event.target.value]);
      console.log(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsList>
        <ListTitle className="title">태그</ListTitle>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li
              onClick={(e) => handleTag(e)}
              key={index}
              className={`tag ${isOn ? "one-tag" : ""}`}
            >
              <span
                className={`tag-title ${
                  useLocation().pathname === "/add" ? null : "closebtn-delete"
                }`}
              >
                {tag}
              </span>
              <span
                onClick={() => removeTags(index)}
                className="tag-close-icon"
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
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
