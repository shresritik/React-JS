import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";
import "./post.css";
import { Button } from "@material-ui/core";

function Post({ username, user, post_id, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribed;
    if (post_id) {
      unsubscribed = db
        .collection("post")
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
    db.collection("post").doc(post_id).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post_container">
      <div className="post_head">
        <Avatar
          alt="Remy Sharp"
          className="post_avatar"
          src="/static/images/avatar/1.jpg"
        />

        <h4>{username}</h4>
      </div>

      <img className="post_image" src={imageUrl}></img>

      <h4 className="post_text">
        <strong>{username}&nbsp;</strong>
        {caption}
      </h4>
      <p className="view_comments">View comments</p>
      <div className="post_comments">
        {comments.map(({ comment, id }) => (
          <p className="showing_comments" key={id}>
            <strong>{comment.username}</strong>&nbsp;
            {comment.text}
          </p>
        ))}
      </div>
      {user && (
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
      )}
    </div>
  );
}

export default Post;
