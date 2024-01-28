import React, { useState } from "react";
import style from "./ExperienceForm.module.css";
import Bullet from "./Bullet";

const ExperienceForm = () => {
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletPoints: ["this is a bullet point"],
  });
  const [bulletPoints, setBulletPoints] = useState([
    {
      currentBullet: "my first bullet point",
      versionHistory: [],
    },
  ]);
  const [bulletInputs, setBulletInputs] = useState([]);

  const onAddBulletClick = (event) => {
    setBulletInputs(
      bulletInputs.concat(
        <Bullet
          key={bulletInputs.length + 1}
          bulletList={bulletPoints}
          setBulletList={setBulletPoints}
        />
      )
    );
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
      <div>
        {/* if the state is not blank, show obj.role and @ obj.company, else show Role Name @ Company Name */}
        <h1>
          {experienceData.role !== "" ? experienceData.role : "Role Name"} @{" "}
          {experienceData.company !== ""
            ? experienceData.company
            : "Company Name"}
        </h1>
      </div>
      <div>
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
          <label>
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
      <div>
        <h2>Description</h2>
        <p className={style.instructions}>
          Enter a bullet point in each of the text boxes. Click on the pen icon
          to get an AI generated bullet point based on the input.
        </p>
        <Bullet
          key={0}
          bulletList={bulletPoints}
          setBulletList={setBulletPoints}
        />
        {bulletInputs}
        <button onClick={onAddBulletClick}>Add Bullet</button>
      </div>
    </section>
  );
};

export default ExperienceForm;
