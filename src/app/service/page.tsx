import Link from 'next/link' 
import styles from "../service/service.module.css";
import React from 'react'

const ServicePage = () => {
  return (
    <div className= {styles.container}>
      <h3 className= {styles.header}>This is Service Page</h3>
      
      <ul className= {styles.list}>

        <li><a href="/service/musarat-naz">This is Musarat Naz Page</a></li>

         </ul>
      
    </div>
  )
}

export default ServicePage
