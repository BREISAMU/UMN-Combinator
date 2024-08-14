"use client";

import React, {useState, useEffect} from "react";
import api from "../api";

const ItemList = () => {
    const [posts, setPosts] = useState({});

  const items = [
    { id: 1, name: "Apple", price: "$1" },
    { id: 2, name: "Banana", price: "$0.5" },
    { id: 3, name: "Orange", price: "$0.75" },
  ];

  const getPosts = async () => {
    const response = await api.get("/posts", { params: { start: 0, end: 5 } });
    return response.data.posts; // Extract the posts array from the response
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response); // Set the fetched posts in the state
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
}, []);

return (
    <div>
        <h1>--------</h1>
        <br></br>
      <ul>
        {Object.keys(posts).map((key) => {
          const post = posts[key];
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.github}>GitHub Link</a>
              <br></br>
              <a href={post.discord}>Discord Link</a>
              <ul>
                {Object.keys(post.skills).map(skillKey => (
                  <li key={skillKey}>{post.skills[skillKey]}</li>
                ))}
              </ul>
              <br></br>
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
