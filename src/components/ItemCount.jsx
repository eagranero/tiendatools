import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [contador, setcontador] = useState(initial);

  const handleAumentar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  };

  const handlerRestar = () => {
    if (contador > initial) {
      setcontador(contador - 1);
    }
  };

  const agregar = () => {
    onAdd(contador);
  };

  return (
    <div>
        <h4><strong>Ingrese cantidad</strong></h4>
        <div style={{width:'20rem', marginTop:'0.5rem', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div >
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <button className="btn btn-outline btn-primary" onClick={handleAumentar}>
                    {" "}
                    +{" "}
                </button>
                <p style={{marginInline:'1.25rem', display:'flex', alignItems:'center'}}>{contador}</p>
                <button className="btn btn-outline btn-primary" onClick={handlerRestar}>
                    {" "}
                    -{" "}
                </button>
                </div>
            </div>
            <button className="btn btn-outline btn-primary" onClick={agregar}>
                Agregar al carrito
            </button>
        </div>
    </div>
  );
}

export default ItemCount;