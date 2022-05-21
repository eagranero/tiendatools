import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Item = (data) => {

  const { addCarrito, carrito } = useContext(CartContext)
  
return (
    <>
    <div style={{width:'15rem', margin:'20px 20px'}} className="card card-compact w-96 bg-base-100 shadow-xl" >
        <Link to={'/item/'+data.id}>
            <figure><img src={data.imagen} alt={data.nombre}/></figure>
            <div className="card-body">
                <div>
                    <p style={{fontSize:'0.75rem', textAlign:'left'}}>{data.categoria}</p>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                        <h2 style={{ display:'flex', flexDirection:'column', justifyContent:'center',fontSize:'1.25rem', fontWeight:'bold', textAlign:'initial'}}>{data.nombre}</h2>
                        <label style={{marginBlock:'0.5rem',display:'flex', flexDirection:'column', justifyContent:'center', fontSize:'1.5rem'}}>{'$'+data.precio}</label>
                    </div>
                </div>
            </div>
        </Link>
        <div style={{marginBlock:'5px'}} className="card-actions justify-center">
            <button onClick={()=>{addCarrito({detalle:data,cantidad:1})}} className="btn btn-outline btn-primary">Agregar al Carrito</button>
        </div>
    </div>
    </>
  )
}

export default Item