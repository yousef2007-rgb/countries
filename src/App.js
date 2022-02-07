import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Detailes from './Components/Detailes';
function App() {
  const data = fetch('https://restcountries.com/v3.1/region/ame').then(data => data.json()).then(data => console.log(data));
  
  return (
    <div className="App">
     <Header/>
     <Body/>
     <Detailes/>
    </div>
  );
}

export default App;
