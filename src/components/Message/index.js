import React, { Component } from 'react';
import classNames from 'classnames';

import { MessageContainer, MessageCard } from './styles';

export default class Message extends Component {
    state = {};

    render() {
        return (
            <div>
                
                    <MessageCard className={classNames({
                        'sender': !this.props.msg.sender
                    })}>
                        <div className="message-content">
                            <p>{this.props.msg.text}</p>
                        </div>
                    </MessageCard>

            </div>
        );
    }
}