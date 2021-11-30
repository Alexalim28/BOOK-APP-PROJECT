import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
