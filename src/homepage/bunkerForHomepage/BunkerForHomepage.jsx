import React, { useRef } from "react";
import styles from './BunkerForHomepage.module.css';
import { useNavigate } from "react-router-dom";

function BunkerForHomepage() {
    const ref = useRef(null)
    const relink = useNavigate()

    const handleFocusEquipmentEnter = () => {
        ref.current.style.display = 'block'
    }
    const handleFocusEquipmentLeave = () => {
        ref.current.style.display = 'none'
    }
    const onLoad = () => {
        handleFocusEquipmentEnter()
        setTimeout(() => relink('/bunker', { replace: false }), 1000)
    }
    
    return (
        <>
            <div ref={ref} className={styles.armour}></div>
            <a onClick={onLoad} ><div className={styles.blocks}
                onMouseEnter={handleFocusEquipmentEnter} onMouseLeave={handleFocusEquipmentLeave}
            ><h1>БУНКЕР</h1></div></a>
        </>
    )
};

export default BunkerForHomepage;