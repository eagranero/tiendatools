import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Item from './components/Item';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartProvider from './context/CartContext';


function App() {
 

  return (
    <>
    <div className='mx-10'>
    <BrowserRouter>
        <div style={{textAlign:'center'}}>
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
         
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer ofertas='si' titulo='OFERTAS' elementos={Item}/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoria' element={<ItemListContainer ofertas='no' elementos={Item}/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
