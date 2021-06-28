import styled, {css} from "styled-components";

export const FormParagraph = styled.p`
    margin: 10px 0px 5px 0px;
`;

export const RadioLabel = styled.label`
     display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledFieldset = styled.fieldset`
    width: 195px;
    border: 1px solid #ccc;;
    border-radius: 2px;

    ${({ primary }) => primary && css` 
    display: flex;
    justify-content: space-around;
`} 
`;

export const StyledInput = styled.input`
    width: 200px;
`;

export const StyledButtonParagraph = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;