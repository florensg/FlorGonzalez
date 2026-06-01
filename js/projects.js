/**
 * ============================================================
 *  📁 PROYECTOS — Base de datos y motor de renderizado
 * ============================================================
 *
 *  CÓMO AGREGAR UN PROYECTO:
 *  Copiá este bloque dentro del array correspondiente:
 *
 *  {
 *      id: 'mi-proyecto',
 *      title: 'Nombre del Proyecto',
 *      date: 'Enero 2026',
 *      desc: 'Descripción breve del proyecto.',
 *      category: 'personal',   // 'personal' | 'professional' | 'academic'
 *      tech: ['React', 'Node.js'],
 *      github: 'https://github.com/florensg/mi-proyecto',
 *      demo: 'https://mi-proyecto.vercel.app',
 *  },
 *
 *  Si no tiene GitHub o demo, dejalo como string vacío.
 */

const proyectos = [
    // ── 👤 PERSONALES ──
    {
        id: 'prox-personal',
        title: 'Próximamente',
        date: '—',
        desc: 'Acá van a aparecer tus proyectos personales. Incluí links a GitHub, demo, las tecnologías que usaste y una breve descripción.',
        category: 'personal',
        tech: [],
        github: '',
        demo: '',
    },

    // ── 💼 PROFESIONALES ──
    {
        id: 'prox-professional',
        title: 'Próximamente',
        date: '—',
        desc: 'Acá van a aparecer tus proyectos profesionales. Incluí links a GitHub, demo, las tecnologías que usaste y una breve descripción.',
        category: 'professional',
        tech: [],
        github: '',
        demo: '',
    },

    // ── 📚 ACADÉMICOS ──
    {
        id: 'prox-academic',
        title: 'Próximamente',
        date: '—',
        desc: 'Acá van a aparecer tus proyectos académicos. Incluí links a GitHub, demo, las tecnologías que usaste y una breve descripción.',
        category: 'academic',
        tech: [],
        github: '',
        demo: '',
    },
];

/* ── Motor de renderizado (no tocar) ── */

const grid = document.getElementById('projGrid');
const filterBtns = document.querySelectorAll('.proj-filter-btn');
let currentFilter = 'all';

function renderProjects(filter) {
    const filtered = filter === 'all'
        ? proyectos
        : proyectos.filter(p => p.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="proj-empty">
                <div class="proj-empty-icon">📭</div>
                <p>No hay proyectos en esta categoría todavía.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const tagLabel = { personal: 'Personal', professional: 'Profesional', academic: 'Académico' }[p.category];

        const techHtml = p.tech.length
            ? `<div class="proj-card-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>`
            : '';

        const linksHtml = (p.github || p.demo)
            ? `<div class="proj-card-links">
                ${p.github ? `<a href="${p.github}" target="_blank">🔗 GitHub</a>` : ''}
                ${p.demo ? `<a href="${p.demo}" target="_blank">🌐 Demo</a>` : ''}
               </div>`
            : '';

        return `
            <div class="proj-card" data-category="${p.category}">
                <span class="proj-card-tag ${p.category}">${tagLabel}</span>
                <div class="proj-card-title">${p.title}</div>
                <div class="proj-card-date">${p.date}</div>
                <div class="proj-card-desc">${p.desc}</div>
                ${techHtml}
                ${linksHtml}
            </div>
        `;
    }).join('');
}

// ── Filtros ──
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProjects(currentFilter);
    });
});

// ── Render inicial ──
document.addEventListener('DOMContentLoaded', () => renderProjects('all'));
