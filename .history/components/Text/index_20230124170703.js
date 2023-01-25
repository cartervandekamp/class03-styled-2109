import styles from "none"

export default function Text ({ name = "none" }) {
    return (
        <div className={styles.main}>
          <div className={styles.data}>{name}</div>
        </div>
      );
    }