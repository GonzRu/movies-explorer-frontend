import React, { useCallback, useEffect } from 'react';
import './SideBar.css';
import classNames from 'classnames';
import SideBarContent from '../SideBarContent/SideBarContent';

function SideBar({ visible, onCLose }) {
  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onCLose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className={classNames(
      'sideBar',
      visible && 'sideBar_visible',
    )}
    >
      <SideBarContent
        visible={visible}
        onClose={onCLose}
      />
    </div>
  );
}

export default SideBar;
