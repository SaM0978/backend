import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Abdus Samad",
    class: "9F",
  };

  return (
    <NoteContext.Provider value={{ state }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
