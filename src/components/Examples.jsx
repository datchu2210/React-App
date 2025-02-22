import TabButton from './TabButton.jsx';
import {EXAMPLES} from './../data2.js';
import {useState} from 'react';
import {Section} from "./Section.jsx";
export default function Example(){

    const [selectedTopic,setSelectedTopic] = useState('')

    // call state only inside components and on top level not inner functions ex not inside handleclick
  
    function handleclick(selectedButton){
      setSelectedTopic(selectedButton)
    }
    let tabContent = <p>Please Select a Topic</p>
    
    if (selectedTopic){
      tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
            </div>
            }

    return( 
        <Section id='examples' title="Examples">
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onSelect={() => {handleclick('components')}}>Components</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => {handleclick('jsx')}}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onSelect={() => {handleclick('props')}}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onSelect={() => {handleclick('state')}}>State</TabButton>
          </menu>
          {/* another way of using if */}
          {/* {!selectedTopic && <p>Please Select a Topic</p>} */}
          {/* 3 rd way on top outside as jsx if condition in top instead of using here */}
          {!selectedTopic ? <p>Please Select a Topic</p>:
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
          </pre>
          </div>
        }
        </Section>
    );
}