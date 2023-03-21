import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomeComponent from './pages/Dashboard/Home';
import { ThemeProvider } from 'react-bootstrap';
import { Header } from './common/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer/Footer';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
function App() {
  var isHeaderAvailable = window.document.location.href.indexOf("/login") !== -1 || window.document.location.href.indexOf("/register") !== -1 ? false : true
  const [visible, setVisible] = useState();
  const location = window.document.location
  useEffect(() => {
    isHeaderAvailable = window.document.location.href.indexOf("/login") !== -1 || window.document.location.href.indexOf("/register") !== -1 ? false : true
    setVisible(isHeaderAvailable)
  }, [location]
  )

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <BrowserRouter>
        {/* {
          isHeaderAvailable &&
       
         
        } */}
 <Header></Header>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}>
          </Route>
          <Route path='/home' element={<HomeComponent></HomeComponent>}>
          </Route>
          <Route path='/productPage' element={<Products></Products>}>
          </Route>
          <Route path='/productPage/:id' element={<ProductDetail></ProductDetail>}>
          </Route>
          <Route path='/aboutus' element={<HomeComponent></HomeComponent>}>
          </Route>
          <Route path='/contactus' element={<HomeComponent></HomeComponent>}>
          </Route>
          <Route path='/register' element={<Register></Register>}>
          </Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
