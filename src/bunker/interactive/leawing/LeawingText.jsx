import React from "react";
import styles from './Leawing.module.css';

function LeawingText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Жилое помещение</h1>
                <p>
                    Здесь работает правило чем больше тем лучше.
                </p>
                <p>
                    Хорошо оборудованное помещение можно использовать и в мирное время, к примеру для уединения.
                </p>
            </div>
        </>
    )
};

export default LeawingText;