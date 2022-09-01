import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ListTodo from './ListTodo';

function App() {
  const [item,setItem]=useState('');
  const [Add,setAdd]=useState([]);
  const inputEvent=(e)=>{
      setItem(e.target.value);
  }
const AddItemCart=()=>{
  if(item!=='')
  {
    setAdd((prevalue)=>{
      return [...prevalue,item];
    })
  }
  else
  {
    alert("Enter Data");
  }
  setItem('');
}
const deleteItem=(id)=>{
     setAdd((prevalue)=>{
        return prevalue.filter((e,i)=>{
          return id!==i;
        })
     })
}
  
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add Item' onChange={inputEvent} value={item} />
          <Button className='newBtn' onClick={AddItemCart}>
            <AddIcon/> 
            </Button>
            <br />
            <ol>
                  {Add.map((e,i)=>{
                      return <>
                         <ListTodo
                          item={e}
                          key={i}
                          onsubmit={deleteItem}
                          id={i}
                         />
                      </>
                  })}
            </ol>
            <br />
        </div>
      </div>

    </>

  );
}

export default App;
