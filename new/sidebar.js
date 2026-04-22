(function () {
	var slot = document.getElementById('sidebar-slot');
	if (!slot) return;

	slot.innerHTML = [
		'<button class="sb-theme" id="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">',
		'  <svg class="icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
		'  <svg class="icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
		'</button>',

		'<a href="index.html" class="sb-home-link">',
		'  <div class="sb-photo"><img src="../imgs/DSCF0916-v2.png" alt="Matteo Brucato"></div>',
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
		'  <a href="https://scholar.google.com/citations?user=DCppMt0AAAAJ" title="Google Scholar" aria-label="Google Scholar">',
		'    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
		'  </a>',
		'  <a href="http://dblp.uni-trier.de/pers/hd/b/Brucato:Matteo" title="DBLP" aria-label="DBLP" class="text">DBLP</a>',
		'  <a href="https://dl.acm.org/profile/89758611557" title="ACM Digital Library" aria-label="ACM Digital Library" class="text">ACM</a>',
		'</div>',

		'<a class="sb-cv" href="../files/cv_matteo_brucato_web.pdf">',
		'  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>',
		'  Download CV',
		'</a>',

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
