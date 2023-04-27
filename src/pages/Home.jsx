import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import '../index.css'
import terence from '../assets/terence.jpg'
import img1 from '../assets/img1.jpg'
import heroCircle from '../assets/hero-circle.png'
import oval from '../assets/Oval.png'
import divider from '../assets/Rectangle.png'
import contactCircle from '../assets/contact-circle.png'

function Home() {
  return (
    <>
      {/* <div className="oval">
        <img src={oval} alt="#" />
      </div> */}
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
                <FaGithub className="git" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/terence-smith-24b42739/"
                smooth={true}
                duration={500}
              >
                <FaLinkedin className="linkedin" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        <div
          className="about"
          style={{
            backgroundImage: `url(${heroCircle})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <img src={heroCircle} alt="#" className="heroCircles" /> */}
          <h1>Nice to meet you!</h1>
          <h1>
            I'm <span>Terence Smith.</span>
          </h1>
          <p>
            Based in Atlanta, GA, I'm a full-stack developer <br />
            passionate about building accessible web apps <br />
            that users love.
          </p>
          <Link to="contact" smooth={true} duration={500} className="contact">
            Contact Me
          </Link>
        </div>

        <div className="picture">
          <img src={terence} alt="#" />
        </div>
      </section>
      <div className="divider">
        <img src={divider} alt="#" />
      </div>
      <div className="skills">
        {/* <h1>Skills</h1> */}
        <div className="skill">
          <h3>HTML</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill center">
          <h3>CSS</h3>
          <p>4 Years Experience</p>
        </div>
        <div className="skill end">
          <h3>Javascript</h3>
          <p>2 Years Experience</p>
        </div>
        <div className="skill">
          <h3>React.js</h3>
          <p>2 Years Experience</p>
        </div>
        <div className="skill center">
          <h3>Node.js</h3>
          <p>2 Years Experience</p>
        </div>
        <div className="skill end">
          <h3>Express.js</h3>
          <p>2 Years Experience</p>
        </div>
      </div>
      <div className="project-title">
        Projects
        <div className="project-contact">Contact Me</div>
      </div>
      <div className="projects">
        <div>
          <img className="headshot" src={img1} alt="#" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div>
          <img className="headshot" src={img1} alt="#" />
          <h3>Digital Building</h3>
          <ul>
            <li>React</li>
            <li>Node</li>
            {/* <li>Tailwind CSS</li> */}
          </ul>
        </div>
        <div>
          <img className="headshot" src={img1} alt="#" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <img className="headshot" src={img1} alt="#" />
          <h3>Digital Building</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>

      <div
        className="contact-form"
        // style={{
        //   backgroundImage: `url(${heroCircle})`,
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <div className="contact-info">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how <br /> I could help.
            Please fill in the form, and I'll get <br />
            back to you as soon as possible.
          </p>
        </div>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              // value={name}
              placeholder="Enter your name"
              // onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              // value={name}
              placeholder="Enter your name"
              // onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              // value={name}
              placeholder="Enter your name"
              // onChange={onChange}
            />
          </div>
        </form>
        <div className="circle">
          <img className="contact-circle" src={contactCircle} alt="#" />
        </div>
      </div>
      <div className="divider">
        <img src={divider} alt="#" />
      </div>
      <footer>
        <h3 className="footer-terence">terencesmith</h3>
        <ul className="footer-list">
          <li>
            <Link
              to="https://github.com/terencesmithcodes?tab=repositories"
              smooth={true}
              duration={500}
            >
              <FaGithub className="git" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/terence-smith-24b42739/"
              smooth={true}
              duration={500}
            >
              <FaLinkedin className="linkedin" />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Home
