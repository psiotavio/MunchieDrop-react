import HeaderComponent from "../../components/header/Header";
import React from "react";
import AboutUsImage from "../../components/imgs/aboutUs/about.webp";
import Left from "../../components/imgs/aboutUs/Left.webp";
import Right from "../../components/imgs/aboutUs/Right.webp";
import "./AboutUs.scss";

function AboutUs() {


    return (
        <div className="app">
            <HeaderComponent />
            <h1>About Us</h1>
            <img className="Left-page-img" src={Left} alt="left-png" />
          

            <div className="container-content">
                <iframe className="videozinho" src="https://drive.google.com/file/d/1ADAEelo4lYtcQ3H10-xwX5j_cP8QlJk6/preview"  allow="autoplay"></iframe>
            </div>
            <img className="Right-page-img" src={Right} alt="right-png" />
        </div>
    )
}

export default AboutUs;