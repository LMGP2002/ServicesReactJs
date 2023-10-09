"use client";
import {useForm} from 'react-hook-form'
import styles from './page.module.css'
export default function NewProduct(){

    const {register,handleSubmit}=useForm()

    const onSubmit=handleSubmit((data)=>{
        let form={
            title:data.title,
            price:data.price,
            description:data.description,
            image:data.image,
            category:data.category
        }
        addProduct(form)
    })

    const addProduct=async (form)=>{
        try {
            let response=await fetch('https://fakestoreapi.com/products',{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(form)
            })
            let data=await response.json()
            console.log(data);
            alert('Producto añadido')
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className={styles.container}>

            <form onSubmit={onSubmit} className={styles.form}>
                <h2>Ingrese un nuevo producto</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Nombre:</label>
                    <input type="text" id="title" {...register('title',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="price" {...register('price',{required:true})}></input>
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="category">Categoría:</label>
                    <input type="text" id="category" {...register('category',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" {...register('description',{required:true})}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">Url imagen:</label>
                    <input type="text" id="image" {...register('image',{required:true})}></input>
                </div>
               <button type='submit' className={styles.btnFormCart}>Añadir</button>
            </form>
        </div>
    )
}