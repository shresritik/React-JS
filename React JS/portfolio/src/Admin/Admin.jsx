import React from "react";
import "./admin.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import db, { storage } from "../firebase";
const Admin = () => {
  const history = useHistory();
  const [imageUploadGraphic, setImageUploadGraphic] = useState(null);
  const [imageUploadWeb, setImageUploadWeb] = useState(null);
  const [imageUploadAI, setImageUploadAI] = useState(null);
  const [uploadCV, setUploadCV] = useState(null);
  const [title, setTitle] = useState("");
  const [titleAI, setTitleAI] = useState("");
  const [titleWeb, setTitleWeb] = useState("");
  const [git, setGit] = useState("");
  const [desc, setDesc] = useState("");
  const [web, setWeb] = useState("");
  const [gitAI, setGitAI] = useState("");
  const [descAI, setDescAI] = useState("");
  const [webAI, setWebAI] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const uploadGraphicImage = (e) => {
    e.preventDefault();
    if (imageUploadGraphic == null) return;
    storage
      .ref(`Graphics/${imageUploadGraphic.name}`)
      .put(imageUploadGraphic)
      .on(
        "state_changed",
        alert("Successfully uploaded Graphic image"),
        alert,
        () => {
          storage
            .ref("Graphics")
            .child(imageUploadGraphic.name)
            .getDownloadURL()
            .then((url) => {
              setIsLoading(true);
              db.collection("graphic-design")
                .add({
                  prodName: title,
                  img: url,
                })
                .then(() => {
                  alert("Your graphic form has been submitted");
                  setTitle("");
                  setImageUploadGraphic();
                })
                .catch((err) => {
                  alert(err.message);
                  //setSuccess(false);
                });
              setIsLoading(false);
            });
        }
      );
  };
  const uploadAIImage = (e) => {
    e.preventDefault();
    if (imageUploadAI == null) return;
    storage
      .ref(`AI/${imageUploadAI.name}`)
      .put(imageUploadAI)
      .on(
        "state_changed",
        alert("Successfully uploaded AI image"),
        alert,
        () => {
          storage
            .ref("AI")
            .child(imageUploadAI.name)
            .getDownloadURL()
            .then((url) => {
              setIsLoading(true);
              db.collection("AI")
                .add({
                  para: descAI,
                  img: url,
                  github: gitAI,
                  web: webAI,
                  prodName: titleAI,
                })
                .then(() => {
                  alert("Your AI form has been submitted");
                  setWebAI("");
                  setGitAI("");
                  setDescAI("");
                  setImageUploadAI();
                  setTitleAI("");
                  //setSuccess(true);
                })
                .catch((err) => {
                  alert(err.message);
                });
              setIsLoading(false);
            });
        }
      );
  };
  const uploadImageCV = (e) => {
    e.preventDefault();
    if (uploadCV == null) return;
    storage
      .ref(`CV/${uploadCV.name}`)
      .put(uploadCV)
      .on(
        "state_changed",
        alert("Successfully uploaded CV image"),
        alert,
        () => {
          storage
            .ref("CV")
            .child(uploadCV.name)
            .getDownloadURL()
            .then((url) => {
              setIsLoading(true);
              db.collection("CV")
                .add({
                  url: url,
                })
                .then(() => {
                  alert("Your CV form has been submitted");

                  setUploadCV();
                  //setSuccess(true);
                })
                .catch((err) => {
                  alert(err.message);
                });
              setIsLoading(false);
            });
        }
      );
  };
  const uploadWebImage = (e) => {
    e.preventDefault();
    if (imageUploadWeb == null) return;
    storage
      .ref(`Website/${imageUploadWeb.name}`)
      .put(imageUploadWeb)
      .on(
        "state_changed",
        alert("Successfully uploaded Web image"),
        alert,
        () => {
          storage
            .ref("Website")
            .child(imageUploadWeb.name)
            .getDownloadURL()
            .then((url) => {
              setIsLoading(true);
              db.collection("website")
                .add({
                  para: desc,
                  img: url,
                  github: git,
                  web: web,
                  prodName: titleWeb,
                })
                .then(() => {
                  alert("Your web form has been submitted");
                  setWeb("");
                  setGit("");
                  setDesc("");
                  setTitleWeb("");
                  setImageUploadWeb();
                  //setSuccess(true);
                })
                .catch((err) => {
                  alert(err.message);
                  //setSuccess(false);
                });
              setIsLoading(false);
            });
        }
      );
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== process.env.REACT_APP_USERNAME) {
      history.push("/admin");
    }
  }, [history]);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/admin");
  };

  return (
    <div className="admin container-fluid px-10">
      <button className="btn btn-secondary mb-3" onClick={handleLogout}>
        Logout
      </button>
      <div>
        {/* Graphics */}
        <div className=" wrapper card dflex flex-column input-group mt-3 p-4">
          <h4 className="card-title ">Graphics</h4>
          <form className="form-graphics card-body">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-group mt-3 w-50 ">
              <div className="input-group-prepend ">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input "
                  id="inputGroupFile01"
                  onChange={(e) => setImageUploadGraphic(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {imageUploadGraphic
                    ? imageUploadGraphic.name
                    : "Choose a file"}
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={uploadGraphicImage}
              className="btn btn-secondary px-3"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
        {/* Web */}
        <div className=" wrapper card dflex flex-column input-group mt-3 p-4">
          <h4 className="card-title ">Web</h4>
          <form className="form-graphics card-body">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={titleWeb}
                onChange={(e) => setTitleWeb(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Website</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Website Link"
                value={web}
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Github</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Github Link"
                value={git}
                onChange={(e) => setGit(e.target.value)}
              />
            </div>

            <div className="input-group mt-3 w-50 ">
              <div className="input-group-prepend ">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input "
                  id="inputGroupFile01"
                  onChange={(e) => setImageUploadWeb(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {imageUploadWeb ? imageUploadWeb.name : "Choose a file"}
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={uploadWebImage}
              className="btn btn-secondary px-3"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
        {/* AI */}
        <div className=" wrapper card dflex flex-column input-group mt-3 p-4">
          <h4 className="card-title ">AI</h4>
          <form className="form-graphics card-body">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={titleAI}
                onChange={(e) => setTitleAI(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={descAI}
                onChange={(e) => setDescAI(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Website</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Website Link"
                value={webAI}
                onChange={(e) => setWebAI(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Github</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Github Link"
                value={gitAI}
                onChange={(e) => setGitAI(e.target.value)}
              />
            </div>

            <div className="input-group mt-3 w-50 ">
              <div className="input-group-prepend ">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input "
                  id="inputGroupFile01"
                  onChange={(e) => setImageUploadAI(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {imageUploadAI ? imageUploadAI.name : "Choose a file"}
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={uploadAIImage}
              className="btn btn-secondary px-3"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
        {/* CV */}
        <div className=" wrapper card dflex flex-column input-group mt-3 p-4">
          <h4 className="card-title ">CV</h4>
          <form className="form-graphics card-body">
            <div className="input-group mt-3 w-50 ">
              <div className="input-group-prepend ">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input "
                  id="inputGroupFile01"
                  onChange={(e) => setUploadCV(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {uploadCV ? uploadCV.name : "Choose a file"}
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={uploadImageCV}
              className="btn btn-secondary px-3"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
