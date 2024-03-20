import React from "react";
import { Icon } from "@iconify/react";
import style from "./Popup.module.css";

const Popup = ({ experienceList, setExperienceList, experienceIndex, bulletIndex, appear, setAppear, title, message, buttonText }) => {
    // Closes popup
    const closePopup = () => {
        setAppear(false);
    }

    return (
        <div className={`${style.popupAndOverlayContainer} ${ appear ? "" : style.closed}`}>
            <div className={style.overlay} onClick={closePopup} ></div>
            <div className={style.popupContainer}>
                <h1>{title}</h1>
                <p>{message}</p>
                <div className={style.popupButtonsContainer}>
                    <button>Cancel</button>
                    <button>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
