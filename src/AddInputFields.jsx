import { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './AddInputFields.module.css';

let nextId = 1;

export default function AddDynamicInputFields() {
  const bulletPointIcon = 'material-symbols:circle-outline';
  const penIcon = 'fluent:pen-sparkle-32-regular';
  const trashIcon = 'ant-design:delete-outlined';

  const [bulletPoints, setBulletPoints] = useState([{ id: 0, text: '', versionHistory: [] }]);

  const handleAddInput = () => {
    setBulletPoints([...bulletPoints, { id: nextId, text: '', versionHistory: [] }]);
    nextId++;
  };

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
    <div className={style.container}>
      {bulletPoints.map((item, index) => (
        <div className={style.bullet} key={index}>
          <span>
            <Icon icon={bulletPointIcon} style={{ color: '#414141', width: '0.75rem', height: '0.75rem' }}></Icon>
          </span>
          <input name="text" type="text" value={item.text} onChange={event => handleChange(event, index)} />
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
          {/* can put the edit and delete buttons here */}
          {/* {bulletPoints.length > 1 && <button onClick={() => handleDeleteInput(index)}>Delete</button>} */}
          {/* {index === bulletPoints.length - 1 && <button onClick={() => handleAddInput()}>Add</button>} */}
        </div>
      ))}

      <button onClick={() => handleAddInput()}>Add</button>
      <div className="body"> {JSON.stringify(bulletPoints)} </div>
    </div>
  );
}
