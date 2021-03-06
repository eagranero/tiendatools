import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const { carrito, total, borrarCarrito, eliminarDelCarrito, addCarrito, comprar } = useContext(CartContext)
    const [vacio, setVacio] = useState( true )
    

    useEffect(() => {
        if (carrito.length!=0) setVacio(false)
        else setVacio(true)
    }, [carrito])

  return (

    <div className="overflow-x-auto w-full">
        { vacio ?
        <div style={{height:'60vh', textAlign:'center'}}>
            <h1 className='text-2xl'>El carrito se encuentra vacio!</h1>
            <Link to="/">
                <button style={{width:'auto', margin:'1rem'}} className="btn btn-primary">Agregar Productos</button>
            </Link>
        </div>
         :       
        <div style={{minHeight:'60vh'}}>
        <table className="table w-full">
        <thead>
        <tr>
            <th>Producto</th>
            <th>Categoria</th>
            <th style={{textAlign:'center'}}>Cantidad</th>
            <th style={{textAlign:'center'}}>Precio</th>
            <th style={{textAlign:'center'}}>Subtotal</th>
        </tr>
        </thead>
        <tbody>
        {carrito.map(elem => 
        <tr key={elem.detalle.id}>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={elem.detalle.imagen} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{elem.detalle.nombre}</div>
                    <div className="text-sm opacity-50">ID: {elem.detalle.id}</div>
                    </div>
                </div>
            </td>
            <td>
                {elem.detalle.categoria}
            </td>
            <td style={{textAlign:'center'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <button style={{width:'2.5rem'}} className="btn btn-outline btn-primary" onClick={()=>{eliminarDelCarrito(elem.detalle.id)}}>
                        {" "}
                        -{" "}
                    </button>
                    <p style={{marginInline:'1.25rem', display:'flex', alignItems:'center'}}>{elem.cantidad}</p>
                    <button style={{width:'2.5rem'}} className="btn btn-outline btn-primary" onClick={()=>{addCarrito({detalle: elem.detalle,cantidad: 1})}}>
                        {" "}
                        +{" "}
                    </button>
                </div>
            </td>
            <th style={{textAlign:'center'}}>
                ${elem.detalle.precio}
            </th>
            <th style={{textAlign:'center'}}>
                ${elem.detalle.precio*elem.cantidad}
            </th>
        </tr>
        )}
        </tbody>

        <tfoot style={{borderTop:'solid 2px'}}>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th style={{textAlign:'center', fontSize:'1.25rem'}}>total:</th>
                <th style={{textAlign:'center', fontSize:'1.5rem'}}>${total}</th>
            </tr>
        </tfoot>     
        </table>
        <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <button style={{width:'10rem', marginInline:'0.5rem'}} onClick={()=>{borrarCarrito()}} className="btn btn-primary">Vaciar Carrito</button>
            <Link to="/checkout">
                <button style={{width:'10rem', marginInline:'0.5rem'}} className="btn btn-primary">CheckOut</button>
            </Link>
        </div>
        </div>
        }
    </div>
  )
}

export default Cart