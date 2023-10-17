"use client"

import IntimacaoTable from "@/components/IntimaçãoTable";
import PrazoCalculator from "@/components/PrazoCalculator";
import PrazosTable from "@/components/PrazosTable";

const Page: React.FC = () => {
  
  return (
    <div className="page-body">
      <h1 className="page-title">Tributação e Contencioso</h1>
      <h1 className="page-title">
        Prazos
      </h1>
      <div className="tabela-prazos">
        <IntimacaoTable />
        <PrazosTable />
      </div>
      <PrazoCalculator />
      <div className="page-resumo">
        <h1 className="page-title">Revisão - Nazli</h1>
        <h2 className="page-subtitle">	Módulo I:	</h2>
        <ul className="page-ul">		
        <li>	fontes formais e materiais	</li>
        <li>	cláusulas pétreas	</li>
        <li>	quórum de EC	</li>
        <li>	o processo legislativo compreende a elaboração de (...)	</li>
        <li>	LC: é pedida pela CF; do contrário, não precisa de LC	</li>
        <li>	LC e Lei ordinária não tem hierarquia	</li>
        <li>	LC que não trate de assunto de LC pode ser alterada por lei ordinária	</li>
        <li>	MP muito frequente na área tributária (lembrando do prazo entra em vigor no exercício seguinte etc);	</li>
        <li>	lei delegada é pouco frequente	</li>
        <li>	tratados internacionais dependem de decreto legislativo; revogam a legislação interna (entendimento literal) ou suspendem a eficácia (entendimento mais correto)	</li>
        <li>	normas complementares vinculam os auditores (obs.: decisões só se forem objeto de súmula)	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo II:	</h2>
        <ul className="page-ul">		
        <li>	crédito tributário é definitido pelo STN; entendimento pacífico de que o crédito NÃO é consitutído apenas pelo lançamento (entre as outras formas, a mais comum é a CONFISSÃO DE DÍVIDA)	</li>
        <li>	lançamento é privativo da aut adm, mas a constituição do crédito não	</li>
        <li>	lançamento por declaração totalmente em desuso, mas muito utilizado no passado;	</li>
        <li>	lançamento por homologação é a regra;	</li>
        <li>	lançamento de ofício (muito utilizado como exceção, se houver problemas); lançado de ofício (se contribuinte não declarar/pagar)	</li>
        <li>	se declarou 100, pagou 50 e deveria ter declarado 300: lança de ofício 200; cobra 50	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo III:	</h2>
        <ul className="page-ul">		
        <li>	conceitos básicos (o que é processo, jurisdição, tutela tributária)	</li>
        <li>	pcps muito importantes: devido processo legal e AMPLA DEFESA/CONTRADITÓRIO	</li>
        <li>	Decreto 70.253: saiu como decretolei, mas é pacífico que tem força de lei ordinária; REGULA o PAF	</li>
        <li>	aplicação supletiva do CPC e L9784 só vale pra gente quando a legislação do PAF é silente (ex.: provas); temos muitas normas diferentes do CPC, e o que vale é o que está previsto na legislação do PAF	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo IV:	</h2>
        <ul className="page-ul">		
        <li>	pcps gerais: unidade de jurisdição, contraditório e ampla defesa (é o mais importante), celeridade processual (quanto mais recursos, mais lento o processual), publicidade (ampla e irrestrita ENTRE AS PARTES ENVOLVIDAS, pq para o público em geral há o sigilo fiscal)	</li>
        <li>	pcps específicos: oficialidade, informalidade (formalismo moderado; ex.: desnecessidade de advogado), verdade material, motivação	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo V:	</h2>
        <ul className="page-ul">		
        <li>	processo: ordem cronológica	</li>
        <li>	MUITO IMPORTANTE: comunicação dos atos processuais (pessoal, postal, eletrônico sem ordem; edital se 1 dos outros meios foi improfícuo)	</li>
        <li>	pessoa com recusa: testemunha indicado, mas não obrigatório	</li>
        <li>	postal: qualquer pessoa da residência pode receber (ex.: porteiro)	</li>
        <li>	meio eletrônico: normalmente precisa ser autorizado pelo sujeito passivo, mas em alguns casos não (ex.: SPED, Simples Nacional)	</li>
        <li>	edital: quando improfícuo 1 dos outros meios; considerase cientificado 15 dias dps (ficção jurídica); impresa, repartição ou internet	</li>
        <li>	momento em que se considera efetivada a intimação:	</li>
        <li>	pessoal: assinatura ou declaração da recusa	</li>
        <li>	via postal: recepção ou 15 dias após a data da expedição	</li>
        <li>	meio eletrônico: 15 dias da comprovação de entrega ou data da consulta (se antes do prazo anterior) ou data registrada	</li>
        <li>	edital: 15 dias após publicação	</li>
        <li>	regras de contagem dos prazos	</li>
        <li>	nulidade: declaração é prospectiva; só declara se houver prejuízo	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo VI:	</h2>
        <ul className="page-ul">		
        <li>	3 momentos: fase inquisitória, lançamento, litígio	</li>
        <li>	início do procedimento fiscal: importante marcar esse momento para excluir espontaneidade e consulta	</li>
        <li>	obs.: basta apreender mercadoria ou começar despacho aduaneiro para perder espotaneidade	</li>
        <li>	depois de 60 dias pode recuperar a espontaneidade, mas ainda pode lançar	</li>
        <li>	provas ilícitas não são aceitas no processo	</li>
        <li>	ônus da prova é sempre da Fazenda, exceto nas presunções legais	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo VII:	</h2>
        <ul className="page-ul">		
        <li>	formalização do crédito: AI ou NL	</li>
        <li>	AI feito pelo auditor; NL pela unidade da RFB	</li>
        <li>	despacho aduaneiro: se pagar, pode levar a mercadoria; se não pagar e quiser liberar a mercadoria, precisa prestar garantia	</li>
        <li>	RFFP: notificação ao MP diante de indícios de crime contra a ordem tributária	</li>
        <li>	arrolamento de bens: para impedir que sujeito passivo queira se desfazer do patrimônio (para garantir que haja recuros para pagar posteriormente)	</li>
        <li>	revelia: ausência do contraditório (não comparece ao processo); quando a impugnação é parcial, não se fala em revelia	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo VIII:	</h2>
        <ul className="page-ul">		
        <li>	impugnação instaura o contencioso	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo IX:	</h2>
        <ul className="page-ul">		
        <li>	rito sumário: menos de 60 salários mínimo 2 instâncias	</li>
        <li>	mais de 60 salários mínimos 3 instâncias	</li>
        <li>	não vai se exigir na prova quantas turmas tem em cada DRJ	</li>
        <li>	Cocaj cuida do acervo nacional e distribui entre as DRJs para fazer os julgamentos	</li>
        <li>	livre convicção no julgamento, mas necessário motivação	</li>
        <li>	lançamento complementar é possível	</li>
        <li>	correção de inexatidões materiais: não é mudança de entendimento, mas sim correção de erro	</li>
        <li>	recurso de ofício: mais de R$15Mi ou perdimento de qualquer valor	</li>
        <li>	desistência da impugnação	</li>
        <li>	recurso voluntário (se parcial, aparta os autos)	</li>
        <li>	em qualquer momento, pode revisão de ofício, desde que não tenha sido julgado	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo X:	</h2>
        <ul className="page-ul">		
        <li>	julgamento no Carf (sessões públicas)	</li>
        <li>	embargos de declaração (só Carf ou Câmara Superior)	</li>
        <li>	embargos inominados (inexatidões materiais)	</li>
        <li>	desistência do recurso	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo XI:	</h2>
        <ul className="page-ul">		
        <li>	recurso especial em caso de divergência (prazo de 15 dias; há exame de admissibilidade; parte contrária tem mais 15 dias)	</li>
        <li>	se não foi admitido: agravo (5 dias)	</li>
        <li>	composição do CSRF	</li>
        <li>	importância da Súmula (efeito vinculante)	</li>
        <li>	desistência do recurso	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo XII:	</h2>
        <ul className="page-ul">		
        <li>	definitividade das decisões	</li>
        <li>	obs.: da Câmara Superior é sempre definitiva	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo XIII:	</h2>
        <ul className="page-ul">		
        <li>	outros processos	</li>
        <li>	consulta	</li>
        <li>	consulta sobre classificação de mercadorias	</li>
        <li>	manifestações de inconformidade: rito é igual do PAF	</li>
        <li>	perdimento: prazos diferentes (20 dias)	</li>
        </ul>		
        <h2 className="page-subtitle">	Módulo XIV:	</h2>
        <ul className="page-ul">		
        <li>	ação judicial não impede lançamento	</li>
        <li>	nas ações, sempre pensar nos impactos no processo adm (ex.: suspensão)	</li>
        </ul>		
      </div>
      <a className="page-link" href="https://drive.google.com/drive/folders/1v0283HG5T2gFwuyIF7-SMWWV4iicpQN_?usp=sharing" target="_blank" rel="noopener noreferrer">Material de Apoio</a>
    </div>
    );
   
};

export default Page;