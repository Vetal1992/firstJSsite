import React, { useRef } from "react";
import styles from './BackPackForEquipment.module.css';
import BackPackPrev from "./BackPackPrev";
import { useNavigate } from "react-router-dom";

function BackPackForWeapon() {

    const useBackPack = useRef(null);
    const useBackPackPrevBackground = useRef(null);
    const useBackPackPrev = useRef(null);
    const ref = useRef(null)
    const navigate = useNavigate();

    const linking = () => {
        navigate('/backpackPage', { replace: false })
    }

    const backPackMoove = () => {
        useBackPackPrevBackground.current.style.display = 'block';
        useBackPack.current.style.display = 'block';
        ref.current.style.display = 'block';
    }
    const backPackStop = () => {
        ref.current.style.display = 'none'
        useBackPack.current.style.display = 'none';
        useBackPackPrevBackground.current.style.display = 'none';
    }

    return (
        <div>
            <div onClick={backPackMoove} className={styles.main} onMouseEnter={backPackMoove} onMouseLeave={backPackStop}>
                <div onClick={linking} className={styles.linkingBox} ref={ref} ></div>
            </div>
            <div className={styles.inBackPack} ref={useBackPack} ></div>
            <div className={styles.backPackPrev} ref={useBackPackPrevBackground}><BackPackPrev /></div>
        </div>
    )
};

export default BackPackForWeapon;