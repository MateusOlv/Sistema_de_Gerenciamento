import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ListMenu.module.css";

const ListMenu = ({
  className = "",
  listMenuAlignSelf,
  listMenuWidth,
  home,
  homeIconOverflow,
  homeIconMargin,
  itemType,
  itemTypeColor,
  itemTypeTextDecoration,
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
      margin: homeIconMargin,
    };
  }, [homeIconOverflow, homeIconMargin]);

  const itemTypeStyle = useMemo(() => {
    return {
      color: itemTypeColor,
      textDecoration: itemTypeTextDecoration,
    };
  }, [itemTypeColor, itemTypeTextDecoration]);

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
        <a className={styles.itemType} style={itemTypeStyle}>
          {itemType}
        </a>
      </div>
    </div>
  );
};

ListMenu.propTypes = {
  className: PropTypes.string,
  home: PropTypes.string,
  itemType: PropTypes.string,

  /** Style props */
  listMenuAlignSelf: PropTypes.string,
  listMenuWidth: PropTypes.string,
  homeIconOverflow: PropTypes.string,
  homeIconMargin: PropTypes.string,
  itemTypeColor: PropTypes.string,
  itemTypeTextDecoration: PropTypes.string,
};

export default ListMenu;
