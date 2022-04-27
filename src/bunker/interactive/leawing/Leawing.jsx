import React, { useRef } from "react";
import styles from './Leawing.module.css';
import { useNavigate } from 'react-router-dom';
import LeawingText from "./LeawingText";

function Leawing() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const linking = () => {
        navigate('/leawingPage', {replace: false})
    }

    const handleFocusLeawingEnter = () => {
        ref.current.style.display = 'block';
        ref2.current.style.display = 'block';
    };

    const handleFocusLeawingLeave = () => {
        ref.current.style.display = 'none';
        ref2.current.style.display = 'none';
    };

    return (
        <>
                <div onClick={handleFocusLeawingEnter} className={styles.leawing}
                    onMouseEnter={handleFocusLeawingEnter}
                    onMouseLeave={handleFocusLeawingLeave}>
                        <div onClick={linking} className={styles.linkingBlock} ref={ref2}></div>
                    </div>
            <div className={styles.description} ref={ref}>
                <LeawingText />
            </div>
        </>
    )
};

export default Leawing;
