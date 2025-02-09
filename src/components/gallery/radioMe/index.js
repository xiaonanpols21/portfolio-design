"use client";
import { useRef } from 'react';
import ImgSimple from "@/components/cards/imgSimpleSec";
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
                        value={"me-1-radio"}
                    />
                    <ImgSimple
                        img={"/img/gallery/g-1.jpg"}
                        alt={"SHift savy 1"}
                        classes={styles.chooseImg}
                    />
                </label>
                <label tabIndex={0} onKeyPress={() => handleOpen()}>
                    <input 
                        type="radio" 
                        name="img" 
                        tabIndex={-1}
                        value={"me-2-radio"}
                    />
                    <ImgSimple
                        img={"/img/gallery/g-2.jpeg"}
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
                        value={"me-3-radio"}
                    />
                    <ImgSimple
                        img={"/img/gallery/g-3.jpg"}
                        alt={"Shift savy 3"}
                        classes={styles.chooseImg}
                    />
                </label>
                <label tabIndex={0} onKeyPress={() => handleOpen()}>
                    <input 
                        type="radio" 
                        name="img" 
                        defaultChecked={0}
                        tabIndex={-1}
                        value={"me-4-radio"}
                    />
                    <ImgSimple
                        img={"/img/gallery/g-4.jpg"}
                        alt={"Shift savy 3"}
                        classes={styles.chooseImg}
                    />
                </label>
            </form>
            </div>

        </section>
     
    )
}