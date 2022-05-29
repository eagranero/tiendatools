import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/CheckOut.css';
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const CheckOut = () => {
    const { carrito, total, borrarCarrito, eliminarDelCarrito, addCarrito } = useContext(CartContext)
    const [id, setId] = useState('')
    const [finalizado, setFinalizado] = useState(false)

    const [inputData,setInputData]=useState({
        nombre:"",
        apellido:"",
        dni:"",
        fNac:"",
        direccion:"",
        provincia:"",
        cp:"",
        titularTC:"",
        numeroTC:"",
        cSeguridad:""
    });

    const onInputChange = (e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const comprar=(datos)=>{
        const compra={
            'usuario':datos,
            'items':carrito,
            'montoTotal':total,
        }
        enviarFirestore(compra)
    }

    const enviarFirestore =(compra) =>{
        const db = getFirestore()
        const comprasCollection = collection(db,'compras')

        addDoc(comprasCollection,compra).then((response) => { 
            setId(response.id)
            borrarCarrito()
            setFinalizado(true) 
        })
    }

  return (
    
    <div>
        {finalizado?
        <div style={{textAlign:'center'}}>
            <h1>GRACIAS POR COMPRAR EN TIENDATOOL!</h1>
            <h2>El ID de su compra es: {id}</h2>
        </div>
        :    
        <div style={{width:'100%'}}>
            <form>
                <div className='bloque'>
                    <label>Ingrese sus datos personales</label>
                    <div className='SubBloque'>
                        <input name='nombre' type="text" placeholder="Nombres" className="input input-bordered input-primary A50" onChange={onInputChange} />
                        <input name='apellido' type="text" placeholder="Apellido" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                    </div>
                    <div className='SubBloque'>
                        <input name='dni' type="text" placeholder="DNI" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                        <input name='fNac' type="date" placeholder="Fecha de Nacimiento" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                    </div>
                </div>
                <div className='bloque'>
                    <label>Ingrese los datos para el envío</label>
                    <div className='SubBloque'>
                        <input name='direccion' type="text" placeholder="Dirección" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                    </div>
                    <div className='SubBloque'>
                        <input name='provincia' type="text" placeholder="Provincia" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                        <input name='cp' type="text" placeholder="Codigo Postal" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                    </div>
                </div>
                <div className='bloque'>
                    <label>Ingrese los datos para el pago</label>
                    <div className='SubBloque'>
                        <input name='titularTC' type="text" placeholder="Nombre impreso en tarjeta de credito" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                    </div>
                    <div className='SubBloque'>
                        <input name='numeroTC' type="text" placeholder="Numero de tarjeta de credito" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                        <input name='cSeguridad' type="text" placeholder="Codigo de seguridad" className="input input-bordered input-primary A40" onChange={onInputChange}/>
                    </div>
                </div>
            </form>
            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Link to="/cart">
                    <button style={{width:'10rem', marginInline:'0.5rem'}} className="btn btn-primary">Volver al Carrito</button>
                </Link>
                <button style={{width:'10rem', marginInline:'0.5rem'}} onClick={()=>{comprar(inputData)}} className="btn btn-primary">Comprar</button>
            </div>
        </div>
    }
    </div>
  )
}

export default CheckOut