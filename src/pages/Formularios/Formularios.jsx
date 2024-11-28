import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ContentArea from "../../components/Formularios/ContentArea";
import SearchBarContainer from "../../components/Formularios/SearchBarContainer";
import Formulario from "../../components/Formularios/Formulario";
import styles from "./Formularios.module.css";

const images = ["/home2.svg", "/report.svg", "/order.svg", "/manage-store2.svg","/suppliers.svg"]

const Formularios = () => {
  return (
    <div className={styles.formularios}>
      <SideBar Image={images}/>
      <main className={styles.main}>
        <SearchBarContainer />
        <section className={styles.contentWrapper}>
        <ContentArea>
          <Formulario />
        </ContentArea>
        </section>
      </main>
    </div>
  );
};

export default Formularios;
