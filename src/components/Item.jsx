import React from 'react'

const Item = (props) => {
  return (
    <>
    <div style={{width:'15rem', margin:'20px 20px'}} className="card card-compact w-96 bg-base-100 shadow-xl" >
        <figure><img src={props.imagen} alt={props.nombre}/></figure>
        <div className="card-body">
            <p style={{fontSize:'0.75rem', textAlign:'left'}}>{props.categoria}</p>
            <div style={{height:'30px', display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                <h2 style={{display:'flex', flexDirection:'column', justifyContent:'end',fontSize:'1.25rem', fontWeight:'bold', textAlign:'initial'}}>{props.nombre}</h2>
                <label style={{display:'flex', flexDirection:'column', justifyContent:'end', fontSize:'1.5rem'}}>{props.precio}</label>
            </div>
            <div style={{marginBlock:'10px'}} className="card-actions justify-center">
                <button className="btn btn-outline btn-primary">Comprar Ahora</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Item