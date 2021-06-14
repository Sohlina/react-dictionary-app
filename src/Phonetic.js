import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
	return (
		<div className="Phonetic">
			{props.phonetic.text} 
			<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
			<i className="far fa-play-circle"></i> Listen
			</a> 
		</div>
	);
}