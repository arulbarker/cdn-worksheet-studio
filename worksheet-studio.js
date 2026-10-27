/* Worksheet Studio - bundle CDN. HASIL BUILD (npm run build:cdn), jangan diedit tangan. */
(function () {
  var st = document.createElement('style');
  st.textContent = "@font-face{font-family:'Andika';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/andika/Andika-Regular.ttf') format('truetype');font-weight:400}\n@font-face{font-family:'Andika';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/andika/Andika-Bold.ttf') format('truetype');font-weight:700}\n@font-face{font-family:'ComicNeue';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/comicneue/ComicNeue-Bold.ttf') format('truetype');font-weight:400 700}\n@font-face{font-family:'Poppins';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/poppins/Poppins-Regular.ttf') format('truetype');font-weight:400}\n@font-face{font-family:'Poppins';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/poppins/Poppins-Bold.ttf') format('truetype');font-weight:700}\n@font-face{font-family:'Tinos';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/tinos/Tinos-Regular.ttf') format('truetype');font-weight:400}\n@font-face{font-family:'Tinos';src:url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/tinos/Tinos-Bold.ttf') format('truetype');font-weight:700}\n:root{--ink:#1e1b4b;--bg:#f1f5f9;--card:#ffffff;--line:#e2e8f0;--text:#0f172a;--muted:#64748b;--brand:#6366f1;--brand2:#ec4899;--ok:#16a34a}\n*{box-sizing:border-box}\n[hidden]{display:none !important}\nbody{margin:0;font-family:'Andika',system-ui,sans-serif;background:var(--bg);color:var(--text);font-size:15px}\nbutton{font:inherit}\n.sidebar{position:fixed;top:0;bottom:0;left:0;width:min(86vw,320px);background:var(--ink);color:#e0e7ff;transform:translateX(-100%);transition:transform .2s;z-index:30;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:rgba(196,181,253,.25) transparent}\n.sidebar::-webkit-scrollbar{width:6px}\n.sidebar::-webkit-scrollbar-thumb{background:rgba(196,181,253,.25);border-radius:9999px}\nbody.nav-open .sidebar{transform:none;box-shadow:12px 0 40px -12px rgba(2,6,23,.6)}\n.scrim{display:none}\nbody.nav-open .scrim{display:block;position:fixed;inset:0;background:rgba(15,23,42,.45);z-index:20}\n.sidebar-brand{position:sticky;top:0;z-index:2;background:var(--ink);display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:17px}\n.sidebar-nav{padding:4px 10px 24px}\n.j-paud{--jc:#ea580c;--jbg:#fff7ed;--jnav:#fb923c}\n.j-sd13{--jc:#15803d;--jbg:#f0fdf4;--jnav:#4ade80}\n.j-sd46{--jc:#1d4ed8;--jbg:#eff6ff;--jnav:#60a5fa}\n.j-lintas{--jc:#7e22ce;--jbg:#faf5ff;--jnav:#c084fc}\n.nav-sec{display:flex;align-items:center;gap:8px;width:100%;min-height:40px;margin:18px 0 4px;padding:6px 10px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-align:left;cursor:pointer;opacity:.85}\n.nav-sec::before{content:'';flex:none;width:10px;height:10px;border-radius:50%;background:var(--jnav,#c4b5fd)}\n.nav-sec:hover,.nav-sec.on{opacity:1;background:rgba(255,255,255,.1)}\n.nav-item{display:flex;width:100%;align-items:center;justify-content:space-between;gap:8px;min-height:44px;padding:8px 10px 8px 16px;border:0;border-left:3px solid transparent;border-radius:8px;background:transparent;color:inherit;text-align:left;cursor:pointer;opacity:.9}\n.nav-item:hover{background:rgba(255,255,255,.06);opacity:1}\n.nav-item.on{background:rgba(255,255,255,.14);border-left-color:var(--jnav,#c4b5fd);color:#ffffff;font-weight:700;opacity:1}\n.nav-count{flex:none;font-style:normal;font-size:11px;min-width:24px;text-align:center;border-radius:999px;padding:2px 7px;background:rgba(255,255,255,.12)}\n.nav-item.on .nav-count{background:var(--jnav,#c4b5fd);color:var(--ink)}\n.topbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:10px;padding:6px 12px;background:var(--card);border-bottom:1px solid var(--line)}\n.topbar strong{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.icon-btn{min-width:44px;min-height:44px;border:0;background:transparent;color:inherit;font-size:20px;cursor:pointer;border-radius:8px}\n.workspace{display:flex;flex-direction:column;gap:16px;padding:16px}\n.step{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px;margin-bottom:12px}\n.step h3{display:flex;align-items:center;gap:8px;margin:0 0 10px;font-size:15px}\n.step h3 i{font-style:normal;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-size:12px}\n.opt+.opt{margin-top:12px}\n.opt-label{margin:0 0 6px;font-size:13px;color:var(--muted)}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n.chip{min-height:44px;padding:8px 14px;border:1px solid #cbd5e1;border-radius:999px;background:#ffffff;cursor:pointer;font-size:14px}\n.chip.on{background:#eef2ff;border-color:var(--brand);color:#4338ca;font-weight:700}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 16px;border:1px solid #cbd5e1;border-radius:10px;background:#ffffff;color:var(--text);cursor:pointer;font-weight:600;text-decoration:none}\n.btn:disabled{opacity:.5;cursor:default}\n.btn-primary{background:linear-gradient(90deg,var(--brand),var(--brand2));color:#ffffff;border:0}\n.btn-success{background:var(--ok);color:#ffffff;border-color:var(--ok)}\n.btn-danger{background:#dc2626;color:#ffffff;border-color:#dc2626}\n.btn-block{width:100%}\n.toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}\n.busy{font-size:13px;color:var(--muted)}\n.stage{display:flex;flex-direction:column-reverse;gap:12px}\n.thumbs{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}\n.thumb{flex:none;width:64px;padding:3px;border:2px solid transparent;border-radius:6px;background:#ffffff;cursor:pointer;display:flex;flex-direction:column;gap:2px;font-size:11px;align-items:center}\n.thumb.on{border-color:var(--brand)}\n.thumb>svg,.sheet>svg{display:block;width:100%;height:auto}\n.sheet{background:#ffffff;box-shadow:0 4px 18px rgba(15,23,42,.18);width:100%;max-width:820px;margin:0 auto}\n.bundle-bar{margin-top:14px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.bundle-list{display:flex;flex-wrap:wrap;gap:6px;flex:1}\n.bundle-item{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;border-radius:8px;padding:2px 4px 2px 10px;font-size:13px}\n.bundle-item button{min-width:36px;min-height:36px;border:0;background:transparent;cursor:pointer;font-size:18px}\n.ui-modal{position:fixed;inset:0;background:rgba(15,23,42,.5);display:flex;align-items:center;justify-content:center;padding:16px;z-index:50;opacity:0;transition:opacity .15s}\n.ui-modal.show{opacity:1}\n.ui-modal-box{background:#ffffff;border-radius:14px;padding:18px;max-width:380px;width:100%}\n.ui-modal-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:12px}\n.ui-toast{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);background:#0f172a;color:#ffffff;padding:10px 16px;border-radius:10px;z-index:60;font-size:14px}\n.chip-ai{border-style:dashed;border-color:var(--brand2);color:#be185d;font-weight:700}\n.ai-box{max-width:520px;max-height:90vh;overflow-y:auto}\n.ai-title{margin:0 0 10px;font-size:17px}\n.ai-input{display:block;width:100%;min-height:44px;margin-top:6px;padding:8px 12px;border:1px solid #cbd5e1;border-radius:10px;font:inherit}\n.ai-status{font-size:13px;color:var(--muted);min-height:18px}\n.ai-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:8px 0}\n.ai-cell{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;text-align:center}\n.ai-cell img,.ai-spin{display:block;width:100%;aspect-ratio:1;border-radius:8px;background:#f8fafc;object-fit:contain}\n.ai-spin{background:linear-gradient(90deg,#eef2ff,#fce7f3,#eef2ff);background-size:200% 100%;animation:ai-shimmer 1.2s linear infinite}\n@keyframes ai-shimmer{to{background-position:-200% 0}}\n.ai-saved-row{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:8px}\n.ui-modal-box .btn-block{margin-top:10px}\n.mode-switch{display:flex;gap:6px;padding:12px 16px 0}\n.mode-btn{flex:1;min-height:44px;border:1px solid #cbd5e1;border-radius:12px;background:#ffffff;font-weight:700;cursor:pointer}\n.mode-btn.on{background:linear-gradient(90deg,var(--brand),var(--brand2));color:#ffffff;border-color:transparent}\nbody.mode-ai .workspace{display:none}\nbody.mode-presisi .ai-mode{display:none}\n.ai-mode{display:flex;flex-direction:column;gap:16px;padding:16px}\n.aim-hero{background:linear-gradient(135deg,#eef2ff,#fce7f3);border-radius:16px;padding:18px;margin-bottom:16px}\n.aim-hero h2{margin:0 0 4px;font-size:20px}\n.aim-hero p{margin:0 0 12px;color:var(--muted);font-size:14px}\n.aim-hero .aim-scope{margin:10px 0 0;font-size:13px;text-align:center}\n.aim-step{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;margin-bottom:16px}\n.aim-step-h{display:flex;align-items:center;gap:10px;margin:0 0 12px;font-size:16px}\n.aim-step-h i{flex:none;font-style:normal;width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-size:13px}\n.aim-hint{margin:-6px 0 12px;font-size:13px;color:var(--muted)}\n.aim-tabs{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:8px}\n.aim-tab{min-height:48px;padding:8px 10px;border:2px solid var(--line);border-radius:12px;background:#ffffff;color:var(--jc,#4338ca);font-weight:700;cursor:pointer}\n.aim-tab.on{border-color:var(--jc,var(--brand));background:var(--jbg,#eef2ff)}\n.aim-filter{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:12px;padding:8px 8px 8px 12px;border-radius:10px;background:var(--jbg);color:var(--jc);font-size:14px}\n.aim-filter strong{flex:1}\n.aim-filter-x{min-height:40px;padding:6px 12px;border:1px solid currentColor;border-radius:999px;background:#ffffff;color:inherit;font:inherit;font-size:13px;cursor:pointer}\n.aim-jblk+.aim-jblk{margin-top:18px;padding-top:14px;border-top:1px dashed var(--line)}\n.aim-jj{display:inline-block;margin:0 0 4px;padding:3px 10px;border-radius:999px;background:var(--jbg);color:var(--jc);font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}\n.aim-grp{margin:12px 0 6px;padding-left:8px;border-left:3px solid var(--jc,var(--brand));font-size:13px;font-weight:700;color:#334155}\n.aim-jblk .chip.on{background:var(--jbg);border-color:var(--jc);color:var(--jc)}\n.aim-field+.aim-field,.aim-step .ai-input{margin-top:14px}\n.aim-label{margin:0 0 6px;font-size:13px;font-weight:700;color:#334155}\n.aim-more{margin-top:14px;border-top:1px solid var(--line)}\n.aim-more summary{display:flex;align-items:center;min-height:44px;padding-top:6px;color:var(--muted);font-size:14px;font-weight:700;cursor:pointer}\n.aim-more[open] summary{margin-bottom:6px}\n.aim-buat{margin-top:16px;min-height:52px;font-size:16px}\n.aim-meta{display:flex;align-items:center;gap:6px;margin-top:8px;font-size:14px;font-weight:700;min-width:0}\n.aim-meta span:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.aim-tag{flex:none;padding:2px 8px;border-radius:999px;background:var(--jbg,#eef2ff);color:var(--jc,#4338ca);font-size:11px}\n.aim-acak{min-height:56px;font-size:17px}\n.aim-toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}\n.aim-status{flex:1;min-width:140px;font-size:13px;color:var(--muted)}\n.aim-gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}\n.aim-card{position:relative;background:var(--card);border:2px solid transparent;border-top:4px solid var(--jc,var(--line));border-radius:12px;padding:8px;box-shadow:0 2px 10px rgba(15,23,42,.08)}\n.aim-card.on{border-color:var(--brand);border-top-color:var(--brand)}\n.aim-prev>svg{display:block;width:100%;height:auto}\n.aim-badge{position:absolute;top:12px;left:12px;background:#f59e0b;color:#ffffff;font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px}\n.aim-card-actions{display:flex;gap:6px;margin-top:8px}\n.aim-prev.proses svg{opacity:.4}\n.aim-proses{position:absolute;left:8px;right:8px;bottom:8px;background:rgba(15,23,42,.85);color:#ffffff;font-size:12px;line-height:1.35;padding:6px 10px;border-radius:8px}\n.aim-masalah{margin-top:8px;background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:8px 10px;font-size:12px;color:#78350f}\n.aim-masalah ul{margin:4px 0;padding-left:18px}\n.aim-masalah p{margin:0;color:#92400e}\n.aim-card-actions.empat{flex-wrap:wrap}\n.aim-card-actions.empat .btn{flex:1 1 40%}\n.edit-soal{border:1px solid var(--line);border-radius:10px;padding:8px 10px 10px;margin:0 0 10px}\n.edit-soal legend{font-size:13px;font-weight:700;padding:0 4px}\n.edit-label{display:block;margin-top:6px}\n.edit-box textarea.ai-input{resize:vertical;line-height:1.4}\n.edit-actions{position:sticky;bottom:-18px;background:#ffffff;padding:10px 0 4px}\n.aim-card-actions .btn{flex:1;padding:6px 4px;font-size:13px}\n.aim-empty{color:var(--muted);text-align:center;padding:40px 16px;background:var(--card);border-radius:12px}\n.bundle-wrap{padding:0 16px 16px}\n.sheet-wrap{position:relative;width:100%;max-width:820px;margin:0 auto}\n.sheet{cursor:zoom-in}\n.aim-prev{position:relative;cursor:zoom-in}\n.eye-btn{position:absolute;top:8px;right:8px;width:44px;height:44px;border-radius:50%;border:0;background:rgba(15,23,42,.78);color:#ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(15,23,42,.3)}\n.eye-btn:hover{background:var(--brand)}\n.viewer{position:fixed;inset:0;z-index:70;background:#0f172a;display:flex;flex-direction:column}\n.viewer-bar{display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:8px 12px;color:#ffffff}\n.viewer-label{flex:1;min-width:140px;font-size:14px;font-weight:600}\n.viewer-btn{min-width:44px;min-height:44px;padding:0 12px;border:0;border-radius:10px;background:rgba(255,255,255,.14);color:#ffffff;font-size:18px;font-weight:700;cursor:pointer}\n.viewer-btn:disabled{opacity:.35;cursor:default}\n.viewer-stage{flex:1;overflow:auto;padding:12px}\n.viewer-page{margin:0 auto;background:#ffffff;box-shadow:0 6px 30px rgba(0,0,0,.5)}\n.viewer-page>svg{display:block;width:100%;height:auto}\nbody.need-login .sidebar,body.need-login .main,body.need-login .scrim{display:none}\nbody:not(.need-login) .login{display:none}\n.login{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px;background:linear-gradient(135deg,#eef2ff,#fce7f3)}\n.login-card{width:100%;max-width:400px;background:var(--card);border-radius:18px;padding:24px 20px;box-shadow:0 12px 40px -12px rgba(30,27,75,.35)}\n.login-logo{width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;margin-bottom:14px}\n.login-card h1{margin:0 0 6px;font-size:21px}\n.login-sub{margin:0 0 18px;color:var(--muted);font-size:14px}\n.login-card label{display:block;font-size:13px;color:var(--muted)}\n.login-card .btn{margin-top:12px}\n.login-msg{min-height:20px;margin:10px 0 0;color:#dc2626;font-size:14px}\n.login-note{margin:14px 0 0;font-size:13px;color:var(--muted)}\n.login-wait{text-align:center;color:var(--muted);padding:20px 0}\n.sidebar-user{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:4px 16px 10px;font-size:13px}\n.sidebar-user span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.85}\n.sidebar-tools{padding:0 10px}\n.nav-tool{display:flex;width:100%;align-items:center;min-height:44px;padding:8px 10px;border:1px solid rgba(224,231,255,.25);border-radius:8px;background:rgba(255,255,255,.06);color:inherit;text-align:left;cursor:pointer}\n.nav-tool:hover{background:rgba(255,255,255,.12)}\n.profil-logo-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:8px}\n.profil-logo{width:72px;height:72px;border:1px dashed #cbd5e1;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f8fafc;font-size:11px;color:var(--muted);text-align:center;overflow:hidden}\n.profil-logo img{max-width:100%;max-height:100%;object-fit:contain}\n.sidebar-user button{min-height:36px;padding:4px 12px;border:1px solid rgba(224,231,255,.35);border-radius:8px;background:transparent;color:inherit;cursor:pointer}\n@media (min-width:1024px){\n  .ai-mode{display:grid;grid-template-columns:360px 1fr;align-items:start}\n  .aim-controls{position:sticky;top:72px;max-height:calc(100vh - 88px);overflow-y:auto}\n}\n@media (min-width:1024px){\n  .sidebar{transform:none;width:260px}\n  .main{margin-left:260px;transition:margin-left .2s}\n  body.nav-hidden .sidebar{transform:translateX(-100%)}\n  body.nav-hidden .main{margin-left:0}\n  .workspace{display:grid;grid-template-columns:360px 1fr;align-items:start}\n  .panel-settings{position:sticky;top:72px;max-height:calc(100vh - 88px);overflow-y:auto}\n  .stage{flex-direction:row}\n  .thumbs{flex-direction:column;overflow:visible}\n}\n";
  document.head.appendChild(st);
  document.body.className = (document.body.className + ' ' + "need-login").trim();
  var boot = document.getElementById('ws-boot');
  if (boot) boot.remove();
  document.body.insertAdjacentHTML('afterbegin', "<section class=\"login\">\n  <div class=\"login-card\">\n    <div class=\"login-logo\">W</div>\n    <h1 data-i18n=\"login.judul\">Masuk ke Worksheet Kids Studio</h1>\n    <p class=\"login-sub\" data-i18n=\"login.sub\">Buat worksheet anak PAUD sampai SD yang rapi dan siap cetak.</p>\n    <p id=\"login-wait\" class=\"login-wait\" hidden data-i18n=\"login.memeriksa\">Memeriksa akses...</p>\n    <form id=\"login-form\" novalidate>\n      <label for=\"login-email\" data-i18n=\"login.email\">Email pembelian</label>\n      <input id=\"login-email\" class=\"ai-input\" type=\"email\" autocomplete=\"email\" inputmode=\"email\" required>\n      <button id=\"login-btn\" type=\"submit\" class=\"btn btn-primary btn-block\" data-i18n=\"login.masuk\">Masuk</button>\n      <p id=\"login-msg\" class=\"login-msg\" role=\"alert\"></p>\n      <p class=\"login-note\" data-i18n=\"login.catatan\">Pakai email yang sama dengan saat membeli di Lynk.id. Satu akun bisa dipakai di 2 perangkat.</p>\n    </form>\n  </div>\n</section>\n<aside class=\"sidebar\">\n  <div class=\"sidebar-brand\">\n    <strong data-i18n=\"app.title\">Worksheet Studio</strong>\n    <button type=\"button\" class=\"icon-btn\" data-action=\"nav-tutup\" data-i18n-aria=\"aria.tutup\">&#x2715;</button>\n  </div>\n  <div id=\"user-box\" class=\"sidebar-user\" hidden>\n    <span id=\"user-nama\"></span>\n    <button type=\"button\" id=\"user-keluar\" data-i18n=\"login.keluar\">Keluar</button>\n  </div>\n  <div class=\"sidebar-tools\">\n    <button type=\"button\" class=\"nav-tool\" data-action=\"profil\"><span data-i18n=\"profil.menu\">Profil Sekolah</span></button>\n  </div>\n  <nav id=\"nav\" class=\"sidebar-nav\"></nav>\n</aside>\n<div class=\"scrim\" data-action=\"nav-tutup\"></div>\n<main class=\"main\">\n  <header class=\"topbar\">\n    <button type=\"button\" class=\"icon-btn\" data-action=\"nav-toggle\" data-i18n-aria=\"aria.buka\">&#9776;</button>\n    <strong data-i18n=\"app.title\">Worksheet Studio</strong>\n  </header>\n  <div class=\"mode-switch\">\n    <button type=\"button\" class=\"mode-btn\" data-action=\"mode\" data-mode=\"ai\" data-i18n=\"mode.ai\">Worksheet AI</button>\n    <button type=\"button\" class=\"mode-btn\" data-action=\"mode\" data-mode=\"presisi\" data-i18n=\"mode.presisi\">Presisi</button>\n  </div>\n  <div id=\"ai-mode\" class=\"ai-mode\"></div>\n  <div class=\"workspace\">\n    <section class=\"panel-settings\">\n      <div id=\"settings\"></div>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" data-action=\"buat\" data-i18n=\"btn.buat\">Buat Worksheet</button>\n    </section>\n    <section class=\"panel-preview\">\n      <div class=\"toolbar\">\n        <button type=\"button\" class=\"btn\" data-action=\"acak\" data-i18n=\"btn.acak\">Acak Ulang</button>\n        <button type=\"button\" class=\"btn\" data-action=\"bundle\" data-i18n=\"btn.bundle\">+ Bundle</button>\n        <button type=\"button\" class=\"btn btn-success\" data-action=\"pdf\" data-i18n=\"btn.pdf\">Unduh PDF</button>\n        <span id=\"busy\" class=\"busy\" hidden data-i18n=\"msg.pdfProses\">Menyiapkan PDF</span>\n      </div>\n      <div class=\"stage\">\n        <div id=\"thumbs\" class=\"thumbs\"></div>\n        <div class=\"sheet-wrap\">\n          <div id=\"sheet\" class=\"sheet\"></div>\n          <button type=\"button\" class=\"eye-btn\" data-action=\"lihat\" data-i18n-aria=\"view.lihat\"><svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg></button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"bundle-wrap\">\n    <div class=\"bundle-bar\">\n      <strong><span data-i18n=\"bundle.title\">Bundle</span> (<span id=\"bundle-count\">0</span>)</strong>\n      <div id=\"bundle-list\" class=\"bundle-list\"></div>\n      <button type=\"button\" class=\"btn btn-success\" data-action=\"bundle-pdf\" data-i18n=\"bundle.unduh\">Unduh Bundle PDF</button>\n    </div>\n  </div>\n</main>");
})();
/* core/namespace.js */
globalThis.WS = globalThis.WS || {};

/* core/rng.js */
(function (WS) {
  'use strict';

  function create(seed) {
    let a = (seed >>> 0) || 1;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function int(rnd, min, max) {
    return min + Math.floor(rnd() * (max - min + 1));
  }

  function pick(rnd, arr) {
    return arr[Math.floor(rnd() * arr.length)];
  }

  function shuffle(rnd, arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function bag(rnd, arr) {
    let pool = [];
    let last;
    return function next() {
      if (!pool.length) {
        pool = shuffle(rnd, arr);
        if (pool.length > 1 && pool[pool.length - 1] === last) pool.unshift(pool.pop());
      }
      last = pool.pop();
      return last;
    };
  }

  function derive(seed, n) {
    return (Math.imul((seed >>> 0) ^ 0x9E3779B9, 2654435761) + Math.imul(n + 1, 40503)) >>> 0;
  }

  function newSeed() {
    return (Math.floor(Math.random() * 4294967295) >>> 0) || 1;
  }

  WS.rng = { create, int, pick, shuffle, bag, derive, newSeed };
})(globalThis.WS);

/* core/paper.js */
(function (WS) {
  'use strict';

  const SIZES = { A4: [210, 297], F4: [215, 330], Letter: [215.9, 279.4] };
  const LABELS = { A4: 'A4', F4: 'F4 (Folio)', Letter: 'Letter' };

  function size(kertas, orientasi) {
    const s = SIZES[kertas] || SIZES.A4;
    return orientasi === 'lanskap' ? { w: s[1], h: s[0] } : { w: s[0], h: s[1] };
  }

  WS.paper = { SIZES, LABELS, size, MARGIN: 10 };
})(globalThis.WS);

/* core/autofit.js */
(function (WS) {
  'use strict';

  function rows(area, n, gap) {
    const g = n > 1 ? gap : 0;
    const h = (area.h - g * (n - 1)) / n;
    const out = [];
    for (let i = 0; i < n; i++) out.push({ x: area.x, y: area.y + i * (h + g), w: area.w, h });
    return out;
  }

  function icons(box, count, maxSize, gapRatio) {
    if (!count) return [];
    const gr = gapRatio == null ? 0.18 : gapRatio;
    let best = null;
    for (let lines = 1; lines <= count; lines++) {
      const per = Math.ceil(count / lines);
      const size = Math.min(box.h / (lines + gr * (lines - 1)), box.w / (per + gr * (per - 1)), maxSize);
      if (!best || size > best.size + 1e-9) best = { size, lines, per };
    }
    const s = best.size;
    const gap = s * gr;
    const totalH = best.lines * s + (best.lines - 1) * gap;
    const y0 = box.y + (box.h - totalH) / 2;
    const out = [];
    for (let i = 0; i < count; i++) {
      const line = Math.floor(i / best.per);
      const col = i % best.per;
      out.push({ x: box.x + col * (s + gap), y: y0 + line * (s + gap), size: s });
    }
    return out;
  }

  WS.fit = { rows, icons };
})(globalThis.WS);

/* core/registry.js */
(function (WS) {
  'use strict';

  const JENJANG = [
    { id: 'paud', label: 'PAUD – TK' },
    { id: 'sd13', label: 'SD Kelas 1–3' },
    { id: 'sd46', label: 'SD Kelas 4–6' },
    { id: 'lintas', label: 'Lintas Jenjang' }
  ];

  const GROUPS = [
    { id: 'motorik', jenjang: 'paud', label: 'Motorik Halus' },
    { id: 'huruf', jenjang: 'paud', label: 'Huruf & Pra-Membaca' },
    { id: 'angka', jenjang: 'paud', label: 'Angka & Berhitung' },
    { id: 'mewarnai', jenjang: 'paud', label: 'Mewarnai' },
    { id: 'mencocokkan', jenjang: 'paud', label: 'Mencocokkan' },
    { id: 'logika', jenjang: 'paud', label: 'Logika Visual' },
    { id: 'puzzle-paud', jenjang: 'paud', label: 'Labirin & Dot-to-Dot' },
    { id: 'bindo-dasar', jenjang: 'sd13', label: 'Bahasa Indonesia Dasar' },
    { id: 'menulis', jenjang: 'sd13', label: 'Latihan Menulis' },
    { id: 'mtk-dasar', jenjang: 'sd13', label: 'Matematika Dasar' },
    { id: 'mtk-terapan', jenjang: 'sd13', label: 'Matematika Terapan' },
    { id: 'puzzle-sd', jenjang: 'sd13', label: 'Puzzle Edukatif' },
    { id: 'mtk-lanjut', jenjang: 'sd46', label: 'Matematika Lanjut' },
    { id: 'bindo-lanjut', jenjang: 'sd46', label: 'Bahasa Indonesia Lanjut' },
    { id: 'ipas', jenjang: 'sd46', label: 'IPAS' },
    { id: 'pancasila', jenjang: 'sd46', label: 'Pendidikan Pancasila' },
    { id: 'english', jenjang: 'lintas', label: 'Bahasa Inggris' },
    { id: 'agama', jenjang: 'lintas', label: 'Agama Islam' },
    { id: 'kuis', jenjang: 'lintas', label: 'Lembar Soal / Ulangan' },
    { id: 'pendukung', jenjang: 'lintas', label: 'Lembar Pendukung' }
  ];

  const REQUIRED = ['id', 'grup', 'jenjang', 'nama', 'judul', 'instruksi', 'layout', 'defaults', 'generatePage'];
  const recipes = new Map();

  function define(cfg) {
    for (const k of REQUIRED) {
      if (cfg[k] == null) throw new Error('Resep ' + (cfg.id || '?') + ' tanpa ' + k);
    }
    if (recipes.has(cfg.id)) throw new Error('Resep duplikat: ' + cfg.id);
    if (!GROUPS.some(g => g.id === cfg.grup)) throw new Error('Grup tidak dikenal: ' + cfg.grup);
    if (typeof cfg.generatePage !== 'function') throw new Error('Resep ' + cfg.id + ': generatePage harus fungsi');
    if (WS.layouts && !WS.layouts[cfg.layout]) throw new Error('Layout tidak dikenal: ' + cfg.layout);
    const r = Object.assign({ hasAnswers: true, opsi: [] }, cfg);
    recipes.set(cfg.id, r);
    return r;
  }

  function get(id) {
    const r = recipes.get(id);
    if (!r) throw new Error('Resep tidak ditemukan: ' + id);
    return r;
  }

  function byGroup(grupId) {
    return Array.from(recipes.values()).filter(r => r.grup === grupId);
  }

  function all() {
    return Array.from(recipes.values());
  }

  function group(id) {
    return GROUPS.find(g => g.id === id);
  }

  WS.registry = { JENJANG, GROUPS, define, get, byGroup, all, group };
})(globalThis.WS);

/* core/doc.js */
(function (WS) {
  'use strict';

  const COMMON_DEFAULTS = { kesulitan: 'mudah', halaman: 1, gaya: 'ceria', kertas: 'A4', orientasi: 'potret', kunci: true };

  function text(v, params) {
    return typeof v === 'function' ? v(params) : v;
  }

  function normalize(recipe, params) {
    return Object.assign({}, COMMON_DEFAULTS, recipe.defaults, params || {});
  }

  function create(resepId, params, seed) {
    const recipe = WS.registry.get(resepId);
    const p = normalize(recipe, params);
    const s = (seed >>> 0) || WS.rng.newSeed();
    const area = WS.page.contentArea(p, recipe);
    const env = { area, aspect: area.h / area.w };
    const pages = [];
    for (let i = 0; i < p.halaman; i++) {
      const rnd = WS.rng.create(WS.rng.derive(s, i));
      pages.push(recipe.generatePage(p, rnd, Object.assign({ pageIndex: i }, env)));
    }
    return { v: 1, resepId, params: p, seed: s, judul: text(recipe.judul, p), instruksi: text(recipe.instruksi, p), pages };
  }

  WS.doc = { COMMON_DEFAULTS, normalize, create, text };
})(globalThis.WS);

/* render/svg.js */
(function (WS) {
  'use strict';

  function n(v) {
    return String(Math.round(v * 100) / 100);
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function attrs(a) {
    let out = '';
    for (const k in a) {
      const v = a[k];
      if (v == null || v === false) continue;
      out += ' ' + k + '="' + (typeof v === 'number' ? n(v) : esc(v)) + '"';
    }
    return out;
  }

  function el(tag, a, children) {
    const at = attrs(a || {});
    return children == null ? '<' + tag + at + '/>' : '<' + tag + at + '>' + children + '</' + tag + '>';
  }

  function text(x, y, str, a) {
    return el('text', Object.assign({ x, y }, a || {}), esc(str));
  }

  WS.svg = { n, esc, attrs, el, text };
})(globalThis.WS);

/* render/ai-themes.js */
(function (WS) {
  'use strict';

  const themes = new Map();

  function add(theme) {
    themes.set(theme.id, theme);
  }

  function get(id) {
    return themes.get(id);
  }

  function list() {
    return Array.from(themes.values()).sort((a, b) => a.created - b.created);
  }

  function remove(id) {
    themes.delete(id);
  }

  function parse(name) {
    const m = /^ai:([a-z0-9-]+)\/([a-z0-9-]+)$/.exec(String(name));
    return m ? { themeId: m[1], slug: m[2] } : null;
  }

  function names(themeId) {
    const th = get(themeId);
    return th ? th.items.map(it => 'ai:' + th.id + '/' + it.slug) : [];
  }

  function item(name) {
    const p = parse(name);
    const th = p && get(p.themeId);
    return th ? th.items.find(it => it.slug === p.slug) || null : null;
  }

  function image(name, variant) {
    const p = parse(name);
    const th = p && get(p.themeId);
    if (!th) return null;
    const other = variant === 'black' ? 'color' : 'black';
    return (th.images[variant] || {})[p.slug] || (th.images[other] || {})[p.slug] || null;
  }

  WS.aiThemes = { add, get, list, remove, parse, names, item, image };
})(globalThis.WS);

/* render/icons.js */
(function (WS) {
  'use strict';

  const BASE = 'https://cdn.jsdelivr.net/npm/openmoji@15.1.0/';

  const ICONS = {
    apel: { hex: '1F34E', label: 'Apel', tema: 'buah' },
    pisang: { hex: '1F34C', label: 'Pisang', tema: 'buah' },
    jeruk: { hex: '1F34A', label: 'Jeruk', tema: 'buah' },
    anggur: { hex: '1F347', label: 'Anggur', tema: 'buah' },
    stroberi: { hex: '1F353', label: 'Stroberi', tema: 'buah' },
    semangka: { hex: '1F349', label: 'Semangka', tema: 'buah' },
    wortel: { hex: '1F955', label: 'Wortel', tema: 'makanan' },
    keju: { hex: '1F9C0', label: 'Keju', tema: 'makanan' },
    kucing: { hex: '1F408', label: 'Kucing', tema: 'hewan' },
    anjing: { hex: '1F415', label: 'Anjing', tema: 'hewan' },
    ikan: { hex: '1F41F', label: 'Ikan', tema: 'hewan' },
    'anak-ayam': { hex: '1F425', label: 'Anak Ayam', tema: 'hewan' },
    kelinci: { hex: '1F407', label: 'Kelinci', tema: 'hewan' },
    lebah: { hex: '1F41D', label: 'Lebah', tema: 'hewan' },
    'kupu-kupu': { hex: '1F98B', label: 'Kupu-kupu', tema: 'hewan' },
    gajah: { hex: '1F418', label: 'Gajah', tema: 'hewan' },
    tikus: { hex: '1F401', label: 'Tikus', tema: 'hewan' },
    monyet: { hex: '1F412', label: 'Monyet', tema: 'hewan' },
    beruang: { hex: '1F43B', label: 'Beruang', tema: 'hewan' },
    domba: { hex: '1F411', label: 'Domba', tema: 'hewan' },
    flamingo: { hex: '1F9A9', label: 'Flamingo', tema: 'hewan' },
    harimau: { hex: '1F405', label: 'Harimau', tema: 'hewan' },
    ular: { hex: '1F40D', label: 'Ular', tema: 'hewan' },
    zebra: { hex: '1F993', label: 'Zebra', tema: 'hewan' },
    unta: { hex: '1F42A', label: 'Unta', tema: 'hewan' },
    nanas: { hex: '1F34D', label: 'Nanas', tema: 'buah' },
    cabai: { hex: '1F336', label: 'Cabai', tema: 'makanan' },
    'es-krim': { hex: '1F366', label: 'Es Krim', tema: 'makanan' },
    yoyo: { hex: '1FA80', label: 'Yoyo', tema: 'benda' },
    mobil: { hex: '1F697', label: 'Mobil', tema: 'kendaraan' },
    bus: { hex: '1F68C', label: 'Bus', tema: 'kendaraan' },
    sepeda: { hex: '1F6B2', label: 'Sepeda', tema: 'kendaraan' },
    pesawat: { hex: '2708', label: 'Pesawat', tema: 'kendaraan' },
    perahu: { hex: '26F5', label: 'Perahu', tema: 'kendaraan' },
    kereta: { hex: '1F682', label: 'Kereta', tema: 'kendaraan' },
    bunga: { hex: '1F338', label: 'Bunga', tema: 'alam' },
    bintang: { hex: '2B50', label: 'Bintang', tema: 'alam' },
    matahari: { hex: '2600', label: 'Matahari', tema: 'alam' },
    pohon: { hex: '1F333', label: 'Pohon', tema: 'alam' },
    bulan: { hex: '1F319', label: 'Bulan', tema: 'alam' },
    rumah: { hex: '1F3E0', label: 'Rumah', tema: 'benda' },
    bola: { hex: '26BD', label: 'Bola', tema: 'benda' },
    gunting: { hex: '2702', label: 'Gunting', tema: 'alat' }
  };

  const TEMA = { buah: 'Buah', hewan: 'Hewan', kendaraan: 'Kendaraan', alam: 'Alam' };
  const TEMA_ACAK = ['hewan', 'buah', 'kendaraan', 'alam'];

  const PAIRS = [
    { from: 'lebah', to: 'bunga' },
    { from: 'tikus', to: 'keju' },
    { from: 'kelinci', to: 'wortel' },
    { from: 'monyet', to: 'pisang' },
    { from: 'anak-ayam', to: 'rumah' },
    { from: 'anjing', to: 'bola' },
    { from: 'kupu-kupu', to: 'bunga' },
    { from: 'mobil', to: 'rumah' }
  ];

  const FALLBACK = '<circle cx="36" cy="36" r="26" fill="none" stroke="#999999" stroke-width="3"/>';
  const cache = { color: {}, black: {} };

  function exists(name) {
    return Object.prototype.hasOwnProperty.call(ICONS, name) || !!WS.aiThemes.item(name);
  }

  function byTema(tema) {
    if (String(tema).startsWith('ai:')) return WS.aiThemes.names(tema.slice(3));
    return Object.keys(ICONS).filter(k => ICONS[k].tema === tema);
  }

  function pool(tema, rnd) {
    const t = String(tema || '');
    if (t.startsWith('ai:')) {
      const th = WS.aiThemes.get(t.slice(3));
      const names = WS.aiThemes.names(t.slice(3));
      if (th && names.length) return { names, label: th.topik };
    }
    const key = TEMA[t] ? t : WS.rng.pick(rnd, TEMA_ACAK);
    return { names: byTema(key), label: TEMA[key] };
  }

  function label(name) {
    if (ICONS[name]) return ICONS[name].label;
    const it = WS.aiThemes.item(name);
    return it ? it.nama : '';
  }

  function temaChoices() {
    return [{ v: 'acak', label: 'Acak' }]
      .concat(Object.keys(TEMA).map(k => ({ v: k, label: TEMA[k] })))
      .concat(WS.aiThemes.list().map(th => ({ v: 'ai:' + th.id, label: th.topik + ' (AI)' })));
  }

  function url(name, variant) {
    return BASE + variant + '/svg/' + ICONS[name].hex + '.svg';
  }

  function innerOf(svgText) {
    const start = svgText.indexOf('>', svgText.indexOf('<svg')) + 1;
    const end = svgText.lastIndexOf('</svg>');
    return svgText.slice(start, end).replace(/\sid="[^"]*"/g, '');
  }

  function set(variant, name, svgText) {
    cache[variant][name] = innerOf(svgText);
  }

  function has(variant, name) {
    return cache[variant][name] != null;
  }

  async function load(names, variant) {
    const todo = names.filter(nm => ICONS[nm] && !has(variant, nm));
    await Promise.all(todo.map(async nm => {
      try {
        const res = await fetch(url(nm, variant));
        if (res.ok) set(variant, nm, await res.text());
      } catch (e) {
        console.warn('Ikon gagal dimuat: ' + nm);
      }
    }));
    const ai = names.filter(nm => WS.aiThemes.parse(nm));
    if (ai.length && WS.stickers) await WS.stickers.ensure(ai, variant);
  }

  function use(name, x, y, size, variant) {
    if (WS.aiThemes.parse(name)) {
      const src = WS.aiThemes.image(name, variant);
      if (src) return WS.svg.el('image', { x, y, width: size, height: size, 'xlink:href': src, preserveAspectRatio: 'xMidYMid meet' });
    }
    return WS.svg.el('svg', { x, y, width: size, height: size, viewBox: '0 0 72 72' }, cache[variant][name] || FALLBACK);
  }

  WS.icons = { BASE, ICONS, TEMA, PAIRS, exists, byTema, pool, label, temaChoices, url, innerOf, set, has, load, use };
})(globalThis.WS);

/* render/themes.js */
(function (WS) {
  'use strict';

  const S = WS.svg;
  const M = WS.paper.MARGIN;

  function labelW(str, size) {
    return str.length * size * 0.52;
  }

  function fields(x, y, w, labels, font, size, color) {
    const gap = 6;
    const each = (w - gap * (labels.length - 1)) / labels.length;
    let out = '';
    labels.forEach((lb, i) => {
      const fx = x + i * (each + gap);
      const txt = lb + ':';
      out += S.text(fx, y, txt, { 'font-family': font, 'font-size': size, fill: color });
      out += S.el('line', { x1: fx + labelW(txt, size) + 1, y1: y + 0.8, x2: fx + each, y2: y + 0.8, stroke: color, 'stroke-width': 0.3 });
    });
    return out;
  }

  function pageNo(ctx, y, font, color) {
    if (ctx.pageCount <= 1) return '';
    return S.text(ctx.w / 2, y, 'Hal. ' + ctx.pageNo + '/' + ctx.pageCount, { 'font-family': font, 'font-size': 3, fill: color, 'text-anchor': 'middle' });
  }

  function logo(href, x, y, s) {
    return S.el('image', { x, y, width: s, height: s, 'xlink:href': href, preserveAspectRatio: 'xMidYMid meet' });
  }

  function brand(ctx, cx, y, size, font, color) {
    const p = ctx.profil;
    if (!p.nama && !p.logo) return '';
    const nama = p.nama || '';
    const ls = p.logo ? size * 1.6 : 0;
    const total = ls + (ls && nama ? size * 0.5 : 0) + labelW(nama, size);
    const sx = cx - total / 2;
    let out = p.logo ? logo(p.logo, sx, y - size * 1.25, ls) : '';
    if (nama) out += S.text(sx + total, y, nama, { 'font-family': font, 'font-weight': 'bold', 'font-size': size, fill: color, 'text-anchor': 'end' });
    return out;
  }

  function titleOf(ctx) {
    return ctx.kunci ? 'Kunci Jawaban: ' + ctx.judul : ctx.judul;
  }

  const ceria = {
    id: 'ceria',
    label: 'Ceria Warna-warni',
    iconVariant: 'color',
    font: { title: 'ComicNeue', body: 'Andika' },
    ink: '#334155',
    answerColor: '#dc2626',
    icons: ['beruang', 'bintang'],
    chrome(ctx) {
      const x0 = M, y0 = M, w = ctx.w - 2 * M, h = ctx.h - 2 * M;
      const ix = x0 + 8, iw = w - 16;
      let svg = '<defs><linearGradient id="g-ceria" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f472b6"/><stop offset="1" stop-color="#fb923c"/></linearGradient></defs>';
      svg += S.el('rect', { x: 0, y: 0, width: ctx.w, height: ctx.h, fill: '#fffdf5' });
      svg += S.el('rect', { x: x0, y: y0, width: w, height: h, rx: 6, fill: 'none', stroke: '#fbbf24', 'stroke-width': 2.4 });
      svg += S.el('rect', { x: x0 + 3, y: y0 + 3, width: w - 6, height: h - 6, rx: 4, fill: 'none', stroke: '#f472b6', 'stroke-width': 0.6, 'stroke-dasharray': '2 1.5' });
      let y = y0 + 12;
      svg += fields(ix, y, iw, ['Nama', 'Kelas', 'Tanggal'], 'Andika', 3.6, '#92400e');
      y += 5;
      svg += S.el('rect', { x: ix, y, width: iw, height: 13, rx: 6.5, fill: 'url(#g-ceria)' });
      svg += S.text(ctx.w / 2, y + 9, titleOf(ctx), { 'font-family': 'ComicNeue', 'font-weight': 'bold', 'font-size': 7, fill: '#ffffff', 'text-anchor': 'middle' });
      y += 19.5;
      svg += S.text(ctx.w / 2, y, ctx.instruksi, { 'font-family': 'Andika', 'font-size': 4, fill: '#9a3412', 'text-anchor': 'middle' });
      y += 5;
      const fy = y0 + h - 18;
      for (let i = 0; i < 3; i++) svg += WS.icons.use('bintang', ix + i * 8, fy + 2, 7, 'color');
      svg += S.text(ix + 26, fy + 7.5, 'Hebat!', { 'font-family': 'ComicNeue', 'font-weight': 'bold', 'font-size': 4.5, fill: '#a16207' });
      svg += WS.icons.use('beruang', ix + iw - 13, fy - 1, 13, 'color');
      const cap = brand(ctx, ctx.w / 2, fy + 6.5, 3.4, 'ComicNeue', '#a16207');
      svg += cap + pageNo(ctx, cap ? fy + 12 : fy + 7.5, 'Andika', '#a16207');
      return { svg, area: { x: ix, y, w: iw, h: fy - 3 - y } };
    },
    badge(nr, cx, cy, r) {
      return S.el('circle', { cx, cy, r, fill: '#60a5fa' }) +
        S.text(cx, cy + r * 0.38, String(nr), { 'font-family': 'ComicNeue', 'font-weight': 'bold', 'font-size': r * 1.1, fill: '#ffffff', 'text-anchor': 'middle' });
    },
    answerBox(x, y, w, h) {
      return S.el('rect', { x, y, width: w, height: h, rx: Math.min(w, h) * 0.14, fill: '#eff6ff', stroke: '#60a5fa', 'stroke-width': 0.6, 'stroke-dasharray': '1.6 1.2' });
    },
    rowBg(x, y, w, h) {
      return S.el('rect', { x, y, width: w, height: h, rx: Math.min(4, h * 0.2), fill: '#ffffff', stroke: '#fde68a', 'stroke-width': 0.5 });
    }
  };

  const minimalis = {
    id: 'minimalis',
    label: 'Minimalis Montessori',
    iconVariant: 'color',
    font: { title: 'Poppins', body: 'Poppins' },
    ink: '#5b5147',
    answerColor: '#c2410c',
    icons: [],
    chrome(ctx) {
      const x0 = M + 4, w = ctx.w - 2 * (M + 4);
      let svg = S.el('rect', { x: 0, y: 0, width: ctx.w, height: ctx.h, fill: '#fdfcf9' });
      let y = M + 6;
      svg += fields(x0, y, w, ['Nama', 'Tanggal'], 'Poppins', 3.4, '#6b7280');
      y += 9;
      svg += S.text(x0, y, (ctx.meta.grup + ' · ' + ctx.meta.level).toUpperCase(), { 'font-family': 'Poppins', 'font-size': 2.8, fill: '#8b9a86' });
      y += 8;
      svg += S.text(x0, y, titleOf(ctx), { 'font-family': 'Poppins', 'font-weight': 'bold', 'font-size': 7.5, fill: '#3f4a3c' });
      y += 6.5;
      svg += S.text(x0, y, ctx.instruksi, { 'font-family': 'Poppins', 'font-size': 3.6, fill: '#6b7280' });
      y += 5;
      const fy = ctx.h - M - 6;
      svg += S.el('line', { x1: x0, y1: fy - 4, x2: x0 + w, y2: fy - 4, stroke: '#eee7dc', 'stroke-width': 0.4 });
      svg += S.text(x0, fy, ctx.meta.jenjang + ' · ' + ctx.meta.grup, { 'font-family': 'Poppins', 'font-size': 2.8, fill: '#9ca3af' });
      const foot = ctx.profil.footer || ctx.profil.nama || '';
      svg += S.text(x0 + w, fy, foot, { 'font-family': 'Poppins', 'font-size': 2.8, fill: '#9ca3af', 'text-anchor': 'end' });
      if (ctx.profil.logo) svg += logo(ctx.profil.logo, x0 + w - foot.length * 2.8 * 0.62 - (foot ? 5.8 : 4.4), fy - 3.6, 4.4);
      svg += pageNo(ctx, fy, 'Poppins', '#9ca3af');
      return { svg, area: { x: x0, y, w, h: fy - 8 - y } };
    },
    badge(nr, cx, cy, r) {
      return S.text(cx, cy + r * 0.4, (nr < 10 ? '0' : '') + nr, { 'font-family': 'Poppins', 'font-weight': 'bold', 'font-size': r * 1.2, fill: '#a7c4a0', 'text-anchor': 'middle' });
    },
    answerBox(x, y, w, h) {
      return S.el('rect', { x, y, width: w, height: h, rx: Math.min(w, h) * 0.12, fill: 'none', stroke: '#c9b8a6', 'stroke-width': 0.5 });
    },
    rowBg(x, y, w, h) {
      return S.el('line', { x1: x, y1: y + h, x2: x + w, y2: y + h, stroke: '#eee7dc', 'stroke-width': 0.4 });
    }
  };

  const lkpd = {
    id: 'lkpd',
    label: 'Klasik Sekolah (LKPD)',
    iconVariant: 'black',
    font: { title: 'Tinos', body: 'Tinos' },
    ink: '#111111',
    answerColor: '#dc2626',
    icons: [],
    chrome(ctx) {
      const x0 = M, w = ctx.w - 2 * M, h = ctx.h - 2 * M;
      const ix = x0 + 5, iw = w - 10;
      const base = { 'font-family': 'Tinos', fill: '#111111' };
      let svg = S.el('rect', { x: 0, y: 0, width: ctx.w, height: ctx.h, fill: '#ffffff' });
      svg += S.el('rect', { x: x0, y: x0, width: w, height: h, fill: 'none', stroke: '#111111', 'stroke-width': 0.6 });
      svg += S.el('rect', { x: x0 + 1.5, y: x0 + 1.5, width: w - 3, height: h - 3, fill: 'none', stroke: '#111111', 'stroke-width': 0.25 });
      let y = x0 + 5;
      if (ctx.profil.logo) svg += logo(ctx.profil.logo, ix, y, 16);
      svg += S.text(ctx.w / 2, y + 7, (ctx.profil.nama || 'Nama Sekolah').toUpperCase(), Object.assign({ 'font-weight': 'bold', 'font-size': 5.2, 'text-anchor': 'middle' }, base));
      svg += S.text(ctx.w / 2, y + 12.5, 'Lembar Kerja Peserta Didik (LKPD) · ' + ctx.meta.grup + ' · ' + ctx.meta.jenjang, Object.assign({ 'font-size': 3.2, 'text-anchor': 'middle' }, base));
      y += 18;
      svg += S.el('line', { x1: ix, y1: y, x2: ix + iw, y2: y, stroke: '#111111', 'stroke-width': 0.8 });
      svg += S.el('line', { x1: ix, y1: y + 1.2, x2: ix + iw, y2: y + 1.2, stroke: '#111111', 'stroke-width': 0.25 });
      y += 9;
      svg += fields(ix, y, iw, ['Nama', 'No. Absen', 'Nilai'], 'Tinos', 3.6, '#111111');
      y += 10;
      const title = titleOf(ctx).toUpperCase();
      svg += S.text(ctx.w / 2, y, title, Object.assign({ 'font-weight': 'bold', 'font-size': 5, 'text-anchor': 'middle' }, base));
      const tw = Math.min(iw, title.length * 5 * 0.55);
      svg += S.el('line', { x1: ctx.w / 2 - tw / 2, y1: y + 1.2, x2: ctx.w / 2 + tw / 2, y2: y + 1.2, stroke: '#111111', 'stroke-width': 0.35 });
      y += 7;
      svg += S.text(ix, y, 'Petunjuk: ' + ctx.instruksi, Object.assign({ 'font-size': 3.6 }, base));
      y += 4;
      const fy = x0 + h - 7;
      svg += S.text(ix, fy, 'Paraf Orang Tua: ____________', Object.assign({ 'font-size': 3.4 }, base));
      svg += S.text(ix + iw, fy - 9, 'Guru Kelas', Object.assign({ 'font-size': 3.4, 'text-anchor': 'end' }, base));
      svg += S.el('line', { x1: ix + iw - 38, y1: fy, x2: ix + iw, y2: fy, stroke: '#111111', 'stroke-width': 0.3 });
      svg += pageNo(ctx, fy, 'Tinos', '#111111');
      return { svg, area: { x: ix, y, w: iw, h: fy - 14 - y } };
    },
    badge(nr, cx, cy, r) {
      return S.text(cx, cy + r * 0.4, nr + '.', { 'font-family': 'Tinos', 'font-weight': 'bold', 'font-size': r * 1.2, fill: '#111111', 'text-anchor': 'middle' });
    },
    answerBox(x, y, w, h) {
      return S.el('rect', { x, y, width: w, height: h, fill: 'none', stroke: '#111111', 'stroke-width': 0.45 });
    },
    rowBg(x, y, w, h) {
      return S.el('line', { x1: x, y1: y + h, x2: x + w, y2: y + h, stroke: '#999999', 'stroke-width': 0.3, 'stroke-dasharray': '0.6 0.8' });
    }
  };

  WS.themes = { ceria, minimalis, lkpd };
  WS.themeKit = { fields, pageNo, titleOf, logo };
})(globalThis.WS);

/* render/layouts.js */
(function (WS) {
  'use strict';

  const S = WS.svg;
  const n = WS.svg.n;

  function lurus(x1, x2, cy) {
    return 'M' + n(x1) + ' ' + n(cy) + ' L' + n(x2) + ' ' + n(cy);
  }

  function zigzag(x1, x2, cy, amp) {
    const k = 2 * Math.max(2, Math.round((x2 - x1) / 36));
    let d = 'M' + n(x1) + ' ' + n(cy);
    for (let i = 1; i < k; i++) d += ' L' + n(x1 + (x2 - x1) * i / k) + ' ' + n(i % 2 ? cy - amp : cy + amp);
    return d + ' L' + n(x2) + ' ' + n(cy);
  }

  function gelombang(x1, x2, cy, amp) {
    const k = 2 * Math.max(1, Math.round((x2 - x1) / 50));
    const hw = (x2 - x1) / k;
    let d = 'M' + n(x1) + ' ' + n(cy);
    for (let i = 0; i < k; i++) {
      d += ' Q' + n(x1 + hw * (i + 0.5)) + ' ' + n(i % 2 ? cy + 2 * amp : cy - 2 * amp) + ' ' + n(x1 + hw * (i + 1)) + ' ' + n(cy);
    }
    return d;
  }

  function lengkung(x1, x2, cy, amp) {
    return 'M' + n(x1) + ' ' + n(cy) + ' Q' + n((x1 + x2) / 2) + ' ' + n(cy - 2 * amp) + ' ' + n(x2) + ' ' + n(cy);
  }

  function tangga(x1, x2, cy, amp) {
    const k = 4, sw = (x2 - x1) / k, sh = 2 * amp / k;
    let d = 'M' + n(x1) + ' ' + n(cy + amp);
    for (let i = 0; i < k; i++) d += ' H' + n(x1 + sw * (i + 0.5)) + ' V' + n(cy + amp - sh * (i + 1)) + ' H' + n(x1 + sw * (i + 1));
    return d;
  }

  const SHAPES = { lurus, zigzag, gelombang, lengkung, tangga };

  function iconSet(page, keys) {
    const s = new Set();
    page.items.forEach(it => keys(it).forEach(nm => s.add(nm)));
    return Array.from(s);
  }

  function cells(area, n, gap) {
    const cols = n > 1 && area.w / area.h > 1.15 ? 2 : 1;
    const per = Math.ceil(n / cols);
    const colW = (area.w - gap * 2 * (cols - 1)) / cols;
    const out = [];
    for (let c = 0; c < cols; c++) {
      WS.fit.rows({ x: area.x + c * (colW + gap * 2), y: area.y, w: colW, h: area.h }, per, gap).forEach(r => out.push(r));
    }
    return out.slice(0, n);
  }

  const barisPenuh = {
    icons(page) {
      return iconSet(page, it => it.icons);
    },
    render(page, area, theme, ctx) {
      const rows = cells(area, page.items.length, 3);
      let out = '';
      rows.forEach((r, i) => {
        const it = page.items[i];
        out += theme.rowBg(r.x, r.y, r.w, r.h);
        const pad = Math.min(3, r.h * 0.12);
        const badgeR = Math.min(r.h * 0.22, 5);
        out += theme.badge(i + 1, r.x + pad + badgeR, r.y + r.h / 2, badgeR);
        const box = Math.min(r.h * 0.74, 28);
        const bx = r.x + r.w - pad - box;
        const by = r.y + (r.h - box) / 2;
        out += theme.answerBox(bx, by, box, box);
        if (ctx.kunci) {
          out += S.text(bx + box / 2, by + box * 0.7, it.answer, { 'font-family': theme.font.title, 'font-weight': 'bold', 'font-size': box * 0.55, fill: theme.answerColor, 'text-anchor': 'middle' });
        }
        const ix = r.x + pad + badgeR * 2 + 4;
        const iconBox = { x: ix, y: r.y + pad, w: bx - 4 - ix, h: r.h - pad * 2 };
        WS.fit.icons(iconBox, it.icons.length, 26).forEach((p, k) => {
          out += WS.icons.use(it.icons[k], p.x, p.y, p.size, ctx.iconVariant);
        });
      });
      return out;
    }
  };

  const garisTulis = {
    icons(page) {
      return iconSet(page, it => [it.from, it.to]);
    },
    render(page, area, theme, ctx) {
      const rows = WS.fit.rows(area, page.items.length, 3);
      let out = '';
      rows.forEach((r, i) => {
        const it = page.items[i];
        out += theme.rowBg(r.x, r.y, r.w, r.h);
        const pad = Math.min(3, r.h * 0.12);
        const s = Math.min(r.h * 0.7, 24);
        const cy = r.y + r.h / 2;
        out += WS.icons.use(it.from, r.x + pad, cy - s / 2, s, ctx.iconVariant);
        out += WS.icons.use(it.to, r.x + r.w - pad - s, cy - s / 2, s, ctx.iconVariant);
        const x1 = r.x + pad + s + 3;
        const x2 = r.x + r.w - pad - s - 3;
        const amp = Math.min(r.h * 0.3, 10) * (it.amp || 1);
        const shape = SHAPES[it.shape] || lurus;
        out += S.el('path', { d: shape(x1, x2, cy, amp), fill: 'none', stroke: '#9ca3af', 'stroke-width': 0.9, 'stroke-dasharray': '2.2 1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
        out += S.el('circle', { cx: x1, cy: startY(shape, cy, amp), r: 1.4, fill: '#16a34a' });
      });
      return out;
    }
  };

  const kanvasPenuh = {
    icons(page) {
      return iconSet(page, it => [it.from, it.to]);
    },
    render(page, area, theme, ctx) {
      const it = page.items[0];
      const cell = Math.min(area.w / it.cols, area.h / it.rows);
      const ox = area.x + (area.w - cell * it.cols) / 2;
      const oy = area.y + (area.h - cell * it.rows) / 2;
      let d = '';
      const seg = (x1, y1, x2, y2) => { d += 'M' + n(x1) + ' ' + n(y1) + 'L' + n(x2) + ' ' + n(y2); };
      for (let r = 0; r < it.rows; r++) {
        for (let c = 0; c < it.cols; c++) {
          const w = it.cells[r][c], x = ox + c * cell, y = oy + r * cell;
          if (w & 1) seg(x, y, x + cell, y);
          if (w & 8) seg(x, y, x, y + cell);
          if (r === it.rows - 1 && (w & 4)) seg(x, y + cell, x + cell, y + cell);
          if (c === it.cols - 1 && (w & 2)) seg(x + cell, y, x + cell, y + cell);
        }
      }
      let out = S.el('path', { d, fill: 'none', stroke: theme.ink, 'stroke-width': Math.max(0.5, Math.min(1.2, cell * 0.06)), 'stroke-linecap': 'round' });
      if (ctx.kunci) {
        const pts = it.solution.map(p => n(ox + (p[0] + 0.5) * cell) + ',' + n(oy + (p[1] + 0.5) * cell)).join(' ');
        out += S.el('polyline', { points: pts, fill: 'none', stroke: theme.answerColor, 'stroke-width': Math.max(0.8, cell * 0.14), 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-opacity': 0.8 });
      }
      const s = cell * 0.8;
      out += WS.icons.use(it.from, ox + it.start[0] * cell + cell * 0.1, oy + it.start[1] * cell + cell * 0.1, s, ctx.iconVariant);
      out += WS.icons.use(it.to, ox + it.end[0] * cell + cell * 0.1, oy + it.end[1] * cell + cell * 0.1, s, ctx.iconVariant);
      return out;
    }
  };

  function startY(shape, cy, amp) {
    return shape === tangga ? cy + amp : cy;
  }

  const gunting = {
    icons(page) {
      return ['gunting'].concat(page.items[0].baris.map(b => b.icon));
    },
    render(page, area, theme, ctx) {
      const baris = page.items[0].baris;
      const rows = WS.fit.rows(area, baris.length, 3);
      let out = '';
      rows.forEach((r, i) => {
        const b = baris[i];
        out += theme.rowBg(r.x, r.y, r.w, r.h);
        const pad = Math.min(3, r.h * 0.1);
        const cy = r.y + r.h / 2;
        const s = Math.min(r.h * 0.62, 26);
        const sc = Math.min(r.h * 0.42, 14);
        const amp = Math.min(r.h * 0.26, 11) * (b.amp || 1);
        const shape = SHAPES[b.shape] || lurus;
        const x1 = r.x + pad + sc + 1.5;
        const x2 = r.x + r.w - pad - s - 3;
        const y0 = startY(shape, cy, amp);
        out += WS.icons.use('gunting', r.x + pad, Math.max(r.y, Math.min(r.y + r.h - sc, y0 - sc / 2)), sc, ctx.iconVariant);
        out += S.el('path', { d: shape(x1, x2, cy, amp), fill: 'none', stroke: '#1f2937', 'stroke-width': 0.8, 'stroke-dasharray': '3 2', 'stroke-linecap': 'butt', 'stroke-linejoin': 'round' });
        out += WS.icons.use(b.icon, r.x + r.w - pad - s, cy - s / 2, s, ctx.iconVariant);
      });
      return out;
    }
  };

  const STATUS = {
    baru: 'Menunggu giliran…',
    gambar: 'AI sedang menggambar…',
    cek: 'Memeriksa kualitas…',
    gagal: 'Gagal dibuat — tekan Buat ulang',
    batal: 'Dibatalkan'
  };

  const gambarAi = {
    icons() {
      return [];
    },
    render(page, area, theme, ctx) {
      const it = page.items[0];
      let box = area;
      let tail = '';
      if (ctx.kunci) {
        box = { x: area.x, y: area.y, w: area.w, h: area.h * 0.62 };
        const lines = (it.kunci && it.kunci.length ? it.kunci : ['-']).slice(0, 20);
        const top = box.y + box.h + 6;
        const cols = lines.length > 10 ? 2 : 1;
        const per = Math.ceil(lines.length / cols);
        const lh = Math.min(6.5, (area.y + area.h - top) / per);
        const fs = Math.min(4.2, lh * 0.75);
        lines.forEach((ln, i) => {
          const c = Math.floor(i / per), r = i % per;
          tail += S.text(area.x + c * area.w / cols, top + lh * (r + 0.8), ln, { 'font-family': theme.font.body, 'font-size': fs, fill: theme.answerColor });
        });
      }
      if (it.image) {
        return S.el('image', { x: box.x, y: box.y, width: box.w, height: box.h, 'xlink:href': it.image, preserveAspectRatio: 'xMidYMid meet' }) + tail;
      }
      return S.el('rect', { x: box.x, y: box.y, width: box.w, height: box.h, rx: 4, fill: '#f1f5f9', stroke: '#cbd5e1', 'stroke-width': 0.5, 'stroke-dasharray': '2 2' }) +
        S.text(box.x + box.w / 2, box.y + box.h / 2, STATUS[it.status] || STATUS.baru, { 'font-family': theme.font.body, 'font-size': 5, fill: '#64748b', 'text-anchor': 'middle' }) + tail;
    }
  };

  WS.shapes = SHAPES;
  WS.layouts = { 'baris-penuh': barisPenuh, 'garis-tulis': garisTulis, 'kanvas-penuh': kanvasPenuh, gunting, 'gambar-ai': gambarAi };
})(globalThis.WS);

/* render/layouts-kode.js */
(function (WS) {
  'use strict';

  const S = WS.svg;
  const n = WS.svg.n;

  function uniq(list) {
    return Array.from(new Set(list));
  }

  function grid(area, cols, rows, gap) {
    const out = [];
    WS.fit.rows(area, rows, gap).forEach(r => {
      const w = (r.w - gap * (cols - 1)) / cols;
      for (let c = 0; c < cols; c++) out.push({ x: r.x + c * (w + gap), y: r.y, w, h: r.h });
    });
    return out;
  }

  function centered(box, count, max) {
    const ps = WS.fit.icons(box, count, max);
    if (!ps.length) return ps;
    const right = Math.max(...ps.map(p => p.x + p.size));
    const dx = (box.x + box.w - right) / 2;
    return ps.map(p => ({ x: p.x + dx, y: p.y, size: p.size }));
  }

  function frame(theme, x, y, w, h) {
    return S.el('rect', { x, y, width: w, height: h, rx: Math.min(4, Math.min(w, h) * 0.08), fill: 'none', stroke: theme.ink, 'stroke-opacity': 0.35, 'stroke-width': 0.5 });
  }

  function ring(theme, cx, cy, r) {
    return S.el('circle', { cx, cy, r, fill: 'none', stroke: theme.answerColor, 'stroke-width': 0.9 });
  }

  function label(theme, x, y, str, size, extra) {
    return S.text(x, y, str, Object.assign({ 'font-family': theme.font.body, 'font-size': size, fill: theme.ink }, extra || {}));
  }

  const banding = {
    icons(page) {
      return uniq(page.items[0].baris.map(b => b.icon));
    },
    render(page, area, theme, ctx) {
      const baris = page.items[0].baris;
      let out = '';
      WS.fit.rows(area, baris.length, 3).forEach((r, i) => {
        const b = baris[i];
        out += theme.rowBg(r.x, r.y, r.w, r.h);
        const pad = Math.min(3, r.h * 0.1);
        const br = Math.min(r.h * 0.2, 5);
        out += theme.badge(i + 1, r.x + pad + br, r.y + r.h / 2, br);
        const x0 = r.x + pad + br * 2 + 4;
        const gap = 6;
        const bw = (r.x + r.w - pad - x0 - gap) / 2;
        const bh = r.h - pad * 2;
        [b.kiri, b.kanan].forEach((jml, k) => {
          const bx = x0 + k * (bw + gap);
          const by = r.y + pad;
          out += theme.answerBox(bx, by, bw, bh);
          centered({ x: bx + 2, y: by + 2, w: bw - 4, h: bh - 4 }, jml, 16).forEach(p => {
            out += WS.icons.use(b.icon, p.x, p.y, p.size, ctx.iconVariant);
          });
          if (ctx.kunci && jml > (k ? b.kiri : b.kanan)) {
            out += S.el('rect', { x: bx - 1, y: by - 1, width: bw + 2, height: bh + 2, rx: 4, fill: 'none', stroke: theme.answerColor, 'stroke-width': 1.1 });
          }
        });
      });
      return out;
    }
  };

  const warnai = {
    variant: 'black',
    icons(page) {
      return uniq([].concat(...page.items[0].kotak.map(k => k.icons)));
    },
    render(page, area, theme, ctx) {
      const kotak = page.items[0].kotak;
      let out = '';
      grid(area, 2, 2, 4).forEach((c, i) => {
        const k = kotak[i];
        out += frame(theme, c.x, c.y, c.w, c.h);
        const r = Math.min(7, c.h * 0.12);
        const cx = c.x + 3 + r;
        const cy = c.y + 3 + r;
        out += S.el('circle', { cx, cy, r, fill: 'none', stroke: theme.ink, 'stroke-width': 0.6 });
        out += S.text(cx, cy + r * 0.42, String(k.n), { 'font-family': theme.font.title, 'font-weight': 'bold', 'font-size': r * 1.25, fill: theme.ink, 'text-anchor': 'middle' });
        const top = cy + r + 2;
        centered({ x: c.x + 4, y: top, w: c.w - 8, h: c.y + c.h - 3 - top }, k.icons.length, 30).forEach((p, j) => {
          out += WS.icons.use(k.icons[j], p.x, p.y, p.size, ctx.iconVariant);
          if (ctx.kunci && j < k.n) out += ring(theme, p.x + p.size / 2, p.y + p.size / 2, p.size * 0.55);
        });
      });
      return out;
    }
  };

  const huruf = {
    icons(page) {
      return page.items[0].kotak.map(k => k.icon);
    },
    render(page, area, theme, ctx) {
      const kotak = page.items[0].kotak;
      const land = area.w > area.h;
      let out = '';
      grid(area, land ? 3 : 2, land ? 2 : 3, 4).forEach((c, i) => {
        const k = kotak[i];
        out += frame(theme, c.x, c.y, c.w, c.h);
        const br = Math.min(4, c.h * 0.08);
        out += theme.badge(i + 1, c.x + 2.5 + br, c.y + 2.5 + br, br);
        const opts = k.pilihan.length;
        const lr = Math.min((c.w - 8) / (opts * 2.6), c.h * 0.11, 8);
        const ly = c.y + c.h - 3 - lr;
        const top = c.y + 4;
        const bottom = ly - lr - 3 - (ctx.kunci ? 5 : 0);
        const s = Math.max(4, Math.min(bottom - top, c.w * 0.6));
        out += WS.icons.use(k.icon, c.x + (c.w - s) / 2, top + (bottom - top - s) / 2, s, ctx.iconVariant);
        if (ctx.kunci) out += label(theme, c.x + c.w / 2, bottom + 4, k.kata, 3.6, { fill: theme.answerColor, 'text-anchor': 'middle' });
        const span = (c.w - 8) / opts;
        k.pilihan.forEach((h, j) => {
          const cx = c.x + 4 + span * (j + 0.5);
          const benar = ctx.kunci && h.toUpperCase() === k.huruf;
          out += S.el('circle', { cx, cy: ly, r: lr, fill: 'none', stroke: benar ? theme.answerColor : theme.ink, 'stroke-width': benar ? 1.2 : 0.5 });
          out += S.text(cx, ly + lr * 0.43, h, { 'font-family': theme.font.title, 'font-weight': 'bold', 'font-size': lr * 1.25, fill: theme.ink, 'text-anchor': 'middle' });
        });
      });
      return out;
    }
  };

  const beda = {
    icons(page) {
      const it = page.items[0];
      return uniq(it.a.concat(it.beda.filter(d => d.icon).map(d => d.icon)));
    },
    render(page, area, theme, ctx) {
      const it = page.items[0];
      const strip = Math.min(10, area.h * 0.08);
      const body = { x: area.x, y: area.y, w: area.w, h: area.h - strip - 2 };
      const gap = 5;
      const panels = body.h >= body.w
        ? [{ x: body.x, y: body.y, w: body.w, h: (body.h - gap) / 2 }, { x: body.x, y: body.y + (body.h + gap) / 2, w: body.w, h: (body.h - gap) / 2 }]
        : [{ x: body.x, y: body.y, w: (body.w - gap) / 2, h: body.h }, { x: body.x + (body.w + gap) / 2, y: body.y, w: (body.w - gap) / 2, h: body.h }];
      const diff = {};
      it.beda.forEach(d => { diff[d.i] = d; });
      let out = '';
      panels.forEach((p, k) => {
        out += frame(theme, p.x, p.y, p.w, p.h);
        out += theme.badge(k + 1, p.x + 4.5, p.y + 5, 3);
        const inner = { x: p.x + 9, y: p.y + 3, w: p.w - 12, h: p.h - 6 };
        const cw = inner.w / it.cols;
        const ch = inner.h / it.rows;
        const s = Math.min(cw, ch) * 0.72;
        it.a.forEach((name, i) => {
          const cx = inner.x + cw * (i % it.cols + 0.5);
          const cy = inner.y + ch * (Math.floor(i / it.cols) + 0.5);
          const d = k === 1 ? diff[i] : null;
          if (!d || d.jenis !== 'hilang') {
            const sz = d && d.jenis === 'kecil' ? s * 0.55 : s;
            out += WS.icons.use(d && d.jenis === 'ganti' ? d.icon : name, cx - sz / 2, cy - sz / 2, sz, ctx.iconVariant);
          }
          if (d && ctx.kunci) out += ring(theme, cx, cy, s * 0.62);
        });
      });
      const sy = area.y + area.h - strip / 2;
      out += label(theme, area.x, sy + 1.3, ctx.kunci ? 'Ada ' + it.beda.length + ' perbedaan.' : 'Centang setiap perbedaan yang kamu temukan:', 3.6, ctx.kunci ? { fill: theme.answerColor } : null);
      it.beda.forEach((_, i) => {
        out += S.el('circle', { cx: area.x + area.w - (it.beda.length - i) * 7 + 3, cy: sy, r: 2.6, fill: 'none', stroke: theme.ink, 'stroke-width': 0.5 });
      });
      return out;
    }
  };

  const titik = {
    icons() {
      return [];
    },
    render(page, area, theme, ctx) {
      const it = page.items[0];
      const foot = Math.min(14, area.h * 0.1);
      const box = { x: area.x, y: area.y, w: area.w, h: area.h - foot - 3 };
      const pad = 7;
      const k = Math.min((box.w - pad * 2) / it.lebar, (box.h - pad * 2) / it.tinggi);
      const ox = box.x + (box.w - it.lebar * k) / 2;
      const oy = box.y + (box.h - it.tinggi * k) / 2;
      const P = it.titik.map(([x, y]) => [ox + x * k, oy + y * k]);
      const cx = P.reduce((a, p) => a + p[0], 0) / P.length;
      const cy = P.reduce((a, p) => a + p[1], 0) / P.length;
      const fs = P.length <= 12 ? 5 : P.length <= 20 ? 4.2 : 3.6;
      let out = '';
      if (ctx.kunci) out += S.el('polygon', { points: P.map(p => n(p[0]) + ',' + n(p[1])).join(' '), fill: 'none', stroke: theme.answerColor, 'stroke-width': 0.9, 'stroke-linejoin': 'round' });
      P.forEach((p, i) => {
        const dx = p[0] - cx, dy = p[1] - cy;
        const len = Math.hypot(dx, dy) || 1;
        out += S.el('circle', { cx: p[0], cy: p[1], r: i ? 1.1 : 1.6, fill: i ? theme.ink : '#16a34a' });
        out += label(theme, p[0] + dx / len * fs * 1.15, p[1] + dy / len * fs * 1.15 + fs * 0.35, String(i + 1), fs, { 'text-anchor': 'middle', 'font-weight': i ? null : 'bold' });
      });
      const fy = area.y + area.h - foot;
      out += label(theme, area.x, fy + foot * 0.62, 'Gambar apakah ini?', 4);
      out += theme.answerBox(area.x + 44, fy, area.w - 44, foot);
      if (ctx.kunci) out += label(theme, area.x + 48, fy + foot * 0.66, it.nama, 4.4, { fill: theme.answerColor, 'font-weight': 'bold' });
      return out;
    }
  };

  function legacy(layout) {
    const lokal = page => page.items[0].mode === 'lokal';
    return {
      variant: layout.variant,
      icons: page => (lokal(page) ? layout.icons(page) : []),
      render: (page, area, theme, ctx) => (lokal(page) ? layout : WS.layouts['gambar-ai']).render(page, area, theme, ctx),
      hasKunci: page => lokal(page) || !!(page.items[0].kunci && page.items[0].kunci.length)
    };
  }

  Object.assign(WS.layouts, {
    'kode-labirin': legacy(WS.layouts['kanvas-penuh']),
    'kode-banding': legacy(banding),
    'kode-warnai': legacy(warnai),
    'kode-huruf': legacy(huruf),
    'kode-beda': legacy(beda),
    'kode-titik': legacy(titik)
  });
})(globalThis.WS);

/* render/text.js */
(function (WS) {
  'use strict';

  const K = 0.52;

  function width(str, fs, k) {
    return String(str).length * fs * (k || K);
  }

  function wrap(str, maxW, fs, k) {
    const max = Math.max(1, Math.floor(maxW / (fs * (k || K)) + 1e-9));
    const words = String(str).replace(/\s+/g, ' ').trim().split(' ');
    const lines = [];
    let cur = '';
    words.forEach(word => {
      let w = word;
      while (w.length > max) {
        if (cur) {
          lines.push(cur);
          cur = '';
        }
        lines.push(w.slice(0, max));
        w = w.slice(max);
      }
      if (!cur) cur = w;
      else if ((cur + ' ' + w).length <= max) cur += ' ' + w;
      else {
        lines.push(cur);
        cur = w;
      }
    });
    if (cur) lines.push(cur);
    return lines.length ? lines : [''];
  }

  WS.text = { K, wrap, width };
})(globalThis.WS);

/* render/layout-soal.js */
(function (WS) {
  'use strict';

  const S = WS.svg;
  const LETTERS = ['a', 'b', 'c', 'd'];
  const STATUS = {
    baru: 'Menunggu giliran…',
    tulis: 'AI sedang menulis soal…',
    cek: 'Memeriksa soal…',
    gagal: 'Gagal dibuat — tekan Buat ulang',
    batal: 'Dibatalkan'
  };

  function plan(data, w, fs, imgH) {
    const lh = fs * 1.45;
    const pre = fs * 1.8;
    const blocks = [];
    if (imgH) blocks.push({ kind: 'img', h: imgH });
    if (data.bacaan) {
      const lines = [];
      data.bacaan.split(/\n+/).map(p => p.trim()).filter(Boolean).forEach(p => WS.text.wrap(p, w - fs * 2, fs).forEach(l => lines.push(l)));
      blocks.push({ kind: 'bacaan', lines, h: lines.length * lh + fs * 1.6 });
    }
    data.soal.forEach((s, i) => {
      const q = WS.text.wrap(s.tanya, w - pre, fs);
      let extra;
      let opts = null;
      if (s.tipe === 'pg') {
        const colW = (w - pre) / 2 - fs;
        opts = s.pilihan.map((p, k) => WS.text.wrap(LETTERS[k] + '. ' + p, colW, fs));
        extra = (Math.max(opts[0].length, opts[1].length) + Math.max(opts[2].length, opts[3].length)) * lh;
      } else if (s.tipe === 'isian') extra = lh * 1.4;
      else if (s.tipe === 'bs') extra = lh;
      else extra = lh * 2.8;
      blocks.push({ kind: 'soal', no: i + 1, s, q, opts, h: q.length * lh + extra });
    });
    const gap = fs * 0.9;
    const total = blocks.reduce((a, b) => a + b.h, 0) + gap * Math.max(0, blocks.length - 1);
    return { blocks, total, lh, pre, gap };
  }

  function fit(data, area, wantImg) {
    for (const img of wantImg ? [true, false] : [false]) {
      const imgH = img ? Math.min(area.h * 0.26, area.w * 0.5) : 0;
      for (let fs = 5.2; fs >= 3.0 - 1e-9; fs -= 0.2) {
        const p = plan(data, area.w, fs, imgH);
        if (p.total <= area.h) return Object.assign(p, { fs, imgH });
      }
    }
    let soal = data.soal.slice();
    while (soal.length > 1) {
      soal = soal.slice(0, -1);
      const p = plan(Object.assign({}, data, { soal }), area.w, 3.0, 0);
      if (p.total <= area.h) return Object.assign(p, { fs: 3.0, imgH: 0 });
    }
    return Object.assign(plan(Object.assign({}, data, { soal, bacaan: '' }), area.w, 3.0, 0), { fs: 3.0, imgH: 0 });
  }

  function textAt(x, y, str, fs, theme, extra) {
    return S.text(x, y, str, Object.assign({ 'font-family': theme.font.body, 'font-size': fs, fill: theme.ink }, extra || {}));
  }

  function line(x1, x2, y, theme) {
    return S.el('line', { x1, y1: y, x2, y2: y, stroke: theme.ink, 'stroke-width': 0.3, 'stroke-dasharray': '1 1' });
  }

  function renderSoal(it, area, theme) {
    const p = fit(it.data, area, !!(it.image || it.status === 'gambar'));
    const gap = p.gap + (p.blocks.length > 1 ? (area.h - p.total) / (p.blocks.length - 1) : 0);
    const lh = p.lh, fs = p.fs, pre = p.pre;
    let y = area.y;
    let out = '';
    p.blocks.forEach(b => {
      if (b.kind === 'img') {
        out += it.image
          ? S.el('image', { x: area.x, y, width: area.w, height: b.h, 'xlink:href': it.image, preserveAspectRatio: 'xMidYMid meet' })
          : S.el('rect', { x: area.x, y, width: area.w, height: b.h, rx: 3, fill: '#f1f5f9' }) + textAt(area.x + area.w / 2, y + b.h / 2, 'AI sedang menggambar ilustrasi…', 4, theme, { fill: '#64748b', 'text-anchor': 'middle' });
      } else if (b.kind === 'bacaan') {
        out += S.el('rect', { x: area.x, y, width: area.w, height: b.h, rx: 2.5, fill: 'none', stroke: theme.ink, 'stroke-width': 0.3, 'stroke-opacity': 0.5 });
        b.lines.forEach((ln, i) => { out += textAt(area.x + fs, y + fs * 0.8 + lh * (i + 0.8), ln, fs, theme); });
      } else {
        const s = b.s;
        out += textAt(area.x, y + lh * 0.8, b.no + '.', fs, theme, { 'font-weight': 'bold' });
        b.q.forEach((ln, i) => { out += textAt(area.x + pre, y + lh * (i + 0.8), ln, fs, theme); });
        let yy = y + b.q.length * lh;
        if (s.tipe === 'pg') {
          const colW = (area.w - pre) / 2;
          [[0, 1], [2, 3]].forEach(pair => {
            pair.forEach((k, c) => b.opts[k].forEach((ln, i) => { out += textAt(area.x + pre + c * colW, yy + lh * (i + 0.8), ln, fs, theme); }));
            yy += Math.max(b.opts[pair[0]].length, b.opts[pair[1]].length) * lh;
          });
        } else if (s.tipe === 'isian') {
          out += line(area.x + pre, area.x + area.w, yy + lh * 1.1, theme);
        } else if (s.tipe === 'bs') {
          out += textAt(area.x + pre, yy + lh * 0.8, '( Benar )   ( Salah )', fs, theme);
        } else {
          out += line(area.x + pre, area.x + area.w, yy + lh * 1.2, theme) + line(area.x + pre, area.x + area.w, yy + lh * 2.5, theme);
        }
      }
      y += b.h + gap;
    });
    return out;
  }

  function renderKunci(it, area, theme) {
    const lines = it.kunci && it.kunci.length ? it.kunci : ['-'];
    const cols = lines.length > 12 ? 2 : 1;
    const per = Math.ceil(lines.length / cols);
    const lh = Math.min(9, area.h / per);
    const fs = Math.min(4.6, lh * 0.6);
    const colW = area.w / cols;
    let out = '';
    lines.forEach((ln, i) => {
      const c = Math.floor(i / per), r = i % per;
      out += textAt(area.x + c * colW, area.y + lh * (r + 0.7), WS.text.wrap(ln, colW - 2, fs)[0], fs, theme, { fill: theme.answerColor });
    });
    return out;
  }

  WS.layouts['soal-ai'] = {
    icons() {
      return [];
    },
    render(page, area, theme, ctx) {
      const it = page.items[0];
      if (!it.data) {
        return S.el('rect', { x: area.x, y: area.y, width: area.w, height: area.h, rx: 4, fill: '#f1f5f9', stroke: '#cbd5e1', 'stroke-width': 0.5, 'stroke-dasharray': '2 2' }) +
          textAt(area.x + area.w / 2, area.y + area.h / 2, STATUS[it.status] || STATUS.baru, 5, theme, { fill: '#64748b', 'text-anchor': 'middle' });
      }
      return ctx.kunci ? renderKunci(it, area, theme) : renderSoal(it, area, theme);
    }
  };

  WS.soalLayout = { plan, fit };
})(globalThis.WS);

/* render/page.js */
(function (WS) {
  'use strict';

  const LEVEL = { mudah: 'Mudah', sedang: 'Sedang', sulit: 'Sulit' };

  function ctxFor(params, recipe, extra) {
    const size = WS.paper.size(params.kertas, params.orientasi);
    const grup = WS.registry.group(recipe.grup);
    const jenjang = WS.registry.JENJANG.find(j => j.id === recipe.jenjang);
    return Object.assign({
      w: size.w, h: size.h, judul: '', instruksi: '', profil: {}, pageNo: 1, pageCount: 1, kunci: false,
      meta: { grup: grup ? grup.label : '', jenjang: jenjang ? jenjang.label : '', level: LEVEL[params.kesulitan] || '' }
    }, extra || {});
  }

  function theme(params) {
    return WS.themes[params.gaya] || WS.themes.ceria;
  }

  function contentArea(params, recipe) {
    return theme(params).chrome(ctxFor(params, recipe, { judul: 'X', instruksi: 'X' })).area;
  }

  function render(doc, i, opts) {
    const o = opts || {};
    const recipe = WS.registry.get(doc.resepId);
    const th = theme(doc.params);
    const layout = WS.layouts[recipe.layout];
    const ctx = ctxFor(doc.params, recipe, {
      judul: doc.judul, instruksi: doc.instruksi, profil: o.profil || WS.page.profil || {},
      pageNo: i + 1, pageCount: doc.pages.length, kunci: !!o.kunci, iconVariant: layout.variant || th.iconVariant
    });
    const chrome = th.chrome(ctx);
    const body = layout.render(doc.pages[i], chrome.area, th, ctx);
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + ctx.w + 'mm" height="' + ctx.h + 'mm" viewBox="0 0 ' + ctx.w + ' ' + ctx.h + '">' +
      chrome.svg + body + '</svg>';
  }

  function renderAll(doc, opts) {
    const o = opts || {};
    const recipe = WS.registry.get(doc.resepId);
    const layout = WS.layouts[recipe.layout];
    const out = doc.pages.map((_, i) => render(doc, i, { profil: o.profil }));
    if (doc.params.kunci && recipe.hasAnswers) {
      doc.pages.forEach((pg, i) => {
        if (!layout.hasKunci || layout.hasKunci(pg)) out.push(render(doc, i, { profil: o.profil, kunci: true }));
      });
    }
    return out;
  }

  function iconNames(doc) {
    const recipe = WS.registry.get(doc.resepId);
    const layout = WS.layouts[recipe.layout];
    const s = new Set(theme(doc.params).icons);
    doc.pages.forEach(pg => layout.icons(pg).forEach(nm => s.add(nm)));
    return Array.from(s);
  }

  function loadIcons(doc) {
    const recipe = WS.registry.get(doc.resepId);
    const layout = WS.layouts[recipe.layout];
    const th = theme(doc.params);
    const variant = layout.variant || th.iconVariant;
    const own = new Set();
    doc.pages.forEach(pg => layout.icons(pg).forEach(nm => own.add(nm)));
    return Promise.all([WS.icons.load(th.icons, th.iconVariant), WS.icons.load(Array.from(own), variant)]);
  }

  WS.page = { LEVEL, ctxFor, theme, contentArea, render, renderAll, iconNames, loadIcons, profil: {} };
})(globalThis.WS);

/* recipes/hitung-tulis.js */
(function (WS) {
  'use strict';

  const RANGE = { mudah: [1, 5], sedang: [1, 10], sulit: [5, 15] };
  function pool(tema) {
    if (tema !== 'acak') {
      const p = WS.icons.byTema(tema);
      if (p.length) return p;
    }
    return Object.keys(WS.icons.TEMA).reduce((acc, k) => acc.concat(WS.icons.byTema(k)), []);
  }

  WS.registry.define({
    id: 'hitung-tulis',
    grup: 'angka',
    jenjang: 'paud',
    nama: 'Hitung & Tulis',
    judul: 'Ayo Berhitung!',
    instruksi: 'Hitung bendanya, lalu tulis angkanya di kotak.',
    layout: 'baris-penuh',
    hasAnswers: true,
    defaults: { tema: 'acak', soal: 6 },
    opsi: [
      { key: 'tema', label: 'Tema gambar', choices: () => WS.icons.temaChoices() },
      { key: 'soal', label: 'Jumlah soal per halaman', choices: [4, 5, 6, 8].map(v => ({ v, label: String(v) })) }
    ],
    generatePage(params, rnd) {
      const range = RANGE[params.kesulitan] || RANGE.mudah;
      const nums = [];
      for (let v = range[0]; v <= range[1]; v++) nums.push(v);
      const nextNum = WS.rng.bag(rnd, nums);
      const nextIcon = WS.rng.bag(rnd, pool(params.tema));
      const items = [];
      for (let i = 0; i < params.soal; i++) {
        const k = nextNum();
        items.push({ icons: Array(k).fill(nextIcon()), answer: String(k) });
      }
      return { items };
    }
  });
})(globalThis.WS);

/* recipes/tracing-garis.js */
(function (WS) {
  'use strict';

  const BENTUK = [
    { v: 'campur', label: 'Campur' },
    { v: 'lurus', label: 'Lurus' },
    { v: 'zigzag', label: 'Zigzag' },
    { v: 'gelombang', label: 'Gelombang' },
    { v: 'lengkung', label: 'Lengkung' },
    { v: 'tangga', label: 'Tangga' }
  ];
  const AMP = { mudah: 0.6, sedang: 1, sulit: 1.3 };

  WS.registry.define({
    id: 'tracing-garis',
    grup: 'motorik',
    jenjang: 'paud',
    nama: 'Menebalkan Garis',
    judul: 'Ayo Menebalkan Garis!',
    instruksi: 'Tebalkan garis putus-putus dari kiri ke kanan.',
    layout: 'garis-tulis',
    hasAnswers: false,
    defaults: { bentuk: 'campur', soal: 5 },
    opsi: [
      { key: 'bentuk', label: 'Bentuk garis', choices: BENTUK },
      { key: 'soal', label: 'Jumlah garis per halaman', choices: [3, 4, 5, 6].map(v => ({ v, label: String(v) })) }
    ],
    generatePage(params, rnd) {
      const nextPair = WS.rng.bag(rnd, WS.icons.PAIRS);
      const nextShape = WS.rng.bag(rnd, BENTUK.slice(1).map(b => b.v));
      const amp = AMP[params.kesulitan] || 1;
      const items = [];
      for (let i = 0; i < params.soal; i++) {
        const p = nextPair();
        items.push({ from: p.from, to: p.to, shape: params.bentuk === 'campur' ? nextShape() : params.bentuk, amp });
      }
      return { items };
    }
  });
})(globalThis.WS);

/* recipes/labirin.js */
(function (WS) {
  'use strict';

  const N = 1, E = 2, S = 4, W = 8;
  const DIRS = [[0, -1, N, S], [1, 0, E, W], [0, 1, S, N], [-1, 0, W, E]];
  const COLS = { mudah: 6, sedang: 9, sulit: 13 };

  function build(cols, rows, rnd) {
    const cells = Array.from({ length: rows }, () => Array(cols).fill(N | E | S | W));
    const seen = Array.from({ length: rows }, () => Array(cols).fill(false));
    const stack = [[0, 0]];
    seen[0][0] = true;
    while (stack.length) {
      const [c, r] = stack[stack.length - 1];
      const options = DIRS.filter(([dc, dr]) => {
        const nc = c + dc, nr = r + dr;
        return nc >= 0 && nr >= 0 && nc < cols && nr < rows && !seen[nr][nc];
      });
      if (!options.length) {
        stack.pop();
        continue;
      }
      const [dc, dr, b, ob] = options[Math.floor(rnd() * options.length)];
      const nc = c + dc, nr = r + dr;
      cells[r][c] &= ~b;
      cells[nr][nc] &= ~ob;
      seen[nr][nc] = true;
      stack.push([nc, nr]);
    }
    return cells;
  }

  function solve(cells, cols, rows) {
    const key = (c, r) => r * cols + c;
    const prev = new Map([[0, null]]);
    const q = [[0, 0]];
    while (q.length) {
      const [c, r] = q.shift();
      if (c === cols - 1 && r === rows - 1) break;
      for (const [dc, dr, b] of DIRS) {
        if (cells[r][c] & b) continue;
        const nc = c + dc, nr = r + dr;
        if (nc < 0 || nr < 0 || nc >= cols || nr >= rows || prev.has(key(nc, nr))) continue;
        prev.set(key(nc, nr), [c, r]);
        q.push([nc, nr]);
      }
    }
    const path = [];
    let cur = [cols - 1, rows - 1];
    while (cur) {
      path.unshift(cur);
      cur = prev.get(key(cur[0], cur[1]));
    }
    return path;
  }

  WS.maze = { N, E, S, W, DIRS, build, solve };

  WS.registry.define({
    id: 'labirin',
    grup: 'puzzle-paud',
    jenjang: 'paud',
    nama: 'Labirin',
    judul: 'Labirin Seru',
    instruksi: 'Bantu temukan jalan dari awal sampai ke tujuan!',
    layout: 'kanvas-penuh',
    hasAnswers: true,
    defaults: {},
    opsi: [],
    generatePage(params, rnd, env) {
      const cols = COLS[params.kesulitan] || COLS.mudah;
      const rows = Math.max(4, Math.round(cols * env.aspect));
      const cells = build(cols, rows, rnd);
      const pair = WS.rng.pick(rnd, WS.icons.PAIRS);
      return {
        items: [{ type: 'maze', cols, rows, cells, start: [0, 0], end: [cols - 1, rows - 1], solution: solve(cells, cols, rows), from: pair.from, to: pair.to }]
      };
    }
  });
})(globalThis.WS);

/* recipes/gunting.js */
(function (WS) {
  'use strict';

  const TEMA = ['hewan', 'buah', 'kendaraan', 'alam'];
  const LEVEL = {
    mudah: { bentuk: ['lurus', 'lurus', 'lengkung', 'zigzag'], amp: 0.7 },
    sedang: { bentuk: ['lurus', 'zigzag', 'gelombang', 'lengkung', 'tangga'], amp: 1 },
    sulit: { bentuk: ['zigzag', 'gelombang', 'tangga', 'lengkung', 'zigzag', 'gelombang'], amp: 1.3 }
  };

  WS.registry.define({
    id: 'ai-gunting',
    grup: 'motorik',
    jenjang: 'paud',
    nama: 'Latihan Menggunting',
    judul: 'Ayo Menggunting!',
    instruksi: 'Gunting mengikuti garis putus-putus sampai ke gambar.',
    layout: 'gunting',
    hasAnswers: false,
    ai: true,
    lokal: true,
    defaults: { tema: 'acak' },
    opsi: [],
    generatePage(params, rnd) {
      const lv = LEVEL[params.kesulitan] || LEVEL.mudah;
      const p = WS.icons.pool(params.tema, rnd);
      const next = WS.rng.bag(rnd, p.names);
      const bentuk = [lv.bentuk[0]].concat(WS.rng.shuffle(rnd, lv.bentuk.slice(1)));
      return { items: [{ mode: 'lokal', status: 'ok', tema: p.label, baris: bentuk.map(shape => ({ shape, amp: lv.amp, icon: next() })), image: null, kunci: [], masalah: [] }] };
    }
  });

  WS.gunting = { LEVEL, TEMA };
})(globalThis.WS);

/* ai/prompts.js */
(function (WS) {
  'use strict';

  const BAD = /[\r\n\t"'`<>{}\\]/g;

  function cleanTopic(s) {
    return String(s == null ? '' : s).replace(BAD, ' ').replace(/\s+/g, ' ').trim().slice(0, 40);
  }

  function cleanEn(s) {
    return String(s == null ? '' : s).replace(BAD, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);
  }

  function slug(s) {
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 24) || 'x';
  }

  function theme(topik, n) {
    return [
      'Kamu membantu membuat worksheet anak PAUD dan SD di Indonesia.',
      'Topik: "' + cleanTopic(topik) + '".',
      'Pilih ' + n + ' benda, hewan, atau tokoh BERBEDA yang sesuai topik, mudah dikenali anak, dan bisa digambar sebagai satu objek tunggal.',
      'Jangan memakai merek, tokoh berhak cipta, kekerasan, atau benda berbahaya.',
      'Balas HANYA JSON tanpa penjelasan dengan format:',
      '{"items":[{"nama":"nama Indonesia singkat 1-2 kata","en":"short English description for an illustrator"}]}'
    ].join('\n');
  }

  function sticker(item, gaya) {
    const what = cleanEn(item.en || item.nama);
    if (gaya === 'garis') {
      return 'Black and white line art of a single ' + what + ' for a children\'s coloring book. Thick clean black outlines only, no shading, no gray, no color fill, centered, the whole object visible, pure white background, no text, no letters.';
    }
    return 'A single cute ' + what + ', children\'s picture book sticker illustration, thick dark outline, simple flat bright colors, centered, the whole object visible, isolated on a pure white background, no text, no letters, no shadow, no other objects.';
  }

  function parseTheme(text, n) {
    const raw = String(text).replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      throw new Error('JSON tema tidak valid');
    }
    const list = Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
    const seen = new Set();
    const slugs = new Set();
    const out = [];
    for (const it of list) {
      if (!it || typeof it.nama !== 'string' || typeof it.en !== 'string') continue;
      const nama = it.nama.replace(BAD, ' ').replace(/\s+/g, ' ').trim();
      const en = cleanEn(it.en);
      if (nama.length < 2 || nama.length > 24 || en.length < 1) continue;
      const key = nama.toLowerCase();
      if (seen.has(key)) continue;
      let s = slug(nama);
      for (let k = 2; slugs.has(s); k++) s = slug(nama) + '-' + k;
      seen.add(key);
      slugs.add(s);
      out.push({ slug: s, nama, en });
      if (out.length >= n) break;
    }
    if (out.length < 4) throw new Error('Item tema kurang dari 4');
    return out;
  }

  WS.aiPrompt = { cleanTopic, slug, theme, sticker, parseTheme };
})(globalThis.WS);

/* ai/alpha.js */
(function (WS) {
  'use strict';

  function floodMask(data, w, h, thr) {
    const seen = new Uint8Array(w * h);
    const stack = [];
    const near = p => data[p * 4] >= thr && data[p * 4 + 1] >= thr && data[p * 4 + 2] >= thr;
    const push = (x, y) => {
      const p = y * w + x;
      if (!seen[p] && near(p)) {
        seen[p] = 1;
        stack.push(p);
      }
    };
    for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
    for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
    let cleared = 0;
    while (stack.length) {
      const p = stack.pop();
      data[p * 4 + 3] = 0;
      cleared++;
      const x = p % w, y = (p - x) / w;
      if (x > 0) push(x - 1, y);
      if (x < w - 1) push(x + 1, y);
      if (y > 0) push(x, y - 1);
      if (y < h - 1) push(x, y + 1);
    }
    return cleared;
  }

  WS.alpha = { floodMask };
})(globalThis.WS);

/* ai/catalog.js */
(function (WS) {
  'use strict';

  const R = WS.rng;
  const LEVEL = { mudah: [1, 5], sedang: [1, 10], sulit: [5, 15] };
  const TEMA_EN = { buah: 'fruits', hewan: 'cute animals', kendaraan: 'vehicles', alam: 'nature such as flowers, trees, sun and stars' };
  const ACAK = ['dinosaurs', 'ocean animals', 'farm animals', 'outer space', 'insects', 'vegetables', 'toys', 'jungle animals', 'transportation', 'weather', 'birds', 'cakes and sweets', 'musical instruments', 'Indonesian traditional food', 'pets', 'fruits', 'garden flowers', 'school supplies', 'camping', 'kitchen tools'];
  const HURUF = [
    ['A', 'Apel', 'red apple'], ['B', 'Bola', 'ball'], ['C', 'Cabai', 'red chili'], ['D', 'Domba', 'sheep'],
    ['E', 'Es krim', 'ice cream cone'], ['F', 'Flamingo', 'flamingo'], ['G', 'Gajah', 'elephant'], ['H', 'Harimau', 'tiger'],
    ['I', 'Ikan', 'fish'], ['J', 'Jeruk', 'orange fruit'], ['K', 'Kucing', 'cat'], ['L', 'Lebah', 'bee'],
    ['M', 'Mobil', 'car'], ['N', 'Nanas', 'pineapple'], ['O', 'Obeng', 'screwdriver'], ['P', 'Pisang', 'banana'],
    ['R', 'Rumah', 'house'], ['S', 'Sepeda', 'bicycle'], ['T', 'Tikus', 'mouse'], ['U', 'Ular', 'snake'],
    ['W', 'Wortel', 'carrot'], ['Y', 'Yoyo', 'yo-yo'], ['Z', 'Zebra', 'zebra']
  ];
  const RULES = 'Printable worksheet for Indonesian kindergarten children aged 4 to 6. Draw ONLY the activity area and let it fill the whole image. Do NOT draw any title, header, name field, date field, page border, logo or watermark. Use text only for single letters or numbers that the activity needs; every word must be correct Indonesian spelling. Leave clear white space for children to write or draw.';

  function style(gaya, lineArt) {
    if (lineArt || gaya === 'lkpd') return 'Black and white line art only, thick clean black outlines, no gray, no shading, no color fill, pure white background, easy to photocopy.';
    if (gaya === 'minimalis') return 'Soft pastel colors, minimal clean flat illustration, thin dark outlines, lots of white space, calm Montessori style, pure white background.';
    return 'Bright cheerful colors, cute flat cartoon illustration, thick dark outlines, playful, pure white background.';
  }

  function temaText(tema, rnd) {
    if (!tema || tema === 'acak') return R.pick(rnd, ACAK);
    if (TEMA_EN[tema]) return TEMA_EN[tema];
    if (String(tema).startsWith('ai:')) {
      const th = WS.aiThemes.get(String(tema).slice(3));
      return th ? th.topik : R.pick(rnd, ACAK);
    }
    return WS.aiPrompt.cleanTopic(tema) || R.pick(rnd, ACAK);
  }

  function counts(rnd, level, n) {
    const r = LEVEL[level] || LEVEL.mudah;
    const nums = [];
    for (let v = r[0]; v <= r[1]; v++) nums.push(v);
    const next = R.bag(rnd, nums);
    return Array.from({ length: n }, () => next());
  }

  const JENIS = [
    {
      id: 'ai-jejak-garis', grup: 'motorik', nama: 'Jejak Garis', judul: 'Ayo Menebalkan Garis!', instruksi: 'Tebalkan garis putus-putus dari gambar kiri ke kanan.',
      plan: o => ({ activity: 'Pre-writing tracing activity: 5 horizontal rows of thick dotted guide lines (straight, zigzag, wavy, curved and loops); each line leads from a cute ' + o.tema + ' picture on the left to another ' + o.tema + ' picture on the right.' })
    },
    {
      id: 'ai-tebal-huruf', grup: 'huruf', nama: 'Menebalkan Huruf', judul: 'Ayo Menebalkan Huruf!', instruksi: 'Tebalkan huruf mengikuti titik-titik, lalu tulis sendiri.',
      plan: (o, rnd) => {
        const p = R.pick(rnd, HURUF);
        const l = p[0].toLowerCase();
        return { activity: 'Letter tracing worksheet for the letter "' + p[0] + l + '": a big example of capital ' + p[0] + ' and small ' + l + ' with numbered stroke arrows, then 4 rows of dotted letters ' + p[0] + ' and ' + l + ' to trace on handwriting guide lines, and a cute picture of ' + p[2] + ' (Indonesian word "' + p[1] + '").' };
      }
    },
    {
      id: 'ai-hitung', grup: 'angka', nama: 'Hitung Gambar', judul: 'Ayo Berhitung!', instruksi: 'Hitung bendanya, lalu tulis angkanya di kotak.', kunci: true,
      plan: (o, rnd) => {
        const c = counts(rnd, o.level, 6);
        return {
          activity: 'Counting worksheet: 6 numbered rows (1 to 6). Each row shows a line of identical ' + o.tema + ' pictures, clearly separated and easy to count, with an empty square answer box at the right end of the row. Exact number of pictures per row: ' + c.map((n, i) => 'row ' + (i + 1) + ' = ' + n).join(', ') + '.',
          expect: c.map((n, i) => (i + 1) + '. ' + n)
        };
      }
    },
    {
      id: 'ai-mewarnai', grup: 'mewarnai', nama: 'Halaman Mewarnai', judul: 'Ayo Mewarnai!', instruksi: 'Warnai gambar dengan warna kesukaanmu.',
      plan: o => ({ activity: 'Coloring page: one big simple scene about ' + o.tema + ' with large closed shapes, thick outlines and only a few small details, suitable for young children.', lineArt: true })
    },
    {
      id: 'ai-warna-angka', grup: 'mewarnai', nama: 'Mewarnai Sesuai Angka', judul: 'Mewarnai Sesuai Angka', instruksi: 'Warnai setiap bagian sesuai angka dan kunci warna.',
      plan: o => ({ activity: 'Color by number page: a simple picture about ' + o.tema + ' divided into large regions, each region labeled with a number 1 to 4, and a legend at the bottom written in Indonesian: 1 = merah, 2 = biru, 3 = kuning, 4 = hijau.', lineArt: true })
    },
    {
      id: 'ai-cocok-garis', grup: 'mencocokkan', nama: 'Pasangkan Gambar', judul: 'Pasangkan Gambar', instruksi: 'Tarik garis dari gambar kiri ke pasangannya di kanan.', kunci: true,
      plan: o => ({ activity: 'Matching worksheet: two columns with 5 pictures each about ' + o.tema + '. Every picture on the left has the same picture on the right but in a shuffled order, with a dot next to each picture for drawing lines between them.' })
    },
    {
      id: 'ai-bayangan', grup: 'mencocokkan', nama: 'Cocokkan Bayangan', judul: 'Cari Bayangannya', instruksi: 'Tarik garis dari gambar ke bayangan yang cocok.', kunci: true,
      plan: o => ({ activity: 'Shadow matching worksheet: left column with 5 pictures about ' + o.tema + ', right column with their solid black silhouettes in a shuffled order, a dot next to each picture for drawing lines.' })
    },
    {
      id: 'ai-pola', grup: 'logika', nama: 'Lanjutkan Pola', judul: 'Lanjutkan Polanya', instruksi: 'Gambar benda berikutnya di kotak kosong.', kunci: true,
      plan: (o, rnd) => {
        const rows = Array.from({ length: 5 }, () => R.pick(rnd, ['AB', 'AAB', 'ABB', 'ABC']));
        return { activity: 'Pattern worksheet: 5 numbered rows. Each row shows a repeating pattern of ' + o.tema + ' pictures followed by one empty box at the end for the next item. Pattern per row: ' + rows.map((p, i) => 'row ' + (i + 1) + ' = ' + p.split('').join('-') + ' repeated twice').join(', ') + '.' };
      }
    },
    {
      id: 'ai-urut-ukuran', grup: 'logika', nama: 'Urutkan Ukuran', judul: 'Urutkan dari Kecil ke Besar', instruksi: 'Tulis angka 1 sampai 4 dari yang paling kecil.', kunci: true,
      plan: o => ({ activity: 'Size ordering worksheet: 4 numbered rows, each row shows 4 copies of the same ' + o.tema + ' picture in different sizes in a shuffled order, with a small empty box under each picture to write numbers 1 to 4 from smallest to biggest.' })
    }
  ];

  function compose(plan, gaya) {
    return [plan.activity, style(gaya, plan.lineArt), RULES].join('\n');
  }

  JENIS.forEach(j => WS.registry.define({
    id: j.id, grup: j.grup, jenjang: 'paud', nama: j.nama, judul: j.judul, instruksi: j.instruksi,
    layout: 'gambar-ai', hasAnswers: !!j.kunci, ai: true, defaults: { tema: 'acak' }, opsi: [],
    generatePage(params, rnd, env) {
      const tema = temaText(params.tema, rnd);
      const plan = j.plan({ tema, level: params.kesulitan, gaya: params.gaya }, rnd);
      return { items: [{ prompt: compose(plan, params.gaya), expect: plan.expect || [], aspect: env.aspect < 1 ? '4:3' : '3:4', tema, image: null, kunci: [], masalah: [], status: 'baru' }] };
    }
  }));

  function ids() {
    return JENIS.map(j => j.id);
  }

  WS.aiCatalog = { LEVEL, ACAK, HURUF, RULES, style, temaText, ids };
})(globalThis.WS);

/* recipes/paud-kode.js */
(function (WS) {
  'use strict';

  const R = WS.rng;

  const HURUF = [
    ['A', 'Apel', 'apel'], ['A', 'Anggur', 'anggur'], ['A', 'Anjing', 'anjing'],
    ['B', 'Bola', 'bola'], ['B', 'Bunga', 'bunga'], ['B', 'Bus', 'bus'], ['B', 'Bintang', 'bintang'], ['B', 'Bulan', 'bulan'], ['B', 'Beruang', 'beruang'],
    ['C', 'Cabai', 'cabai'], ['D', 'Domba', 'domba'], ['E', 'Es Krim', 'es-krim'], ['F', 'Flamingo', 'flamingo'],
    ['G', 'Gajah', 'gajah'], ['H', 'Harimau', 'harimau'], ['I', 'Ikan', 'ikan'], ['J', 'Jeruk', 'jeruk'],
    ['K', 'Kucing', 'kucing'], ['K', 'Kelinci', 'kelinci'], ['K', 'Keju', 'keju'], ['K', 'Kereta', 'kereta'], ['K', 'Kupu-kupu', 'kupu-kupu'],
    ['L', 'Lebah', 'lebah'], ['M', 'Mobil', 'mobil'], ['M', 'Monyet', 'monyet'], ['M', 'Matahari', 'matahari'], ['N', 'Nanas', 'nanas'],
    ['P', 'Pisang', 'pisang'], ['P', 'Pesawat', 'pesawat'], ['P', 'Perahu', 'perahu'], ['P', 'Pohon', 'pohon'], ['R', 'Rumah', 'rumah'],
    ['S', 'Sepeda', 'sepeda'], ['S', 'Stroberi', 'stroberi'], ['S', 'Semangka', 'semangka'], ['T', 'Tikus', 'tikus'],
    ['U', 'Ular', 'ular'], ['U', 'Unta', 'unta'], ['W', 'Wortel', 'wortel'], ['Y', 'Yoyo', 'yoyo'], ['Z', 'Zebra', 'zebra']
  ];
  const HURUF_LEVEL = { mudah: { opsi: 3, kecil: false }, sedang: { opsi: 4, kecil: false }, sulit: { opsi: 4, kecil: true } };
  const BANDING = { mudah: [1, 5, 5], sedang: [1, 8, 8], sulit: [4, 10, 2] };
  const WARNAI = { mudah: [1, 5], sedang: [2, 8], sulit: [4, 8] };
  const BEDA = { mudah: { cols: 3, rows: 3, n: 3 }, sedang: { cols: 4, rows: 3, n: 5 }, sulit: { cols: 5, rows: 4, n: 7 } };
  const MAZE = { mudah: 6, sedang: 9, sulit: 12 };
  const TITIK = { mudah: 10, sedang: 20, sulit: 30 };

  function bintang() {
    return Array.from({ length: 10 }, (_, i) => {
      const a = -Math.PI / 2 + i * Math.PI / 5;
      const r = i % 2 ? 0.2 : 0.5;
      return [0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)];
    });
  }

  function hati() {
    return Array.from({ length: 16 }, (_, i) => {
      const t = i * Math.PI * 2 / 16;
      return [16 * Math.pow(Math.sin(t), 3), -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))];
    });
  }

  const BENTUK = {
    bintang: { nama: 'Bintang', v: bintang() },
    berlian: { nama: 'Berlian', v: [[0.3, 0.15], [0.7, 0.15], [0.92, 0.38], [0.5, 0.92], [0.08, 0.38]] },
    rumah: { nama: 'Rumah', v: [[0.15, 0.95], [0.15, 0.5], [0.05, 0.5], [0.5, 0.1], [0.95, 0.5], [0.85, 0.5], [0.85, 0.95], [0.6, 0.95], [0.6, 0.7], [0.4, 0.7], [0.4, 0.95]] },
    ikan: { nama: 'Ikan', v: [[0.05, 0.5], [0.2, 0.32], [0.4, 0.25], [0.6, 0.3], [0.72, 0.42], [0.92, 0.25], [0.85, 0.5], [0.92, 0.75], [0.72, 0.58], [0.6, 0.7], [0.4, 0.75], [0.2, 0.68]] },
    perahu: { nama: 'Perahu', v: [[0.08, 0.68], [0.45, 0.68], [0.45, 0.08], [0.82, 0.6], [0.52, 0.6], [0.52, 0.68], [0.92, 0.68], [0.76, 0.88], [0.24, 0.88]] },
    kucing: { nama: 'Kucing', v: [[0.15, 0.1], [0.35, 0.3], [0.65, 0.3], [0.85, 0.1], [0.88, 0.45], [0.85, 0.7], [0.7, 0.88], [0.5, 0.93], [0.3, 0.88], [0.15, 0.7], [0.12, 0.45]] },
    roket: { nama: 'Roket', v: [[0.5, 0.03], [0.62, 0.18], [0.64, 0.6], [0.78, 0.75], [0.78, 0.9], [0.62, 0.82], [0.58, 0.9], [0.42, 0.9], [0.38, 0.82], [0.22, 0.9], [0.22, 0.75], [0.36, 0.6], [0.38, 0.18]] },
    pohon: { nama: 'Pohon Cemara', v: [[0.5, 0.05], [0.72, 0.3], [0.62, 0.3], [0.82, 0.55], [0.7, 0.55], [0.92, 0.8], [0.58, 0.8], [0.58, 0.95], [0.42, 0.95], [0.42, 0.8], [0.08, 0.8], [0.3, 0.55], [0.18, 0.55], [0.38, 0.3], [0.28, 0.3]] },
    hati: { nama: 'Hati', v: hati() },
    mobil: { nama: 'Mobil', v: [[0.05, 0.75], [0.05, 0.55], [0.2, 0.5], [0.32, 0.3], [0.68, 0.3], [0.8, 0.5], [0.95, 0.55], [0.95, 0.75], [0.85, 0.75], [0.8, 0.86], [0.68, 0.86], [0.63, 0.75], [0.37, 0.75], [0.32, 0.86], [0.2, 0.86], [0.15, 0.75]] }
  };

  function normalize(pts) {
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const x0 = Math.min(...xs), y0 = Math.min(...ys);
    const k = Math.max(Math.max(...xs) - x0, Math.max(...ys) - y0);
    return pts.map(p => [(p[0] - x0) / k, (p[1] - y0) / k]);
  }

  function sample(verts, target) {
    const nv = verts.length;
    const next = i => verts[(i + 1) % nv];
    const extra = Math.max(0, target - nv);
    const lens = verts.map((p, i) => Math.hypot(next(i)[0] - p[0], next(i)[1] - p[1]));
    const total = lens.reduce((a, b) => a + b, 0);
    const raw = lens.map(l => l / total * extra);
    const cnt = raw.map(Math.floor);
    raw.map((r, i) => [r - cnt[i], i]).sort((a, b) => b[0] - a[0] || a[1] - b[1])
      .slice(0, extra - cnt.reduce((a, b) => a + b, 0)).forEach(([, i]) => { cnt[i]++; });
    const out = [];
    verts.forEach((p, i) => {
      out.push(p);
      const q = next(i);
      for (let k = 1; k <= cnt[i]; k++) {
        const f = k / (cnt[i] + 1);
        out.push([p[0] + (q[0] - p[0]) * f, p[1] + (q[1] - p[1]) * f]);
      }
    });
    return out;
  }

  function round(v) {
    return Math.round(v * 1000) / 1000;
  }

  function lokal(extra) {
    return { items: [Object.assign({ mode: 'lokal', status: 'ok', image: null, kunci: [], masalah: [] }, extra)] };
  }

  function define(cfg) {
    WS.registry.define(Object.assign({ jenjang: 'paud', ai: true, lokal: true, hasAnswers: true, defaults: { tema: 'acak' }, opsi: [] }, cfg));
  }

  function distinct(rnd, lo, hi) {
    const a = R.int(rnd, lo, hi);
    let b = R.int(rnd, lo, hi - 1);
    if (b >= a) b++;
    return [a, b];
  }

  define({
    id: 'ai-huruf-awal', grup: 'huruf', nama: 'Huruf Awal', judul: 'Huruf Awal Gambar', instruksi: 'Lingkari huruf awal dari nama setiap gambar.', layout: 'kode-huruf',
    generatePage(params, rnd) {
      const lv = HURUF_LEVEL[params.kesulitan] || HURUF_LEVEL.mudah;
      const letters = Array.from(new Set(HURUF.map(h => h[0])));
      const kotak = R.shuffle(rnd, letters).slice(0, 6).map(L => {
        const h = R.pick(rnd, HURUF.filter(x => x[0] === L));
        const lain = R.shuffle(rnd, letters.filter(x => x !== L)).slice(0, lv.opsi - 1);
        const pilihan = R.shuffle(rnd, [L].concat(lain)).map(x => (lv.kecil ? x.toLowerCase() : x));
        return { huruf: L, kata: h[1], icon: h[2], pilihan };
      });
      return lokal({ kotak });
    }
  });

  define({
    id: 'ai-warnai-sejumlah', grup: 'angka', nama: 'Warnai Sejumlah', judul: 'Warnai Sesuai Angka', instruksi: 'Warnai gambar sebanyak angka di setiap kotak.', layout: 'kode-warnai',
    generatePage(params, rnd) {
      const r = WARNAI[params.kesulitan] || WARNAI.mudah;
      const pool = WS.icons.pool(params.tema, rnd);
      const ambil = R.bag(rnd, pool.names);
      const angka = R.bag(rnd, Array.from({ length: r[1] - r[0] + 1 }, (_, i) => r[0] + i));
      const kotak = Array.from({ length: 4 }, () => {
        const icon = ambil();
        return { n: angka(), icons: Array(8).fill(icon) };
      });
      return lokal({ tema: pool.label, kotak });
    }
  });

  define({
    id: 'ai-banyak-sedikit', grup: 'angka', nama: 'Lebih Banyak', judul: 'Mana yang Lebih Banyak?', instruksi: 'Lingkari kelompok yang jumlahnya lebih banyak.', layout: 'kode-banding',
    generatePage(params, rnd) {
      const [lo, hi, selisih] = BANDING[params.kesulitan] || BANDING.mudah;
      const pool = WS.icons.pool(params.tema, rnd);
      const ambil = R.bag(rnd, pool.names);
      const baris = Array.from({ length: 5 }, () => {
        let pair = distinct(rnd, lo, hi);
        while (Math.abs(pair[0] - pair[1]) > selisih) pair = distinct(rnd, lo, hi);
        return { icon: ambil(), kiri: pair[0], kanan: pair[1] };
      });
      return lokal({ tema: pool.label, baris });
    }
  });

  define({
    id: 'ai-beda', grup: 'logika', nama: 'Cari Perbedaan', judul: 'Cari Perbedaannya', instruksi: 'Lingkari bagian yang berbeda pada gambar kedua.', layout: 'kode-beda',
    generatePage(params, rnd, env) {
      const lv = BEDA[params.kesulitan] || BEDA.mudah;
      const tegak = env.aspect >= 1;
      const cols = tegak ? lv.cols : lv.rows;
      const rows = tegak ? lv.rows : lv.cols;
      const pool = WS.icons.pool(params.tema, rnd);
      const ambil = R.bag(rnd, pool.names);
      const a = Array.from({ length: cols * rows }, () => ambil());
      const jenis = R.bag(rnd, ['ganti', 'hilang', 'kecil']);
      const beda = R.shuffle(rnd, a.map((_, i) => i)).slice(0, lv.n).sort((x, y) => x - y).map(i => {
        const j = pool.names.length > 1 ? jenis() : R.pick(rnd, ['hilang', 'kecil']);
        const d = { i, jenis: j };
        if (j === 'ganti') d.icon = R.pick(rnd, pool.names.filter(nm => nm !== a[i]));
        return d;
      });
      return lokal({ tema: pool.label, cols, rows, a, beda });
    }
  });

  define({
    id: 'ai-labirin', grup: 'puzzle-paud', nama: 'Labirin', judul: 'Labirin Seru', instruksi: 'Bantu temukan jalan dari awal sampai tujuan.', layout: 'kode-labirin',
    generatePage(params, rnd, env) {
      const cols = MAZE[params.kesulitan] || MAZE.mudah;
      const rows = Math.max(4, Math.round(cols * env.aspect));
      const cells = WS.maze.build(cols, rows, rnd);
      const pair = R.pick(rnd, WS.icons.PAIRS);
      return lokal({ type: 'maze', cols, rows, cells, start: [0, 0], end: [cols - 1, rows - 1], solution: WS.maze.solve(cells, cols, rows), from: pair.from, to: pair.to });
    }
  });

  define({
    id: 'ai-titik', grup: 'puzzle-paud', nama: 'Hubungkan Titik', judul: 'Hubungkan Titik-titik', instruksi: 'Hubungkan titik 1 sampai akhir, kembali ke 1, lalu warnai.', layout: 'kode-titik',
    generatePage(params, rnd) {
      const target = TITIK[params.kesulitan] || TITIK.mudah;
      const ids = Object.keys(BENTUK).filter(k => BENTUK[k].v.length <= Math.max(12, target));
      const b = BENTUK[R.pick(rnd, ids)];
      const pts = sample(normalize(b.v), target).map(p => [round(p[0]), round(p[1])]);
      return lokal({ nama: b.nama, titik: pts, lebar: Math.max(...pts.map(p => p[0])), tinggi: Math.max(...pts.map(p => p[1])) });
    }
  });

  WS.paudKode = { HURUF, HURUF_LEVEL, BANDING, WARNAI, BEDA, MAZE, TITIK, BENTUK, normalize, sample };
})(globalThis.WS);

/* ai/checker.js */
(function (WS) {
  'use strict';

  function clip(arr, max, len) {
    return (Array.isArray(arr) ? arr : [])
      .filter(s => typeof s === 'string')
      .map(s => s.replace(/\s+/g, ' ').trim().slice(0, len))
      .filter(Boolean)
      .slice(0, max);
  }

  function promptFor(item) {
    return [
      'Kamu pemeriksa kualitas worksheet anak TK di Indonesia.',
      'Instruksi yang dipakai untuk menggambar worksheet ini:',
      item.prompt,
      item.expect && item.expect.length ? 'Jawaban yang diharapkan: ' + item.expect.join('; ') : 'Tidak ada jawaban yang ditentukan sebelumnya.',
      'Periksa gambar: (1) apakah aktivitas sesuai instruksi dan bisa dikerjakan anak, (2) apakah ada teks salah eja, huruf acak, atau tulisan yang tidak diminta, (3) tuliskan kunci jawaban setiap soal secara singkat dalam bahasa Indonesia.',
      'Jika jawaban yang diharapkan diberikan tetapi gambar tidak sesuai, isi ok dengan false.',
      'Balas HANYA JSON: {"ok":true,"masalah":["..."],"kunci":["1. ...","2. ..."]}'
    ].join('\n');
  }

  function parse(text) {
    const raw = String(text).replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
    const data = JSON.parse(raw);
    if (!data || typeof data.ok !== 'boolean') throw new Error('Format cek tidak valid');
    return { ok: data.ok, masalah: clip(data.masalah, 5, 120), kunci: clip(data.kunci, 20, 80) };
  }

  WS.aiCheck = { prompt: promptFor, parse };
})(globalThis.WS);

/* ai/soal.js */
(function (WS) {
  'use strict';

  const TIPE = ['pg', 'isian', 'bs', 'uraian'];
  const CTRL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F<>{}\\`]/g;
  const FORMAT = 'Balas HANYA JSON dengan format: {"bacaan":"","soal":[{"tipe":"pg","tanya":"","pilihan":["","","",""],"jawaban":""}],"ilustrasi":""}. Aturan: ejaan benar; tanpa nomor di awal teks soal; tipe hanya pg, isian, bs, atau uraian; tipe pg wajib tepat 4 pilihan berbeda tanpa huruf a/b/c/d dan jawaban sama persis dengan salah satu pilihan; jawaban bs hanya "Benar" atau "Salah"; isi bacaan kosong bila tidak diminta; ilustrasi = deskripsi singkat bahasa Inggris untuk satu gambar pendukung tanpa tulisan.';

  function clean(s, max) {
    return String(s == null ? '' : s).replace(CTRL, ' ').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, max);
  }

  function stripNo(s) {
    return s.replace(/^\s*(\d+[.)]|[a-dA-D][.)])\s*/, '');
  }

  function unfence(text) {
    return String(text).replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
  }

  function parse(text, spec) {
    const d = JSON.parse(unfence(text));
    const allowed = spec.tipe || TIPE;
    const soal = [];
    (Array.isArray(d.soal) ? d.soal : []).forEach(s => {
      if (!s || !allowed.includes(s.tipe)) return;
      const tanya = stripNo(clean(s.tanya, 300));
      if (tanya.length < 3) return;
      if (s.tipe === 'pg') {
        const pilihan = (Array.isArray(s.pilihan) ? s.pilihan : []).map(p => stripNo(clean(p, 80)));
        const jawaban = stripNo(clean(s.jawaban, 80));
        if (pilihan.length !== 4 || pilihan.some(p => !p) || new Set(pilihan).size !== 4 || !pilihan.includes(jawaban)) return;
        soal.push({ tipe: 'pg', tanya, pilihan, jawaban });
      } else if (s.tipe === 'bs') {
        const j = clean(s.jawaban, 10).toLowerCase();
        if (j !== 'benar' && j !== 'salah') return;
        soal.push({ tipe: 'bs', tanya, jawaban: j === 'benar' ? 'Benar' : 'Salah' });
      } else {
        const jawaban = clean(s.jawaban, 200);
        if (!jawaban) return;
        soal.push({ tipe: s.tipe, tanya, jawaban });
      }
    });
    if (soal.length < spec.min) throw new Error('Soal valid kurang dari ' + spec.min);
    const bacaan = spec.bacaan ? clean(d.bacaan, 1500) : '';
    if (spec.bacaan && bacaan.length < 40) throw new Error('Bacaan terlalu pendek');
    return { bacaan, soal: soal.slice(0, spec.max), ilustrasi: clean(d.ilustrasi, 160) };
  }

  function kunci(soal) {
    return soal.map((s, i) => (i + 1) + '. ' + (s.tipe === 'pg' ? 'abcd'[s.pilihan.indexOf(s.jawaban)] + '. ' + s.jawaban : s.jawaban));
  }

  function cekPrompt(data, konteks) {
    return [
      'Kamu editor lembar kerja SD di Indonesia. Periksa lembar kerja berikut untuk ' + konteks + '.',
      'Perbaiki salah eja, kalimat janggal, soal yang membingungkan, dan kunci jawaban yang salah. Pertahankan jumlah dan tipe soal.',
      'Isi "ok" dengan true bila tidak ada yang perlu diperbaiki, false bila ada perbaikan.',
      FORMAT.replace('{"bacaan"', '{"ok":true,"bacaan"'),
      'DATA:',
      JSON.stringify(data)
    ].join('\n');
  }

  function parseCek(text, spec) {
    const raw = unfence(text);
    return { ok: JSON.parse(raw).ok === true, data: parse(raw, spec) };
  }

  function applyEdit(data, edit) {
    const bacaan = data.bacaan ? clean(edit.bacaan, 1500) : '';
    if (data.bacaan && !bacaan) throw new Error('Bacaan tidak boleh kosong');
    const soal = data.soal.map((orig, i) => {
      const e = (edit.soal || [])[i] || {};
      const no = 'Soal ' + (i + 1) + ': ';
      const tanya = clean(e.tanya, 300);
      if (!tanya) throw new Error(no + 'pertanyaan tidak boleh kosong');
      if (orig.tipe === 'pg') {
        const pilihan = (Array.isArray(e.pilihan) ? e.pilihan : []).map(p => clean(p, 80));
        if (pilihan.length !== 4 || pilihan.some(p => !p)) throw new Error(no + 'keempat pilihan wajib diisi');
        if (new Set(pilihan).size !== 4) throw new Error(no + 'pilihan tidak boleh sama');
        const jawaban = clean(e.jawaban, 80);
        if (!pilihan.includes(jawaban)) throw new Error(no + 'jawaban harus salah satu pilihan');
        return { tipe: 'pg', tanya, pilihan, jawaban };
      }
      if (orig.tipe === 'bs') {
        const j = clean(e.jawaban, 10).toLowerCase();
        if (j !== 'benar' && j !== 'salah') throw new Error(no + 'jawaban harus Benar atau Salah');
        return { tipe: 'bs', tanya, jawaban: j === 'benar' ? 'Benar' : 'Salah' };
      }
      const jawaban = clean(e.jawaban, 200);
      if (!jawaban) throw new Error(no + 'kunci jawaban tidak boleh kosong');
      return { tipe: orig.tipe, tanya, jawaban };
    });
    const out = { bacaan, soal, ilustrasi: data.ilustrasi || '' };
    return { data: out, kunci: kunci(soal) };
  }

  function ilustrasiPrompt(desc, gaya) {
    return 'A single illustration for a children\'s school worksheet: ' + clean(desc, 160) + '. ' + WS.aiCatalog.style(gaya) + ' No text, no letters, no numbers.';
  }

  WS.aiSoal = { FORMAT, parse, kunci, cekPrompt, parseCek, ilustrasiPrompt, applyEdit };
})(globalThis.WS);

/* ai/catalog-sd.js */
(function (WS) {
  'use strict';

  const R = WS.rng;
  const KELAS = {
    sd13: { mudah: 'kelas 1 SD', sedang: 'kelas 2 SD', sulit: 'kelas 3 SD' },
    sd46: { mudah: 'kelas 4 SD', sedang: 'kelas 5 SD', sulit: 'kelas 6 SD' },
    lintas: { mudah: 'kelas 1-2 SD', sedang: 'kelas 3-4 SD', sulit: 'kelas 5-6 SD' }
  };
  const TEMA_ID = { buah: 'buah-buahan', hewan: 'hewan', kendaraan: 'kendaraan', alam: 'alam sekitar' };
  const TOPIK = {
    umum: ['keluarga', 'sekolahku', 'binatang peliharaan', 'kebun sayur', 'pasar tradisional', 'hari Minggu', 'menjaga kebersihan', 'musim hujan', 'liburan ke desa', 'makanan sehat'],
    ipas: ['bagian-bagian tumbuhan', 'organ tubuh manusia', 'wujud benda', 'sumber energi', 'rantai makanan', 'cuaca dan iklim', 'tata surya', 'gaya dan gerak', 'daur air', 'ekosistem'],
    pancasila: ['sila-sila Pancasila', 'hak dan kewajiban', 'keberagaman budaya Indonesia', 'gotong royong', 'aturan di rumah dan sekolah', 'simbol-simbol negara'],
    mtk: ['pecahan', 'KPK dan FPB', 'luas dan keliling bangun datar', 'volume kubus dan balok', 'persen', 'kecepatan dan debit'],
    english: ['my family', 'animals', 'food and drinks', 'my school', 'daily activities', 'colors and shapes']
  };

  const JENIS = [
    { id: 'ai-bacaan-pendek', grup: 'bindo-dasar', jenjang: 'sd13', nama: 'Bacaan Pendek', judul: 'Ayo Membaca!', instruksi: 'Bacalah teks berikut, lalu jawab pertanyaannya.', topik: 'umum',
      spec: { min: 4, max: 6, bacaan: true, tipe: ['pg', 'isian'] }, tugas: 'sebuah bacaan pendek 1 paragraf (5-7 kalimat sederhana) lalu 6 soal pemahaman: 4 soal pg dan 2 soal isian' },
    { id: 'ai-lengkapi-kata', grup: 'bindo-dasar', jenjang: 'sd13', nama: 'Lengkapi Kalimat', judul: 'Lengkapi Kalimatnya', instruksi: 'Isilah titik-titik dengan kata yang tepat.', topik: 'umum',
      spec: { min: 6, max: 10, tipe: ['isian'] }, tugas: '10 soal isian berupa kalimat rumpang; bagian kosong ditulis "........" di dalam kalimat dan jawabannya satu kata' },
    { id: 'ai-salin-kalimat', grup: 'menulis', jenjang: 'sd13', nama: 'Menyalin Kalimat', judul: 'Ayo Menulis Rapi', instruksi: 'Salin kalimat di bawah ini dengan tulisan yang rapi.', topik: 'umum', noKunci: true,
      spec: { min: 4, max: 6, tipe: ['uraian'] }, tugas: '6 soal uraian; teks soal adalah satu kalimat pendek yang baik untuk disalin anak (6-10 kata) dan jawabannya sama dengan kalimat itu' },
    { id: 'ai-cerita-hitung', grup: 'mtk-dasar', jenjang: 'sd13', nama: 'Soal Cerita Hitung', judul: 'Soal Cerita Berhitung', instruksi: 'Bacalah soal cerita, lalu tulis jawabannya.', topik: 'umum',
      spec: { min: 5, max: 8, tipe: ['isian', 'pg'] }, tugas: '8 soal cerita penjumlahan dan pengurangan (kelas 1: sampai 20, kelas 2: sampai 100, kelas 3: sampai 1000) dengan tokoh dan benda sesuai topik; campuran isian dan pg; jawaban berupa angka yang benar' },
    { id: 'ai-cerita-terapan', grup: 'mtk-terapan', jenjang: 'sd13', nama: 'Jam, Uang & Ukuran', judul: 'Matematika Sehari-hari', instruksi: 'Kerjakan soal tentang jam, uang, dan ukuran.', topik: 'umum',
      spec: { min: 5, max: 8, tipe: ['isian', 'pg'] }, tugas: '8 soal cerita tentang membaca jam, uang Rupiah, panjang, dan berat dalam kehidupan sehari-hari; campuran isian dan pg; jawaban harus benar' },
    { id: 'ai-tebakan', grup: 'puzzle-sd', jenjang: 'sd13', nama: 'Tebak-tebakan', judul: 'Ayo Menebak!', instruksi: 'Baca petunjuknya, lalu pilih jawaban yang tepat.', topik: 'umum',
      spec: { min: 5, max: 8, tipe: ['pg'] }, tugas: '8 teka-teki deskripsi benda atau hewan (contoh: "Aku berkaki empat dan suka makan wortel. Siapakah aku?") dalam bentuk pg' },
    { id: 'ai-bacaan-pemahaman', grup: 'bindo-lanjut', jenjang: 'sd46', nama: 'Bacaan Pemahaman', judul: 'Memahami Bacaan', instruksi: 'Bacalah teks dengan cermat, lalu jawab pertanyaannya.', topik: 'umum',
      spec: { min: 5, max: 7, bacaan: true, tipe: ['pg', 'uraian'] }, tugas: 'sebuah teks bacaan 2-3 paragraf lalu 7 soal: 5 pg (ide pokok, informasi rinci, makna kata, kesimpulan) dan 2 uraian' },
    { id: 'ai-cerita-lanjut', grup: 'mtk-lanjut', jenjang: 'sd46', nama: 'Soal Cerita Lanjut', judul: 'Soal Cerita Matematika', instruksi: 'Kerjakan dengan langkah yang benar.', topik: 'mtk',
      spec: { min: 5, max: 8, tipe: ['pg', 'isian'] }, tugas: '8 soal cerita matematika tentang topik tersebut dalam konteks kehidupan sehari-hari; campuran pg dan isian; jawaban harus dihitung dengan benar' },
    { id: 'ai-ipas', grup: 'ipas', jenjang: 'sd46', nama: 'IPAS', judul: 'Lembar Kerja IPAS', instruksi: 'Jawablah pertanyaan berikut dengan tepat.', topik: 'ipas',
      spec: { min: 6, max: 10, tipe: ['pg', 'bs', 'uraian'] }, tugas: '10 soal IPAS Kurikulum Merdeka: 6 pg, 3 bs, dan 1 uraian' },
    { id: 'ai-pancasila', grup: 'pancasila', jenjang: 'sd46', nama: 'Pendidikan Pancasila', judul: 'Pendidikan Pancasila', instruksi: 'Jawablah pertanyaan berikut dengan tepat.', topik: 'pancasila',
      spec: { min: 6, max: 10, tipe: ['pg', 'bs', 'uraian'] }, tugas: '10 soal Pendidikan Pancasila: 6 pg, 3 bs, dan 1 uraian' },
    { id: 'ai-english', grup: 'english', jenjang: 'lintas', nama: 'English Reading', judul: 'English Worksheet', instruksi: 'Read the text and answer the questions.', topik: 'english',
      spec: { min: 4, max: 7, bacaan: true, tipe: ['pg', 'isian'] }, tugas: 'a short English reading text (4-6 simple sentences) and 7 questions (5 pg and 2 isian); semua teks bacaan, soal, pilihan, dan jawaban ditulis dalam bahasa Inggris sederhana' },
    { id: 'ai-ulangan', grup: 'kuis', jenjang: 'lintas', nama: 'Ulangan Custom', judul: 'Ulangan Harian', instruksi: 'Kerjakan soal-soal berikut dengan teliti.', topik: 'umum',
      spec: { min: 8, max: 12, tipe: ['pg', 'bs', 'isian', 'uraian'] }, tugas: '12 soal ulangan tentang materi tersebut: 6 pg, 2 bs, 2 isian, dan 2 uraian' }
  ];

  function topik(tema, list, rnd) {
    if (!tema || tema === 'acak') return R.pick(rnd, list);
    if (TEMA_ID[tema]) return TEMA_ID[tema];
    if (String(tema).startsWith('ai:')) {
      const th = WS.aiThemes.get(String(tema).slice(3));
      return th ? th.topik : R.pick(rnd, list);
    }
    return WS.aiPrompt.cleanTopic(tema) || R.pick(rnd, list);
  }

  JENIS.forEach(j => WS.registry.define({
    id: j.id, grup: j.grup, jenjang: j.jenjang, nama: j.nama, judul: j.judul, instruksi: j.instruksi,
    layout: 'soal-ai', hasAnswers: !j.noKunci, ai: true, defaults: { tema: 'acak' }, opsi: [],
    generatePage(params, rnd) {
      const kelas = KELAS[j.jenjang][params.kesulitan] || KELAS[j.jenjang].mudah;
      const t = topik(params.tema, TOPIK[j.topik], rnd);
      const prompt = [
        'Kamu guru SD di Indonesia yang membuat lembar kerja siswa.',
        'Buat ' + j.tugas + ' untuk siswa ' + kelas + ' dengan topik "' + t + '".',
        WS.aiSoal.FORMAT
      ].join('\n');
      return { items: [{ mode: 'teks', prompt, spec: j.spec, konteks: 'siswa ' + kelas + ', topik ' + t, gaya: params.gaya, tema: t, data: null, image: null, kunci: [], masalah: [], status: 'baru' }] };
    }
  }));

  WS.aiCatalogSd = { KELAS, TOPIK, ids: () => JENIS.map(j => j.id) };
})(globalThis.WS);

/* ai/pool.js */
(function (WS) {
  'use strict';

  const JENJANG = ['paud', 'sd13', 'sd46', 'semua'];

  function pool(grup, jenjang) {
    return WS.registry.all()
      .filter(r => r.ai && (grup ? r.grup === grup : (!jenjang || jenjang === 'semua' || r.jenjang === jenjang)))
      .map(r => r.id);
  }

  function prune(docs, max) {
    return docs.slice().sort((a, b) => b.created - a.created).slice(0, max);
  }

  function usable(doc) {
    try {
      WS.page.render(doc, 0);
      return true;
    } catch (e) {
      return false;
    }
  }

  WS.aiPool = { JENJANG, pool, prune, usable };
})(globalThis.WS);

/* ui/i18n.js */
(function (WS) {
  'use strict';

  WS.T = {
    id: {
      'app.title': 'Worksheet Studio',
      'aria.buka': 'Buka/tutup menu',
      'aria.tutup': 'Tutup menu',
      'step.jenis': 'Jenis worksheet',
      'step.opsi': 'Atur isi',
      'step.level': 'Kesulitan & jumlah',
      'step.gaya': 'Gaya & kertas',
      'opt.kesulitan': 'Kesulitan',
      'opt.halaman': 'Jumlah halaman',
      'opt.gaya': 'Gaya',
      'opt.kertas': 'Kertas',
      'opt.orientasi': 'Orientasi',
      'opt.kunci': 'Sertakan kunci jawaban',
      'opt.ya': 'Ya',
      'opt.tidak': 'Tidak',
      'or.potret': 'Potret',
      'or.lanskap': 'Lanskap',
      'lvl.mudah': 'Mudah',
      'lvl.sedang': 'Sedang',
      'lvl.sulit': 'Sulit',
      'btn.buat': 'Buat Worksheet',
      'btn.acak': 'Acak Ulang',
      'btn.pdf': 'Unduh PDF',
      'btn.bundle': '+ Bundle',
      'btn.ok': 'OK',
      'btn.batal': 'Batal',
      'btn.hapus': 'Hapus',
      'btn.buka': 'Buka PDF',
      'bundle.title': 'Bundle',
      'bundle.unduh': 'Unduh Bundle PDF',
      'bundle.kosong': 'Belum ada worksheet di bundle.',
      'thumb.kunci': 'Kunci',
      'msg.pdfGagal': 'PDF gagal dibuat. Coba lagi ya.',
      'msg.pdfProses': 'Menyiapkan PDF…',
      'msg.ditambah': 'Ditambahkan ke bundle.',
      'msg.fontCadangan': 'Sebagian font gagal dimuat, PDF memakai font cadangan.',
      'ai.chip': '+ Tema AI',
      'ai.judul': 'Buat Tema Gambar dengan AI',
      'ai.topik': 'Topik tema',
      'ai.contoh': 'contoh: dinosaurus, luar angkasa, buah tropis',
      'ai.gaya': 'Gaya gambar',
      'ai.warna': 'Berwarna',
      'ai.garis': 'Garis (hitam-putih)',
      'ai.buat': 'Buat Tema',
      'ai.proses': 'AI sedang menggambar 8 stiker…',
      'ai.berhasil': 'Tema siap dipakai!',
      'ai.gagal': 'Gagal membuat tema. Coba lagi, atau akun Google ini sudah mencapai batas.',
      'ai.topikKosong': 'Tulis topik temanya dulu ya.',
      'ai.hapus': 'Hapus',
      'ai.konfirmHapus': 'Hapus tema ini? Worksheet lama yang memakainya akan menampilkan gambar kosong.',
      'ai.tutup': 'Tutup',
      'ai.garisProses': 'Membuat versi garis hitam-putih…',
      'mode.ai': 'Worksheet AI',
      'mode.presisi': 'Presisi',
      'aim.judul': 'Worksheet AI',
      'aim.sub': 'Satu klik, langsung dapat worksheet yang berbeda-beda.',
      'aim.acak': 'Acak Sekali Klik',
      'aim.custom': 'Mode Custom',
      'aim.kategori': 'Kategori',
      'aim.jenis': 'Jenis aktivitas',
      'aim.tema': 'Tema',
      'aim.temaBebas': 'atau ketik tema sendiri, mis. kapal laut',
      'aim.gaya': 'Gaya',
      'aim.jumlah': 'Jumlah lembar',
      'aim.semuaJenjang': 'Semua jenjang',
      'aim.semuaTab': 'Semua',
      'aim.dari': 'Diacak dari',
      'aim.langkahJenjang': 'Pilih jenjang',
      'aim.langkahJenis': 'Pilih aktivitas',
      'aim.jenisHint': 'Dikelompokkan per kategori.',
      'aim.temaHint': 'Untuk SD, tema dipakai sebagai topik soal.',
      'aim.langkahAtur': 'Atur hasil',
      'aim.lanjut': 'Pengaturan lanjutan',
      'aim.kelas': 'Kelas',
      'aim.hapusFilter': 'Lihat semua',
      'aim.cek': 'Cek kualitas & kunci jawaban',
      'aim.buat': 'Buat',
      'aim.lembar': 'lembar',
      'aim.campur': 'aktivitas campur',
      'aim.batal': 'Batal',
      'aim.pdf': 'Unduh PDF',
      'aim.bundle': '+ Bundle',
      'aim.ulang': 'Buat ulang',
      'aim.hapus': 'Hapus',
      'aim.pilih': 'Pilih',
      'aim.dipilih': 'Dipilih',
      'aim.kosong': 'Belum ada worksheet. Tekan "Acak Sekali Klik" untuk mulai.',
      'aim.proses': 'AI sedang bekerja…',
      'aim.selesai': 'Selesai.',
      'aim.kuota': 'Semua halaman gagal. Coba lagi nanti, atau akun Google ini sudah mencapai batas.',
      'aim.koneksi': 'Gambar gagal dimuat. Periksa koneksi internet, lalu tekan Buat lagi.',
      'aim.perluCek': 'Perlu dicek',
      'aim.gagal': 'Gagal',
      'aim.tidakAda': 'Belum ada worksheet yang siap diunduh.',
      'aim.ditambah': 'Ditambahkan ke bundle.',
      'aim.tunggu': 'Tunggu proses AI selesai dulu ya.',
      'view.lihat': 'Lihat besar',
      'view.tutup': 'Tutup',
      'view.sebelum': 'Halaman sebelumnya',
      'view.berikut': 'Halaman berikutnya',
      'view.perbesar': 'Perbesar',
      'view.perkecil': 'Perkecil',
      'view.pas': 'Pas layar',
      'view.hal': 'Halaman',
      'view.kunci': 'Kunci jawaban',
      'msg.iosBuka': 'Ketuk "Buka PDF", lalu pilih Bagikan → Simpan ke File.',
      'login.judul': 'Masuk ke Worksheet Kids Studio',
      'login.sub': 'Buat worksheet anak PAUD sampai SD yang rapi dan siap cetak.',
      'login.email': 'Email pembelian',
      'login.masuk': 'Masuk',
      'login.proses': 'Memeriksa...',
      'login.catatan': 'Pakai email yang sama dengan saat membeli di Lynk.id. Satu akun bisa dipakai di 2 perangkat.',
      'login.memeriksa': 'Memeriksa akses...',
      'login.formatEmail': 'Format email belum benar.',
      'login.gagalJaringan': 'Tidak bisa terhubung. Periksa internet lalu coba lagi.',
      'login.sesiHabis': 'Sesi berakhir karena akun ini masuk di perangkat lain (maksimal 2). Silakan masuk lagi.',
      'login.keluar': 'Keluar',
      'login.halo': 'Halo',
      'profil.menu': 'Profil Sekolah',
      'profil.judul': 'Profil Sekolah / Lembaga',
      'profil.sub': 'Diisi sekali, otomatis tercetak di kop semua worksheet.',
      'profil.nama': 'Nama sekolah / lembaga / guru',
      'profil.namaContoh': 'Contoh: TK Ceria Bandung',
      'profil.logo': 'Logo (opsional)',
      'profil.pilihLogo': 'Pilih logo',
      'profil.hapusLogo': 'Hapus logo',
      'profil.tanpaLogo': 'Belum ada logo',
      'profil.catatan': 'Disimpan hanya di perangkat ini, tidak dikirim ke server.',
      'profil.batal': 'Batal',
      'profil.simpan': 'Simpan',
      'profil.tersimpan': 'Profil tersimpan',
      'profil.gagalSimpan': 'Profil gagal disimpan. Coba logo yang lebih kecil.',
      'profil.logoGagal': 'Logo tidak bisa dibaca. Pakai file PNG atau JPG.',
      'aim.memeriksa': 'AI sedang memeriksa hasilnya…',
      'aim.temuan': 'Catatan pemeriksa AI:',
      'aim.temuanSaran': 'Cek sendiri lewat tombol mata. Kalau memang salah, tekan Buat ulang.',
      'edit.btn': 'Edit',
      'edit.judul': 'Edit soal',
      'edit.sub': 'Perbaiki teks soal atau kunci jawaban. Worksheet dan kunci jawaban diperbarui otomatis.',
      'edit.bacaan': 'Bacaan',
      'edit.soal': 'Soal',
      'edit.jawabanBenar': 'Jawaban benar',
      'edit.kunci': 'Kunci jawaban',
      'edit.batal': 'Batal',
      'edit.simpan': 'Simpan perubahan',
      'edit.tersimpan': 'Soal diperbarui',
      'edit.tipe.pg': 'Pilihan ganda',
      'edit.tipe.isian': 'Isian',
      'edit.tipe.bs': 'Benar / Salah',
      'edit.tipe.uraian': 'Uraian'
    }
  };

  WS.t = function (key) {
    const d = WS.T.id;
    return d[key] != null ? d[key] : key;
  };
})(globalThis.WS);

/* ui/api.js */
(function (WS) {
  'use strict';

  const LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const URL_WORKER = LOCAL ? 'http://127.0.0.1:8790/' : 'https://worksheet-auth.mursalinasrul.workers.dev/';
  const APP_KEY = '076be832d03132e220742b2aacb757022142';

  const mem = new Map();

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) {
      if (value === undefined) return mem.has(key) ? mem.get(key) : null;
      if (value === null) mem.delete(key);
      else mem.set(key, value);
    }
    return value;
  }

  function randomHex(bytes) {
    const a = new Uint8Array(bytes);
    crypto.getRandomValues(a);
    return Array.from(a, b => b.toString(16).padStart(2, '0')).join('');
  }

  async function action(name, params) {
    const res = await fetch(URL_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({ action: name, app_secret: APP_KEY }, params))
    });
    const body = await res.json();
    body.http = res.status;
    return body;
  }

  function post(path, body) {
    return fetch(URL_WORKER + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({ app_secret: APP_KEY }, body)),
      keepalive: true
    });
  }

  WS.api = { LOCAL, action, post, store, randomHex };
})(globalThis.WS);

/* ui/telemetry.js */
(function (WS) {
  'use strict';

  const MAX = 20;
  const queue = [];
  let device = '';

  function deviceId() {
    if (device) return device;
    device = WS.api.store('ws_device') || WS.api.store('ws_device', 'd' + WS.api.randomHex(6)) || 'anon';
    return device;
  }

  function push(kind, name, detail) {
    try {
      if (queue.length >= MAX) queue.shift();
      queue.push({ kind, name: String(name), detail: String(detail == null ? '' : detail), device: deviceId() });
    } catch (e) {
      console.warn('telemetry', e);
    }
  }

  function flush() {
    try {
      if (!queue.length) return;
      WS.api.post('log', { items: queue.splice(0, MAX) }).catch(() => {});
    } catch (e) {
      console.warn('telemetry', e);
    }
  }

  window.addEventListener('error', e => push('error', 'js', (e.message || 'error') + ' @ ' + String(e.filename || '').split('/').pop() + ':' + (e.lineno || 0)));
  window.addEventListener('unhandledrejection', e => push('error', 'promise', (e.reason && e.reason.message) || e.reason || 'rejection'));
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  setInterval(flush, 10000);

  WS.telemetry = {
    error: (name, detail) => push('error', name, detail),
    event: (name, detail) => push('event', name, detail),
    flush
  };
})(globalThis.WS);

/* ui/notify.js */
(function (WS) {
  'use strict';

  function modal(message, buttons, extra) {
    return new Promise(resolve => {
      const wrap = document.createElement('div');
      wrap.className = 'ui-modal';
      const box = document.createElement('div');
      box.className = 'ui-modal-box';
      const p = document.createElement('p');
      p.textContent = message;
      box.appendChild(p);
      const row = document.createElement('div');
      row.className = 'ui-modal-actions';
      const close = value => { wrap.remove(); resolve(value); };
      buttons.forEach(b => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn ' + (b.cls || '');
        btn.textContent = b.label;
        btn.addEventListener('click', () => close(b.value));
        row.appendChild(btn);
      });
      if (extra) {
        extra.addEventListener('click', () => setTimeout(() => close(true), 300));
        row.appendChild(extra);
      }
      box.appendChild(row);
      wrap.appendChild(box);
      wrap.addEventListener('click', e => { if (e.target === wrap) close(buttons[0].value); });
      document.body.appendChild(wrap);
      setTimeout(() => wrap.classList.add('show'), 10);
    });
  }

  WS.uiNotify = function (msg) {
    return modal(msg, [{ label: WS.t('btn.ok'), value: undefined, cls: 'btn-primary' }]);
  };

  WS.uiConfirm = function (msg, yesLabel) {
    return modal(msg, [{ label: WS.t('btn.batal'), value: false }, { label: yesLabel || WS.t('btn.ok'), value: true, cls: 'btn-danger' }]);
  };

  WS.uiLink = function (msg, href, label) {
    const a = document.createElement('a');
    a.className = 'btn btn-primary';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = label;
    return modal(msg, [{ label: WS.t('btn.batal'), value: false }], a);
  };

  WS.toast = function (msg) {
    const el = document.createElement('div');
    el.className = 'ui-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  };
})(globalThis.WS);

/* ui/download.js */
(function (WS) {
  'use strict';

  function isIOS() {
    const ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/.test(ua)) return true;
    return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  }

  async function iosShare(blob, filename) {
    let file = null;
    try {
      file = new File([blob], filename, { type: blob.type || 'application/pdf' });
    } catch (e) {
      file = null;
    }
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: filename });
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }
    const url = URL.createObjectURL(blob);
    await WS.uiLink(WS.t('msg.iosBuka'), url, WS.t('btn.buka'));
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }

  async function download(blob, filename) {
    if (isIOS()) return iosShare(blob, filename);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  WS.isIOS = isIOS;
  WS.download = download;
})(globalThis.WS);

/* ui/profil.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const KEY = 'ws_profil';
  const MAX_PX = 300;
  const listeners = [];

  function load() {
    try {
      const p = JSON.parse(localStorage.getItem(KEY) || '{}');
      return { nama: typeof p.nama === 'string' ? p.nama : '', logo: typeof p.logo === 'string' && p.logo.startsWith('data:image/') ? p.logo : '' };
    } catch (e) {
      return { nama: '', logo: '' };
    }
  }

  function apply(p) {
    WS.page.profil = { nama: p.nama, logo: p.logo };
  }

  function save(p) {
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch (e) {
      WS.uiNotify(t('profil.gagalSimpan'));
      return false;
    }
    apply(p);
    listeners.forEach(fn => fn());
    return true;
  }

  function shrink(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, MAX_PX / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.width * k));
        c.height = Math.max(1, Math.round(img.height * k));
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        resolve(c.toDataURL('image/png'));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('gambar tidak terbaca'));
      };
      img.src = url;
    });
  }

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function btn(cls, text) {
    const b = el('button', 'btn ' + cls, text);
    b.type = 'button';
    return b;
  }

  function open() {
    const cur = load();
    let logo = cur.logo;
    const wrap = el('div', 'ui-modal');
    const box = el('div', 'ui-modal-box ai-box');
    box.appendChild(el('h3', 'ai-title', t('profil.judul')));
    box.appendChild(el('p', 'opt-label', t('profil.sub')));
    const lbl = el('label', 'opt-label', t('profil.nama'));
    const nama = el('input', 'ai-input');
    nama.type = 'text';
    nama.maxLength = 60;
    nama.value = cur.nama;
    nama.placeholder = t('profil.namaContoh');
    lbl.appendChild(nama);
    box.appendChild(lbl);
    box.appendChild(el('p', 'opt-label', t('profil.logo')));
    const row = el('div', 'profil-logo-row');
    const prev = el('div', 'profil-logo');
    const file = el('input');
    file.type = 'file';
    file.accept = 'image/png,image/jpeg,image/webp';
    file.hidden = true;
    const pick = btn('', t('profil.pilihLogo'));
    const del = btn('', t('profil.hapusLogo'));
    function showLogo() {
      prev.textContent = '';
      if (logo) {
        const im = el('img');
        im.src = logo;
        im.alt = '';
        prev.appendChild(im);
      } else prev.appendChild(el('span', null, t('profil.tanpaLogo')));
      del.hidden = !logo;
    }
    pick.addEventListener('click', () => file.click());
    del.addEventListener('click', () => { logo = ''; showLogo(); });
    file.addEventListener('change', () => {
      const f = file.files && file.files[0];
      if (!f) return;
      shrink(f).then(d => { logo = d; showLogo(); }).catch(() => WS.uiNotify(t('profil.logoGagal')));
    });
    row.appendChild(prev);
    row.appendChild(pick);
    row.appendChild(del);
    row.appendChild(file);
    box.appendChild(row);
    box.appendChild(el('p', 'opt-label', t('profil.catatan')));
    const actions = el('div', 'ui-modal-actions');
    const batal = btn('', t('profil.batal'));
    const simpan = btn('btn-primary', t('profil.simpan'));
    batal.addEventListener('click', () => wrap.remove());
    simpan.addEventListener('click', () => {
      if (save({ nama: nama.value.trim().slice(0, 60), logo })) {
        wrap.remove();
        WS.toast(t('profil.tersimpan'));
      }
    });
    actions.appendChild(batal);
    actions.appendChild(simpan);
    box.appendChild(actions);
    wrap.appendChild(box);
    wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove(); });
    document.body.appendChild(wrap);
    showLogo();
    setTimeout(() => wrap.classList.add('show'), 10);
  }

  apply(load());

  WS.profil = { get: load, open, onChange: fn => listeners.push(fn) };
})(globalThis.WS);

/* ui/viewer.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const EYE = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  const ZOOM = [1, 1.5, 2, 3];

  function eyeButton(data) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'eye-btn';
    b.innerHTML = EYE;
    b.setAttribute('aria-label', t('view.lihat'));
    b.title = t('view.lihat');
    Object.keys(data || {}).forEach(k => { b.dataset[k] = data[k]; });
    return b;
  }

  function open(pages, start) {
    if (!pages.length) return;
    let idx = Math.max(0, Math.min(start || 0, pages.length - 1));
    let z = 0;
    const wrap = document.createElement('div');
    wrap.className = 'viewer';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    const bar = document.createElement('div');
    bar.className = 'viewer-bar';
    const label = document.createElement('span');
    label.className = 'viewer-label';
    const stage = document.createElement('div');
    stage.className = 'viewer-stage';
    const page = document.createElement('div');
    page.className = 'viewer-page';
    stage.appendChild(page);

    function btn(txt, aria, fn) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'viewer-btn';
      b.textContent = txt;
      b.setAttribute('aria-label', aria);
      b.title = aria;
      b.addEventListener('click', fn);
      return b;
    }

    function size() {
      const m = pages[idx].svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
      const pw = m ? +m[1] : 210, ph = m ? +m[2] : 297;
      const bw = stage.clientWidth - 24, bh = stage.clientHeight - 24;
      return Math.max(120, Math.min(bw, bh * pw / ph)) * ZOOM[z];
    }

    const prev = btn('‹', t('view.sebelum'), () => go(-1));
    const next = btn('›', t('view.berikut'), () => go(1));
    const minus = btn('−', t('view.perkecil'), () => zoom(-1));
    const fitB = btn(t('view.pas'), t('view.pas'), () => { z = 0; zoom(0); });
    const plus = btn('+', t('view.perbesar'), () => zoom(1));
    const close = btn('×', t('view.tutup'), done);
    [label, prev, next, minus, fitB, plus, close].forEach(n => bar.appendChild(n));
    wrap.appendChild(bar);
    wrap.appendChild(stage);

    function zoom(d) {
      z = Math.max(0, Math.min(ZOOM.length - 1, z + d));
      page.style.width = size() + 'px';
      minus.disabled = z === 0;
      plus.disabled = z === ZOOM.length - 1;
    }

    function draw() {
      page.innerHTML = pages[idx].svg;
      label.textContent = pages[idx].label + '  (' + (idx + 1) + '/' + pages.length + ')';
      prev.disabled = idx === 0;
      next.disabled = idx === pages.length - 1;
      zoom(0);
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
    }

    function go(d) {
      const n = idx + d;
      if (n < 0 || n >= pages.length) return;
      idx = n;
      draw();
    }

    function onKey(e) {
      if (e.key === 'Escape') done();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === '+' || e.key === '=') zoom(1);
      else if (e.key === '-') zoom(-1);
    }

    function onResize() {
      zoom(0);
    }

    function done() {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      wrap.remove();
    }

    stage.addEventListener('click', e => { if (e.target === stage) done(); });
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.appendChild(wrap);
    draw();
    close.focus();
  }

  WS.viewer = { EYE, eyeButton, open };
})(globalThis.WS);

/* ai/gemini.js */
(function (WS) {
  'use strict';

  const apiKey = "";
  const BASE = 'https://generativelanguage.googleapis.com/v1beta/models/';
  const TEXT_MODEL = 'gemini-2.0-flash';
  const IMAGE_MODEL = 'gemini-2.5-flash-image-preview';
  const MOCK_ITEMS = [['Apel', 'red apple'], ['Bola', 'soccer ball'], ['Cabai', 'red chili'], ['Domba', 'sheep'], ['Es Krim', 'ice cream cone'], ['Flamingo', 'flamingo'], ['Gajah', 'elephant'], ['Harimau', 'tiger']];

  function mock() {
    return /[?&]mockai=1\b/.test(location.search);
  }

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function post(model, body, signal) {
    const key = apiKey || globalThis.__wsApiKey || '';
    const res = await fetch(BASE + model + ':generateContent?key=' + key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal
    });
    try {
      return await res.json();
    } catch (e) {
      throw new Error('Respons bukan JSON [' + res.status + ']');
    }
  }

  function alasan(result) {
    const err = result && result.error;
    if (err) return '[' + [err.code, err.status].filter(Boolean).join(' ') + '] ' + (err.message || '');
    const block = result?.promptFeedback?.blockReason;
    if (block) return '[blok ' + block + ']';
    const c = result?.candidates?.[0];
    const teks = (c?.content?.parts || []).map(p => p.text || '').join(' ').trim();
    return c?.finishReason ? '[' + c.finishReason + ']' + (teks ? ' ' + teks : '') : teks;
  }

  function gagal(dasar, result) {
    const a = alasan(result);
    return new Error((a ? dasar + ' ' + a : dasar).replace(/AIza[\w-]+'?/g, 'AIza…').slice(0, 120));
  }

  function mockSoal() {
    const soal = [];
    for (let i = 1; i <= 8; i++) {
      soal.push({ tipe: 'pg', tanya: 'Soal pilihan ganda tiruan nomor ' + i + ' tentang topik ini?', pilihan: ['Jawaban A' + i, 'Jawaban B' + i, 'Jawaban C' + i, 'Jawaban D' + i], jawaban: 'Jawaban B' + i });
      soal.push({ tipe: 'isian', tanya: 'Lengkapi kalimat tiruan nomor ' + i + ' ini dengan ........ yang tepat.', jawaban: 'kata' + i });
      soal.push({ tipe: 'bs', tanya: 'Pernyataan tiruan nomor ' + i + ' ini benar.', jawaban: i % 2 ? 'Benar' : 'Salah' });
      soal.push({ tipe: 'uraian', tanya: 'Jelaskan secara singkat contoh tiruan nomor ' + i + '.', jawaban: 'Jawaban uraian tiruan ' + i });
    }
    return JSON.stringify({ bacaan: 'Ini adalah bacaan tiruan untuk menguji tampilan lembar kerja. Kalimatnya dibuat cukup panjang supaya pemenggalan baris terlihat jelas di halaman. Budi pergi ke sekolah bersama teman-temannya setiap pagi.', soal, ilustrasi: 'a happy child reading a book' });
  }

  async function text(prompt, opts) {
    const o = opts || {};
    if (mock()) {
      await wait(300);
      if (prompt.includes('\nDATA:\n')) return JSON.stringify(Object.assign({ ok: true }, JSON.parse(prompt.split('\nDATA:\n')[1])));
      if (prompt.includes('"soal"')) return mockSoal();
      return JSON.stringify({ items: MOCK_ITEMS.map(([nama, en]) => ({ nama, en })) });
    }
    const result = await post(TEXT_MODEL, {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json', temperature: 0.9 }
    }, o.signal);
    const parts = result?.candidates?.[0]?.content?.parts || [];
    const out = parts.map(p => p.text || '').join('');
    if (!out) throw gagal('Respons teks kosong', result);
    return out;
  }

  function mockImage(prompt) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 512;
    const g = c.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, 512, 512);
    let hue = 0;
    for (const ch of prompt) hue = (hue * 31 + ch.charCodeAt(0)) % 360;
    g.lineWidth = 14;
    g.strokeStyle = '#1f2937';
    g.fillStyle = /line art/.test(prompt) ? '#ffffff' : 'hsl(' + hue + ',75%,60%)';
    g.beginPath();
    g.arc(256, 256, 170, 0, Math.PI * 2);
    g.fill();
    g.stroke();
    g.fillStyle = '#1f2937';
    g.beginPath();
    g.arc(200, 220, 22, 0, Math.PI * 2);
    g.arc(312, 220, 22, 0, Math.PI * 2);
    g.fill();
    return c.toDataURL('image/png');
  }

  function mockWorksheet(prompt, aspect) {
    const land = aspect === '4:3';
    const c = document.createElement('canvas');
    c.width = land ? 1024 : 768;
    c.height = land ? 768 : 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, c.width, c.height);
    let hue = 0;
    for (const ch of prompt) hue = (hue * 31 + ch.charCodeAt(0)) % 360;
    const line = /Black and white/.test(prompt);
    const rows = 5, pad = 30, rh = (c.height - pad * 2) / rows;
    g.lineWidth = 6;
    g.strokeStyle = '#1f2937';
    for (let r = 0; r < rows; r++) {
      const y = pad + r * rh;
      g.strokeRect(pad, y + 8, c.width - pad * 2, rh - 16);
      const n = 1 + ((hue + r * 7) % 5);
      for (let k = 0; k < n; k++) {
        g.fillStyle = line ? '#ffffff' : 'hsl(' + ((hue + r * 50) % 360) + ',75%,60%)';
        g.beginPath();
        g.arc(pad + 70 + k * 95, y + rh / 2, rh * 0.28, 0, Math.PI * 2);
        g.fill();
        g.stroke();
      }
    }
    return c.toDataURL('image/png');
  }

  async function image(prompt, opts) {
    const o = opts || {};
    const aspect = o.aspect || '1:1';
    if (mock()) {
      await wait(400 + Math.random() * 600);
      return /Printable worksheet/.test(prompt) ? mockWorksheet(prompt, aspect) : mockImage(prompt);
    }
    const result = await post(IMAGE_MODEL, {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: aspect } }
    }, o.signal);
    const part = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    if (!part) throw gagal('Gambar tidak diterima', result);
    return 'data:' + (part.inlineData.mimeType || 'image/png') + ';base64,' + part.inlineData.data;
  }

  async function vision(prompt, dataUrl, opts) {
    const o = opts || {};
    if (mock()) {
      await wait(300);
      return JSON.stringify({ ok: true, masalah: [], kunci: ['1. (kunci tiruan)'] });
    }
    const m = /^data:([^;]+);base64,(.*)$/.exec(dataUrl);
    const result = await post(TEXT_MODEL, {
      contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType: m[1], data: m[2] } }] }],
      generationConfig: { responseMimeType: 'application/json', temperature: 0.2 }
    }, o.signal);
    const out = (result?.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('');
    if (!out) throw gagal('Respons cek kosong', result);
    return out;
  }

  WS.gemini = { text, image, vision, mock };
})(globalThis.WS);

/* ai/store.js */
(function (WS) {
  'use strict';

  const DB = 'worksheet-studio';
  const THEMES = 'aiThemes';
  const DOCS = 'aiDocs';
  let dbp = null;

  function open() {
    if (!dbp) {
      dbp = new Promise((resolve, reject) => {
        const req = indexedDB.open(DB, 2);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(THEMES)) db.createObjectStore(THEMES, { keyPath: 'id' });
          if (!db.objectStoreNames.contains(DOCS)) db.createObjectStore(DOCS, { keyPath: 'id' });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    return dbp;
  }

  function tx(store, mode, fn) {
    return open().then(db => new Promise((resolve, reject) => {
      const t = db.transaction(store, mode);
      const req = fn(t.objectStore(store));
      t.oncomplete = () => resolve(req ? req.result : undefined);
      t.onerror = () => reject(t.error);
    }));
  }

  function bucket(store, label) {
    return {
      getAll() {
        return tx(store, 'readonly', s => s.getAll()).catch(() => []);
      },
      put(item) {
        return tx(store, 'readwrite', s => s.put(item)).catch(e => console.warn(label + ' gagal disimpan', e));
      },
      del(id) {
        return tx(store, 'readwrite', s => s.delete(id)).catch(() => undefined);
      }
    };
  }

  const themes = bucket(THEMES, 'Tema');
  WS.store = Object.assign({}, themes, { docs: bucket(DOCS, 'Worksheet') });
})(globalThis.WS);

/* ai/stickers.js */
(function (WS) {
  'use strict';

  const N = 8;
  const MIN_OK = 4;

  function userError(msg) {
    const e = new Error(msg);
    e.userMessage = msg;
    return e;
  }

  async function withRetry(fn, tries) {
    let err;
    for (let i = 0; i < tries; i++) {
      try {
        return await fn();
      } catch (e) {
        err = e;
      }
    }
    throw err;
  }

  function toTransparent(dataUrl, size) {
    const s = size || 512;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = s;
        c.height = s;
        const g = c.getContext('2d');
        g.fillStyle = '#ffffff';
        g.fillRect(0, 0, s, s);
        const k = Math.min(s / img.width, s / img.height);
        const w = img.width * k, h = img.height * k;
        g.drawImage(img, (s - w) / 2, (s - h) / 2, w, h);
        const d = g.getImageData(0, 0, s, s);
        WS.alpha.floodMask(d.data, s, s, 238);
        g.putImageData(d, 0, 0);
        resolve(c.toDataURL('image/png'));
      };
      img.onerror = () => reject(new Error('Gambar rusak'));
      img.src = dataUrl;
    });
  }

  async function makeImage(item, gaya) {
    const raw = await withRetry(() => WS.gemini.image(WS.aiPrompt.sticker(item, gaya)), 3);
    return toTransparent(raw, 512);
  }

  async function createTheme(topik, gaya, onProgress) {
    const clean = WS.aiPrompt.cleanTopic(topik);
    if (!clean) throw userError(WS.t('ai.topikKosong'));
    let items;
    try {
      items = WS.aiPrompt.parseTheme(await withRetry(() => WS.gemini.text(WS.aiPrompt.theme(clean, N)), 2), N);
    } catch (e) {
      console.error(e);
      throw userError(WS.t('ai.gagal'));
    }
    const variant = gaya === 'garis' ? 'black' : 'color';
    const images = { color: {}, black: {} };
    if (onProgress) onProgress({ items });
    await Promise.allSettled(items.map(async it => {
      const url = await makeImage(it, gaya);
      images[variant][it.slug] = url;
      if (onProgress) onProgress({ items, slug: it.slug, url });
    }));
    const ok = items.filter(it => images[variant][it.slug]);
    if (ok.length < MIN_OK) throw userError(WS.t('ai.gagal'));
    const theme = { id: WS.aiPrompt.slug(clean) + '-' + Date.now().toString(36), topik: clean, gaya, created: Date.now(), items: ok, images };
    WS.aiThemes.add(theme);
    await WS.store.put(theme);
    return theme;
  }

  async function ensure(names, variant) {
    if (variant !== 'black') return;
    const todo = {};
    names.forEach(nm => {
      const p = WS.aiThemes.parse(nm);
      const th = p && WS.aiThemes.get(p.themeId);
      if (!th || th.gaya === 'garis' || th.images.black[p.slug]) return;
      (todo[th.id] = todo[th.id] || new Set()).add(p.slug);
    });
    const ids = Object.keys(todo);
    if (!ids.length) return;
    WS.toast(WS.t('ai.garisProses'));
    for (const id of ids) {
      const th = WS.aiThemes.get(id);
      await Promise.allSettled(Array.from(todo[id]).map(async slug => {
        th.images.black[slug] = await makeImage(th.items.find(x => x.slug === slug), 'garis');
      }));
      await WS.store.put(th);
    }
  }

  WS.stickers = { createTheme, ensure, toTransparent };
})(globalThis.WS);

/* ai/pages.js */
(function (WS) {
  'use strict';

  const LIMIT = 3;

  function abortError() {
    const e = new Error('Dibatalkan');
    e.name = 'AbortError';
    return e;
  }

  async function retry(fn, tries, signal) {
    let err;
    for (let i = 0; i < tries; i++) {
      if (signal.aborted) throw abortError();
      try {
        return await fn();
      } catch (e) {
        if (signal.aborted || e.name === 'AbortError') throw abortError();
        err = e;
      }
    }
    throw err;
  }

  function toJpeg(dataUrl, maxSide, q) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, maxSide / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * k);
        c.height = Math.round(img.height * k);
        const g = c.getContext('2d');
        g.fillStyle = '#ffffff';
        g.fillRect(0, 0, c.width, c.height);
        g.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', q));
      };
      img.onerror = () => reject(new Error('Gambar rusak'));
      img.src = dataUrl;
    });
  }

  async function fill(doc, opts) {
    const it = doc.pages[0].items[0];
    it.status = 'gambar';
    it.masalah = [];
    opts.onUpdate(doc);
    const raw = await retry(() => WS.gemini.image(it.prompt, { aspect: it.aspect, signal: opts.signal }), 2, opts.signal);
    it.image = await toJpeg(raw, 1600, 0.9);
    it.kunci = it.expect.slice();
    if (!opts.cek) {
      it.status = 'ok';
      return;
    }
    it.status = 'cek';
    opts.onUpdate(doc);
    let res;
    try {
      res = WS.aiCheck.parse(await WS.gemini.vision(WS.aiCheck.prompt(it), it.image, { signal: opts.signal }));
    } catch (e) {
      if (opts.signal.aborted) throw abortError();
      it.status = 'perlu-cek';
      it.masalah = ['Pemeriksaan otomatis gagal'];
      return;
    }
    if (!it.expect.length) it.kunci = res.kunci;
    it.masalah = res.ok ? [] : (res.masalah.length ? res.masalah : ['AI menilai hasilnya kurang sesuai']);
    it.status = res.ok ? 'ok' : 'perlu-cek';
  }

  async function fillTeks(doc, opts) {
    const it = doc.pages[0].items[0];
    it.status = 'tulis';
    it.masalah = [];
    it.data = null;
    it.image = null;
    opts.onUpdate(doc);
    let data = null;
    let err = null;
    for (let i = 0; i < 3 && !data; i++) {
      if (opts.signal.aborted) throw abortError();
      try {
        data = WS.aiSoal.parse(await WS.gemini.text(it.prompt, { signal: opts.signal }), it.spec);
      } catch (e) {
        if (opts.signal.aborted || e.name === 'AbortError') throw abortError();
        err = e;
      }
    }
    if (!data) throw err;
    let checkFailed = false;
    if (opts.cek) {
      it.status = 'cek';
      opts.onUpdate(doc);
      try {
        const c = WS.aiSoal.parseCek(await WS.gemini.text(WS.aiSoal.cekPrompt(data, it.konteks), { signal: opts.signal }), it.spec);
        data = c.data;
        if (!c.ok) it.masalah = ['Diperbaiki otomatis oleh AI'];
      } catch (e) {
        if (opts.signal.aborted) throw abortError();
        checkFailed = true;
        it.masalah = ['Pemeriksaan otomatis gagal'];
      }
    }
    it.data = data;
    it.kunci = WS.aiSoal.kunci(data.soal);
    if (data.ilustrasi) {
      it.status = 'gambar';
      opts.onUpdate(doc);
      try {
        it.image = await toJpeg(await WS.gemini.image(WS.aiSoal.ilustrasiPrompt(data.ilustrasi, it.gaya), { aspect: '4:3', signal: opts.signal }), 1200, 0.88);
      } catch (e) {
        if (opts.signal.aborted) throw abortError();
        it.image = null;
      }
    }
    it.status = checkFailed ? 'perlu-cek' : 'ok';
  }

  async function run(docs, opts) {
    let next = 0;
    async function worker() {
      while (next < docs.length) {
        const doc = docs[next++];
        let tahap = 'ikon';
        try {
          await WS.page.loadIcons(doc);
          tahap = '';
          const mode = doc.pages[0].items[0].mode;
          if (mode !== 'lokal') await (mode === 'teks' ? fillTeks : fill)(doc, opts);
        } catch (e) {
          const it = doc.pages[0].items[0];
          tahap = tahap || it.status;
          it.status = opts.signal.aborted || (e && e.name === 'AbortError') ? 'batal' : 'gagal';
          if (it.status === 'gagal') {
            it.galat = tahap + ': ' + String((e && e.message) || e).slice(0, 120);
            console.error(e);
          }
        }
        opts.onUpdate(doc);
      }
    }
    await Promise.all(Array.from({ length: Math.min(LIMIT, docs.length) }, worker));
  }

  function pesanAkhir(docs) {
    const items = docs.map(d => d.pages[0].items[0]);
    const gagal = items.filter(it => it.status === 'gagal');
    if (gagal.length < items.length) return 'aim.selesai';
    return gagal.every(it => /^ikon:/.test(it.galat || '')) ? 'aim.koneksi' : 'aim.kuota';
  }

  WS.aiPages = { run, fill, toJpeg, pesanAkhir };
})(globalThis.WS);

/* pdf/export.js */
(function (WS) {
  'use strict';

  const GF = 'https://cdn.jsdelivr.net/gh/google/fonts@main/';
  const FONTS = [
    { family: 'Andika', style: 'normal', file: 'ofl/andika/Andika-Regular.ttf' },
    { family: 'Andika', style: 'bold', file: 'ofl/andika/Andika-Bold.ttf' },
    { family: 'ComicNeue', style: 'normal', file: 'ofl/comicneue/ComicNeue-Bold.ttf' },
    { family: 'ComicNeue', style: 'bold', file: 'ofl/comicneue/ComicNeue-Bold.ttf' },
    { family: 'Poppins', style: 'normal', file: 'ofl/poppins/Poppins-Regular.ttf' },
    { family: 'Poppins', style: 'bold', file: 'ofl/poppins/Poppins-Bold.ttf' },
    { family: 'Tinos', style: 'normal', file: 'ofl/tinos/Tinos-Regular.ttf' },
    { family: 'Tinos', style: 'bold', file: 'ofl/tinos/Tinos-Bold.ttf' }
  ];
  const b64 = {};

  function toBase64(buf) {
    const bytes = new Uint8Array(buf);
    let bin = '';
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }

  async function fontData(file) {
    if (!b64[file]) {
      const res = await fetch(GF + file);
      if (!res.ok) throw new Error('font ' + file);
      b64[file] = toBase64(await res.arrayBuffer());
    }
    return b64[file];
  }

  async function registerFonts(pdf, svgs) {
    const failed = [];
    const used = FONTS.filter(f => svgs.some(s => s.includes('font-family="' + f.family + '"')));
    for (const f of used) {
      try {
        const vfs = f.family + '-' + f.style + '.ttf';
        pdf.addFileToVFS(vfs, await fontData(f.file));
        pdf.addFont(vfs, f.family, f.style);
      } catch (e) {
        failed.push(f.family);
      }
    }
    return failed;
  }

  function sizeOf(svgText) {
    const m = svgText.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    return { w: parseFloat(m[1]), h: parseFloat(m[2]) };
  }

  async function build(svgs) {
    const JsPDF = window.jspdf.jsPDF;
    const first = sizeOf(svgs[0]);
    const pdf = new JsPDF({ unit: 'mm', format: [first.w, first.h], orientation: first.w > first.h ? 'l' : 'p', compress: true });
    const failed = await registerFonts(pdf, svgs);
    if (failed.length) WS.toast(WS.t('msg.fontCadangan'));
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:-10000px;top:0;width:10px;height:10px;overflow:hidden';
    document.body.appendChild(host);
    try {
      for (let i = 0; i < svgs.length; i++) {
        const sz = sizeOf(svgs[i]);
        if (i > 0) pdf.addPage([sz.w, sz.h], sz.w > sz.h ? 'l' : 'p');
        host.innerHTML = svgs[i];
        await window.svg2pdf.svg2pdf(host.firstElementChild, pdf, { x: 0, y: 0, width: sz.w, height: sz.h });
      }
    } finally {
      host.remove();
    }
    return pdf.output('blob');
  }

  WS.pdf = { GF, FONTS, sizeOf, build };
})(globalThis.WS);

/* ui/ai-panel.js */
(function (WS) {
  'use strict';

  const t = WS.t;

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function button(cls, text) {
    const b = el('button', cls, text);
    b.type = 'button';
    return b;
  }

  function open(onChange) {
    const wrap = el('div', 'ui-modal');
    const box = el('div', 'ui-modal-box ai-box');
    box.appendChild(el('h3', 'ai-title', t('ai.judul')));
    const label = el('label', 'opt-label', t('ai.topik'));
    const input = el('input', 'ai-input');
    input.type = 'text';
    input.maxLength = 40;
    input.placeholder = t('ai.contoh');
    label.appendChild(input);
    box.appendChild(label);
    box.appendChild(el('p', 'opt-label', t('ai.gaya')));
    let gaya = 'warna';
    const gayaRow = el('div', 'chips');
    [['warna', t('ai.warna')], ['garis', t('ai.garis')]].forEach(([v, lb]) => {
      const b = button('chip' + (v === gaya ? ' on' : ''), lb);
      b.addEventListener('click', () => {
        gaya = v;
        gayaRow.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
      });
      gayaRow.appendChild(b);
    });
    box.appendChild(gayaRow);
    const go = button('btn btn-primary btn-block', t('ai.buat'));
    const status = el('p', 'ai-status');
    const grid = el('div', 'ai-grid');
    const saved = el('div', 'ai-saved');
    const close = button('btn btn-block', t('ai.tutup'));
    [go, status, grid, saved, close].forEach(n => box.appendChild(n));

    function renderSaved() {
      saved.textContent = '';
      WS.aiThemes.list().forEach(th => {
        const row = el('div', 'ai-saved-row');
        row.appendChild(el('span', null, th.topik + ' (AI)'));
        const del = button('btn btn-danger', t('ai.hapus'));
        del.addEventListener('click', async () => {
          if (!(await WS.uiConfirm(t('ai.konfirmHapus'), t('ai.hapus')))) return;
          WS.aiThemes.remove(th.id);
          await WS.store.del(th.id);
          renderSaved();
          if (onChange) onChange(null);
        });
        row.appendChild(del);
        saved.appendChild(row);
      });
    }

    close.addEventListener('click', () => wrap.remove());
    go.addEventListener('click', async () => {
      go.disabled = true;
      status.textContent = t('ai.proses');
      grid.textContent = '';
      const cells = {};
      try {
        const theme = await WS.stickers.createTheme(input.value, gaya, p => {
          if (!Object.keys(cells).length) {
            p.items.forEach(it => {
              const c = el('div', 'ai-cell');
              c.appendChild(el('span', 'ai-spin'));
              c.appendChild(el('small', null, it.nama));
              grid.appendChild(c);
              cells[it.slug] = c;
            });
          }
          if (p.url && cells[p.slug]) {
            const img = el('img');
            img.src = p.url;
            img.alt = '';
            cells[p.slug].replaceChild(img, cells[p.slug].firstChild);
          }
        });
        status.textContent = t('ai.berhasil');
        renderSaved();
        if (onChange) onChange(theme);
      } catch (e) {
        status.textContent = (e && e.userMessage) || t('ai.gagal');
      } finally {
        go.disabled = false;
      }
    });

    renderSaved();
    wrap.appendChild(box);
    document.body.appendChild(wrap);
    setTimeout(() => wrap.classList.add('show'), 10);
    input.focus();
  }

  WS.aiPanel = { open };
})(globalThis.WS);

/* ui/edit-soal.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const LETTERS = ['a', 'b', 'c', 'd'];

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function field(tag, value, max) {
    const f = el(tag, 'ai-input');
    if (tag === 'input') f.type = 'text';
    f.value = value || '';
    f.maxLength = max;
    return f;
  }

  function select(options, value) {
    const s = el('select', 'ai-input');
    options.forEach(o => {
      const op = el('option', null, o.label);
      op.value = o.v;
      if (o.v === value) op.selected = true;
      s.appendChild(op);
    });
    return s;
  }

  function labeled(text, input) {
    const l = el('label', 'opt-label edit-label', text);
    l.appendChild(input);
    return l;
  }

  function soalBlock(s, i) {
    const box = el('fieldset', 'edit-soal');
    box.appendChild(el('legend', null, t('edit.soal') + ' ' + (i + 1) + ' · ' + t('edit.tipe.' + s.tipe)));
    const tanya = field('textarea', s.tanya, 300);
    tanya.rows = 2;
    box.appendChild(tanya);
    const read = { tanya: () => tanya.value };
    if (s.tipe === 'pg') {
      const ins = s.pilihan.map((p, k) => {
        const f = field('input', p, 80);
        box.appendChild(labeled(LETTERS[k] + '.', f));
        return f;
      });
      const jaw = select(LETTERS.map((L, k) => ({ v: String(k), label: L.toUpperCase() })), String(s.pilihan.indexOf(s.jawaban)));
      box.appendChild(labeled(t('edit.jawabanBenar'), jaw));
      read.pilihan = () => ins.map(f => f.value);
      read.jawaban = () => (ins[Number(jaw.value)] || {}).value || '';
    } else if (s.tipe === 'bs') {
      const jaw = select([{ v: 'Benar', label: 'Benar' }, { v: 'Salah', label: 'Salah' }], s.jawaban);
      box.appendChild(labeled(t('edit.jawabanBenar'), jaw));
      read.jawaban = () => jaw.value;
    } else {
      const jaw = field('input', s.jawaban, 200);
      box.appendChild(labeled(t('edit.kunci'), jaw));
      read.jawaban = () => jaw.value;
    }
    return { box, read };
  }

  function open(doc, onSaved) {
    const it = doc.pages[0].items[0];
    if (!it.data) return;
    const wrap = el('div', 'ui-modal');
    const box = el('div', 'ui-modal-box ai-box edit-box');
    box.appendChild(el('h3', 'ai-title', t('edit.judul')));
    box.appendChild(el('p', 'opt-label', t('edit.sub')));
    let bacaan = null;
    if (it.data.bacaan) {
      bacaan = field('textarea', it.data.bacaan, 1500);
      bacaan.rows = 6;
      box.appendChild(labeled(t('edit.bacaan'), bacaan));
    }
    const blocks = it.data.soal.map((s, i) => soalBlock(s, i));
    blocks.forEach(b => box.appendChild(b.box));
    const msg = el('p', 'login-msg');
    msg.setAttribute('role', 'alert');
    box.appendChild(msg);
    const actions = el('div', 'ui-modal-actions edit-actions');
    const batal = el('button', 'btn', t('edit.batal'));
    batal.type = 'button';
    const simpan = el('button', 'btn btn-primary', t('edit.simpan'));
    simpan.type = 'button';
    batal.addEventListener('click', () => wrap.remove());
    simpan.addEventListener('click', () => {
      const edit = {
        bacaan: bacaan ? bacaan.value : '',
        soal: blocks.map(b => ({ tanya: b.read.tanya(), pilihan: b.read.pilihan ? b.read.pilihan() : undefined, jawaban: b.read.jawaban() }))
      };
      let r;
      try {
        r = WS.aiSoal.applyEdit(it.data, edit);
      } catch (e) {
        msg.textContent = e.message;
        return;
      }
      it.data = r.data;
      it.kunci = r.kunci;
      it.status = 'ok';
      it.masalah = [];
      it.diedit = true;
      wrap.remove();
      onSaved(doc);
    });
    actions.appendChild(batal);
    actions.appendChild(simpan);
    box.appendChild(actions);
    wrap.appendChild(box);
    document.body.appendChild(wrap);
    setTimeout(() => wrap.classList.add('show'), 10);
  }

  WS.editSoal = { open };
})(globalThis.WS);

/* ui/ai-mode.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const TEMA = [['acak', 'Acak'], ['hewan', 'Hewan'], ['buah', 'Buah'], ['kendaraan', 'Kendaraan'], ['alam', 'Alam']];
  const BADGE = { 'perlu-cek': 'aim.perluCek', gagal: 'aim.gagal' };
  const MAX_SIMPAN = 60;
  const FINAL = ['ok', 'perlu-cek'];
  const st = { grup: null, jenjang: savedJenjang(), jenis: null, tema: 'acak', bebas: '', gaya: 'ceria', kesulitan: 'mudah', jumlah: 4, kertas: 'A4', orientasi: 'potret', cek: true, lanjut: false, docs: [], pilih: new Set(), ctrl: null };

  function savedJenjang() {
    try {
      const v = localStorage.getItem('ws_ai_jenjang');
      if (v === 'semua') return null;
      return WS.registry.JENJANG.some(j => j.id === v) ? v : 'paud';
    } catch (e) {
      return 'paud';
    }
  }

  function stamp(doc) {
    doc.id = 'g' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
    doc.created = Date.now();
    return doc;
  }

  function persist(doc) {
    if (FINAL.includes(doc.pages[0].items[0].status)) WS.store.docs.put(doc);
  }
  const bags = {};
  let root = null;

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function button(cls, text, data) {
    const b = el('button', cls, text);
    b.type = 'button';
    Object.keys(data || {}).forEach(k => { b.dataset[k] = data[k]; });
    return b;
  }

  function chipRow(key, choices, current) {
    const row = el('div', 'chips');
    choices.forEach(c => row.appendChild(button('chip' + (c.v === current ? ' on' : ''), c.label, { aikey: key, aival: JSON.stringify(c.v) })));
    return row;
  }

  function field(label, child) {
    const f = el('div', 'aim-field');
    f.appendChild(el('p', 'aim-label', label));
    f.appendChild(child);
    return f;
  }

  function stepCard(nr, title, hint) {
    const sec = el('section', 'aim-step');
    const h = el('h3', 'aim-step-h');
    h.appendChild(el('i', null, String(nr)));
    h.appendChild(document.createTextNode(title));
    sec.appendChild(h);
    if (hint) sec.appendChild(el('p', 'aim-hint', hint));
    return sec;
  }

  function jenjangOf(id) {
    return WS.registry.JENJANG.find(j => j.id === id);
  }

  function jenisList() {
    return WS.registry.all().filter(r => r.ai && (st.grup ? r.grup === st.grup : (!st.jenjang || r.jenjang === st.jenjang)));
  }

  function scopeLabel() {
    if (st.grup) return WS.registry.group(st.grup).label;
    return st.jenjang ? jenjangOf(st.jenjang).label : t('aim.semuaJenjang');
  }

  function params(temaOverride) {
    return { tema: temaOverride || st.bebas.trim() || st.tema, gaya: st.gaya, kesulitan: st.kesulitan, kertas: st.kertas, orientasi: st.orientasi, kunci: true, halaman: 1 };
  }

  function cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function levelField() {
    const r = st.jenis ? WS.registry.get(st.jenis) : null;
    const kelas = r && WS.aiCatalogSd && WS.aiCatalogSd.KELAS[r.jenjang];
    const choices = ['mudah', 'sedang', 'sulit'].map(v => ({ v, label: kelas ? cap(kelas[v]) : t('lvl.' + v) }));
    return field(kelas ? t('aim.kelas') : t('opt.kesulitan'), chipRow('kesulitan', choices, st.kesulitan));
  }

  function jenisBlock(list) {
    const wrap = el('div', 'aim-jenis');
    WS.registry.JENJANG.forEach(j => {
      const groups = WS.registry.GROUPS.filter(g => g.jenjang === j.id)
        .map(g => ({ g, items: list.filter(r => r.grup === g.id) }))
        .filter(x => x.items.length);
      if (!groups.length) return;
      const blk = el('div', 'aim-jblk j-' + j.id);
      if (!st.jenjang && !st.grup) blk.appendChild(el('p', 'aim-jj', j.label));
      groups.forEach(x => {
        blk.appendChild(el('p', 'aim-grp', x.g.label));
        blk.appendChild(chipRow('jenis', x.items.map(r => ({ v: r.id, label: r.nama })), st.jenis));
      });
      wrap.appendChild(blk);
    });
    return wrap;
  }

  function renderControls() {
    const box = root.querySelector('.aim-controls');
    box.textContent = '';
    const hero = el('section', 'aim-hero');
    hero.appendChild(el('h2', null, t('aim.judul')));
    hero.appendChild(el('p', null, t('aim.sub')));
    hero.appendChild(button('btn btn-primary btn-block aim-acak', t('aim.acak'), { ai: 'acak' }));
    hero.appendChild(el('p', 'aim-scope', t('aim.dari') + ': ' + scopeLabel() + ' · ' + t('aim.campur')));
    box.appendChild(hero);

    const s1 = stepCard(1, t('aim.langkahJenjang'));
    const tabs = el('div', 'aim-tabs');
    [{ id: '', label: t('aim.semuaTab') }].concat(WS.registry.JENJANG.filter(j => WS.registry.all().some(r => r.ai && r.jenjang === j.id))).forEach(j => {
      const on = !st.grup && (st.jenjang || '') === j.id;
      tabs.appendChild(button('aim-tab' + (j.id ? ' j-' + j.id : '') + (on ? ' on' : ''), j.label, { aijenjang: j.id }));
    });
    s1.appendChild(tabs);
    if (st.grup) {
      const g = WS.registry.group(st.grup);
      const f = el('div', 'aim-filter j-' + g.jenjang);
      f.appendChild(el('span', null, t('aim.kategori') + ': '));
      f.appendChild(el('strong', null, g.label));
      f.appendChild(button('aim-filter-x', t('aim.hapusFilter'), { aijenjang: g.jenjang }));
      s1.appendChild(f);
    }
    box.appendChild(s1);

    const jenis = jenisList();
    if (!jenis.some(j => j.id === st.jenis)) st.jenis = jenis.length ? jenis[0].id : null;
    const s2 = stepCard(2, t('aim.langkahJenis'), t('aim.jenisHint'));
    s2.appendChild(jenisBlock(jenis));
    box.appendChild(s2);

    const s3 = stepCard(3, t('aim.tema'), t('aim.temaHint'));
    const temaChoices = TEMA.map(([v, label]) => ({ v, label })).concat(WS.aiThemes.list().map(th => ({ v: 'ai:' + th.id, label: th.topik })));
    s3.appendChild(chipRow('tema', temaChoices, st.bebas ? null : st.tema));
    const input = el('input', 'ai-input');
    input.type = 'text';
    input.maxLength = 40;
    input.placeholder = t('aim.temaBebas');
    input.value = st.bebas;
    input.dataset.aiinput = 'bebas';
    s3.appendChild(input);
    box.appendChild(s3);

    const s4 = stepCard(4, t('aim.langkahAtur'));
    s4.appendChild(levelField());
    s4.appendChild(field(t('aim.jumlah'), chipRow('jumlah', [1, 2, 4, 6, 10].map(v => ({ v, label: String(v) })), st.jumlah)));
    s4.appendChild(field(t('aim.gaya'), chipRow('gaya', Object.keys(WS.themes).map(k => ({ v: k, label: WS.themes[k].label })), st.gaya)));
    const more = el('details', 'aim-more');
    more.open = st.lanjut;
    more.addEventListener('toggle', () => { st.lanjut = more.open; });
    more.appendChild(el('summary', null, t('aim.lanjut')));
    more.appendChild(field(t('opt.kertas'), chipRow('kertas', Object.keys(WS.paper.SIZES).map(k => ({ v: k, label: WS.paper.LABELS[k] })), st.kertas)));
    more.appendChild(field(t('opt.orientasi'), chipRow('orientasi', [{ v: 'potret', label: t('or.potret') }, { v: 'lanskap', label: t('or.lanskap') }], st.orientasi)));
    more.appendChild(field(t('aim.cek'), chipRow('cek', [{ v: true, label: t('opt.ya') }, { v: false, label: t('opt.tidak') }], st.cek)));
    s4.appendChild(more);
    const pilihan = st.jenis ? WS.registry.get(st.jenis).nama : '';
    s4.appendChild(button('btn btn-primary btn-block aim-buat', pilihan ? t('aim.buat') + ' ' + st.jumlah + ' ' + t('aim.lembar') + ' ' + pilihan : t('aim.buat'), { ai: 'custom' }));
    box.appendChild(s4);
    setRunning(!!st.ctrl);
  }

  function card(doc, i) {
    const it = doc.pages[0].items[0];
    const r = WS.registry.get(doc.resepId);
    const c = el('div', 'aim-card j-' + r.jenjang + (st.pilih.has(doc) ? ' on' : ''));
    c.dataset.i = String(i);
    const prev = el('div', 'aim-prev');
    prev.innerHTML = WS.page.render(doc, 0);
    prev.dataset.ai = 'lihat';
    prev.dataset.i = String(i);
    prev.appendChild(WS.viewer.eyeButton({ ai: 'lihat', i: String(i) }));
    if (it.image && it.status === 'cek') {
      prev.classList.add('proses');
      prev.appendChild(el('div', 'aim-proses', t('aim.memeriksa')));
    }
    c.appendChild(prev);
    if (it.status === 'perlu-cek' && it.masalah && it.masalah.length) {
      const box = el('div', 'aim-masalah');
      box.appendChild(el('strong', null, t('aim.temuan')));
      const ul = el('ul');
      it.masalah.forEach(m => ul.appendChild(el('li', null, m)));
      box.appendChild(ul);
      box.appendChild(el('p', null, t('aim.temuanSaran')));
      c.appendChild(box);
    }
    if (BADGE[it.status]) {
      const b = el('span', 'aim-badge', t(BADGE[it.status]));
      c.appendChild(b);
    }
    const meta = el('div', 'aim-meta');
    meta.appendChild(el('span', 'aim-tag', jenjangOf(r.jenjang).label));
    meta.appendChild(el('span', null, r.nama));
    c.appendChild(meta);
    const bisaEdit = it.data && r.layout === 'soal-ai';
    const row = el('div', 'aim-card-actions' + (bisaEdit ? ' empat' : ''));
    row.appendChild(button('btn', t(st.pilih.has(doc) ? 'aim.dipilih' : 'aim.pilih'), { ai: 'pilih', i: String(i) }));
    if (bisaEdit) row.appendChild(button('btn', t('edit.btn'), { ai: 'edit', i: String(i) }));
    row.appendChild(button('btn', t('aim.ulang'), { ai: 'ulang', i: String(i) }));
    row.appendChild(button('btn', t('aim.hapus'), { ai: 'hapus', i: String(i) }));
    c.appendChild(row);
    return c;
  }

  function renderGallery() {
    const g = root.querySelector('.aim-gallery');
    g.textContent = '';
    if (!st.docs.length) {
      g.appendChild(el('p', 'aim-empty', t('aim.kosong')));
      return;
    }
    st.docs.forEach((d, i) => g.appendChild(card(d, i)));
  }

  function updateCard(doc) {
    const i = st.docs.indexOf(doc);
    const old = root.querySelector('.aim-card[data-i="' + i + '"]');
    if (old) old.replaceWith(card(doc, i));
  }

  function setRunning(on) {
    root.querySelectorAll('[data-ai="acak"],[data-ai="custom"]').forEach(b => { b.disabled = on || (b.dataset.ai === 'custom' && !st.jenis); });
    root.querySelector('[data-ai="batal"]').hidden = !on;
    if (on) root.querySelector('.aim-status').textContent = t('aim.proses');
  }

  async function start(docs) {
    st.docs = docs.concat(st.docs);
    renderGallery();
    root.querySelector('.aim-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    st.ctrl = new AbortController();
    setRunning(true);
    await WS.aiPages.run(docs, { cek: st.cek, signal: st.ctrl.signal, onUpdate: doc => { updateCard(doc); persist(doc); } });
    st.ctrl = null;
    setRunning(false);
    docs.forEach(d => {
      const it = d.pages[0].items[0];
      const s = it.status;
      if (s === 'gagal') WS.telemetry.error('ai_gagal', d.resepId + (it.galat ? ' ' + it.galat : ''));
      else if (FINAL.includes(s)) WS.telemetry.event('ai_ok', d.resepId + ' ' + s);
    });
    root.querySelector('.aim-status').textContent = t(WS.aiPages.pesanAkhir(docs));
  }

  function nextJenis() {
    const ids = WS.aiPool.pool(st.grup, st.jenjang);
    const key = ids.join(',');
    if (!bags[key]) bags[key] = WS.rng.bag(WS.rng.create(WS.rng.newSeed()), ids);
    return bags[key]();
  }

  function makeDocs(pickId, temaOverride) {
    return Array.from({ length: st.jumlah }, () => stamp(WS.doc.create(pickId(), params(temaOverride), WS.rng.newSeed())));
  }

  function selection() {
    const list = st.pilih.size ? st.docs.filter(d => st.pilih.has(d)) : st.docs;
    return list.filter(d => {
      const it = d.pages[0].items[0];
      return it.mode === 'lokal' || !!it.image || !!it.data;
    });
  }

  const actions = {
    acak() {
      return start(makeDocs(nextJenis, 'acak'));
    },
    custom() {
      if (st.jenis) return start(makeDocs(() => st.jenis));
    },
    batal() {
      if (st.ctrl) st.ctrl.abort();
    },
    pdf() {
      const docs = selection();
      if (!docs.length) return WS.uiNotify(t('aim.tidakAda'));
      return WS.app.exportPdf(docs, 'worksheet-ai.pdf');
    },
    bundle() {
      const docs = selection();
      if (!docs.length) return WS.uiNotify(t('aim.tidakAda'));
      WS.app.addToBundle(docs);
      WS.toast(t('aim.ditambah'));
    },
    lihat(i) {
      const pages = [];
      let start = 0;
      st.docs.forEach((d, k) => {
        if (k === i) start = pages.length;
        const nama = WS.registry.get(d.resepId).nama;
        WS.page.renderAll(d, {}).forEach((svg, p) => pages.push({ svg, label: nama + ' · ' + (p < d.pages.length ? t('view.hal') + ' ' + (p + 1) : t('view.kunci')) }));
      });
      WS.viewer.open(pages, start);
    },
    edit(i) {
      if (st.ctrl) return WS.uiNotify(t('aim.tunggu'));
      WS.editSoal.open(st.docs[i], d => {
        WS.store.docs.put(d);
        updateCard(d);
        WS.toast(t('edit.tersimpan'));
      });
    },
    pilih(i) {
      const d = st.docs[i];
      if (st.pilih.has(d)) st.pilih.delete(d);
      else st.pilih.add(d);
      updateCard(d);
    },
    ulang(i) {
      if (st.ctrl) return WS.uiNotify(t('aim.tunggu'));
      const old = st.docs[i];
      const fresh = stamp(WS.doc.create(old.resepId, old.params, WS.rng.newSeed()));
      st.docs.splice(i, 1);
      st.pilih.delete(old);
      if (old.id) WS.store.docs.del(old.id);
      return start([fresh]);
    },
    hapus(i) {
      const old = st.docs[i];
      st.pilih.delete(old);
      st.docs.splice(i, 1);
      if (old.id) WS.store.docs.del(old.id);
      renderGallery();
    }
  };

  function onClick(e) {
    const jj = e.target.closest('[data-aijenjang]');
    if (jj) return setJenjang(jj.dataset.aijenjang);
    const k = e.target.closest('[data-aikey]');
    if (k) {
      st[k.dataset.aikey] = JSON.parse(k.dataset.aival);
      if (k.dataset.aikey === 'tema') st.bebas = '';
      renderControls();
      return;
    }
    const a = e.target.closest('[data-ai]');
    if (a && actions[a.dataset.ai]) actions[a.dataset.ai](Number(a.dataset.i));
  }

  function onInput(e) {
    if (e.target.dataset.aiinput !== 'bebas') return;
    st.bebas = e.target.value;
    root.querySelectorAll('[data-aikey="tema"]').forEach(b => b.classList.toggle('on', !st.bebas && JSON.parse(b.dataset.aival) === st.tema));
  }

  function mount(host) {
    root = host;
    WS.profil.onChange(renderGallery);
    root.innerHTML = '<div class="aim-controls"></div><div class="aim-main"><div class="aim-toolbar"><span class="aim-status"></span>' +
      '<button type="button" class="btn" data-ai="batal" hidden></button><button type="button" class="btn" data-ai="bundle"></button>' +
      '<button type="button" class="btn btn-success" data-ai="pdf"></button></div><div class="aim-gallery"></div></div>';
    root.querySelector('[data-ai="batal"]').textContent = t('aim.batal');
    root.querySelector('[data-ai="bundle"]').textContent = t('aim.bundle');
    root.querySelector('[data-ai="pdf"]').textContent = t('aim.pdf');
    root.addEventListener('click', onClick);
    root.addEventListener('input', onInput);
    renderControls();
    renderGallery();
    WS.store.docs.getAll().then(async list => {
      const keep = WS.aiPool.prune(list.filter(d => d && d.id && WS.aiPool.usable(d)), MAX_SIMPAN);
      list.filter(d => d && d.id && !keep.includes(d)).forEach(d => WS.store.docs.del(d.id));
      await Promise.all(keep.map(d => WS.page.loadIcons(d)));
      const ids = new Set(st.docs.map(d => d.id));
      st.docs = st.docs.concat(keep.filter(d => !ids.has(d.id)));
      renderGallery();
    });
  }

  function setGroup(grupId) {
    st.grup = grupId || null;
    st.jenjang = st.grup ? WS.registry.group(st.grup).jenjang : null;
    renderControls();
  }

  function setJenjang(id) {
    st.grup = null;
    st.jenjang = id || null;
    try {
      localStorage.setItem('ws_ai_jenjang', st.jenjang || 'semua');
    } catch (e) {
      console.warn('Pilihan jenjang tidak tersimpan');
    }
    renderControls();
    if (WS.app) WS.app.refreshNav();
  }

  function filter() {
    return { grup: st.grup, jenjang: st.jenjang };
  }

  WS.aiMode = { mount, setGroup, setJenjang, filter, refresh: renderControls, state: st };
})(globalThis.WS);

/* ui/app.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const PRESISI = false;
  const state = { mode: 'presisi', grup: null, resepId: null, params: {}, seed: 0, doc: null, svgs: [], page: 0, bundle: [], busy: false, token: 0 };
  const $ = sel => document.querySelector(sel);

  function presisiRecipes(grupId) {
    return WS.registry.byGroup(grupId).filter(x => !x.ai);
  }

  function countFor(grupId) {
    return WS.registry.byGroup(grupId).filter(x => !!x.ai === (state.mode === 'ai')).length;
  }

  function navItem(grupId, label, active, count, jenjang) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'nav-item' + (jenjang ? ' j-' + jenjang : '') + (active ? ' on' : '');
    b.dataset.grup = grupId;
    const s = document.createElement('span');
    s.textContent = label;
    b.appendChild(s);
    const c = document.createElement('em');
    c.className = 'nav-count';
    c.textContent = String(count);
    b.appendChild(c);
    return b;
  }

  function chip(label, active, data) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (active ? ' on' : '');
    b.textContent = label;
    Object.keys(data).forEach(k => { b.dataset[k] = data[k]; });
    return b;
  }

  function optGroup(title, key, choices, current) {
    const wrap = document.createElement('div');
    wrap.className = 'opt';
    const lb = document.createElement('p');
    lb.className = 'opt-label';
    lb.textContent = title;
    wrap.appendChild(lb);
    const row = document.createElement('div');
    row.className = 'chips';
    (typeof choices === 'function' ? choices() : choices).forEach(c => row.appendChild(chip(c.label, c.v === current, { key, val: JSON.stringify(c.v) })));
    wrap.appendChild(row);
    return wrap;
  }

  function step(nr, title, children) {
    const card = document.createElement('section');
    card.className = 'step';
    const h = document.createElement('h3');
    const i = document.createElement('i');
    i.textContent = nr;
    h.appendChild(i);
    h.appendChild(document.createTextNode(title));
    card.appendChild(h);
    children.forEach(c => card.appendChild(c));
    return card;
  }

  function buildSidebar() {
    const nav = $('#nav');
    nav.innerHTML = '';
    const ai = state.mode === 'ai';
    const f = ai ? WS.aiMode.filter() : { grup: state.grup, jenjang: null };
    if (ai) nav.appendChild(navItem('', t('aim.semuaJenjang'), !f.grup && !f.jenjang, WS.registry.all().filter(r => r.ai).length));
    WS.registry.JENJANG.forEach(j => {
      const groups = WS.registry.GROUPS.filter(g => g.jenjang === j.id && countFor(g.id));
      if (!groups.length) return;
      const h = document.createElement('button');
      h.type = 'button';
      h.className = 'nav-sec j-' + j.id + (ai && !f.grup && f.jenjang === j.id ? ' on' : '');
      h.dataset.jenjang = j.id;
      h.textContent = j.label;
      nav.appendChild(h);
      groups.forEach(g => nav.appendChild(navItem(g.id, g.label, g.id === f.grup, countFor(g.id), j.id)));
    });
  }

  function setMode(m) {
    state.mode = m;
    document.body.classList.toggle('mode-ai', m === 'ai');
    document.body.classList.toggle('mode-presisi', m !== 'ai');
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
    buildSidebar();
  }

  function buildSettings() {
    const r = WS.registry.get(state.resepId);
    const p = state.params;
    const box = $('#settings');
    box.innerHTML = '';
    let nr = 1;
    const jenis = document.createElement('div');
    jenis.className = 'chips';
    presisiRecipes(state.grup).forEach(x => jenis.appendChild(chip(x.nama, x.id === r.id, { resep: x.id })));
    box.appendChild(step(nr++, t('step.jenis'), [jenis]));
    if (r.opsi.length) {
      box.appendChild(step(nr++, t('step.opsi'), r.opsi.map(o => {
        const g = optGroup(o.label, o.key, o.choices, p[o.key]);
        if (o.key === 'tema') {
          const b = chip(t('ai.chip'), false, { action: 'tema-ai' });
          b.classList.add('chip-ai');
          g.querySelector('.chips').appendChild(b);
        }
        return g;
      })));
    }
    const levels = ['mudah', 'sedang', 'sulit'].map(v => ({ v, label: t('lvl.' + v) }));
    const pages = [1, 2, 3, 5].map(v => ({ v, label: String(v) }));
    box.appendChild(step(nr++, t('step.level'), [optGroup(t('opt.kesulitan'), 'kesulitan', levels, p.kesulitan), optGroup(t('opt.halaman'), 'halaman', pages, p.halaman)]));
    const gaya = Object.keys(WS.themes).map(k => ({ v: k, label: WS.themes[k].label }));
    const kertas = Object.keys(WS.paper.SIZES).map(k => ({ v: k, label: WS.paper.LABELS[k] }));
    const ori = [{ v: 'potret', label: t('or.potret') }, { v: 'lanskap', label: t('or.lanskap') }];
    const last = [optGroup(t('opt.gaya'), 'gaya', gaya, p.gaya), optGroup(t('opt.kertas'), 'kertas', kertas, p.kertas), optGroup(t('opt.orientasi'), 'orientasi', ori, p.orientasi)];
    if (r.hasAnswers) last.push(optGroup(t('opt.kunci'), 'kunci', [{ v: true, label: t('opt.ya') }, { v: false, label: t('opt.tidak') }], p.kunci));
    box.appendChild(step(nr, t('step.gaya'), last));
  }

  function renderPreview() {
    const sheet = $('#sheet');
    sheet.innerHTML = state.svgs[state.page] || '';
    const thumbs = $('#thumbs');
    thumbs.innerHTML = '';
    state.svgs.forEach((s, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'thumb' + (i === state.page ? ' on' : '');
      b.dataset.page = String(i);
      b.innerHTML = s;
      const cap = document.createElement('span');
      cap.textContent = i < state.doc.pages.length ? String(i + 1) : t('thumb.kunci');
      b.appendChild(cap);
      thumbs.appendChild(b);
    });
  }

  function renderBundle() {
    $('#bundle-count').textContent = String(state.bundle.length);
    const list = $('#bundle-list');
    list.innerHTML = '';
    state.bundle.forEach((d, i) => {
      const item = document.createElement('span');
      item.className = 'bundle-item';
      item.appendChild(document.createTextNode(WS.registry.get(d.resepId).nama));
      const del = document.createElement('button');
      del.type = 'button';
      del.dataset.action = 'bundle-hapus';
      del.dataset.i = String(i);
      del.setAttribute('aria-label', t('btn.hapus'));
      del.textContent = '×';
      item.appendChild(del);
      list.appendChild(item);
    });
  }

  async function generate() {
    const token = ++state.token;
    const doc = WS.doc.create(state.resepId, state.params, state.seed);
    await WS.page.loadIcons(doc);
    if (token !== state.token) return;
    state.doc = doc;
    state.svgs = WS.page.renderAll(doc);
    state.page = Math.min(state.page, state.svgs.length - 1);
    renderPreview();
  }

  function selectRecipe(id) {
    state.resepId = id;
    const keep = {};
    ['gaya', 'kertas', 'orientasi', 'kunci'].forEach(k => { if (state.params[k] != null) keep[k] = state.params[k]; });
    state.params = WS.doc.normalize(WS.registry.get(id), keep);
    state.seed = WS.rng.newSeed();
    state.page = 0;
    buildSettings();
    generate();
  }

  function selectGroup(grupId) {
    if (state.mode === 'ai') {
      WS.aiMode.setGroup(grupId || null);
      buildSidebar();
      document.body.classList.remove('nav-open');
      return;
    }
    state.grup = grupId;
    buildSidebar();
    selectRecipe(presisiRecipes(grupId)[0].id);
    document.body.classList.remove('nav-open');
  }

  const NAV_KEY = 'ws.navHidden';

  function isDesktop() {
    return window.matchMedia('(min-width:1024px)').matches;
  }

  function setNavHidden(on) {
    document.body.classList.toggle('nav-hidden', on);
    try { localStorage.setItem(NAV_KEY, on ? '1' : '0'); } catch (e) { return; }
  }

  function setBusy(on) {
    document.querySelectorAll('[data-action="pdf"],[data-action="bundle-pdf"]').forEach(b => { b.disabled = on; });
    $('#busy').hidden = !on;
  }

  async function exportPdf(docs, filename) {
    if (state.busy) return;
    state.busy = true;
    setBusy(true);
    try {
      const svgs = [];
      for (const d of docs) {
        await WS.page.loadIcons(d);
        WS.page.renderAll(d).forEach(s => svgs.push(s));
      }
      const blob = await WS.pdf.build(svgs);
      await WS.download(blob, filename);
      WS.telemetry.event('pdf_unduh', svgs.length + ' hal');
    } catch (e) {
      console.error(e);
      WS.telemetry.error('pdf_gagal', (e && e.message) || e);
      WS.uiNotify(t('msg.pdfGagal'));
    } finally {
      state.busy = false;
      setBusy(false);
    }
  }

  const actions = {
    buat() {
      state.seed = WS.rng.newSeed();
      state.page = 0;
      generate();
    },
    pdf() {
      return exportPdf([state.doc], 'worksheet-' + state.doc.resepId + '-' + state.doc.seed.toString(36) + '.pdf');
    },
    bundle() {
      state.bundle.push(JSON.parse(JSON.stringify(state.doc)));
      renderBundle();
      WS.toast(t('msg.ditambah'));
    },
    'bundle-pdf'() {
      if (!state.bundle.length) return WS.uiNotify(t('bundle.kosong'));
      return exportPdf(state.bundle, 'bundle-worksheet.pdf');
    },
    'bundle-hapus'(el) {
      state.bundle.splice(Number(el.dataset.i), 1);
      renderBundle();
    },
    'tema-ai'() {
      WS.aiPanel.open(theme => {
        if (theme) state.params.tema = 'ai:' + theme.id;
        else if (String(state.params.tema).startsWith('ai:') && !WS.aiThemes.get(String(state.params.tema).slice(3))) state.params.tema = 'acak';
        buildSettings();
        generate();
      });
    },
    mode(el) {
      setMode(el.dataset.mode);
    },
    lihat() {
      if (!state.doc) return;
      WS.viewer.open(state.svgs.map((svg, i) => ({ svg, label: i < state.doc.pages.length ? t('view.hal') + ' ' + (i + 1) : t('view.kunci') })), state.page);
    },
    profil() {
      document.body.classList.remove('nav-open');
      WS.profil.open();
    },
    'nav-toggle'() {
      if (isDesktop()) setNavHidden(!document.body.classList.contains('nav-hidden'));
      else document.body.classList.add('nav-open');
    },
    'nav-tutup'() {
      document.body.classList.remove('nav-open');
      if (isDesktop()) setNavHidden(true);
    }
  };
  actions.acak = actions.buat;

  function onClick(e) {
    const sec = e.target.closest('.nav-sec');
    if (sec) {
      if (state.mode === 'ai') {
        WS.aiMode.setJenjang(sec.dataset.jenjang);
        document.body.classList.remove('nav-open');
      }
      return;
    }
    const nav = e.target.closest('.nav-item');
    if (nav) return selectGroup(nav.dataset.grup);
    const rc = e.target.closest('[data-resep]');
    if (rc) return selectRecipe(rc.dataset.resep);
    const opt = e.target.closest('[data-key]');
    if (opt) {
      state.params[opt.dataset.key] = JSON.parse(opt.dataset.val);
      if (opt.dataset.key === 'halaman' || opt.dataset.key === 'kunci') state.page = 0;
      buildSettings();
      return generate();
    }
    if (e.target.closest('#sheet')) return actions.lihat();
    const th = e.target.closest('.thumb');
    if (th) {
      state.page = Number(th.dataset.page);
      return renderPreview();
    }
    const act = e.target.closest('[data-action]');
    if (act && actions[act.dataset.action]) return actions[act.dataset.action](act);
  }

  function init() {
    document.title = t('app.title');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.addEventListener('click', onClick);
    try { document.body.classList.toggle('nav-hidden', localStorage.getItem(NAV_KEY) === '1'); } catch (e) { document.body.classList.remove('nav-hidden'); }
    $('.mode-switch').hidden = !PRESISI;
    if (PRESISI) {
      const first = WS.registry.GROUPS.find(g => presisiRecipes(g.id).length);
      selectGroup(first.id);
    }
    renderBundle();
    WS.aiMode.mount($('#ai-mode'));
    WS.profil.onChange(() => {
      if (!state.doc) return;
      state.svgs = WS.page.renderAll(state.doc);
      renderPreview();
    });
    setMode('ai');
    WS.store.getAll().then(list => {
      list.forEach(th => WS.aiThemes.add(th));
      if (list.length && state.resepId) buildSettings();
      WS.aiMode.refresh();
    });
  }

  function addToBundle(docs) {
    docs.forEach(d => state.bundle.push(JSON.parse(JSON.stringify(d))));
    renderBundle();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  WS.app = { state, generate, exportPdf, addToBundle, refreshNav: buildSidebar };
})(globalThis.WS);

/* ui/auth.js */
(function (WS) {
  'use strict';

  const t = WS.t;
  const S = WS.api.store;
  const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,}$/i;
  let timer = null;

  function $(sel) {
    return document.querySelector(sel);
  }

  function token() {
    return S('ws_token') || S('ws_token', WS.api.randomHex(24));
  }

  function setMsg(text) {
    $('#login-msg').textContent = text || '';
  }

  function setBusy(on) {
    const btn = $('#login-btn');
    btn.disabled = on;
    btn.textContent = t(on ? 'login.proses' : 'login.masuk');
  }

  function enter(nama) {
    $('#user-nama').textContent = t('login.halo') + ', ' + (nama || 'Pengguna');
    $('#user-box').hidden = false;
    document.body.classList.remove('need-login');
    clearInterval(timer);
    timer = setInterval(check, 60000);
  }

  function showLogin(msg) {
    clearInterval(timer);
    timer = null;
    S('ws_email', null);
    S('ws_nama', null);
    $('#user-box').hidden = true;
    document.body.classList.add('need-login');
    $('#login-form').hidden = false;
    $('#login-wait').hidden = true;
    setBusy(false);
    setMsg(msg);
  }

  async function check() {
    const email = S('ws_email');
    if (!email) return;
    try {
      const r = await WS.api.action('cek', { email, token: token() });
      if (r.status === 'INVALID' || (r.status === 'GAGAL' && r.http === 200)) showLogin(r.status === 'INVALID' ? t('login.sesiHabis') : r.message);
    } catch (e) {
      console.warn('Cek sesi gagal, dicoba lagi nanti');
    }
  }

  async function login(e) {
    e.preventDefault();
    const email = $('#login-email').value.trim();
    if (!EMAIL_RE.test(email)) return setMsg(t('login.formatEmail'));
    setBusy(true);
    setMsg('');
    try {
      const r = await WS.api.action('login', { email, token: token() });
      if (r.status !== 'SUKSES') {
        setBusy(false);
        return setMsg(r.message || t('login.gagalJaringan'));
      }
      S('ws_email', r.email || email);
      S('ws_nama', r.nama || '');
      WS.telemetry.event('login', r.activeDevices + '/' + r.maxDevices);
      enter(r.nama);
    } catch (err) {
      setBusy(false);
      setMsg(t('login.gagalJaringan'));
    }
  }

  async function logout() {
    const email = S('ws_email');
    if (email) WS.api.action('logout', { email, token: token() }).catch(() => {});
    showLogin('');
  }

  function init() {
    $('#login-form').addEventListener('submit', login);
    $('#user-keluar').addEventListener('click', logout);
    if (WS.api.LOCAL && new URLSearchParams(location.search).has('devlogin')) return enter('Dev');
    const email = S('ws_email');
    if (!email) return showLogin('');
    $('#login-form').hidden = true;
    $('#login-wait').hidden = false;
    $('#login-email').value = email;
    WS.api.action('cek', { email, token: token() }).then(r => {
      if (r.status === 'VALID') return enter(S('ws_nama'));
      if (r.status === 'INVALID' || (r.status === 'GAGAL' && r.http === 200)) return showLogin(r.status === 'INVALID' ? t('login.sesiHabis') : r.message);
      enter(S('ws_nama'));
    }).catch(() => enter(S('ws_nama')));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  WS.auth = { check, logout };
})(globalThis.WS);

