import React from 'react'

const ItemDetail = (props) => {
  
    return (
    <>
    <div style={{marginInline:'0.75rem'}} className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img  src={props.imagen} alt={props.nombre}/></figure>
        <div style={{maxWidth:'120vh'}} className="card-body">
            <h3 className="text-sm card-title">{props.categoria}</h3>
            <h2 className="text-4xl card-title">{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <div  className="card-actions justify-end" style={{alignItems:'end'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h4 style={{textAlign:'center'}}><strong>Ingrese cantidad</strong></h4>
                    <input type="number" placeholder='1' style={{maxWidth:'10rem', textAlign:'center'}} className="input input-bordered input-warning w-full max-w-xs" />
                </div>
                <button style={{display:'flex', flexDirection:'column'}} className="btn btn-outline btn-primary">Comprar Ahora</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail