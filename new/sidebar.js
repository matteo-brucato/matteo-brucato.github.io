(function () {
	var slot = document.getElementById('sidebar-slot');
	if (!slot) return;

	slot.innerHTML = [
		'<button class="sb-theme" id="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">',
		'  <svg class="icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
		'  <svg class="icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
		'</button>',

		'<a href="index.html" class="sb-home-link">',
		'  <div class="sb-photo"><img src="../imgs/DSCF0916-v3.png" alt="Matteo Brucato"></div>',
		'  <h1 class="sb-name">Matteo Brucato</h1>',
		'</a>',

		'<div class="sb-role">Co-Founder &amp; Chief Scientific Officer<span class="org"><a href="https://osm-data.com/">OSM Data</a></span></div>',

		'<div class="sb-contact"><a href="mailto:matteo@osm-data.com">matteo@osm-data.com</a></div>',

		'<div class="sb-socials">',
		'  <a href="https://www.linkedin.com/in/MatteoBrucato/" title="LinkedIn" aria-label="LinkedIn">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
		'  </a>',
		'  <a href="https://twitter.com/MatteoBrucato" title="X (Twitter)" aria-label="X">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
		'  </a>',
		'  <a href="https://scholar.google.com/citations?user=DCppMt0AAAAJ" class="scholar" title="Google Scholar" aria-label="Google Scholar">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>',
		'  </a>',
		'  <a href="https://github.com/osm-data" title="OSM Data on GitHub" aria-label="OSM Data on GitHub">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
		'  </a>',
		'  <a href="http://dblp.uni-trier.de/pers/hd/b/Brucato:Matteo" title="DBLP" aria-label="DBLP">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.075.002c-.096.013-.154.092-.094.31L4.97 7.73 3.1 8.6s-.56.26-.4.85l2.45 9.159s.16.59.72.33l6.169-2.869 1.3-.61s.52-.24.42-.79l-.01-.06-1.13-4.22-.658-2.45-.672-2.49v-.04s-.16-.59-.84-1L3.5.141s-.265-.16-.425-.139zM18.324 5.03a.724.724 0 0 0-.193.06l-5.602 2.6.862 3.2 1.09 4.08.01.06c.05.47-.411.79-.411.79l-1.88.87.5 1.89.04.1c.07.17.28.6.81.91l6.95 4.269s.68.41.52-.17l-1.981-7.4 1.861-.86s.56-.26.4-.85L18.85 5.42s-.116-.452-.526-.39z"/></svg>',
		'  </a>',
		'  <a href="../files/cv_matteo_brucato_web.pdf" title="Download CV" aria-label="Download CV" class="text">CV</a>',
		'</div>',

		'<hr class="sb-divider">',

		'<div class="sb-quotes">',
		'  <div class="sb-quotes-h">Favourite quotes</div>',
		'  <p class="sb-quote">',
		'    “The process of preparing programs for a digital computer is especially attractive, not only because it can be economically and scientifically rewarding, but also because it can be an aesthetic experience much like composing poetry or music.”',
		'    <span class="attr"><a href="https://www-cs-faculty.stanford.edu/~knuth">Donald E. Knuth</a></span>',
		'  </p>',
		'  <p class="sb-quote">',
		'    “If you can\'t explain it simply, you don\'t understand it well enough.”',
		'    <span class="attr">Albert Einstein</span>',
		'  </p>',
		'</div>'
	].join('\n');

	// Wire up theme toggle after injection
	var btn = document.getElementById('theme-toggle');
	if (!btn) return;
	btn.addEventListener('click', function () {
		var root = document.documentElement;
		var current = root.getAttribute('data-theme');
		var next;
		if (current === 'dark') next = 'light';
		else if (current === 'light') next = 'dark';
		else {
			var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			next = prefersDark ? 'light' : 'dark';
		}
		root.setAttribute('data-theme', next);
		try { localStorage.setItem('theme', next); } catch (e) {}
	});
})();
