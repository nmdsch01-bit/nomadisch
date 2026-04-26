// ============================================================
// NOMADISCH TRENDS — post.js
// Usa POSTS_DATA global do main.js (sem fetch)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Aguarda main.js carregar os dados globais
  const lang = localStorage.getItem('nmLang') || 'pt';
  window.currentLang = lang;

  applyLangPost(lang);
  setDateHeaderPost();

  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (!postId) { window.location.href = '../index.html'; return; }

  // POSTS_DATA vem do main.js carregado antes
  const posts = window.POSTS_DATA || [];
  const post = posts.find(p => p.id === postId);

  if (!post) {
    document.getElementById('post-content').innerHTML = '<p style="padding:2rem">Post não encontrado. <a href="../index.html">← Voltar</a></p>';
    return;
  }

  // Meta tags
  document.getElementById('page-title').textContent = `${post.title} — Nomadisch Trends`;
  const desc = document.getElementById('page-desc'); if (desc) desc.setAttribute('content', post.excerpt || '');
  const ogt = document.getElementById('og-title'); if (ogt) ogt.setAttribute('content', post.title);
  const ogd = document.getElementById('og-desc'); if (ogd) ogd.setAttribute('content', post.excerpt || '');
  const ogi = document.getElementById('og-image'); if (ogi) ogi.setAttribute('content', post.image || '');

  renderPostHero(post);
  renderPostHeader(post);
  renderPostBody(post);
  renderAffiliates(post);
  renderPostTags(post);
  renderShareBtns(post);
  renderRelated(posts, post);
  renderMorePosts(posts, post);
});

// ============================================================
// HERO
// ============================================================
function renderPostHero(post) {
  const el = document.getElementById('post-hero');
  if (!el) return;
  el.innerHTML = `
    <img src="${post.image}" alt="${post.imageAlt || post.title}" width="1600" height="700" loading="eager"/>
    <div class="post-page-hero-overlay"></div>
    <div class="container">
      <div class="post-hero-text">
        <span class="post-hero-category">${post.category}</span>
        <h1 class="post-hero-title">${post.title}</h1>
        <div class="post-hero-meta">${post.author} · ${fmtDatePost(post.date)} · ${post.readTime} min</div>
      </div>
    </div>`;
}

// ============================================================
// HEADER
// ============================================================
function renderPostHeader(post) {
  const el = document.getElementById('post-header');
  if (!el) return;
  const lang = window.currentLang || 'pt';
  const readLabel = lang === 'pt' ? `${post.readTime} min de leitura` : `${post.readTime} min read`;
  el.innerHTML = `
    <div class="post-byline">
      <span class="byline-author">${post.author}</span>
      <span class="byline-meta">${fmtDatePost(post.date)}</span>
      <span class="byline-read">⏱ ${readLabel}</span>
    </div>
    ${post.subtitle ? `<p class="post-header-subtitle">${post.subtitle}</p>` : ''}`;
}

// ============================================================
// BODY (injeta ad no meio automaticamente)
// ============================================================
function renderPostBody(post) {
  const el = document.getElementById('post-content');
  if (!el || !post.content) return;

  // Injeta ad mid-article após o 4º </p>
  const parts = post.content.split('</p>');
  if (parts.length > 5) {
    const midAd = `</p>
    <div class="ad-slot ad-in-article" aria-label="Advertisement" style="margin:2rem 0;">
      <div class="ad-placeholder" style="max-width:336px;min-height:280px;margin:0 auto;">
        <!-- ✅ AdSense 336×280 in-article aqui -->
        <div class="ad-label">AD · 336×280 · Mid-Article</div>
      </div>
    </div>`;
    parts.splice(4, 0, midAd);
  }
  el.innerHTML = parts.join('</p>');
}

// ============================================================
// AFFILIATE BOXES
// ============================================================
function renderAffiliates(post) {
  const el = document.getElementById('affiliate-section');
  if (!el || !post.affiliateLinks || !post.affiliateLinks.length) return;
  const lang = window.currentLang || 'pt';
  const badge = lang === 'pt' ? '🔗 Parceiro Recomendado' : '🔗 Recommended Partner';
  el.innerHTML = post.affiliateLinks.map(link => `
    <div class="affiliate-box">
      <div class="affiliate-box-content">
        <div class="affiliate-box-badge">${badge}</div>
        <div class="affiliate-box-title">${link.label}</div>
      </div>
      <a href="${link.url}" class="affiliate-box-cta" target="_blank" rel="noopener sponsored">${link.cta}</a>
    </div>`).join('');
}

// ============================================================
// TAGS
// ============================================================
function renderPostTags(post) {
  const el = document.getElementById('post-tags');
  if (!el || !post.tags) return;
  el.innerHTML = post.tags.map(t => `<a href="../index.html" class="tag-pill">#${t}</a>`).join('');
}

// ============================================================
// SHARE BUTTONS
// ============================================================
function renderShareBtns(post) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.title);
  const tw = document.getElementById('share-twitter');
  const fb = document.getElementById('share-facebook');
  const wa = document.getElementById('share-whatsapp');
  if (tw) tw.href = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
  if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  if (wa) wa.href = `https://wa.me/?text=${title}%20${url}`;
}

window.copyLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.share-copy');
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = '✓ Copiado!';
    setTimeout(() => btn.textContent = orig, 2000);
  });
};

// ============================================================
// RELATED SIDEBAR
// ============================================================
function renderRelated(posts, current) {
  const el = document.getElementById('related-list');
  if (!el) return;
  const related = posts.filter(p => p.id !== current.id && p.lang === current.lang && p.category === current.category).slice(0, 4);
  if (!related.length) { const w = el.closest('.widget-related'); if(w) w.style.display='none'; return; }
  el.innerHTML = related.map(p => `
    <li class="related-item">
      <a href="post.html?id=${p.id}" class="related-thumb">
        <img src="${p.image}" alt="${p.title}" width="120" height="80" loading="lazy"/>
      </a>
      <div>
        <a href="post.html?id=${p.id}" class="related-title">${p.title}</a>
        <div class="related-cat">${p.category}</div>
      </div>
    </li>`).join('');
}

// ============================================================
// MORE POSTS (bottom grid)
// ============================================================
function renderMorePosts(posts, current) {
  const el = document.getElementById('more-posts');
  if (!el) return;
  const more = posts.filter(p => p.id !== current.id && p.lang === current.lang).slice(0, 3);
  el.innerHTML = more.map(p => `
    <article class="post-card">
      <a href="post.html?id=${p.id}">
        <div class="post-card-img">
          <img src="${p.image}" alt="${p.imageAlt}" width="800" height="500" loading="lazy"/>
        </div>
      </a>
      <div class="post-card-body">
        <div class="post-card-category">${p.category}</div>
        <a href="post.html?id=${p.id}"><h2 class="post-card-title">${p.title}</h2></a>
        <p class="post-card-excerpt">${p.excerpt}</p>
        <div class="post-card-footer">
          <span>${fmtDatePost(p.date)}</span>
          <a href="post.html?id=${p.id}" class="post-card-read">Ler →</a>
        </div>
      </div>
    </article>`).join('');
}

// ============================================================
// HELPERS
// ============================================================
function fmtDatePost(str) {
  if (!str) return '';
  const lang = window.currentLang || 'pt';
  return new Date(str).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function applyLangPost(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'pt' ? (el.dataset.pt || el.dataset.en) : el.dataset.en;
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

function setDateHeaderPost() {
  const el = document.getElementById('current-date');
  if (!el) return;
  const lang = window.currentLang || 'pt';
  el.textContent = new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Expõe funções globais necessárias no HTML
window.switchLang = function(lang) {
  window.currentLang = lang;
  localStorage.setItem('nmLang', lang);
  applyLangPost(lang);
  setDateHeaderPost();
  location.reload(); // Recarrega para re-renderizar com novo idioma
};
window.toggleMenu = function() { document.getElementById('main-nav').classList.toggle('open'); };
window.subscribeNewsletter = function(e) {
  e.preventDefault();
  const lang = window.currentLang || 'pt';
  const input = e.target.querySelector('input');
  alert(lang === 'pt' ? `Obrigado! ${input.value} adicionado.` : `Thanks! ${input.value} added.`);
  input.value = '';
};
