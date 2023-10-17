interface IntimacaoOptions {
    [key: string]: TipoIntimacao;
  }
  
  interface TipoIntimacao {
    [key: string]: number;
  }

const intimacao: IntimacaoOptions = {
    pessoalmente: {
      assinado: 0,
      recusa: 0,
    },
    AR: {
      'Com data': 0,
      'Sem data': 15,
    },
    eletronico: {
      'Não leitura': 15,
      'Com leitura': 0,
      'Meio magnetico': 0,
    },
    edital: {
      'Comum': 15,
      'Perdimento': 30,
    },
    'Simples Nacional': {
        'Com leitura': 0,
        'Não Leitura': 45,
    }
  };

  const prazos: TipoIntimacao = {
    'Atos processuais pelo fisco': 8,
    'Atos processuais solicitados de outra autoridade fiscal': 30,
    'Execução dos trabalhos de fiscalização': 120,
    'A recuperação da espontaneidade por inoperância do fiscal': 60,
    'Pagamento ou Impugnacão de auto infração': 30,
    'Contraditório sobre documentos juntados': 30,
    'Cobrança amigável': 30,
    'Recurso voluntário': 30,
    'Requisição de processos pela fazenda nacional': 15,
    'Contrarrazões ao recurso voluntário': 30,
    'Embargos de Declaração para esclarecer contradição ou omissão': 5,
    'Interposição do recurso especial': 15,
    'Contrarrazões ao recurso especial': 15,
    'Agravo ao despacho que não recebe recurso especial': 5,
    'Pagamento após a consulta': 30,
    'Recurso especial em consulta quando há divergência de conclusões': 30,
    'Manifestação de inconformidade por não reconhecimento de pedido': 30,
    'Impugnação a aplicação de pena de perdimento': 20,
    'Recurso Perdimento': 20
  };

  export {intimacao, prazos}