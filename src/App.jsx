import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import Preview from "./Preview";
import "./App.css";

function App() {
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
        <button onClick={() => handleAddRole()}>Add Role</button>
      </div>

    </div>
  );
}

export default App;
