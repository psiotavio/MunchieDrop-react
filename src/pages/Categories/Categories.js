import HeaderComponent from "../../components/header/Header";
import React, { useState } from "react";
import { FoodContainer } from "../../components/foodcontainer/foodContainer";
import Hamburger from "../../components/imgs/categories/hamburger.webp";
import Healthy from "../../components/imgs/categories/healthy.webp";
import Pasta from "../../components/imgs/categories/pasta.webp";
import Pizza from "../../components/imgs/categories/pizza.webp";
import SeaFood from "../../components/imgs/categories/seafood.webp";
import Steak from "../../components/imgs/categories/steak.webp";
import whooper from "../../components/imgs/foods/buergerking/whoper.webp"
import bacon from "../../components/imgs/foods/buergerking/bacon.webp"
import cheese from "../../components/imgs/foods/buergerking/cheeseDuplo.webp"
import BigMac from "../../components/imgs/foods/bigmac.webp"

import Outback2 from "../../components/imgs/restaurants/outback2.webp";

import RestaurantModal from "../../components/restaurantModal/restaurantModal";
import FoodOption from "../../components/foodOption/foodOption";

import "./Categories.scss";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="app">
      <HeaderComponent />
      <h1>Categories</h1>

      <RestaurantModal isOpen={modalOpen} onClose={() => handleModalClose()}>
        <h1 className="h1-restaurant">Hamburger</h1>
        <FoodOption
          image={Outback2}
          title={"(Outback) The Outback Burger"}
          onCartButtonClick={() => {}}
          price="25,00$"
          cartButtonText={""}
        />

        <FoodOption
          image={whooper}
          title={"(Burger King) Whooper"}
          onCartButtonClick={() => {
            // Lógica para adicionar ao carrinho para Burger King
          }}
          price="15,00$"
          cartButtonText={""}
        />

        <FoodOption
          image={bacon}
          title={"(Burger King) Bacon Cheeseburger"}
          onCartButtonClick={() => {
            // Lógica para adicionar ao carrinho para Burger King
          }}
          price="9,00$"
          cartButtonText={""}
        />

        <FoodOption
          image={cheese}
          title={"(Burger King) CheeseBurger"}
          onCartButtonClick={() => {
            // Lógica para adicionar ao carrinho para Burger King
          }}
          price="7,00$"
          cartButtonText={""}
        />
        <FoodOption
          image={BigMac}
          title={"(McDonald's) Big Mac"}
          onCartButtonClick={() => {
            // Lógica para adicionar ao carrinho para McDonald's
          }}
          price="12,00"
          cartButtonText={""}
        />
      </RestaurantModal>

      <div className="foods">
        <div className="grid">
          <FoodContainer
            image={Hamburger}
            children="Hamburger"
            onButtonClick={() => handleModalOpen()}
          ></FoodContainer>

          <FoodContainer image={Healthy} children="Healthy"></FoodContainer>

          <FoodContainer image={Pasta} children="Pasta"></FoodContainer>

          <FoodContainer image={Pizza} children="Pizza"></FoodContainer>

          <FoodContainer image={SeaFood} children="Sea Food"></FoodContainer>

          <FoodContainer image={Steak} children="Steak"></FoodContainer>
        </div>
      </div>
    </div>
  );
}

export default Categories;
