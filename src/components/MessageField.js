import React from 'react';
import Message from "./Message";

export default class MessageField extends React.Component{

    state = {
      messages: ["Hello", "How are you?"],
        answers : ["HI! I am Robot", "I'll be back", "How was your day?", "Do you like ice-cream?","Where are you from?"],
    };

    handleClick = () =>{
        this.setState({messages: [...this.state.messages, "I am Good"]});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.messages.length % 2 === 1){
            let rand = Math.floor(Math.random() * this.state.answers.length);
            setTimeout(() =>
                this.setState({messages: [...this.state.messages, this.state.answers[rand]]}),
                    1000
            );
        }
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message text={text} key={index}/>
        ));

        return (
            <div>
                {messageElements}
                <button onClick={this.handleClick}>Send Answer</button>
            </div>);
    }

}