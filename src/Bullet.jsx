import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './Bullet.module.css';
import VersionHistoryPopup from "./VersionHistoryPopup";
import Popup from './Popup';

const Bullet = ({ experienceIndex, bulletIndex, experienceList, setExperienceList }) => {
  const bulletPointIcon = 'material-symbols:circle-outline';
  const penIcon = 'fluent:pen-sparkle-32-regular';
  const trashIcon = 'ant-design:delete-outlined';
  const [appear, setAppear] = useState(false);
  const [deletePopupAppear, setDeletePopupAppear] = useState(false);
  const [emptyBullet, setEmptyBullet] = useState(false);
  const deleteBulletMessage = "Are you sure you want to delete this bullet point and its version history? This action cannot be undone.";

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...experienceList];
    onChangeValue[experienceIndex].bulletPoints[index][name] = value;
    setExperienceList(onChangeValue);
    // Removes error message when bullet point is not empty
    if (value != "" && value.trim() != "") {
      setEmptyBullet(false);
    }
  };

  const promptBulletDeletion = () => {
    setDeletePopupAppear(true);
  }

  const handleDeleteInput = index => {
    const newExperienceList = [...experienceList];
    const newBulletPoints = [...newExperienceList[experienceIndex].bulletPoints];
    newBulletPoints.splice(index, 1);
    newExperienceList[experienceIndex].bulletPoints = newBulletPoints;
    setExperienceList(newExperienceList);
  };

  const togglePopup = () => {
    let currentBullet = experienceList[experienceIndex].bulletPoints[bulletIndex].text;
    // Display error message when trying to generate and given empty bullet point
    if (currentBullet === "" || currentBullet.trim() === "") {
      setEmptyBullet(true);
    }
    // If not empty, allows generation
    else {
      setEmptyBullet(false);
      setAppear(true);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

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
            onClick={promptBulletDeletion}
          ></Icon>
        </span>
      </div>
      <p className={`${style.empytBulletErrorMessage} ${ emptyBullet ? style.show : "" }`}>Please enter a bullet point.</p>
      <VersionHistoryPopup appear={appear} setAppear={setAppear} experienceList={experienceList} setExperienceList={setExperienceList} experienceIndex={experienceIndex} bulletIndex={bulletIndex}/>
      <Popup experienceList={experienceList} setExperienceList={setExperienceList} experienceIndex={experienceIndex} bulletIndex={bulletIndex} appear={deletePopupAppear} setAppear={setDeletePopupAppear} title={"Confirm Deletion"} message={deleteBulletMessage} buttonText={"Delete"} />
    </div>
  );
};

export default Bullet;
