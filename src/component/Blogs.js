import React, { useContext } from "react";
import { AppContext } from "../context1/AppContext";
import Spiners from "./Spiners";
import Card from "./Card";
import "./Blog.css";
import "../App.css";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] flex flex-col py-3 text-lg ">
      {loading ? (
        <Spiners />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className=" font-bold text-2xl mt-4 text-black">{post.title}</p>
            <p className="text-lg mt-3">
              By<span className="font-bold m-2 text-lg">{post.author}</span> on{" "}
              <span className="font-bold m-2 text-lg">{post.category}</span>
            </p>
            <p className="font bold text-lg mb-3 m-1"> Posted on<span>{post.date}</span></p>
            <p>{post.content}</p>
            <div className="">
            {post.tags.map((tag, index) => {
              return <span className="text-blue-700  " key={index}>{`#${tag}`}</span>;
            })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Blogs;
