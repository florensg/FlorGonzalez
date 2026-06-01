/**
 * ============================================================
 *  MAIN — Navegación, scroll highlight, utilidades
 * ============================================================
 */

// ── Cerrar nav en mobile ──
function closeNav() {
    document.getElementById('navLinks').classList.remove('open');
}
window.closeNav = closeNav;

// ── Cerrar nav al hacer click fuera ──
document.addEventListener('click', function (e) {
    const nav = document.getElementById('navLinks');
    const toggle = document.querySelector('.nav-toggle');
    if (toggle && !toggle.contains(e.target) && nav && !nav.contains(e.target)) {
        nav.classList.remove('open');
    }
});

// ── Scroll highlight: marca la sección activa en la navbar ──
(function highlightOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            const top = s.offsetTop - 120;
            if (window.scrollY >= top) current = s.getAttribute('id');
        });
        navLinks.forEach(a => {
            const href = a.getAttribute('href');
            a.style.color = href === '#' + current ? 'var(--accent)' : '';
        });
    });
})();
