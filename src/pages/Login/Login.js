import FrameComponent from "../../components/FrameComponent";
import FrameComponent1 from "../../components/FrameComponent1";
import Content1 from "../../components/Content1";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <FrameComponent frameDivPadding="100px 0px 0px" prop="/531.svg" />
      <div className={styles.frameParent}>
        <FrameComponent1
          emptyContent="/52.svg"
          text="Entre com sua conta"
          textColor="#2b2f38"
          supportingText="Seja Bem-vindo! Insira seus dados."
        />
        <Content1 />
      </div>
    </div>
  );
};

export default Login;
