import React, { useState, useEffect } from "react";
import AllNotes from "./components/AllNotes";
import NotesHeader from "./components/NotesHeader";
import EditOverlay from "./components/EditOverlay";
import SearchNotes from "./components/SearchNotes";
import Add from "./assets/add.svg";
import styles from "./App.module.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [clearPromptShown, setClearPromptShown] = useState(false);
  const [notesToDisplay, setNotesToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editOverlayShown, setEditOverlayShown] = useState(false);
  const [addNotesSectionShown, setAddNotesSectionShown] = useState(false);
  const [noteInfo, setNoteInfo] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [editNoteInfo, setEditNoteInfo] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes && notes.length >= 0) {
      setNotes(notes);
      setNotesToDisplay(notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const toggleAddNote = () => {
    setAddNotesSectionShown(!addNotesSectionShown);
  };

  const showAddNote = () => {
    setAddNotesSectionShown(true);
  };

  const addNote = (noteInfo) => {
    setNotes((notes) => [...notes, noteInfo].reverse());
    setNotesToDisplay((notes) => [...notes, noteInfo].reverse());
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setNotesToDisplay(updatedNotes);
  };

  const editNote = (id) => {
    const [noteToBeEdited] = notes.filter((note) => note.id === id);
    setEditNoteInfo({
      id: id,
      title: noteToBeEdited.title,
      description: noteToBeEdited.description,
    });
    setEditOverlayShown(true);
  };

  const onEditComplete = () => {
    const updatedNotes = [...notes].map((note) => {
      if (note.id === editNoteInfo.id) {
        note.title = editNoteInfo.title;
        note.description = editNoteInfo.description;
      }
      return note;
    });
    setNotes(updatedNotes);
    setNotesToDisplay(updatedNotes);
  };

  const onNoteSearch = (term) => {
    const searchResults = notesToDisplay.filter((note) =>
      note.title.toLowerCase().includes(term.toLowerCase())
    );
    setNotesToDisplay(searchResults);
    setClearPromptShown(true);
  };

  const clearSearchResults = () => {
    setClearPromptShown(false);
    setNotesToDisplay(notes);
    setSearchTerm("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.notesSubContainer}>
        <NotesHeader
          addNotesSectionShown={addNotesSectionShown}
          showAddNote={toggleAddNote}
          addNote={addNote}
          noteInfo={noteInfo}
          setNoteInfo={setNoteInfo}
        />
        <SearchNotes
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          search={onNoteSearch}
        />
        {clearPromptShown && (
          <div className={styles.clearPrompt}>
            <div className={styles.info}>
              <p>Clear Search Results</p>
              <div className={styles.cancelLogo}>
                <img src={Add} alt="Clear" onClick={clearSearchResults} />
              </div>
            </div>
          </div>
        )}
        <AllNotes
          notes={notesToDisplay}
          showAddNote={showAddNote}
          deleteNote={deleteNote}
          editNote={editNote}
        />
        {editOverlayShown && (
          <EditOverlay
            noteInfo={editNoteInfo}
            setNoteInfo={setEditNoteInfo}
            done={onEditComplete}
            hideOverlay={() => setEditOverlayShown(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
