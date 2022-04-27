import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './HeaderMenu.module.css';

function HeaderMenu(props) {

  const [name, setName] = useState(props.bunker);


  return (
    <div className={styles.headerMenu} >
      <ul>
        <li><Link to="/bunker">{name}</Link></li>
        <li><Link to="/equipment">СНАРЯЖЕНИЕ</Link></li>
        <li><Link to="/weapon">ОРУЖИЕ</Link> </li>
      </ul>
    </div>
  )
}

export default HeaderMenu;