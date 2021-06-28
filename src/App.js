import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Section from "./Section"
import Table from "./Table";
import Buttons from "./Buttons";
import Summary from "./Summary";

function App() {
  const [helps, setHelps] = useState([
    {
      id: 1,
      amount: 2080,
      title: "postojowe",
      date: "2020-10-11",
      from: "ZUS",
      law: "ustawa o COVID",
    },
    {
      id: 2,
      amount: 5000,
      title: "dotacja",
      date: "2020-10-12",
      from: "UP",
      law: "ustawa o COVID",
    },
  ])
  const [helpFromSource, setHelpFromSource] = useState("all");

  const addNewHelp = (amount, trimmedTitle, dateOfHelp, from, helpLaw) => {
    setHelps(tasks => [
      ...tasks,
      {
        amount: +amount,
        title: trimmedTitle,
        date: dateOfHelp,
        from: from,
        law: helpLaw,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }]);
  };

  const removeHelp = (id) => {
    setHelps(helps => helps.filter(helps => helps.id !== id));
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

            <Summary helps={helps} helpFromSource={helpFromSource} />
          </>
        </Section>
      </Main>
    </>
  );
}

export default App;
