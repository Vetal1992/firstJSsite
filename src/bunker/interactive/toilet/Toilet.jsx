import React, { useRef } from "react";
import styles from './Toilet.module.css';
import { useNavigate } from 'react-router-dom';
import ToiletText from "./ToiletText";

function Toilet() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const linking = () => {
        navigate('/toiletPage', { replace: false })
    }

    const handleFocusToiletEnter = () => {
        ref.current.style.display = 'block';
        ref2.current.style.display = 'block';
    }
    const handleFocusToiletLeave = () => {
        ref.current.style.display = 'none';
        ref2.current.style.display = 'none';
    }

    return (
        <>
                <div onClick={handleFocusToiletEnter} className={styles.toilet}
                    onMouseEnter={handleFocusToiletEnter}
                    onMouseLeave={handleFocusToiletLeave}>
                    <div className={styles.linkingBlock} onClick={linking} ref={ref2}></div>
                </div>
            <div className={styles.description} ref={ref}>
                <ToiletText />
            </div>
        </>
    )
};

export default Toilet;