import React, { useEffect } from "react";
import "./Website.css";
// import amazon from "./img/Web/amazon.JPG";
// import netflix from "./img/Web/netflix.JPG";
// import facebook from "./img/Web/facebook.JPG";
// import messenger from "./img/Web/MessengerLite.jpg";
// import whatsapp from "./img/Web/whatsapp.JPG";
// import instagram from "./img/Web/instagram.JPG";
// import notes from "./img/Web/notes_taker.JPG";
import Modals from "./Modals";
import { Link, useHistory } from "react-router-dom";
import db from "./firebase";
import { useState } from "react";

function Website() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedProd, setSelectedProd] = React.useState(null);
  const [selectedPara, setSelectedPara] = React.useState(null);
  const [selectedlink, setSelectedlink] = React.useState(null);
  const [selectedgit, setSelectedgit] = React.useState(null);
  const location = useHistory();
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
  //     para: "This is an Amazon clone made with React JS and hosted on Firebase. It uses cloud firestore as a database",
  //   },
  //   {
  //     id: 2,
  //     img: netflix,
  //     prodName: "Netflix Clone",
  //     link: "https://netflix-clone-59bc5.web.app/",
  //     para: "This is a Netflix clone made with React JS and hosted on Firebase. The movies are taken from TMDB API",
  //   },
  //   {
  //     id: 3,
  //     img: facebook,
  //     prodName: "Facebook Clone",
  //     link: "https://facebook-clone-4f848.web.app/",
  //     para: "This is a Facebook clone made with React JS and hosted on Firebase. It uses real-time database. So, the posts can be updated on real time. ",
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
  //     para: "This is a WhatsApp clone made with React JS and hosted on Firebase. It has real time chatting feature.",
  //   },
  //   {
  //     id: 6,
  //     img: instagram,
  //     prodName: "Instagram Clone",
  //     link: "https://instagram-clone-d352d.web.app/",
  //     para: "This is a desktop mode Instagram clone made with React JS and hosted on Firebase. It uses real-time database. So,the posts can be updated on real time.",
  //   },
  //   {
  //     id: 7,
  //     img: notes,
  //     prodName: "Notes Taker",
  //     link: "https://shresritik.github.io/JS-practice/Notes%20Taker/",
  //     para: "This is a note taker website where you can take your personal notes. This is made using HTML, CSS and JS",
  //   },
  // ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="work website">
      <div className="work_graphics website">
        <Link to="#" onClick={location.goBack}>
          <i className="fas fa-arrow-circle-left"></i>
        </Link>
        {console.log(prod)}
        <div className="website_section">
          {!isLoading &&
            prod[0]?.length > 0 &&
            prod[0]?.map((item, i) => (
              <div key={i} className="work_img web_img">
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

export default Website;
