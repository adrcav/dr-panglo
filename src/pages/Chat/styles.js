import styled from 'styled-components';

import { animateGradient, blink, bulge } from '../../styles/keyframes';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .chat-wrapper {
        width: 600px;
        height: 500px;
        background-color: #fafafa;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, .05);

        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .chat-header {
            width: 100%;
            padding: 15px 25px;
            border-radius: 5px 5px 0 0;
            background: linear-gradient(135deg, #22D276 0%, #54467C 100%);
            background-size: 400% 400%;
            animation: ${animateGradient} 30s ease infinite;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 768px) {
                border-radius: 0;
            }

            h1 {
                color: white;
                font-weight: 600;
                align-items: center;
                display: flex;
            }

            img {
                max-width: 50px;
                max-height: 50px;
                border: 2px solid white;
                border-radius: 50%;
            }
        }

        .chat-messages {
            width: 100%;
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 5px;
            position: relative;
        }

        .chat-options {
            width: 100%;
            padding: 10px;
            border-top: 1px solid #ccc;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            input {
                flex: 1;
                padding: 5px 5px 5px 0;
                border: none;
                outline: none;
                resize: none;
                font-family: 'Montserrat', sans-serif;
                margin-right: 5px;
            }

            button {
                background-color: #54467C;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: white;
                border: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all .2s ease-in-out;

                &:hover {
                    background-color: #22D276;
                }
            }
        }
    }
`;

export const Loading = styled.div`
    position: absolute;
    bottom: 15px;
    left: 0;
    transform: translateX(-110%) scale(.6);
    transition: all .4s ease-in-out;
    opacity: 0;
    visibility: hidden;
    transition-timing-function: cubic-bezier(.38,.75,.85,.95);

    &.show {
        visibility: visible;
        opacity: 1;
        left: 50%;
        transform: translateX(-50%) scale(.6);
    }

    .typing-indicator {
        background-color: #e6e7ed;
        will-change: transform;
        width: auto;
        border-radius: 50px;
        padding: 20px;
        display: table;
        margin: 0 auto;
        position: relative;
        animation: 2s ${bulge} infinite ease-out;

        &:before, &:after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: -2px;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: #e6e7ed;
        }

        &:after {
            height: 10px;
            width: 10px;
            left: -10px;
            bottom: -10px;
        }

        span {
            height: 15px;
            width: 15px;
            float: left;
            margin: 0 1px;
            background-color: #9e9ea1;
            display: block;
            border-radius: 50%;
            opacity: 0.4;

            &:nth-of-type(1) {
                animation: 1s ${blink} infinite 0.3333s;
            }
            &:nth-of-type(2) {
                animation: 1s ${blink} infinite 0.6666s;
            }
            &:nth-of-type(3) {
                animation: 1s ${blink} infinite 0.9999s;
            }
        }
    }
`;