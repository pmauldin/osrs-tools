import React from 'react';
import Quest from "./Quest";

const QuestList = ({ quests }) => (
    <div className={`quest-list`}>
        {quests.map(quest => (
            <Quest key={quest.name} {...quest} />
        ))}
    </div>
);

export default QuestList;