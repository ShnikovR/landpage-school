/**
 * Horta educativa — EEEI Prof. Anymoré do Brasil
 *
 * ONDE EDITAR DEPOIS:
 * 1) Imagens das plantações  → campo `imagem` em PLANTACOES
 *    (ou coloque arquivos em imagens/plantacoes/ e use o caminho local)
 * 2) Novas plantações        → acrescente um objeto em PLANTACOES
 * 3) Arquivos de música      → campo `audio` em MUSICAS (ex.: "musicas/nome.mp3")
 * 4) Tópico B / planta baixa → substitua imagens/localizacao/planta-baixa-horta.png
 *    ou altere o caminho em LOCALIZACAO_IMAGEM
 * 5) Foto da escola          → imagens/escola/fachada.jpg
 */

/* -------------------------------------------------------------------------- */
/* Tópico B — Planta baixa da horta (imagem original da escola).              */
/* Para atualizar: troque o arquivo PNG na pasta abaixo, mantendo o nome,     */
/* ou aponte LOCALIZACAO_IMAGEM para o novo arquivo.                          */
/* -------------------------------------------------------------------------- */
const LOCALIZACAO_IMAGEM = "imagens/localizacao/planta-baixa-horta.png";

const PLANTACOES = [
  {
    id: "alface",
    nome: "Plantação de alface",
    emoji: "🥬",
    imagem:
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=1400&q=80",
    explicacao:
      "A alface é uma hortaliça de folhas verdes, crocantes e leves. Na horta da escola ela cresce rápido e ajuda a merenda e as aulas de ciências.",
    plantio:
      "Pode nascer de semente ou de muda. A semente fica bem pertinho da superfície. Deixe um espaço entre uma planta e outra para as folhas se abrirem.",
    crescimento:
      "Em poucos dias aparecem as primeiras folhinhas. A planta forma uma “roseta”: as folhas novas nascem no centro e as de fora ficam maiores.",
    agua: "Rega frequente, solo sempre úmido. Evite encharcar.",
    sol: "Gosta de sol da manhã e pode preferir meia-sombra no calor forte.",
    solo: "Terra fofa, rica em matéria orgânica e com boa drenagem.",
    cuidados:
      "Não deixe o solo secar. Retire folhas amareladas e o mato ao redor para a alface não competir por água e luz.",
    pragas:
      "Lesmas, caracóis e pulgões gostam das folhas. Observe de manhã e retire com cuidado, sem usar veneno na horta da escola.",
    manutencao:
      "Afofe a terra com jeito, mantenha o canteiro limpo e colha as folhas de fora primeiro, se quiser que a planta continue crescendo.",
    colheita:
      "Em cerca de 30 a 50 dias, quando as folhas estiverem grandes e tenras, antes de o miolo “armar” para semente.",
    curiosidade:
      "A alface é quase toda água. Por isso ela murcha rápido no sol quente e “revive” quando a terra está úmida de novo.",
  },
  {
    id: "tomate",
    nome: "Plantação de tomate",
    emoji: "🍅",
    imagem:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1400&q=80",
    explicacao:
      "O tomate é um fruto suculento que nasce em plantas altas. Na horta escolar ele ensina paciência: primeiro vêm as flores, depois os frutos verdes, e só então o vermelho da colheita.",
    plantio:
      "Costuma ir para o canteiro já em muda. Cave um buraco um pouco fundo, acomode as raízes e aperte a terra ao redor. Deixe espaço para a planta crescer para cima.",
    crescimento:
      "O tomateiro sobe e precisa de tutor (estaca ou amarre macio). Depois das flores, nascem tomatinhos verdes que amadurecem aos poucos.",
    agua: "Rega regular na terra, sem molhar demais as folhas. Não deixe o solo secar por muitos dias.",
    sol: "Precisa de bastante sol — várias horas por dia.",
    solo: "Solo fértil, soltinho e que não fique encharcado.",
    cuidados:
      "Amarre o caule com fita macia para não quebrar. Tire brotos demais se a planta ficar muito fechada, para o ar circular.",
    pragas:
      "Pulgões, lagartas e fungos nas folhas (manchas) são comuns. Folhas doentes devem ser retiradas. Evite molhar a folhagem à noite.",
    manutencao:
      "Verifique o tutor, retire folhas baixas que tocam o chão e observe se os frutos estão recebendo luz.",
    colheita:
      "Em geral de 70 a 100 dias após o plantio da muda, quando o fruto estiver vermelho (ou bem colorido) e um pouco macio ao toque.",
    curiosidade:
      "O tomate é botanicamente um fruto, mesmo sendo usado como verdura na cozinha. As flores amarelinhas são o recado de que a colheita está a caminho.",
  },
  {
    id: "cenoura",
    nome: "Plantação de cenoura",
    emoji: "🥕",
    imagem:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1400&q=80",
    explicacao:
      "A cenoura esconde o tesouro debaixo da terra: a raiz laranja que comemos. Em cima ficam folhas verdes. É uma ótima planta para aprender que nem tudo que importa aparece na superfície.",
    plantio:
      "Semeie direto no canteiro, em sulcos rasos. Cubra com uma camada fininha de terra. Quando nascer, desbaste (retire algumas plantinhas) para as raízes terem espaço.",
    crescimento:
      "As folhas crescem para cima enquanto a raiz engrossa embaixo. Não puxe para “espiar”: isso pode quebrar a cenoura.",
    agua: "Rega constante e suave. O solo não pode virar pedra nem lama.",
    sol: "Gosta de sol pleno, pelo menos algumas horas boas de luz.",
    solo: "Terra solta, sem pedras, para a raiz crescer reta e comprida.",
    cuidados:
      "Mantenha o canteiro limpo de mato. Evite terra dura na superfície. Não compacte o canteiro pisando em cima.",
    pragas:
      "Lagartas nas folhas e, às vezes, bichinhos na raiz. Folhas muito comidas pedem observação diária.",
    manutencao:
      "Regue com cuidado para não descobrir as sementes. Depois de nascer, só desbaste e mantenha a terra fofa nas laterais.",
    colheita:
      "Por volta de 70 a 90 dias, quando os “ombros” da raiz aparecerem um pouco na terra e tiverem boa espessura.",
    curiosidade:
      "Cenouras antigas nem sempre eram laranja. A cor que conhecemos ficou famosa com o tempo — e o laranja vem de uma substância que faz bem para a visão.",
  },
  {
    id: "couve",
    nome: "Plantação de couve",
    emoji: "🥦",
    imagem: "imagens/plantacoes/couve.jpg",
    explicacao:
      "A couve (muito comum a couve-manteiga) tem folhas grandes e nutritivas. Na escola ela ensina colheita contínua: a planta pode ir doando folhas sem ser arrancada inteira.",
    plantio:
      "Vai bem de muda. Plante com a terra na altura do caule, sem enterrar o miolo. Deixe espaço, porque as folhas abrem bastante.",
    crescimento:
      "O caule sobe devagar e novas folhas nascem no alto. As de baixo ficam maiores e podem ser colhidas primeiro.",
    agua: "Gosta de terra úmida. Regue com regularidade, principalmente no calor.",
    sol: "Sol pleno ou bastante claridade. Tolera um pouco de meia-sombra.",
    solo: "Solo fértil, rico em matéria orgânica.",
    cuidados:
      "Retire folhas muito velhas ou doentes. Observe o miolo: ele precisa de luz e ar para continuar produzindo.",
    pragas:
      "Lagartas e pulgões adoram couve. Olhe o verso das folhas. Na horta escolar, o melhor é retirada manual e plantas companheiras, nunca veneno.",
    manutencao:
      "Visite o canteiro com frequência, porque as lagartas aparecem rápido. Mantenha o pé firme e o solo alimentado.",
    colheita:
      "As primeiras folhas podem sair em cerca de 60 a 80 dias. Colha as folhas de fora, deixando o centro para a planta seguir viva.",
    curiosidade:
      "A couve é parente do brócolis e da couve-flor. São “irmãs” da mesma família, só que cada uma foi cuidada pelos agricultores de um jeito diferente.",
  },
  {
    id: "cebolinha",
    nome: "Plantação de cebolinha",
    emoji: "🌱",
    imagem:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1400&q=80",
    explicacao:
      "A cebolinha forma tufos de folhas finas e cheirosas. É perfeita para a horta da escola porque ocupa pouco espaço e pode ser colhida várias vezes.",
    plantio:
      "Pode nascer de semente ou da divisão de um tufo já crescido. Plante em grupo, com a base um pouco enterrada e a terra apertada suavemente.",
    crescimento:
      "As folhas verdes sobem como canudinhos. Com o tempo o tufo engrossa e pode ser separado em mudas novas.",
    agua: "Rega moderada. A terra deve ficar úmida, sem poça.",
    sol: "Sol pleno ou meia-sombra clara.",
    solo: "Terra fofa e fértil, que escorra bem a água extra.",
    cuidados:
      "Não deixe o tufo sufocado por mato. Se as folhas tombarem demais, talvez esteja faltando sol ou sobrando água.",
    pragas:
      "Em geral é resistente. Às vezes aparecem pulgões. Um jato suave de água nas folhas pode ajudar.",
    manutencao:
      "Corte as folhas mais altas com tesoura limpa, sempre deixando a base. Assim a planta rebrota.",
    colheita:
      "A partir de 40 a 60 dias. Corte alguns centímetros acima da terra, nunca arranque o pé inteiro se quiser nova safra.",
    curiosidade:
      "O cheiro da cebolinha vem de compostos de enxofre — os mesmos “parentes” químicos que fazem a cebola arder nos olhos, só que bem mais suaves.",
  },
  {
    id: "salsa",
    nome: "Plantação de salsa",
    emoji: "🌿",
    imagem: "imagens/plantacoes/salsa.jpg",
    explicacao:
      "A salsa tem folhas recortadas e aroma fresco. Ela é um tempero clássico e também um exercício de observação: demora um pouco para germinar, mas depois rende muitas colheitas.",
    plantio:
      "Semeie em terra úmida, cobrindo pouco. A germinação pode levar mais de duas semanas — paciência faz parte da aula.",
    crescimento:
      "Nascem folhinhas miúdas que depois ficam mais recortadas. A planta forma um ramalhete baixo e verde.",
    agua: "Gosta de umidade constante. Não deixe a terra virar pó.",
    sol: "Meia-sombra ou sol da manhã. Sol muito forte o dia todo pode queimar as folhas.",
    solo: "Solo rico, úmido e bem drenado.",
    cuidados:
      "Não cubra demais as sementes. Depois de nascer, desbaste se estiver apertada e retire ervas concorrentes.",
    pragas:
      "Pulgões e, às vezes, lagartas. Folhas amareladas demais podem indicar excesso de água ou falta de nutrientes.",
    manutencao:
      "Colha os ramos de fora e deixe o centro. Se a planta começar a “espigar” (haste alta com flor), a folha pode ficar mais amarga.",
    colheita:
      "Em torno de 60 a 90 dias após a germinação, quando os ramos estiverem bem formados.",
    curiosidade:
      "A salsa é rica em vitaminas nas folhas. Na cozinha brasileira ela quase sempre anda de mãos dadas com a cebolinha — o famoso cheiro-verde.",
  },
  {
    id: "hortela",
    nome: "Plantação de hortelã",
    emoji: "🍃",
    imagem:
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=1400&q=80",
    explicacao:
      "A hortelã é uma erva aromática de folhas dentadinhas e cheiro de hortelã-pimenta ou menta. Ela cresce com vontade — por isso na escola é bom dar um limite ao canteiro.",
    plantio:
      "Vai muito bem de muda ou de um pedaço de ramo. Plante em um espaço controlado, porque os ramos subterrâneos (estolões) se espalham.",
    crescimento:
      "Sobe em hastes e se alarga pelo chão. Em pouco tempo cobre a terra se ninguém orientar o crescimento.",
    agua: "Gosta de terra sempre úmida. Não resiste bem à seca.",
    sol: "Meia-sombra é ideal; sol forte o dia todo pode ressecar as folhas.",
    solo: "Solo úmido, fértil e que não fique encharcado o tempo todo.",
    cuidados:
      "Pode as pontas para a planta ficar mais cheinha. Separe um limite no canteiro para ela não “invadir” os vizinhos.",
    pragas:
      "Ferrugem e ácaros às vezes aparecem. Folhas manchadas devem ser retiradas. Evite folhas sempre molhadas à noite.",
    manutencao:
      "Regue com frequência, colha os ramos altos e observe se está saindo do espaço combinado da horta.",
    colheita:
      "Pode começar em 30 a 50 dias. Colha de manhã, quando o aroma está mais forte, cortando ramos e não arrancando a raiz.",
    curiosidade:
      "O cheiro da hortelã vem do mentol. Por isso ela parece “fresca” até no chá quente — o nariz e a boca sentem uma brisa.",
  },
  {
    id: "manjericao",
    nome: "Plantação de manjericão",
    emoji: "🌿",
    imagem: "imagens/plantacoes/manjericao.jpg",
    explicacao:
      "O manjericão é um tempero de folhas macias e perfume doce. Na horta educativa ele mostra como uma poda bem feita deixa a planta mais forte e ramificada.",
    plantio:
      "Semente ou muda. Plante depois que o frio forte passar, em local claro. Aperte a terra ao redor da muda sem enterrar as folhas.",
    crescimento:
      "Cresce em haste com pares de folhas. Se cortar a ponta, nascem dois galhos no lugar de um — a planta fica redonda e produtiva.",
    agua: "Rega regular. A terra úmida é boa; o encharcamento apodrece a raiz.",
    sol: "Muito sol. É uma planta de calor e luz.",
    solo: "Solo fértil, solto e bem drenado.",
    cuidados:
      "Retire os botões de flor se quiser mais folhas (a flor é bonita, mas a planta investe nela em vez da folhagem). Não molhe demais as folhas à noite.",
    pragas:
      "Fungos em tempo úmido e pulgões. Espaçamento e sol ajudam a prevenir. Tire folhas estragadas.",
    manutencao:
      "Pode as pontas com frequência, mantenha o pé arejado e colha as folhas maiores dos ramos laterais.",
    colheita:
      "A partir de 40 a 60 dias. Colha folhas ou pontas de ramo, sempre deixando vários pares de folhas na planta.",
    curiosidade:
      "O manjericão é primo da hortelã (família Lamiaceae). As duas têm caule meio quadrado — um truque de identificação que os alunos podem testar na horta.",
  },
];

/* FUTURO: coloque os arquivos em musicas/ e preencha `audio`. Capa opcional em `capa`. */
const MUSICAS = [
  {
    id: "musica-1",
    titulo: "Música 1 — a adicionar",
    descricao: "Trilha das atividades da horta. O arquivo de áudio ainda não foi incluído.",
    audio: "",
    capa: "",
  },
  {
    id: "musica-2",
    titulo: "Música 2 — a adicionar",
    descricao: "Espaço reservado para a segunda música das atividades da escola.",
    audio: "",
    capa: "",
  },
  {
    id: "musica-3",
    titulo: "Música 3 — a adicionar",
    descricao: "Espaço reservado para a terceira música das atividades da escola.",
    audio: "",
    capa: "",
  },
];

const listaEl = document.getElementById("lista-plantacoes");
const detalheEl = document.getElementById("detalhe-plantacao");
const musicasEl = document.getElementById("lista-musicas");
const mapaEl = document.getElementById("mapa-localizacao");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("menu-principal");

function renderPlantas() {
  listaEl.innerHTML = PLANTACOES.map(
    (planta, index) => `
      <button
        class="plant-card"
        type="button"
        role="listitem"
        data-id="${planta.id}"
        style="animation-delay: ${index * 60}ms"
      >
        <span class="plant-emoji" aria-hidden="true">${planta.emoji}</span>
        <strong>${planta.nome}</strong>
        <span>Toque para explorar</span>
      </button>
    `
  ).join("");
}

function renderDetalhe(planta, { rolar = true } = {}) {
  detalheEl.hidden = false;
  detalheEl.innerHTML = `
    <div class="detail-layout">
      <div class="detail-photo">
        <img src="${planta.imagem}" alt="Imagem da ${planta.nome.toLowerCase()}" />
      </div>
      <div class="detail-body">
        <div class="detail-toolbar">
          <button class="btn btn-ghost back-to-plants" type="button" data-voltar-plantas>
            ↑ Escolher outra plantação
          </button>
        </div>
        <h3>${planta.emoji} ${planta.nome}</h3>
        <p>${planta.explicacao}</p>
        <div class="facts">
          <div class="fact"><small>💧 Água</small>${planta.agua}</div>
          <div class="fact"><small>☀️ Sol</small>${planta.sol}</div>
          <div class="fact"><small>🌍 Solo</small>${planta.solo}</div>
        </div>
        <div class="detail-blocks">
          <article><h4>🌱 Plantio</h4><p>${planta.plantio}</p></article>
          <article><h4>🌿 Como cresce</h4><p>${planta.crescimento}</p></article>
          <article><h4>🧼 Cuidados</h4><p>${planta.cuidados}</p></article>
          <article><h4>🐛 Pragas e problemas</h4><p>${planta.pragas}</p></article>
          <article><h4>🧹 Manutenção</h4><p>${planta.manutencao}</p></article>
          <article><h4>🍅 Colheita</h4><p>${planta.colheita}</p></article>
          <article><h4>💡 Curiosidade</h4><p>${planta.curiosidade}</p></article>
        </div>
        <div class="detail-toolbar detail-toolbar-end">
          <button class="btn btn-ghost back-to-plants" type="button" data-voltar-plantas>
            ↑ Escolher outra plantação
          </button>
        </div>
      </div>
    </div>
  `;
  detalheEl.style.animation = "none";
  detalheEl.offsetHeight;
  detalheEl.style.animation = "";
  if (rolar) detalheEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selecionarPlanta(id, opcoes) {
  const planta = PLANTACOES.find((item) => item.id === id);
  if (!planta) return;

  document.querySelectorAll(".plant-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.id === id);
  });
  renderDetalhe(planta, opcoes);
}

function renderMusicas() {
  musicasEl.innerHTML = MUSICAS.map((musica) => {
    const temAudio = Boolean(musica.audio);
    const capa = musica.capa
      ? `<img src="${musica.capa}" alt="Ilustração de ${musica.titulo}" />`
      : "🎵";
    return `
      <article class="music-card" data-music-id="${musica.id}">
        <div class="music-cover">${capa}</div>
        <h3>${musica.titulo}</h3>
        <p>${musica.descricao}</p>
        <div class="player-row">
          <button class="play-btn" type="button" data-play="${musica.id}" ${
            temAudio ? "" : "disabled"
          } aria-label="Reproduzir ou pausar">▶</button>
          <input class="progress" type="range" min="0" max="100" value="0" ${
            temAudio ? "" : "disabled"
          } data-progress="${musica.id}" />
        </div>
        <p class="music-status">${
          temAudio
            ? "Pronto para tocar."
            : "Aguardando arquivo de áudio (preencha o campo audio em script.js)."
        }</p>
        ${
          temAudio
            ? `<audio preload="none" data-audio="${musica.id}" src="${musica.audio}"></audio>`
            : ""
        }
      </article>
    `;
  }).join("");
}

function renderLocalizacao() {
  if (!mapaEl || !LOCALIZACAO_IMAGEM) return;

  const alt =
    "Planta baixa da horta escolar, com canteiros, áreas de cultivo, árvores frutíferas, composteira e demais elementos do projeto";

  mapaEl.classList.remove("map-placeholder");
  mapaEl.classList.add("map-viewer");
  mapaEl.innerHTML = `
    <div class="map-scroll">
      <button class="map-open" type="button" data-open-planta aria-haspopup="dialog">
        <img src="${LOCALIZACAO_IMAGEM}" alt="${alt}" />
        <span class="map-open-label">Ampliar planta baixa</span>
      </button>
    </div>
  `;

  const lightboxImg = document.getElementById("planta-lightbox-img");
  if (lightboxImg) {
    lightboxImg.src = LOCALIZACAO_IMAGEM;
    lightboxImg.alt = alt;
  }
}

function setupPlantaLightbox() {
  const lightbox = document.getElementById("planta-lightbox");
  if (!lightbox || !mapaEl) return;

  const abrir = () => {
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
  };

  const fechar = () => {
    if (typeof lightbox.close === "function" && lightbox.open) lightbox.close();
    else lightbox.removeAttribute("open");
  };

  mapaEl.addEventListener("click", (evento) => {
    if (evento.target.closest("[data-open-planta]")) abrir();
  });

  lightbox.addEventListener("click", (evento) => {
    if (evento.target.closest("[data-close-planta]")) fechar();
    if (evento.target === lightbox) fechar();
  });
}

function setupMusica() {
  musicasEl.addEventListener("click", (evento) => {
    const botao = evento.target.closest("[data-play]");
    if (!botao || botao.disabled) return;
    const id = botao.dataset.play;
    const audio = musicasEl.querySelector(`audio[data-audio="${id}"]`);
    if (!audio) return;
    document.querySelectorAll("#lista-musicas audio").forEach((outro) => {
      if (outro !== audio) {
        outro.pause();
        const otherBtn = musicasEl.querySelector(`[data-play="${outro.dataset.audio}"]`);
        if (otherBtn) otherBtn.textContent = "▶";
      }
    });
    if (audio.paused) {
      audio.play();
      botao.textContent = "❚❚";
    } else {
      audio.pause();
      botao.textContent = "▶";
    }
  });

  musicasEl.addEventListener("input", (evento) => {
    const barra = evento.target.closest("[data-progress]");
    if (!barra) return;
    const audio = musicasEl.querySelector(`audio[data-audio="${barra.dataset.progress}"]`);
    if (!audio || !audio.duration) return;
    audio.currentTime = (Number(barra.value) / 100) * audio.duration;
  });

  musicasEl.addEventListener(
    "timeupdate",
    (evento) => {
      const audio = evento.target;
      if (audio.tagName !== "AUDIO" || !audio.duration) return;
      const barra = musicasEl.querySelector(`[data-progress="${audio.dataset.audio}"]`);
      if (barra) barra.value = String((audio.currentTime / audio.duration) * 100);
    },
    true
  );
}

listaEl.addEventListener("click", (evento) => {
  const card = evento.target.closest(".plant-card");
  if (!card) return;
  selecionarPlanta(card.dataset.id);
});

function voltarAsPlantacoes() {
  const alvo = document.getElementById("lista-plantacoes") || document.getElementById("plantacoes");
  if (!alvo) return;
  alvo.scrollIntoView({ behavior: "smooth", block: "start" });
}

detalheEl.addEventListener("click", (evento) => {
  if (evento.target.closest("[data-voltar-plantas]")) voltarAsPlantacoes();
});

navToggle.addEventListener("click", () => {
  const aberto = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(aberto));
});

siteNav.addEventListener("click", (evento) => {
  if (evento.target.tagName === "A") {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

renderPlantas();
if (musicasEl) {
  renderMusicas();
  setupMusica();
}
renderLocalizacao();
setupPlantaLightbox();
selecionarPlanta(PLANTACOES[0].id, { rolar: false });
