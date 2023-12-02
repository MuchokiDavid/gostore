import './App.css';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Message from './components/Message';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route exact path="/cart" element= "" />
        <Route exact path="/checkout" element="" />
        <Route exact path="/aboutus" element="" />
        <Route exact path="/contactus" element="" />
        <Route exact path="/login" element={<LogIn/>} />
        <Route exact path="/signup" element= {<SignUp/>} />
      </Routes>
      {/* <Navigation/> */}
      {/* <ProductList/> */}
      {/* <LogIn/> */}
      {/* <SignUp /> */}
      {/* <Message/> */}
      <Footer/>
    </div>
  );
}

export default App;
