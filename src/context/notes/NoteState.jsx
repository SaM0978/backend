import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZWMzMTZhZGZhNjk2NWU0ODc5ODkyIn0sImlhdCI6MTcwMzg1NTQwMX0.OZK2erztbixcPgVs9H_pMTi6-wuE2qSGIQu75vii2VA";
  const allnotes = [];
  const [notes, setNotes] = useState(allnotes);

  //  Add Note

  async function getAllNotes() {
    let url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "applicaton/json",
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
        "Content-Type": "applicaton/json",
        "auth-token": token,
      },
      body: JSON.stringify(title, description, tag),
    });

    console.log(title, description, tag);

    const json = await response.json();
    console.log(json);

    console.log("Adding A New Note");
    let note = {
      _id: `659154e67ac9819148feaf48 ${
        ["a", "b", "c"][Math.floor(Math.random() * 3)]
      }`,
      user: "658ec316adfa6965e4879892",
      title: title,
      description: description,
      tag: tag,
      date: "Sun Dec 31 2023 17:17:25 GMT+0530 (India Standard Time)",
      __v: 0,
    };
    setNotes(notes.concat(note));
  }

  async function deleteNote(noteId) {
    let url = `${host}/api/notes/deletenote/${noteId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "applicaton/json",
        "auth-token": token,
      },
    });

    let newNotes = notes.filter((note) => {
      return note._id != noteId;
    });
    setNotes(newNotes);
  }

  async function editNote(id, title, description, tag) {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
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
