import styles from "./Orderbook.module.scss";
import withWebSocket from "../../utils/withWebSocket";
import { compose } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import { initOrderBook, updateOrderBook } from "../../state/actions";
import { useDispatch } from "react-redux";

function Orderbook(props) {
  const dispatch = useDispatch();

  const onMessage = (msg) => {
    const { ws } = props;
    const parsed = JSON.parse(msg.data);
    const data = parsed[1];
    const valid = data && data !== "hb";
    if (valid) {
      const init = Array.isArray(data[0]);
      if (init) {
        dispatch(initOrderBook(data));
      } else {
        dispatch(updateOrderBook(data));
      }
    }
    if (parsed.event === "subscribed") {
      ws.subscribeSuccess();
      return;
    }
  };

  useEffect(() => {
    const { ws, precision } = props;
    ws.subscribe({
      newOpenMsg: {
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        prec: precision,
      },
      newOnMessage: onMessage,
    });
  }, []);

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

function mapStateToProps(state) {
  return {
    bids: state.orderbook.bids,
    asks: state.orderbook.asks,
    precision: state.orderbook.precision,
  };
}

const websocketWrapped = compose(connect(mapStateToProps), withWebSocket);
export default websocketWrapped(Orderbook);
