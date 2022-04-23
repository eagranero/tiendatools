import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
    <div className='text-center'>
      <div >
        <h1 className="text-6xl">
          Tienda<span className="text-7xl font-bold text-primary">Tools</span>
        </h1>
        <h2 className="text-2xl ">
          Tienda de Herramientas
        </h2>
      </div>
      <div> 
        <NavBar/>
      </div>
      <div>
        <ItemListContainer/>
      </div>
    </div>
    </>
  );
}

export default App;
