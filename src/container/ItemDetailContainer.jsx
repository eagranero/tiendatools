
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';
//import {productos as listaProductos} from "../data/productos";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = (props) => {
  
    const {productId}=useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState( 0 )
    
    useEffect(() => {   
        getItemDetail()
    }, [productId])
            
    const getItemDetail = () =>{
        const db = getFirestore()
        const productosCollection = collection(db, 'productos')
        
        
        const q=query(productosCollection,where('id','==',parseInt(productId)))
        const estado=getDocs(q)
        .then(
            snapshot => 
            {
                if (snapshot.size>0){
                    const prodData = snapshot.docs.map(d=>({...d.data()}))
                    setItem(...prodData)
                    setLoading( 1 )
                }
                else setLoading( 2 )
            })
    }

    const render=(l)=>{
        if (l===0){
            return <h1 className='text-2xl' style={{textAlign:'center'}}>Cargando Producto...</h1>
        }else if(l===1){
            return <ItemDetail key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} categoria={item.categoria} imagen={'/productos/'+item.imagen} descripcion={item.descripcion}></ItemDetail>
        }else{
            return <h1 className='text-2xl' style={{textAlign:'center'}}>Producto no encontrado</h1>
        }
    }

      
    return (
        <div style={{minHeight:'58vh'}}>
            {render(loading)}
        </div>

    )
}

export default ItemDetailContainer