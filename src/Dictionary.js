import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
let [keyword, setKeyword]= useState("");
let [results, setResults]= useState(null);
let [photos, setPhotos]= useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }

   function search(event){
       event.preventDefault();
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
       axios.get(apiUrl).then(handleResponse);

       let pexelsApiKey =
         "563492ad6f91700001000001f11616d6814b43288535dca2baba3f0e";
         let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
         let headers = { Authorization: `Bearer ${pexelsApiKey}` };
         axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
   } 

   function handleKeywordChange(event){
       setKeyword(event.target.value);
   }

   return (
     <div className="Search">
       <div className="Dictionary">
         <form onSubmit={search}>
           <input type="search" onChange={handleKeywordChange} />
           <button type="submit">Search</button>
         </form>
       </div>
       <br />
       <br />
       <br />
       <Results results={results} />
       <Photos photos={photos} />
     </div>
   );
}