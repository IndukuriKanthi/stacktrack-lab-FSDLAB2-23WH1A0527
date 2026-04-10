import React from 'react';
import {get} from '../api/client';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const {id} = useParams();
  const[d,setD] = useState([]);
  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch('http://bvrithcloud.com/api/tasks/${id}',
    {header:{"x-student-id" : "23WH1A0527"}})
    .then(r => r.json()).then(setD);
  }, [id]);};

  // TODO: Implement any event handlers required by your question set
  if(!d) return "Loading ...";

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      <div>
        <p>{d._id}</p>
        <p>{d.title}</p>
        <p>{d.description}</p>
        <p>{d.status}</p>
      </div>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );

export default QuestionComponent;
