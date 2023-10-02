"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();     
    const detalle =(id)=>{
        router.push('/cart/'+id);
  };

  const [carts,setCarts]=useState([])
  useEffect(()=>{
    const getCarts=async(url)=>{
      try{
        let response=await fetch(url),
          data=await response.json()

        setCarts(data)

      }catch(err){
        console.log(err);
      }
    }

    getCarts('https://fakestoreapi.com/carts')

  },[])

  
  
  return (
    <>
      <section className={styles.sectionCard}>
        {carts.map(e=>(
          <div key={e.id} className={styles.card}>
            <p><strong>Id: {e.id}</strong></p>
            <p>userId: {e.userId}</p>
            <p>date: {e.date.split('T')[0]}</p>
            <p><button onClick={()=>detalle(e.id)} className={styles.btnCart}>Ver más detalles</button></p>
          </div>
        ))}
      </section>
    </>
  )
}
