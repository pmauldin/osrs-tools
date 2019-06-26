export const LOAD_QUESTS = 'LOAD_QUESTS';
export const TOGGLE_QUEST_CARD = 'TOGGLE_QUEST_CARD';

export function loadQuests() {
    return {
        type: LOAD_QUESTS
    }
}

export function toggleQuestCard(questId) {
    return {
        type: TOGGLE_QUEST_CARD,
        questId
    }
}