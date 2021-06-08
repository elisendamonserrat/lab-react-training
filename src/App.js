import React from 'react';
import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="font-bold text-xl">Iteration 1 | Component: IdCard</h2>
      <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
      /> 
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2 className="font-bold text-xl">Iteration 2 | Component: Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h2 className="font-bold text-xl">Iteration 3 | Component: Random</h2>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h2 className="font-bold text-xl">Iteration 4 | Component: BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
