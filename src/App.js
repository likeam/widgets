import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Header from "./components/Header";



const items = [
  {
    title: 'What is React ?',
    content: 'Reat is forntend javascript framework'
  },

  {
    title: 'What is benifit of Rect over normal JavaScript ?',
    content: 'Reat is very fast and small in size'
  },

  {
    title: 'What is React demand ?',
    content: 'Reat is in demand  language framework'
  }
];


const options = [
  {
      label: 'The Color Red',
      value: 'red',
  },
  {
      label: 'The Color Green',
      value: 'green',
  },
  {
      label: 'The Color Blue',
      value: 'blue',
  },
];



function App() {  

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search  />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a Color"  options={options} selected={selected} onSelectedChange= {setSelected}    />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );

}

export default App;
