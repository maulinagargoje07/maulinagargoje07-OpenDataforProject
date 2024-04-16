import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sec2Image from './assets/images/Sec2.jpg';
import FinancialImage from './assets/images/Financial-Transparency.jpg';
import AccountabilityImage from './assets/images/Accountability.jpg';
import EmpowermentImage from './assets/images/Empowerment.jpg';

function App() {
  const handleScroll = () => {
    const element = document.getElementById('section-two');
    element.scrollIntoView({ behavior: 'smooth' });
  };

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
            <button className='button01'><a href='#section-three'>View Services</a></button>
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
            <div className="text-boxes">
              <button className='button02'><div className="text-box">
              <img src={FinancialImage} alt="img" />
                <h3>Financial Transparency</h3>
                <p>Our platform provides financial transparency to citizens by providing them with the necessary information about the budget allocation in their area.</p>
              </div></button>
              <button className='button02'><div className="text-box">
              <img src={AccountabilityImage} alt="img" />
                <h3>Accountability</h3>
                <p>We are committed to ensuring accountability in financial matters by providing citizens with the necessary tools to hold their leaders accountable.</p>
              </div></button>
              <button className='button02'><div className="text-box">
              <img src={EmpowermentImage} alt="img" />
                <h3>Empowerment</h3>
                <p>Our platform empowers citizens by providing them with the information they need to make informed decisions about the budget allocation in their area.</p>
              </div></button>
            </div>
          </div>
        </div>
        </div>
        <div className="section-forth">
          <p>Sectors</p>
          <div className="sectors">
            <button className='button03'>
              <a href='https://data.gov.in/catalogs?sector=Education'>Education</a>
            </button>
            <button className='button03'><a href='https://data.gov.in/catalogs?sector=Health%20and%20Family%20welfare'>Health and Family welfare</a></button>
            <button className='button03'><a href='https://data.gov.in/catalogs?sector=Agriculture'>Agriculture</a></button>
            <button className='button03'><a href='https://data.gov.in/catalogs?sector=Governance%20and%20Administration'>Governance and Administration</a></button>
            <button className='button03'><a href='https://data.gov.in/catalogs?sector=Transport'>Transport</a></button>
            <button className='button03'><a href='https://data.gov.in/catalogs?sector=Labour%20and%20Employment'>Labour and Employment</a></button>
            <button className='button03'><a href='https://ramseraph.github.io/opendata/'>Day wise financial record</a></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
