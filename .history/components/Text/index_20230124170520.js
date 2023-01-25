export default function Text ({ name = "none" }) {
    return (
        <div className={main}>
          <div className={data}>{name}</div>
        </div>
      );
    }