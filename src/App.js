import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Careers from './components/Careers/Careers';
import Industry from './components/Industry/Industry';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Healthcare from './components/Industry/Healthcare/Healthcare';
import Retail from './components/Industry/Retail/Retail';
import './App.css';
import { useState } from 'react';

function App() {

  const navPages = [
    {
      title : "Home",
      url : "/",
      children: []
    },
    {
      title : "About Us",
      url : "/aboutUs",
      children: []
    },
    {
      title : "Industry",
      url : "/industry",
      children: [
        {
          title : "Healthcare + Life SciencesRetail",
          url : "/healthcare",
        },
        {
          title : "Retail",
          url : "/retail",
        }
      ]
    },
    {
      title : "Careers",
      url : "/careers",
      children: []
    }
  ];

  const [currPage, setCurrPage] = useState("Home");

  return (
    <div className="App">
      <div className = "app-headder">
        <Header activePage={currPage} pages={navPages} setActivePage={setCurrPage}/>
      </div>
      <div className="App-body">
        <Routes>
          <Route path = "/" Component = {Home}  />
          <Route path = "/aboutUs" Component = {AboutUs}/>
          <Route path = "/careers" Component = {Careers}/>
          <Route path = "/industry" Component={Industry}/>
          <Route path = "/healthcare" Component={Healthcare}/>
          <Route path = "/retail" Component={Retail}/>
          <Route path = "/contact" Component={Contact}/>
        </Routes>
      </div>
      <Footer navPages={navPages} setActivePage={setCurrPage}/>
    </div>
  );
}


export default App;
