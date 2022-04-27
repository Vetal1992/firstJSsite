import React from "react";
import styles from './Homepage.module.css'
import EquipmentForHomepage from './equipmentForHomepage/EquipmentForHomepage';
import BunkerForHomepage from "./bunkerForHomepage/BunkerForHomepage";
import WeaponForHomepage from "./weaponForHomepage/WeaponForHomePage";
import RussianWarship from "./russianWarship/RussianWarship";

function Home() {

    return (
        <>
            <RussianWarship />
            <div className={styles.mainHome}>
                <div className={styles.homeMain}>
                    <div className={styles.equipment}>
                        <EquipmentForHomepage />
                    </div>
                    <div className={styles.bunker}>
                        <BunkerForHomepage />
                    </div>
                    <div className={styles.weapon}>
                        <WeaponForHomepage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;