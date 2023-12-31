import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

export default function About() {
  const a = useContext(noteContext);
  return (
    <>
      {" "}
      <div>This is about Abdus Samad and he is in class 9F</div>{" "}
    </>
  );
}
