import { ButtonsDiv, StyledButton } from "./styled";

const Buttons = ({ helps, helpFromSource, setHelpFromSource }) => {
    return (
        !!helps && (
            <ButtonsDiv>
                <>
                    <StyledButton onClick={() => setHelpFromSource("ZUS")}>
                        pokaż pomoc z zus
                    </StyledButton>
                    <StyledButton onClick={() => setHelpFromSource("UP")} >
                        pokaż pomoc z UP
                    </StyledButton>
                    <StyledButton onClick={() => setHelpFromSource("all")}>
                        pokaż wszystko
                    </StyledButton>
                </>
            </ButtonsDiv>
        )
    );
};

export default Buttons;