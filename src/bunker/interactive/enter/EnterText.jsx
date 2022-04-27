import React from "react";
import styles from './Enter.module.css';

function EnterText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Главный вход</h1>
                <p>
                    Идеально когда вход в убежище находится в подвале жилого дома.
                </p>
                <p>
                    Важнее всего оборудомать прочную, анитивандальную дверь и хорошо ее замаскировать.
                    Вертикальная лестница или ступеньки выбирает каждый сам. По лестнице проще заходить детям, старикам и заносить вещи.
                </p>
            </div>
        </>
    )
};

export default EnterText;