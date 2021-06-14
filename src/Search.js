import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";

export default function Search(props) {
  let [searchInput, setSearchInput] = useState(props.defaultKeyword);
  let [searchResults, setSearchResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchInput}`;
    axios.get(apiUrl).then(handleResponse);
    
    const pexelsApiKey = "563492ad6f9170000100000138988854941645cf8f097c7b579b3ecd";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=12`;
    axios
      .get(pexelsApiUrl, { 
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);  
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
      <Photos photos={photos} />
    </div>
  );
  } else {
    load();
    return null;
  }
}