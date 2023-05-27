import React, { useEffect } from "react";
// import "./Web.css";
// import amazon from "./img/Web/amazon.JPG";
// import netflix from "./img/Web/netflix.JPG";
// import facebook from "./img/Web/facebook.JPG";
// import messenger from "./img/Web/MessengerLite.jpg";
// import whatsapp from "./img/Web/whatsapp.JPG";
// import instagram from "./img/Web/instagram.JPG";
import Modals from "./Modals";
import { Link } from "react-router-dom";
import db from "./firebase";

import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function Web() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedProd, setSelectedProd] = React.useState(null);
  const [selectedPara, setSelectedPara] = React.useState(null);
  const [selectedlink, setSelectedlink] = React.useState(null);
  const [selectedgit, setSelectedgit] = React.useState(null);

  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCollection = async () => {
      setIsLoading(true);

      const snapshot = await db.collection("website").get();
      setProd((prev) => [...prev, snapshot.docs.map((doc) => doc.data())]);
      setIsLoading(false);
    };
    getCollection();
  }, []);
  // const prod = [
  //   {
  //     id: 1,
  //     img: amazon,
  //     prodName: "Amazon Clone",
  //     link: "https://clone-21ec6.web.app/",
  //     para: "This is Amazon Clone made with React JS and hosted on Firebase. It uses cloud firestore as a database",
  //   },
  //   {
  //     id: 2,
  //     img: netflix,
  //     prodName: "Netflix Clone",
  //     link: "https://netflix-clone-59bc5.web.app/",
  //     para: "This is Netflix Clone made with React JS and hosted on Firebase. The movies are taken from tmdb api",
  //   },
  //   {
  //     id: 3,
  //     img: facebook,
  //     prodName: "Facebook Clone",
  //     link: "https://facebook-clone-4f848.web.app/",
  //     para: "This is Facebook Clone made with React JS and hosted on Firebase. It uses real-time database. So,the posts can be updated on real time. ",
  //   },
  //   {
  //     id: 4,
  //     img: messenger,
  //     link: "https://messengerchatapp.herokuapp.com/",
  //     prodName: "Messaging App",
  //     para: "This is a messaging app made with React JS and hosted on Heroku. It has real time chatting feature.",
  //   },
  //   {
  //     id: 5,
  //     img: whatsapp,
  //     prodName: "Whats App Clone",
  //     link: "https://whatsapp-clone-fa037.web.app/",
  //     para: "This is Whats App Clone made with React JS and and hosted on Firebase. It has real time chatting feature.",
  //   },
  //   {
  //     id: 6,
  //     img: instagram,
  //     prodName: "Instagram Clone",
  //     link: "https://instagram-clone-d352d.web.app/",
  //     para: "This is desktop mode Instagram Clone made with React JS and and hosted on Firebase. It uses real-time database. So,the posts can be updated on real time.",
  //   },
  // ];

  return (
    <div className="work" data-aos="fade-up">
      <div className="work_graphics">
        <div className="work_header">
          <h4>Websites</h4>

          <Link to="/website">Explore More</Link>
        </div>
        <div className="work_section">
          {/* {console.log(prod[0])} */}
          {!isLoading &&
            prod[0]?.length > 0 &&
            prod[0]?.map((item, i) => (
              <div key={i} className="work_img">
                <img
                  alt=""
                  src={item.img}
                  onClick={() => {
                    setSelectedImg(item.img);
                    setSelectedProd(item.prodName);
                    setSelectedPara(item.para);
                    setSelectedlink(item.web);
                    setSelectedgit(item.github);

                    setModalShow(true);
                  }}
                />
                <h6>{item.prodName}</h6>
              </div>
            ))}
          {isLoading && <h4>Loading...</h4>}
        </div>
        {prod[0]?.map((item, i) => (
          <Modals
            img={selectedImg}
            key={i}
            id={i}
            para={selectedPara}
            link={selectedlink}
            git={selectedgit}
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

export default Web;
