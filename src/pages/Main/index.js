import React, { Component } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import avatar from '../../avatar.png';
import { Container } from './styles';
import { ButtonLight } from '../../styles/button';

export default class Main extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <Container>
                <img src={avatar} alt="Avatar Dr. Panglo"/>
                <h1>Dr. Panglo</h1>
                <p>Sou um chatbot disposto a ouvir tudo que você tem a dizer.</p>
                <FaEllipsisH style={{ 
                    fontSize: '2.5rem', 
                    color: 'white', 
                    marginBottom: '20px' 
                }} />
                <Link to="/chat">
                    <ButtonLight className="pulse">Vamos conversar?</ButtonLight>
                </Link>
            </Container>
        );
    }
}