const Summary = ({ helps, helpFromSource }) => {

    const renderSummary = () => {




        const sum = (helpFromSource !== "all"
            ? helps.filter(({ from }) => from === helpFromSource)
            : helps)
            .reduce((currentSum, help) => currentSum + +help.amount, 0);

        return sum;

    };

    return (
        !!helps && (
            <>
                <h2>
                    Suma otrzymanych środków:
                </h2>
                <p>
                    {renderSummary()} PLN
                </p>
            </>
        )
    );
};

export default Summary;