"use client";
import {useForm} from 'react-hook-form'
import styles from './page.module.css'
export default function NewCart(){

    const {register,handleSubmit}=useForm()

    const onSubmit=handleSubmit((data)=>{
        let form={
            userId:data.idUser,
            date:data.date,
            products:[{productId:data.productId,quantity:data.quantity},{productId:data.productId2,quantity:data.quantity2}]
        }
        addCart(form)
    })

    const addCart=async (form)=>{
        try {
            let response=await fetch('https://fakestoreapi.com/carts',{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(form)
            })
            let data=await response.json()
            console.log(data);
            alert('Carrito añadido')
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className={styles.container}>

            <form onSubmit={onSubmit} className={styles.form}>
                <h2>Ingrese un nuevo carrito</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="id">Id del usuario:</label>
                    <input type="number" id="id" {...register('idUser',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="date">Fecha:</label>
                    <input type="date" id="date" {...register('date',{required:true})}></input>
                </div>
                <h3>Producto 1</h3>
                <div className={styles.formGroup}>
                    <label htmlFor="productId">Id del producto:</label>
                    <input type="number" id="productId" {...register('productId',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="quantity">Cantidad:</label>
                    <input type="number" id="quantity" {...register('quantity',{required:true})}></input>
                </div>
                
                <h3>Producto 2</h3>
                <div className={styles.formGroup}>
                    <label htmlFor="productId2">Id del producto:</label>
                    <input type="number" id="productId2" {...register('productId2',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="quantity2">Cantidad:</label>
                    <input type="number" id="quantity2" {...register('quantity2',{required:true})}></input>
                </div>
               <button type='submit' className={styles.btnFormCart}>Añadir</button>
            </form>
        </div>
    )
}