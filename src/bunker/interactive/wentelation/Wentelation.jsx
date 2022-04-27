import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Wentelation.module.css';
import WentelationText from "./WentelationText";

function Wentelation() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const tupForLinking = () => {
        navigate('/wentelation', {replace: false})
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
            <div onClick={handleFocusWentelationEnter} className={styles.wentelation} 
            onMouseEnter={handleFocusWentelationEnter} 
            onMouseLeave={handleFocusWentelationLeave} ><div onClick={tupForLinking} ref={ref2} className={styles.relink}></div></div>
            <div className={styles.description} ref={ref}>
                <WentelationText />
            </div>
        </>
    )
};

export default Wentelation;