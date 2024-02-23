import { useState } from "react";
import { Icon } from "@iconify/react";
import ExperienceForm from "./ExperienceForm";
import Preview from "./Preview";
import "./App.css";

function App() {
  const plusIcon = "ic:round-plus";
  const [experienceList, setExperienceList] = useState([{
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletPoints: [{ id: 0, text: '', versionHistory: [] }]
  }]);

  const handleAddRole = () => {
    setExperienceList([...experienceList,
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      bulletPoints: [{ id: 0, text: '', versionHistory: [] }]
    }]);
  }

  return (
    <div className="app-container">
      <Preview experienceList={experienceList} />
      <div className="formContainer">
        {experienceList.map((experience, index) => (
          <ExperienceForm index={index} experienceList={experienceList} setExperienceList={setExperienceList} />
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
