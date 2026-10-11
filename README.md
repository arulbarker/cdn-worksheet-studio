# cdn-worksheet-studio

File rilis **Worksheet Studio** yang dilayani lewat jsDelivr untuk Gemini Canvas.
Repo ini HASIL BUILD — jangan diedit tangan. Kode sumber ada di repo privat `worksheet-studio`
(`npm run build:cdn` lalu `npm run publish:cdn -- <path clone repo ini>`).

| File | Fungsi |
|---|---|
| `worksheet-studio.js` | Seluruh aplikasi (CSS, markup, modul JS) |
| `canvas-shell.html` | Shell kecil yang ditempel SEKALI ke Gemini Canvas; memuat `worksheet-studio.js` dari jsDelivr |

URL bundle: `https://cdn.jsdelivr.net/gh/arulbarker/cdn-worksheet-studio@main/worksheet-studio.js`

Setiap push ke `main`, workflow `purge.yml` mengosongkan cache jsDelivr.
Ikon: [OpenMoji](https://openmoji.org/) (CC BY-SA 4.0).
