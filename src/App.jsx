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
  return (
    <div className="app-container">
      <DynamicInputFields />
      {/* <Preview experienceData={experienceData} />
      <ExperienceForm experienceData={experienceData} setExperienceData={setExperienceData}/> */}
    </div>
  );
}

export default App;
