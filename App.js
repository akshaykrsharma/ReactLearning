import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = <h1>Namaste React</h1>;
const heading2 = React.createElement('h2', { style: {} }, 'Ram-Ram React');

const container = React.createElement('div', {}, [heading, heading2]);
console.log('I am here to be removed by parcel');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
