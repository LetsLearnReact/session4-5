import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./HeaderComponent";

/*

const Re = React.createElement('div', { id: 'title' }, 'Namaste React')
const Re1 = React.createElement('div', { id: 'hello' }, 'Namaste JS')
const Re2 = React.createElement('div', { id: 'hi' }, 'Namaste Node')
const Re3 = React.createElement('div', { id: 'bye' }, [
    Re, Re1, Re2
])
const Re4 = ReactDOM.createRoot(document.getElementById('root'))
Re4.render(Re3)



const heading1 = React.createElement(
    "h1",
    {id:"h1"},
    'This is Heading1'
)

const heading2 = React.createElement(
    "h2",
    {id:"h2"},
    'This is Heading2'
)

const heading3 = React.createElement(
    "h3",
    {id:"h3"},
    'This is Heading3'
)

const container = React.createElement(
    "div",
    {className:"title"},
    [
        React.createElement(
            "h1",
            {id:"h1"},
            'This is Heading1'
        ),React.createElement(
            "h2",
            {id:"h2"},
            'This is Heading2'
        ),React.createElement(
            "h3",
            {id:"h3"},
            'This is Heading3'
        )]
)

const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(container);




const container = (
    <div className='title'>
        <h1 id = 'heading1'> Heading1</h1>
        <h2 id = 'heading2'> Heading2</h2>
        <h3 id = 'heading3'> Heading3</h3>
    </div>
)



const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(container);

const ContainerComponent = () => {
    return (
        
        <div className='title'>
            {container}
            <h1 id = 'heading1'> Heading1</h1>
            <h2 id = 'heading2'> Heading2</h2>
            <h3 id = 'heading3'> Heading3</h3>

        </div>
        

    )
}
*/


const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(<HeaderComponent />);






