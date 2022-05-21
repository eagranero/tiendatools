
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';
//import {productos as listaProductos} from "../data/productos";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = (props) => {
  
    const {productId}=useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState( true )
    
    useEffect(() => {   
        getItemDetail()
    }, [productId])
            
    const getItemDetail = () =>{
        const db = getFirestore()
        const productosCollection = collection(db, 'productos')
        const q=query(productosCollection,where('id','==',parseInt(productId)))
        getDocs(q).then( snapshot => {
          if (snapshot.size>0){
              const prodData = snapshot.docs.map(d=>({...d.data()}))
              setItem(...prodData)
              console.log(prodData)
              setLoading( false )
          }
        })
    }

      
    
  
    return (
        <>
            <div>
                { loading ?
                    <h1 style={{textAlign:'center'}}>Cargando Producto...</h1>
                :
                    <ItemDetail key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} categoria={item.categoria} imagen={'/productos/'+item.imagen} descripcion={item.descripcion}></ItemDetail>        
                 }
            </div>
        </>
    )
}

export default ItemDetailContainer