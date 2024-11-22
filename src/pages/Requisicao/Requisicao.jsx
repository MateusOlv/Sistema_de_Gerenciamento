import ListMenu from "../../components/ListMenu/ListMenu";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Requisicao.module.css";

const images = ["/home2.svg", "/report.svg", "/order1.svg", "/manage-store.svg","/suppliers.svg"]

const Requisicao = () => {
  return (
    <div className={styles.requisicao}>
      <SideBar Image={images}/>
      <main className={styles.content}>
        <section className={styles.searchBarContainer}>
          <div className={styles.topBar} />
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <input
                className={styles.pesquisar}
                placeholder="Pesquisar"
                type="text"
              />
            </div>
            <div className={styles.notificationContainer}>
              <div className={styles.notification}>
                <img
                  className={styles.notificationIcon}
                  loading="lazy"
                  alt=""
                  src="/notification2.svg"
                />
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Requisicao;
