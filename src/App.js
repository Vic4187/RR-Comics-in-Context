import React from 'react';
import './App.css'
import './index.css';
import UserInterface from "./Components/UserInterface";
import StyleContext from "./Components/StyleContext";


function App() {
  const styling = {
    background: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15
  };


  return (
    <main>
      
      <StyleContext.Provider value={styling}>
        <h1
          style={{
            color: "#FEE001",
            webkitTextStroke: "1px black",
            fontFamily: "Luminari, fantasy",
            fontSize: 60
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StyleContext.Provider>

    </main>

  );
}

export default App;