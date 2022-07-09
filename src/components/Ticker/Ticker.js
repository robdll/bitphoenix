import styles from "./Ticker.module.scss";
import withWebSocket from "../../utils/withWebSocket";
import { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTicker } from "../../state/actions";
import Connector from "../Connector/Connector";

function Ticker(props) {
  const dispatch = useDispatch();

  const onMessage = (msg) => {
    const { ws } = props;
    const parsed = JSON.parse(msg.data);
    const data = parsed[1];
    if (Array.isArray(data)) {
      dispatch(updateTicker(data));
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
        channel: "ticker",
        symbol: "tBTCUSD",
      },
      newOnMessage: onMessage,
    });
  }, []);

  return (
    <div className={styles.Ticker}>
      <Connector
        subscribed={props.ws.subscribed}
        toggle={props.ws.toggle}
        subscribing={props.ws.subscribing}
      />
      <h3 className={styles.symbol}>BTC/USD</h3>
      <span>Last price:</span>
      <span>
        {isNaN(props.lastPrice) ? props.lastPrice : props.lastPrice.toFixed(2)}
      </span>
      <span>24h High:</span>
      <span className={styles.green}>
        {isNaN(props.high) ? props.high : props.high.toFixed(2)}
      </span>
      <span>24h Low:</span>
      <span className={styles.red}>
        {isNaN(props.low) ? props.low : props.low.toFixed(2)}
      </span>
      <span>24h Volume:</span>
      <span>
        {isNaN(props.volume) ? props.volume : props.volume.toFixed(2)}
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    lastPrice: state.ticker.lastPrice,
    volume: state.ticker.volume,
    high: state.ticker.high,
    low: state.ticker.low,
  };
}

const websocketWrapped = compose(connect(mapStateToProps), withWebSocket);

export default websocketWrapped(Ticker);
