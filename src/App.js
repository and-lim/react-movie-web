import React from 'react';
import Movie from './Components/Movie';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
        {/* <Route path='*' element={<NotFound/>}></Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
