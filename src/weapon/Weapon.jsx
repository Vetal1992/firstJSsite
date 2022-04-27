import React from "react";
import BackToMain from "../homepage/BackToMainpage";
import styles from './Weapon.module.css'
import { Link } from "react-router-dom";

const Weapon = () => {
    return (
        <div className={styles.weaponMain}>
            <h1>Page for Weapon</h1>
            <Link to="/weapon-license">License for weapon</Link>
            <Link to="/carabines">Carabines</Link>
            <Link to="/snipers">Snipers weapon</Link>
            <BackToMain />
        </div>)
};

export default Weapon;