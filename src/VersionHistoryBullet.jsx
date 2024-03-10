import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './VersionHistoryBullet.module.css';

const VersionHistoryBullet = ({ text, isSelected }) => {
  const bulletPointIcon = "mdi:dot";
  return (
    <div className={`${style.versionBulletContainer} ${ isSelected ? style.selected : "" }`}>
      <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '3rem', height: '3rem', flexShrink: '0' }}></Icon>
      <p>{text}</p>
    </div>
  );
};

export default VersionHistoryBullet;
