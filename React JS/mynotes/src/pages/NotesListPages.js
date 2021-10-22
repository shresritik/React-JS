import React, { useState, useEffect } from "react";
// import notes from "../assets/data";
import ListItems from "../components/ListItems";
import AddButton from "../components/AddButton";

const NotesListPages = () => {
  const [notes, setNotes] = useState([]);

  let getNotes = async () => {
    // for json server
    // let response = await fetch("http://localhost:8000/notes");
    let response = await fetch("/api/notes");
    let data = await response.json();
    setNotes(data);
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <ListItems key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPages;
