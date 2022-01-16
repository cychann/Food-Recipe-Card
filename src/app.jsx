import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./component/login/login";
import Maker from "./component/maker/maker";

function App({ authService, imageUpload, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="maker"
            element={
              <Maker
                authService={authService}
                imageUpload={imageUpload}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
