import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Document  extends React.Component
{
    render()
    {
        return(
            <div class="homePage">
                <div id="title-bar">
                  <div className="home-header">
                      <h1>Juliette Rocco</h1>
                      <h2>Computer Engineering Student at <a id='waterlooLink' href="https://uwaterloo.ca/future-students/programs/computer-engineering"target="_blank">
                      The University of Waterloo</a></h2>
                      <div id='social'>
                          <a href="https://jrocco.myportfolio.com/" target="_blank"><svg id="portfolio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg></a>
                          <a href="https://www.linkedin.com/in/julietterocco" target="_blank"><svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                          <a href="https://github.com/jmrocco" target="_blank"><svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                          <a href="mailto:jmrocco@edu.uwaterloo.ca"><svg id="email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg></a>
                      </div>
                      <h2 id= 'icon'>**Insert head thing here**</h2>
                  </div>
                  <div class="navBar">
                      <a id="aboutMe" class="active" href="#welcome">About Me</a>
                      <a id="projects" href="#pj">Projects</a>
                      <a id="standouts" href="#so">Standouts</a>
                      <a id="experience"  href="#work">Experience</a>
                  </div>
                </div>
                <div id="content">
                    <About text={'Hello, nice to meet you! Im Juliette.'} />
                    <Projects />
                    <Standouts />
                    <Experience />
                </div>
            </div>
        );
}}


class About extends React.Component
{

    render()
    {

        return(
            <div class="about">
            <h1 id="welcome">{this.props.text}</h1>
            <p id="aboutMeP">Currently, a student in Computer Engineering at The University of Waterloo who is looking to create and be a part of tomorrows future. I am a passionate and energetic person with a love for computers and technology. With 3+ years of programming experience I am skilled with Visual Basic and am currently expanding to other languages such as C++ and Java. Having worked with complex circuits and Arduino robots, I have a firm grasp in computer hardware. I've worked with Adobe Photoshop and Lightroom for 5+ years intensively to have acquired an intermediate knowledge of graphics and digital design. Asides from my work with technology I am a critical thinker, innovator, dreamer, and team player. Right now I am working to expand my knowledge in all areas of computers as well as life skills and I hope that the people I meet and connect with along the way can help me In my journey.</p>
            </div>
        );
    }
}

class Projects extends React.Component
{
    render()
    {
        return(
            <div class="proj">
                <h2 id="pj">Projects</h2>
                <p>Object Detection Hat for The Blind:
                <ul>
                <li>•	Built and programmed a hat with sonar sensors to detect a wall and alert its visually impaired user with a buzzer.</li>
                Maze Navigating Robot:
                <li>•	Built and programmed a ping sensor robot to navigate its way out of a maze.</li>
                Sims 3 Video Game:
                <li>•	Programmed my own recreation of the Sims 3 video game. Features your own designable character that can navigate around the screen and perform actions.</li>
                Bouncing Ball Android Game:
                <li>•	Designed a basic android app which would take touch user input and use it to make a ball bounce on the screen.</li>
                Sims 3 Fan Website:
                <li>•	Created a full-fledged html Sims 3 fan wiki website using Adobe Dreamweaver. The buttons and logos were all created In Adobe Photoshop.</li>
                </ul>
                </p>
            </div>
        );
    }
}

class Standouts extends React.Component
{
    render()
    {
        return(
            <div class="stand">
            <h2 id="so">Standouts</h2>
            <p>**Write all the stuff for standouts here</p>
            </div>
        );
    }
}

class Experience extends React.Component
{
    render()
    {
        return(
            <div class="exp">
            <h2 id="work">Experience</h2>
            <p>Write about experience here</p>
            </div>
        );
    }
}

ReactDOM.render(<Document />,document.getElementById('root'));
