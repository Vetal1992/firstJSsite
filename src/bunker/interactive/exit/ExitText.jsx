import React from "react";
import styles from './Exit.module.css';

function ExitText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Запасной выход</h1>
                <p>
                    Я бы выводил запастной выход в максимально дальний угол участка.
                </p>
                <p>
                    Если есть желание и возможность, то выход можно сделать пологим и широким, что бы загонять в бункер к примеру квадроцикл.
                </p>
            </div>
        </>
    )
};

export default ExitText;