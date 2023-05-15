import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import './finishQuestion.css'

const finishQuestion = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="finish">
            <h2>EndGame</h2>
            <p>Pontuação: {quizState.score}/{quizState.questions.length}</p>
            <button onClick={() => dispatch({type: "MENU"})}>Menu</button>
        </div>
    )
}

export default finishQuestion