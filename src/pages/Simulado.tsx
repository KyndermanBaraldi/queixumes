"use client"
import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
  resolution: string;
  author: string;
  course: string;
  selected: number; // Índice da opção selecionada (-1 para nenhum botão selecionado inicialmente)
  finished: boolean;
}

interface SimuladoProps {
  queryString: string; // Adiciona a propriedade para receber a query string
}

const Simulado: React.FC<SimuladoProps> = ({ queryString }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const finished = questions.every(question => question.finished);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const parsedQuery = queryString ? queryString : "";
        const api_url = `${process.env.NEXT_PUBLIC_API_URL}?${parsedQuery}`;
        const response = await fetch(api_url);
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
  
          const questionsWithSelectionAndFinished = data.res.map((question: Question) => ({
            ...question,
            selected: -1, // Inicialmente nenhum botão selecionado (-1 representa nenhum botão selecionado)
            finished: false, // Inicialmente nenhum questionário está finalizado
          }));
  
          setQuestions(questionsWithSelectionAndFinished);
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
  }, [queryString]);

  const setFinished = () => {
    const updatedQuestions = questions.map(question => ({ ...question, finished: true }));
    setQuestions(updatedQuestions);
  };
  

  const handleOptionClick = (optionIndex: number) => {
    if (!finished) {
      const updatedQuestions = [...questions]; // Crie uma cópia do array questions
      updatedQuestions[currentQuestion] = {
        ...updatedQuestions[currentQuestion],
        selected: optionIndex, // Atualize a propriedade selected da pergunta atual
      };
      setQuestions(updatedQuestions); // Atualize o estado com as perguntas atualizadas
    }
  };

  const handleFinishQuiz = () => {
    let calculatedScore: number = 0;
    questions.forEach(question => {
      const isCorrect = question.answer === question.options[question.selected];
      if (isCorrect) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setFinished();
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

  const handleResponderQuestion = () => {
    
    const updatedQuestions = [...questions]; // Crie uma cópia do array questions
    updatedQuestions[currentQuestion] = {
      ...updatedQuestions[currentQuestion],
      finished: true, // Atualize a propriedade selected da pergunta atual
    };

    setQuestions(updatedQuestions); // Atualize o estado com as perguntas atualizadas
    
    const finished = updatedQuestions.every(question => question.finished);
    if (finished) {
      handleFinishQuiz();
      
    }
  }

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
                ${!questions[currentQuestion].finished && questions[currentQuestion].selected === index ? "selected-answer" : ""}
                ${questions[currentQuestion].finished && questions[currentQuestion].selected === index && questions[currentQuestion].answer !== questions[currentQuestion].options[index] ? "wrong-answer" : ""}
                ${questions[currentQuestion].finished && questions[currentQuestion].answer === questions[currentQuestion].options[index] ? "correct-answer" : ""}
              `}
              disabled={questions[currentQuestion].finished}
            >
              {option}
            </button>
          ))}
          
        </div>
        
        <p>Disciplina: {questions[currentQuestion].course}</p>
        <p>Autor: Auditor(a) Fiscal {questions[currentQuestion].author}</p>

        {questions[currentQuestion].finished && (
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
          {!questions[currentQuestion].finished && (
            <button className="nav-button" onClick={handleResponderQuestion}>
              Responder
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

export default Simulado;