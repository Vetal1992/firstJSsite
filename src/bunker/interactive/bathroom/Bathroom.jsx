import React, { useRef } from "react";
import styles from './Bathroom.module.css';
import BathroomText from "./BathroomText";

function Bathroom() {
    const ref = useRef(null)

    const handleFocusBathroomEnter = () => {
        ref.current.style.display = 'block'
    };

    const handleFocusBathroomLeave = () => {
        ref.current.style.display = 'none'
    };

    return (
        <>
            <div className={styles.bathroom}
                onMouseEnter={handleFocusBathroomEnter}
                onMouseLeave={handleFocusBathroomLeave}></div>
            <div className={styles.description} ref={ref}>
                <BathroomText />
            </div>
        </>
    )
};

export default Bathroom;