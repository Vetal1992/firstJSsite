import React from "react";
import styles from './Bathroom.module.css';

function BathroomText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Прихожая</h1>
                <p>
                Для большей безопастности можно сделать это помещение максимально прочным.
                </p>
                <p>
                Малая площадь и прочная армированная конструкция в этом случаи будут не лишними. 
                Именно здесь должен находиться тревожный чемоданчик.
                </p>
            </div>
        </>
    )
};

export default BathroomText;