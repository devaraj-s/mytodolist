import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons';

function App() {

  const [todo,setTodo] = useState([
    {"id":1,"title":"Task 1","status":false},
    {"id":2,"title":"Task 2","status":false}
  ])

  const [newTask,setNewTask] = useState('');
  const [updateData,setUpdateData] = useState('');

  const addTask = ()=> {

    if(!newTask){
      alert("Please enter task details")
    }

    let num = todo.length + 1;
    let newEntry = {id:num,title:newTask,status:false}
    setTodo([...todo,newEntry])
    
  }

  const deleteTask = (id) =>{

  }

  const markDone  = (id) => {

  }

  const cancelUpdate = (id) =>{

  }

  const changeTask =(event) =>{

  }

  const updateTask = () =>{}


  return (
    <div className="container App">
    <br/><br/>
    <h2> Daily Todo </h2>
    <br/><br/>

      <div className="row">
        <div className="col">
          <input value={newTask} className="form-control form-control-lg" onChange={(e)=>{setNewTask(e.target.value)}}/>
        </div>
  
        <div className="col-auto">
           <button className="btn btn-lg btn-success" onClick={addTask} > Add Task </button>
        </div>
  
      </div>
        <br/>
      {todo && todo.length ? '' : 'No Task ....'}

      {todo.map((task,index)=>{
        return (
         <React.Fragment key = {task.id}>
            <div className="col taskBg">
              <div className = {task.status ? 'done':''}>
                <span className ="taskNumber">{index + 1}</span>
                <span className ="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {/* <span> */}
                {/*   <FontAwesomeIcon icon={faPen} /> */}
                {/* </span> */}
                {/**/}
                <span>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>

          </React.Fragment> 
        )

      })}
    </div>
  );
}

export default App;
