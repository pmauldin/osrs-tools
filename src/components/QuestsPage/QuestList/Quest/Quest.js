import React from 'react';
import PropTypes from "prop-types";
import './quest.css';
import {QUEST_STATUS} from "./constants";

const getQuestStatusClass = (status, reqsMet) => {
    switch (status) {
        case QUEST_STATUS.DONE:
            return 'quest-done';
        case QUEST_STATUS.IN_PROGRESS:
            return 'quest-in-progress';
        default:
            if (reqsMet) {
                return 'quest-can-start';
            }
            return 'quest-cannot-start';
    }
};

const Quest = ({quest, status, reqsMet, collapsed, toggleCard}) => {
    const {name, requirements} = quest;

    return (
        <div className={'quest'}>
            <div className={'quest-header'} onClick={() => toggleCard(name)}>
                <div className={'quest-checkbox'}>
                    <input type={'checkbox'} checked={status === QUEST_STATUS.DONE} />
                </div>
                <div className={`quest-name ${getQuestStatusClass(status, reqsMet)}`}>
                    {name}
                </div>
                <div className={`chevron ${collapsed ? 'chevron-right' : 'chevron-down'}`} />
            </div>
            <div className={collapsed ? 'quest-collapsed' : 'quest-content'}>
                <div className={'quest-requirements'}>
                    Requirements: {requirements}
                </div>
            </div>
        </div>
    )
};

Quest.propTypes = {
    quest: PropTypes.shape({
        name: PropTypes.string.isRequired,
        requirements: PropTypes.string.isRequired,
        wikiLink: PropTypes.string
    }).isRequired,
    status: PropTypes.oneOf(Object.keys(QUEST_STATUS)).isRequired,
    reqsMet: PropTypes.bool.isRequired,
    collapsed: PropTypes.bool.isRequired,
    toggleCard: PropTypes.func.isRequired
};

export default Quest;