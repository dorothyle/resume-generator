import React from "react";
import style from "./Preview.module.css";

const Preview = ({ experienceData, bulletPoints }) => {
  let startDate = new Date(experienceData.startDate);
  let endDate = new Date(experienceData.endDate);
  let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
  startDate = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
  endDate = `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
  
  return (
    <div className={style.preview}>
      <h1>Experience</h1>
      <p>
        <div>
          {experienceData.role === '' ? <span>Role</span> : <span>{experienceData.role}</span>}
        </div>
        <div>
          {experienceData.startDate === '' ? <span>Start Date</span> : <span>{startDate}</span>} - {experienceData.endDate === '' ? <span>End Date</span> : <span>{endDate}</span>}
        </div>
      </p>
      <p>
        <div>
          {experienceData.company === '' ? <span>Company</span> : <span>{experienceData.company}</span>}
        </div>
        <div>
          {experienceData.location === '' ? <span>Location</span> : <span>{experienceData.location}</span>}
        </div>
      </p>
      <ul>
        {bulletPoints.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
