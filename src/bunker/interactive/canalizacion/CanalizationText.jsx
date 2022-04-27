import React from "react";
import styles from './Canalization.module.css';

function CanalizationText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Канализация</h1>
                <p>
                    Хорошее решение сделать отдельно выгребную яму или септик.
                </p>
                <p>
                    Естественно яму или септик нужно делать ниже уровня убежища, силу тяжения никто не отменял.
                </p>
            </div>
        </>
    )
};

export default CanalizationText;