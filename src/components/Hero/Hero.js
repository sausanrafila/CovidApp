import img from "../../assets/img/img.png"
import styles from "./Hero.module.css"

function Hero() {
    return(
        <div className={styles.container} id="home">
            <section className={styles.hero}>
                <div className={styles.hero_left}>
                    <h1 className={styles.hero_judul}>Covid ID</h1>
                    <p className={styles.hero_Subjudul}>Monitoring Perkembangan Covid</p>
                    <p className={styles.hero_title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quod impedit, quia ea, itaque sapiente corporis fuga possimus sunt iste sint saepe deserunt eius beatae. Blanditiis provident quaerat distinctio quidem!</p>
                    <button className={styles.hero_button}>Vaccine</button>
                </div>
                <div className={styles.hero_right}>
                    <img src={img} alt="covid" className={styles.hero_img}/>
                </div>
            </section>
        </div>
    )
};

export default Hero;