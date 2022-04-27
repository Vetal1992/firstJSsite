import React, { useRef } from "react";
import styles from './Canalization.module.css';
import { useNavigate } from 'react-router-dom';
import CanalizationText from "./CanalizationText";

function Canalization() {
    const ref = useRef(null)
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const linking = () => {
        navigate('/canalizationPage', {replace: false})
    }

    const handleFocusCanalizationEnter = () => {
        ref.current.style.display = 'block';
        ref2.current.style.display = 'block';
    };

    const handleFocusCanalizationLeave = () => {
        ref.current.style.display = 'none';
        ref2.current.style.display = 'none';
    };

    return (
        <>
                <div onClick={handleFocusCanalizationEnter} className={styles.canalization}
                    onMouseEnter={handleFocusCanalizationEnter}
                    onMouseLeave={handleFocusCanalizationLeave}>
                        <div onClick={linking} className={styles.linkingBlock} ref={ref2}></div>
                    </div>
            <div className={styles.description} ref={ref}>
                <CanalizationText />
            </div>
        </>
    )
};

export default Canalization;
