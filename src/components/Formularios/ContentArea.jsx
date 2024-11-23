import styles from "./ContentArea.module.css";

function ContentArea ({children}) {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Requisição de Transporte Aéreo de Cargas</h1>
      <p className={styles.p}>Prezado(as), solicitamos cotação de valor para transporte, conforme as tabelas a seguir.</p>
      <h2 className={styles.h2}>Dados de Carga</h2>
      <p className={styles.p}>Preencha os campos abaixo:</p>
      {children}
    </main>
  );
};

export default ContentArea;
