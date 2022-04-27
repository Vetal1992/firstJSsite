import React from "react";
import styles from "./DescriptionPage.module.css"
import BackToMain from "../../homepage/BackToMainpage";

function DescriptionPage(props) {
    return (
        <>
        <BackToMain />
            <div className={styles.mainBlock}>
                <h1>{props.descriptionParams.mainHeader}</h1>
                <p><b>{props.descriptionParams.secondHeader}</b></p>
                <ul>
                    <p className={styles.simpleWent}>{props.descriptionParams.textOnP}</p>
                    {props.descriptionParams.image}
                    {props.descriptionParams.textLi}
                    {props.descriptionParams.textP}
                </ul>
                <ul>
                    <p className={styles.simpleWent}>{props.descriptionParams.headerOnP}</p>
                    <span>{props.descriptionParams.textSpan}</span>
                        {props.descriptionParams.image1}
                        {props.descriptionParams.textLi1}
                        {props.descriptionParams.textSpan1}
                        {props.descriptionParams.textP1}
                </ul>
            </div>
        </>
    )
};

export default DescriptionPage;