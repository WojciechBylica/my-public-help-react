import styled, { css } from "styled-components";

export const TableDiv = styled.div`
    overflow: auto;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    font-size: 15px;
    margin: 25px 0px;
`;

export const StyledTableTh = styled.th`
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    vertical-align: middle;

    ${({ primary }) => primary && css` 
    padding: 2px;
    `} 

    ${({ secondary }) => secondary && css` 
    word-break: break-word;
    `}

    @media (max-width: 500px) {
        word-break: initial;
    }
`;