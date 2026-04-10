import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
function Home(){
  const[tasks,setTasks] = useState([]);
  useEffect(()=>{
    fetch("http://bvrithcloud.com/api/tasks",
      {headers:{"x-student-id":"23WH1A0527"}}
    )
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      setTasks(res.data);
    })
    .catch(err=>console.log(err));
  },[]);

  return(
    <div>
      <h1>FSD LAB</h1>
      <h2>Tasks</h2>
      {tasks.map(task=>(
        <div key = {tasks._id}>
          <Link to={`/tasks/${task._id}`}>{task.title}</Link>
        </div>
      ))}
      </div>
  );
}

export default Home;