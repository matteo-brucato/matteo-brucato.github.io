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
		'  <a href="https://www.linkedin.com/in/MatteoBrucato/" title="LinkedIn">LinkedIn</a>',
		'  <a href="https://scholar.google.com/citations?user=DCppMt0AAAAJ" title="Google Scholar">Scholar</a>',
		'  <a href="http://dblp.uni-trier.de/pers/hd/b/Brucato:Matteo" title="DBLP">DBLP</a>',
		'  <a href="https://dl.acm.org/profile/89758611557" title="ACM Digital Library">ACM DL</a>',
		'  <a href="https://twitter.com/MatteoBrucato" title="Twitter / X">Twitter</a>',
		'</div>',

		'<a class="sb-cv" href="../files/cv_matteo_brucato_web.pdf">↓ Download CV</a>',

		'<hr class="sb-divider">',

		'<div class="sb-quotes">',
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
