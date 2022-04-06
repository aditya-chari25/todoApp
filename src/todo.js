import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import { db } from "./firebase_config";
import './App.css';

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div className="box-styling">
    <div style={{ display: "flex",marginBottom:"20px" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ?<div style={{color:'purple'}}>In Progress</div> : <div style={{color:'green'}}>Completed</div>}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? <i class="fa-regular fa-circle-xmark" style={{fontSize:"25px"}}></i> :  <i class="fa-regular fa-circle-check"  style={{fontSize:"25px"}}></i>}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
    </div>
  );
}