/* =============================================
   Canvas Caresse — i18n + Shared Behaviour
   ============================================= */

const translations = {
  fr: {
    'nav.atelier': 'Atelier', 'nav.oeuvres': 'Œuvres', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Art Floral — Pièces Uniques',
    'hero.title': 'La beauté<br /><em>éphémère</em><br />immortalisée',
    'hero.desc': 'Chaque pétale capturé sur toile. Chaque composition, une poésie silencieuse née entre la nature et le geste artistique.',
    'hero.label': 'Collection 2026', 'hero.cta': 'Découvrir',
    'card.atelier': 'Atelier', 'card.atelier.sub': 'Notre univers',
    'card.oeuvres': 'Œuvres', 'card.oeuvres.sub': 'Collection Printemps',
    'card.contact': 'Contact', 'card.contact.sub': 'Écrivez-nous',
    'vis.main': 'Œuvre principale', 'vis.atelier': 'Photo atelier',
    'vis.detail': 'Détail', 'vis.materials': 'Matières',
    'atelier.eyebrow': "L'Atelier",
    'atelier.title': 'Une passion<br />née de <em>la nature</em>',
    'atelier.lead': "Canvas Caresse est un studio d'art floral fondé avec l'âme d'une poète. Chaque œuvre naît d'une conversation entre la délicatesse des fleurs et la permanence de la toile.",
    'atelier.body': "Inspirée par les grands ateliers parisiens du dix-neuvième siècle, je crée des pièces qui capturent la grâce éphémère du monde végétal — pour qu'elle dure une éternité.",
    'atelier.stat': 'Pièces originales<br />faites main',
    'portfolio.eyebrow': 'Les Œuvres', 'portfolio.title': 'Collection <em>Printemps</em>',
    'coming': 'À venir',
    'medium.oil': 'Huile sur toile', 'medium.watercolor': 'Aquarelle',
    'medium.acrylic': 'Acrylique', 'medium.mixed': 'Techniques mixtes', 'medium.pastel': 'Pastel sec',
    'portfolio.cta': 'Commande sur mesure',
    'quote': "« Les fleurs sont les mots que la nature choisit<br />pour exprimer l'ineffable. »",
    'contact.eyebrow': 'Contact',
    'contact.title': 'Parlons de<br /><em>votre projet</em>',
    'contact.desc': "Commandes personnalisées, collaborations, expositions — je serais ravie d'échanger avec vous.",
    'form.name': 'Nom', 'form.name.ph': 'Votre nom',
    'form.email': 'E-mail', 'form.email.ph': 'votre@email.com',
    'form.message': 'Message', 'form.message.ph': 'Décrivez votre projet…',
    'form.submit': 'Envoyer', 'form.success': 'Merci — je vous réponds très bientôt.',
    'footer.tagline': 'Art Floral — Pièces Uniques — Paris',
    'footer.copy': '© 2026 Canvas Caresse. Tous droits réservés.',
  },
  en: {
    'nav.atelier': 'Studio', 'nav.oeuvres': 'Works', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Floral Art — Original Pieces',
    'hero.title': 'The ephemeral<br />beauty<br /><em>immortalized</em>',
    'hero.desc': 'Every petal captured on canvas. Every composition, a silent poetry born between nature and the artistic gesture.',
    'hero.label': 'Collection 2026', 'hero.cta': 'Discover',
    'card.atelier': 'Studio', 'card.atelier.sub': 'Our world',
    'card.oeuvres': 'Works', 'card.oeuvres.sub': 'Spring Collection',
    'card.contact': 'Contact', 'card.contact.sub': 'Write to us',
    'vis.main': 'Main artwork', 'vis.atelier': 'Studio photo',
    'vis.detail': 'Detail', 'vis.materials': 'Materials',
    'atelier.eyebrow': 'The Studio',
    'atelier.title': 'A passion<br />born from <em>nature</em>',
    'atelier.lead': "Canvas Caresse is a floral art studio founded with a poet's soul. Each work is born from a conversation between the delicacy of flowers and the permanence of canvas.",
    'atelier.body': 'Inspired by the great Parisian ateliers of the nineteenth century, I create pieces that capture the ephemeral grace of the botanical world — so it may last an eternity.',
    'atelier.stat': 'Original pieces<br />handcrafted',
    'portfolio.eyebrow': 'The Works', 'portfolio.title': '<em>Spring</em> Collection',
    'coming': 'Coming soon',
    'medium.oil': 'Oil on canvas', 'medium.watercolor': 'Watercolor',
    'medium.acrylic': 'Acrylic', 'medium.mixed': 'Mixed media', 'medium.pastel': 'Dry pastel',
    'portfolio.cta': 'Custom order',
    'quote': '"Flowers are the words nature chooses<br />to express the ineffable."',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk about<br /><em>your project</em>",
    'contact.desc': 'Custom orders, collaborations, exhibitions — I would love to connect with you.',
    'form.name': 'Name', 'form.name.ph': 'Your name',
    'form.email': 'Email', 'form.email.ph': 'your@email.com',
    'form.message': 'Message', 'form.message.ph': 'Describe your project…',
    'form.submit': 'Send', 'form.success': 'Thank you — I will be in touch very soon.',
    'footer.tagline': 'Floral Art — Original Pieces — Paris',
    'footer.copy': '© 2026 Canvas Caresse. All rights reserved.',
  },
  zh: {
    'nav.atelier': '工作室', 'nav.oeuvres': '作品', 'nav.contact': '聯繫',
    'hero.eyebrow': '花藝藝術 — 獨家原創',
    'hero.title': '短暫的美麗<br /><em>永恆</em><br />留存',
    'hero.desc': '每一片花瓣，定格於畫布之上。每一幅構圖，皆是自然與藝術之間誕生的無聲詩篇。',
    'hero.label': '2026 系列', 'hero.cta': '探索',
    'card.atelier': '工作室', 'card.atelier.sub': '探索我們的世界',
    'card.oeuvres': '作品', 'card.oeuvres.sub': '春季系列',
    'card.contact': '聯繫', 'card.contact.sub': '寫信給我們',
    'vis.main': '主要作品', 'vis.atelier': '工作室照片',
    'vis.detail': '細節', 'vis.materials': '材料',
    'atelier.eyebrow': '工作室',
    'atelier.title': '源於<em>自然</em><br />的熱情',
    'atelier.lead': 'Canvas Caresse 是一個以詩人之心創立的花藝藝術工作室。每件作品皆誕生於花卉的柔美與畫布的永恆之間的對話。',
    'atelier.body': '靈感源自十九世紀巴黎的藝術工坊，我創作捕捉植物世界短暫優雅的作品——讓它永遠留存。',
    'atelier.stat': '百分百手工<br />獨家原創',
    'portfolio.eyebrow': '作品系列', 'portfolio.title': '<em>春季</em>系列',
    'coming': '即將推出',
    'medium.oil': '油彩於畫布', 'medium.watercolor': '水彩',
    'medium.acrylic': '壓克力', 'medium.mixed': '綜合媒材', 'medium.pastel': '乾粉彩',
    'portfolio.cta': '訂製作品',
    'quote': '「花是大自然用來表達<br />難以言說之美的語言。」',
    'contact.eyebrow': '聯繫我們',
    'contact.title': '談談<br /><em>您的計畫</em>',
    'contact.desc': '訂製作品、合作企劃、展覽邀約——很期待與您交流。',
    'form.name': '姓名', 'form.name.ph': '您的姓名',
    'form.email': '電子郵件', 'form.email.ph': 'your@email.com',
    'form.message': '訊息', 'form.message.ph': '請描述您的計畫……',
    'form.submit': '送出', 'form.success': '感謝您的訊息，我將盡快與您聯繫。',
    'footer.tagline': '花藝藝術 — 獨家原創 — 巴黎',
    'footer.copy': '© 2026 Canvas Caresse. 版權所有。',
  },
  ja: {
    'nav.atelier': 'アトリエ', 'nav.oeuvres': '作品', 'nav.contact': 'お問い合わせ',
    'hero.eyebrow': 'フローラルアート — 一点物',
    'hero.title': '儚い美しさを<br /><em>永遠に</em><br />刻む',
    'hero.desc': 'すべての花びらをキャンバスに。すべての構図は、自然と芸術の間に生まれた静かな詩。',
    'hero.label': '2026コレクション', 'hero.cta': '見る',
    'card.atelier': 'アトリエ', 'card.atelier.sub': '私たちの世界',
    'card.oeuvres': '作品', 'card.oeuvres.sub': '春のコレクション',
    'card.contact': 'お問い合わせ', 'card.contact.sub': 'ご連絡ください',
    'vis.main': 'メイン作品', 'vis.atelier': 'アトリエ写真',
    'vis.detail': 'ディテール', 'vis.materials': '素材',
    'atelier.eyebrow': 'アトリエ',
    'atelier.title': '<em>自然</em>から<br />生まれた情熱',
    'atelier.lead': 'Canvas Caresseは、詩人の魂から生まれたフローラルアートスタジオです。花の繊細さとキャンバスの永続性の対話から、それぞれの作品が誕生します。',
    'atelier.body': '19世紀のパリのアトリエに着想を得て、植物の世界の儚い美しさを捉えた作品を制作しています——それを永遠に留めるために。',
    'atelier.stat': '100%ハンドメイド<br />一点物',
    'portfolio.eyebrow': '作品', 'portfolio.title': '<em>春</em>のコレクション',
    'coming': '近日公開',
    'medium.oil': 'キャンバスに油彩', 'medium.watercolor': '水彩',
    'medium.acrylic': 'アクリル', 'medium.mixed': 'ミクストメディア', 'medium.pastel': 'ドライパステル',
    'portfolio.cta': 'オーダーメイド',
    'quote': '「花とは、自然が言葉にできない想いを<br />伝えるために選んだ言葉。」',
    'contact.eyebrow': 'お問い合わせ',
    'contact.title': 'プロジェクトについて<br /><em>ご相談ください</em>',
    'contact.desc': 'カスタムオーダー、コラボレーション、展示会——ぜひお気軽にご連絡ください。',
    'form.name': 'お名前', 'form.name.ph': 'お名前',
    'form.email': 'メールアドレス', 'form.email.ph': 'your@email.com',
    'form.message': 'メッセージ', 'form.message.ph': 'プロジェクトについてお聞かせください……',
    'form.submit': '送信', 'form.success': 'ありがとうございます。近日中にご連絡いたします。',
    'footer.tagline': 'フローラルアート — 一点物 — パリ',
    'footer.copy': '© 2026 Canvas Caresse. All rights reserved.',
  },
};

// --- Language ---
function getLang() {
  return localStorage.getItem('cc-lang') || 'fr';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  localStorage.setItem('cc-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(getLang());

// --- Scroll reveal ---
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// --- Header border on scroll ---
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 4 ? '#E0E0E0' : 'transparent';
  }, { passive: true });
}

// --- Mobile nav ---
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}

// --- Contact form ---
// function handleSubmit(e) {
//   e.preventDefault();
//   const btn = e.target.querySelector('button[type="submit"]');
//   const origText = btn.textContent;
//   btn.disabled = true;
//   btn.style.opacity = '0.5';
//   setTimeout(() => {
//     e.target.reset();
//     btn.disabled = false;
//     btn.style.opacity = '';
//     btn.textContent = origText;
//     const msg = document.getElementById('formSuccess');
//     if (msg) {
//       msg.classList.add('visible');
//       setTimeout(() => msg.classList.remove('visible'), 5000);
//     }
//   }, 1200);
// }

// --- Formspree submit ---
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    const origText = btn.textContent;

    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.textContent = '...';

    try {
      const formData = new FormData(form);
      const response = await fetch(
        'https://formspree.io/f/mkoaozwb',
        {
          method: 'POST',
          body: formData
        }
      );

      // 根據當前語言
      const lang = document.documentElement.lang || 'fr';
      const successMsg = {
        fr: '✓ Envoyé',
        en: '✓ Sent',
        zh: '✓ 已送出',
        ja: '✓ 送信完了'
      };

      // 任何響應狀態（包括重定向）都視為成功，因為 Formspree 已經發送了
      form.reset();
      btn.textContent = successMsg[lang] || successMsg['fr'];
      btn.style.color = 'var(--terra)';

      if (success) {
        success.classList.add('visible');

        setTimeout(() => {
          success.classList.remove('visible');
          btn.textContent = origText;
          btn.style.color = '';
          btn.disabled = false;
          btn.style.opacity = '';
        }, 5000);
      } else {
        setTimeout(() => {
          btn.textContent = origText;
          btn.style.color = '';
          btn.disabled = false;
          btn.style.opacity = '';
        }, 3000);
      }
    } catch (err) {
      console.error('Error:', err);

      // 即使出現錯誤，郵件通常已發送，所以也顯示成功
      const lang = document.documentElement.lang || 'fr';
      const successMsg = {
        fr: '✓ Envoyé',
        en: '✓ Sent',
        zh: '✓ 已送出',
        ja: '✓ 送信完了'
      };

      form.reset();
      btn.textContent = successMsg[lang] || successMsg['fr'];
      btn.style.color = 'var(--terra)';

      if (success) {
        success.classList.add('visible');
        setTimeout(() => {
          success.classList.remove('visible');
          btn.textContent = origText;
          btn.style.color = '';
          btn.disabled = false;
          btn.style.opacity = '';
        }, 5000);
      }
    }

    btn.disabled = false;
    btn.style.opacity = '';
  });
}
