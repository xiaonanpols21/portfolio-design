"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import ImgSimple from "../../buttons/imgSimple";
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
                            <input type='radio' onClick={() => handleOpen()} value={"deka-1"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/deka.png"}
                                    width={300}
                                    height={360}
                                    alt={"Shift savy 1"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"deka-2"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/deka-2.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Shift savy 2"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"deka-3"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/deka-3.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Shift savy 3"}
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
