"use client";
import { useEffect, useState } from "react"
import styles from './page.module.css'
import DetalleProducto from "./DetalleProducto";

export default function DetalleCart({params}){
    const [products,setProducts]=useState([])
    const [detalleProduct,setDetalleProduct]=useState()
    const [indexProduct,setIndexProduct]=useState(0)

    const detalle=(index)=>{
        setDetalleProduct(products[index])
        setIndexProduct(index+1)
    }

    useEffect(()=>{
        const getSingleCart=async()=>{
            try {
                let response=await fetch('https://fakestoreapi.com/carts/'+params.id)
                let data=await response.json()
                let newProducts=[]
                await Promise.all (data.products.map(async (e) => {
                    try {
                        
                        let response = await fetch('https://fakestoreapi.com/products/' + e.productId)
                        let data = await response.json()
                        newProducts=[...newProducts,data]
                    } catch (error) {
                        console.log(error);
                    }
                }));

                setProducts(newProducts);

            } catch (error) {
                console.log(error);
            }
        }
        
        getSingleCart()
        

    },[])
    return(
        <>
        <section>
            <div className={styles.sectionProduct}>
                <h1>Id Carrito: {params.id}</h1>
                {products.map((e,index)=><button onClick={()=>detalle(index)} className={styles.btnProduct} key={e.id}>Producto {index+1}</button>)}
            </div>
            <div>
                <DetalleProducto index={indexProduct} detalleProduct={detalleProduct}></DetalleProducto>
            </div>
        </section>
        </>
    )
}