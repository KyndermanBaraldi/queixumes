import { prazos } from "@/data/prazos";

const PrazosTable: React.FC = () => {
  return (
    <div className="page-table">
        <table>
          <thead>
            <tr>
              <th>Tipo de Intimação</th>
              <th>Prazo (dias)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prazos).map(([tipoIntimacao, prazo]) => (
              <tr key={tipoIntimacao}>
                <td>{tipoIntimacao}</td>
                <td>{prazo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="page-paragraph">Na dúvida chuta 30 dias :)</p>
    </div>
    
  );
};

export default PrazosTable;