import styles from "./Connector.module.scss";

function Connector(props) {
  return (
    <div className={styles.Connector}>
      {props.subscribed ? (
        <span className={styles.green} onClick={() => props.toggle()}>
          ONLINE
        </span>
      ) : props.subscribing ? (
        <span>CONNECTING</span>
      ) : (
        <span className={styles.red} onClick={() => props.toggle()}>
          OFFLINE
        </span>
      )}
    </div>
  );
}

export default Connector;
