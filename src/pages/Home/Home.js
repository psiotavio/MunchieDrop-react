import HeaderComponent from "../../components/header/Header";
import React from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer.tsx";
import PizzaHut from '../../components/imgs/restaurants/pizzahut.webp';
import BurgerKing from '../../components/imgs/restaurants/burgerking.webp';
import McDonalds from '../../components/imgs/restaurants/mcdonalds.webp';


import './Home.scss'


function Home(){
    return (
        <div className="app">
        <HeaderComponent />
        <h1>Popular</h1>
        
        <div className="foods">
        <div className="grid">



        <FoodContainer
        image={PizzaHut} 
        children="Pizza Hut">
        </FoodContainer>


        <FoodContainer
        image={BurgerKing} 
        children="Burger King">
        </FoodContainer>

        <FoodContainer
        image={McDonalds} 
        children="McDonald's">
        </FoodContainer>


        </div>
        </div>
        </div>
    )
}

export default Home;