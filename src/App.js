import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Section from "./Section"
import Table from "./Table";
import Buttons from "./Buttons";

function App() {
  const [helps, setHelps] = useState("")
  const [helpFromSource, setHelpFromSource] = useState("all");

  const addNewHelp = (amount, trimmedTitle, dateOfHelp, from, helpLaw) => {
    setHelps(helps => [
      ...helps,
      {
        amount: +amount,
        title: trimmedTitle,
        date: dateOfHelp,
        from: from,
        law: helpLaw,
        id: helps.length ? helps[helps.length - 1].id + 1 : 1,
      }]);
  };

  const removeHelp = (id) => {
    setHelps(helps => helps.filter(helps => helps.id !== id));
  };

  const renderSummary = () => {
    if (helps) {
      const sum = (helpFromSource !== "all"
        ? helps.filter(({ from }) => from === helpFromSource)
        : helps)
        .reduce((currentSum, help) => currentSum + +help.amount, 0);
      return sum;
    }
  };

  return (
    <>
      <Header title="Pomoc publiczna w ramach tarczy antykryzysowej" />
      <Main>
        <Section title="wpisz dane:">
          <Form addNewHelp={addNewHelp} />
        </Section>
        <Section title="moja pomoc publiczna:">
          <>
            <Buttons helps={helps} helpFromSource={helpFromSource} setHelpFromSource={setHelpFromSource} />
            <Table helps={helps} helpFromSource={helpFromSource} removeHelp={removeHelp} />
            {!!helps && <Section title="suma otrzymanych środków:">{renderSummary()}{" "}PLN</Section>}
          </>
        </Section>
      </Main>
    </>
  );
}

export default App;
