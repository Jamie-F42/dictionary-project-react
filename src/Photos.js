import React from "react";
import "./Photos.css";

export default function Photos(props) {
    console.log(props.photos);
    if (props.photos){
    return (
        <div className="Photos">
            {props.photos.map(function(photo, index) {
                return (
                <div className="PhotoLoop" key={index}>
                    <a href={photo.src.original} rel="noopener">
                 <img src={photo.src.tiny} className="img-fluid" alt={photo.alt} />
                 </a> 
                 </div>
                );  
            })}
        </div>
    );
} else {
    return null;
}
}