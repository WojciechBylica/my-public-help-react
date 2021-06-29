import styled, { css } from "styled-components";

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

    ${({ primary }) => primary && css` 
    width:197px;
    margin: 5px 0;
    `} 

    &:focus {
    background: ${({theme}) => theme.White};
    }

    &:hover {
    background: ${({theme}) => theme.Grey};
    }

    @media (max-width:${({theme}) => theme.Breakpoint.Mobile}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;