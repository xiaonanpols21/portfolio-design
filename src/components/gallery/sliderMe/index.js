"use client";
import { useRef } from 'react';
import Image from 'next/image';
import BtnPrimaireShadow from '../../buttons/primaireShadow';
import styles from "./slider.module.scss";

export default function Slider({ classes }) {
    const dialogRef = useRef(null);

    // Chat GPT
    const handleOpen = () => {
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close(); 
    };

    return (
        <>
            <section className={`${styles.section} ${classes}`}>
                <h4 className="visually-hidden">Galerij slider</h4>
                <ul>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"me-1"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/gallery/g-1.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Xiao Nan Pols"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"me-2"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/gallery/g-2.jpeg"}
                                    width={300}
                                    height={360}
                                    alt={"Xao Nan Pols"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"me-3"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/gallery/g-3.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Xiao Nan Pols"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"me-4"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/gallery/g-4.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Xiao Nan Pols"}
                                />
                            </div>
                        </div>
                    </li>
             
                </ul>
            </section>
            <dialog ref={dialogRef} className={styles.dialog}>
   
                <div></div>
          
                <BtnPrimaireShadow
                    aria="Sluit knop"
                    img={"../../img/icons/close.svg"}
                    alt={"Kruis icoon"}
                    classes={styles.closeBtn}
                    onClick={handleClose}
                />
            </dialog>
        </>
    );
}
