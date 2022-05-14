import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = (props) => {
    const { carrito, borrarCarrito } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    

    useEffect(() => {
        let c=0,t=0;
        carrito.forEach((p=>{
            c=c+p.cantidad
            t=t+(p.cantidad*p.detalle.precio)
        }))
        setTotal(t)
        setCantidad(c)
    }, [carrito])
    

    return(
        <>
        <div>
            <label tabindex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{cantidad}</span>
                </div>
            </label>
            <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{cantidad} Items</span>
                    {/*console.log(carrito)*/}
                    {carrito.map(elem => <div style={{display:'flex', flexDireccion:'row', justifyContent:'space-between'}}><p key={elem.detalle.id}>{elem.detalle.nombre}</p> <p style={{textAlign:"right"}}>{elem.cantidad}</p></div>)}
                    <span className="text-info">Total: ${total}</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">Ver carrito</button>
                        <button onClick={()=>{borrarCarrito()}} className="btn btn-primary btn-block">Borrar carrito</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
    
    export default CartWidget