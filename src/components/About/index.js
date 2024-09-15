import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a highly motivated software developer with a diverse background
            that equips me to collaborate effectively in teams, approach
            problems with a strategic mindset, and apply my technical expertise
            to overcome any challenge
          </p>

          {/* Add a new section for languages and progress bars */}
          <div className="skills-section">
            <h2>Languages/Frameworks</h2>
            <div className="language-bar">
              <span>Java: 3 years</span>
              <div className="progress-bar java"></div>
            </div>
            <div className="language-bar">
              <span>Python: 3 years</span>
              <div className="progress-bar python"></div>
            </div>
            <div className="language-bar">
              <span>HTML/CSS/JS: 3 years</span>
              <div className="progress-bar html-css-js"></div>
            </div>
            <div className="language-bar">
              <span>SQL: 2 years</span>
              <div className="progress-bar sql"></div>
            </div>
            <div className="language-bar">
              <span>C: 1 year</span>
              <div className="progress-bar c"></div>
            </div>
            <div className="language-bar">
              <span>NodeJS: 1 year</span>
              <div className="progress-bar node"></div>
            </div>
            <div className="language-bar">
              <span>React: 1 year</span>
              <div className="progress-bar react"></div>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
