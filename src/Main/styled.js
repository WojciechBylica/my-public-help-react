import styled from "styled-components";

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: 800px) {
        display: block;
    }
`;
