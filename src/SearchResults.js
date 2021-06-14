import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.searchResults) {
    return (
      <div className="SearchResults">
        <section>
          <h2>{props.searchResults.word}</h2>
            {props.searchResults.phonetics.map(function(phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
               );
           })}
        </section>
        {props.searchResults.meanings.map(function(meaning, index) {
          return (
            <section key={index}> 
              <Meaning meaning={meaning} />
            </section>
          );
        })}      
      </div>
      );
    } else {
      return null; 
    }
}