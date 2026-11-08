import { HISTORIA } from '../data/historia.js';
import { initCommon } from './common.js';

document.getElementById('parrafos-intro').innerHTML =
  HISTORIA.introduccion.map(p => `<p>${p}</p>`).join('');



(function renderLinea() {
  
  const lista = document.getElementById('lista-hitos');
  const chips = document.getElementById('chips-anios');
  if (!lista || !chips) return;
  lista.innerHTML = HISTORIA.lineaTiempo.map((h, i) => {
    const izq = i % 2 === 0;
    return `
    <div class="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-14 items-center" id="hito-${h.anio}">
      <span class="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-7 h-7 rounded-full border-4 border-white shadow-float-sm grid place-items-center text-[11px]" style="background:${h.color}"></span>
      <div class="${izq ? 'md:col-start-1' : 'md:col-start-2'}">
        <article class="hito-card bg-carnaval-crema rounded-[1.75rem] p-6 md:p-7 shadow-float-sm hover:-translate-y-1.5 hover:shadow-float transition duration-300 ${izq ? 'md:text-right' : ''}">
          <div class="flex items-center gap-3 ${izq ? 'md:flex-row-reverse' : ''}">
            <span class="font-display text-2xl text-white px-4 py-1.5 rounded-2xl shadow-float-sm" style="background:${h.color}">${h.anio}</span>
            <span class="text-xs font-extrabold uppercase tracking-widest" style="color:${h.color}">${h.emoji} ${h.etapa}</span>
          </div>
          <h3 class="font-display text-2xl text-slate-800 mt-4">${h.titulo}</h3>
          <p class="text-sm font-bold text-slate-500 leading-relaxed mt-2">${h.descripcion}</p>
        </article>
      </div>
    </div>`;
  }).join('');
  chips.innerHTML = HISTORIA.lineaTiempo.map(h => `
    <button data-anio="${h.anio}" class="chip-anio px-4 py-2 rounded-full font-display text-sm bg-white border border-rose-100 text-slate-600 hover:scale-110 hover:text-white transition shadow-float-sm" style="--c:${h.color}">${h.anio}</button>`).join('');
  chips.querySelectorAll('.chip-anio').forEach(b => {
    b.addEventListener('mouseenter', () => b.style.background = b.style.getPropertyValue('--c'));
    b.addEventListener('mouseleave', () => b.style.background = '#fff');
    b.addEventListener('click', () => {
      const d = document.getElementById('hito-' + b.dataset.anio);
      d.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const t = d.querySelector('.hito-card');
      t.classList.add('hito-flash');
      setTimeout(() => t.classList.remove('hito-flash'), 1800);
    });
  });
})();

(function renderPersonajes() {
  const el = document.getElementById('tarjetas-personajes');
  if (!el) return;
  el.innerHTML = HISTORIA.personajes.map(p => `
    <article class="bg-carnaval-crema rounded-3xl overflow-hidden shadow-float-sm hover:-translate-y-2 hover:shadow-float transition duration-300">
      <div class="relative h-72 overflow-hidden">
        <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-full object-cover" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent"></div>
        <span class="absolute bottom-3 left-4 text-white font-display text-lg drop-shadow">“${p.apodo}”</span>
      </div>
      <div class="p-6">
        <h3 class="font-display text-2xl text-slate-800">${p.nombre}</h3>
        <p class="text-xs font-extrabold uppercase tracking-widest mt-1 mb-3" style="color:${p.color}">${p.rol}</p>
        <p class="text-sm font-bold text-slate-500 leading-relaxed">${p.descripcion}</p>
      </div>
    </article>`).join('');
})();

(function renderCuriosidades() {
  const el = document.getElementById('tarjetas-curiosidades');
  if (!el) return;
  const colores = ['#FF3D8A', '#FF7A00', '#FFB703', '#00C2A8', '#7B2FF2', '#FF3D8A'];
  el.innerHTML = HISTORIA.curiosidades.map((c, i) => `
    <article class="bg-carnaval-crema rounded-3xl p-6 shadow-float-sm hover:-translate-y-2 transition duration-300 border-t-8" style="border-color:${colores[i % colores.length]}">
      <span class="text-4xl inline-block anim-flotar" style="animation-delay:${i * .3}s">${c.emoji}</span>
      <h3 class="font-display text-xl text-slate-800 mt-3">${c.titulo}</h3>
      <p class="text-sm font-bold text-slate-500 leading-relaxed mt-2">${c.texto}</p>
    </article>`).join('');
})();

initCommon();
