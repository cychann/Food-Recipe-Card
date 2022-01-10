import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <div>
      <div>Maker</div>
      <button onClick={onLogout}>logout</button>
    </div>
  );
};

export default Maker;
