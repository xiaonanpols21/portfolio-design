
import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.scss";

export default async function Projects() {

    return (
        <main className={styles.section}>
            <h2 className="visually-hidden">Projecten</h2>
            <ul id="projecten">
  
                <li>
                    <article className={`${styles.article}`} tabIndex={-1}>
                        <Link href={`/projecten/shift-savy`}>
                            <h3>Shift Savy</h3>
                            <p>Jonge supermarkt medewerkers motiveren om extra te gaan werken!</p>
                            <ul>
                                <li>UX</li>
                                <li>UI</li>
                                <li>Figma</li>
                                <li>After Affects</li>
                            </ul>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/deka.png"}
                                    width={480}
                                    height={152}
                                    alt="Shift savy"
                                />
                            </div>
                        </Link>
                    </article>
                </li>
                <li>
                    <article className={`${styles.article}`} tabIndex={-1}>
                        <Link href={`/projecten/bikkeltraining`}>
                            <h3>Xiaoco Ijs</h3>
                            <p>Een Ijs kiosk designen en bouwen.</p>
                            <ul>
                                <li>UI</li>
                                <li>Adobe XD</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>After Affects</li>
                            </ul>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/xiaoco-ijs.png"}
                                    width={480}
                                    height={152}
                                    alt="Xiaoco Ijs"
                                />
                            </div>
                        </Link>
                    </article>
                </li>
                <li>
                    <article className={`${styles.article}`} tabIndex={-1}>
                        <Link href={`/projecten/bikkeltraining`}>
                            <h3>Bikkeltraining</h3>
                            <p>Een sportschoolwebsite designen met Sketch.</p>
                            <ul>
                                <li>UI</li>
                                <li>Sketch</li>
                                <li>WordPress</li>
                            </ul>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/bikkeltraining.jpg"}
                                    width={480}
                                    height={152}
                                    alt="Bikkeltraining"
                                />
                            </div>
                        </Link>
                    </article>
                </li>
 
            </ul>
        </main>
    )
}