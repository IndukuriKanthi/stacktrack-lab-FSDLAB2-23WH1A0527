import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import A from './tasks';
import B from './tasksDetails';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<A/>} />
        <Route path = "/tasks/:id" element={<B/>} />
      </Routes>
      </Router>
  );
}

export default App;
