import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./.sections/navbar/navbar.component";
import Footer from "./.sections/footer/footer.component";
import { useRecoilState } from "recoil";
import { RecoilBlogPosts } from "./atoms/blogPosts";

import "./App.scss";
import Homepage from "./.pages/homepage/homepage.component";
import Portfolio from "./.pages/portfolio/portfolio.component";
import Contact from "./.pages/contact/contact.component";
import ScrollToTopArrow from "./.components/scroll-to-top-arrow/scroll-to-top-arrow.component";
import ScrollToTop from "./.sections/scroll-to-top/scroll-to-top.component";
import BlogPosts from "./.pages/blog-posts/blog-posts.component";
import SingleBlogPost from "./.pages/single-blog-post/single-blog-post.component";

function App() {
  // fetching blog posts from contentful

  const [blogPosts, setBlogPosts] = useRecoilState(RecoilBlogPosts);

  const query = `{
    blogPostCollection {
      items {
        sys {
          id
        }
        content{
          json
        }
        title
        summary
        image {
          url
        }
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
        setBlogPosts(data.blogPostCollection.items);
      });
  });

  // end of fetching blog posts from contentful

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <ScrollToTopArrow />
        <Switch>
          <Route component={Homepage} exact path='/' />
          <Route component={Portfolio} exact path='/portfolio' />
          <Route component={Contact} exact path='/contact' />
          <Route component={BlogPosts} exact path='/blog-posts' />
          <Route component={SingleBlogPost} path='/blog-posts/:id' />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
