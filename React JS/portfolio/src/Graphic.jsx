import React from "react";
// import { Link } from "react-router-dom";
import "./Graphic.css";
import cert from "./img/graphic/certificate of blood donation 2.jpg";
import daily from "./img/graphic/daily-essentials.png";
import store from "./img/graphic/dashain_leostore.png";
import untitled from "./img/graphic/Untitled-1 - Copy.jpg";
import Modals from "./Modals";
import { Button, Modal } from "react-bootstrap";

function Graphic() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedProd, setSelectedProd] = React.useState(null);
  const prod = [
    { id: 1, img: daily, prodName: "Daily essentials" },
    { id: 2, img: cert, prodName: "Certificate of blood donation" },
    { id: 3, img: store, prodName: "Online Store" },
    { id: 4, img: untitled, prodName: "Fellowship of Leo Club" },
  ];

  return (
    <div id="works" className="work">
      <div className="work_graphics">
        <div className="work_header">
          <h4>Graphics Design</h4>

          <a href="/work">Explore More</a>
          {/* <Link to="/work">Explore More</Link> */}
        </div>
        <div className="work_section">
          {prod.map?.((item) => (
            <div key={item.id} className="work_img">
              <img
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
