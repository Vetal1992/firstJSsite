import React from "react";
import styles from './Storage.module.css';

function StorageText() {
    return (
        <>
            <div className={styles.enterText}>
                <h1>Складское помещение</h1>
                <p>
                    Если финансы и возможности позволяют то лучше сделаь отдельной комнатой
                </p>
                <p>
                    В целях экономии финансов можно место хранения оборудовать под полом, это нормальная практика в частных убежищах.
                </p>
            </div>
        </>
    )
};

export default StorageText;