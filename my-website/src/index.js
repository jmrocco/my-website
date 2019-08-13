
//TODO-> extracirriculars


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as THREE from "three";



class Document  extends Component
{

    render()
    {
        return(
            <div className="homePage">
                <div id="title-bar">
                  <div className="home-header">
                      <h1>Juliette Rocco</h1>
                      <h2>Computer Engineering Student at <a id='waterlooLink' href="https://uwaterloo.ca/future-students/programs/computer-engineering"target="_blank" rel="noopener noreferrer">
                      The University of Waterloo</a></h2>
                      <div id='social'>
                          <a href="https://jrocco.myportfolio.com/" rel="noopener noreferrer" target="_blank"><svg id="portfolio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg></a>
                          <a href="https://www.linkedin.com/in/julietterocco" rel="noopener noreferrer" target="_blank"><svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                          <a href="https://github.com/jmrocco" rel="noopener noreferrer" target="_blank"><svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                          <a href="mailto:jmrocco@edu.uwaterloo.ca"><svg id="email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg></a>
                      </div>
                  </div>
                  <div className="navBar">
                      <a className="active" href="#about-section">About Me</a>
                      <a href="#project-section">Projects</a>
                      <a href="#cool-section">Extracurriculars</a>
                  </div>
                </div>
                <Shape />
                <div id="content">
                    <About />
                    <div id="project-section"></div>
                    <Projects />
                    <div id="cool-section"></div>
                    <Cool />
                </div>
            </div>
        );
}}

class Shape extends Component
{
  render()
  {
    return(
      <div className="shape">
      <img src={require('./images/jemoji.png')} alt="Juliette emoji" />
      </div>
    );
  }
}


class About extends Component {
  constructor(props) {
    super(props);
    this.loading = this.loading.bind(this);
    this.elRef = React.createRef();
  }

  componentDidMount() {
    this.loading();
  }

  loading() {
    const el = this.elRef.current;
    let i = 0;
    let txt = 'Hello, nice to meet you! I\'m Juliette.';
    let speed = 50;
    function typeWriter() {
      if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  render() {
    return (
      <div className="about">
      <div id="about-section"></div>
        <p id="welcome" ref={this.elRef} />
        <p id="welcome-p">Currently, a student in <strong>Computer Engineering</strong> at The University of Waterloo who is looking to create and be a part of tomorrows future.
        I am a <strong>passionate</strong> and energetic person with a love for technology. Right now I have <strong>6</strong> years
        of programming experience in various areas such as <strong>mobile applications</strong>,<strong> game development</strong>,<strong> desktop tools </strong>
        and <strong>full-stack applications</strong>. I've also dabbeled In hardware creating projects using <strong>Arduino's</strong>,<strong> Raspberry Pi's</strong>,
        and <strong>fuel cells</strong>.
        Asides from technology, I have a variety of interests. I enjoy being outside playing sports such as <strong>tennis</strong> and <strong>soccer</strong>. When I'm not outside you'll find me reading
        <strong> Gone With The Wind</strong>, or <strong>photoshopping</strong> pictures of myself to have flames coming out of my hands. Right now my goal is to learn as many different things
        as I can and make myself into a well rounded engineering student. Please feel free to reach out If you have any questions, I would love to hear from you!</p>
      </div>
    );
  }
}

class Projects extends Component
{
    render()
    {
        return(
            <div id="projects">
                <h1>Projects</h1>
                    <br></br>
                    <strong>Wordpress to Markdown API:</strong>
                    <p>While working at ConsenSys, I created a Wordpress to Markdown Converter. Users submit either an .xml Wordpress file or a link to their Wordpress site.
                    The Wordpress script extracts articles/posts and converts them into a readable Markdown format to be used on the <a href="https://kauri.io/" target="_blank" id="kauri">Kauri.io</a> documentation platform.</p>
                    <br></br>
                    <strong>BankerGoose:</strong>
                    <p>ENGHACK 2019 Interac Best Use of Design Thinking Winner. BankerGoose is a money management application with a twist.
                    Parents have the ability to track their childs progress in regards to chores.
                    As chores are completed, the child is rewarded with their allowance but also with digital money towards a money management game of life.
                    The child is motivated to succeed In the game of life to earn virtual and real rewards. Check out the <a href="https://devpost.com/software/bankergoose" target="_blank">DevPost</a> to learn more!</p>
                    <img id="bankergoose" src={require('./images/bankergoose.png')} alt="BankerGoose" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <strong>Object Detection Hat for The Blind:</strong>
                    <p>A hat for the visually impaired that can detect an obstacle such as a wall and alert It’s user through a series of beeps.
                    This project was created using a cowboy hat, an Arduino Uno, and some sonar sensors.</p>
                    <br></br>
                    <strong>Sims 3 Video Game:</strong>
                    <p>A personal rendition of the popular Sims 3 video game. It has <strike>almost</strike> all the features that the real game has.</p>
                    <img id="simsgame" src={require('./images/sims.png')} alt="Sims" />
                    <br></br>
                    <br></br>
                    <strong>Eco-Sphere</strong>
                    <p>An educational Android app to encourage kids to be excited about recycling. Users are prompted to log when they recycle and as more products
                    are recorded, a virtual polluted environment is cleansed. <img id="eco" src={require('./images/ecoSphere.png')} alt="Eco-Sphere" /> This project was created for ECOding Hacks 2019 at York University. Eco-Sphere placed 2nd overall In Its category.
                    Check out the <a href="https://devpost.com/software/ecosphere" target="_blank">DevPost!</a></p>
                    <strong>Autonomous Maze Robot:</strong>
                    <p>An autonomus robot that was designed to escape a maze. It used sonar sensors to detect it's position from the walls, and
                    based on this information would make a decision about which way to go.</p>
                    <h1>Current Projects</h1>
                    <strong><br></br>Magic Mirror with Google Voice AI:</strong>
                    <p>More details coming soon..</p>

            </div>
        );
    }
}

class Cool extends Component
{
    render()
    {
        return(
            <div id="cool">
            <h1>Extracurriculars</h1>
            <div class ="gallery">
                <div>
                    <img class="picture" src={require('./images/flying.jpg')} alt="Helicopter Ride" />
                </div>
                <div>
                    <img class="picture" src={require('./images/photoshop.jpg')} alt="Soccer" />
                </div>
                <div>
                    <img class="picture" src={require('./images/hackathon.jpg')} alt="EngHack 2019" />
                </div>
                <div>
                    <img class="picture" src={require('./images/lifeguard.jpg')} alt="Lifeguard Photo" />
                </div>
                <div>
                    <img class="picture" src={require('./images/soccer.jpg')} alt="Soccer" />
                </div>
                <div>
                    <img  class="picture" src={require('./images/engineering.jpg')} alt="Engineering" />
                </div>
                <div>
                    <img class="picture" src={require('./images/skyley.JPG')} alt="Skyley" />
                </div>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Document />,document.getElementById('root'));
