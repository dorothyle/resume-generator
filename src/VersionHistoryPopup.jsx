import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "./VersionHistoryPopup.module.css";
import VersionHistoryBullet from "./VersionHistoryBullet";

const VersionHistoryPopup = ({ appear, setAppear, experienceList, setExperienceList, experienceIndex, bulletIndex }) => {
    const xIcon = "ph:x-bold";
    const [tags, setTags] = useState(["Shorten", "Expand", "Rephrase", "Impact-Focused", "More Specific", "Simplify", "More Professional"]);
    const [isTagSelected, setIsTagSelected] = useState([false, false, false, false, false, false, false])

    const closePopup = () => {
        setAppear(false);
    }

    const generateBullet = async () => {
        console.log(experienceList[experienceIndex]);
        const currentBullet = experienceList[experienceIndex].bulletPoints[bulletIndex].text;
        const selectedTags = [];
        isTagSelected.map((x, index) => {
            if (x === true) {
                selectedTags.push(tags[index]);
            }
        })

        try {
            // make request to get AI generated bullet point
            const response = await fetch('http://127.0.0.1:8000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "text": currentBullet,
                    "tags": selectedTags
                })
            });
        
            if (!response.ok) {
                console.log("RESPONSE IS NOT OK")
                throw new Error('Failed to fetch data');
            }
        
            // add it to version history
            const newVersion = await response.json();
            const copy = [...experienceList];
            copy[experienceIndex].bulletPoints[bulletIndex].versionHistory = [...copy[experienceIndex].bulletPoints[bulletIndex].versionHistory, newVersion.output];
            setExperienceList(copy);
        } catch (error) {
            console.log('CANNOT FETCH DATA')
            console.error('Error fetching data:', error);
        }
    }

    const changeTagSelection = (index) => {
        const copy = [...isTagSelected];
        copy[index] = !copy[index];
        setIsTagSelected(copy);
    }

    return (
        <div className={`${style.popupAndOverlayContainer} ${ appear ? "" : style.closed}`}>
            <p>{isTagSelected}</p>
            <div className={style.overlay} onClick={closePopup} ></div>
            <div className={style.versionHistoryPopupContainer}>
                <Icon
                    className={style.closeIcon}
                    icon={xIcon}
                    style={{ color: '#414141', width: '1.3rem', height: '1.3rem' }}
                    onClick={closePopup}
                ></Icon>
                <div className={style.versionContainer}>
                    <h1>Version History</h1>
                    <ul>
                        {experienceList[experienceIndex].bulletPoints[bulletIndex].versionHistory.map((version, index) => {
                            return (
                                <VersionHistoryBullet key={index} text={version}/>
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
                                    <label>
                                        <input type="checkbox" onClick={() => changeTagSelection(index)} />
                                        <p>{tag}</p>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                    <button onClick={generateBullet}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default VersionHistoryPopup;
