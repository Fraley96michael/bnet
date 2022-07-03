import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import * as firestore from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .getDocs(firestore.collection(db, "posts"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPosts((posts) => [...posts, doc.data()]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
