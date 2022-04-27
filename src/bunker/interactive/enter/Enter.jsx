import React, { useRef } from "react";
import styles from './Enter.module.css';
import EnterText from "./EnterText";

function Enter() {
    const ref = useRef(null)

    const handleFocusEnterEnter = () => {
        ref.current.style.display = 'block'
    };

    const handleFocusEnterLeave = () => {
        ref.current.style.display = 'none'
    };

    return (
        <>
            <div className={styles.enter}
                onMouseEnter={handleFocusEnterEnter}
                onMouseLeave={handleFocusEnterLeave}></div>
            <div className={styles.description} ref={ref}>
                <EnterText />
            </div>
        </>
    )
};

export default Enter;