import { createContext, useState } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

//valor por defecto
export const CartContext = createContext({
    carrito: [],
    total: 0,
    addCarrito: () =>{},
    eliminarDelCarrito: () =>{},
    borrarCarrito: () =>{},
});
//---------------------------

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const calcularTotal= (aux)=>{
        let c=0,t=0
        aux.forEach((p=>{
            c=c+p.cantidad
            t=t+(p.cantidad*p.detalle.precio)
        }))
        setTotal(t)
    }

    const addCarrito = (producto) => {
        let indice = carrito.findIndex(p => p.detalle.nombre === producto.detalle.nombre)

        if (indice===-1) setCarrito(carritoActual =>{      
            const nuevoCarrito=carritoActual.concat(producto)
            calcularTotal(nuevoCarrito)
            return nuevoCarrito
        })
        else setCarrito(carritoActual => {
                const nuevoCarrito=[...carritoActual]
                const auxCant=nuevoCarrito[indice].cantidad
                nuevoCarrito[indice].cantidad=auxCant+producto.cantidad
                calcularTotal(nuevoCarrito)
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
        total,
        addCarrito,
        borrarCarrito,
        eliminarDelCarrito,
    }

    return(
        <CartContext.Provider value={contexto}>
            {children}    
        </CartContext.Provider>
    )
}

export default CartProvider