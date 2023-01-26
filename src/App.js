import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import QuizProvider from './QuizProvider';
import Quiz from './Quiz';
function App() {
 
  const [user, setUser] = useState('Jatin');
  const [questions, setQuestions] = useState([
 
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "London", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter"
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  function handleAnswer(answer) {
    if(answer === questions[currentQuestion].correctAnswer) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
    setCurrentQuestion(currentQuestion + 1);
}


  return (
    <div className="App">
 <QuizProvider questions={questions} currentQuestion={currentQuestion}>
      <Quiz handleAnswer={handleAnswer} />
    </QuizProvider>

    </div>
  );
}

export default App;
