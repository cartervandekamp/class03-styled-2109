import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function Home() {

  console.log(data);
  const [information, setInformation] = useState ([...data])
  
  

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="about">About</Link>
    {
      information && information.map((info, index) => {
        if(info.department.toLowerCase()== "business") {
        return(
      
        )
      }
      })
    }

{
      information && information.map((info, index) => {
        if(info.department.toLowerCase()== "computing") {
        return(
          <Card key={index} degree={info.degree} color ="blue" font ="50px"/>
        )
      }
      })
    }
    
    

      </main>
     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
