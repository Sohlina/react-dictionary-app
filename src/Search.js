import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Search(props) {
  let [searchInput, setSearchInput] = useState(props.defaultKeyword);
  let [searchResults, setSearchResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setSearchResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchInput}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInputValue(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
    <div className="Search">
      <section>
        <h1>what do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search for something.." onChange={handleInputValue} />
          </form>
          <div className="example-words">
            example: pasta, chocolate, dog, travel.. 
          </div>
        </section>
      <SearchResults searchResults={searchResults} />
    </div>
  );
  } else {
    load();
    return null;
  }
}