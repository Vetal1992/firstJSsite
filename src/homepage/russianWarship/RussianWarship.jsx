import React, { useRef } from "react";
import styles from './RussianWarship.module.css'

function RussianWarship() {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    let time;

    const congradulation = () => {
        time = setTimeout(()=>ref3.current.style.display = 'block', 10000);
    }

    const mooveWarship = () => {
        ref.current.style.display = 'block';
        ref1.current.style.display = 'block';
        ref2.current.style.display = 'block';
        congradulation()
    }

    const stopWarship = () => {
        ref.current.style.display = 'none';
        ref1.current.style.display = 'none';
        ref2.current.style.display = 'none';
        ref3.current.style.display = 'none';
        clearTimeout(time)            
    }


    return (
        <>
            <div className={styles.russianWarship} onMouseEnter={mooveWarship} onMouseLeave={stopWarship} ></div>
            <div className={styles.penis} ref={ref}></div>
            <div className={styles.storms} ref={ref1}></div>
            <div className={styles.warshipPhone} ref={ref2}><a>Утримуй приціл! Допоможи російському військовому кораблю знайти дорогу</a></div>
            <div className={styles.congradulation} ref={ref3}>
                <p>ВІТАЮ!!! РОСІЙСЬКИЙ КОРАБЕЛЬ ВЗЯВ ДО РОТА Х@Й!!!</p>
                <p>СЛАВА УКРАЇНІ!!!</p>
            </div>
        </>
    )
};

export default RussianWarship;