import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import './welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome