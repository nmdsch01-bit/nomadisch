// ============================================================
// NOMADISCH TRENDS — Main JavaScript
// ============================================================

// --- State ---
let allPosts = [];
let currentLang = localStorage.getItem('lang') || 'en';
let currentCat = 'all';
let loadedCount = 0;
const POSTS_PER_LOAD = 6;

// --- Init ---
document.addEventListener('DOMContentLoaded', async () => {
  setDateHeader();
  applyLang(currentLang);
  await loadPosts();
});

// --- Date in header ---
function setDateHeader() {
  const el = document.getElementById('current-date');
  if (!el) return;
  const d = new Date();
  el.textContent = d.toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

// --- Language switch ---
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyLang(lang);
  renderAll();
  setDateHeader();
}

function applyLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'pt' ? (el.dataset.pt || el.dataset.en) : el.dataset.en;
  });
}

// --- Load posts from JSON ---
async function loadPosts() {
  try {
    const res = await fetch('posts.json');
    allPosts = await res.json();
  } catch (e) {
    // Fallback: use inline demo data if fetch fails (e.g. file:// protocol)
    allPosts = getDemoData();
  }
  renderAll();
}

// --- Render everything ---
function renderAll() {
  const lang = currentLang;
  const filtered = allPosts
    .filter(p => p.lang === lang)
    .filter(p => currentCat === 'all' || p.category === currentCat || p.category === getEnCat(currentCat));

  renderHero(filtered.find(p => p.featured) || filtered[0]);
  renderPostsGrid(filtered);
  renderTrending(filtered);
  renderTags(filtered);
  updateCategoryTabs();
}

// --- Hero ---
function renderHero(post) {
  const el = document.getElementById('hero-post');
  if (!el || !post) return;

  const dateStr = formatDate(post.date);
  const readLabel = currentLang === 'pt' ? `${post.readTime} min de leitura` : `${post.readTime} min read`;
  const readBtn = currentLang === 'pt' ? 'Ler Agora' : 'Read Now';
  const featuredBadge = currentLang === 'pt' ? '⭐ Destaque' : '⭐ Featured';

  el.innerHTML = `
    <div class="hero-content">
      <div class="hero-meta">
        <span class="hero-category">${post.category}</span>
        <span class="hero-readtime">⏱ ${readLabel}</span>
      </div>
      <h1 class="hero-title">${post.title}</h1>
      <p class="hero-subtitle">${post.subtitle || post.excerpt}</p>
      <div class="hero-author">${post.author} · ${dateStr}</div>
      <a href="post.html?id=${post.id}" class="hero-cta">${readBtn} →</a>
    </div>
    <div class="hero-image-wrap">
      <img
        src="${post.image || getPlaceholderImg(post.id, 1200, 630)}"
        alt="${post.imageAlt || post.title}"
        width="1200" height="630"
        loading="eager"
        onerror="this.src='${getPlaceholderImg(post.id, 1200, 630)}'"
      />
      <div class="hero-image-badge">${featuredBadge}</div>
    </div>
  `;
}

// --- Posts grid ---
function renderPostsGrid(posts) {
  const grid1 = document.getElementById('posts-grid');
  const grid2 = document.getElementById('posts-grid-2');
  if (!grid1) return;

  loadedCount = Math.min(POSTS_PER_LOAD, posts.length);

  const firstBatch = posts.slice(0, 4);
  const secondBatch = posts.slice(4, loadedCount);

  grid1.innerHTML = firstBatch.map(p => postCardHTML(p)).join('');
  if (grid2) grid2.innerHTML = secondBatch.map(p => postCardHTML(p)).join('');

  // Update load more button
  const btn = document.getElementById('load-more');
  if (btn) btn.style.display = posts.length > loadedCount ? 'inline-block' : 'none';
}

function postCardHTML(post) {
  const dateStr = formatDate(post.date);
  const readLabel = currentLang === 'pt' ? `${post.readTime} min` : `${post.readTime} min`;
  const readMore = currentLang === 'pt' ? 'Ler mais' : 'Read more';

  // ✅ POST CARD IMAGE: 800×500px WebP recommended
  const imgSrc = post.image || getPlaceholderImg(post.id, 800, 500);

  return `
    <article class="post-card">
      <a href="post.html?id=${post.id}" class="post-card-img-link">
        <div class="post-card-img">
          <img
            src="${imgSrc}"
            alt="${post.imageAlt || post.title}"
            width="800" height="500"
            loading="lazy"
            onerror="this.src='${getPlaceholderImg(post.id, 800, 500)}'"
          />
        </div>
      </a>
      <div class="post-card-body">
        <div class="post-card-category">${post.category}</div>
        <a href="post.html?id=${post.id}">
          <h2 class="post-card-title">${post.title}</h2>
        </a>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-footer">
          <span>${dateStr} · ${readLabel}</span>
          <a href="post.html?id=${post.id}" class="post-card-read">${readMore} →</a>
        </div>
      </div>
    </article>
  `;
}

// --- Trending sidebar ---
function renderTrending(posts) {
  const el = document.getElementById('trending-list');
  if (!el) return;
  const top5 = posts.slice(0, 5);
  el.innerHTML = top5.map((p, i) => `
    <li class="trending-item">
      <span class="trending-num">0${i+1}</span>
      <div class="trending-text">
        <a href="post.html?id=${p.id}">
          <div class="trending-title">${p.title}</div>
        </a>
        <div class="trending-cat">${p.category}</div>
      </div>
    </li>
  `).join('');
}

// --- Tags cloud ---
function renderTags(posts) {
  const el = document.getElementById('tags-cloud');
  if (!el) return;
  const tags = [...new Set(posts.flatMap(p => p.tags || []))];
  el.innerHTML = tags.map(t => `
    <a href="#" class="tag-pill" onclick="filterByTag('${t}'); return false;">#${t}</a>
  `).join('');
}

// --- Category filter ---
function updateCategoryTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderAll();
    });
    // Apply language
    if (currentLang === 'pt' && btn.dataset.pt) btn.textContent = btn.dataset.pt;
    else if (btn.dataset.en) btn.textContent = btn.dataset.en;
  });
}

function filterByTag(tag) {
  // Simple tag search — expand as needed
  const lang = currentLang;
  const filtered = allPosts.filter(p => p.lang === lang && (p.tags || []).includes(tag));
  const grid1 = document.getElementById('posts-grid');
  if (grid1) grid1.innerHTML = filtered.map(p => postCardHTML(p)).join('');
}

// --- Nav toggle (mobile) ---
function toggleMenu() {
  document.getElementById('main-nav').classList.toggle('open');
}

// --- Newsletter ---
function subscribeNewsletter(e) {
  e.preventDefault();
  // ✅ REPLACE WITH YOUR EMAIL SERVICE (Mailchimp, ConvertKit, etc.)
  // Example Mailchimp: POST to your list subscribe URL
  const input = e.target.querySelector('input');
  alert(currentLang === 'pt'
    ? `Obrigado! ${input.value} foi adicionado à lista.`
    : `Thanks! ${input.value} has been added.`
  );
  input.value = '';
}

// --- Exit popup (fires once per session) ---
function initExitIntent() {
  if (sessionStorage.getItem('popup-shown')) return;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10) {
      document.getElementById('exit-popup').style.display = 'flex';
      sessionStorage.setItem('popup-shown', '1');
    }
  });
}
document.addEventListener('DOMContentLoaded', initExitIntent);

function closePopup() {
  document.getElementById('exit-popup').style.display = 'none';
}

// --- Helpers ---
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

function getPlaceholderImg(id, w, h) {
  // Uses picsum for placeholder — replace with real images in production
  const seed = id ? id.charCodeAt(0) + (id.charCodeAt(1) || 0) : 42;
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

function getEnCat(cat) {
  const map = { 'Tecnologia': 'Technology', 'Viagens': 'Travel', 'Dinheiro': 'Money', 'Estilo': 'Lifestyle', 'Todos': 'all' };
  return map[cat] || cat;
}

// --- Demo data (fallback if posts.json can't be fetched) ---
function getDemoData() {
  return [
    {
      id: 'ai-tools-2026', slug: 'ai-tools-2026', lang: 'en',
      title: 'AI Tools Everyone Is Using in 2026',
      subtitle: 'The definitive guide to the tools reshaping how we work and live',
      category: 'Technology', tags: ['AI', 'tools', 'productivity'],
      author: 'Nomadisch Team', date: '2026-04-15', readTime: 7, featured: true,
      excerpt: 'From writing assistants to image generators, these are the AI tools that went from niche to essential.',
      image: '', affiliateLinks: []
    },
    {
      id: 'travel-hacks-2026', slug: 'travel-hacks-2026', lang: 'en',
      title: '15 Travel Hacks That Will Save You Thousands',
      subtitle: 'Insider tricks the travel industry doesn\'t want you to know',
      category: 'Travel', tags: ['travel', 'saving', 'budget'],
      author: 'Nomadisch Team', date: '2026-04-10', readTime: 9, featured: false,
      excerpt: 'Frequent flyer miles, cashback cards, and hotel loyalty programs are just the start.',
      image: '', affiliateLinks: []
    },
    {
      id: 'ferramentas-ia-2026', slug: 'ferramentas-ia-2026', lang: 'pt',
      title: 'Ferramentas de IA Que Todo Mundo Está Usando em 2026',
      subtitle: 'O guia definitivo das ferramentas que estão transformando trabalho e criatividade',
      category: 'Tecnologia', tags: ['IA', 'ferramentas', 'produtividade'],
      author: 'Equipe Nomadisch', date: '2026-04-15', readTime: 7, featured: true,
      excerpt: 'De assistentes de escrita a geradores de imagem, essas são as ferramentas que todo mundo está usando.',
      image: '', affiliateLinks: []
    },
    {
      id: 'dicas-viagem-2026', slug: 'dicas-viagem-2026', lang: 'pt',
      title: '15 Dicas de Viagem Que Vão Te Economizar Milhares',
      subtitle: 'Truques exclusivos que a indústria do turismo não quer que você saiba',
      category: 'Viagens', tags: ['viagem', 'economia', 'dicas'],
      author: 'Equipe Nomadisch', date: '2026-04-10', readTime: 9, featured: false,
      excerpt: 'Milhas aéreas, cartões com cashback e programas de fidelidade são apenas o começo.',
      image: '', affiliateLinks: []
    }
  ];
}
