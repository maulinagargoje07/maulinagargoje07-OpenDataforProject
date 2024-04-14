import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sec2Image from './assets/Sec2.jpg';

function App() {
  return (
    <>
    <div className="container">
      {/* <div className="nav">
        <p>Budget Transparancy And Accountibility</p>
        <ul>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Services</ul>
          <ul>More</ul>
        </ul>
      </div> */}
      <div className="sections">
        <div className="hero-sec">
          <div className="hero-text">
            <h1>Budget Transparancy and Accountibility</h1>
            <p>Empowering financial clarity to Citizens</p>
            <button><a href='https://ramseraph.github.io/opendata/'>View Services</a></button>
          </div>
        </div>
        <div className="section-two">
          <p>OUR MISSION</p>
          <div className="section-two-text">
            <div className="text">
            <h2>Empowering Citizens With Budget Accountablity Services</h2>
            <p>On Budget Transparency and Accountability Platform, we are dedicated to providing transparent and accountable financial services to citizens. Our mission is to empower our citizens to make informed about the budget allocation in their area and hence their country. With our expertise and commitment to transparency, we strive to build trust and confidence in every citizen regarding the development in their locality.</p>
            </div>
            <img src={sec2Image} alt="img" />
          </div>
        </div>
        <div className="section-three">
        <p>WHAT WE CAN DO FOR YOU</p>
        <div className="ssection-three-text">
          <div className="text">
            <h2>A wide range of services to meet all of your needs</h2>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
