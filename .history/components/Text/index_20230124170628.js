import styles from '../styles/global.css'

export default function Text ({ name = "none" }) {
    return (
        <div className={styles.main}>
          <div className={styles.data}>{name}</div>
        </div>
      );
    }