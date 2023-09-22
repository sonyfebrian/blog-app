"use client";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

async function fetchData() {
  try {
    const response = await axios.get(
      "https://api-berita-indonesia.vercel.app/antara/terbaru/"
    ); // Replace with your actual API endpoint
    return response.data.data.posts; // Extract the array of posts from the Axios response
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function NewsPage({ time }) {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {/* {posts?.map((post) => (
          <li key={post.link}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <p>{post.description}</p>
            <p>{post.pubDate}</p>
            <img src={post.thumbnail} alt={post.title} />
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api-berita-indonesia.vercel.app/antara/terbaru/"
  );
  const time = await res.json();

  console.log(time, "cek data");
  return {
    props: {
      time,
    },
    // Regenerate the page after 5 seconds
    revalidate: 5,
  };
}

export default NewsPage;
