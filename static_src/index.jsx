
import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Hola?', 'Como estas?'];

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageButton = (props) => {
    return <button onClick={sendMessage}>Muy Bien</button>;
};
    const MessageField = (props) =>{
        return props.messages.map(message => <MessageComponent text={ message } />);
    };

function sendMessage(){
    messages.push('Muy bien!');
    ReactDOM.render(
        <div>
            <MessageField messages={ messages } />
            <MessageButton />
        </div>,
        document.getElementById('root'),
    );
}

ReactDOM.render(
    <div>
        <MessageField messages={ messages } />
        <MessageButton />
    </div>,
    document.getElementById('root'),
);