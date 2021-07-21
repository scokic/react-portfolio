import React from "react";
import "./blog-posts.styles.scss";
import { RecoilBlogPosts } from "../../atoms/blogPosts";
import { useRecoilState } from "recoil";
import BlogPostCard from "../../.components/blog-post-card/blog-post-card.component";

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(RecoilBlogPosts);
  const blogPostList = blogPosts.map((post) => <BlogPostCard key={post.sys.id} postData={post} />);

  if (!blogPosts) {
    return <div>loading</div>;
  } else {
    return (
      <div className='blog-posts-section-wrapper section-wrapper'>
        <div className='blog-posts-section-container section-container'>
          <div className='blog-posts-text-wrapper'>
            <h2 className='blog-posts-title'>The Blog</h2>
            <p className='blog-posts-description'>I love learning about frontend and here you may find some lessons I picked up while learning React and stuff.</p>
          </div>

          {blogPostList}
        </div>
      </div>
    );
  }
};

export default BlogPosts;
