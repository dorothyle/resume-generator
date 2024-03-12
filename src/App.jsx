import { useState } from "react";
import { Icon } from "@iconify/react";
import { saveAs } from "file-saver";
import ExperienceForm from "./ExperienceForm";
import Preview from "./Preview";
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
    bulletPoints: [{ id: 0, text: '', versionHistory: [] }],
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

  const formatDates = (experience) => {
    let startDate = new Date(experience.startDate.split("-"));
    let endDate = new Date(experience.endDate.split("-"));
    let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    startDate = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
    endDate = `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
    return [startDate, endDate];
  };

  const exportFile = () => {
    let resumeString = "";
    for (let exp = 0; exp < experienceList.length; exp++) {
      let [startDateStr, endDateStr] = formatDates(experienceList[exp]);
      resumeString += experienceList[exp].role + "\n" + experienceList[exp].company + "\n" + startDateStr + " - " + endDateStr + "\n" + experienceList[exp].location + "\n";
      for (let bullet = 0; bullet < experienceList[exp].bulletPoints.length; bullet++) {
        resumeString += "• " + experienceList[exp].bulletPoints[bullet].text + "\n";
      }
      resumeString += "\n";
    }

    console.log(resumeString);
    var blob = new Blob([resumeString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "resume.txt");
  }

  return (
    <div className="app-container">      
      <Preview experienceList={experienceList} />
      <div className="formContainer">
        {experienceList.map((experience, index) => (
          <ExperienceForm key={experience.id} index={index} experienceList={experienceList} setExperienceList={setExperienceList} />
        ))}
        
        <div className="addRoleButtonContainer">
          <Icon icon={plusIcon} id="plusIcon" />
          <button onClick={() => handleAddRole()}>Add more roles</button>
        </div>
       <button onClick={exportFile} >export</button>
     </div>
    </div>
  );
}

export default App;
