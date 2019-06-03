import React, { Component } from 'react';
import api from '../../services/api';
import { MdPermIdentity, MdSync, MdDeleteForever } from 'react-icons/md';
import { IoIosArrowForward, IoMdRefresh } from 'react-icons/io';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollToBottom from 'react-scroll-to-bottom';
import classNames from 'classnames';

import Message from '../../components/Message';

import avatar from '../../avatar-default.png';
import { DoctorWrapper, DoctorProfile, DoctorContainer, Loading } from './styles';

export default class Doctor extends Component {
    state = {
        messages: [],
    };

    getAllMessages = async () => {
        try {
            this.setState({ loading: true });
            const response = await api.get('/saved');
            this.setState({ 
                messages: [...this.state.messages, ...response.data],
                loading: false
            });
        } catch (err) {
            alert('Ocorreu um erro ao carregar as mensagens.');
            console.log(err);
        }
    };

    deleteAllMessages = async () => {
        try {
            this.setState({ loading: true });
            const response = await api.delete('/saved');
            this.setState({ 
                messages: [], 
                loading: false 
            });
        } catch (err) {
            alert('Não foi possível deletar as mensagens.');
            console.log(err);
        }
    };

    componentDidMount() {
        this.getAllMessages();
    }

    render() {
        return (
            <DoctorWrapper>
                <DoctorProfile>
                    <img src={avatar} alt="Avatar Doctor"/>
                    <h3>Dr. Panglo</h3>
                </DoctorProfile>

                <DoctorContainer>
                    <ScrollToBottom className="messages-container">
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={350}
                            transitionLeaveTimeout={250}
                        >
                        {this.state.messages.map((message, index) => (
                            <Message key={message._id} msg={{ text: message.text, sender: !message.sender }} />
                        ))}
                        </ReactCSSTransitionGroup>
                    </ScrollToBottom>
                    <div className="details-container">
                        <h4>
                            <MdPermIdentity style={{ fontSize: '1.35rem', marginRight: '3px' }} /> Fulano da Silva
                        </h4>
                        <p>
                            <span style={{ opacity: 0.8, fontSize: '.8rem' }}>Humor:</span> 
                            Estável
                        </p>
                        <p>
                            <span style={{ opacity: 0.8, fontSize: '.8rem' }}>Frequência:</span> 
                            Diária
                        </p>
                        <p>
                            <span style={{ opacity: 0.8, fontSize: '.8rem' }}>Último acesso:</span> 
                            02/06
                        </p>

                        <ul className="options">
                            <li title="Atualizar" onClick={this.getAllMessages}><MdSync /></li>
                            <li title="Deletar mensagens" onClick={this.deleteAllMessages}><MdDeleteForever /></li>
                        </ul>
                    </div>
                </DoctorContainer>

                <Loading className={classNames({
                    'show': this.state.loading
                })}>
                    <h1><IoMdRefresh style={{ transform: 'scale(2)' }} /></h1>
                </Loading>
            </DoctorWrapper>
        );
    }
}