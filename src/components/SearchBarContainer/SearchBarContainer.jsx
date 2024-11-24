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
        <div className={styles.frameChild}>
          <div className={styles.texto}>
            <h1 className={styles.h1}>LogiManage: Gestão Eficiente de Transportes</h1>
            <p>Bem-vindo ao LogiManage - O sistema completo para gerenciar com eficiência seus transportes e equipamentos, trazendo mais organização e controle para sua logística.</p>
          </div>
          <img className={styles.figuras1} alt="" src="/figuras--1@2x.png" />
        </div>
      </div>
    </header>
  );
};

SearchBarContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchBarContainer;
