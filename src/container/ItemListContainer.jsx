import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import {productos as listaProductos} from "../data/productos";

const ItemListContainer = (props) => {
    
    const {categoria}=useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState( true )

    useEffect(() => {
        
        const getProductos = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(listaProductos)
            },2000)  
        })

        getProductos.then((result)=>{
            
            setLoading( false )
            if (props.ofertas=='si') setProductos(result.filter(p => p.oferta == 'si'))
            else setProductos(result.filter(p => p.categoria == categoria))
            //setProductos(result)
        })
      }, [categoria])
    
      
    return(
       
        <>
        <div>
            <div>
                <h2 style={{fontSize:'2rem', textAlign:'center'}}>{props.titulo}</h2>
            </div>

            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap' }}>
                
                { loading ?
                    <h1>Cargando Productos...</h1>
                :
                    productos.map(producto => <Item key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} categoria={producto.categoria} imagen={'/productos/'+producto.imagen} ></Item>)
                }
            </div>
        </div>
        </>
        )
    }
    
    export default ItemListContainer