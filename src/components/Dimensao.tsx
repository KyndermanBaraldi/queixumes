// components/Dimensao.tsx
import { generateSlug } from "@/utils/slug";
import Link from "next/link";
import React from "react";
import { VscBook, VscArrowRight } from "react-icons/vsc";
interface Questao {
  disciplina: string;
  link: string;
  caiNaProva: string;
}

interface DimensaoProps {
  titulo: string;
  questoes: Questao[];
}

const Dimensao: React.FC<DimensaoProps> = ({ titulo, questoes }) => {
  return (
    <div className="dimensao">
      <h2>{titulo}</h2>
      <table>
        <thead>
          <tr>
            <th>Matéria de prova?</th>
            <th>Disciplina</th>
            <th>Lista de questões</th>
          </tr>
        </thead>
        <tbody>
          {questoes.map((questao, index) => (
            <tr key={index}>
              <td>
                {questao.caiNaProva==="SIM" && questao.caiNaProva}
                {questao.caiNaProva==="SIM" && 
                <Link href={`/disciplinas/${generateSlug(questao.disciplina)}`}>
                   < VscArrowRight/>
                   Resumo
                   <VscBook />

                </Link>}
              </td>
              <td>
                {questao.disciplina}
              </td>
              <td>
                {questao.caiNaProva==="SIM" && 
                <a href={questao.link} target="_blank" rel="noopener noreferrer">{questao.link}</a>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dimensao;
