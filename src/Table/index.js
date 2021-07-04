import { TableDiv, StyledTable, StyledTableTh, StyledCaption } from "./styled";
import { StyledButton } from "../Buttons/styled";

const Table = ({ helps, helpFromSource, removeHelp }) => {
    const helpsVariant = (helpFromSource !== "all"
        ? helps.filter(({ from }) => from === helpFromSource)
        : helps);
    return !!helps.length && (
        <TableDiv>
            <StyledTable>
                <StyledCaption>podstawa prawna: ustawa z dnia 2 marca 2020 r. (Dz. U. poz. 1842, z późn. zm.)</StyledCaption>
                <tbody>
                    {helpsVariant.map(
                        help => (
                            <tr key={help.id}>
                                <StyledTableTh secondary scope="row">{help.amount}</StyledTableTh>
                                <StyledTableTh secondary as="td">{help.title}</StyledTableTh>
                                <StyledTableTh as="td">{help.date}</StyledTableTh>
                                <StyledTableTh as="td">{help.from}</StyledTableTh>
                                {helpFromSource === "all"
                                    ? <StyledTableTh as="td" primary>
                                        <StyledButton onClick={() => removeHelp(help.id)}>
                                            usuń
                                        </StyledButton>
                                    </StyledTableTh>
                                    : ""}
                            </tr>
                        )
                    )}
                </tbody>
            </StyledTable>
        </TableDiv>
    );
};

export default Table;