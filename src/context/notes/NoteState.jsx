import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZWMzMTZhZGZhNjk2NWU0ODc5ODkyIn0sImlhdCI6MTcwNDA4NTA5MX0.UIk4TRuCUPWHLkt-GXuZPTr10lp8o7jt1bgJvf4qwC4"; // Replace with your actual auth token
  const allnotes = [];
  const [notes, setNotes] = useState(allnotes);

  // Add Note
  async function getAllNotes() {
    let url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });

    const json = await response.json();
    setNotes(json);
  }

  async function addNote(title, description, tag) {
    let url = `${host}/api/notes/addnote/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }), // Corrected the request body
    });

    const json = await response.json();
    let note = json;
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  async function deleteNote(noteId) {
    let url = `${host}/api/notes/deletenote/${noteId}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });

    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
  }

  async function editNote(id, title, description, tag) {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    console.log("Updating Note");

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : { ...note }
      )
    );
  }

  // Note CRUD
  let notesCRUD = {
    addNote,
    deleteNote,
    editNote,
    getAllNotes,
  };

  return (
    <NoteContext.Provider value={{ notes, notesCRUD }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
