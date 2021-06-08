import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Search() {
  let [searchInput, setSearchInput] = useState(null);
  let [searchResults, setSearchResults] = useState(null);
  
  function handleResponse(response) {
    console.log(response.data[0]);
    setSearchResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchInput}`;
    axios.get(apiUrl).then(handleResponse);
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
      <SearchResults searchResults={searchResults} />
    </div>
  );
}