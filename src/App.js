import Rect, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";



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
  return ( <div>
      <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected} 
        options={options}  
        />
    </div>
  );
}

export default App;
