import React, { useState } from 'react';
import Progress from './component/Progress';
import Question from './component/Question';
import Answers from './component/Answers';

import './App.css';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState();

  const questions = [
    {
      id: 1,
      question: "A baby blue whale drinks how many liters of milk per day?",
      answer_a: "10",
      answer_b: "50",
      answer_c: "190",
      answer_d: "500 ",
      correct_answer: "c",
    },
    {
      id: 2,
      question: " For what is the Jurassic period named?",
      answer_a: "a mountain range in Switzerland",
      answer_b: "a kind of dinosaur",
      answer_c: "a soccer hero",
      answer_d: "the French word for day",
      correct_answer: "a",
    },

    {
      id: 3,
      question: "Which blood group is called the universal donor?",
      answer_a: "A",
      answer_b: "B",
      answer_c: "O",
      answer_d: "AB",
      correct_answer: "O",
    },

  ];

  const question = questions[currentQuestion];

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    e.preventDefault()
  };
  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < question.lenght) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
  };

  return (

    <div className="container">

      <Progress total={question.length} current={currentQuestion + 1} />
      <Question question={question.question} />
      <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
      <button className="btn btn-success" onClick={next}> confirm and continue</button>

    </div>
  );
}

export default App;
