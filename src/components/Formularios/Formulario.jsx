import styles from "./Formulario.module.css";

function Form(){
    return(
        <main className={styles.main}>
            <form action="">
                <p className={styles.p}>A carga a ser transportada é frágil ou possui alguma peculiaridade?</p>
                <section className={styles.peculiaridade}>
                    <input type="checkbox" name="peculiaridade" id="fragil" />
                    <label htmlFor="">Frágil</label>
                    
                    <input type="checkbox" name="peculiaridade" id="liquido" />
                    <label htmlFor="">Líquido</label>
            
                    <input type="checkbox" name="peculiaridade" id="refrigerado" />
                    <label htmlFor="">Refrigerado</label>
            
                    <input type="checkbox" name="peculiaridade" id="toxico" />
                    <label htmlFor="">Tóxico</label>
            
                    <label htmlFor="">Outro:</label>
                    <input type="text" name="peculiaridade" id="outro" />
                </section>

                <p className={styles.p}>A carga a ser transportada já está embalada?</p>
                <section className={styles.equipamentoEmbalado}>
                    <input type="checkbox" name="equipamentoEmbalado" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="equipamentoEmbalado" id="nao"/>
                    <label htmlFor="">Não</label>
                </section>
                
                <p className={styles.p}>Será necessário algum tipo de embalagem?</p>
                <section className={styles.embalagem}>
                    <input type="checkbox" name="embalagem" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="embalagem" id="nao"/>
                    <label htmlFor="">Não</label>
                    
                    <div>
                        <label htmlFor="">Tipo de Embalagem:</label>
                        <input type="text" name="embalagem" id="tipo"/>
                    </div>
                </section>

                <p className={styles.p}>Urgente?</p>
                <section className={styles.urgente}>
                    <input type="checkbox" name="urgente" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="urgente" id="nao"/>
                    <label htmlFor="">Não</label>
                </section>

                <div>
                    <label className={styles.p}>Prazo máximo: </label>
                    <input type="text" name="prazo" id="prazo"/>
                </div>

                <h2>Dados de Origem - Ponto de Coleta da Carga</h2>
                
                
            </form>
        </main>
    );
};

export default Form;