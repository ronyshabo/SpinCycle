import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroSectionImg from "../assets/imgs/ideogram9.jpeg";
import denimshirts from "../assets/imgs/ideogram1.jpeg";
import threeColumnTshirts from "../assets/imgs/ideogram11.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to the About page and scroll to the contacts section
    navigate('/about#contacts');
  };

  return (
    <div className="home">
      <div className="heroSection">
        <img src={heroSectionImg} alt="Hero" className="heroSectionImg" />
        <div className="heroText">
          <br />
          <br />
          <h1 className="heroTitle">SpinCycle Coin Laundry</h1>
          <br />
          <br />
          <p className="paragraphP">
            Welcome to your neighborhood laundromat, where doing laundry is simple and stress-free. 
            Our coin-operated machines offer a reliable, affordable way to keep your clothes looking fresh. 
            Drop by anytime to enjoy a clean, convenient space that fits right into your routine.
          </p>
          <br />
          <br />
          <br />
          <br />
          <button className="Btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="visionSection">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p className="vision">VISION</p>
        <h1 className="titleText">
          Redefining Laundry,
          <br />
          Delivering Freshness!
        </h1>
        <div className="container">
          <p className="containerTxt">
            At SpinCycle, our vision is to redefine laundromats and quality in laundry services. We aspire to transform your time at our location. 
          </p>
          <img src={denimshirts} alt="" className="halfVWphoto" />
        </div>
      </div>
      <div className="serviceSection">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="aboutHr" />
        <br />
        <p className="vision">OUR SERVICE</p>
        <h1 className="titleText">
          Completely Self-Sufficient, <br />
        </h1>
        <div className="container">
          <div className="textSection">
            <p>OPTIMIZED FOR EFFICIENCY</p>
            <div className="serviceData">
              <h2>24 - 48 hr</h2>
              <h4>Standard service</h4>
            </div>
            <hr style={{ width: "80%" }} />
            <div className="serviceData">
              <h2>same-day delivery</h2>
              <h4>Expedited service</h4>
            </div>
          </div>
          <img src={threeColumnTshirts} alt="" className="halfVWphoto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
