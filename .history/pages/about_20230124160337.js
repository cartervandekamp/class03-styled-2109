import styles from '../styles/About.module.css'
import data from '../data/ourTeam.json'
import { useState } from 'react'


export default function About (){

    console.log(data);
    console.log(data);
    const [information, setInformation] = useState ([...data])
  
        return (
        <>About Our Team</>
    )
}