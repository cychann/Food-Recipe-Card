import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebasApp } from "./service/firebase";
import ImageUpload from "./service/image_upload";

const authService = new AuthService(firebasApp);
const imageUpload = new ImageUpload();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageUpload={imageUpload} />
  </React.StrictMode>,
  document.getElementById("root")
);
