"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import ImgSimple from "@/components/cards/imgSimpleSec";
import ImgSimpleBtn from "../../buttons/imgSimple";
import ImgSimpleRadio from "../../cards/imgSimple";
import BtnPrimaireShadow from '../../buttons/primaireShadow';
import styles from "./radio.module.scss";

export default function Radio({classes, data}) {
    const dialogRef = useRef(null);            // Chat GPT

    const handleOpen = () => {
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close(); 
    }; 

    return (
        <section className={`${styles.section} ${classes}`}>
            <h3 className="visually-hidden">Gallerij</h3>
            <div>

                <>

                    <button className={`${styles.div} ${classes}`} onClick={() => handleOpen()} >
                        <div className={styles.overlay}>
                            <div></div>
                        </div>
                    </button>

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


         
            <form>
                <label tabIndex={0} onKeyPress={() => handleOpen()}>
                    <input 
                        type="radio" 
                        name="img" 
                        defaultChecked={0}
                        tabIndex={-1}
                        value={"deka-1-radio"}
                    />
                    <ImgSimple
                        img={"/img/projects/deka.png"}
                        alt={"SHift savy 1"}
                        classes={styles.chooseImg}
                    />
                </label>
                <label tabIndex={0} onKeyPress={() => handleOpen()}>
                    <input 
                        type="radio" 
                        name="img" 
                        tabIndex={-1}
                        value={"deka-2-radio"}
                    />
                    <ImgSimple
                        img={"/img/projects/deka-2.jpg"}
                        alt={"Shift savy 2"}
                        classes={styles.chooseImg}
                    />
                </label>
                <label tabIndex={0} onKeyPress={() => handleOpen()}>
                    <input 
                        type="radio" 
                        name="img" 
                        defaultChecked={0}
                        tabIndex={-1}
                        value={"deka-3-radio"}
                    />
                    <ImgSimple
                        img={"/img/projects/deka-3.jpg"}
                        alt={"Shift savy 3"}
                        classes={styles.chooseImg}
                    />
                </label>
            </form>
            </div>

        </section>
     
    )
}