import React from "react";
import styles from './Wather.module.css';

function WatherText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Запас воды</h1>
                <p>
                    Чем больше тем лучше, и емкость для запаса воды должна быть максимально большой.
                </p>
                <p>
                    Закопать бочку емкостью хотябы 1000литров не составит труда, но в крайнем случаи она спасет вам жизнь.
                </p>
            </div>
        </>
    )
};

export default WatherText;