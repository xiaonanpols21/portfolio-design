"use client";
import { useRef, useState } from 'react';
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
                            <input type='radio' onClick={() => handleOpen()} value={"xiao-1"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/xiaoco-ijs.png"}
                                    width={300}
                                    height={360}
                                    alt={"Xiaoco ijs 1"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"xiao-2"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/xiaoco-ijs-2.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Xiaoco ijs 2"}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div}>
                            <input type='radio' onClick={() => handleOpen()} value={"xiao-3"}/>
                            <div className={styles.overlay}>
                                <Image
                                    src={"/img/projects/xiaoco-ijs-3.jpg"}
                                    width={300}
                                    height={360}
                                    alt={"Xiaoco ijs 3"}
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
