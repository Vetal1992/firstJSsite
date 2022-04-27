import React, { useRef } from "react";
import styles from "./Bunker.module.css";
import BackToMain from "../homepage/BackToMainpage";
import Wentelation from "./interactive/wentelation/Wentelation";
import Exit from "./interactive/exit/Exit";
import Bathroom from "./interactive/bathroom/Bathroom";
import Toilet from "./interactive/toilet/Toilet";
import Storage from "./interactive/storage/Storage";
import Enter from "./interactive/enter/Enter";
import Leawing from "./interactive/leawing/Leawing";
import Canalization from "./interactive/canalizacion/Canalization";
import Wather from "./interactive/wather/Wather";
import BunkerNavigateHeader from "./BunkerNavigateHeader";

const Bunker = (props) => {

    const navHead = useRef(null);

    function navHeadDisp() {
        navHead.current.style.display = 'block'
    }

    return (
        <div className={styles.main}>
            <BunkerNavigateHeader build={props.build} type={props.type} place={props.place}
                navHead={navHead} />
            <BackToMain />
            <div className={styles.bunkerMainBlock} onMouseEnter={navHeadDisp}>
                <Wentelation />
                <Exit />
                <Bathroom />
                <Toilet />
                <Storage />
                <Enter />
                <Leawing />
                <Canalization />
                <Wather />
            </div>
        </div>
    )
}

export default Bunker;