
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import SliderXiao from "@/components/gallery/sliderXiao";
import RadioXiao from "@/components/gallery/radioXiao";
import LinkPrimaireTarget from "@/components/links/primaireTarget";
import styles from "./project.module.scss";

export default function Project() {

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div>
               
                    <SliderXiao classes={styles.slider}/>
                    <RadioXiao classes={styles.radio}/>

                    <div>
                        <h1>Xiaoco Ijs</h1>
                        <ul>
                            <li>UX</li>
                            <li>UI</li>
                            <li>Adobe XD</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>After Affects</li>
                        </ul>

                        <LinkPrimaireTarget
                            link={"https://xiaonanpols21.github.io/SRP-Xiao-Ijs-Front-end/"}
                            aria="Live dmeo knop"
                            text={"Zie live demo"}
                            classes={styles.btn}
                        />
                        <section className={styles.content}>
                            <h2>Doel</h2>
                            <p>Een interface bouwen met vanilla JavaScript.</p>

                            <h2>Wat heb ik gedaan?</h2>
                            <div>
                                <p>Voor dit project heb ik een <Link href={"https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:f7e42c10-6d2c-4096-b201-452b07922c45"}>ontwerpproces</Link> doorlopen waarin ik een interface voor een ijskiosk heb ontworpen en geprogrammeerd. Met deze interface kan de gebruiker zijn eigen ijsje samenstellen met originele smaken of Xiao specials!</p>
                                <p>Tijdens het ontwerpproces heb ik een onderzoeksfase uitgevoerd, waarin ik de doelgroep, concurrenten en andere relevante aspecten heb onderzocht. Daarnaast heb ik <Link href={"https://www.youtube.com/watch?v=6FiB6dDu6Lo&feature=youtu.be"}>gebruikerstests</Link> uitgevoerd om de gebruiker centraal te stellen.</p>
                                <p>De interface is gebouwd met HTML, CSS en JavaScript. Als beginnende programmeur heb ik mezelf uitgedaagd om de interface volledig met vanilla JavaScript te ontwikkelen.</p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lEHniuh87_g?si=dtsxeV8wSg8uhvxJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <p>Tot slot heb ik een <Link href={"https://www.youtube.com/watch?v=lEHniuh87_g&feature=youtu.be"}>promotievideo</Link> gemaakt waarin wordt gedemonstreerd hoe de interface werkt. Deze video is gemaakt met After Effects.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main> 

            <section className={styles.nextProject}>
                <div>
                    <h3>Volgende project</h3>
                    <Link href={`/projecten/bikkeltraining`}>
                        <article className={`${styles.article}`} tabIndex={-1}>
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
