import { keyframes } from 'styled-components';

export const animateGradient = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
`;

export const shadowPulse = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
`;
