import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.PartsOfSpeech}</h2>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}> 
            <p>
            {definition.definition} <br />
            <em>
              {definition.example}
            </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}