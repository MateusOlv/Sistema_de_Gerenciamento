import SideBar from "../../components/Inicio/SideBar";
import SearchBarContainer from "../../components/Inicio/SearchBarContainer";
import Content2 from "../../components/Inicio/Content2";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <SideBar />
      <main className={styles.searchBarContainerParent}>
        <SearchBarContainer />
        <section className={styles.contentWrapper}>
          <Content2 />
        </section>
      </main>
    </div>
  );
};

export default Inicio;
