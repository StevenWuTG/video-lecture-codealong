import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Header'


function App() {
  const instructor_names = ["Steven","Caryn", "Greg", "Tashawn"]
  return (
    
  
  <Header instructors={instructor_names}/>
  
  
  );
}

export default App;
