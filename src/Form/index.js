import { useState, useRef, } from "react";
import { FormParagraph, StyledFieldset, StyledInput, StyledButtonParagraph, RadioLabel } from "./styled"
import { StyledButton } from "../Buttons/styled"

const Form = ({ addNewHelp }) => {
    const [amount, setAmount] = useState("");
    const [title, setTitle] = useState("");
    const [dateOfHelp, setDateOfHelp] = useState("");
    const [from, setFrom] = useState("");
    const helpLaw = "Ustawa o COVID";

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTitle = title.trim();
        if (trimmedTitle) {
            addNewHelp(amount, trimmedTitle, dateOfHelp, from, helpLaw);
            setAmount("");
            setTitle("");
            setDateOfHelp("");
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
                            onChange={({ target }) => setFrom(target.value)}
                            value="ZUS"
                            type="radio"
                            name="source"
                            required
                        />
                    </label>
                    <label>
                        UP
                        <input
                            onChange={({ target }) => setFrom(target.value)}
                            value="UP"
                            type="radio"
                            name="source"
                        />
                    </label>
                </StyledFieldset>
            </RadioLabel>
            <label>
                <FormParagraph>Podstawa prawna</FormParagraph>
                <StyledInput
                    placeholder="ustawa o COVID"
                    readOnly
                    value="ustawa o COVID"
                />
            </label>
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