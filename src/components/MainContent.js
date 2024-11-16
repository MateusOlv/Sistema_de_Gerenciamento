import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <input
            className={styles.pesquisar}
            placeholder="Pesquisar"
            type="text"
          />
        </div>
        <div className={styles.notificationAvatar}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
