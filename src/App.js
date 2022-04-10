import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>
      <h1>
        TiendaTool
      </h1>
      <h2>
        Tienda de Herramientas
      </h2>
      <form>
        <input type="text" id="nombre" placeholder="Nombre"></input>
        <input type="text" id="apellido" placeholder="Apellido"></input>
        <input type="text" id="dni" placeholder="DNI"></input>
        <input type="text" id="dni" placeholder="Domicilio"></input>
        <button type="submit">Comprar</button>      
      </form>
    </div> 
    </>
  );
}

export default App;
