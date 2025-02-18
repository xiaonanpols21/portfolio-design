import ExperienceCard from "@/components/cards/experience";
import styles from "./experiences.module.scss";

export default async function Experiences() {

    return (
        <section className={`${styles.section}`} id="ervaringen">
            <div>
                <h2 className="sec-h2">Ervaringen</h2>
                <ul tabIndex={-1}>
                    <li>
                        <h3>2024</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>Amazing Oriental</h4>
                                    <p className={styles.heden}>2024 - Heden</p>
                                    <p>Food corner medewerker</p>
                                </section>
                            </li>
                        
                        </ul>
                    </li>
                    <li>
                        <h3>2023</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>Devani</h4>
                                    <p>2023 - 2024</p>
                                    <p>Front-end developer en Designer</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2022</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>CrossmarX</h4>
                                    <p>2022</p>
                                    <p>Front-end developer en Designer</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2020</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>HBO CMD: Communication Multimedia Design</h4>
                                    <p className={styles.education}>2022 - 2025</p>
                                    <p>1e jaar propedeuse, Cum Laude</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2019</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>Brick Zero</h4>
                                    <p>2019</p>
                                    <p>Webdesiger</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2018</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>Webequity B.V</h4>
                                    <p>2018 - 2019</p>
                                    <p>Mediavormgever</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2017</h3>
                        <ul>
                            <li>
                                <section className={`${styles.card}`} tabIndex={0}>
                                    <h4>MBO 4 Mediavormgeving</h4>
                                    <p className={styles.education}>2017 - 2020</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>2016</h3>
                        <ul>
                            <li>
                                <section className={styles.card} tabIndex={0}>
                                    <h4>DekaMarkt</h4>
                                    <p>2016 - 2025</p>
                                    <p>Allround</p>
                                </section>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}