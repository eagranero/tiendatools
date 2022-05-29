import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Item from './components/Item';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';


function App() {
  return (
    <>
    <div className='mx-10'>
    <BrowserRouter>
        <div style={{height:'15vh',textAlign:'center'}}>
          <Link to='/'>
            <h1 className="text-6xl">
              Tienda<span className="text-7xl font-bold text-primary">Tools</span>
            </h1>
          </Link>
          <h2 className="text-2xl ">
            Tienda de Herramientas
          </h2>
        </div> 
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer ofertas='si' titulo='OFERTAS' elementos={Item}/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoria' element={<ItemListContainer ofertas='no' elementos={Item}/>}/>
            <Route path='/cart' element={<Cart></Cart>}/>
            <Route path='/checkout' element={<CheckOut></CheckOut>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    <footer className=" footer items-center p-4 text-neutral-content ">
      <div className="items-center grid-flow-col">
        <img src='/favicon.png' width={'18'} height={'18'}></img> 
        <p>Copyright © 2022 - All right reserved</p>
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a><img src='/facebook.png' width={'24'} height={'24'}></img></a> 
        <a><img src='/instagram.png' width={'24'} height={'24'}></img></a> 
        <a><img src='/twitter.png' width={'24'} height={'24'}></img></a> 
        <a><img src='/contacto.png' width={'24'} height={'24'}></img></a> 
        </div>
    </footer>
    </>
  );
}

export default App;
