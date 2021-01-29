import React from "react";
import Note from "./Note.js";
import styles from "./AllNotes.module.css";

const AllNotes = ({ notes, showAddNote, deleteNote, editNote }) => {
  return (
    <div className={styles.allNotesContainer}>
      {notes.length === 0 ? (
        <div className={styles.emptyNotesSection}>
          <div className={styles.emptyInfo}>
            <h3>No notes found!</h3>
            <button onClick={showAddNote}>Add new note</button>
          </div>
        </div>
      ) : (
        <div className={styles.allNotes}>
          {notes.map((note, index) => (
            <Note key={note.id + index} note={note} deleteNote={deleteNote} editNote={editNote}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNotes;
