import { ClassNames } from "@emotion/react";
import HeaderComponent from "../../components/header/Header";
import React from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer.tsx";
import Outback from '../../components/imgs/restaurants/outback.webp';
import KFC from '../../components/imgs/restaurants/kfc.webp';
import PizzaHut from '../../components/imgs/restaurants/pizzahut.webp';
import HardRock from '../../components/imgs/restaurants/hardhock.webp';
import './Home.scss'


function Home(){
    return (
        <div className="app">
        <HeaderComponent />
        <h1>Popular</h1>
        
        <div className="foods">
        <div className="grid">
        <FoodContainer
        image={Outback} 
        children="Outback">
        </FoodContainer>

        <FoodContainer
        image={KFC} 
        children="KFC">
        </FoodContainer>

        <FoodContainer
        image={PizzaHut} 
        children="Pizza Hut">
        </FoodContainer>

        <FoodContainer
        image={HardRock} 
        children="Hard Rock">
        </FoodContainer>
        </div>
        </div>
        </div>
    )
}

export default Home;