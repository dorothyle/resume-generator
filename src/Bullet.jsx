import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './Bullet.module.css';

const Bullet = ({ index, bulletPoints, setBulletPoints }) => {
  const bulletPointIcon = 'material-symbols:circle-outline';
  const penIcon = 'fluent:pen-sparkle-32-regular';
  const trashIcon = 'ant-design:delete-outlined';

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...bulletPoints];
    onChangeValue[index][name] = value;
    setBulletPoints(onChangeValue);
  };

  const handleDeleteInput = index => {
    const newArray = [...bulletPoints];
    newArray.splice(index, 1);
    setBulletPoints(newArray);
  };

  return (
    <div className={style.bullet}>
      <span>
        <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '0.75rem', height: '0.75rem' }}></Icon>
      </span>
      <input type="text" name="text" value={bulletPoints[index].text} onChange={event => handleChange(event, index)} />
      <span>
        <Icon icon={penIcon} style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}></Icon>
      </span>
      <span>
        <Icon
          icon={trashIcon}
          style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}
          onClick={() => handleDeleteInput(index)}
        ></Icon>
      </span>
    </div>
  );
};

export default Bullet;
