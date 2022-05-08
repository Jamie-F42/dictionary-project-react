import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Masthead">
      <h1>Dictionary</h1>
      <Dictionary />
      </div>
      <footer>
        Coded by Jamie Foster <a href="https://github.com/Jamie-F42/dictionary-project-react">Github</a>
      </footer>
    </div>
  );
}

export default App;
