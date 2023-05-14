import HeaderComponent from "../../components/header/Header";
import React from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer.tsx";
import Outback from '../../components/imgs/restaurants/outback.webp';
import KFC from '../../components/imgs/restaurants/kfc.webp';
import PizzaHut from '../../components/imgs/restaurants/pizzahut.webp';
import HardRock from '../../components/imgs/restaurants/hardhock.webp';
import BurgerKing from '../../components/imgs/restaurants/burgerking.webp';
import McDonalds from '../../components/imgs/restaurants/mcdonalds.webp';
import Wendys from '../../components/imgs/restaurants/Wendys.webp';

function Restaurants(){
    return (
        <div className="app">
        <HeaderComponent />
        <h1>Restaurants</h1>

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

        <FoodContainer
        image={BurgerKing} 
        children="Burger King">
        </FoodContainer>

        <FoodContainer
        image={McDonalds} 
        children="McDonald's">
        </FoodContainer>

        <FoodContainer
        image={Wendys} 
        children="Wendys">
        </FoodContainer>

        </div>
        </div>

        </div>
    )
}

export default Restaurants;