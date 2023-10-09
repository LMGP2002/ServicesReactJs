"use client";
import { useEffect, useState } from "react"
import styles from './page.module.css'

export default function DetalleProducto({detalleProduct,index}){
    const [detalle,setDetalle]=useState()
    const [visible,setVisible]=useState(false)
    useEffect(()=>{
        setDetalle(detalleProduct)
        detalleProduct!=null?setVisible(true):setVisible(false)

    },[detalleProduct])

    return(
        <>
            {visible&&
            <div >
                <h2>Detalle Producto {index}:</h2>
                <h4>Id del producto: {detalle.id}</h4>
                <p>Nombre: {detalle.title}</p>
                <p>Precio: ${detalle.price}</p>
                <p>Categoría: ${detalle.category}</p>
                <p>Descripción: ${detalle.description}</p>
                <img className={styles.img} src={detalle.image}></img>
            </div>
            }
            
        </>
    )
}