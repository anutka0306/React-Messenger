import React from 'react';
import {TextField, FloatingActionButton} from "material-ui";
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "./Message";


export default class MessageField extends React.Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    state = {
        messages:[{text: "HI! I am Robot", sender:"Robot"}],
        answers : [{text: "HI! I am Robot", sender:"Robot"}, {text: "I'll be back", sender:"Robot"},{text: "How was your day?", sender:"Robot"}, {text: "Do you like ice-cream?", sender:"Robot"}, {text: "Where are you from?", sender:"Robot"} ],
        input:'',
    };

    componentDidMount() {
        this.textInput.current.focus();
    }

    handleClick = (message) =>{
        this.sendMessage(message);
    };

    handleChange = (event) =>{
        this.setState({input: event.target.value});
    };

    handleKeyUp = (event, message) =>{
        if(event.keyCode === 13){
            this.sendMessage(message);
        }
    };

    sendMessage = (message) =>{
        this.setState(
            {
                messages:[...this.state.messages, {text: message, sender: "User"}],
                input:'',
            }
            );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.messages[this.state.messages.length - 1].sender === "User"){
            let rand = Math.floor(Math.random() * this.state.answers.length);
            setTimeout(() =>
                this.setState({messages: [...this.state.messages, this.state.answers[rand]]}),
                    1000
            );
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message text={message.text} author={message.sender} key={index}/>
        ));

        return (
            <div className='layout'>
                <div className='message-field'>
                    {messageElements}

                </div>
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        ref={this.textInput}
                    />
                    <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

            </div>);
    }

}