import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

export default function AddNote() {
  const context = useContext(noteContext);
  const { notes, notesCRUD } = context;
  const { addNote } = notesCRUD;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "Default",
  });
  function handleClick(e) {
    e.preventDefault();
    addNote(note.description, note.title, note.tag);
  }
  function onChange(e) {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <h1>Add A Note</h1>
      <form className="my-3" onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            minLength={1}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </>
  );
}
