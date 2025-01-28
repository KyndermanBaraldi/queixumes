"use client"
import { useState, useEffect } from "react";
import {RiScissorsCutFill} from "react-icons/ri"

interface Question {
  question: string;
  options: string[];
  answer: string;
  resolution: string;
  author: string;
  course: string;
  selected: number;
  finished: boolean;
  isnt: Set<number>;
}

interface DisciplinaResult {
  acertos: number;
  erros: number;
}

interface SimuladoProps {
  queryString: string;
}

const Simulado: React.FC<SimuladoProps> = ({ queryString }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [disciplinaResultados, setDisciplinaResultados] = useState<{ [key: string]: DisciplinaResult }>({});
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
  
          const questionsWithSelectionAndFinished = data.res.map((question: Question) => ({
            ...question,
            selected: -1,
            finished: false,
            isnt: new Set<number>()
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
    const resultadosPorDisciplina: { [key: string]: DisciplinaResult } = {};
    let calculatedScore: number = 0;

    updatedQuestions.forEach((question: Question) => {
      if (question.finished) {
        const disciplina = question.course;
        const isCorreta = question.answer === question.options[question.selected];

        if (!resultadosPorDisciplina[disciplina]) {
          resultadosPorDisciplina[disciplina] = {
            acertos: 0,
            erros: 0,
          };
        }

        if (isCorreta) {
          calculatedScore++;
          resultadosPorDisciplina[disciplina].acertos++;
        } else {
          resultadosPorDisciplina[disciplina].erros++;
        }
      }
    });

    setDisciplinaResultados(resultadosPorDisciplina);
    setScore(calculatedScore);
    setQuestions(updatedQuestions);

  };
  

  const handleOptionClick = (optionIndex: number) => {
    if (!finished) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestion] = {
        ...updatedQuestions[currentQuestion],
        selected: optionIndex,
      };
      setQuestions(updatedQuestions);
    }
  };

  const handleFinishQuiz = () => {
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

  const handleScissor = (optionIndex: number) => {

    if (!questions[currentQuestion].finished) {
      const updatedQuestions = [...questions];

      if (updatedQuestions[currentQuestion].isnt.has(optionIndex)) {
        updatedQuestions[currentQuestion].isnt.delete(optionIndex)
      } else {
        updatedQuestions[currentQuestion].isnt.add(optionIndex)
      }
      setQuestions(updatedQuestions);
    }
  }


  const handleResponderQuestion = () => {
    
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion] = {
      ...updatedQuestions[currentQuestion],
      finished: true,
    };

    setQuestions(updatedQuestions);
    
    const finished = updatedQuestions.every(question => question.finished);
    if (finished) {
      handleFinishQuiz();
      
    }
  }

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
            <div className="option" key={index}>
              < RiScissorsCutFill onClick={() => handleScissor(index)}/>
              <button
                
                onClick={() => handleOptionClick(index)}
                className={`
                  ${!questions[currentQuestion].finished && questions[currentQuestion].selected === index ? "selected-answer" : ""}
                  ${questions[currentQuestion].finished && questions[currentQuestion].selected === index && questions[currentQuestion].answer !== questions[currentQuestion].options[index] ? "wrong-answer" : ""}
                  ${questions[currentQuestion].finished && questions[currentQuestion].answer === questions[currentQuestion].options[index] ? "correct-answer" : ""}
                  ${(questions[currentQuestion].isnt.has(index)) ? "texto-tachado" : ""}
                `}
                disabled={questions[currentQuestion].finished }
              >
                {option}
              </button>
            </div>
          ))}
          
        </div>
        
        <p>Disciplina: {questions[currentQuestion].course}</p>
        <p>Autor: {questions[currentQuestion].author}</p>

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
            <h2>Simulado concluído! Sua pontuação: {score}</h2>
            <ul>
            {
            
              Object.keys(disciplinaResultados).map((disciplina) =>
                (
                  <li key={disciplina}>
                    <p>{`${disciplina}: ${disciplinaResultados[disciplina].acertos} acertos, ${disciplinaResultados[disciplina].erros} erros`}</p>
                  </li> 
                )
              )
            
            
            }
            </ul>
            
            
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulado;