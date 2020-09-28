import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessengerSender from "./MessengerSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => {};
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessengerSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          username={post.data.username}
          profileImage={post.data.profileImage}
          message={post.data.message}
          timestamp={post.data.timestamp}
          post_id={post.id}
        />
      ))}
    </div>
  );
}

export default Feed;
