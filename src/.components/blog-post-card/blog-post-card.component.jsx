import React from "react";
import "./blog-post-card.styles.scss";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const BlogPostCard = ({ postData }) => {
  let title = postData.title;
  let summary = postData.summary;
  let image = postData.image.url;
  let id = postData.sys.id;
  let apiDate = postData.sys.publishedAt;
  let parsedDate = dayjs(apiDate).format("MMM DD, YYYY");

  return (
    <Link className='card-wrapper' id={id} to={`/blog-posts/${id}`}>
      <div className='card-container'>
        <img className='post-image' src={image} />
        <div className='blog-card-info-wrapper'>
          <span className='post-title'>{title}</span>
          <span className='post-summary'>{summary}</span>
          <div className='card-footer'>
            <span className='post-date'>{parsedDate}</span>
            <Link className='read-more-button' to={`/blog-posts/${id}`}>
              Read more
              <FiArrowRight className='arrow-icon' />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
