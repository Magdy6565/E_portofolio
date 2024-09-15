import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Timeline from './Timeline/index'
import neoim from '../../assets/images/download.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = () => {
    return (
      <div className="image-wrapper">
        <img src={neoim} alt="Portfolio" className="portfolio-image" />
      </div>
    )
  }

  return (
    <>
      <div className="container work-page">
        <div className="left-section">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Work Experience'.split('')}
              idx={15}
            />
          </h1>
          <Timeline />
        </div>
        <div className="right-section">{renderPortfolio()}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
