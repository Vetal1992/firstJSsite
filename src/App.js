import React, { useState, useEffect } from 'react';
import styles from './App.css';
import jsonServerProvider from 'ra-data-json-server'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Equipment from './equipment/Equipment';
import Bunker from './bunker/Bunker';
import Weapon from './weapon/Weapon';
import Home from './homepage/Homepage';
import ChoicePlace from './bunker/place/ChoicePlace';
import ChoiceType from './bunker/type/ChoiceType';
import ChoiceTechnicalOption from './bunker/technicalOption/ChoiceTechnicalOption';
import BodyArmour from './equipment/armor/BodyArmour';
import Form from './equipment/form/Form';
import WeaponLicense from './weapon/license/WeaponLicense';
import Carabines from './weapon/carabines/Carabines';
import SnipersWeapon from './weapon/snipers/SnipersWeapon';
import WentelationPage from './bunker/interactive/wentelation/pages/WentelationPage';
import WatherPage from './bunker/interactive/wentelation/pages/WatherPage';
import ToiletPage from './bunker/interactive/wentelation/pages/ToiletPage';
import StoragePage from './bunker/interactive/wentelation/pages/StoragePage';
import LeawingPage from './bunker/interactive/wentelation/pages/LeawingPage';
import CanalizationPage from './bunker/interactive/wentelation/pages/CanalizationPage';
import HeaderMenu from './headerMenu/HeaderMenu';
import HelmForEquipPage from './equipment/helm/HelmForEquipPage';
import LoaderForEquipmentPage from './equipment/loader/LoaderForEquipmentPage';
import ShoozeForEquipPage from './equipment/shooze/ShoozeForEquipPage';
import BackpackForEquipPage from './equipment/backPackForEquipment/BackpackForEquipPage';
import BodyArmourPage from './equipment/armor/BodyArmourPage';

function App() {

  const type = 'Тип бункера';
  const build = 'Строительство убежища';
  const place = 'Место для бункера';
  const bunker = 'БУНКЕР';

 
  return (
    <BrowserRouter>
      <HeaderMenu bunker={bunker}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/bunker" element={<Bunker type={type} build={build} place={place} />} />
        <Route path="/weapon" element={<Weapon />} />
        <Route exact path="/choice-place" element={<ChoicePlace build={build} type={type} place={place} />} />
        <Route exact path="/choice-type" element={<ChoiceType build={build} type={type} place={place} />} />
        <Route exact path="/choice-technical-option" element={<ChoiceTechnicalOption build={build} type={type} place={place} />} />
        <Route exact path='/body-armour' element={<BodyArmour />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/weapon-license' element={<WeaponLicense />} />
        <Route exact path='/carabines' element={<Carabines />} />
        <Route exact path='/snipers' element={<SnipersWeapon />} />
        <Route exact path='/wentelation' element={<WentelationPage />} />
        <Route exact path='/watherPage' element={<WatherPage />} />
        <Route exact path='/toiletPage' element={<ToiletPage />} />
        <Route exact path='/storagePage' element={<StoragePage />} />
        <Route exact path='/leawingPage' element={<LeawingPage />} />
        <Route exact path='/canalizationPage' element={<CanalizationPage />} />
        <Route exact path='/helmPage' element={<HelmForEquipPage />} />
        <Route exact path='/loaderPage' element={<LoaderForEquipmentPage />} />
        <Route exact path='/shoozePage' element={<ShoozeForEquipPage />} />
        <Route exact path='/backpackPage' element={<BackpackForEquipPage />} />
        <Route exact path='/bodyarmourPage' element={<BodyArmourPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
