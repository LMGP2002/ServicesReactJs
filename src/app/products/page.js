"use client";
import React, { useEffect,useState} from "react"
import styles from './page.module.css'
export default function Products(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const getProducts=async()=>{
            try {
                let response =await fetch('https://fakestoreapi.com/products')
                let data=await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    },[])
    return(
        <>
            <h2>Productos</h2>
            <div className={styles.container}>
                {products.map(e=>(
                    <div key={e.id} className={styles.containerProduct}>
                    <h3>Nombre: {e.title}</h3>
                    <p>Id: {e.id}</p>
                    <p>Precio: ${e.price}</p>
                    <p>Categoría: {e.category}</p>
                    <p className={styles.description}> Descripción: {e.description}</p>
                    <img src={e.image}></img>
                </div>
                ))}
                
               
            </div>
        </>
    )
}