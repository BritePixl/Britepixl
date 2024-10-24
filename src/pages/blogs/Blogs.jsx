import React from "react";
import "./blogs.css";
import { Link } from "react-router-dom";
import services from "./posts/imgs/services.png";
import visual_solutions from "./posts/imgs/visual_solutions.png";
const Blogs = () => {
  return (
    <div className="blogs_section_page">
      <div>
        <h1 className="mt projects_title_section">BLOGS</h1>
      </div>
      <div className="home_projects_container">
        {/* Start of posts */}
        <div className="project">
          <div className="post_container">
            <div style={{ height: "100%", width: "100%" }}>
              <div className="post_header">
                <img src={services} />
              </div>
              <div className="post_body">
                <p>_</p>
                <h3>Our Services</h3>
              </div>
              <div className="post_footer">
                <Link to="/blog/services" className="blog_link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="post_container">
            <div style={{ height: "100%", width: "100%" }}>
              <div className="post_header">
                <img src={visual_solutions} />
              </div>
              <div className="post_body">
                <p>_</p>
                <h3>Visual Solutions</h3>
              </div>
              <div className="post_footer">
                <Link to="/blog/visual-solutions" className="blog_link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* end of posts */}
      </div>
    </div>
  );
};

export default Blogs;
