import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './Bullet.module.css';
import VersionHistoryPopup from "./VersionHistoryPopup";

const Bullet = ({ experienceIndex, bulletIndex, experienceList, setExperienceList }) => {
  const bulletPointIcon = 'material-symbols:circle-outline';
  const penIcon = 'fluent:pen-sparkle-32-regular';
  const trashIcon = 'ant-design:delete-outlined';
  const [appear, setAppear] = useState(false);

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...experienceList];
    onChangeValue[experienceIndex].bulletPoints[index][name] = value;
    setExperienceList(onChangeValue);
  };

  const handleDeleteInput = index => {
    const newExperienceList = [...experienceList];
    const newBulletPoints = [...newExperienceList[experienceIndex].bulletPoints];
    newBulletPoints.splice(index, 1);
    newExperienceList[experienceIndex].bulletPoints = newBulletPoints;
    setExperienceList(newExperienceList);
  };

  const togglePopup = () => {
    setAppear(true);
  }

  return (
    <div>
      <div className={style.bullet}>
        <span>
          <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '0.75rem', height: '0.75rem' }}></Icon>
        </span>
        <input type="text" name="text" value={experienceList[experienceIndex].bulletPoints[bulletIndex].text} onChange={event => handleChange(event, bulletIndex)} />
        <span>
          <Icon
            icon={penIcon}
            style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}
            onClick={togglePopup}
            ></Icon>
        </span>
        <span>
          <Icon
            icon={trashIcon}
            style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}
            onClick={() => handleDeleteInput(bulletIndex)}
          ></Icon>
        </span>
      </div>
      <VersionHistoryPopup appear={ appear } setAppear={ setAppear } />
    </div>
  );
};

export default Bullet;
