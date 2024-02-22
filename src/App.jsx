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
    bulletPoints: ["this is a bullet point"]
  }]);
  const [bulletPoints, setBulletPoints] = useState([{ id: 0, text: '', versionHistory: [] }]);

  return (
    <div className="app-container">
      <Preview experienceList={experienceList} bulletPoints={bulletPoints} />
      {experienceList.map((experience, index) => (
        <ExperienceForm index={index} experienceList={experienceList} setExperienceList={setExperienceList} bulletPoints={bulletPoints} setBulletPoints={setBulletPoints} />
      ))}
    </div>
  );
}

export default App;
