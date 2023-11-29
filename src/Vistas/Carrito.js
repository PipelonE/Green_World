import React from 'react'
import '../estilos/Modal.css';
import Eliminar from '../imagenes/eliminar.png';
import Navbar from '../Componentes/Navbar';
import Slider from '../Componentes/Slider';
import Manzana from '../imagenes/manzana.jpg';
import Aguacate from '../imagenes/aguacate.jpg';
import Banano from '../imagenes/banano.jpg';
import Cebollla from '../imagenes/cebolla.jpg';
import Criollas from '../imagenes/criollas.jpg';
import Fresas from '../imagenes/fresas.jpg';
import Mandarinas from '../imagenes/mandarina.jpg';
import Mangos from '../imagenes/mangos.jpg';
import Manzana_v from '../imagenes/manzana_verde.jpg';
import Moras from '../imagenes/Moras.jpg';
import Naranja from '../imagenes/naranja.jpg';
import Pepinos from '../imagenes/pepinos.jpg';
import Piña from '../imagenes/piña.jpg';
import Tomates from '../imagenes/tomates.jpg';
import Zanahoria from '../imagenes/zanahoria.jpg';
import carrito from '../imagenes/carrito.png';

export const Carrito = () => {

  const mockimagenes = [Manzana, Aguacate, Banano, Cebollla, Criollas, Fresas, Mandarinas, Mangos, Manzana_v, Moras, Naranja, Pepinos, Piña, Zanahoria,Tomates];
  let compras = [
    {
      img: Criollas,
      nombre: "Criollas",
      id: "Criollas",
      Precio: "8000 ",
      color:"#ffd700",
      descripción: "",
  },
  {
      img: Tomates,
      nombre: "Tomates",
      id: "Tomates",
      Precio: "8000 ",
      color:"#ec5353",
      descripción: "",
  },
  {
      img: Naranja,
      nombre: "Naranja",
      id: "Naranja",
      Precio: "8000 ",
      color:"#ff7e00",
      descripción: "",
  },
  {
      img: Moras,
      nombre: "Moras",
      id: "Moras",
      Precio: "8000 ",
      color:"#933e95",
      descripción: "",
  },
  {
      img: Fresas,
      nombre: "Fresa",
      id: "Fresa",
      Precio: "8000 ",
      color:"#ff0000",
      descripción: "",
  },
  {
      img: Manzana_v,
      nombre: "Manzana_v",
      id: "Manzana_v",
      Precio: "8000 ",
      color:"#48ff31",
      descripción: "",
  },
  
]

  return (
    <div>
      <Navbar/>
      <Slider/><br></br>
      <div>
        <h3 className="otros">Otros Productos</h3><br></br>
        <div className='container_carrucel'>
          <button className='arrowbtn'>🢀</button>
          {mockimagenes.map((imagen, index) => {
            return <img className='imagenesm' key={index} src={imagen} alt='imagen'/>
          })}
          <button className='arrowbtn'>🢂</button>
        </div><br></br>
        <h3 className="otros">Carrito</h3><br></br>
        <div className='carrito_area'>
          <img src={carrito} className='carritoimg' />
          <div className="tareas-lista-principal">
                <h1>Mis Productos</h1>
                <form className="tarea_form">
                  <input className="tarea_input" type="text" placeholder="Escribe el nombre del producto"/>
                  <li className="btn_tarea"><a>Buscar Producto</a></li>
                </form><br></br>
                <div>
                  {compras.map((compra, index) => {
                    return(
                      <div className="tarea-contenedor" style={{backgroundColor: (compra.color)}} key={index}>
                        <div className="tarea-texto">
                          <img className="produc_img" src={compra.img} alt="eli" />
                          <h6>{compra.nombre}</h6>
                          <p>4 Libras</p>
                          <p>$ {compra.Precio}</p>
                          <img className="eli" src={Eliminar} alt="eli" />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='factu'>
                  <div className='valor_f'>
                    <p className='numero_f'>Precio Total  :</p>
                    <p className='Total_f'>$ 48000</p>
                  </div>
                  <li className="btn_compra"><a>Comprar</a></li>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrito