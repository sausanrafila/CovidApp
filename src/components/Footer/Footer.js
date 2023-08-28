import styles from "./Footer.module.css"

function Footer() {
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.title}>Covid App</h2>
                <p className={styles.author}>Created By @Sausan</p>
            </footer>
        </div>
    )
};

export default Footer;