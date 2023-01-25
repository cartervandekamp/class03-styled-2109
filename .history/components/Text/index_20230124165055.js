export default function Text ({ name = "none" }) {
    return (
        <div className={styles.main}>
          <div className={styles.info}>{name}</div>
        </div>
      );
    }