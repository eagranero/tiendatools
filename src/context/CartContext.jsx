import { createContext, useState } from "react";

//valor por defecto
export const CartContext = createContext({
    carrito: [],
    addCarrito: () =>{},
    eliminarDelCarrito: () =>{},
    borrarCarrito: () =>{}
});
//---------------------------

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const addCarrito = (producto) => {
        let indice = carrito.findIndex(p => p.detalle.nombre === producto.detalle.nombre)

        if (indice===-1) setCarrito(carritoActual =>{return carritoActual.concat(producto)})
        else setCarrito(carritoActual => {

                const nuevoCarrito=[...carritoActual]
                const auxCant=nuevoCarrito[indice].cantidad
                nuevoCarrito[indice].cantidad=auxCant+producto.cantidad
                return nuevoCarrito
            })
    }

    const borrarCarrito = () => {
        setCarrito( carritoActual =>{
            return []
        })
    }

    const eliminarDelCarrito = (producto) => {
        let indice = carrito.findIndex(p => p.detalle.id === producto)
        if (indice != -1){
            setCarrito(carritoActual=>{
                const nuevoCarrito=[...carritoActual]
                if (nuevoCarrito[indice].cantidad>1) nuevoCarrito[indice].cantidad-=1
                else nuevoCarrito.splice(indice,1)
                return nuevoCarrito
            })
        }
    }

    const contexto = {
        carrito,
        addCarrito,
        borrarCarrito,
        eliminarDelCarrito
    }

    return(
        <CartContext.Provider value={contexto}>
            {children}    
        </CartContext.Provider>
    )
}

export default CartProvider