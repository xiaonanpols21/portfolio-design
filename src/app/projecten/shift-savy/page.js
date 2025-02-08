
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import SliderShiftSavy from "@/components/gallery/sliderShiftSavy";
import RadioShiftSavy from "@/components/gallery/radioShiftSavy";
import LinkPrimaireTarget from "@/components/links/primaireTarget";
import styles from "./project.module.scss";

export default function Project() {

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div>
               
                    <SliderShiftSavy classes={styles.slider}/>
                    <RadioShiftSavy classes={styles.radio}/>

                    <div>
                        <h1>Bikkeltraining</h1>
                        <ul>
                            <li>UX</li>
                            <li>UI</li>
                            <li>Figma</li>
                            <li>After Affects</li>
                        </ul>

                        <LinkPrimaireTarget
                            link={"https://deka-app.vercel.app/"}
                            aria="Live dmeo knop"
                            text={"Zie live demo"}
                            classes={styles.btn}
                        />
                        <section className={styles.content}>
                            <h2>Doel</h2>
                            <p>Jonge supermarkt medewerkers motiveren om extra te gaan werken!</p>

                            <h2>Wat heb ik gedaan?</h2>
                            <div>
                                <p>Als stagiair bij Devani heb ik de website van Bikkeltraining ontworpen en geprogrammeerd. Dit project is ontworpen in Sketch. Hierbij is er een style guide gemaakt om consistent te blijven en zijn er meerdere feedback momenten geweest met de klant.</p> 
                                <p>Bekijk mijn volledige <Link href="https://devani-stageverslag.vercel.app/werkzaamheden/bikkeltraining-design">designproces!</Link></p>
                                <p>Met dit project heb ik geleerd hoe je met componenten in Sketch werkt en ontdekt hoe je een ontwerp kunt maken dat specifiek aansluit bij de klant, zodat zij hun kernwaarden optimaal op het web kunnen presenteren.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main> 

            <section className={styles.nextProject}>
                <div>
                    <h3>Volgende project</h3>
                    <Link href={`/projecten/shift-savy`}>
                        <article className={`${styles.article}`} tabIndex={1}>
                            <h3>Shift savy</h3>
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
                                    src={"/img/projects/deka.png"}
                                    width={480}
                                    height={152}
                                    alt="Xiaoco Ijs"
                                />
                            </div>
                    </article>
                    </Link>
                </div>
            </section>
       
        </>

    )
}
