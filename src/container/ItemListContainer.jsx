import { useEffect, useState } from "react";
import Item from "../components/Item";
import {ofertas as listaOfertas} from "../data/ofertas";

const ItemListContainer = (props) => {
    const [ofertas, setOfertas] = useState([])

    useEffect(() => {
        
        const getOfertas = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(listaOfertas)
            },2000)  
        })

        getOfertas.then((result)=>{
            console.log(result)
            setOfertas(result)
        })
      }, [])
    
    return(
       
        <>
            <div>
                <h2 style={{fontSize:'2rem', textAlign:'center'}}>{props.titulo}</h2>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap' }}>
                {ofertas.map(oferta => <Item key={oferta.id} nombre={oferta.nombre} precio={oferta.precio} categoria={oferta.categoria} imagen={oferta.imagen}></Item> )}
            </div>
        </>
        )
    }
    
    export default ItemListContainer