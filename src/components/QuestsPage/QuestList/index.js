import {connect} from 'react-redux';

import QuestList from './QuestList';

export default connect((state) => {
    return {
        quests: state.quests.quests,
        pageOptions: state.quests.pageOptions,
        cards: state.quests.cards
    }
})(QuestList);