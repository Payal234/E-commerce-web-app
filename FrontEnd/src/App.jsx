
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <div className='App'>

        <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={banner} category="men"/>} />
            <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<LoginSignup />}/>
          </Routes>
          <Footer />
      
    </div>
  );
}

export default App;
