import { TableDiv, StyledTable, StyledTableTh, } from "./styled";

const Table = ({ helps, helpFromSource, removeHelp }) => {

    const helpsVariant = (helpFromSource !== "all"
        ? helps.filter(({ from }) => from === helpFromSource)
        : helps);
    return (
        <TableDiv>
            <StyledTable>
                {!!helps && helpsVariant.map(
                    help => (
                        <tr key={help.id}>
                            <StyledTableTh scope="row">{help.amount}</StyledTableTh>
                            <StyledTableTh as="td">{help.title}</StyledTableTh>
                            <StyledTableTh as="td">{help.date}</StyledTableTh>
                            <StyledTableTh as="td">{help.from}</StyledTableTh>
                            <StyledTableTh as="td">{help.law}</StyledTableTh>
                            {helpFromSource === "all"
                                ? <StyledTableTh as="td" primary>
                                    <button onClick={() => removeHelp(help.id)}>
                                        usuń
                                    </button>
                                </StyledTableTh>
                                : ""}
                        </tr>
                    )
                )}
            </StyledTable>
        </TableDiv>

    );
};

export default Table;