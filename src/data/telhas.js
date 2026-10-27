// Dados reais extraídos do site oficial (github.com/mars0103/pinfermetalurgica)
export const WHATSAPP_NUMBER = '5541988887664'

export const ESPESSURAS = ['0,43', '0,50', '0,65']

const PRE_PINTURA = [
  { hex: '#003399', label: 'Azul', ral: 'Ral 5010' },
  { hex: '#1a1a1a', label: 'Preto', ral: 'Ral 9004' },
  { hex: '#e55000', label: 'Laranja', ral: 'CSN 099' },
  { hex: '#8b1a1a', label: 'Vermelho', ral: 'Ral 3000 coca' },
  { hex: '#1a4a1a', label: 'Verde', ral: 'Ral 6002' },
  { hex: '#c0c0c0', label: 'Prata', ral: 'Ral 9006' },
  { hex: '#9ea8b0', label: 'Cinza', ral: 'Ral 7035' },
  { hex: '#d4a000', label: 'Amarelo', ral: 'Ral 1023' },
  { hex: '#f5f4f0', label: 'Branco', ral: 'Ral 9003' },
  { hex: '#8b5a2b', label: 'Marrom', ral: 'Ral 8023 (Cerâmica)' },
]
export const CORES = [{ hex: '#b8b8b8', label: 'Galvalume', ral: 'Natural' }, ...PRE_PINTURA]

export const VANTAGENS = [
  'Isolamento térmico e acústico',
  'Não absorção de água',
  'Fácil instalação',
  'Variedade de cores',
  'Economia na estrutura da cobertura',
  'Material de qualidade',
  'Dispensa necessidade de forro',
  'Excelente desenho arquitetônico',
  'Alta resistência a impactos',
  'Economia de energia elétrica na climatização',
  'Maior durabilidade',
  'Telhas na medida de sua obra',
]

export const METRICAS = [
  { value: 10, suffix: '', label: 'anos de mercado' },
  { value: 5000, suffix: '', label: 'clientes atendidos' },
  { value: 1500, suffix: '', label: 'projetos entregues' },
  { value: 25, suffix: ' mil', label: 'toneladas produzidas' },
]

const APLIC_TP = 'Residencial, empresarial e industrial; também como tapume de obras.'

// cores: true = o site oficial oferece escolha de cor (pré/pós-pintura) para esse modelo
// kg: peso por metro linear (kg/m), na ordem de ESPESSURAS (ou de `espessuras`, quando existir)
export const TELHAS = [
  {
    id: 'tp40', cores: true, modelo3d: 'models/tp40.glb', nome: 'Trapezoidal 40', grupo: 'Metálicas', img: 'assets/tp33.png',
    kg: ['3,87', '4,50', '5,96'], revest: 'Zincalume / Galvalume',
    desc: 'Diversas aplicações, com economia, longa vida útil e facilidade na instalação.',
    aplic: APLIC_TP,
  },
  {
    id: 'tp25', cores: true, modelo3d: 'models/tp25.glb', nome: 'Trapezoidal 25', grupo: 'Metálicas', img: 'assets/tp25.png',
    kg: ['3,87', '4,50', '5,70'], revest: 'Zincalume / Galvalume',
    desc: 'Diversas aplicações, com economia, longa vida útil e facilidade na instalação.',
    aplic: APLIC_TP,
  },
  {
    id: 'tp33', cores: true, modelo3d: 'models/tp33.glb', nome: 'Trapezoidal 33', grupo: 'Metálicas', img: 'assets/tp33(1).png',
    kg: ['3,87', '4,50', '5,70'], revest: 'Zincalume / Galvalume',
    desc: 'Diversas aplicações, com economia, longa vida útil e facilidade na instalação.',
    aplic: APLIC_TP,
  },
  {
    id: 'tp100', nome: 'Trapezoidal 100', grupo: 'Metálicas', img: 'assets/tp33.png',
    kg: ['3,60', '4,30', '5,65'], revest: 'Zincalume / Galvalume',
    desc: 'Indicada para grandes vãos e coberturas de grande porte.',
    aplic: 'Residencial, comercial e industrial, com alta resistência estrutural.',
  },
  {
    id: 'ondulada', nome: 'Ondulada', grupo: 'Metálicas', img: 'assets/telhaondulada.png',
    kg: ['3,87', '4,50', '5,70'], revest: 'Zincalume / Galvalume',
    desc: 'Flexibilidade para curvaturas, com ótimo desempenho em coberturas.',
    aplic: 'Fechamentos laterais e fachadas metálicas de edifícios industriais e comerciais.',
  },
  {
    id: 'colonial', coresNota: 'Fabricamos nas cores solicitadas. Consulte nosso time comercial.', nome: 'Colonial', grupo: 'Metálicas', img: 'assets/telhametalicacolonial.png',
    kg: ['3,60', '4,30', '5,65'], revest: 'Zincalume / Galvalume',
    desc: 'Estética colonial, instalação rápida e fácil, contínua e sem emendas. Dispensa laje ou forro.',
    aplic: 'Residências, em larga escala.',
  },
  {
    id: 'lambril', nome: 'Lambril Contínuo', grupo: 'Metálicas', img: 'assets/lambrilcontinuo.png',
    kg: ['3,87'], espessuras: ['0,43'], revest: 'Zincalume / Galvalume',
    desc: 'Produzido no comprimento que o cliente desejar.',
    aplic: 'Portões e fechamentos laterais de galpões, indústrias e residências.',
  },
  {
    id: 'termo-simples', nome: 'Termoacústica Simples', grupo: 'Termoacústicas', img: 'assets/termoacusticasimples.png',
    eps: ['30', '50', '100'], perfis: ['TP 40', 'TP 33', 'TP 25', 'Ondulada', 'Colonial'],
    desc: 'Opção prática e econômica, com isolamento térmico e acústico e estrutura mais leve.',
    aplic: 'Residencial, empresarial ou industrial. Excelente custo-benefício.',
  },
  {
    id: 'termo-dupla', cores: true, modelo3d: 'models/telhado(1).glb', nome: 'Termoacústica Dupla', grupo: 'Termoacústicas', img: 'assets/termoacusticadupla.png',
    eps: ['30', '50', '100'], perfis: ['TP 40', 'TP 33', 'TP 25', 'Ondulada'],
    desc: 'Estrutura sanduíche: EPS entre duas chapas de aço. Máximo conforto térmico e acústico.',
    aplic: 'Residencial, empresarial ou industrial.',
  },
  {
    id: 'termo-filme', nome: 'Termoacústica com Filme', grupo: 'Termoacústicas', img: 'assets/termoacusticafilme.png',
    eps: ['30', '50', '100'], perfis: ['TP 40', 'TP 33', 'TP 25', 'Ondulada', 'Colonial'],
    desc: 'Filme na face inferior: acabamento limpo, protege o núcleo isolante e aumenta a durabilidade.',
    aplic: 'Residencial, empresarial ou industrial.',
  },
  {
    id: 'termo-bandeja', nome: 'Termoacústica Bandeja', grupo: 'Termoacústicas', img: 'assets/termoacusticabandeja.png',
    eps: ['30', '50'], perfis: ['TP 40'],
    desc: 'Acabamento diferenciado, alta durabilidade e excelente desempenho estrutural.',
    aplic: 'Residencial, comercial e industrial; também painéis de câmaras frias.',
  },
]

export const FAQ = [
  { q: 'Vocês fazem telhas personalizadas?', a: 'Sim! Fabricamos telhas em medidas e espessuras customizadas conforme a necessidade do seu projeto. Entre em contato com nosso time comercial para solicitar um orçamento personalizado.' },
  { q: 'Qual é o prazo de entrega?', a: 'O prazo varia conforme a quantidade e especificações do pedido. Em geral, trabalhamos com prazos de 5 a 15 dias úteis após confirmação do pedido.' },
  { q: 'Vocês entregam em todo o Brasil?', a: 'Atendemos principalmente Paraná e Santa Catarina, mas para grandes volumes também atendemos outros estados. Consulte nosso time comercial para mais informações.' },
  { q: 'Qual a diferença entre Zincalume e Galvalume?', a: 'Ambos são revestimentos metálicos de alta durabilidade. O Galvalume (Al-Zn) oferece maior resistência à corrosão, enquanto o Zincalume possui composição similar com excelente desempenho em ambientes expostos.' },
  { q: 'A telha tem garantia?', a: 'Sim. Nossas telhas possuem garantia de fabricação conforme normas ABNT vigentes. Consulte as condições completas com nossa equipe técnica.' },
]

// Fichas das telhas termoacústicas (dados fornecidos pela Pinfer)
const ESP_ACO = '0,43 mm / 0,50 mm / 0,65 mm'
const NUCLEO = 'EPS ou PIR (30 mm e 50 mm)'
const tp40 = (uteis) => [
  ['Largura útil', uteis],
  ['Largura total', '1035 mm'],
  ['Altura do trapézio', '40 mm'],
  ['Espessura do aço', ESP_ACO],
  ['Núcleo isolante', NUCLEO],
]
const colonial = () => [
  ['Largura útil', '910 mm (Colonial)'],
  ['Largura total', '1030 mm'],
  ['Altura da onda', '35 mm'],
  ['Espessura do aço', ESP_ACO],
  ['Núcleo isolante', NUCLEO],
]
const manta = ['Manta térmica', 'Alumínio']

export const TERMOS = [
  { id: 'simples', nome: 'Termoacústica Simples', img: 'assets/termoacusticasimples.png', specs: tp40('980 mm') },
  { id: 'simples-manta', nome: 'Termoacústica Simples com manta térmica', img: 'assets/termoacusticafilme.png', specs: [...tp40('980 mm (TP 40)'), manta] },
  { id: 'sanduiche', nome: 'Termoacústica Sanduíche', img: 'assets/termoacusticadupla.png', specs: tp40('980 mm (TP 40)') },
  { id: 'colonial-manta', nome: 'Termoacústica Colonial com manta térmica', img: 'assets/telha-colonial-manta.png', specs: [...colonial(), manta] },
  { id: 'bandeja', nome: 'Termoacústica Bandeja', img: 'assets/termoacusticabandeja.png', specs: tp40('980 mm (TP 40)') },
  { id: 'colonial-bandeja', nome: 'Termoacústica Colonial Bandeja', img: 'assets/telha-colonial-bandeja.png', specs: colonial() },
]
