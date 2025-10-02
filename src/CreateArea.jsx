import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={(event)=>props.setHeading(event.target.value)} name="title" placeholder="Title" value={props.heading} />
        <textarea onChange={(event)=>props.setTextarea(event.target.value)} name="content" placeholder="Take a note..." rows="3" value={props.textarea}/>
        <button type="button" onClick={props.onClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
