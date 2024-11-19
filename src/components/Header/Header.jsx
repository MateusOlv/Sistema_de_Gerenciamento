import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <input
            className={styles.searchProductSupplier}
            placeholder="Search product, supplier, order"
            type="text"
          />
        </div>
        <div className={styles.notification} />
        <div className={styles.userActions}>
          <div className={styles.avatarNotification}>
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
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
