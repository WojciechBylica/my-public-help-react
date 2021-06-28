import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    border: none;
    background: white;
    color: black;
    padding: 10px;
    margin: 10px;
    cursor: pointer;

    &:focus {
    background: rgb(218, 213, 213);
    }

    &:hover {
    background: rgb(243, 238, 238);
    }

    @media (max-width:500px) {
        display: flex;
        flex-direction: column;
    }


`;