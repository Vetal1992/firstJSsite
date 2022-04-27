import React from "react";
import styles from './Wentelation.module.css';

function WentelationText() {
    return (
        <>
            <div className={styles.wentelationText}>
                <h1>Система вентиляции</h1>
                <p>
                    Труба вентиляции в любом случаи должна быть достаточно прочной, так как она точно подвержена ударной волне.
                </p>
                <p>
                    На поверхности ее можно замаскировать в фундаменте дома, сделав решетку с отверстиями.
                </p>
            </div>
        </>
    )
};

export default WentelationText;