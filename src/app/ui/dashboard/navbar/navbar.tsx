"use client";

import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname?.split("/").pop()}</div>
       <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Search' className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat className={styles.icons}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
       </div>
      
    </div>
  )
}
