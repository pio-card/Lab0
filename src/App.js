import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import component statements
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import WCM from "./Pages/WCM";
import TopNavBar from "./Components/TopNavBar";
import Header from "./Components/Header";
import BottomNavBar from "./Components/BottomNavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <main>
        <TopNavBar />
        <Header />
        <BottomNavBar />
        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/WCM" component={WCM} />
        </Switch>
        <Footer />
      </main>
    </Router>
    
  );
}
export default App;
