import { ButtonsDiv, StyledButton } from "./styled";

const Buttons = ({ helps, setHelpFromSource }) => (
    !!helps.length &&
    <ButtonsDiv>
        <>
            <StyledButton onClick={() => setHelpFromSource("ZUS")}>
                pokaż pomoc z ZUS
            </StyledButton>
            <StyledButton onClick={() => setHelpFromSource("UP")} >
                pokaż pomoc z UP
            </StyledButton>
            <StyledButton onClick={() => setHelpFromSource("all")}>
                pokaż wszystko
            </StyledButton>
        </>
    </ButtonsDiv>
);

export default Buttons;