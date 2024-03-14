import React from "react";
import { Icon } from "@iconify/react";
import { saveAs } from "file-saver";
import style from "./Preview.module.css";

const Preview = ({ experienceList }) => {
  const exportIcon = "ion:download-outline";

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
      if (experienceList[exp].startDate === '') {
        startDateStr = 'Start Date';
      }
      if (experienceList[exp].endDate === '') {
        endDateStr = 'End Date';
      }
      resumeString += experienceList[exp].role + "\n" + experienceList[exp].company + "\n" + startDateStr + " - " + endDateStr + "\n" + experienceList[exp].location + "\n";
      for (let bullet = 0; bullet < experienceList[exp].bulletPoints.length; bullet++) {
        resumeString += "• " + experienceList[exp].bulletPoints[bullet].text + "\n";
      }
      resumeString += "\n";
    }

    var blob = new Blob([resumeString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "resume.txt");
  }

  return (
    <div className={style.previewContainer}>
      <div className={style.preview}>
        <h1>Experience</h1>
        {experienceList.map((experience, experienceIndex) => (
          <div key={experience.id}>
            <p>
              <div>
                {experience.role === '' ? <span>Role</span> : <span>{experience.role}</span>}
              </div>
              <div>
                {experience.startDate === '' ? <span>Start Date</span> : <span>{formatDates(experience)[0]}</span>} - {experience.endDate === '' ? <span>End Date</span> : <span>{formatDates(experience)[1]}</span>}
              </div>
            </p>
            <p>
              <div>
                {experience.company === '' ? <span>Company</span> : <span>{experience.company}</span>}
              </div>
              <div>
                {experience.location === '' ? <span>Location</span> : <span>{experience.location}</span>}
              </div>
            </p>
            <ul>
              {experienceList[experienceIndex].bulletPoints.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Icon icon={exportIcon} onClick={exportFile} id={style.exportButton} />
    </div>
  );
};

export default Preview;
