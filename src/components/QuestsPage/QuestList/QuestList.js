import React from 'react';
import PropTypes from "prop-types";
import Quest from "./Quest";
import {QUEST_STATUS} from "./Quest/constants";

const QuestList = ({ quests, pageOptions, cards }) => {
    // todo filter quests

    return (
        <div className={`quest-list`}>
            {Object.keys(cards).map(questName => (
                <Quest key={questName} questId={questName} {...cards[questName]} />
            ))}
        </div>
    )
};

QuestList.propTypes = {
    quests: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        requirements: PropTypes.array.isRequired,
        wikiLink: PropTypes.string
    })).isRequired,
    pageOptions: PropTypes.shape({
        filters: PropTypes.array,
        sortBy: PropTypes.string,
        searchTerm: PropTypes.string
    }),
    cards: PropTypes.objectOf(PropTypes.shape({
        status: PropTypes.oneOf(Object.keys(QUEST_STATUS)).isRequired,
        reqsMet: PropTypes.bool.isRequired,
        collapsed: PropTypes.bool.isRequired
    })).isRequired
};

export default QuestList;