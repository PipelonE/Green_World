import React from 'react'
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';
import Somos from '../imagenes/Somos.jpeg';
import Vision from '../imagenes/ojo.png';
import Mision from '../imagenes/objetivo.png';
import User from '../imagenes/usuario-de-perfil.png';
import '../estilos/somos.css';


function Nosotros() {
    let empleados = [
        {
            nombres: "Valery",
            apellido: "Montenegro",
            cargo: "Caja",
            foto: User,
        },
        {
            nombres: "Gaby",
            apellido: "Arguello",
            cargo: "asesora",
            foto: User,
        },
        {
            nombres: "Julian",
            apellido: "Martinez",
            cargo: "Caja",
            foto: User,
        },
        {
            nombres: "William",
            apellido: "Davila",
            cargo: "Caja",
            foto: User,
        },
        {
            nombres: "Daniel",
            apellido: "Espinoza",
            cargo: "Caja",
            foto: User,
        },
        {
            nombres: "Francy",
            apellido: "Rodriguez",
            cargo: "Gerente",
            foto: User,
        }
    ]

  return (
    <div className='somos'>
        <Navbar/>
        <Slider/><br></br>
        <h1 className='quienes'>¿Quienes Somos?</h1><br></br>
        <div className='infoe'>
            <img className='somos_img' src={Somos}/>
            <div className='historia'>
                <p style={{textAlign: "center"}}>El objetivo del presente documento fue crear un plan de negocios de una distribuidora de frutas y verduras en Bogotá, Colombia, desde una perspectiva que
                contribuyera al desarrollo nutricional de la población colombiana de manera segura, práctica y agradable. Promoviendo el consumo de frutas y verduras y
                manteniendo una alimentación sana, a través de un producto que fuera integral en calidad, practicidad y seguridad para el consumo. El mercado objetivo es de
                personas que vivan en Bogotá, de estratos 3,4,5 y 6, que estén interesadas en mantener una alimentación saludable y que no hayan podido hacerlo por falta de
                tiempo para la preparación de estos alimentos. Se llegó a la conclusión, de que por medio del producto ofrecido por Cosechamos Colombia, se logra el desarrollo
                de un producto integral en calidad, practicidad y seguridad de consumo. Pues al ser frutas y verduras 100% orgánicas lavadas, peladas y cortadas; elegidas por los
                propios clientes, se estaría cumpliendo con la promesa de valor del objetivo del negocio. Y finalmente, se pudo reconocer que es un negocio viable y rentable, y
                puede ser implementado efectivamente, generando beneficios económicos a la compañía.</p>
            </div>
        </div><br></br>
        <div className='myv'>
            <img src={Mision}/>
            <div>
                <h3>Mision</h3>
                <p>Nuestra mision es brindar la mejor experiencia a satisfaccion por medio de nuestros productos de la mas
                alta calidad y variedad.</p>
            </div>
        </div>
        <div className='myv'>
            <img src={Vision}/>
            <div>
                <h3>Vision</h3>
                <p>Nuestra vision es ser en unos años una gran cadena de tientas proveedoras de frutas, verduras y otros alimentos
                , siendo distinguidos por todo el pais.
                </p>
            </div>
        </div>
        <div className='perfiles'>
            {empleados.map((empleado, indice) => {
                return(
                    <div className="content" key={indice}>
                        <img className="imagen" src={empleado.foto} alt="imagen"/>
                        <h3 className="catego">{empleado.nombres}{empleado.apellido}</h3>
                        <p className="preci">{empleado.cargo}</p>
                        <li className="btnperfil"><a>Ver perfil</a></li>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Nosotros