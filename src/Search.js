import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [searchInput, setSearchInput] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchInput}..`);
  }

  function handleInputValue(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" placeholder="Search for something.." onChange={handleInputValue}/>
      </form>
    </div>
  );
}