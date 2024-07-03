import logo from './logo.svg';
import './App.css';
import CricketScore from './Components/CricketScore';
import SwicthCase from './Components/SwicthCase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cricket' element={<CricketScore></CricketScore>}>

        </Route>
        <Route path='/swicthcase' element={<SwicthCase></SwicthCase>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
