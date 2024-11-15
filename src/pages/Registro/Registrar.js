import FrameComponent from "../../components/Registro/FrameComponent";
import FrameComponent1 from "../../components/Registro/FrameComponent1";
import Content from "../../components/Registro/Content";
import styles from "./Registrar.module.css";

const Registrar = () => {
  return (
    <div className={styles.registrar}>
      <FrameComponent prop="/531.svg" />
      <div className={styles.frameParent}>
        <FrameComponent1
          emptyContent="/532.svg"
          text="Criar conta"
          supportingText="Crie sua conta para navegar"
        />
        <Content />
      </div>
    </div>
  );
};

export default Registrar;
