import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import SideBar from '../../SideBar';
import HomeProfile from './HomeProfile/HomeProfile';
import HomePageSlider from './HomePageSlider/HomePageSlider';
import HomeStatus from './HomeStatus/HomeStatus';
import Testings from '../../Testings/Testings';
const HomePage = () => {
  return (
    <React.Fragment>
        <SideBar/>
        <HomeHeader/>
        <HomeProfile/>
        <HomePageSlider/>
        <HomeStatus/>
        <Testings/>
    </React.Fragment>
  )
}

export default HomePage;