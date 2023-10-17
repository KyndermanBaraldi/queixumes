// PrazoCalculator.tsx
import { useForm, Controller } from 'react-hook-form';
import RadioGroup from './RadioGroup';
import FullCalendar from './FullCalendar';
import { findNextWorkDay, workday, formatDate } from '@/utils/workday';
import { intimacao, prazos } from '@/data/prazos';



const PrazoCalculator: React.FC = () => {
  const { control, handleSubmit, watch, setValue } = useForm();
  const tipoIntimacao = watch('tipoIntimacao');
  const tipoIntimacaoSelecionada = watch('tipoIntimacaoSelecionada');
  const tipoPrazo = watch('tipoPrazo')

   const onSubmit = (data: any) => {
    const dias = intimacao[tipoIntimacao][tipoIntimacaoSelecionada];
    const prazo = prazos[tipoPrazo]
    const data_intimacao = new Date(data.dataInicial + "T21:00:00")
    const data_cientificacao = new Date(data_intimacao)
    data_cientificacao.setDate(data_cientificacao.getDate() + dias)
    if (!workday(data_cientificacao)) {
      findNextWorkDay(data_cientificacao);
    }

    const termo_inicial = new Date(data_cientificacao)
    findNextWorkDay(termo_inicial);

    const termo_final = new Date(termo_inicial)
    termo_final.setDate(termo_final.getDate() + prazo -1)
    if (!workday(termo_final)) {
      findNextWorkDay(termo_final);
    }

    console.log(data_intimacao, data_cientificacao, termo_inicial, termo_final)
    // Aqui você pode acessar os dados submetidos: data.tipoIntimacao, data.tipoPrazo, data.dataInicial, etc.
    setValue('dataIntimacao', data_intimacao);
    setValue('dataCientificacao', data_cientificacao);
    setValue('termoInicial', termo_inicial);
    setValue('termoFinal', termo_final);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="page-title">Calculadora de Prazo</h1>

      <div className="calculadora">
        <section className='dados'>
          <p className="page-paragraph">
            <label className='page-label'>Escolha o tipo de intimação:</label>
            <Controller
              name="tipoIntimacao"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field}>
                  <option value="">Selecione o tipo de intimação</option>
                  {Object.keys(intimacao).map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              )}
            />
          </p>

          {tipoIntimacao && <RadioGroup tipoIntimacao={intimacao[tipoIntimacao]} control={control} />}

          <p className="page-paragraph">
            <label className='page-label'>Escolha o tipo de prazo:</label>
            <Controller
              name="tipoPrazo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field}>
                  <option value="">Selecione o tipo de prazo</option>
                  {Object.keys(prazos).map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              )}
            />
          </p>

          <p className="page-paragraph">
            <label className='page-label'>Data Inicial:</label>
            <Controller
              name="dataInicial"
              control={control}
              defaultValue=""
              render={({ field }) => <input type="date" {...field} />}
            />
          </p>

          <p className="page-paragraph">
            <button type="submit">Calcular Prazo</button>
          </p>
        </section>
        
        <section className="resultado">

          <h2 className="page-subtitle">Datas Calculadas:</h2>
          {/* Exiba o resultado do cálculo de prazo aqui, se necessário */}
          {watch('dataCientificacao') && ( <p className="page-paragraph">
            <div>
              {/* <p className="page-paragraph">Data da publicação: {watch('dataIntimacao') && watch('dataIntimacao').toLocaleDateString()}</p> */}
              <p className="page-paragraph">Data da Cientificação: {watch('dataCientificacao') && watch('dataCientificacao').toLocaleDateString()}</p>
              <p className="page-paragraph">Termo Inicial: {watch('termoInicial') && watch('termoInicial').toLocaleDateString()}</p>
              <p className="page-paragraph">Termo Final: {watch('termoFinal') && watch('termoFinal').toLocaleDateString()}</p>
              
            </div>

            <FullCalendar
              eventos={[
                { title: 'Intimação', date: formatDate(watch('dataIntimacao')) },
                { title: 'Cientificação', date: formatDate(watch('dataCientificacao')) },
                { title: 'Início', date: formatDate(watch('termoInicial')) },
                { title: 'Fim', date: formatDate(watch('termoFinal')) }
              ]}
            />
          </p>)}
        </section>

      </div>
      


      
      
    </form>
  );
};

export default PrazoCalculator;

