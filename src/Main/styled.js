import styled from "styled-components";

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    background: ${({ theme }) => theme.PictonBlue};

    @media (max-width: ${({theme}) => theme.Breakpoint.Tablet}px) {
        display: block;
    }
`;
