import styles from "./Orderbook.module.scss";

function Orderbook(props) {
  return (
    <div className={styles.Orderbook}>
      <h3 className={styles.title}>Orderbook</h3>
      <table className={styles.buy}>
        <thead>
          <tr>
            <th className={styles.count}>Count</th>
            <th className={styles.amount}>Amount</th>
            <th className={styles.total}>Total</th>
            <th className={styles.price}>Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <table className={styles.sell}>
        <thead>
          <tr>
            <th className={styles.price}>Price</th>
            <th className={styles.total}>Total</th>
            <th className={styles.amount}>Amount</th>
            <th className={styles.count}>Count</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Orderbook;
