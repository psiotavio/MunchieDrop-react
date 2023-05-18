import HeaderComponent from "../../components/header/Header";
import React, { useState }from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer.tsx";
import Outback from '../../components/imgs/restaurants/LOGOOutback.png';
import KFC from '../../components/imgs/restaurants/kfc.webp';
import PizzaHut from '../../components/imgs/restaurants/pizzahut.webp';
import HardRock from '../../components/imgs/restaurants/hardhock.webp';
import BurgerKing from '../../components/imgs/restaurants/burgerking.webp';
import McDonalds from '../../components/imgs/restaurants/mcdonalds.webp';
import Wendys from '../../components/imgs/restaurants/Wendys.webp';
import { Modal } from "components/modalComponent/modalComponent";

import Outback1 from '../../components/imgs/restaurants/outback.webp';

import Outback2 from '../../components/imgs/restaurants/outback2.webp';

import RestaurantModal from "../../components/restaurantModal/restaurantModal";
import FoodOption from "../../components/foodOption/foodOption";


function Restaurants(){
    const [modalOpen, setModalOpen] = useState();

    const handleModalOpen = () => {
        setModalOpen(true);
      };
    
      const handleModalClose = () => {
        setModalOpen(false);
      };

    return (
        <div className="app">
        <HeaderComponent />
        <h1>Restaurants</h1>

        <RestaurantModal
          children={Outback}
          isOpen={modalOpen}
          onClose={() => handleModalClose()}
        >
          <h1 className="h1-restaurant">Outback</h1>
          <FoodOption
            image={Outback1}
            title={"Blooming Onion"}
            onCartButtonClick={() => {}}
            price="20,00$"
            cartButtonText={""}
          />
          <FoodOption
            image={Outback2}
            title={"The Outback Burger"}
            onCartButtonClick={() => {}}
            price="25,00$"
            cartButtonText={""}
          />
        </RestaurantModal>

        <div className="foods">
        <div className="grid">
        <FoodContainer
        image={Outback} 
        children="Outback"
        onButtonClick={() => handleModalOpen()}>
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