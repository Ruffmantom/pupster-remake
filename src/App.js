import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/About";
import About from "./components/pages/About";
import Blog from "./components/pages/Discover";
import Contact from "./components/pages/Search";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer></Footer>
    </Router>




  );
}

export default App;
