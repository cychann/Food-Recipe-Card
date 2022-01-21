import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import CardAddForm from "./component/card_add_form/card_add_form";
import Login from "./component/login/login";
import Main from "./component/main/main";
import Maker from "./component/maker/maker";

function App({ authService, imageUpload, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main authService={authService} />} />
          <Route
            path="maker"
            element={
              <Maker
                authService={authService}
                imageUpload={imageUpload}
                cardRepository={cardRepository}
              />
            }
          ></Route>
          <Route
            path="post"
            element={<CardAddForm imageUpload={imageUpload} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
