import React from "react";
import "./blogs.css";

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
              <div className="post_header">header </div>
              <div className="post_body">body</div>
              <div className="post_footer">footer</div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="post_container">sdf</div>
        </div>
        <div className="project">
          <div className="post_container">sdf</div>
        </div>
        <div className="project">
          <div className="post_container">sdf</div>
        </div>
        <div className="project">
          <div className="post_container">sdf</div>
        </div>
        <div className="project">
          <div className="post_container">sdf</div>
        </div>
        {/* end of posts */}
      </div>
    </div>
  );
};

export default Blogs;
