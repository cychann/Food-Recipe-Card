import styles from "./app.module.css";
import Header from "./component/header/header";
import Login from "./component/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Header />
      <Login authService={authService} />
    </div>
  );
}

export default App;
