import React from "react";
import Search from "../assets/magnifying-glass.svg";
import styles from "./SearchNotes.module.css";

const SearchNotes = ({ searchTerm, setSearchTerm, search }) => {
  return (
    <div className={styles.searchNotesContainer}>
      <div className={styles.searchLogo}>
        <img src={Search} alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Search Notes"
        name="search"
        autoComplete="false"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className={styles.searchInput}
      />
      <button onClick={search.bind(null, searchTerm)} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchNotes;
