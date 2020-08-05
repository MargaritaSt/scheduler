import React from "react";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
    const basicItem = "interviewers__item";
    const basicImage = "interviewers__item-image";
    const selectedItem = "interviewers__item--selected"
    const selectedImage = "interviewers__item--selected-image"
    let classItem = basicItem;
    let classImage = basicImage;
    let username = props.name;

    if (props.selected) {
        classItem += ` ${selectedItem}`
        classImage += ` ${selectedImage}`
    } else {
        username = "";
    }

        return (
            <li onClick={props.setInterviewer} className={classItem}>
                <img
                    className={classImage}
                    src={props.avatar}
                    alt={props.name}
                />
                {username}
            </li>
        )
}    

/*
id: 1,
name: "Sylvia Palmer",
avatar: "https://i.imgur.com/LpaY82x.png"
*/