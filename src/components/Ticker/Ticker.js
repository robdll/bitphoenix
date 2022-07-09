import styles from "./Ticker.module.scss";

function Ticker(props) {
  const { ticker } = props;
  const lastPrice = ticker?.last || "NA";
  const volume = ticker?.volume.toFixed(1) || "NA";
  const high = ticker?.high || "NA";
  const low = ticker?.low || "NA";

  return (
    <div className={styles.Ticker}>
      <h3 className={styles.symbol}>BTC/USD</h3>
      <span>Last price:</span>
      <span>{lastPrice}</span>
      <span>24h High:</span>
      <span>{high}</span>
      <span>24h Low:</span>
      <span>{low}</span>
      <span>24h Volume:</span>
      <span>{volume}</span>
    </div>
  );
}

export default Ticker;
