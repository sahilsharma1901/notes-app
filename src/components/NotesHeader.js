import React from "react";
import Add from "../assets/add.svg";
import Up from "../assets/chevron-arrow-up.svg";
import styles from "./NotesHeader.module.css";

const NotesHeader = ({ addNotesSectionShown, showAddNote, addNote, noteInfo, setNoteInfo, hideError }) => {

  return (
    <div className={styles.notesHeaderContainer}>
      <div className={styles.notesHeader}>
        <h2>Notes</h2>
        <div
          className={styles.addIconContainer}
          onClick={showAddNote}
        >
          <img src={addNotesSectionShown ? Up : Add} alt="Add a note" />
        </div>
      </div>
      <div
        className={styles.addNotesSection}
        style={{
          display: addNotesSectionShown ? "block" : "none"
        }}
      >
        <div className={styles.input}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onClick={hideError}
            placeholder="Enter note title"
            value={noteInfo.title}
            required
            autoFocus
            autoComplete="false"
            onChange={(event) =>
              setNoteInfo({
                ...noteInfo,
                [event.target.name]: event.target.value,
                id: Math.random() * Math.random() * 9
              })
            }
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            autoComplete="false"
            name="description"
            id="description"
            placeholder="Enter the note"
            value={noteInfo.description}
            onChange={(event) =>
              setNoteInfo({
                ...noteInfo,
                [event.target.name]: event.target.value,
                id: Math.random() * Math.random() * 9
              })
            }
          ></textarea>
        </div>
        <button disabled={noteInfo.title === "" || noteInfo.description === ""} className={styles.submitButton} onClick={() => {
          addNote(noteInfo);
          showAddNote(noteInfo);
        }}>Save</button>
      </div>
    </div>
  );
};

export default NotesHeader;
