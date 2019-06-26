import {combineReducers} from 'redux';
import {QUEST_STATUS} from "../components/QuestsPage/QuestList/Quest/constants";

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions'
import {TOGGLE_QUEST_CARD} from "../actions/quests";

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state
    }
}

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state
    }
}

const startingQuests = {
    "Demon Slayer": {
        "name": "Demon Slayer",
        "requirements": [
            "Silverlight"
        ]
    },
    "Prince Ali Rescue": {
        "name": "Prince Ali Rescue",
        "requirements": [
            "Pink Skirt"
        ]
    },
    "Recipe for Disaster": {
        "name": "Recipe for Disaster",
        "requirements": [
            "A fuck ton"
        ]
    },
    "Black Knight's Fortress": {
        "name": "Black Knight's Fortress",
        "requirements": [
            "None"
        ]
    },
    "Underground Pass": {
        "name": "Underground Pass",
        "requirements": [
            "Bow, 40 ranged"
        ]
    }
};

const startingCards = {
    "Demon Slayer": {
        status: QUEST_STATUS.DONE,
        reqsMet: false,
        collapsed: true
    },
    "Underground Pass": {
        status: QUEST_STATUS.NOT_STARTED,
        reqsMet: false,
        collapsed: true
    },
    "Black Knight's Fortress": {
        status: QUEST_STATUS.NOT_STARTED,
        reqsMet: true,
        collapsed: true
    },
    "Recipe for Disaster": {
        status: QUEST_STATUS.IN_PROGRESS,
        reqsMet: false,
        collapsed: true
    },
    "Prince Ali Rescue": {
        status: QUEST_STATUS.DONE,
        reqsMet: true,
        collapsed: true
    }
};

function quests(state = startingQuests, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function pageOptions(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function cards(state = startingCards, action) {
    switch (action.type) {
        case TOGGLE_QUEST_CARD:
            const {questId} = action;
            return {
                ...state,
                [questId]: {
                    ...state[questId],
                    collapsed: !state[questId].collapsed
                }
            };
        default:
            return state;
    }
}

export default combineReducers({
    quests,
    pageOptions,
    cards
});