import React from 'react';
import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";
import '../styles/styles.css';

export default class Layout extends React.Component{
    render() {
        return (
            <div className='main-layout'>
                <Header/>
                <div className='content-wrapper'>
                    <MessageField />
                    <ChatList/>
                </div>
            </div>
        );
    }
}