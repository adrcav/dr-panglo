import styled from 'styled-components';

export const MessageCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: flex-end;

    &.sender {
        justify-content: flex-start;
    }

    .message-content {
        max-width: 60%;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #54467C;

        @media (max-width: 768px) {
            max-width: 80%;
        }

        p {
            color: white;
            font-size: 1.075rem;
        }
    }

    &.sender {
        .message-content {
            background-color: white;
            box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .1);

            p {
                color: #444;
            }
        }
    }
`;