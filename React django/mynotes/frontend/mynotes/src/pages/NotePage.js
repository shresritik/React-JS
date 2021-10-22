import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import notes from "../assets/data";
import { ReactComponent as ArrowLeft } from "../assets/chevron-left.svg";

const NotesPage = ({ match, history }) => {
  let noteId = match.params.id;
  //   let note = notes.find((note) => note.id === Number(noteId));

  let [note, setNote] = useState(null);

  let getNotes = async () => {
    if (noteId === "new") return;
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${noteId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };
  let createNote = async () => {
    await fetch(`/api/notes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };
  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history.push("/");
  };
  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    history.push("/");
  };
  let handleDelete = () => {
    deleteNote();
  };

  useEffect(() => {
    getNotes();
  }, [noteId]);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button onClick={handleDelete}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotesPage;
