import styles from "./App.module.scss";
import Orderbook from "./components/Orderbook/Orderbook";

function App() {
  return (
    <>
      <h1 className={styles.title}>Bit Phoenix</h1>
      <main className={styles.main}>
        <Orderbook />
      </main>
    </>
  );
}

export default App;
