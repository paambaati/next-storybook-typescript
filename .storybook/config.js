import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import globalStyles from '../styles/global';

const req = require.context('../stories', true, /\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

const AppProvider = ({ children }) => {
    return (
        <>
            <style jsx global>
                {globalStyles}
            </style>
            {children}
        </>
    );
};

addDecorator(story => <AppProvider>{story()}</AppProvider>);

configure(loadStories, module);
