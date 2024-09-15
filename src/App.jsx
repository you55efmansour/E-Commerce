import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import SignUp from "./components/signUp/SignUp";
import LogIn from "./components/logIn/LogIn";
import Cart from "./components/cart/Cart";
import Love from "./components/love/Love";
import View from "./components/view/View";
function App() {
  const token = localStorage.getItem("token")
  
  const location = useLocation()
  return (
  <>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Home tok = {token? true : false}/> 
                </div>
                <Footer/>
              </>
            }
            />
            <Route path="/contact" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Contact/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/about" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <About/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/signUp" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <SignUp/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/logIn" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <LogIn/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/cart" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Cart/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/love" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Love/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path={"/view/:id/:category/:offer"} element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <View/>
                </div>
                <Footer/>
              </>
            }/>
          </Routes>
  </>
  );
}

export default App;
