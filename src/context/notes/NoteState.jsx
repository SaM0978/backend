import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notes = [
    {
      _id: "658fac054d794168d9e7b662",
      user: "658ec316adfa6965e4879892",
      title: "My Title",
      description: "Please Wake Up",
      tag: "Personal",
      date: "1703914501528",
      __v: 0,
    },
    {
      _id: "658fb762ffad9912582332d9",
      user: "658ec316adfa6965e4879892",
      title: "New Note",
      description: "Please Wake Up Early",
      tag: "Personal",
      date: "Sat Dec 30 2023 11:51:05 GMT+0530 (India Standard Time)",
      __v: 0,
    },
    {
      _id: "658fb784ffad9912582332db",
      user: "658ec316adfa6965e4879892",
      title: "Lastest Note",
      description: "Be A Good Boy",
      tag: "Personal",
      date: "Sat Dec 30 2023 11:51:05 GMT+0530 (India Standard Time)",
      __v: 0,
    },
    {
      _id: "659154e67ac9819148feaf48",
      user: "658ec316adfa6965e4879892",
      title: "Lastest Note",
      description: "Be A Good Boy",
      tag: "Personal",
      date: "Sun Dec 31 2023 17:17:25 GMT+0530 (India Standard Time)",
      __v: 0,
    },
  ];

  return (
    <NoteContext.Provider value={{ notes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
