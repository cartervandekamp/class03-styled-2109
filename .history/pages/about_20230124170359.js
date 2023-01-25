
import styles from "../styles/About.module.css";
import { useState } from "react";
import data from "../data/ourTeam.json";
import Text from "../components/Text/index";
import Link from "next/link";


export default function About() {
    const [information, setInformation] = useState([...data]);

  
        return (
    
    <div className={styles.main}>
            <div className={styles.title}>
        <>About Our Team</>
        </div>
        <div className={styles.name}>
        {information &&
          information.map((info, index) => {
            if (info.role() === "Team Member") {
              return <Text key={index} name={info.name} />;
            }
          })}
        </div>
    </div>
    )
}