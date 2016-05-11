var mongoose = require('mongoose'),
	pagination = require('mongoose-paginate'),
	friendlyUrl = require('friendly-url'),
	Schema = mongoose.Schema;

var PostSchema = new Schema ({
	title: String,
	url: String,
	body: String,
	img: String,
	tiny: String
}, { timestamps: true });

PostSchema.plugin(pagination);

PostSchema.pre('save', function(next) {
	this.url = friendlyUrl(this.title);

	next();
});

mongoose.model('Post', PostSchema);


/* Registrar posts */
var Post = mongoose.model('Post');

/*
nPost = new Post();
nPost.title = 'Saiba como ser aprovado no ENEM';
nPost.tiny = '<p>Você está querendo ser aprovado no <b>ENEM</b> e procura pelas <b>melhores dicas</b> sobre o tema na internet? Nós podemos te ajudar!</p>';
nPost.body = '<h2>Saiba como ser aprovado no ENEM</h2> <p>Você está querendo ser aprovado no ENEM e procura pelas melhores dicas sobre o tema na internet? Nós podemos te ajudar!</p> <p>Somos um blog que acredita que, com as ferramentas e dicas certas, é possível fazer com que você se torne apto para prestar a prova do ENEM e conseguir atingir nota suficiente para atingir seu grande objetivo: ser aprovado!</p> <p>O nosso objetivo é trazer conteúdo diário que faça a diferença na sua rotina de estudos, além de ensinar como relaxar e evitar que a ansiedade te derrube.  Através de textos curtos e diretos, com ideias que são facilmente aplicadas no seu dia a dia, as suas chances de sucesso serão ainda maiores. </p> <p>Quer participar do blog contando como foi a sua experiência de estudos e compartilhar com pessoas que ainda estão tentando descobrir qual a melhor maneira de estudar? Se inscreva e entre em contato, o seu depoimento pode ajudar a mudar o jeito de entender as matérias de vários estudantes no Brasil. </p>';
nPost.img = 'img_post01.png';
nPost.save();

nPost = new Post();
nPost.title = 'Os 3 melhores professores de matemática do Youtube';
nPost.tiny = '<p>Quer sabem quais são os 3 melhores professosres de matemática do Youtube? Aqui você encontra as melhores dicas para mandar super bem em <b>matemática no ENEM</b></p>';
nPost.body = '<p>Não é novidade para ninguém que a <b>matemática é uma das matérias mais temidas</b> pela grande maioria dos alunos. De acordo o Ibope, 77% dos brasileiros não dominam sequer habilidades matemáticas básicas utilizadas no dia a dia.</p> <p>Se esse é o seu caso, não entre em pânico! Existem vários professores de matemática fazendo vídeos no youtube com diversas abordagens diferentes, basta descobrir <b>qual é o método que melhor funciona para você.</b> </p> <h3><a href="https://www.youtube.com/user/professorferretto/featured">Professor Farretto</a></h3> <p>Com mais de 370 mil inscritos, o canal do Professor Ferretto no Youtube é totalmente voltado para explicar e resolver questões matemáticas no estilo das <b>elaboradas pelo MEC para o ENEM</b>. Ferretto também faz vídeo aulas de matérias comuns em cursos universitários da área de exatas, como Cálculo 1, que deixa até os amantes da matemática de cabelo em pé. </p> <h3><a href="https://www.youtube.com/user/matematicario">Matemática Rio com Prof. Rafael Procópio</a></h3> <p>Com mais de 370 mil inscritos, o canal do Professor Ferretto no Youtube é totalmente voltado para explicar e resolver questões matemáticas no estilo das <b>elaboradas pelo MEC para o ENEM</b>. Ferretto também faz vídeo aulas de matérias comuns em cursos universitários da área de exatas, como Cálculo 1, que deixa até os amantes da matemática de cabelo em pé. </p> <h3><a href="https://www.youtube.com/user/GuiMRosa">Matemática em Exercícios com o professor Gui</a></h3> <p>O professor Gui também posta vídeo aulas ensinando desde a matemática básica a mais complexa. O seu diferencial é o bom humor e os vídeos mais curtos e objetivos, mas o que faz dele um <b>professor de destaque são as paródias de músicas que te ajudarão a decorar qualquer matéria, como essa em que usa a música Let it Be, dos Beatles, para falar de razões trigonométricas.</b> <a href="https://www.youtube.com/watch?v=ShonRNx2vf4">Confira!</a> </p> <p><b>Dica amiga:</b> como matemática é uma matéria cumulativa, ou seja, o que você aprende hoje vai ser fundamental para entender coisas mais complexas no futuro, procure pelo seu professor e peça para que ele te ajuda a descobrir exatamente qual foi a primeira matéria que você não aprendeu direito no passado, é provável que a sua dificuldade tenha começado exatamente naquele momento.</p>';
nPost.img = 'img_post02.png';
nPost.save();

nPost = new Post();
nPost.title = '5 dicas para não chegar atrasado no dia do ENEM!';
nPost.tiny = '<p>Todos só sabemos que chegar atrasado no dia ENEM, significa a desclassificação do candidato.<br/> Mas então por que tantas pessoas ainda chegam atrasadas e perdem a prova?</p>';
nPost.body = '<p>Todos só sabemos que chegar atrasado no dia ENEM, significa a desclassificação do candidato.<br/> Mas então por que tantas pessoas ainda chegam atrasadas e perdem a prova?<br/> Porque elas não planejam direito e sofrem imprevistos.<br/> Confira nossas dicas e não cometa esse erro!</p> <p><b>1. Planeje o seu dia</b><br/><br/> Se você for uma pessoa que sempre se atrasa para algo, precisa programar corretamente o seu dia, principalmente para o ENEM.<p> <p><b>2. Verifique o trajeto</b><br/><br/> Perto da data das provas, passe pelo trajeto que deverá percorrer para chegar no local de provas. Seja de ônibus, caminhando, táxi ou de carona, você já deve saber quando tempo pode durar e caso seja em lugares que o trânsito sempre garra, sair muito mais cedo! Não se esqueça que aos sábados e domingos os horários dos ônibus são alterados e isso pode te atrapalhar muito.</p> <p><b>3. Não durma até tarde no dia anterior às provas</b><br/><br/> Isso pode atrapalhar e muito! Você terá dormido pouco e ficará cansado, consequentemente pode levantar atrasado e estragar todo o seu planejamento. Além do que, fará a prova com o físico abalado. Durma bem nos dias próximos à prova, não exceda seu limite.</p> <p><b>4. Muitos alarmes e lembretes</b><br/><br/> Coloque vários alarmes e até de outros celulares para que não corra o risco de perder a hora! Se não acordar no horário programado, também irá estragar seu planejamento e todo seu dia.</p> <p><b>5. Chegue adiantado</b><br/><br/> Parece óbvio, mas acredite, muitas pessoas não fazem isso! Acha que ficar 1 hora esperando é pior do que perder a prova e ficar mais um ano sem essa oportunidade? Claro que não! As pessoas fazem fila e dormem em locais de shows, por que seria diferente para o ENEM que significa o seu futuro? Não cometa esse erro, garanta o seu dia de prova mesmo que precise ficar esperando.</p> <p>-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --</p> <p>Se você realmente sabe que seu futuro depende da sua pontuação do ENEM, não irá chegar atrasado! Não vai querer ter a sensação daqueles que até passam mal por não conseguir entrar, não é? E ainda aparecer na televisão por isso!</p> <p>Então basta seguir nossas dicas e você não terá problema!<br/> Confie e acredite no seu potencial sempre e poderá chegar longe.</p> <p>Assine nosso BLOG e receba mais dicas exclusivas.</p> <p>Tenha a certeza de ser Aprovado no ENEM com nossas dicas!</p>';
nPost.img = 'img_post03.png';
nPost.save();


nPost = new Post();
nPost.title = '4 formas comprovadas de ser mais produtivo nos estudos';
nPost.tiny = '<p>Saiba como aproveitar bem o seu tempo de estudo, aprendendo a ser mais produtivo</p>';
nPost.body = '';
nPost.img = 'img_post05.png';
nPost.save();


nPost = new Post();
nPost.title = '8 regras de uso de hífen que você precisa saber';
nPost.tiny = '<p>Saiba, de uma vez por todas, como ficou o uso do hífen após o início da reforma ortográfica</p>';
nPost.body = '<p>Depois de três anos de atraso, a <b>reforma ortográfica finalmente começou a valer no início de 2016</b>. Para melhor entendê-las, <b>elaboramos as oito regras de uso de hífen mais importantes</b> das quais você precisa saber para não cometer erros bobos na redação do ENEM. </p><p>As observações a seguir referem-se ao uso do hífen em palavras formadas por prefixos ou por elementos que podem funciona como prefixos, exemplo:</p><p>aero, agro, além, antes, anti, aquém, arqui, auto, circum, co, contra, eletro, entre, ex, extra, geo, hidro, hiper, infra, inter, intra, macro, micro, mini, multi, neo, pan, pluri, proto, pós, pré, pró, pseudo, retro, semi, sobre, sub, super, supra, tele, ultra, vice.</p><p><b>1. Com prefixos, usa-se sempre o hífen diante de palavra iniciada por h. Exemplos:</b><br/><br/>Anti-higiênico, anti-histórico, co-herdeiro, macro-história, mini-hotel, sobre-humano, super-homem, ultra-humano<br />Exceção: des/ in = desumano / inábil (nesse caso, as palavras humano e hábil perdem o H.</p><p><b>2. Não se usa o hífen quando o prefixo termina em vogal diferente da vogal com que se inicia o segundo elemento. Exemplos:</b><br/><br/>Aeroespacial, agroindustrial, anteontem, antiaéreo, antieducativo, autoaprendizagem, autoescola, autoestrada, autoinstrução, coautor, coedição, extraescolar, infraestrutura, semiaberto, semianalfabeto, semiopaco.</p><p><b>3. Não se usa o hífen quando o prefixo termina em vogal e o segundo elemento começa por consoante diferente de r ou s.</b><br/><br/>Anteprojeto, antipedagógico, autopeça, autoproteção, coprodução, geopolítica, microcomputador, pseudoprofessor, semicírculo, semideus, seminovo, ultramoderno.</p><b>Atenção: com o profixo vice, usa-se sempre o hífen.</b>Exemplo: vice-rei, vice-presidente<p><b>4. Não se usa o hífen quando o prefixo termina em vogal e o segundo elemento começa por r ou s. Nesse caso, duplicam-se essas letras.</b><br/><br/>Antirrábico, antirracismo, antirreligioso, antirrugas, antissocial, biorritmo, contraregra, contrassenso, cosseno, infrassom, microssistema, minissaia, multissecular, neorrealismo, neossimbolista, semirreta, ultrarresistente, ultrassom.</p><p><b>5. Quando o prefixo termina por vogal, usa-se o hífen se o segundo elemento começar pela mesma vogal.</b><br/><br/>Anti-ibérico, anti-imperialista, anti-inflacionário, anti-inflamatório, auto-observação, contra-ataque, semi-interno</p><p><b>6. Quando o prefixo termina por consoante, usa-se o hífen se o segundo elemento começar pela mesma consoante.</b><br/><br/>Hiper-requintado, inter-racial, inter-regional, super-racista, super-romântico, super-resistente, sub-bibliotecário</p><p><b>7. Quando o prefixo termina por consoante, não se usa hífen se o segundo elemento começa por vogal.</b><br/><br/>Hiperacidez, hiperativo, interescolar, interestadual, superamigo, superaquecido</p><p><b>8. Com os prefixos ex, sem, além, aquém, recém, pós, pré, pró, sota, soto, usa-se sempre hífen.</b><br/><br/>Além-mar, ex-aluno, ex-diretor, pós-graduação, pré-história, pré-vestibular, recém-casado<br/>Vale lembrar que, as duas melhores maneiras de memorizar as novas regras é fazendo diversos exercícios e, claro, lendo diariamente livros, revistas e jornais. </p>';
nPost.img = 'img_post04.png';
nPost.save();

*/


console.log("PostSchema carregado.");
