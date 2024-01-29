import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ExperienceForm from "./ExperienceForm";
import Bullet from "./Bullet";
import Preview from "./Preview";
import './App.css'

function App() {
  return (
    <>
      <div className='app-container'>
        <Preview />
        <ExperienceForm />
      </div>
    </>
  );
}

export default App;
