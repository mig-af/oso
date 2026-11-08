import { CRONOGRAMA } from '../data/cronograma.js';
import { initCommon } from './common.js';

(function renderCronograma() {
  const el = document.getElementById('lista-cronograma');
  const badge = document.getElementById('edicion-badge');
  if (badge) badge.textContent = CRONOGRAMA.edicion;
  if (!el) return;
  el.innerHTML = CRONOGRAMA.dias.map(d => `
    <article class="bg-white rounded-[1.75rem] p-6 md:p-7 shadow-float-sm hover:-translate-y-1 hover:shadow-float transition flex gap-5 items-start border-l-8" style="border-color:${d.color}">
      <span class="text-4xl shrink-0">${d.emoji}</span>
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-display text-sm text-white px-3 py-1 rounded-full" style="background:${d.color}">${d.fecha} · ${d.hora}</span>
          <span class="text-xs font-extrabold uppercase tracking-widest text-slate-500">📍 ${d.lugar}</span>
        </div>
        <h3 class="font-display text-2xl text-slate-800 mt-2">${d.titulo}</h3>
        <p class="text-sm font-bold text-slate-500 leading-relaxed mt-1">${d.descripcion}</p>
      </div>
    </article>`).join('');
})();

initCommon();
