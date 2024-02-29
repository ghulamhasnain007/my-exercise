import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [questions, setQuestions] = useState([]);
  let [questionIndex, setQuestionIndex] = useState(0);
  let [selectedOption, setSelectedOption] = useState(null);
  let [score, setScore] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(Array(questions.length).fill(false));

  useEffect(() => {
    getDatafromApi();
  }, []);

  if (!questions.length) {
    return <h1>loading...</h1>;
  }

  function getDatafromApi() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then((res) => res.json())
      .then((res) => {
        res.forEach(function (item) {
          item.options = [...item.incorrectAnswers, item.correctAnswer];
          item.options = shuffle(item.options);
        });
        setQuestions(res);
      });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  function nextQuestion() {
    // Check if the selected option is correct
    const isCorrect = selectedOption === questions[questionIndex].correctAnswer;

    // Update score based on correctness
    setScore(score + (isCorrect ? 1 : 0));

    // Update correctAnswers array to indicate correctness for the current question
    const updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers[questionIndex] = isCorrect;
    setCorrectAnswers(updatedCorrectAnswers);

    // Move to the next question
    setQuestionIndex(questionIndex + 1);

    // Clear selected option for the next question
    setSelectedOption(null);
  }

  function restart() {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setCorrectAnswers(Array(questions.length).fill(false));
  }

  return (
    <div className="App-header">
      <h1>{questions[questionIndex].question.text}</h1>
      {questions[questionIndex].options.map(function (data, index) {
        return (
          <div className="choice" key={index}>
            <input
              type="radio"
              value={data}
              name="ques"
              id=""
              checked={selectedOption === data}
              onChange={() => handleOptionSelect(data)}
            />
            {data}
          </div>
        );
      })}
      {questionIndex === questions.length - 1 ? (
        <div>
          <p>Your Score: {score}</p>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
}

export default App;
