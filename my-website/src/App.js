import React, { Component } from 'react';
import './App.css';

class homePage extends Component {
  render() {
    return (
      <div class="homePage">
        <header className="home-header">
            <h1>Juliette Rocco</h1>
            <h2>Computer Engineering Student at</h2>
             <a href="https://uwaterloo.ca/future-students/programs/computer-engineering">
             The University of Waterloo</a>
            <div id="social-media">
                <button id="portfolio">Portfolio</button>
                <button id="linkedin">Linkedin</button>
                <button id="github">Github</button>
                <button id="email">Email</button>
            </div>
        </header>
        <div class="navBar">
            <a class="active" href="#homePage">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#standouts">Standouts</a>
            <a href="#Experience">Experience</a>
        </div>
        <div class='content'>
            <div class="aboutMe">
                <h1>Hello, pleasure to meet you! I'm Juliette.</h1>
                <h2 id= 'icon'>**Insert head thing here**</h2>
                <p>**Start talking about myself here</p>
            </div>
            <div class="projects">
                <h2>Projects</h2>
                <p>**list my projects that I'm proud of</p>
            </div>
            <div class="standouts">
                <h2>Standouts</h2>
                <p>**Write all the stuff for standouts here</p>
            </div>
            <div class="experience">
                <h2>Experience</h2>
                <p>Write about experience here</p>
            </div>
        </div>
        <footer>
        <h4>@Juliette Rocco 2019</h4>
        </footer>
    </div>
    );
  }
}

export default homePage;
