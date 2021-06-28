import { useState } from "react";

const Form = ({ addNewHelp }) => {

    const [amount, setAmount] = useState();
    const [title, setTitle] = useState();
    const [dateOfHelp, setDateOfHelp] = useState();
    const [from, setFrom] = useState();
    const helpLaw = "Ustawa o COVID"




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

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                <p className="form__paragraph">kwota w PLN</p>
                <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__input"
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
                />
            </label>
            <label>
                <p className="form__paragraph">rodzaj pomocy</p>
                <input
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                    className="form__input"
                    type="text"
                    required
                />
            </label>
            <label>
                <p className="form__paragraph">data otrzymania</p>
                <input
                    value={dateOfHelp}
                    onChange={({ target }) => setDateOfHelp(target.value)}
                    className="form__input"
                    type="date"
                    required
                />
            </label>
            <label>
                <p className="form__paragraph">źródło pomocy</p>
                <fieldset className="form__fieldset">
                    <label>
                        ZUS
                        <input
                            onChange={({ target }) => setFrom(target.value)}
                            type="radio"
                            name="source"
                            value="ZUS"
                            required
                        />
                    </label>
                    <label>
                        UP
                        <input
                            onChange={({ target }) => setFrom(target.value)}
                            type="radio"
                            name="source"
                            value="UP"
                        />
                    </label>
                </fieldset>
            </label>
            <label>
                <p className="form__paragraph">Podstawa prawna</p>
                <input
                    className="form__input"
                    placeholder="ustawa o COVID"
                    readOnly
                    value="ustawa o COVID" />
            </label>
            <p><button className="button button--form">Wpisz na listę</button></p>
        </form>
    );
};

export default Form;