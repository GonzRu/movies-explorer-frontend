import React, { useEffect, useState } from 'react';
import './LoggedNavigation.css';
import { useLocation } from 'react-router-dom';
import MenuIcon from './MenuIcon/MenuIcon';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

function LoggedNavigation() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => setShowSideBar(false), [location]);

  return (
    <div>
      <NavBar />
      <MenuIcon onClick={() => setShowSideBar(true)} />
      <SideBar
        visible={showSideBar}
        onCLose={() => setShowSideBar(false)}
      />
    </div>
  );
}

export default LoggedNavigation;
