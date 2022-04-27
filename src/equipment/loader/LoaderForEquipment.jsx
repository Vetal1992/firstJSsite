import React, { useRef } from "react";
import styles from './LoaderForEquipment.module.css';
import LoaderPrev from "./LoaderPrev";
import {useNavigate} from 'react-router-dom'

function LoaderForEquipment() {

    const useLoaderMain = useRef(null);
    const navigate = useNavigate();
    const ref = useRef(null);

    const linking = () => {
        navigate('/loaderPage', {replace: false})
    }

    const loaderMoove = () => {
        useLoaderMain.current.style.display = 'block'
        ref.current.style.display = 'block'
    }
    const loaderStop = () => {
        useLoaderMain.current.style.display = 'none'
        ref.current.style.display = 'none'
    }

    return (
        <div>
            <div onClick={loaderMoove} className={styles.loaderMain} onMouseEnter={loaderMoove} onMouseLeave={loaderStop}>
                <div onClick={linking} className={styles.linkingBlock} ref={ref} ></div>
            </div>
            <div className={styles.loaderPrev} ref={useLoaderMain}><LoaderPrev /></div>
        </div>
    )
};

export default LoaderForEquipment;