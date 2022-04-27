import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Homepage.module.css'

function BackToMain () {

    const navigate = useNavigate()
    const backMain = () => {
        setTimeout(() => navigate('/', {replace: false}), 1000)
    }

    return(
        <div className={styles.backToMain}>
            <a onClick={backMain}>ГЛАВНАЯ</a>
        </div>
    )
}

export default BackToMain;