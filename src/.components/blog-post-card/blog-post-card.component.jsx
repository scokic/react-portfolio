import React from "react";
import "./blog-post-card.styles.scss";
import { FiArrowRight } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";

const BlogPostCard = ({ postData }) => {
  let title = postData.title;
  let summary = postData.summary;
  let image = postData.image.url;
  let id = postData.sys.id;

  return (
    <Link className='card-wrapper' id={id} to={`/blog-posts/${id}`}>
      <div className='card-container'>
        <img className='post-image' src={image} />
        <span className='post-title'>{title}</span>
        <span className='post-summary'>{summary}</span>
        <Link className='read-more-button' to={`/blog-posts/${id}`}>
          Read more
          <FiArrowRight className='arrow-icon' />
        </Link>
      </div>
    </Link>
  );
};

export default BlogPostCard;
