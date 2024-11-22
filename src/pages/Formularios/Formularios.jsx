import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ContentArea from "../../components/Formularios/ContentArea";
import styles from "./Formularios.module.css";
import SearchBarContainer from "../../components/SearchBarContainer/SearchBarContainer";

const images = ["/home2.svg", "/report.svg", "/order.svg", "/manage-store2.svg","/suppliers.svg"]

const Formularios = () => {
  return (
    <div className={styles.formularios}>
      <SideBar Image={images}/>
      <main className={styles.searchBarContainerParent}>
        <SearchBarContainer />
        <section className={styles.contentWrapper}>
        <ContentArea />
        </section>
      </main>
    </div>
  );
};

export default Formularios;
