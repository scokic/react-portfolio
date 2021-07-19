import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./.sections/navbar/navbar.component";
import ScrollToTop from "./.components/scroll-to-top/scroll-to-top.component";
import Footer from "./.sections/footer/footer.component";

import "./App.scss";
import Homepage from "./.pages/homepage/homepage.component";
import Portfolio from "./.pages/portfolio/portfolio.component";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route component={Portfolio} path='/portfolio' />
          <Route component={Homepage} path='/' />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
