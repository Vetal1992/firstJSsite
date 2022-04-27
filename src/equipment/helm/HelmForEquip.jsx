import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './HelmForEquip.module.css';
import HelmForEquipPrev from "./HelmForEquipPrev";

function HelmForEquip() {

    const useHelmMoove = useRef(null);
    const ref = useRef(null);
    const navigate = useNavigate();

    const linking = () =>{
        navigate('/helmPage', {replace: false})
    }

    const helmMoove = () => {
        useHelmMoove.current.style.display = 'block';
        ref.current.style.display = 'block';
    }
    const helmStop = () => {
        useHelmMoove.current.style.display = 'none';
        ref.current.style.display = 'none';
    }

    return (
        <div>
            <div onClick={helmMoove} className={styles.main} onMouseEnter={helmMoove} onMouseLeave={helmStop}>
                <div onClick={linking} className={styles.linkingBlock} ref={ref}></div>
            </div>
            <div className={styles.helmPrev} ref={useHelmMoove}><HelmForEquipPrev /></div>
        </div>
    )
};

export default HelmForEquip;