import React from "react";
import { Icon } from "@iconify/react";
import style from "./Popup.module.css";

const Popup = ({ appear, setAppear, title, message, buttonText, buttonFunc, param}) => {
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
                    <button className={style.cancelButton} onClick={closePopup}>Cancel</button>
                    <button className={style.confirmButton} onClick={triggerButtonFunction}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
