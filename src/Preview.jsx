import React from "react";
import style from "./Preview.module.css";

const Preview = ({ experienceList }) => {

  const formatDates = (experience) => {
    let startDate = new Date(experience.startDate.split("-"));
    let endDate = new Date(experience.endDate.split("-"));
    let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    startDate = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
    endDate = `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
    return [startDate, endDate];
  };

  return (
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
  );
};

export default Preview;
