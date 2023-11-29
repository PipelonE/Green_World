import React from "react"
import '../estilos/productos.css';
import '../estilos/Modal.css';
import Agregar from '../imagenes/agregar.png';
import Quitar from '../imagenes/menos.png';
import { useState, useRef } from "react";
import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
import Fruits from "../Componentes/Lista_Fru"; 
import Vegetal from "../Componentes/Lista_Veg";
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
import Zanahoria from '../imagenes/zanahoria.jpg'


const Libras = () => {
    const [libra, setLibra] = useState (0);
    return(
      <div className='conta'>
        <div className='valor_l'>
          <p className='numero_l'>Total Libras  :</p>
          <p className='Total_l'>{libra} LB</p>
        </div>
        <button className='btnagre'  onClick={() => setLibra(libra + 1)}><img className='agreg' src={Agregar}/></button>
        <button className='btnagre'  onClick={() => setLibra(libra - 1)}><img className='quit' src={Quitar}/></button>
      </div>
    )
}



export const Productos = () => {

    var refModal = useRef();
    var refModalimg = useRef();
    var refModaldescri = useRef();

    const Mostrar = (e) => {
        const myrefValue = refModal.current;
        myrefValue.style.opacity= "1";
        myrefValue.style.pointerEvents= "inherit";
        const iden = e.target.id;
        buscar_fruta(iden);
    };

    const Ocultar = (e) =>{
        const myrefocultar = refModal.current;
        myrefocultar.style.opacity= "0";
        myrefocultar.style.pointerEvents= "none";
    }

    const [imgpro, setImgpro] = useState (Banano);
    const [descripro, setDescripro] = useState ("El plátano es una fruta cardioprotectora debido a sus altos niveles de potasio y su bajo contenido de sodio, que ayudan a mantener estables los niveles de presión arterial. Es por ello que toda persona hipertensa debe consumir al menos un plátano diario");

    const buscar_fruta = (e) =>{
        {frutas.map((fruta) => {
            if(fruta.id === e){
                setImgpro(fruta.img)
                setDescripro(fruta.descripción)
            }
        })}
        {verduras.map((verdura) => {
            if(verdura.id === e){
                setImgpro(verdura.img)
                setDescripro(verdura.descripción)
            }
        })}
    }


    let frutas = [
        {
            img: Manzana,
            nombre: "Manzana",
            id: "Manzana",
            Precio: "1800",
            color:"#b81414",
            descripción: "Las manzanas rojas contienen gran cantidad de vitaminas, del tipo B y minerales (fósforo, potasio, calcio…), fibra y carbohidratos. Su composición es prácticamente agua, un 85% por eso es una fruta con muy poco aporte calórico.",
        },
        {
            img: Aguacate,
            nombre: "Aguacate",
            id: "Aguacate",
            Precio: "2300",
            color:"#00ac00",
            descripción: "El aguacate es un fruto exótico carnoso que se obtiene del árbol tropical del mismo nombre. En algunas partes de América del Sur se conoce como Palta.",
        },
        {
            img: Banano,
            nombre: "Banano",
            id: "Banano",
            Precio: "1600",
            color:"#e5e619",
            descripción: "El plátano es una fruta cardioprotectora debido a sus altos niveles de potasio y su bajo contenido de sodio, que ayudan a mantener estables los niveles de presión arterial. Es por ello que toda persona hipertensa debe consumir al menos un plátano diario",
        },
        {
            img: Mandarinas,
            nombre: "Mandarinas",
            id: "Mandarinas",
            Precio: "1500",
            color:"#f59622",
            descripción: "las mandarinas contienen alta concentración de Vitamina C y agua. Ayuda a mejorar el sistema inmunológico, equilibrar el nivel de azúcar en sangre, reducir el colesterol malo y la presión arterial. Así también, a prevenir el exceso de grasa, sobre todo del hígado.",
        },
        {
            img: Mangos,
            nombre: "Mangos",
            id: "Mangos",
            Precio: "2000 ",
            color:"#ffdf00",
            descripción: "El poderoso mango contiene vitamina C para aumentar la inmunidad, vitamina B-6 para ayudar a dormir, fibra para mejorar la salud intestinal y prevenir el cáncer de colon y carotenoides que combaten la degeneración macular asociada con la edad.",
        },
        {
            img: Naranja,
            nombre: "Naranja",
            id: "Naranja",
            Precio: "2000",
            color:"#ff7e00",
            descripción: "La naranja es considerada un poderoso antioxidante debido a su gran contenido de Vitamina C. Esto favorece la cicatrización de heridas y refuerza el sistema inmunológico del organismo, además contiene calcio, magnesio, beta caroteno, ácido fólico, fósforo, potasio, cobre, zinc, crítico y otros ácidos.",
        },
        {
            img: Moras,
            nombre: "Moras",
            id: "Moras",
            Precio: "1800",
            color:"#933e95",
            descripción: "La mora se considera por algunos como “milagrosa”, pues posee otros antioxidantes conocidos como la antocianina y pterostilbene. Dichos compuestos ayudan a mantener el organismo protegido de los radicales libres que incentivan el envejecimiento prematuro de las células.",
        },
        {
            img: Fresas,
            nombre: "Fresa",
            id: "Fresa",
            Precio: "2300",
            color:"#ff0000",
            descripción: "la fresa se trata de una fruta que es rica en antioxidantes y minerales, tales como el manganeso, magnesio y potasio. También tiene vitamina C, B2, B3 y ácido fólico, es rica en fibra y baja en azúcar. Vale decir también que casi el 90% de su composición es agua.",
        },
        {
            img: Manzana_v,
            nombre: "Manzana verde",
            id: "Manzana_v",
            Precio: "2000 ",
            color:"#48ff31",
            descripción: "La manzana verde aporta vitamina A, B1, B2, B5, B6 y E. En cuanto a los minerales que aporta, se encuentra el potasio y fósforo y el boro, siendo las manzanas una de las frutas más ricas en boro y que facilita la asimilación del calcio y el magnesio en el organismo.",
        },
        {
            img: Piña,
            nombre: "Piña",
            id: "Piña",
            Precio: "2500",
            color:"#ffff00",
            descripción: "La piña aporta fibra y agua a nuestro organismo, de hecho, posee más de un 85% de agua. Además, gracias a la fibra que contiene desempeña un papel fundamental en la función del colón y estimula el tránsito intestinal, arrastrando toxinas y ayudando a eliminar las grasas sobrantes.",
        },
        
    ]

    let verduras = [
        {
            img: Cebollla,
            nombre: "Cebollla Larga",
            id: "Cebollla",
            Precio: "2600",
            color:"#a3ff7e",
            descripción: "La cebolla larga contiene altos niveles de vitamina C y la vitamina K, los cuales son esenciales para el funcionamiento de los huesos. La vitamina C ayuda en la síntesis de colágeno para huesos fuertes, mientras que la vitamina K juega un papel clave en el mantenimiento de la densidad ósea.",
        },
        {
            img: Criollas,
            nombre: "Criollas",
            id: "Criollas",
            Precio: "2000 ",
            color:"#ffd700",
            descripción: "La papa criolla es un tubérculo alto en carbohidratos, de ahí que se considere una excelente fuente de energía. También aporta fibra, minerales esenciales (hierro, calcio) y vitaminas (B6, C). ",
        },
        {
            img: Tomates,
            nombre: "Tomates",
            id: "Tomates",
            Precio: "2200",
            color:"#ec5353",
            descripción: "El tomate está compuesto principalmente por agua y su macronutriente mayoritario son los hidratos de carbono. Entre las vitaminas cabe destacar el contenido en vitamina A, básicamente en forma de β-carotenos (494 μg/100 gramos) y vitamina C y entre los minerales el potasio.",
        },
        {
            img: Zanahoria,
            nombre: "Zanahoria",
            id: "Zanahoria",
            Precio: "2600",
            color:"#ec7c26",
            descripción: "La zanahoria es rica en fósforo, el cual vigoriza las mentes y cuerpos cansados. Es muy útil para eliminar los cólicos y favorece la digestión. Es un vegetal diurético que evita la retención de líquidos. No puede faltar en verano, ya que facilita el bronceado de manera saludable y totalmente natural.",
        },
        {
            img: Pepinos,
            nombre: "Pepino",
            id: "Pepinos",
            Precio: "1900",
            color:"#3d642d",
            descripción: "El pepino aporta fibra, pequeñas cantidades de vitamina C, provitamina A y de vitamina E, y, en proporciones aún menores, vitaminas del grupo B tales como folatos, B1, B2 y B3. En su piel se encuentran pequeñas cantidades de beta-caroteno.",
        },
    ]

    return (
        <div>
            <Slider/>
            <Navbar/>
            <section class="modal_regis-d" id="modal" ref={refModal}>
                <div class="modal_container">
                    <img className="img_ca" src={imgpro} alt="imagen" ref={refModalimg}/>
                    <div>
                        <div className='modal_info'>
                            <p className='informacion_f' ref={refModaldescri}>{descripro}</p>
                        </div><br></br>
                        <Libras/><br></br>
                        <li className='agregar_btn' onClick={Ocultar}><a>Agregar a Carrito</a></li>
                    </div>
                </div>
            </section>
            <div className="pro">
                <h1 className="categoria">Frutas</h1><br></br>
                <div className="container">
                    {frutas.map((fruit, indice) => {
                        return <Fruits key={indice} img={fruit.img} nombre={fruit.nombre} precio={fruit.Precio} id={fruit.id} color={fruit.color} descripcion={fruit.descripción} Mostrar={Mostrar}/>
                    })}
                </div>
            </div><br></br>
            <div className="pro">
                <h1 className="categoria">Vegetales</h1><br></br>
                <div className="container">
                    {verduras.map((vege, indice) => {
                        return <Vegetal key={indice} img={vege.img} nombre={vege.nombre} precio={vege.Precio} id={vege.id} color={vege.color} Mostrar={Mostrar}/>
                    })}
                </div>
            </div>
            
        </div>
        
    )
}

export default Productos