import React, { useState, useEffect } from "react";
import notes from "../assets/data";
import { Link } from "react-router-dom";
import { ReactComponent } from "../assets/arrow-left.svg";
export default function Note(props) {
  const [note, setNote] = useState(null);
  const noteId = props.match.params.id;
  // const currentNote = notes.find(note => note.id == noteId);

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    const response = await fetch(`http://localhost:5000/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async () => {
    await fetch(`http://localhost:5000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    props.history.push("/");
  };

  const submitNote = async () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    updateNote();
    props.history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ReactComponent onClick={submitNote} />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={submitNote}>Done</button>
        )}
      </div>
      <textarea
        onChange={e => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
}
