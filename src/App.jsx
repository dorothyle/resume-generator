import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import Preview from "./Preview";
import DynamicInputFields from "./AddInputFields";
import "./App.css";

function App() {
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletPoints: ["this is a bullet point"]
  });
  const [bulletPoints, setBulletPoints] = useState([{ id: 0, text: '', versionHistory: [] }]);

  return (
    <div className="app-container">
      <Preview experienceData={experienceData} bulletPoints={bulletPoints} />
      <ExperienceForm experienceData={experienceData} setExperienceData={setExperienceData} bulletPoints={bulletPoints} setBulletPoints={setBulletPoints} />
    </div>
  );
}

export default App;
