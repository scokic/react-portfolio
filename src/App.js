import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./.sections/navbar/navbar.component";
import Footer from "./.sections/footer/footer.component";
import { RecoilRoot } from "recoil";

import "./App.scss";
import Homepage from "./.pages/homepage/homepage.component";
import Portfolio from "./.pages/portfolio/portfolio.component";
import Contact from "./.pages/contact/contact.component";
import ScrollToTopArrow from "./.components/scroll-to-top-arrow/scroll-to-top-arrow.component";
import ScrollToTop from "./.sections/scroll-to-top/scroll-to-top.component";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <ScrollToTopArrow />
        <RecoilRoot>
          <Switch>
            <Route component={Portfolio} path='/portfolio' />
            <Route component={Contact} path='/contact' />
            <Route component={Homepage} path='/' />
          </Switch>
        </RecoilRoot>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
