import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "./ExperienceForm.module.css";
import Bullet from "./Bullet";

let nextId = 1;

const ExperienceForm = ({experienceData, setExperienceData}) => {
  const arrow = "iconamoon:arrow-down-2-light";
  const trashIcon = "ant-design:delete-outlined";
  // list of bullet points to pass into Bullet component
  const [bulletList, setBulletList] = useState([
    // {
    //   id: 1,
    //   currentBullet: "my first bullet point",
    //   versionHistory: [],
    // },
  ]);
  // list of Bullet components
  const [bulletInputFields, setBulletInputFields] = useState([]);

  const onAddBulletClick = (event) => {
    setBulletList([
      ...bulletList,
      {id: nextId, currentBullet: "bullet number " + nextId, versionHistory: [""]}
    ]);
    setBulletInputFields(
      bulletInputFields.concat(
        <Bullet
          key={nextId}
          id={nextId}
          bulletList={bulletList}
          setBulletList={setBulletList}
        />
      )
    );
    nextId++;
  };
  const handleChange = (e) => {
    setRoleData({
      ...roleData,
      [e.target.name]: e.target.value,
    });
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
              value={experienceData.role}
              onChange={(e) =>
                setExperienceData({
                  ...experienceData,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter role here"
            />
          </label>
          <label>
            <h2>Company</h2>
            <input
              type="text"
              name="company"
              value={experienceData.company}
              onChange={(e) =>
                setExperienceData({
                  ...experienceData,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter company here"
            />
          </label>
          <label>
            <h2>Start Date</h2>
            <input
              type="date"
              name="startDate"
              value={experienceData.startDate}
              onChange={(e) =>
                setExperienceData({
                  ...experienceData,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter start date here"
            />
          </label>
          <label>
            <h2>End Date</h2>
            <input
              type="date"
              name="endDate"
              value={experienceData.endDate}
              onChange={(e) =>
                setExperienceData({
                  ...experienceData,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter end date here"
            />
          </label>
          <label id={style.locationLabel}>
            <h2>Location</h2>
            <input
              type="text"
              name="location"
              value={experienceData.location}
              onChange={(e) =>
                setExperienceData({
                  ...experienceData,
                  [e.target.name]: e.target.value,
                })
              }
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
        {bulletInputFields}
        {/* Prints what is in bulletList */}
        {bulletList.map(bulletElem => (
          <li key={bulletElem.id}> {bulletElem.currentBullet} </li>
        ))}
        <button onClick={onAddBulletClick}>Add Bullet</button>
      </div>
    </section>
  );
};

export default ExperienceForm;
