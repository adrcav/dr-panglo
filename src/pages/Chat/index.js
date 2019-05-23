import React, { Component } from 'react';
import { IoIosCheckmarkCircleOutline, IoMdSend } from 'react-icons/io';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Message from '../../components/Message';

import avatar from '../../avatar-default.png';
import { Container } from './styles';
import './animation.css';

export default class Chat extends Component {
    state = {
        message: '',
        messages: [
            { text: 'Olá! Eu sou o Dr. Panglo! 😀', sender: false },
        ],
    };

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    };

    handleSubmit = event => {
        event.preventDefault();
        const message = { text: event.target.message.value, sender: true };
        this.setState({ messages: [...this.state.messages, message] });
        event.target.message.value = '';
        this.scrollToBottom();
    };

    componentDidMount() {
        this.scrollToBottom();
    };

    render() {
        return (
            <Container>
                <div className="chat-wrapper">
                    <div className="chat-header">
                        <h1>Dr. Panglo <IoIosCheckmarkCircleOutline style={{ fontSize: '1.5rem', margin: '5px 0 0 5px' }} title="Verificado" /></h1>
                        <img src={avatar} alt="Avatar Dr. Panglo" />
                    </div>
                    <div className="chat-messages">
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={350}
                            transitionLeaveTimeout={250}
                        >
                        {this.state.messages.map(message => (
                            <Message msg={message} />
                        ))}
                        </ReactCSSTransitionGroup>
                        <div 
                            style={{ marginTop: '10px', width: '50px', height: '3px', backgroundColor: 'green' }}
                            ref={(el) => { this.messagesEnd = el; }}
                        ></div>
                    </div>
                    <form className="chat-options" onSubmit={this.handleSubmit}>
                        <input name="message" placeholder="Envie uma mensagem..." required />
                        <button type="submit"><IoMdSend /></button>
                    </form>
                </div>
            </Container>
        );
    }
}