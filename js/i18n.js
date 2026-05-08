/**
 * Cacciatore & Cacciatore — Motor i18n con i18next
 */

const STORAGE_KEY  = 'gh_lang';
const DEFAULT_LANG = 'es';
const SUPPORTED    = ['es', 'en', 'pt'];

let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
if (!SUPPORTED.includes(currentLang)) currentLang = DEFAULT_LANG;

window.i18nReady = false;

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
async function initI18n() {

  // 1. Cargar los 3 JSONs primero
  const resources = {};
  for (const lang of SUPPORTED) {
    try {
      const r = await fetch(`locales/${lang}/translate.json`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      resources[lang] = { translation: data };
    } catch(e) {
      console.warn(`[i18n] Error cargando '${lang}':`, e);
    }
  }

  // 2. Init con los recursos ya cargados dentro
  await i18next.init({
    lng:          currentLang,
    fallbackLng:  'es',
    supportedLngs: SUPPORTED,
    resources:    resources,
    ns:           ['translation'],
    defaultNS:    'translation',
    interpolation: { escapeValue: false }
  });

  window.i18nReady = true;

  translateDOM();
  updateToggle(currentLang);
  bindToggleButtons();
}

/* ─────────────────────────────────────────
   TRADUCIR DOM
───────────────────────────────────────── */
function translateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18next.t(key);
    if (val && val !== key) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = i18next.t(key);
    if (val && val !== key) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = i18next.t(key);
    if (val && val !== key) el.title = val;
  });

  document.documentElement.lang = i18next.language;
}

/* ─────────────────────────────────────────
   CAMBIAR IDIOMA
───────────────────────────────────────── */
async function changeLang(lang) {
  if (!SUPPORTED.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  await i18next.changeLanguage(lang);
  translateDOM();
  updateToggle(lang);
}

/* ─────────────────────────────────────────
   TOGGLE VISUAL
───────────────────────────────────────── */
function updateToggle(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
}

/* ─────────────────────────────────────────
   BIND BOTONES
───────────────────────────────────────── */
function bindToggleButtons() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    changeLang(btn.dataset.lang);
  });
}

/* ─────────────────────────────────────────
   REBIND — para headers dinámicos
───────────────────────────────────────── */
window.i18nRebind = function() {
  bindToggleButtons();
  updateToggle(currentLang);
  translateDOM();
};

/* ─────────────────────────────────────────
   ARRANCAR
───────────────────────────────────────── */
function waitForI18nextAndInit() {
  if (typeof i18next !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initI18n);
    } else {
      initI18n();
    }
  } else {
    setTimeout(waitForI18nextAndInit, 50);
  }
}

waitForI18nextAndInit();