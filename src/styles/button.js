import styled from 'styled-components';

export const ButtonLight = styled.button`
    padding: 15px 60px;
    background-color: white;
    border: none;
    text-transform: uppercase;
    color: #333;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 2px 15px 1px rgba(0, 0, 0, .075);
        transform: translateY(-2px);
    }
`;
