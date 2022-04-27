import React, { useRef } from "react";
import styles from './WeaponForEquipment.module.css';

function WeaponForEquipment() {

    const useShooting = useRef(null)
    const useGilz = useRef(null)
    const useShootFire = useRef(null)
    const useReloadWindow = useRef(null)

    const shoot = () => {
        useShooting.current.style.display = 'block';
        useGilz.current.style.display = 'block';
        useShootFire.current.style.display = 'block'
        useReloadWindow.current.style.display = 'block'
    }
    const notShoot = () => {
        useShooting.current.style.display = 'none';
        useGilz.current.style.display = 'none';
        useShootFire.current.style.display = 'none'
        useReloadWindow.current.style.display = 'none'
    }

    return (
        <div>
            <div className={styles.main} onMouseEnter={shoot} onMouseLeave={notShoot}></div>
            <div className={styles.gilz} ref={useGilz}></div>
            <div className={styles.shooting} ref={useShooting}></div>
            <div className={styles.shootFire} ref={useShootFire}></div>
            <div className={styles.reloadWindow} ref={useReloadWindow}></div>
        </div>
    )
};

export default WeaponForEquipment;