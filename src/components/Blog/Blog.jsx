import React from "react";
import "./Blog.css";
import blogimg1 from "../assets/blog-img1.png";
import blogimg2 from "../assets/blog-img2.png";
import blogimg3 from "../assets/blog-img3.png";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Collections Food In city</h1>
      <div className="cont">
        <div className="contCard">
          <div className="img">
            <img src={blogimg1} alt="" />
          </div>
          <div className="text">
            <h3>This Week going</h3>
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
            <p className="seeMORE">SEE MORE</p>
          </div>
        </div>
        <div className="contCard">
          <div className="img">
            <img src={blogimg2} alt="" />
          </div>
          <div className="text">
            <h3>JUst delivery food</h3>
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
            <p className="seeMORE">SEE MORE</p>{" "}
          </div>
        </div>
        <div className="contCard">
          <div className="img">
            <img src={blogimg3} alt="" />
          </div>
          <div className="text">
            <h3>Newly OPened CAfe</h3>
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
            <p className="seeMORE">SEE MORE</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
