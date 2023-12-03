import './App.css';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Route, Routes,useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Products from './pages/Shop';
import About from './pages/About';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './components/CartContext';

function App() {
  const location = useLocation()
  return (
    <CartProvider>
    <div className="App">
      <Routes>
        <Route exact path="/" element="" />
        <Route exact path="/shop" element={<Products/>} />
        <Route exact path="/cart" element= {<CartPage/>} />
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route exact path="/aboutus" element={<About/>} />
        <Route exact path="/contactus" element={<Contact/>} />
        <Route exact path="/login" element={<LogIn/>} />
        <Route exact path="/signup" element= {<SignUp/>} />
      </Routes>

      {/* Condition to hide components*/}
      {location.pathname !== '/shop' && location.pathname !== '/cart' && location.pathname !== '/checkout' && location.pathname !== '/aboutus' && location.pathname !== '/contactus' && location.pathname !== '/login' && location.pathname !== '/signup' && (
          <div>
            <Navigation/>
            <br/>
            <br/>
            <br/>
            <Footer/>
          </div>
        )}
        

    </div>
    </CartProvider>
  );
}

export default App;
