import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [zoomState,setZoomState] =useState(false);
    const [rowState,setRowState] = useState(1);
    function onClick(){
      setRowState(3);
      setZoomState(true);  
    }
  return (
    <div>
      <form className="create-note">
        <input hidden={!zoomState} onChange={(event)=>props.setHeading(event.target.value)} name="title" placeholder="Title" value={props.heading} />
        <textarea onClick={onClick} onChange={(event)=>props.setTextarea(event.target.value)} name="content" placeholder="Take a note..." rows={rowState} value={props.textarea}/>
        <Zoom in={zoomState}><Fab type="button" onClick={()=>{props.onClick(); setRowState(1);setZoomState(false);}}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
