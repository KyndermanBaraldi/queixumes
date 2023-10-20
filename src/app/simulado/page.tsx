"use client"
import React, { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
  resolution: string;
  author: string;
  course: string;
}

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
        const response = await fetch(api_url);
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          
          setQuestions(data.res);
          setSelectedOptions(new Array(data.length).fill(-1));
        } else {
          throw new Error("Erro ao buscar dados da API");
        }
      } catch (error: any | unknown | undefined) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (optionIndex: number) => {
    if (!finished) {
      const newSelectedOptions: number[] = [...selectedOptions];
      newSelectedOptions[currentQuestion] = optionIndex;
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleFinishQuiz = () => {
    let calculatedScore: number = 0;
    questions.forEach((question, index) => {
      if (question.answer === question.options[selectedOptions[index]]) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setFinished(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // const handleRestartQuiz = () => {
  //   setCurrentQuestion(0);
  //   setSelectedOptions(new Array(questions.length).fill(-1));
  //   setFinished(false);
  //   setScore(0);
  // };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error}</div>;
  }

  return (
    <div className="quiz-app">
      <div className="quiz-header">
        <h2>Simulado Curso Formação 1ª Turma</h2>
      </div>
      <div className="quiz-body">
        <pre className="caput">{`${currentQuestion + 1} - ${questions[currentQuestion].question}`}</pre>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`
                ${!finished && selectedOptions[currentQuestion] === index ? "selected-answer" : ""}
                ${finished && selectedOptions[currentQuestion] === index && questions[currentQuestion].answer != option ? "wrong-answer" : ""}
                ${finished && questions[currentQuestion].answer === option ? "correct-answer" : ""}
              `}
              disabled={finished}
            >
              {option}
            </button>
          ))}
          
        </div>
        
        <p>Disciplina: {questions[currentQuestion].course}</p>
        <p>Autor: Auditor(a) Fiscal {questions[currentQuestion].author}</p>

        {finished && (
          <div>
            <p>Explicação</p>
            <p>{questions[currentQuestion].resolution}</p>
          </div>
        )}

      </div>
      <div className="quiz-footer">
        <p>{`${currentQuestion + 1} de ${questions.length} questões`}</p>

        <div className="nav-quiz">
          {currentQuestion > 0 && (
            <button className="nav-button" onClick={handlePreviousQuestion}>
              Voltar
            </button>
          )}
          {currentQuestion < questions.length - 1 && (
            <button className="nav-button" onClick={handleNextQuestion}>
              Próximo
            </button>
          )}
          {!finished && currentQuestion === questions.length - 1 && (
            <button className="nav-button" onClick={handleFinishQuiz}>
              Concluir
            </button>
          )}
        </div>

        {finished && (
          <div>
            <p>Quiz concluído! Sua pontuação: {score}</p>
            {/* <button className="nav-button" onClick={handleRestartQuiz}>
              Reiniciar
            </button> */}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;