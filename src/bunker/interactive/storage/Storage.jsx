import React, { useRef } from "react";
import styles from './Storage.module.css';
import { useNavigate } from 'react-router-dom';
import StorageText from "./StorageText";

function Storage() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const linking = () => {
        navigate('/storagePage', {replace: false});
    }
 
    const handleFocusStorageEnter = () => {
        ref.current.style.display = 'block';
        ref2.current.style.display = 'block';
    }
    const handleFocusStorageLeave = () => {
        ref.current.style.display = 'none';
        ref2.current.style.display = 'none'
    }

    return (
        <>
                <div onClick={handleFocusStorageEnter} className={styles.storage}
                    onMouseEnter={handleFocusStorageEnter}
                    onMouseLeave={handleFocusStorageLeave}>
                        <div onClick={linking} className={styles.linkingBlock} ref={ref2}></div>
                    </div>
            <div className={styles.description} ref={ref}>
                <StorageText />
            </div>
        </>
    )
};

export default Storage;