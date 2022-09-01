import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// 

const ListTodo = (props) => {
  const [line,setLine]=useState(false);
  const cutIt =()=>{
    setLine(true);
  }


    return (
        <>
        <div className="todo_style">
            <span onClick={cutIt} >
            <EditIcon className='deleteicon'  />
            </span>
            <span onClick={()=>{
              props.onsubmit(props.id);
            }} >
              
            <DeleteIcon className='deleteicon'  />
            </span>
            <li style={{textDecoration:line?'line-through':'none'}} > {props.item} </li>
            
        </div>
        </>
    );
}

export default ListTodo;
