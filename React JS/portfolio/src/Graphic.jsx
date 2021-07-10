import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Graphic.css";
import cert from "./img/graphic/certificate of blood donation 2.jpg";
import daily from "./img/graphic/daily-essentials.png";
import store from "./img/graphic/dashain_leostore.png";
import untitled from "./img/graphic/rsz_1rsz_untitled-1_-_copy.jpg";
import bored from "./img/graphic/bored.png";
import product from "./img/graphic/get_your_product_2.png";
import Modals from "./Modals";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Graphic() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedProd, setSelectedProd] = React.useState(null);
  const prod = [
    { id: 1, img: daily, prodName: "Daily Essentials" },
    { id: 2, img: cert, prodName: "Certificate of Blood Donation" },
    { id: 3, img: store, prodName: "Daily essentials for an Online Store" },
    { id: 4, img: untitled, prodName: "Fellowship of Leo Club" },
    { id: 5, img: product, prodName: "Product Ad for an Online Store" },
    { id: 6, img: bored, prodName: "Leisure Time" },
  ];
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="work" data-aos="fade-down">
      <div className="work_graphics">
        <div className="work_header">
          <h4>Graphic Designs</h4>

          <Link to="/graphics">Explore More</Link>
        </div>
        <div className="work_section">
          {prod.map?.((item) => (
            <div key={item.id} className="work_img">
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

export default Graphic;
