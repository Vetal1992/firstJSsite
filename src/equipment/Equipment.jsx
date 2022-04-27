import React from "react";
import BackToMain from "../homepage/BackToMainpage";
import { Link } from "react-router-dom";
import styles from './Equipment.module.css';
import WeaponForEquipment from "./weaponForWeapon/WeaponForEquipment.jsx";
import BackPackForWeapon from "./backPackForEquipment/BackPackForEquipment";
import LoaderForEquipment from "./loader/LoaderForEquipment";
import BodyArmour from "./armor/BodyArmour";
import HelmForEquip from "./helm/HelmForEquip";
import ShoozeForEquip from "./shooze/ShoozeForEquip";

const Equipment = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <WeaponForEquipment />
                <BackPackForWeapon />
                <LoaderForEquipment />
                <BodyArmour />
                <HelmForEquip />
                <ShoozeForEquip />
                <div className={styles.equipmentMain}>
                    <h1>Page for Equipment</h1>
                    <Link to="/body-armour">Choice body armour</Link>
                    <Link to="/form">Choise form</Link>
                    <BackToMain />
                </div>
            </div>
        </div>
    )
};

export default Equipment;