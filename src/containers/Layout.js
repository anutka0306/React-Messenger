import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";
import { sendMessage } from "../actions/messageActions";
import '../styles/styles.css';
import {bindActionCreators} from "redux";
import connect from 'react-redux/es/connect/connect';

class Layout extends React.Component{
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage:PropTypes.func.isRequired,
    };

    static defaultProps = {
      chatId: 1,
    };

    state = {
        messages: {
            1: { text: "Привет!", sender: "Robot" },
            2: { text: "Здравствуйте!", sender: "Robot" },
            3: {text: "Hola", sender: "Robot"},
            4: {text: "Hi", sender: "Robot"},

        },
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'User') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'Robot'), 1000);
        }
    }

    sendMessage = (message, sender) => {
        const { messages } = this.state;
        const { chatId } = this.props;

        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},

        });
        this.props.sendMessage(messageId, message, sender, chatId);
    };




    render() {
        return (
            <div className='main-layout'>
                <Header chatId={this.props.chatId}/>
                <div className='content-wrapper'>
                    <MessageField
                        chatId={this.props.chatId}
                        messages={this.state.messages}
                        sendMessage={this.sendMessage}
                    />
                    <ChatList/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);