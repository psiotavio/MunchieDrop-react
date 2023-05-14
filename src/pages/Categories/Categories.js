import HeaderComponent from "../../components/header/Header";
import React from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer.tsx";
import Hamburger from '../../components/imgs/categories/hamburger.webp';
import Healthy from '../../components/imgs/categories/healthy.webp';
import Pasta from '../../components/imgs/categories/pasta.webp';
import Pizza from '../../components/imgs/categories/pizza.webp';
import SeaFood from '../../components/imgs/categories/seafood.webp';
import Steak from '../../components/imgs/categories/steak.webp';

import './Categories.scss'

function Categories(){
    return (
        <div className="app">
        <HeaderComponent />
        <h1>Categories</h1>

        <div className="foods">
        <div className="grid">
        <FoodContainer
        image={Hamburger} 
        children="Hamburger">
        </FoodContainer>

        <FoodContainer
        image={Healthy} 
        children="Healthy">
        </FoodContainer>

        <FoodContainer
        image={Pasta} 
        children="Pasta">
        </FoodContainer>

        <FoodContainer
        image={Pizza} 
        children="Pizza">
        </FoodContainer>

        <FoodContainer
        image={SeaFood} 
        children="Sea Food">
        </FoodContainer>

        <FoodContainer
        image={Steak} 
        children="Steak">
        </FoodContainer>
        
        </div>
        </div>

        </div>
    )
}

export default Categories;