import { GALERIA } from '../data/galeria.js';
import { initCommon } from './common.js';

(function renderGaleria() {
  const grid = document.getElementById('galeria-archivo');
  if (!grid) return;
  grid.innerHTML = GALERIA.archivo.map(a => `
    <button class="g-arc group relative rounded-2xl overflow-hidden shadow-float-sm hover:shadow-float transition aspect-[4/3]" data-src="${a.imagen}" data-cap="${a.titulo} · ${a.anio}">
      <img src="${a.imagen}" alt="${a.titulo}" class="w-full h-full object-cover sepia-[.25] group-hover:sepia-0 group-hover:scale-110 transition duration-500" loading="lazy">
      <span class="absolute top-3 left-3 bg-white/95 rounded-full px-3 py-1 font-display text-xs shadow-float-sm text-carnaval-naranja">${a.anio}</span>
      <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent text-white font-display text-sm pt-8 pb-3 px-3 translate-y-full group-hover:translate-y-0 transition duration-300">${a.titulo}</span>
    </button>`).join('');

  const lb = document.getElementById('lightbox');
  grid.querySelectorAll('.g-arc').forEach(b => b.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = b.dataset.src;
    document.getElementById('lightbox-cap').textContent = b.dataset.cap;
    lb.classList.remove('hidden'); lb.classList.add('flex');
  }));
  const cerrar = () => { lb.classList.add('hidden'); lb.classList.remove('flex'); };
  document.getElementById('cerrar-lightbox').addEventListener('click', cerrar);
  lb.addEventListener('click', e => { if (e.target === lb) cerrar(); });
})();

initCommon();
