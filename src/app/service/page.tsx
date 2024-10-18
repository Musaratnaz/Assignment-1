import Link from 'next/link' 
import styles from "../service/service.module.css";
import React from 'react'

const ServicePage = () => {
  return (
    <div className= {styles.container}>
      <h3 className= {styles.header}>This is Service Page</h3>
      
      <ul className= {styles.list}>

        <li><Link href="/service/web-development">This is Web Development Page</Link></li>

         </ul>
      
    </div>
  )
}

export default ServicePage
