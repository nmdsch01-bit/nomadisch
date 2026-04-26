// ============================================================
// NOMADISCH TRENDS — main.js
// Posts embutidos diretamente (sem fetch/CORS issues)
// ============================================================

// ============================================================
// ✅ ADICIONE SEUS POSTS AQUI
// Duplique cada post com "lang": "en" e "lang": "pt"
// ============================================================
const POSTS_DATA = [
  {
    id: "ai-tools-2026",
    slug: "ai-tools-everyone-is-using-2026",
    lang: "en",
    title: "AI Tools Everyone Is Using in 2026",
    subtitle: "The definitive guide to the tools reshaping how we work and live",
    category: "Technology",
    tags: ["AI", "productivity", "tools", "technology"],
    author: "Nomadisch Team",
    date: "2026-04-15",
    readTime: 7,
    featured: true,
    image: "https://picsum.photos/seed/ai2026/1200/630",
    imageAlt: "Person using AI tools on laptop",
    excerpt: "From writing assistants to image generators, these are the AI tools that went from niche to essential — and how to use them to stay ahead.",
    content: `<p>Artificial intelligence isn't coming — it's already here, embedded in every layer of how we work, create, and communicate. In 2026, the real question isn't <em>whether</em> to use AI tools, but <em>which ones</em> are worth your time.</p>
<p>We've tested dozens of platforms so you don't have to. Here are the standouts.</p>
<h2>1. Writing & Content</h2>
<p>Claude by Anthropic has emerged as the favorite for long-form writing, nuanced analysis, and coding assistance. Its ability to maintain context over long documents makes it ideal for reports, articles, and even entire book chapters.</p>
<p>Notion AI integrates directly into your existing workspace, making it a frictionless upgrade for teams already using Notion.</p>
<h2>2. Image Generation</h2>
<p>Midjourney v7 and Adobe Firefly continue to dominate the professional creative space, with Firefly having the edge for commercial use due to its copyright-safe training data.</p>
<h2>3. Productivity & Automation</h2>
<p>Zapier's AI features have matured significantly, now capable of building multi-step automations from a plain-English description. For developers, n8n offers self-hosted flexibility.</p>
<h2>4. Video & Audio</h2>
<p>Sora and Runway continue pushing the boundaries of AI video, while ElevenLabs dominates voice cloning for podcasters and content creators worldwide.</p>`,
    affiliateLinks: [
      { label: "Try Claude Pro — Best AI Writing Assistant", url: "https://claude.ai", cta: "Start Free →" }
    ]
  },
  {
    id: "ferramentas-ia-2026",
    slug: "ferramentas-ia-que-todo-mundo-usa-2026",
    lang: "pt",
    title: "Ferramentas de IA Que Todo Mundo Está Usando em 2026",
    subtitle: "O guia definitivo das ferramentas que estão transformando trabalho e criatividade",
    category: "Tecnologia",
    tags: ["IA", "produtividade", "ferramentas", "tecnologia"],
    author: "Equipe Nomadisch",
    date: "2026-04-15",
    readTime: 7,
    featured: true,
    image: "https://picsum.photos/seed/ia2026/1200/630",
    imageAlt: "Pessoa usando ferramentas de IA no laptop",
    excerpt: "De assistentes de escrita a geradores de imagem, essas são as ferramentas de IA que passaram de nicho para indispensável — e como usá-las para sair na frente.",
    content: `<p>A inteligência artificial não está chegando — já chegou, embutida em cada camada de como trabalhamos, criamos e nos comunicamos. Em 2026, a verdadeira questão não é <em>se</em> usar ferramentas de IA, mas <em>quais</em> realmente valem o seu tempo.</p>
<p>Testamos dezenas de plataformas para você não precisar. Aqui estão as que se destacaram.</p>
<h2>1. Escrita e Conteúdo</h2>
<p>O Claude da Anthropic se consolidou como favorito para escrita longa, análise aprofundada e assistência em código. Sua capacidade de manter contexto em documentos extensos o torna ideal para relatórios, artigos e até capítulos de livros.</p>
<p>O Notion AI se integra diretamente ao seu espaço de trabalho, sendo uma atualização sem atrito para equipes que já usam o Notion.</p>
<h2>2. Geração de Imagens</h2>
<p>Midjourney v7 e Adobe Firefly continuam dominando o espaço criativo profissional, com o Firefly levando vantagem para uso comercial por seu treinamento com dados livres de direitos autorais.</p>
<h2>3. Produtividade e Automação</h2>
<p>Os recursos de IA do Zapier amadureceram significativamente, agora capazes de construir automações complexas a partir de uma descrição em linguagem natural.</p>
<h2>4. Vídeo e Áudio</h2>
<p>Sora e Runway continuam empurrando os limites do vídeo gerado por IA, enquanto o ElevenLabs domina a clonagem de voz para podcasters e criadores de conteúdo.</p>`,
    affiliateLinks: [
      { label: "Experimente o Claude Pro — Melhor Assistente de IA", url: "https://claude.ai", cta: "Começar Grátis →" }
    ]
  },
  {
    id: "travel-hacks-2026",
    slug: "travel-hacks-save-money-2026",
    lang: "en",
    title: "15 Travel Hacks That Will Save You Thousands in 2026",
    subtitle: "Insider tricks the travel industry doesn't want you to know",
    category: "Travel",
    tags: ["travel", "saving", "budget", "tips"],
    author: "Nomadisch Team",
    date: "2026-04-10",
    readTime: 9,
    featured: false,
    image: "https://picsum.photos/seed/travel26/1200/630",
    imageAlt: "Travel bags and passport on a map",
    excerpt: "Frequent flyer miles, cashback cards, and hotel loyalty programs are just the start. These are the tricks that seasoned travelers swear by.",
    content: `<p>The difference between a $3,000 trip and a $900 trip often isn't about going to a cheaper destination — it's about knowing the system.</p>
<p>After years of traveling and interviewing frequent flyers, we've compiled the definitive list of hacks that actually work.</p>
<h2>1. Book Flights on Tuesdays</h2>
<p>Airlines typically release fare sales on Monday nights, and competitor prices drop by Tuesday morning. Booking midweek consistently yields 10–20% lower fares than weekend bookings.</p>
<h2>2. Use Incognito Mode When Searching</h2>
<p>Flight search engines use cookies to track your searches and sometimes raise prices when they detect repeat interest. Always search in private/incognito mode.</p>
<h2>3. Set Fare Alerts</h2>
<p>Google Flights, Hopper, and Kayak all offer fare alerts. Set them 6–8 weeks before your desired travel date for domestic flights, 3–6 months for international.</p>
<h2>4. Maximize Credit Card Points</h2>
<p>The right travel credit card can turn everyday spending into free flights. Look for cards with large welcome bonuses (60,000+ points) and transfer partners with major airlines.</p>
<h2>5. Book Directly With Hotels</h2>
<p>Hotels offer their best rates and perks (free breakfast, room upgrades) to direct bookers. Call or book on the hotel's website after checking comparison sites for the going rate.</p>`,
    affiliateLinks: [
      { label: "Best Travel Credit Card with Lounge Access", url: "#affiliate-travel-card", cta: "See Card Benefits →" }
    ]
  },
  {
    id: "dicas-viagem-2026",
    slug: "dicas-viagem-economizar-2026",
    lang: "pt",
    title: "15 Dicas de Viagem Que Vão Te Economizar Milhares em 2026",
    subtitle: "Truques exclusivos que a indústria do turismo não quer que você saiba",
    category: "Viagens",
    tags: ["viagem", "economia", "dicas", "orçamento"],
    author: "Equipe Nomadisch",
    date: "2026-04-10",
    readTime: 9,
    featured: false,
    image: "https://picsum.photos/seed/viagem26/1200/630",
    imageAlt: "Malas e passaporte em cima de mapa",
    excerpt: "Milhas aéreas, cartões com cashback e programas de fidelidade são apenas o começo. Esses são os truques que viajantes experientes usam.",
    content: `<p>A diferença entre uma viagem de R$15.000 e uma de R$4.500 muitas vezes não está em ir para um destino mais barato — mas em conhecer o sistema.</p>
<p>Depois de anos viajando e entrevistando especialistas, compilamos a lista definitiva de dicas que realmente funcionam.</p>
<h2>1. Reserve Voos nas Terças</h2>
<p>As companhias aéreas costumam lançar promoções nas noites de segunda, e os concorrentes respondem na manhã de terça. Reservar no meio da semana rende tarifas 10–20% menores do que no fim de semana.</p>
<h2>2. Use o Modo Anônimo</h2>
<p>Sites de busca de passagens usam cookies para rastrear suas pesquisas e às vezes sobem os preços quando detectam interesse repetido. Sempre pesquise em modo anônimo/privado.</p>
<h2>3. Configure Alertas de Tarifas</h2>
<p>Google Voos, Kayak e Skyscanner oferecem alertas de preço. Configure-os com 6–8 semanas de antecedência para voos domésticos, 3–6 meses para internacionais.</p>
<h2>4. Maximize Pontos do Cartão</h2>
<p>O cartão de crédito certo transforma gastos do dia a dia em passagens grátis. Procure cartões com bônus de boas-vindas generosos e parceiros de transferência com companhias aéreas.</p>
<h2>5. Reserve Diretamente com o Hotel</h2>
<p>Hotéis oferecem melhores tarifas e benefícios (café da manhã gratuito, upgrade de quarto) para reservas diretas. Ligue ou acesse o site do hotel depois de consultar os comparadores.</p>`,
    affiliateLinks: [
      { label: "Melhor Cartão de Viagem com Acesso a Lounges", url: "#afiliado-cartao-viagem", cta: "Ver Benefícios →" }
    ]
  },
  {
    id: "apps-viral-2026",
    slug: "apps-going-viral-us-2026",
    lang: "en",
    title: "Apps Going Viral in the US Right Now",
    subtitle: "The apps everyone is downloading — and the ones worth your storage space",
    category: "Technology",
    tags: ["apps", "viral", "technology", "mobile"],
    author: "Nomadisch Team",
    date: "2026-04-05",
    readTime: 5,
    featured: false,
    image: "https://picsum.photos/seed/apps26/1200/630",
    imageAlt: "Smartphone with apps on screen",
    excerpt: "Every few months a new batch of apps explodes onto the scene. Here's what's actually worth your time — and what's just hype.",
    content: `<p>The app store is a graveyard of forgotten downloads. But occasionally, something breaks through and genuinely changes how people do things. Here's what's trending right now.</p>
<h2>Productivity</h2>
<p>Notion continues its domination, but newer entrants like Granola (AI meeting notes) and Perplexity (AI search) are carving out serious user bases among professionals.</p>
<h2>Social & Entertainment</h2>
<p>BeReal had its moment; now it's all about Locket and Poparazzi for intimate social sharing. TikTok's future remains uncertain, driving users to explore alternatives.</p>
<h2>Health & Fitness</h2>
<p>Whoop and Oura's apps continue growing as wearables become mainstream health tools. Calorie-counting apps have evolved into full nutrition coaches powered by AI.</p>`,
    affiliateLinks: []
  },
  {
    id: "apps-viral-br-2026",
    slug: "apps-viralizando-brasil-2026",
    lang: "pt",
    title: "Apps que Estão Viralizando no Brasil Agora",
    subtitle: "Os aplicativos que todo mundo está baixando — e os que realmente valem o espaço",
    category: "Tecnologia",
    tags: ["apps", "viral", "tecnologia", "mobile"],
    author: "Equipe Nomadisch",
    date: "2026-04-05",
    readTime: 5,
    featured: false,
    image: "https://picsum.photos/seed/appsbr/1200/630",
    imageAlt: "Smartphone com aplicativos na tela",
    excerpt: "A cada poucos meses uma nova leva de apps explode. Aqui está o que realmente vale o seu tempo — e o que é só hype.",
    content: `<p>A App Store e o Google Play são cemitérios de downloads esquecidos. Mas vez ou outra algo genuinamente muda a forma como as pessoas fazem as coisas. Veja o que está em alta agora.</p>
<h2>Produtividade</h2>
<p>Notion continua dominando, mas novos entrantes como Granola (notas de reunião com IA) e Perplexity (busca com IA) estão conquistando bases de usuários sérias.</p>
<h2>Social e Entretenimento</h2>
<p>O TikTok segue forte no Brasil, mas aplicativos de compartilhamento mais íntimo como Locket estão crescendo entre amigos próximos e família.</p>
<h2>Saúde e Fitness</h2>
<p>Apps de contagem de calorias evoluíram para coaches de nutrição completos com IA. O Whoop e o Oura continuam crescendo à medida que os wearables se tornam ferramentas de saúde cotidianas.</p>`,
    affiliateLinks: []
  }
];

// ============================================================
// APP STATE
// ============================================================
let currentLang = localStorage.getItem('nmLang') || 'pt'; // default PT para seu público
let currentCat = 'all';

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setDateHeader();
  applyLang(currentLang);
  renderAll();
});

// ============================================================
// LANGUAGE
// ============================================================
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('nmLang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyLang(lang);
  renderAll();
  setDateHeader();
}

function applyLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'pt' ? (el.dataset.pt || el.dataset.en) : el.dataset.en;
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

function setDateHeader() {
  const el = document.getElementById('current-date');
  if (!el) return;
  el.textContent = new Date().toLocaleDateString(
    currentLang === 'pt' ? 'pt-BR' : 'en-US',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  );
}

// ============================================================
// RENDER ALL (homepage)
// ============================================================
function renderAll() {
  const catMap = { 'Tecnologia':'Technology','Viagens':'Travel','Dinheiro':'Money','Estilo':'Lifestyle' };
  const normalized = catMap[currentCat] || currentCat;

  const filtered = POSTS_DATA
    .filter(p => p.lang === currentLang)
    .filter(p => currentCat === 'all' || p.category === currentCat || p.category === normalized);

  renderHero(filtered.find(p => p.featured) || filtered[0]);
  renderGrid(filtered);
  renderTrending(filtered);
  renderTags(filtered);
  updateTabs();
}

// ============================================================
// HERO
// ============================================================
function renderHero(post) {
  const el = document.getElementById('hero-post');
  if (!el || !post) return;
  const readBtn = currentLang === 'pt' ? 'Ler Agora' : 'Read Now';
  const readLabel = currentLang === 'pt' ? `${post.readTime} min de leitura` : `${post.readTime} min read`;
  const badge = currentLang === 'pt' ? '⭐ Destaque' : '⭐ Featured';

  el.innerHTML = `
    <div class="hero-content">
      <div class="hero-meta">
        <span class="hero-category">${post.category}</span>
        <span class="hero-readtime">⏱ ${readLabel}</span>
      </div>
      <h1 class="hero-title">${post.title}</h1>
      <p class="hero-subtitle">${post.subtitle || post.excerpt}</p>
      <div class="hero-author">${post.author} · ${fmtDate(post.date)}</div>
      <a href="posts/post.html?id=${post.id}" class="hero-cta">${readBtn} →</a>
    </div>
    <div class="hero-image-wrap">
      <img src="${post.image}" alt="${post.imageAlt}" width="1200" height="630" loading="eager"/>
      <div class="hero-image-badge">${badge}</div>
    </div>`;
}

// ============================================================
// POSTS GRID
// ============================================================
function renderGrid(posts) {
  const g1 = document.getElementById('posts-grid');
  const g2 = document.getElementById('posts-grid-2');
  if (!g1) return;
  g1.innerHTML = posts.slice(0, 4).map(cardHTML).join('');
  if (g2) g2.innerHTML = posts.slice(4, 8).map(cardHTML).join('');
  const btn = document.getElementById('load-more');
  if (btn) btn.style.display = posts.length > 8 ? 'inline-block' : 'none';
}

function cardHTML(post) {
  const readMore = currentLang === 'pt' ? 'Ler mais' : 'Read more';
  return `
    <article class="post-card">
      <a href="posts/post.html?id=${post.id}">
        <div class="post-card-img">
          <img src="${post.image}" alt="${post.imageAlt}" width="800" height="500" loading="lazy"/>
        </div>
      </a>
      <div class="post-card-body">
        <div class="post-card-category">${post.category}</div>
        <a href="posts/post.html?id=${post.id}">
          <h2 class="post-card-title">${post.title}</h2>
        </a>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-footer">
          <span>${fmtDate(post.date)} · ${post.readTime} min</span>
          <a href="posts/post.html?id=${post.id}" class="post-card-read">${readMore} →</a>
        </div>
      </div>
    </article>`;
}

// ============================================================
// SIDEBAR
// ============================================================
function renderTrending(posts) {
  const el = document.getElementById('trending-list');
  if (!el) return;
  el.innerHTML = posts.slice(0, 5).map((p, i) => `
    <li class="trending-item">
      <span class="trending-num">0${i+1}</span>
      <div class="trending-text">
        <a href="posts/post.html?id=${p.id}"><div class="trending-title">${p.title}</div></a>
        <div class="trending-cat">${p.category}</div>
      </div>
    </li>`).join('');
}

function renderTags(posts) {
  const el = document.getElementById('tags-cloud');
  if (!el) return;
  const tags = [...new Set(posts.flatMap(p => p.tags || []))];
  el.innerHTML = tags.map(t => `<span class="tag-pill">#${t}</span>`).join('');
}

function updateTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderAll();
    };
    if (currentLang === 'pt' && btn.dataset.pt) btn.textContent = btn.dataset.pt;
    else if (btn.dataset.en) btn.textContent = btn.dataset.en;
  });
}

// ============================================================
// MISC
// ============================================================
function toggleMenu() { document.getElementById('main-nav').classList.toggle('open'); }

function subscribeNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  // ✅ SUBSTITUA PELO SEU SERVIÇO DE EMAIL (Mailchimp, ConvertKit, etc.)
  alert(currentLang === 'pt' ? `Obrigado! ${input.value} foi adicionado.` : `Thanks! ${input.value} added.`);
  input.value = '';
}

function fmtDate(str) {
  if (!str) return '';
  return new Date(str).toLocaleDateString(
    currentLang === 'pt' ? 'pt-BR' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );
}

// Expõe dados globalmente para post.js usar
window.POSTS_DATA = POSTS_DATA;
window.currentLang = currentLang;
window.switchLang = switchLang;
window.toggleMenu = toggleMenu;
window.subscribeNewsletter = subscribeNewsletter;
