import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ note }) => {
  let getTitle = (note) => {
    const title = note.body.split("\n")[0];
    if (title > 45) {
      return title.slice(0, 45);
    }
    return title;
  };
  let getContent = (note) => {
    let title = getTitle(note);
    let content = note.body.replace("\n", " ");
    content = content.replace(title, "");
    if (content.length > 45) {
      return content.slice(0, 45);
    }
    return content;
  };
  let getDate = (note) => {
    return new Date(note.updated).toLocaleDateString();
  };
  return (
    <Link to={`/notes/${note.id}`}>
      <div className="notes-list-item">
        <h1>{getTitle(note)}</h1>
        <p>
          <span> {getDate(note)}</span>
          <span> {getContent(note)}</span>
        </p>
      </div>
    </Link>
  );
};

export default ListItems;
