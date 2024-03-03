import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "./VersionHistoryPopup.module.css";

const VersionHistoryPopup = ({ appear, setAppear, experienceList, experienceIndex, bulletIndex }) => {
    const xIcon = "ph:x-bold";
    const [tags, setTags] = useState(["Shorten", "Expand", "Rephrase", "Impact-Focused", "More Specific", "Simplify", "More Professional"]);

    const closePopup = () => {
        setAppear(false);
    }

    return (
        <div className={`${style.popupAndOverlayContainer} ${ appear ? "" : style.closed}`}>
            <div className={style.overlay} onClick={closePopup} ></div>
            <div className={style.versionHistoryPopupContainer}>
                <Icon
                    className={style.closeIcon}
                    icon={xIcon}
                    style={{ color: '#414141', width: '1.3rem', height: '1.3rem' }}
                    onClick={closePopup}
                ></Icon>
                <div>
                    <h1>Version History</h1>
                    <ul>
                        {experienceList[experienceIndex].bulletPoints[bulletIndex].versionHistory.map((version, index) => {
                            return (
                                <li key={index}>
                                    <p>{version}</p>
                                </li>
                            )
                        })}
                    </ul>
                    {/* Past versions go here */}
                    {/* <VersionHistoryBullet isSelected={true} />
                    <VersionHistoryBullet isSelected={false} /> */}
                </div>

                <div className={style.tagsContainer}>
                    <h1>Tags</h1>
                    <p>Select tag(s) to customize the AI-generated output. Click ‘Generate’ to generate another bullet point.</p>
                    <ul>
                        {tags.map((tag, index) => {
                            return (
                                <li key={index}>
                                    <input type="checkbox" />
                                    <label>{tag}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default VersionHistoryPopup;
