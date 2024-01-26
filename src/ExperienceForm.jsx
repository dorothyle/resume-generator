import React, { useState } from 'react';
import style from './ExperienceForm.module.css';

const ExperienceForm = () => {
    const [roleData, setRoleData] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
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
        console.log('Role submitted', roleData)
    }

  return (
    <div className={style.formContainer}>
        <div className={style.roleTitleContainer}>
            <h2>Role 1 @ Company 1</h2>
            <form onSubmit={handleSubmit}>
                <label className={style.formField}>
                    <p>Role</p>
                    <input
                        className={style.formInput}
                        type="text"
                        name="role"
                        value={roleData.role}
                        onChange={handleChange}
                        placeholder="Enter role here"
                    />
                </label>
                
                <label className={style.formField}>
                    <p>Company</p>
                    <input
                        className={style.formInput}
                        type="text"
                        name="company"
                        value={roleData.company}
                        onChange={handleChange}
                        placeholder="Enter company here"
                    />
                </label>

                <label className={style.formField}>
                    <p>Start Date</p>
                    <input
                        className={style.formInput}
                        type="date"
                        name="startDate"
                        value={roleData.startDate}
                        onChange={handleChange}
                        placeholder="Enter start date here"
                    />
                </label>

                <label className={style.formField}>
                    <p>End Date</p>
                    <input
                        className={style.formInput}
                        type="date"
                        name="endDate"
                        value={roleData.endDate}
                        onChange={handleChange}
                        placeholder="Enter end date here"
                    />
                </label>

                <label className={style.formField}>
                    <p>Location</p>
                    <input
                        className={style.formInput}
                        type="location"
                        name="location"
                        value={roleData.location}
                        onChange={handleChange}
                        placeholder="Enter location here"
                    />
                </label>

                <label className={style.formField}>
                    <p>Description</p>
                    <p>Enter a bullet point in each of the text boxes. Click on the pen icon to get an AI generated bullet point based on the input.</p>
                    <input
                        className={style.formInput}
                        type="text"
                        name="description"
                        value={roleData.description}
                        onChange={handleChange}
                        placeholder="Enter description here"
                    />
                </label>

            </form>
        </div>
    </div>
  )
}

export default ExperienceForm