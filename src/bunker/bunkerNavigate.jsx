import React, { useRef } from "react";
import styles from './Bunker.module.css';
import { useNavigate } from "react-router-dom";
import BunkerNavigateHeader from "./BunkerNavigateHeader";

function BunkerNavigate(props) {

    const useBack = useRef(null)
    const useNext = useRef(null)
    const useNavHead = useRef(null)
    const hist = useNavigate()

    function showBack() {
        useNavHead.current.style.display = 'block'
        setTimeout(() => {
            useBack.current.style.display = 'block'
        }, 400)
    }
    function showNext() {
        useNavHead.current.style.display = 'block'
        setTimeout(() => {
            useNext.current.style.display = 'block'
        }, 400)
    }
    function hideBack() {
        useNavHead.current.style.display = 'none'
        setTimeout(() => {
            useBack.current.style.display = 'none'
        }, 400)
    }
    function hideNext() {
        useNavHead.current.style.display = 'none'
        setTimeout(() => {
            useNext.current.style.display = 'none'
        }, 400)
    }


    return (
        <>
            <BunkerNavigateHeader build={props.build} type={props.type} place={props.place} navHead={useNavHead}
                styleType={props.styleType} styleBuild={props.styleBuild} stylePlace={props.stylePlace} />
            <button className={styles.back}
                onClick={() => hist(props.back, { replace: true })}>
                <div className={styles.triangleLeft} ref={useBack}></div></button>
            <button className={styles.next}
                onClick={() => hist(props.next, { replace: true })}>
                <div className={styles.triangleRight} ref={useNext}></div></button>
        </>
    )
};

export default BunkerNavigate;