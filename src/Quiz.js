import React,{useContext} from 'react'
import QuizContext from './QuizContext';

function Quiz(props) {
    const {questions, currentQuestion} = useContext(QuizContext);
    if(currentQuestion === questions.length) {
        return <h1>Quiz completed</h1>;
    }
    const currentQ = questions[currentQuestion];
    return (
    <div>    <h1>{currentQ.question}</h1>
    {currentQ.options.map(option => (
        <button key={option} onClick={() => props.handleAnswer(option)}>{option}</button>
    ))}</div>
  )
}

export default Quiz