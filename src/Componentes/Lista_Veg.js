import React from "react"
import '../estilos/productos.css';



export const Vegetal = (props) => {
    return(
        
        <div className="content">
            <img className="imagen" src={props.img} alt="imagen"/>
            <h3 className="catego">{props.nombre}</h3>
            <p className="preci">1 LB ${props.precio}</p>
            <li className="btnp" style={{backgroundColor: (props.color)}}><a id={props.id} onClick={props.Mostrar} >Ver mas</a></li>
        </div>
    )
}

export default Vegetal