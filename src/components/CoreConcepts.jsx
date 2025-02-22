import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from './../data.js';

export default function CoreConcepts(){
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    /* below line a example to show we can display list in react */
    {/* {[<p>Hello</p>,'world']} */}

    <ul>
      {/* way of printing items in list without using index like below commented ones check the brackets too */}
      {CORE_CONCEPTS.map((item, index) => (
        <CoreConcept key={index} {...item} />
      ))}

      {/* 2nd way to write props */}
      {/* <CoreConcept 
      title = {CORE_CONCEPTS[0].title} 
      description={CORE_CONCEPTS[0].description} 
      image = {CORE_CONCEPTS[0].image} 
      /> */}

      {/* 3rd way to write props */}
      {/* <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    </ul>
    </section>
)}