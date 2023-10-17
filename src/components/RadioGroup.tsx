import { Controller } from 'react-hook-form';

interface TipoIntimacao {
  [key: string]: number;
}

interface RadioGroupProps {
  tipoIntimacao: TipoIntimacao;
  control: any; // Controlador do useForm
}

const RadioGroup: React.FC<RadioGroupProps> = ({ tipoIntimacao, control }) => {
  return (
    <p className="page-paragraph">
      <h3>Detalhes da Intimação:</h3>
      <Controller
        name="tipoIntimacaoSelecionada"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            {Object.keys(tipoIntimacao).map((tipo) => (
              <div key={tipo} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={tipo}
                  {...field}
                  value={tipo}
                  checked={field.value === tipo}
                />
                <label className="form-check-label" htmlFor={tipo}>
                  {tipo}
                </label>
              </div>
            ))}
          </>
        )}
      />
    </p>
  );
};

export default RadioGroup;
