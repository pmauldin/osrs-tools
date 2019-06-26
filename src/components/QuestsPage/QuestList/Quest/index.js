import {connect} from 'react-redux';

import Quest from './Quest';
import {toggleQuestCard} from "../../../../actions/quests";

export default connect((state, { questId }) => {
    return {
        quest: state.quests.quests[questId],
        ...state.quests.cards[questId]
    }
}, (dispatch) => {
    return {
        toggleCard: (id) => dispatch(toggleQuestCard(id))
    }
})(Quest);