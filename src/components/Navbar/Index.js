import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar_left}>
                    <h2 className={styles.navbar_brand}>Covid ID</h2>
                </div>
                <div className={styles.navbar_right}>
                    <ul className={styles.navbar_list}>
                        <li className={styles.navbar_item}><a href="#home" className={styles.a}>Home</a></li>
                        <li className={styles.navbar_item}>
                            <a href="#card" className={styles.a}>Indonesia</a>
                        </li>
                        <li className={styles.navbar_item}>
                            <a href="#provinsi" className={styles.a} >Provinsi</a>
                        </li>
                        <li className={styles.navbar_item}>About</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
