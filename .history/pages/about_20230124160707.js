import styles from '../styles/About.module.css'
import data from '../data/ourTeam.json'
import { useState } from 'react'


export default function About (){

    console.log(data);

  
        return (

            <div className={styles.title}>
        <>About Our Team</>
        </div>
    )
}