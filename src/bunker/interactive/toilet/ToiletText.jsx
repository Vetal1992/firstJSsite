import React from "react";
import styles from './Toilet.module.css';

function ToiletText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Ванная комната</h1>
                <p>
                    В идеале подключить комменикации.
                </p>
                <p>
                    При подведении воды смета бункера вырастет совсем немного, а комфорта прибавиться. 
                    Как минимум воду можно подключить с дома.
                </p>
            </div>
        </>
    )
};

export default ToiletText;