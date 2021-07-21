import React, { useState, useEffect } from "react";
import "./single-blog-post.styles.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SingleBlogPost = ({ match }) => {
  const [blogPost, setBlogPost] = useState(null);
  let postId = match.params.id;

  const query = `{
    blogPost(id: "${postId}") {
      image {
        url
      }
      title
      content{
          json
      }
    }
  }
  `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/umewgum9wl89/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Q6JNQAdiaeqJKq-lpS-2EDGoU-0yQia_EGri38UqUWw",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setBlogPost(data);
      });
  }, []);

  if (!blogPost) {
    return <div>loading</div>;
  } else {
    return (
      <div className='single-post-wrapper section-wrapper'>
        <div className='single-post-container section-container'>
          <h1 className='post-title'>{blogPost.blogPost.title}</h1>
          <img className='post-image' src={blogPost.blogPost.image.url} />

          {!blogPost.blogPost.content.json ? "" : <div className='post-rich-text'>{documentToReactComponents(blogPost.blogPost.content.json)}</div>}
        </div>
      </div>
    );
  }
};

export default SingleBlogPost;
