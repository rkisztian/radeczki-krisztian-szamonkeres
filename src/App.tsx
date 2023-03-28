import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Fooldal from './Pages/fooldal';
import Tapasztalat from './Pages/tapasztalat';
import Idopont from './Pages/idopont';
import Navigacio from './components/navbar';
import Lablec from './components/footer';



class App extends Component {
  render() {


    return<div>
      <Navigacio />

      <Routes>
        <Route path='/' element={<Fooldal></Fooldal>} />
        <Route path='/tapasztalat' element={<Tapasztalat></Tapasztalat>} />
        <Route path='/idopont' element={<Idopont></Idopont>} />
      </Routes>

    <Lablec />
    </div>
  }

}

export default App;
