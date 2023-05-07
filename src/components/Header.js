import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { findNote } from "../Redux/note/noteSlice";
import "../App.css";

function Header() {

  const dispatch = useDispatch();
  const search = useSelector(state => state.note.search)

  return (
    <div className="header">
      <h1 className="title">NotesApp</h1>
      <input type="search" className="search-input" placeholder="Search" value={search}
        onChange={(e) => dispatch(findNote(e.target.value))}
      />
    </div>
  );
}

export default Header;
