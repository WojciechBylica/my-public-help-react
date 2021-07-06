import { useState, useRef, } from "react";
import { FormParagraph, StyledFieldset, StyledInput, StyledButtonParagraph, RadioLabel } from "./styled"
import { StyledButton } from "../Buttons/styled"

const Form = ({ addNewHelp }) => {
    const [amount, setAmount] = useState("");
    const [title, setTitle] = useState("");
    const [dateOfHelp, setDateOfHelp] = useState("");
    const [from, setFrom] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTitle = title.trim();
        if (trimmedTitle) {
            addNewHelp(amount, trimmedTitle, dateOfHelp, from);
            setAmount("");
            setTitle("");
            setDateOfHelp("");
            setFrom("")
        };
    };

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus()
    };

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                <FormParagraph>kwota w PLN</FormParagraph>
                <StyledInput
                    ref={inputRef}
                    autoFocus
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
                />
            </label>
            <label>
                <FormParagraph>rodzaj pomocy</FormParagraph>
                <StyledInput
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                    type="text"
                    required
                />
            </label>
            <label>
                <FormParagraph>data otrzymania</FormParagraph>
                <StyledInput
                    value={dateOfHelp}
                    onChange={({ target }) => setDateOfHelp(target.value)}
                    type="date"
                    required
                />
            </label>
            <RadioLabel>
                <FormParagraph>źródło pomocy</FormParagraph>
                <StyledFieldset primary>
                    <label>
                        ZUS
                        <input
                            checked={from === "ZUS"}
                            onChange={({ target }) => setFrom(target.value)}
                            value="ZUS"
                            type="radio"
                            required
                        />
                    </label>
                    <label>
                        UP
                        <input
                            checked={from === "UP"}
                            onChange={({ target }) => setFrom(target.value)}
                            value="UP"
                            type="radio"
                        />
                    </label>
                </StyledFieldset>
            </RadioLabel>
            <StyledButtonParagraph >
                <StyledButton primary
                    onClick={focusInput}
                >
                    Wpisz na listę
                </StyledButton>
            </StyledButtonParagraph>
        </form>
    );
};

export default Form;