import MainContent from "../../components/MainContent/MainContent";
import TableContainer from "../../components/TableContainer/TableContainer";
import styles from "./PainelDeControle.module.css";
import SideBar from "../../components/SideBar/SideBar";

const images = ["/home2.svg", "/report1.svg", "/order.svg", "/manage-store.svg","/suppliers.svg"]
/*Retirada do Dashboard1, ficava abaixo do MainContent */
const PainelDeControle = () => {
  return (
    <div className={styles.painelDeControle}>
      <SideBar Image={images}/>
      <main className={styles.mainContentParent}>
        <MainContent />
        <TableContainer />
      </main>
    </div>
  );
};

export default PainelDeControle;
