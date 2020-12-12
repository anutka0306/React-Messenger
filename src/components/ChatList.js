import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class ChatList extends React.Component{
    render() {
        return (
            <div className='chat-list'>
                <List>
                    <ListItem primaryText="Chat 1" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Chat 2" leftIcon={<ActionGrade />} />
                    <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
                    <ListItem primaryText="Chat 4" leftIcon={<ContentDrafts />} />
                </List>
            </div>
        );
    }
}