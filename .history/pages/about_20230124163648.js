
import styles from "../styles/About.module.css";
import { useState } from "react";
import data from "../data/ourTeam.json";
import Text from "../components/Text";
import Link from "next/link";


export default function About() {
    const [information, setInformation] = useState([...data]);

  
        return (

            <div className={styles.title}>
        <>About Our Team</>
        </div>
    )
}