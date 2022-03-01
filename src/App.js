import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import ClassesList from './pages/Classes/ClassesList';
import Students from './pages/Students/Students';

function App() {
  return (
    <div className="app">
          {/* <Home /> */}
          {/* <ClassesList /> */}
          <Students />
    </div>
  );
}

export default App;
