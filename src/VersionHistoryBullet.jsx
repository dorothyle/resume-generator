import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './VersionHistoryBullet.module.css';

const VersionHistoryBullet = ({ text }) => {
  const bulletPointIcon = "mdi:dot";
  return (
    <div className={style.versionBulletContainer}>
      <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '3rem', height: '3rem', 'flex-shrink': '0' }}></Icon>
      <p>{text}</p>
    </div>
  );
};

export default VersionHistoryBullet;
