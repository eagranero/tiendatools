import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { CartContext } from "../context/CartContext";
//import {productos as listaProductos} from "../data/productos";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
    
    const {categoria}=useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState( true )

    const { carrito } = useContext(CartContext)

    useEffect(() => {
        getProductos()
    }, [categoria])
    
      const getProductos = () =>{
          const db = getFirestore()
          const productosCollection = collection(db, 'productos')
          let q
          if (props.ofertas=='si') q=query(productosCollection,where('oferta','==',true))
          else q=query(productosCollection,where('categoria','==',categoria))
          getDocs(q).then( snapshot => {
            if (snapshot.size>0){
                const prodData = snapshot.docs.map(d=>({...d.data()}))
                setProductos(prodData)
                setLoading( false )
            }
          })
      }
      
    return(
       
            <div>
                <div>
                    <h2 style={{fontSize:'2rem', textAlign:'center'}}>{props.titulo}</h2>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap' }}>
                    
                    { loading ?
                        <div style={{minHeight:'58vh'}}>
                            <h1 >Cargando Productos...</h1>
                        </div>
                    :
                        productos.map(producto => <Item key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} categoria={producto.categoria} imagen={'/productos/'+producto.imagen} ></Item>)
                    }
                </div>
            </div>
        )
    }
    
    export default ItemListContainer