
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';
import {productos as listaProductos} from "../data/productos";

const ItemDetailContainer = (props) => {
  
    const {productId}=useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState( true )
    
    useEffect(() => {   
        (async () => {
            
            const itemDetail = await getItemDetail()
            if (itemDetail) {
                setLoading(false) 
                setItem(itemDetail) 
            } //Si hay un producto lo muestro
        })() //Funciona anonima, asincrona y autoejecutable       
    }, [productId])


      const getItemDetail = () =>{
          return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(listaProductos.find(p => p.id == productId))
            },2000)  
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