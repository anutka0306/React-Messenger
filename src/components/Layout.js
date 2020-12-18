import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";
import '../styles/styles.css';

export default class Layout extends React.Component{
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
      chatId: 1,
    };

    render() {
        return (
            <div className='main-layout'>
                <Header chatId={this.props.chatId}/>
                <div className='content-wrapper'>
                    <MessageField chatId={this.props.chatId} />
                    <ChatList/>
                </div>
            </div>
        );
    }
}