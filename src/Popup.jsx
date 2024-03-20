import React from "react";
import { Icon } from "@iconify/react";
import style from "./Popup.module.css";

const Popup = ({ experienceList, setExperienceList, experienceIndex, param, appear, setAppear, title, message, buttonText, buttonFunc }) => {
    // Closes popup
    const closePopup = () => {
        setAppear(false);
    }
    
    const triggerButtonFunction = () => {
        buttonFunc(param);
    }

    return (
        <div className={`${style.popupAndOverlayContainer} ${ appear ? "" : style.closed}`}>
            <div className={style.overlay} onClick={closePopup} ></div>
            <div className={style.popupContainer}>
                <h1>{title}</h1>
                <p>{message}</p>
                <div className={style.popupButtonsContainer}>
                    <button onClick={closePopup}>Cancel</button>
                    <button onClick={triggerButtonFunction}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
