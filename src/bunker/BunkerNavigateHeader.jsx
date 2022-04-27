import React from "react";
import styles from './Bunker.module.css';
import { Link } from "react-router-dom";

function BunkerNavigateHeader(props) {
    return (
        <div ref={props.navHead}>
            <div className={styles.bunkerNavHead} >
                <div className={props.styleBuild}><Link to="/choice-technical-option">{props.build}</Link></div>
                <div className={props.styleType}><Link to="/choice-type">{props.type}</Link></div>
                <div className={props.stylePlace}><Link to="/choice-place">{props.place}</Link></div>
            </div>
        </div>
    )
};

export default BunkerNavigateHeader;