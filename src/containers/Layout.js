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
        messages: PropTypes.object.isRequired,
    };

    static defaultProps = {
      chatId: 1,
    };





    handleSendMessage = (messageId, message, sender, chatId) => {

        console.log(Object.keys(this.props.messages).length);
        console.log(messageId);
        console.log(messageId);

        this.props.sendMessage(messageId, message, sender, chatId);
    };




    render() {
        return (
            <div className='main-layout'>
                <Header chatId={this.props.chatId}/>
                <div className='content-wrapper'>
                    <MessageField
                        chatId={this.props.chatId}
                        messages={this.props.messages}
                        sendMessage={this.handleSendMessage}
                    />
                    <ChatList/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({messageReducer}) =>({
    messages: messageReducer.messages,
});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);