import styles from '../styles/About.module.css'
import data from '../data/ourTeam.json'


export default function About (){

    console.log(data);
  const [information, setInformation] = useState ([...data])
  
        return (
        <>About Our Team</>
    )
}