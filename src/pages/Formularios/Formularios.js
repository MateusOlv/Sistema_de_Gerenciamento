import React from "react";
import SideBar from "../../components/Formularios/SideBar";
import ContentArea from "../../components/Formularios/ContentArea";
import styles from "./Formularios.module.css";

const Formularios = () => {
  return (
    <div className={styles.formularios}>
      <SideBar />
      <ContentArea />
    </div>
  );
};

export default Formularios;
