import { useMemo } from "react";
import ListMenu from "../ListMenu/ListMenu";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";

const SideBar = ({
  className = "",
  sideBarPosition,
  sideBarTop,
  sideBarLeft,
  sideBarWidth,
  frameDivAlignSelf,
  topWidth,
  topAlignSelf,
  logiManageTextDecoration,
  logiManageFlex,
  listMenuWidth,
  listMenuAlignSelf,
  Image = []
}) => {
  const sideBarStyle = useMemo(() => {
    return {
      position: sideBarPosition,
      top: sideBarTop,
      left: sideBarLeft,
      width: sideBarWidth,
    };
  }, [sideBarPosition, sideBarTop, sideBarLeft, sideBarWidth]);

  const topMenuStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const topStyle = useMemo(() => {
    return {
      width: topWidth,
      alignSelf: topAlignSelf,
    };
  }, [topWidth, topAlignSelf]);

  const logiManageStyle = useMemo(() => {
    return {
      textDecoration: logiManageTextDecoration,
      flex: logiManageFlex,
    };
  }, [logiManageTextDecoration, logiManageFlex]);

  const listMenu1Style = useMemo(() => {
    return {
      width: listMenuWidth,
      alignSelf: listMenuAlignSelf,
    };
  }, [listMenuWidth, listMenuAlignSelf]);

  return (
    <div className={[styles.sideBar, className].join(" ")} style={sideBarStyle}>
      <div className={styles.topMenu} style={topMenuStyle}>
        <div className={styles.top} style={topStyle}>
          <div className={styles.logo}>
            <img
              className={styles.logoImageIcon}
              loading="lazy"
              alt=""
              src="/53.svg"
            />
            <a className={styles.logimanage} style={logiManageStyle}>
              LogiManage
            </a>
          </div>
        </div>
        <div className={styles.listMenu} style={listMenu1Style}>
          <div className={styles.listMenu1}>
            <a href="/">
              <ListMenu home={`${Image[0]}`} itemType="Início" itemTypeColor="#5d6679"/>
            </a>
            <a href="/painel-de-controle">
              <ListMenu home={`${Image[1]}`} itemType="Painel De Controle" itemTypeColor="#5d6679"/>
            </a>
            <a href="/requisicao">
              <ListMenu home={`${Image[2]}`} itemType="Requisição" itemTypeColor="#5d6679"/>
            </a>
            <a href="/formularios">
              <ListMenu home={`${Image[3]}`} itemType="Formulários" itemTypeColor="#5d6679"/>
            </a>
            <a href="/perfil">
              <ListMenu home={`${Image[4]}`} itemType="Perfil" itemTypeColor="#5d6679"/>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.settingsMenu}>
        <a href="">
          <ListMenu home="/settings.svg" itemType="Configurações" itemTypeColor="#5d6679"/>
        </a>
        <a href="/login">
          <ListMenu home="/log-out1.svg" itemType="Sair" itemTypeColor="#5d6679"/>
        </a>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  sideBarPosition: PropTypes.string,
  sideBarTop: PropTypes.string,
  sideBarLeft: PropTypes.string,
  sideBarWidth: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  topWidth: PropTypes.string,
  topAlignSelf: PropTypes.string,
  logiManageTextDecoration: PropTypes.string,
  logiManageFlex: PropTypes.string,
  listMenuWidth: PropTypes.string,
  listMenuAlignSelf: PropTypes.string,
};

export default SideBar;
