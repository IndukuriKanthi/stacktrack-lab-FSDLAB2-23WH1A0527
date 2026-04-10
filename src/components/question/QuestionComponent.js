import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent(){
  // TODO: Define state variables needed for your question set
  const {id} = useParams();
  const[d,setD] = useState({});
  // TODO: Implement data fetching inside a useEffect hook
  useEffect(()=>{
    fetch(`http://bvrithcloud.com/api/tasks/${id}`,
    {headers:{"x-student-id" : "23WH1A0527"}})
    .then(r => r.json())
    .then(res=>{
      console.log(res);
      setD(res.data)
    })
    .catch(err=>console.log(err));
  }, [id]);

  // TODO: Implement any event handlers required by your question set
  if(!d || Object.keys(d).length === 0) return "Loading ...";

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      <div>
        <h2>Task Details</h2>
        <p>id = {d._id}</p>
        <p>title = {d.title}</p>
        <p>description = {d.description}</p>
        <p>status = {d.status}</p>
      </div>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
