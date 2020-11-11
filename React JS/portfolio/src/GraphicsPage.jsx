import React from "react";
import "./Website.css";
// import "./Graphic.css";
import cert from "./img/graphic/certificate of blood donation 2.jpg";
import daily from "./img/graphic/daily-essentials.png";
import store from "./img/graphic/dashain_leostore.png";
import untitled from "./img/graphic/rsz_1rsz_untitled-1_-_copy.jpg";
import product from "./img/graphic/get_your_product_2.png";
import bored from "./img/graphic/bored.png";
import byol2 from "./img/graphic/byol2.jpeg";
import byol from "./img/graphic/byol.jpeg";
import coke from "./img/graphic/Coca-cola.jpg";
import Modals from "./Modals";
import { Link } from "react-router-dom";

function GraphicsPage() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedProd, setSelectedProd] = React.useState(null);
  const prod = [
    { id: 1, img: daily, prodName: "Daily Essentials" },
    { id: 2, img: cert, prodName: "Certificate of Blood Donation" },
    { id: 3, img: store, prodName: "Daily essentials for Online Store" },
    { id: 4, img: untitled, prodName: "Fellowship of Leo Club" },
    { id: 5, img: product, prodName: "Product Ad for online store" },
    { id: 6, img: bored, prodName: "Leisure Time" },
    { id: 8, img: byol, prodName: "Design Challenge" },
    { id: 7, img: byol2, prodName: "Design Challenge 1" },
    { id: 9, img: coke, prodName: "Coke Banner Design" },
  ];

  return (
    <div className="work website">
      <div className="work_graphics website">
        <Link to="/">
          <i class="fas fa-arrow-circle-left"></i>
        </Link>
        <div className="website_section">
          {prod.map?.((item) => (
            <div key={item.id} className="work_img web_img">
              <img
                alt=""
                src={item.img}
                onClick={() => {
                  setSelectedImg(item.img);
                  setSelectedProd(item.prodName);
                  setModalShow(true);
                }}
              />
              <h6>{item.prodName}</h6>
            </div>
          ))}
        </div>
        {prod.map?.((item) => (
          <Modals
            img={selectedImg}
            key={item.id}
            id={item.id}
            prodname={selectedProd}
            show={modalShow}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            onHide={() => setModalShow(false)}
          />
        ))}
      </div>
    </div>
  );
}

export default GraphicsPage;
