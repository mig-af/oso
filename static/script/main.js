
import { HISTORIA } from '../data/data.js';



/* ---------- Introducción ---------- */
document.getElementById('parrafos-intro').innerHTML =
  HISTORIA.introduccion.map(p => `<p>${p}</p>`).join('');

/* ---------- Línea de tiempo ---------- */
(function renderLinea() {
  const lista = document.getElementById('lista-hitos');
  const chips = document.getElementById('chips-anios');

  lista.innerHTML = HISTORIA.lineaTiempo.map((h, i) => {
    const izquierda = i % 2 === 0;
    return `
    <div class="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-14 items-center" id="hito-${h.anio}">
      <span class="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-7 h-7 rounded-full border-4 border-white shadow-float-sm grid place-items-center text-[11px]" style="background:${h.color}" title="${h.anio}"></span>
      <div class="${izquierda ? 'md:col-start-1' : 'md:col-start-2'}">
        <article class="hito-card bg-carnaval-crema rounded-[1.75rem] p-6 md:p-7 shadow-float-sm hover:-translate-y-1.5 hover:shadow-float transition duration-300 ${izquierda ? 'md:text-right' : ''}">
          <div class="flex items-center gap-3 ${izquierda ? 'md:flex-row-reverse' : ''}">
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
      const destino = document.getElementById('hito-' + b.dataset.anio);
      destino.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const tarjeta = destino.querySelector('.hito-card');
      tarjeta.classList.add('hito-flash');
      setTimeout(() => tarjeta.classList.remove('hito-flash'), 1800);
    });
  });
})();

/* ---------- Personajes ---------- */
(function renderPersonajes() {
  document.getElementById('tarjetas-personajes').innerHTML = HISTORIA.personajes.map((p, i) => `
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

/* ---------- Curiosidades ---------- */
(function renderCuriosidades() {
  const colores = ['#FF3D8A', '#FF7A00', '#FFB703', '#00C2A8', '#7B2FF2', '#FF3D8A'];
  document.getElementById('tarjetas-curiosidades').innerHTML = HISTORIA.curiosidades.map((c, i) => `
    <article class="bg-carnaval-crema rounded-3xl p-6 shadow-float-sm hover:-translate-y-2 transition duration-300 border-t-8" style="border-color:${colores[i % colores.length]}">
      <span class="text-4xl inline-block anim-flotar" style="animation-delay:${i * .3}s">${c.emoji}</span>
      <h3 class="font-display text-xl text-slate-800 mt-3">${c.titulo}</h3>
      <p class="text-sm font-bold text-slate-500 leading-relaxed mt-2">${c.texto}</p>
    </article>`).join('');
})();

/* ---------- Archivo fotográfico + lightbox ---------- */
(function renderArchivo() {
  const grid = document.getElementById('galeria-archivo');
  grid.innerHTML = HISTORIA.archivo.map(a => `
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

/* ---------- Confeti ---------- */
(function confeti() {
  const caja = document.getElementById('confeti');
  const colores = ['#FFB703', '#FF7A00', '#FF3D8A', '#7B2FF2', '#00C2A8'];
  for (let i = 0; i < 45; i++) {
    const p = document.createElement('span');
    const tam = 6 + Math.random() * 8;
    p.style.cssText = `position:absolute;top:0;left:${Math.random() * 100}%;width:${tam}px;height:${tam * (Math.random() > .5 ? 1 : 1.6)}px;background:${colores[i % colores.length]};border-radius:${Math.random() > .5 ? '50%' : '2px'};animation:confettiCaer ${6 + Math.random() * 7}s linear infinite;animation-delay:-${Math.random() * 10}s;opacity:.9`;
    caja.appendChild(p);
  }
})();

/* ---------- Banderines ---------- */
(function banderines() {
  const caja = document.getElementById('banderines');
  const colores = ['#FFB703', '#FF7A00', '#FF3D8A', '#7B2FF2', '#00C2A8'];
  let html = '<div class="absolute top-16 inset-x-0 h-1 bg-carnaval-violeta/30"></div>';
  for (let i = 0; i < 30; i++) {
    html += `<span class="banderin anim-mecerse shrink-0" style="width:26px;height:32px;background:${colores[i % colores.length]};animation-delay:${(i % 7) * .35}s"></span>`;
  }
  caja.innerHTML = html;
})();

/* ---------- Reveal on scroll ---------- */
(function reveal() {
  const obs = new IntersectionObserver(entradas => entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ---------- Menú móvil ---------- */
(function menu() {
  const m = document.getElementById('menu-movil');
  document.getElementById('btn-menu').addEventListener('click', () => m.classList.toggle('hidden'));
  m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => m.classList.add('hidden')));
})();

/* ---------- Botón subir ---------- */
(function subir() {
  const b = document.getElementById('btn-subir');
  window.addEventListener('scroll', () => {
    const visible = window.scrollY > 500;
    b.classList.toggle('opacity-0', !visible);
    b.classList.toggle('pointer-events-none', !visible);
  });
  b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
