import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import '../index.css'
import terence from '../assets/terence.jpg'

function Home() {
  return (
    <>
      <div className="header">
        <div className="terence">terencesmith</div>
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/terencesmithcodes?tab=repositories"
                smooth={true}
                duration={500}
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/terence-smith-24b42739/"
                smooth={true}
                duration={500}
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        <div className="about">
          <h1>Nice to meet you! I'm Terence Smith.</h1>
          <p>
            Based in Atlanta, GA, I'm a full-stack developer <br />
            passionate about building accessible web apps <br />
            that users love.
          </p>
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </div>
        <div className="picture">
          <img className="headshot" src={terence} alt="#" />
        </div>
      </section>

      <div className="skills">
        {/* <h1>Skills</h1> */}
        <div className="skill">
          <h3>HTML</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill">
          <h3>Javascript</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill">
          <h3>React.js</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill">
          <h3>Node.js</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill">
          <h3>Express.js</h3>
          <p>4 Years Experience</p>
        </div>
      </div>
      <div className="project-title">Projects</div>
      <div className="projects">
        <div>
          <img src="" alt="" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div>
          <img src="" alt="" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        {/* <Contact /> */}
      </div>
      <footer>
        <h3>Terence Smith</h3>
        <ul>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
      </footer>
    </>
  )
}

export default Home
