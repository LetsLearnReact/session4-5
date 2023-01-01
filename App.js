import React from 'react';
import  ReactDOM from 'react-dom/client';
const Re = React.createElement('div', { id: 'title' }, 'Namaste React')
const Re1 = React.createElement('div', { id: 'hello' }, 'Namaste JS')
const Re2 = React.createElement('div', { id: 'hi' }, 'Namaste Node')
const Re3 = React.createElement('div', { id: 'bye' }, [
    Re, Re1, Re2
])
const Re4 = ReactDOM.createRoot(document.getElementById('root'))
Re4.render(Re3)




