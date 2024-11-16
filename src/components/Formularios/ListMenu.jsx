import React, { useMemo } from "react";
import styles from "./ListMenu.module.css";

const ListMenu = ({
  className = "",
  listMenuAlignSelf,
  listMenuWidth,
  home,
  homeIconOverflow,
  contentTypes,
  contentTypesColor,
}) => {
  const listMenuStyle = useMemo(() => {
    return {
      alignSelf: listMenuAlignSelf,
      width: listMenuWidth,
    };
  }, [listMenuAlignSelf, listMenuWidth]);

  const homeIconStyle = useMemo(() => {
    return {
      overflow: homeIconOverflow,
    };
  }, [homeIconOverflow]);

  const contentTypesStyle = useMemo(() => {
    return {
      color: contentTypesColor,
    };
  }, [contentTypesColor]);

  return (
    <div
      className={[styles.listMenu, className].join(" ")}
      style={listMenuStyle}
    >
      <div className={styles.content}>
        <img
          className={styles.homeIcon}
          loading="lazy"
          alt=""
          src={home}
          style={homeIconStyle}
        />
        <div className={styles.contentTypes} style={contentTypesStyle}>
          {contentTypes}
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
