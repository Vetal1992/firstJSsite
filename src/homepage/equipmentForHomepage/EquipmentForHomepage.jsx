import React, { useRef } from "react";
import styles from './EquipmentForHomepage.module.css';
import { useNavigate } from "react-router-dom";

function EquipmentForHomepage() {
    const ref = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const navigate = useNavigate()

    const handleFocusEquipmentEnter = () => {
        ref.current.style.display = 'block'
        ref1.current.style.display = 'block'
        ref2.current.style.display = 'block'
        ref3.current.style.display = 'block'
    }
    const handleFocusEquipmentLeave = () => {
        ref.current.style.display = 'none'
        ref1.current.style.display = 'none'
        ref2.current.style.display = 'none'
        ref3.current.style.display = 'none'
    }

    const relocating = () => {
        handleFocusEquipmentEnter()
        setTimeout(()=> navigate('/equipment', {replace: false}), 1000)
    }
    return (
        <div className={styles.main}>
            <div ref={ref} className={styles.armour}></div>
            <div ref={ref1} className={styles.boots} ></div>
            <div ref={ref2} className={styles.head} ></div>
            <div ref={ref3} className={styles.unloading} ></div>
            <a onClick={relocating}><div className={styles.blocks} 
            onMouseEnter={handleFocusEquipmentEnter}
            onMouseLeave={handleFocusEquipmentLeave} ><h1>СНАРЯЖЕНИЕ</h1></div></a>
        </div>
    )
};

export default EquipmentForHomepage;