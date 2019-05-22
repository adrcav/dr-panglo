import styled from 'styled-components';

import { animateGradient, shadowPulse } from '../../styles/keyframes';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #22D276 0%, #54467C 100%);
    background-size: 400% 400%;
    animation: ${animateGradient} 30s ease infinite;

    img {
        max-width: 175px;
        display: block;
        margin: 0 auto;
    }

    h1 {
        color: white;
        font-weight: 400;
        margin-top: 25px;
    }

    .pulse {
        animation: ${shadowPulse} 1.5s infinite;
        border-radius: 5px;
    }

    p {
        color: white;
        font-size: 1rem;
        margin: 10px auto;
        text-align: center;

        @media (max-width: 991px) {
            width: 80%;
            display: block;
        }
    }

    button {
        text-align: center;
        
        @media (max-width: 768px) {
            width: 90%;
            margin: 0 auto;
        }
    }
`;