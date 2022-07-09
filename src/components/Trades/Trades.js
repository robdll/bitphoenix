import styles from "./Trades.module.scss";
import withWebSocket from "../../utils/withWebSocket";
import { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { initTrades, updateTrades } from "../../state/actions";
import dayjs from "dayjs";
import Connector from "../Connector/Connector";

function Trades(props) {
  const dispatch = useDispatch();

  const onMessage = (msg) => {
    const { ws } = props;
    const parsed = JSON.parse(msg.data);
    const data = parsed[1];
    if (Array.isArray(data)) {
      dispatch(initTrades(data));
    }
    if (data === "te") {
      dispatch(updateTrades(parsed[2]));
    }
    if (parsed.event === "subscribed") {
      ws.subscribeSuccess();
      return;
    }
  };

  useEffect(() => {
    const { ws } = props;
    ws.subscribe({
      newOpenMsg: {
        event: "subscribe",
        channel: "trades",
        symbol: "tBTCUSD",
      },
      newOnMessage: onMessage,
    });
  }, []);

  const rows = props.trades.map((item, idx) => {
    return (
      <tr
        key={idx}
        className={
          item[2] < 0
            ? `${styles.row} ${styles.red}`
            : `${styles.row} ${styles.green}`
        }
      >
        <td>{dayjs(item[0]).format("HH:mm:ss")}</td>
        <td>{item[3].toFixed(2)}</td>
        <td>{Math.abs(item[2])}</td>
      </tr>
    );
  });

  return (
    <div className={styles.Trades}>
      <Connector
        subscribed={props.ws.subscribed}
        toggle={props.ws.toggle}
        subscribing={props.ws.subscribing}
      />
      <h3 className={styles.title}>Trades</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.time}>Time</th>
            <th className={styles.price}>Price</th>
            <th className={styles.amount}>Amount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    trades: state.trades.trades,
  };
}

const wrappedWithWS = compose(connect(mapStateToProps), withWebSocket);

export default wrappedWithWS(Trades);
