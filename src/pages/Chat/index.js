import React, { Component } from 'react';
import { IoIosCheckmarkCircleOutline, IoMdSend } from 'react-icons/io';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollToBottom from 'react-scroll-to-bottom';
import api from '../../services/api';
import classNames from 'classnames';

import Message from '../../components/Message';

import avatar from '../../avatar-default.png';
import { Container, Loading } from './styles';
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
            // Envia mensagem ao IBM Watson
            const response = await api.post('/conversation', { text, context: this.state.context });
            // Salva mensagem do usuário
            await api.post('/save', { text, sender: true });

            const message = { 
                text: response.data.output.text[0], 
                sender: false 
            };

            console.log(message);

            // Salva mensagem do Watson
            await api.post('/save', message);

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
                        <Loading className={classNames({
                            'show': this.state.loading
                        })}>
                            <div className="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Loading>
                    </ScrollToBottom>
                    <form className="chat-options" onSubmit={this.handleSubmit}>
                        <input name="message" placeholder="Envie uma mensagem..." autoComplete="off" required />
                        <button type="submit"><IoMdSend /></button>
                    </form>
                </div>
            </Container>
        );
    }
}