import { useState } from "react";
import { Icon } from "@iconify/react";
import ExperienceForm from "./ExperienceForm";
import Preview from "./Preview";
import Dummy from "./Dummy";
import "./App.css";

let nextId = 1;

function App() {
  const plusIcon = "ic:round-plus";
  const [experienceList, setExperienceList] = useState([{
    id: 0,
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletPoints: [{ id: 0, text: '', versionHistory: ["first version", "second version"] }],
    isOpen: true
  }]);

  const handleAddRole = () => {
    let newExperienceList = experienceList.map((experience) => ({ ...experience, isOpen: false }));
    newExperienceList.push({
      id: nextId,
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      bulletPoints: [{ id: 0, text: '', versionHistory: [] }],
      isOpen: true
    });
    setExperienceList(newExperienceList);
    nextId++;
  }

  return (
    <div className="app-container">
      {/* <Dummy /> */}
      
      <Preview experienceList={experienceList} />
      <div className="formContainer">
        {experienceList.map((experience, index) => (
          <ExperienceForm key={experience.id} index={index} experienceList={experienceList} setExperienceList={setExperienceList} />
        ))}
        
        <div className="addRoleButtonContainer">
          <Icon icon={plusIcon} id="plusIcon" />
          <button onClick={() => handleAddRole()}>Add more roles</button>
        </div>
      </div>
    </div>
  );
}

export default App;
