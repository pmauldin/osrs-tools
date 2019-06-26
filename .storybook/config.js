import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({
    options: {
        theme: themes.dark
    }
});

configure(loadStories, module);