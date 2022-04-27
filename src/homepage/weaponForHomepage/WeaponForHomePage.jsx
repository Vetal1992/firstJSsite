import React, { useRef } from "react";
import styles from './WeaponForHomepage.module.css';
import { useNavigate } from "react-router-dom";

function WeaponForHomepage() {
    const ref = useRef(null)
    const navigate = useNavigate()

    const handleFocusEquipmentEnter = () => {
        ref.current.style.display = 'block'
    }
    const handleFocusEquipmentLeave = () => {
        ref.current.style.display = 'none'
    }
    const navigating = () => {
        handleFocusEquipmentEnter();
        setTimeout(() => navigate('/weapon', { replace: false }), 1000)
    }

    return (
        <>
            <div ref={ref} className={styles.armour}></div>
            <a onClick={navigating}><div className={styles.blocks}
                onMouseEnter={handleFocusEquipmentEnter}
                onMouseLeave={handleFocusEquipmentLeave} ><h1>ОРУЖИЕ</h1></div></a>
        </>
    )
};

export default WeaponForHomepage;
