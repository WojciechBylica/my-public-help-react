import styled from "styled-components";

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    background: #27a5e2ad;

    @media (max-width: 800px) {
        display: block;
    }
`;
