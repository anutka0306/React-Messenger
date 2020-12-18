import React from 'react';
import PropTypes from 'prop-types';
import {TextField, FloatingActionButton} from "material-ui";
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "./Message";


export default class MessageField extends React.Component{
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    state = {
       chats:{
           1: {title: 'Чат 1', messageList: [1]},
           2: {title: 'Чат 2', messageList: [2]},
           3: {title: 'Чат 3', messageList: [3]},
           4: {title: 'Чат 4', messageList: [4]},

       },
       messages: {
           1: { text: "Привет!", sender: "Robot" },
           2: { text: "Здравствуйте!", sender: "Robot" },
           3: {text: "Hola", sender: "Robot"},
           4: {text: "Hi", sender: "Robot"},

       },
        input: '',
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }


    componentDidMount() {
        this.textInput.current.focus();
    }

    handleClick = (message) =>{
        this.handleSendMessage(this.state.input, 'User');
    };

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    };

    handleKeyUp = (event, message) =>{
        if(event.keyCode === 13){
            this.handleSendMessage(this.state.input, 'User');
        }
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        const { messages } = this.state;
        if(Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length -1].sender === "User"){
            setTimeout(() =>
            this.handleSendMessage("Message", "Robot"), 1000);
        }
    }

    handleSendMessage(message, sender){
        const {messages, chats, input} = this.state;
        const { chatId } = this.props;
        if(input.length > 0 || sender === "Robot"){
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                [messageId]: {text: message, sender:sender}},
                chats: {...chats,
                [chatId]: {...chats[chatId],
                messageList: [...chats[chatId]['messageList'], messageId]}},
            })
        }
        if(sender === "User"){
            this.setState({input: ''});
        }
    };

    render() {
        const { messages, chats } = this.state;
        let { chatId } = this.props;
        if(chats[chatId] === undefined){
            chatId = 1;

        }
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));



        return [

                <div className='message-field'>
                    {messageElements}
                </div>,
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


        ];
    }

}