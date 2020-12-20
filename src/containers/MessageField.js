import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import connect from 'react-redux/es/connect/connect';
import {TextField, FloatingActionButton} from "material-ui";
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "../components/Message/Message";
import '../styles/styles.css';


class MessageField extends React.Component{
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
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




    handleSendMessage(message, sender){

        if(this.state.input.length > 0 || sender === "Robot"){
            this.props.sendMessage(message, sender);
        }
        if(sender === "User"){
            this.setState({input: ''});
        }
    };

    render() {
        const {chatId, messages, chats } = this.props;

        
        const messageElements = chats[chatId].messageList.map((messageId) => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));



        return [

                <div className='message-field' key='messageElements'>
                    {messageElements}
                </div>,
                <div key='textInput' style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                        ref={this.textInput}
                    />
                    <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>


        ];
    }

}

const mapStateToProps = ({chatReducer}) =>({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch =>(bindActionCreators({}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);