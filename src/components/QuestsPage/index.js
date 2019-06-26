import React from 'react';

import './quests-page.css';
import QuestList from "./QuestList";

const QuestsPage = () => (
    <div className={`page-content quest-page`}>
        <div className={`quest-page-title`}>Quests</div>
        <div className={`quest-filters`}>Filters bruh</div>
        <div className={`quest-list-container`}>
            <QuestList />
        </div>
    </div>
);

export default QuestsPage;