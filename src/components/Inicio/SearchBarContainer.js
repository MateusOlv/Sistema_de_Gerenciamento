import PropTypes from "prop-types";
import styles from "./SearchBarContainer.module.css";

const SearchBarContainer = ({ className = "" }) => {
  return (
    <header className={[styles.searchBarContainer, className].join(" ")}>
      <div className={styles.topBar} />
      <div className={styles.searchBar}>
        <div className={styles.searchBar1}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <div className={styles.pesquisar}>Pesquisar</div>
        </div>
        <div className={styles.notification} />
        <div className={styles.userIconsWrapper}>
          <div className={styles.userIcons}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img
              className={styles.notificationIcon}
              loading="lazy"
              alt=""
              src="/notification.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.figuras1} alt="" src="/figuras--1@2x.png" />
      </div>
    </header>
  );
};

SearchBarContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchBarContainer;
