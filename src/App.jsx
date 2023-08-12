import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Sales from './components/Sales';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Release from './components/Release';

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <Release/>
      <About/>
      <Experience/>
      <Sales/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App