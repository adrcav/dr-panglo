import styled from 'styled-components';

import { animateGradient, bulge, shadowPulse } from '../../styles/keyframes';

export const DoctorWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DoctorProfile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .1);
        margin-right: 10px;
    }

    h3 {
        font-size: 1.3rem;
    }
`;

export const DoctorContainer = styled.div`
    width: 650px;
    height: 400px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .065);
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        border-radius: 0;
        flex-direction: column;
    }

    .messages-container {
        width: 70%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 5px;
        position: relative;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .details-container {
        width: 30%;
        height: 100%;
        background: linear-gradient(135deg, #22D276 0%, #54467C 100%);
        background-size: 400% 400%;
        animation: ${animateGradient} 30s ease infinite;
        border-radius: 0 5px 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 35px 15px;
        position: relative;

        @media (max-width: 768px) {
            width: 100%;
            border-radius: 0;
        }

        p,
        h4 {
            color: white;
            margin-top: 0;
        }

        h4 {
            display: flex;
            align-items: center;
            margin-bottom: 7px;
        }

        p {
            width: 100%;
            margin-top: 8px;
            font-weight: 600;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .options {
            position: absolute;
            top: 7px;
            right: 8px;
            
            li {
                display: inline-flex;
                width: 27px;
                height: 27px;
                background-color: rgba(255, 255, 255, .2);
                border-radius: 50%;
                margin-right: 7px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: rgba(255, 255, 255, .8);
                font-size: 1rem;
                padding: 0;
                transition: all .2s ease-in-out;
                cursor: pointer;

                &:hover {
                    background-color: white;
                    color: #54467C;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`;

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;

    &.show {
        visibility: visible;
        opacity: 1;
    }

    h1 {
        color: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: ${bulge} 2s ease infinite, ${shadowPulse} 1.5s infinite;
    }
`;