import React, { Component } from 'react';
import { IoIosCheckmarkCircleOutline, IoMdSend } from 'react-icons/io';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollToBottom from 'react-scroll-to-bottom';
import api from '../../services/api';

import Message from '../../components/Message';

import avatar from '../../avatar-default.png';
import { Container } from './styles';
import './animation.css';

export default class Chat extends Component {
    state = {
        loading: false,
        context: {},
        message: '',
        messages: [],
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.loading)
            return false;

        const message = { text: event.target.message.value, sender: true };
        this.setState({ messages: [...this.state.messages, message] });
        event.target.message.value = '';
        this.sendAndGetWatsonMessage(message.text);
    };

    sendAndGetWatsonMessage = async text => {
        try {
            this.setState({ loading: true });
            const response = await api.post('/conversation', { text, context: this.state.context });
            const message = { 
                text: response.data.output.text[0], 
                sender: false 
            };
            this.setState({ 
                messages: [...this.state.messages, message],
                context: response.data.context,
                loading: false
            });
        } catch (err) {
            console.log(err);
            alert('Ocorreu um erro ao enviar a mensagem.');
            this.setState({ loading: false });
        }
    };

    componentDidMount() {
        this.sendAndGetWatsonMessage('');
    };

    render() {
        return (
            <Container>
                <div className="chat-wrapper">
                    <div className="chat-header">
                        <h1>Dr. Panglo <IoIosCheckmarkCircleOutline style={{ fontSize: '1.5rem', margin: '5px 0 0 5px' }} title="Verificado" /></h1>
                        <img src={avatar} alt="Avatar Dr. Panglo" />
                    </div>
                    <ScrollToBottom className="chat-messages">
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={350}
                            transitionLeaveTimeout={250}
                        >
                        {this.state.messages.map((message, index) => (
                            <Message key={index} msg={message} />
                        ))}
                        </ReactCSSTransitionGroup>
                    </ScrollToBottom>
                    <form className="chat-options" onSubmit={this.handleSubmit}>
                        <input name="message" placeholder="Envie uma mensagem..." autocomplete="off" required />
                        <button type="submit"><IoMdSend /></button>
                    </form>
                </div>
            </Container>
        );
    }
}