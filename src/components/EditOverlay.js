import React from "react";
import styles from "./EditOverlay.module.css";

const EditOverlay = ({ noteInfo, setNoteInfo, done, editingError, hideError }) => {

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlay}>
        <div className={styles.editHeading}>Edit Note</div>
        <div className={styles.editNotesSection}>
          <div className={styles.input}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter note title"
              value={noteInfo.title}
              onClick={hideError}
              autoComplete="false"
              autoFocus
              required
              onChange={(event) =>
                setNoteInfo({
                  ...noteInfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
          {editingError && <div className={styles.errorContent}>{editingError}</div>}
          <div className={styles.input}>
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              id="description"
              autoComplete="false"
              placeholder="Enter the note"
              value={noteInfo.description}
              onChange={(event) =>
                setNoteInfo({
                  ...noteInfo,
                  [event.target.name]: event.target.value,
                })
              }
            ></textarea>
          </div>
          <button
            disabled={noteInfo.title === "" || noteInfo.description === ""}
            className={styles.submitButton}
            onClick={() => {
              done(noteInfo);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOverlay;
