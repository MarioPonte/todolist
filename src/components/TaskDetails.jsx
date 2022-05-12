import React from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Back</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium at laboriosam, possimus repellendus sunt.</p>
            </div>
        </>
    )
}

export default TaskDetails;