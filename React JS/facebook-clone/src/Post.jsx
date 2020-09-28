import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Post({ image, username, timestamp, message, profileImage, post_id }) {
  const [{ user }, dispatch] = useStateValue();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribed;
    if (post_id) {
      unsubscribed = db
        .collection("posts")
        .doc(post_id)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              comment: doc.data(),
              id: doc.id,
            }))
          );
        });
    }
    return () => {
      unsubscribed();
    };
  }, [post_id]);
  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(post_id).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const handleComment = () => {
    console.log("This is comment clicked");
    let commentBox = document.getElementsByClassName("comments_container");

    for (let i = 0; i < commentBox.length; i++) {
      console.log(
        "This is single object commentbox",
        Object.keys(commentBox)[i]
      );
      console.log("This is single commentbox", commentBox[i]);
      console.log("this is comment box", commentBox);
      if (commentBox[i].style.display == "block") {
        commentBox[i].style.display = "none";
        continue;
      } else {
        commentBox[i].style.display = "block";
        continue;
      }
    }
  };
  return (
    <div className="post">
      <div className="post_top">
        <Avatar className="post_avatar" src={profileImage} />
        <div className="post_info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="img" />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option" onClick={handleComment}>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="comments_container">
        <div className="post_comments">
          {comments.map(({ comment, id }) => (
            <p className="showing_comments" key={id}>
              <strong>{comment.username}</strong>&nbsp;
              {comment.text}
            </p>
          ))}
        </div>
        <form className="post_CommentBox">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="post_input"
          />
          <Button
            disabled={!comment}
            onClick={postComment}
            type="submit"
            className="post_button"
          >
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Post;
