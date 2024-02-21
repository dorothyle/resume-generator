import { useState } from 'react';
import { Icon } from '@iconify/react';
import style from './AddInputFields.module.css';
import Child from './Child';
import Bullet from './Bullet';

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
        <Bullet key={item.id} index={index} bulletPoints={bulletPoints} setBulletPoints={setBulletPoints} />
      ))}

      <button onClick={() => handleAddInput()}>Add</button>
      <div className="body"> {JSON.stringify(bulletPoints)} </div>
    </div>
  );
}
