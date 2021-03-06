import React from "react";
import { Link } from "react-router-dom";

const getTitle = note => {
  const title = note.body.split(`\n`)[0];
  if (title.length > 40) {
    return title.slice(0, 40) + "...";
  }
  return title;
};

const getContent = note => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 40) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};
const getIData = data => {
  return new Date(data.updated).toLocaleDateString();
};
export default function ListItem(props) {
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className="notes-list-item ">
        <h3>{getTitle(props.note)}</h3>
        <p>
          <span>{getIData(props.note)}</span>
          {getContent(props.note)}
        </p>
      </div>
    </Link>
  );
}
