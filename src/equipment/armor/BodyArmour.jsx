import React, { useRef } from "react";
import styles from './BodyArmour.module.css';
import BodyArmourPrev from "./BodyArmourPrev";
import { useNavigate } from "react-router-dom";

function BodyArmour() {
    const ref = useRef(null);
    const useBodyArmour = useRef(null);
    const navigate = useNavigate();
 
    const linking = () => {
        navigate('/bodyarmourPage', {replace: true})
    }

    const armourPrevMoove = () => {
        useBodyArmour.current.style.display = 'block';
        ref.current.style.display = 'block';
    }
    const armourPrevStop = () => {
        useBodyArmour.current.style.display = 'none';
        ref.current.style.display = 'none';
    }

    return (
        <div>
            <div onClick={armourPrevMoove} className={styles.main} onMouseEnter={armourPrevMoove} onMouseLeave={armourPrevStop}>
                <div onClick={linking} className={styles.linkingBlock} ref={ref}></div>
            </div>
            <div className={styles.bodyArmourPrev} ref={useBodyArmour}><BodyArmourPrev /></div>
        </div>
    )
};

export default BodyArmour;