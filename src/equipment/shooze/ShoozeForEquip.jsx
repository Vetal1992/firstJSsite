import React, { useRef } from "react";
import styles from './ShoozeForEquip.module.css';
import ShoozeForEquipPrev from "./ShoozeForEquipPrev";
import { useNavigate } from 'react-router-dom';

function ShoozeForEquip() {

    const useShooze = useRef(null);
    const navigate = useNavigate();
    const ref = useRef(null);

    const linking = () =>{
        navigate('/shoozePage', {replace: false})
    }

    const shoozeMoove = () => {
        useShooze.current.style.display = 'block';
        ref.current.style.display = 'block';
    }
    const shoozeStop = () => {
        useShooze.current.style.display = 'none';
        ref.current.style.display = 'none';
    }

    return (
        <div>
            <div onClick={shoozeMoove} className={styles.main} onMouseEnter={shoozeMoove} onMouseLeave={shoozeStop} >
                <div onClick={linking} className={styles.linkingBox} ref={ref}></div>
            </div>
            <div className={styles.shoozePrev} ref={useShooze}><ShoozeForEquipPrev /></div>
        </div>
    )
};

export default ShoozeForEquip;