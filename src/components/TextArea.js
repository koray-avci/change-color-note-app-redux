import { useState } from "react";
import { nanoid } from '@reduxjs/toolkit'
import Notelist from "./NoteList";
import { Selected } from "./Icons"
import { useDispatch, useSelector } from "react-redux";
import { addNote, changeColor } from "../Redux/note/noteSlice";

import "../App.css";

function TextArea() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const colors = useSelector((state) => state.note.colors)
  const state = useSelector((state) => state)
  const selectedColor = useSelector((state) => state.note.selectedColor);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note) {
      alert("Your note is empty. Please type your note and try again!");
      return;
    }
    else if (!selectedColor) {
      alert("Please select a color for your note and try again!");
      return;
    }
    await dispatch(addNote({ id: nanoid(), content: note, color: selectedColor.name }))
    setNote('');
  };

  return (
    <div className="form">
      <textarea
        id="note"
        rows="7"
        className="textarea"
        placeholder="Enter your note here..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />

      <div className="form-bottom">
        <div className="colors">
          {
            colors.map((color) => (
              <button key={color.id} className={color.name} onClick={() => dispatch(changeColor({ id: color.id }))}>
                {color.isChecked && <Selected />}
              </button>
            ))
          }
        </div>
        <button className="button-add" onClick={handleSubmit}>Add</button>
      </div>

      <Notelist />
    </div>
  );
}

export default TextArea;
