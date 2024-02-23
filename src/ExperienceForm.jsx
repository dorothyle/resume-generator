import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "./ExperienceForm.module.css";
import Bullet from "./Bullet";

let nextId = 1;

const ExperienceForm = ({ index, experienceList, setExperienceList, bulletPoints, setBulletPoints }) => {
  const arrow = "iconamoon:arrow-down-2-light";
  const trashIcon = "ant-design:delete-outlined";
  const experienceData = experienceList[index];

  const handleAddInput = () => {
    setBulletPoints([...bulletPoints, { id: nextId, text: '', versionHistory: [] }]);
    let newExperienceList = [...experienceList];
    newExperienceList[index].bulletPoints = [...newExperienceList[index].bulletPoints, { id: nextId, text: '', versionHistory: [] }];
    setExperienceList(newExperienceList);
    nextId++;
  };
  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...experienceList];
    onChangeValue[index][name] = value;
    setExperienceList(onChangeValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role submitted", roleData);
  };

  return (
    <section className={style.experienceForm}>
      <div className={style.roleTitle}>
        {/* if the state is not blank, show obj.role and @ obj.company, else show Role Name @ Company Name */}
        <h1>
          {experienceData.role !== "" ? experienceData.role : "Role Name"}{" "}
          <span className={style.symbol}>@</span>{" "}
          {experienceData.company !== ""
            ? experienceData.company
            : "Company Name"}
        </h1>
        <div>
          <Icon
            icon={arrow}
            style={{ color: "5B7FFF", width: "2.375rem", height: "2.375rem" }}
            id={style.arrowIcon}
          />
          <Icon
            icon={trashIcon}
            style={{ color: "5B7FFF", width: "1.5625rem", height: "1.5625rem" }}
          />
        </div>
      </div>
      <div className={style.formFields}>
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Role</h2>
            <input
              type="text"
              name="role"
              value={experienceList[index].role}
              onChange={event => handleChange(event, index)}
              placeholder="Enter role here"
            />
          </label>
          <label>
            <h2>Company</h2>
            <input
              type="text"
              name="company"
              value={experienceList[index].company}
              onChange={event => handleChange(event, index)}
              placeholder="Enter company here"
            />
          </label>
          <label>
            <h2>Start Date</h2>
            <input
              type="date"
              name="startDate"
              value={experienceList[index].startDate}
              onChange={event => handleChange(event, index)}
              placeholder="Enter start date here"
            />
          </label>
          <label>
            <h2>End Date</h2>
            <input
              type="date"
              name="endDate"
              value={experienceList[index].endDate}
              onChange={event => handleChange(event, index)}
              placeholder="Enter end date here"
            />
          </label>
          <label id={style.locationLabel}>
            <h2>Location</h2>
            <input
              type="text"
              name="location"
              value={experienceList[index].location}
              onChange={event => handleChange(event, index)}
              placeholder="Enter location here"
            />
          </label>
        </form>
      </div>
      <div className={style.bulletsContainer}>
        <h2>Description</h2>
        <p className={style.instructions}>
          Enter a bullet point in each of the text boxes. Click on the pen icon
          to get an AI generated bullet point based on the input.
        </p>

        {experienceList[index].bulletPoints.map((item, bulletIndex) => (
          <Bullet key={item.id} experienceIndex={index} bulletIndex={bulletIndex} index={index} experienceList={experienceList} setExperienceList={setExperienceList} />
        ))}
        <button onClick={() => handleAddInput()}>Add Bullet</button>
      </div>
    </section>
  );
};

export default ExperienceForm;
