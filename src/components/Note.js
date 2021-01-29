import React from "react";
import styles from "./Note.module.css";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";

const Note = ({ note, deleteNote, editNote }) => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteHeader}>
        <h2>{note.title}</h2>
        <div className={styles.actionButtons}>
          <div className={styles.actionButton}>
            <img src={Edit} alt="Edit" onClick={() => {editNote(note.id)}}/>
          </div>
          <div className={styles.actionButton}>
            <img src={Delete} alt="Delete" onClick={() => {deleteNote(note.id)}}/>
          </div>
        </div>
      </div>
      <div className={styles.noteBody}><p>{note.description}</p></div>
    </div>
  );
};

export default Note;
