import SideBar from "../../components/SideBar/SideBar";
import SearchBarContainer from "../../components/SearchBarContainer/SearchBarContainer";
import Content2 from "../../components/Content2/Content2";
import styles from "./Inicio.module.css";

const images = ["/home1.svg", "/report.svg", "/order.svg", "/manage-store.svg","/suppliers.svg"]

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <SideBar Image={images}/>
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
