import Game from "./components/Game";
import Header from "./components/Header";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <Header />
      <Game />
    </div>
  </div>
)

export default App
