
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, {useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
  label: 'Urdu',
  value: 'ur', 
  },
  {
    label: 'English',
    value: 'en', 
  }
];



const Translate = () => {

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input  value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      
      <Dropdown 
        label="Select a Language"
        options={options} 
        selected={language} 
        onSelectedChange={setLanguage}  
        />
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language} />
    </div>
  )
}

export default Translate
