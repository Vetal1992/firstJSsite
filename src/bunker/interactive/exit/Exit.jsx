import React, { useRef } from "react";
import styles from './Exit.module.css';
import ExitText from "./ExitText";

function Exit() {
    const ref = useRef(null)

    const handleFocusExitEnter = () => {
        ref.current.style.display = 'block'
    };

    const handleFocusExitLeave = () => {
        ref.current.style.display = 'none'
    };

    return (
        <>
                <div className={styles.exit}
                    onMouseEnter={handleFocusExitEnter}
                    onMouseLeave={handleFocusExitLeave}></div>
            <div className={styles.description} ref={ref}>
                <ExitText />
            </div>
        </>
    )
};

export default Exit;