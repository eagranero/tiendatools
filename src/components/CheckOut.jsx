import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/CheckOut.css';
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore, query, where } from "firebase/firestore";

const CheckOut = () => {
    const { carrito, total, borrarCarrito} = useContext(CartContext)
    const [id, setId] = useState('')
    const [comprando, setComprando] = useState(0)
    const [validacion, setValidacion] = useState(true)

    const [inputData,setInputData]=useState({
        nombre:"",
        apellido:"",
        dni:"",
        fNac:"",
        mail1:"",
        mail2:"",
        direccion:"",
        provincia:"",
        cp:"",
        titularTC:"",
        numeroTC:"",
        cSeguridad:""
    });


    useEffect(() => {
        if (inputData.nombre==="" || 
            inputData.apellido==="" || 
            inputData.dni==="" || 
            inputData.fNac==="" || 
            inputData.mail1===""||
            inputData.mail2===""||
            inputData.direccion===""||
            inputData.provincia===""||
            inputData.cp===""||
            inputData.titularTC===""||
            inputData.numeroTC===""||
            inputData.cSeguridad===""||
            inputData.mail1!=inputData.mail2
            ) 
        {setValidacion(false)} else {setValidacion(true)}
    }, [inputData])

    const validar = () =>{
        const nuevaValidacion={...validacion};
        if (inputData.nombre==="") {nuevaValidacion.nombre="red"} else {nuevaValidacion.nombre="hsl(var(--p))"}
        if (inputData.apellido==="") {nuevaValidacion.apellido="red"} else {nuevaValidacion.apellido="hsl(var(--p))"}
        if (inputData.dni==="") {nuevaValidacion.dni="red"} else {nuevaValidacion.dni="hsl(var(--p))"}
        if (inputData.fNac==="") {nuevaValidacion.fNac="red"} else {nuevaValidacion.fNac="hsl(var(--p))"}
        if (inputData.mail1==="") {nuevaValidacion.mail1="red"} else {nuevaValidacion.mail1="hsl(var(--p))"}
        if (inputData.mail2==="") {nuevaValidacion.mail2="red"} else {nuevaValidacion.mail2="hsl(var(--p))"}
        if (inputData.mail1!=inputData.mail2) {nuevaValidacion.mail1="red";nuevaValidacion.mail2="red"}
        if (inputData.direccion==="") {nuevaValidacion.direccion="red"} else {nuevaValidacion.direccion="hsl(var(--p))"}
        if (inputData.provincia==="") {nuevaValidacion.provincia="red"} else {nuevaValidacion.provincia="hsl(var(--p))"}
        if (inputData.cp==="") {nuevaValidacion.cp="red"} else {nuevaValidacion.cp="hsl(var(--p))"}
        if (inputData.titularTC==="") {nuevaValidacion.titularTC="red"} else {nuevaValidacion.titularTC="hsl(var(--p))"}
        if (inputData.numeroTC==="") {nuevaValidacion.numeroTC="red"} else {nuevaValidacion.numeroTC="hsl(var(--p))"}
        if (inputData.cSeguridad==="") {nuevaValidacion.cSeguridad="red"} else {nuevaValidacion.cSeguridad="hsl(var(--p))"}
        setValidacion(nuevaValidacion)
    }

    const onInputChange = (e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const comprar=(datos)=>{
        if(validacion===true){
            const compra={
                'usuario':datos,
                'items':carrito,
                'montoTotal':total,
            }
            setComprando(1)
            enviarFirestore(compra)
        }
        else{
            validar()
        }
    }

    const enviarFirestore =(compra) =>{
        const db = getFirestore()
        const comprasCollection = collection(db,'compras')

        addDoc(comprasCollection,compra).then((response) => { 
            setId(response.id)
            borrarCarrito()
            setComprando(2)
        })
    }


    const render = (c)=>{
        if(c===0){
            return (
                <div style={{marginBottom:'2rem', width:'100%'}}>
                    <form>
                        <div className='bloque'>
                            <label>Ingrese sus datos personales</label>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.nombre}} name='nombre' type="text" placeholder="Nombres" className="input input-bordered input-primary A50" onChange={onInputChange} />
                                <input style={{borderColor:validacion.apellido}} name='apellido' type="text" placeholder="Apellido" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                            </div>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.dni}} name='dni' type="text" placeholder="DNI" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                                <input style={{borderColor:validacion.fNac}} name='fNac' type="date" placeholder="Fecha de Nacimiento" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                            </div>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.mail1}} name='mail1' type="text" placeholder="Direccion de email" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                                <input style={{borderColor:validacion.mail2}} name='mail2' type="text" placeholder="Confirme direccion de email" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                            </div>
                            {((c)=>{if (c.mail1!=c.mail2){return (<h1 style={{textAlign:'center', color:"red"}}>Los correos no coinciden</h1>)}})(inputData)}
                        </div>
                        <div className='bloque'>
                            <label>Ingrese los datos para el envío</label>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.direccion}} name='direccion' type="text" placeholder="Dirección" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                            </div>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.provincia}} name='provincia' type="text" placeholder="Provincia" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                                <input style={{borderColor:validacion.cp}} name='cp' type="text" placeholder="Codigo Postal" className="input input-bordered input-primary A50" onChange={onInputChange}/>
                            </div>
                        </div>
                        <div className='bloque'>
                            <label>Ingrese los datos para el pago</label>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.titularTC}} name='titularTC' type="text" placeholder="Nombre impreso en tarjeta de credito" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                            </div>
                            <div className='SubBloque'>
                                <input style={{borderColor:validacion.numeroTC}} name='numeroTC' type="text" placeholder="Numero de tarjeta de credito" className="input input-bordered input-primary A100" onChange={onInputChange}/>
                                <input style={{borderColor:validacion.cSeguridad}} name='cSeguridad' type="text" placeholder="Codigo de seguridad" className="input input-bordered input-primary A40" onChange={onInputChange}/>
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
            )
        } else if (c===1){
            return <h1 style={{height:'58vh',textAlign:'center'}} className='text-2xl'>COMPRANDO</h1>
        }
        else return (
            <div style={{height:'58vh',textAlign:'center'}}>
            <h1 className='text-3xl'>¡Gracias por comprar en Tienda<span className=' text-primary'>Tools!</span></h1>
            <h2>El ID de su compra es: {id}</h2>
            <Link to="/">
                <button style={{width:'auto', margin:'1rem'}} className="btn btn-primary">Volver al inicio</button>
            </Link>
            </div>
        )

    }



  return (
    render(comprando)  
  )
}

export default CheckOut