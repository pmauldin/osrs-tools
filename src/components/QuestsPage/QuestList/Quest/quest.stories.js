import React from 'react';
import { storiesOf } from '@storybook/react';
import Quest from './Quest';
import {QUEST_STATUS} from "./constants";

storiesOf('Quest', module)
    .add('Collapsed, Done, Reqs Met', () => (
        <Quest
            quest={{
                name: 'Recipe for Disaster',
                requirements: ''
            }}
            status={QUEST_STATUS.DONE}
            reqsMet={true}
            collapsed={true}
            toggleCard={() => {}}
        />
    ))
    .add('Collapsed, In Progress, Reqs Met', () => (
        <Quest
            quest={{
                name: 'Recipe for Disaster',
                requirements: ''
            }}
            status={QUEST_STATUS.IN_PROGRESS}
            reqsMet={true}
            collapsed={true}
            toggleCard={() => {}}
        />
    ))
    .add('Collapsed, Not Started, Reqs Met', () => (
        <Quest
            quest={{
                name: 'Recipe for Disaster',
                requirements: ''
            }}
            status={QUEST_STATUS.NOT_STARTED}
            reqsMet={true}
            collapsed={true}
            toggleCard={() => {}}
        />
    ))
    .add('Collapsed, Not Started, Reqs Not Met', () => (
        <Quest
            quest={{
                name: 'Recipe for Disaster',
                requirements: ''
            }}
            status={QUEST_STATUS.NOT_STARTED}
            reqsMet={false}
            collapsed={true}
            toggleCard={() => {}}
        />
    ))
    .add('Expanded, Not Started, Reqs Met', () => (
        <Quest
            quest={{
                name: 'Recipe for Disaster',
                requirements: 'Hello World'
            }}
            status={QUEST_STATUS.NOT_STARTED}
            reqsMet={true}
            collapsed={false}
            toggleCard={() => {}}
        />
    ));