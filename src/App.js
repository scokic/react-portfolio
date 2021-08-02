import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { __RouterContext } from "react-router";
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

import ReactGA from "react-ga";

import { useTransition, animated } from "react-spring";

function App() {
  // fetching blog posts from contentful
  const [blogPosts, setBlogPosts] = useRecoilState(RecoilBlogPosts);

  // defining form for blog posts json response

  const query = `{
    blogPostCollection {
      items {
        sys {
          id
          publishedAt
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

  let initializaGoogleAnalytics = () => {
    ReactGA.initialize("G-4XXQZSCZNV");
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  useEffect(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/umewgum9wl89/`, {
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
  }, []);

  // end of fetching blog posts from contentful

  const location = useLocation();
  const transitions = useTransition(location, {
    from: { display: "none", height: "100%", position: "absolute", width: "100%", transform: "translate(0, -25px)" },
    enter: { display: "block", height: "100%", transform: "translate(0, 0)" },
    leave: { display: "none" },
  });

  // dark theme state and function

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    document.body.classList.toggle("dark");
    let prevState = darkTheme;
    setDarkTheme(!prevState);
  };

  return (
    initializaGoogleAnalytics(),
    (
      <div className='App'>
        <ScrollToTop />
        <Navbar darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        <ScrollToTopArrow />

        <div className='absolute-wrapper'>
          {transitions((props, item) => (
            <animated.div style={props}>
              <Switch location={item}>
                <Route exact path='/' component={Homepage} className='page-content' />
                <Route exact path='/portfolio' component={Portfolio} className='page-content' />
                <Route exact path='/contact' component={Contact} className='page-content' />
                <Route exact path='/blog-posts' component={BlogPosts} className='page-content' />
                <Route component={SingleBlogPost} path='/blog-posts/:id' className='page-content' />
                <Route path='/' render={() => <div>404</div>} className='page-content' />
              </Switch>
              <Footer />
            </animated.div>
          ))}
        </div>
      </div>
    )
  );
}

export default App;
