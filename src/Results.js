import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props){
    if (props.results) {
    return (
    <div className="Results">
            <h2>{props.results.word}<span className="phonetic"> {props.results.phonetic} <a href={props.results.phonetics[0].audio} target="_blank" className="Phonetics">🔊</a> </span></h2>
            {props.results.meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Meaning meaning={meaning} />
                  </div>
                );
            })}
        </div>
    );
} else {
    return null;
}
} 