import React, { useState } from "react";
import style from "./ExperienceForm.module.css";
import Bullet from "./Bullet";

const ExperienceForm = () => {
  const [roleData, setRoleData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    bulletPoints: [],
  });

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
        <h1>Role 1 @ Company 1</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Role</h2>
            <input
              type="text"
              name="role"
              value={roleData.role}
              onChange={handleChange}
              placeholder="Enter role here"
            />
          </label>
          <label>
            <h2>Company</h2>
            <input
              type="text"
              name="company"
              value={roleData.company}
              onChange={handleChange}
              placeholder="Enter company here"
            />
          </label>
          <label>
            <h2>Start Date</h2>
            <input
              type="date"
              name="startDate"
              value={roleData.startDate}
              onChange={handleChange}
              placeholder="Enter start date here"
            />
          </label>
          <label>
            <h2>End Date</h2>
            <input
              type="date"
              name="endDate"
              value={roleData.endDate}
              onChange={handleChange}
              placeholder="Enter end date here"
            />
          </label>
          <label>
            <h2>Location</h2>
            <input
              type="text"
              name="location"
              value={roleData.location}
              onChange={handleChange}
              placeholder="Enter location here"
            />
          </label>
          <label>
            <input
              type="text"
              name="description"
              value={roleData.description}
              onChange={handleChange}
              placeholder="Enter description here"
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
        <Bullet />
        <button>Add Bullet</button>
      </div>
    </section>
  );
};

export default ExperienceForm;
