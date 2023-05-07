import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../Redux/note/noteSlice";

import "../App.css";

function Noteslist() {
  const items = useSelector((state) => state.note.items);
  // console.log("<<<<<<<<<<<< items >>>>>>>>>>>>>>", items);
  const searchText = useSelector(state => state.note.search);
  const dispatch = useDispatch();

  const filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="notelist">
      {
        filtered.map(item => (
          <div key={item.id} className={`note ${item.color}`} /* style={{ width: 100, height: 100, borderWidth: 1, borderColor: "black", backgroundColor: `${item.color}` }} */>
            {item.content}
            <button /* className="delete-note" */ onClick={() => dispatch(deleteNote(item.id))}>x</button>
            {/* <div style={{color: "red"}} className="note">
              {item.note}
            </div> */}
          </div>
        ))
      }
    </div>
  );
}

export default Noteslist;
