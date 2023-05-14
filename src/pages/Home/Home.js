import React, { useState } from "react";
import HeaderComponent from "../../components/header/Header";
import { FoodContainer } from "../../components/foodcontainer/foodContainer";
import PizzaHut from '../../components/imgs/restaurants/pizzahut.webp';
import BurgerKing from '../../components/imgs/restaurants/burgerking.webp';
import McDonalds from '../../components/imgs/restaurants/mcdonalds.webp';
import RestaurantModal from "../../components/restaurantModal/restaurantModal";
import FoodOption from "../../components/foodOption/foodOption";
import BigMac from "../../components/imgs/foods/bigmac.webp"
import Pizza1 from "../../components/imgs/foods/pizzahut/pizza1.webp"
import Pizza2 from "../../components/imgs/foods/pizzahut/pizza2.webp"
import Pizza3 from "../../components/imgs/foods/pizzahut/pizza3.webp"

import './Home.scss'

function Home() {
  const [modalOpen, setModalOpen] = useState({
    'Pizza Hut': false,
    'Burger King': false,
    "McDonald's": false
  });
  const [selectedFood, setSelectedFood] = useState('');

  const openModal = (food) => {
    setSelectedFood(food);
    setModalOpen((prevState) => ({
      ...prevState,
      [food]: true
    }));
  };


  const closeModal = (food) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [food]: false
    }));
  };

  return (
    <div className="app">
      <HeaderComponent />
      <h1>Popular</h1>

      <div className="foods">
        <div className="grid">
          <FoodContainer
            image={PizzaHut}
            children="Pizza Hut"
            onButtonClick={() => openModal('Pizza Hut')}
          />

          <FoodContainer
            image={BurgerKing}
            children="Burger King"
            onButtonClick={() => openModal('Burger King')}
          />

          <FoodContainer
            image={McDonalds}
            children="McDonald's"
            onButtonClick={() => openModal("McDonald's")}
          />
        </div>
      </div>

      {modalOpen['Pizza Hut'] && (
        <RestaurantModal
          children={selectedFood}
          isOpen={modalOpen['Pizza Hut']}
          onClose={() => closeModal('Pizza Hut')}
        >
          <h1 className="h1-restaurant">{selectedFood}</h1>
          <FoodOption
            image={Pizza1}
            title={"Brazilian"}
            onCartButtonClick={() => {
              // Lógica para adicionar ao carrinho para Burger King
            }}
            price="44,00$"
            cartButtonText={""}
          />
          <FoodOption
            image={Pizza2}
            title={"Pepperoni"}
            onCartButtonClick={() => {
              // Lógica para adicionar ao carrinho para Burger King
            }}
            price="44,00$"
            cartButtonText={""}
          />
          <FoodOption
            image={Pizza3}
            title={"Pepperoni with catupiry"}
            onCartButtonClick={() => {
              // Lógica para adicionar ao carrinho para Burger King
            }}
            price="44,00$"
            cartButtonText={""}
          />
        </RestaurantModal>


      )}

      {modalOpen['Burger King'] && (
        <RestaurantModal
          children={selectedFood}
          isOpen={modalOpen['Burger King']}
          onClose={() => closeModal('Burger King')}
        >
          <h1 className="h1-restaurant">{selectedFood}</h1>
          <FoodOption
            image={BigMac}
            title={"Big Mac"}
            onCartButtonClick={() => {
              // Lógica para adicionar ao carrinho para Burger King
            }}
            price="22,00"
            cartButtonText={""}
          />
        </RestaurantModal>
      )}

      {modalOpen["McDonald's"] && (
        <RestaurantModal
          isOpen={modalOpen["McDonald's"]}
          onClose={() => closeModal("McDonald's")}
        >
          <h1 className="h1-restaurant">{selectedFood}</h1>
          <FoodOption
            image={BigMac}
            title={"Big Mac"}
            onCartButtonClick={() => {
              // Lógica para adicionar ao carrinho para McDonald's
            }}
            price="12,00"
            cartButtonText={""}
          />
        </RestaurantModal>
      )}


    </div>
  );
}

export default Home;
