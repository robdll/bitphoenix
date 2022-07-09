import styles from "./Trades.module.scss";

function Trades(props) {
  return (
    <div className={styles.Trades}>
      <h3 className={styles.title}>Trades</h3>
      <table className={styles.buy}>
        <thead>
          <tr>
            <th className={styles.time}>Time</th>
            <th className={styles.price}>Price</th>
            <th className={styles.amount}>Amount</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Trades;
