import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { style: { fontSize: '50px', color: 'red' } }, 'Namaste React');
const heading2 = React.createElement('h2', { style: {} }, 'Ram-Ram React');

const container = React.createElement('div', {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
