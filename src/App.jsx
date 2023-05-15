import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/welcome/Welcome'
import Question from './components/questions/Questions'
import Finish from './components/finishQuestions/finishQuestion'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
      <div className="App">
        <h1>WebQuiz</h1>
          {quizState.gameStage === 'Start' && <Welcome/>}
          {quizState.gameStage === 'Playing' && <Question/>}
          {quizState.gameStage === 'End' && <Finish/>}
      </div>
  )
}

export default App
