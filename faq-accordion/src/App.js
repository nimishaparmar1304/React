import logo from './logo.svg';
import './App.css';
import Faq from './Component/Faq';
import starIcon from './assets/images/icon-star.svg';
import { useState } from 'react';
import { QUESTIONS } from './data';

function App() {

  const [selectedAnswer, setSelectedAnswer] = useState(0);

  function handleSelection(selectedQuestion){
    setSelectedAnswer(selectedQuestion === selectedAnswer ? '' : selectedQuestion);
  }
  return (
    <main className="qaSection">
      <h1>
        <img className="star" src={starIcon} alt='star icon' />
        FAQs
      </h1>
    
      <ul className="questionBox">
        {QUESTIONS.map((item, index) => {
          return (
            <Faq
              actualSelected={selectedAnswer}
              onSelect={handleSelection}
              key={index}
              id={index}
              {...item}
            />
          );
        })}

        </ul>
      
  </main>
  );
}

export default App;
