// MODIFICADO: extraído desde index.html — configuración de Tailwind (antes inline en <head>).
// Se carga después del CDN de Tailwind para extender fontFamily y colores carnaval.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Open Sans"', 'cursive'],
        body: ['Nunito', 'sans-serif']
      },
      colors: {
        carnaval: {
          amarillo: '#FFB703',
          naranja: '#FF7A00',
          rosa: '#FF3D8A',
          violeta: '#7B2FF2',
          teal: '#00C2A8',
          crema: '#FFF8EE',
          negro: '#39383a'
        }
      }
    }
  }
}
