// Helpers compartidos — importado por cada script de página.
// import { initCommon } from './common.js';

export function initCommon() {
  // Confeti
  const cajaC = document.getElementById('confeti');
  if (cajaC) {
    const colores = ['#FFB703', '#FF7A00', '#FF3D8A', '#7B2FF2', '#00C2A8'];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('span');
      const tam = 6 + Math.random() * 8;
      p.style.cssText = `position:absolute;top:0;left:${Math.random() * 100}%;width:${tam}px;height:${tam * (Math.random() > .5 ? 1 : 1.6)}px;background:${colores[i % colores.length]};border-radius:${Math.random() > .5 ? '50%' : '2px'};animation:confettiCaer ${6 + Math.random() * 7}s linear infinite;animation-delay:-${Math.random() * 10}s;opacity:.9`;
      cajaC.appendChild(p);
    }
  }
  // Banderines
  const cajaB = document.getElementById('banderines');
  if (cajaB) {
    const colores = ['#FFB703', '#FF7A00', '#FF3D8A', '#7B2FF2', '#00C2A8'];
    let html = '';
    for (let i = 0; i < 40; i++) {
      html += `<span class="banderin anim-mecerse shrink-0" style="width:26px;height:32px;background:${colores[i % colores.length]};animation-delay:${(i % 7) * .35}s"></span>`;
    }
    cajaB.innerHTML = html;
  }
  // Reveal
  const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  // Botón subir
  const b = document.getElementById('btn-subir');
  if (b) {
    window.addEventListener('scroll', () => {
      const v = window.scrollY > 500;
      b.classList.toggle('opacity-0', !v);
      b.classList.toggle('pointer-events-none', !v);
    });
    b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}
