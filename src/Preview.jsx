import React, { useState } from "react";
import style from "./Preview.module.css";

const Preview = () => {
  return (
    <div className={style.preview}>
      <h1>Experience</h1>
      <p>
        <span>Role</span>
        <span>Date</span>
      </p>
      <p>
        <span>Company</span>
        <span>Location</span>
      </p>
      <ul>
        <li>Your first bullet point.</li>
      </ul>
    </div>
  );
};

export default Preview;
