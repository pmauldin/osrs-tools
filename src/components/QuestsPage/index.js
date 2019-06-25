import React from 'react';

import './quests.css';
import QuestList from "./QuestList";

const quests = [
    {
        name: "Demon Slayer",
        status: "Done",
        reqsMet: false
    },
    {
        name: "Prince Ali Rescue",
        status: "Done",
        reqsMet: true
    },
    {
        name: "Recipe for Disaster",
        status: "In Progress",
        reqsMet: true
    },
    {
        name: "Underground Pass",
        status: "Not Started",
        reqsMet: false
    }
];

const QuestsPage = () => (
    <div className={`page-content quest-page`}>
        <div className={`quest-page-title`}>Quests</div>
        <div className={`quest-filters`}>Filters bruh</div>
        <div className={`quest-list-container`}>
            <QuestList quests={quests} />
        </div>
    </div>
);

export default QuestsPage;