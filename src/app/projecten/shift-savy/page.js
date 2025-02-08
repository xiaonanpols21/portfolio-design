
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
                        <h1>Shift Savy</h1>
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
                                <p>Met dit 20-weekse project heb ik onderzocht wat jongeren van 15 en 16 jaar motiveert om in de supermarkt te blijven werken. Daarnaast heb ik in kaart gebracht tegen welke uitdagingen zij op de werkvloer aanlopen. Op basis van hun ervaringen, frustraties en behoeften heb ik een digitaal product ontwikkeld dat gamification inzet om jongeren te motiveren om extra te gaan werken. Neem gerust <Link href={"/#contact"}>contact</Link> op om het volledige ontwerpproces van A tot Z te bekijken.</p>
                                <p>Er zijn tests uitgevoerd met de doelgroep om te onderzoeken wat zij van het product vinden en wat er verbeterd kan worden, zowel op het gebied van <Link href={"https://www.youtube.com/watch?v=qn-JWbkp5GM&feature=youtu.be"}>design</Link> als de <Link href={"https://www.youtube.com/watch?v=7gJ63qXLf9E&feature=youtu.be"}>technische</Link> aspecten.</p>
                                <p>Daarnaast is er een promotievideo gemaakt die visualiseert welke ervaringen jongeren momenteel hebben en hoe het product hen motiveert om extra te gaan werken.</p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Xlgs8Ul4TwM?si=KWD9SPOqxuuC8FnF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <p>Om te laten zien hoe het product functioneert binnen de workflow van de doelgroep, is er een uitgebreide demonstratievideo ontwikkeld.</p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/WbTYCKaZsWU?si=CzRhlTJxDpl5Ba0w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </section>
                    </div>
                </div>
            </main> 

            <section className={styles.nextProject}>
                <div>
                    <h3>Volgende project</h3>
                    <Link href={`/projecten/xiaoco-ijs`}>
                        <article className={`${styles.article}`} tabIndex={1}>
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
                    </article>
                    </Link>
                </div>
            </section>
       
        </>

    )
}
