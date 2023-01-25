export default function Text ({ staffMember = "none" }) {
    return (
        <div className={styles.main}>
          <div className={styles.data}>{staffMember}</div>
        </div>
      );
    }