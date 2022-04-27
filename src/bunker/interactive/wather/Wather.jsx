import React, { useRef } from "react";
import styles from './Wather.module.css';
import { useNavigate } from 'react-router-dom';
import WatherText from "./WatherText";

function Wather() {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const navigate = useNavigate();

    const linking = () => {
        navigate('/watherPage', { replace: false })
    }
    const handleFocusWentelationEnter = () => {
        ref.current.style.display = 'block'
        ref2.current.style.display = 'block'
    }
    const handleFocusWentelationLeave = () => {
        ref.current.style.display = 'none'
        ref2.current.style.display = 'none'
    }

    return (
        <>
            <div>
                <div onClick={handleFocusWentelationEnter} className={styles.wather}
                    onMouseEnter={handleFocusWentelationEnter}
                    onMouseLeave={handleFocusWentelationLeave}>
                    <div onClick={linking} className={styles.linking} ref={ref2} ></div>
                </div>
            </div>
            <div className={styles.description} ref={ref}>
                <WatherText />
            </div>
        </>
    )
};

export default Wather;