"use client"
import Dimensao from "@/components/Dimensao";
import { dimensaoHumana, dimensaoInstitucional, dimensaoTecnica } from "@/data/disciplinas";




const Home: React.FC = () => {
  

  return (
    <div className="container">
      <h1 >CADASTRAR PERGUNTAS</h1>
      <p className="destaque">
        <strong>Link para criar as questões: 
        <a href="https://forms.gle/ta1CK3atE5DwRxC56" target="_blank" rel="noopener noreferrer">
          https://forms.gle/ta1CK3atE5DwRxC56
        </a></strong>
      </p>

      <p>Aqui você cadastra novas perguntas ao banco de questões;</p>
      <p>Incluir a resposta correta, na alternativa 1. (As alternativas serão embaralhadas automaticamente)</p>
      <p>Não incluir outra resposta igual a correta.</p>

      <Dimensao titulo="DIMENSÃO HUMANA" questoes={dimensaoHumana} />
      <Dimensao titulo="DIMENSÃO INSTITUCIONAL" questoes={dimensaoInstitucional} />
      <Dimensao titulo="DIMENSÃO TÉCNICA" questoes={dimensaoTecnica} />

      <p style={{ marginTop: "20px", textAlign: "center", fontStyle: "italic", fontSize: "14px" }}>
        Os formulários foram criados pelo Auditor Fiscal Marcus Vinicius.
        <a href="https://docs.google.com/spreadsheets/d/1oUgu4BTZXq9DPtTtWVUtkWRb_dtDlIKAZzXuRlcqzWs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Link para Planilha
        </a>
      </p>
      
    </div>
  );
};

export default Home;
