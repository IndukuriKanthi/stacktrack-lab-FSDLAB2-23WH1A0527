import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionComponent from './components/question/QuestionComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/tasks/:id" element={<QuestionComponent/>} />
      </Routes>
      </Router>
  );
}

export default App;
