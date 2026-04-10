import React from 'react';
import {Link} from 'react-router-dom';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0527';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <h3>Tasks</h3>
      <Link to="/tasks/1">task 1</Link><br/>
      <Link to="/tasks/2">task 2</Link>

      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

    </div>
  );
}

export default Home;
