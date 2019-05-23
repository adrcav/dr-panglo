import styled from 'styled-components';

import { animateGradient } from '../../styles/keyframes';

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
            padding: 5px;
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