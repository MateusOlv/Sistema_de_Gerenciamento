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
              <ListMenu home={`${Image[0]}`} itemType="Início" />
            </a>
            <a href="/painel-de-controle">
              <ListMenu
                listMenuAlignSelf="stretch"
                listMenuWidth="unset"
                home={`${Image[1]}`}
                homeIconOverflow="unset"
                homeIconMargin="unset"
                itemType="Painel De Controle"
                itemTypeColor="#5d6679"
                itemTypeTextDecoration="unset"
              />
            </a>
            <a href="/requisicao">
              <ListMenu
                listMenuAlignSelf="stretch"
                listMenuWidth="unset"
                home={`${Image[2]}`}
                homeIconOverflow="unset"
                homeIconMargin="unset"
                itemType="Requisição"
                itemTypeColor="#5d6679"
                itemTypeTextDecoration="unset"
              />
            </a>
            <a href="/formularios">
              <ListMenu
                listMenuAlignSelf="stretch"
                listMenuWidth="unset"
                home={`${Image[3]}`}
                homeIconOverflow="unset"
                homeIconMargin="unset"
                itemType="Formulários"
                itemTypeColor="#5d6679"
                itemTypeTextDecoration="unset"
              />
            </a>
            <a href="/perfil">
              <ListMenu
                listMenuAlignSelf="stretch"
                listMenuWidth="unset"
                home={`${Image[4]}`}
                homeIconOverflow="unset"
                homeIconMargin="unset"
                itemType="Perfil"
                itemTypeColor="#5d6679"
                itemTypeTextDecoration="unset"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.settingsMenu}>
        <a href="">
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/settings.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Configurações"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
        </a>
        <a href="/login">
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/log-out1.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Sair"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
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
