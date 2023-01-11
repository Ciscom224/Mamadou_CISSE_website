import React from "react";
import bg from '../assets/me.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/home.css'
import { Button } from "bootstrap";
import NavScrollExample from "./components/navbar";
import About from "./components/about";
import Testimorial from "./components/testimorial";
import Resume from "./components/resume";
import Contact from "./components/contact";
export default function Home() {
  return (
    <div className="container-fuild">
      <div className="row home-screen">
        <div className="col-md-4 left-part">
          <div className="btns">
            <button className="bt bt_resume">Get Resume</button>
            <button className="bt btn-hide">Hide Me</button>
          </div>
          <img src={bg}/>
        </div>
        <div className="col-md-8">
          <NavScrollExample/>
          {/* <h1>deifilement des les </h1> */}

          <div className="container box-content">
            <section id="#">
              <h1>Home</h1>
            </section>
            <About/>
            <Resume/>
            <Testimorial/>
            <Contact/>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
