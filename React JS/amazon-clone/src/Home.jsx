import React from "react";
import Caraousel from "./Caraousel";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home_container">

        <Caraousel />

        {/* <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="img"
        /> */}

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="490385012"
            title="Flytise A10 Sport Headset True Wireless Headphones BT 5.0 Mini In-Ear Headphones with Mic Charging Case Battery Digital Display (Black)"
            price={24.06}
            rating={3}
            image="https://m.media-amazon.com/images/I/51dBJNB0F8L._AC_UY218_.jpg"
          />
          <Product
            id="2344593023"
            title="AmazonBasics Over-Ear Studio Monitor Headphones - Black"
            price={53.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/71n83Gqlp6L._AC_UY218_.jpg"
          />


        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="490385045"
            title="Amazon Essentials Men's Full-Zip Hooded Fleece Sweatshirt"
            price={21}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ymuLEupGL._AC_UL320_.jpg"
          />
          <Product
            id="2344593065"
            title="Amazon Essentials Men's Midweight V-Neck Cotton Sweater"
            price={25}
            rating={4}
            image="https://m.media-amazon.com/images/I/A1-JlUui18L._AC_UL320_.jpg"
          />
          <Product
            id="2344593099"
            title="Amazon Essentials Men's 2-Pack Performance Tech T-Shirt"
            price={19.40}
            rating={5}
            image="https://m.media-amazon.com/images/I/816KSGp7QLL._AC_UL320_.jpg"
          />
          <Product
            id="2344593091"
            title="Amazon Essentials Men's Slim-fit Short-Sleeve Chambray Shirt"
            price={19.20}
            rating={5}
            image="https://m.media-amazon.com/images/I/A15dNzoDj4L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
