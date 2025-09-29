import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../data/notes";


export default function App() {
    
  return (
    <div>
      <Header />
      {notes.map(el=><Note key={el.key} title={el.title} content={el.content}/>)}
      <Footer />
    </div>
  );
}
