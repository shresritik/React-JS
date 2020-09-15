import React, { useState, useEffect } from "react";

import "./App.css";
import Post from "./post";
import { db, auth } from "./firebase";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import ImageUpload from "./ImageUpload";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  let [posts, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        if (authUser.updateProfile) {
        } else {
          return authUser.updateProfile({ displayName: username });
        }
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribed();
    };
  }, [user, username]);
  useEffect(
    () =>
      db
        .collection("post")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setPost(
            snapshot.docs.map((doc) => ({
              id: doc.id,

              post: doc.data(),
            }))
          );
        }),
    []
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    setUsername("");
    setOpen(false);
  };
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    setOpenSignIn(false);
  };

  return (
    <div className="post_header">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            />
          </center>

          <form className="login_form">
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signup}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="instagram"
            />
          </center>
          <form className="login_form">
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signin}>
              Login
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app_header">
        <a href="/">
          <img
            className="app_headerImage"
            alt="instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </a>
        {user ? (
          <div className="app_loginContainer ">
            <Button onClick={() => auth.signOut()}>Log Out</Button>
            <Button href="https://messengerchatapp.herokuapp.com">Chat</Button>
          </div>
        ) : (
          <div className="app_loginContainer ">
            <Button onClick={handleOpen}>Sign Up</Button>
            <Button onClick={() => setOpenSignIn(true)}>Log In</Button>
            <Button href="https://messengerchatapp.herokuapp.com">Chat</Button>
          </div>
        )}
      </div>

      <div className="app_posts">
        {posts.map(({ post, id }) => (
          <Post
            key={id}
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
            user={user}
            post_id={id}
          />
        ))}
      </div>
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h2 className="error_msg">Sorry you need to log in to upload images</h2>
      )}
    </div>
  );
}

export default App;
