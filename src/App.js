import Accordion from "./components/Accordion";
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
]

function App() {
  return ( <div>
      <Search />
    </div>
  );
}

export default App;
