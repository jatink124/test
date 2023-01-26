import QuizContext from './QuizContext';

export default function QuizProvider({questions, currentQuestion, children}) {
    return (
        <QuizContext.Provider value={{questions, currentQuestion}}>
            {children}
        </QuizContext.Provider>
    );
}
