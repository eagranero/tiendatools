import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
    const { addCarrito, carrito } = useContext(CartContext)

    const [contador, setContador] = useState(0);
  
    function onAdd(cant) {
        addCarrito({ detalle: props, cantidad: cant });
        setContador(cant)
    }

    return (
    <>
    <div style={{marginInline:'0.75rem'}} className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img  src={props.imagen} alt={props.nombre}/></figure>
        <div style={{maxWidth:'120vh'}} className="card-body">
            <h3 className="text-sm card-title">{props.categoria}</h3>
            <h2 className="text-4xl card-title">{props.nombre}</h2>
            <p>{props.descripcion}</p>
           
            <div  className="card-actions justify-center" style={{alignItems:'end'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    
                    <div>
                        {contador === 0 ? (
                        <ItemCount onAdd={onAdd} initial={1} stock={9} />
                        ) : (
                        <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
                            <Link to="/cart">
                            <button style={{marginInline:'0.5rem'}} className="btn btn-outline btn-primary">Terminar compra</button>
                            </Link>
                            <Link to="/">
                            <button style={{marginInline:'0.5rem'}} className="btn btn-outline btn-primary">Seguir comprando</button>
                            </Link>
                        </div>
                        )}
                    </div>                     
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail