import styles from "./App.module.scss";
import Orderbook from "./components/Orderbook/Orderbook";
import Trades from "./components/Trades/Trades";
import Ticker from "./components/Ticker/Ticker";

function App() {
  return (
    <>
      <h1 className={styles.title}>Bit Phoenix</h1>
      <main className={styles.main}>
        <Ticker />
        <Orderbook />
        <Trades />
      </main>
    </>
  );
}

export default App;
