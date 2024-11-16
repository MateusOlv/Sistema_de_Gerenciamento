import React from "react";
import ListMenu from "./ListMenu";
import styles from "./SideBar.module.css";

const SideBar = ({ className = "" }) => {
  return (
    <div className={[styles.sideBar, className].join(" ")}>
      <div className={styles.topMenu}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img
              className={styles.logoPlaceholderIcon}
              loading="lazy"
              alt=""
              src="/53.svg"
            />
            <div className={styles.logimanage}>LogiManage</div>
          </div>
        </div>
        <div className={styles.listMenu}>
          <nav className={styles.listMenu1}>
            <ListMenu home="/home.svg" contentTypes="Início" />
            <ListMenu
              listMenuAlignSelf="stretch"
              listMenuWidth="unset"
              home="/report.svg"
              homeIconOverflow="unset"
              contentTypes="Painel De Controle"
              contentTypesColor="#5d6679"
            />
            <ListMenu
              listMenuAlignSelf="stretch"
              listMenuWidth="unset"
              home="/order.svg"
              homeIconOverflow="unset"
              contentTypes="Requisição"
              contentTypesColor="#5d6679"
            />
            <ListMenu
              listMenuAlignSelf="stretch"
              listMenuWidth="unset"
              home="/manage-store.svg"
              homeIconOverflow="unset"
              contentTypes="Formulários"
              contentTypesColor="#009ed8"
            />
            <ListMenu
              listMenuAlignSelf="stretch"
              listMenuWidth="unset"
              home="/suppliers.svg"
              homeIconOverflow="unset"
              contentTypes="Perfil"
              contentTypesColor="#5d6679"
            />
          </nav>
        </div>
      </div>
      <div className={styles.accountMenu}>
        <ListMenu
          listMenuAlignSelf="unset"
          listMenuWidth="232px"
          home="/settings.svg"
          homeIconOverflow="hidden"
          contentTypes="Configurações"
          contentTypesColor="#5d6679"
        />
        <ListMenu
          listMenuAlignSelf="unset"
          listMenuWidth="232px"
          home="/log-out1.svg"
          homeIconOverflow="hidden"
          contentTypes="Sair"
          contentTypesColor="#5d6679"
        />
      </div>
    </div>
  );
};

export default SideBar;
