import React, { useMemo } from "react";
import styles from "./SearchBarContainer.module.css";

const SearchBarContainer = ({
  className = "",
  searchBarContainerMinHeight,
  searchBarContainerHeight,
  searchBarContainerTop,
  searchBarContainerPosition,
}) => {
  const searchBarContainerStyle = useMemo(() => {
    return {
      minHeight: searchBarContainerMinHeight,
      height: searchBarContainerHeight,
      top: searchBarContainerTop,
      position: searchBarContainerPosition,
    };
  }, [
    searchBarContainerMinHeight,
    searchBarContainerHeight,
    searchBarContainerTop,
    searchBarContainerPosition,
  ]);

  return (
    <div
      className={[styles.searchBarContainer, className].join(" ")}
      style={searchBarContainerStyle}
    >
      <div className={styles.topBar} />
      <div className={styles.pageHeaderMain}>
        <div className={styles.searchBar}>
          <img
            className={styles.searchIcon}
            loading="lazy"
            alt=""
            src="/search.svg"
          />
          <div className={styles.pesquisar}>Pesquisar</div>
        </div>
        <div className={styles.userActions}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              loading="lazy"
              alt=""
              src="/notification.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
