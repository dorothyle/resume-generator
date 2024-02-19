import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './Bullet.module.css';

const Bullet = ({ id, bulletList, setBulletList }) => {
  const bulletPointIcon = 'material-symbols:circle-outline';
  const penIcon = 'fluent:pen-sparkle-32-regular';
  const trashIcon = 'ant-design:delete-outlined';

  // create new bullet --> already created in add bullet button functionality
  const [newBullet, setNewBullet] = useState({
    currentBullet: '',
    versionHistory: [''],
  });

  // automatically add new bullet to bulletList prop
  // setExperienceData({
  //   ...experienceData,
  //   [experienceData.bulletPoints]: [...experienceData.bulletPoints, { currentBullet: "", versionHistory: [""] }]
  // })
  // console.log(experienceData.bulletPoints)

  // for updating bulletList with user input
  const handleChange = e => {
    console.log('handleChange');
    console.log('bullet list:');
    console.log(bulletList);
    console.log('prop id:');
    console.log(id);
    console.log('matched elem:');
    console.log(bulletList.find(bulletElem => bulletElem.id === id));
    // update the bullet in bulletList
    setNewBullet({
      ...newBullet,
      [e.target.name]: e.target.value,
    });
  };

  const updateBulletInBulletList = e => {
    // setBulletList(bulletList.map(bulletElem => {
    //   if (bulletElem.id === id) {
    //     // Create new Bullet object with updated currentBullet value
    //     return {...bulletElem, [e.target.name]: e.target.value}
    //   }
    //   else {
    //     return bulletElem;
    //   }
    // }));
  };

  return (
    <div className={style.bullet}>
      <span>
        <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '0.75rem', height: '0.75rem' }}></Icon>
      </span>
      <input
        type="text"
        onChange={handleChange}
        name="currentBullet"
        // value={bulletList.find(bulletElem => bulletElem.id === id).currentBullet}
        value={''}
      />
      {/* <input
        type="text"
        onChange={updateBulletInBulletList} 
        name="currentBullet"
        value={bulletList.find(bulletElem => bulletElem.id === id).currentBullet}
      /> */}
      <span>
        <Icon icon={penIcon} style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}></Icon>
      </span>
      <span>
        <Icon icon={trashIcon} style={{ color: '#5B7FFF', width: '1.63894rem', height: '1.8125rem' }}></Icon>
      </span>
      {/* <p>{bulletList[bulletList.length - 1].currentBullet}</p> */}

      {/* only prints the bulletList's content at the time of being passed */}
      {/* Prints what is in bulletList */}
      {/* {bulletList.map(bulletElem => (
        <li key={bulletElem.id}> {bulletElem.currentBullet} </li>
      ))} */}
    </div>
  );
};

export default Bullet;
