import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [heading,setHeading] = useState("");
const [textarea,setTextarea] =useState("");
const [lista, setLista] = useState([
  {
    heading: "Buy groceries",
    textarea: "Milk, eggs, bread, and fruits"
  },
  {
    heading: "Workout plan",
    textarea: "Monday: Chest\nTuesday: Back"
  },
  {
    heading: "Meeting notes",
    textarea: "Discuss project roadmap and deadlines with team"
  },
  {
    heading: "Books to read",
    textarea: "Atomic Habits, Deep Work, The Pragmatic Programmer"
  },
  {
    heading: "Birthday reminder",
    textarea: "Don't forget Sarah's birthday on 15th October!"
  }
]);


function f(){
  setLista(prev => [...prev,{heading,textarea}]);
  console.log(lista);
}

function f2(id){
setLista(prev => prev.filter((el,index)=>index!=id));
console.log(lista);
}


  return (
    <div>
      <Header />
      <CreateArea heading={heading} setHeading={setHeading} setTextarea={setTextarea} textarea={textarea} onClick={f}/>
      {lista.map((el,index)=><Note title={el.heading} content = {el.textarea} key={index} id={index} onDelete={f2}/>)}
      <Footer />
    </div>
  );
}

export default App;
