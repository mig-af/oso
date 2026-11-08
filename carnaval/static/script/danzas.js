import { DANZAS } from '../data/danzas.js';
import { initCommon } from './common.js';

(function renderDanzas() {
  const el = document.getElementById('tarjetas-danzas');
  if (!el) return;
  el.innerHTML = DANZAS.map(d => `
    <article class="bg-white rounded-[2rem] overflow-hidden shadow-float-lg hover:-translate-y-2 transition duration-300">
      <div class="relative h-64 overflow-hidden">
        <img src="${d.imagen}" alt="${d.nombre}" class="w-full h-full object-cover" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <span class="absolute top-4 left-4 text-white font-display px-4 py-1.5 rounded-full text-sm shadow-float-sm" style="background:${d.color}">${d.emoji} ${d.origen}</span>
        <h3 class="absolute bottom-4 left-5 text-white font-display text-3xl drop-shadow">${d.nombre}</h3>
      </div>
      <div class="p-6">
        <p class="text-sm font-bold text-slate-500 leading-relaxed">${d.descripcion}</p>
        <p class="mt-4 text-xs font-extrabold uppercase tracking-widest" style="color:${d.color}">👘 ${d.traje}</p>
        <p class="mt-1 text-xs font-extrabold uppercase tracking-widest text-slate-500">🎺 ${d.musica}</p>
      </div>
    </article>`).join('');
})();

initCommon();
