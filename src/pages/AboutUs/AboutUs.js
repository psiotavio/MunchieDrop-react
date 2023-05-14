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
                <img className="image-aboutUs" src={AboutUsImage} alt="Munchie-Drop-guy" />
                <div className="content">
                    <h2>Who are whe?</h2>
                    <h3>BUNCH OF IDIOTS THAT LOVE TO TEST THINGS</h3>
                    <p> Our mission is to revolutionize the delivery industry by leveraging the latest drone technology to provide fast, efficient, and reliable delivery services to our customers. We are dedicated to providing unparalleled customer service, maintaining the highest safety and security standards, and continuously innovating to meet the changing needs of our customers.</p>
                </div>
            </div>
            <img className="Right-page-img" src={Right} alt="right-png" />
        </div>
    )
}

export default AboutUs;