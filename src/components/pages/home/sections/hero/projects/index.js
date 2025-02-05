
import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.scss";

export default async function Projects() {

    return (
        <main className={styles.section}>
            <h2 className="visually-hidden">Projecten</h2>
            <ul id="projecten">
  
                    <li>
                    <article className={`${styles.article}`} tabIndex={1}>
                        <Link href={`/projecten/tmdb`}>
                            <h3>TMDB Dating app</h3>
                            <p>Jongeren helpen</p>
                            <ul>
                                <li>Figma</li>
                            </ul>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/bikkeltraining.jpg"}
                                    width={480}
                                    height={152}
                                    alt="Project"
                                />
                            </div>
                        </Link>
                    </article>
                    </li>
 
            </ul>
        </main>
    )
}