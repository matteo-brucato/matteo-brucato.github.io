/*
 * Renders publications on index.html (themed view) and publications.html
 * (flat chronological view). Source of truth is papers.json — edit that file
 * to update both pages.
 */

(function () {

	function esc(s) {
		return String(s).replace(/[&<>"]/g, function (c) {
			return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
		});
	}

	function titleHTML(p) {
		var inner = p.highlight ? '<b>' + esc(p.title) + '</b>' : esc(p.title);
		if (p.titleHref) {
			return '<a class="title-link" href="' + esc(p.titleHref) + '">' + inner + '</a>';
		}
		return inner;
	}

	var ICONS = {
		paper:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
		video:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',
		slides: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/></svg>',
		poster: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
		ext:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
	};

	function iconForLabel(label) {
		var l = String(label).toLowerCase();
		if (l.indexOf('talk') !== -1 || l.indexOf('video') !== -1) return ICONS.video;
		if (l.indexOf('slide') !== -1) return ICONS.slides;
		if (l.indexOf('poster') !== -1) return ICONS.poster;
		if (l.indexOf('paper') !== -1 || l.indexOf('pre-print') !== -1 || l.indexOf('preprint') !== -1) return ICONS.paper;
		return ICONS.ext;
	}

	function linksHTML(p) {
		if (!p.links || !p.links.length) return '';
		var html = p.links.map(function (l) {
			return '<a href="' + esc(l.href) + '"><span class="link-icon">' + iconForLabel(l.label) + '</span>' + esc(l.label) + '</a>';
		}).join(' ');
		return '<span class="links">' + html + '</span>';
	}

	function paperHTML(p) {
		var yearLabel = (p.yearLabel !== undefined) ? p.yearLabel : p.year;
		var parts = [
			'<div class="paper">',
			'  <span class="yr">' + esc(String(yearLabel)) + '</span>',
			'  <span class="title">',
			'    ' + titleHTML(p)
		];
		if (p.venue) {
			var venueInner = p.venueHref
				? '<a href="' + esc(p.venueHref) + '">' + esc(p.venue) + '</a>'
				: esc(p.venue);
			parts.push('    <span class="venue">' + venueInner + '</span>');
		}
		if (p.status) {
			parts.push('    <span class="status">' + esc(p.status) + '</span>');
		}
		if (p.award) {
			parts.push('    <span class="award">' + esc(p.award) + '</span>');
		}
		if (p.authors) {
			parts.push('    <span class="authors">' + esc(p.authors) + '</span>');
		}
		if (p.links && p.links.length) {
			parts.push('    ' + linksHTML(p));
		}
		parts.push('  </span>');
		parts.push('</div>');
		return parts.join('\n');
	}

	function papersForTheme(DATA, themeId) {
		var items = DATA.papers.concat(DATA.extras || []).filter(function (p) { return p.theme === themeId; });
		items.sort(function (a, b) {
			var ya = (typeof a.year === 'number') ? a.year : -1;
			var yb = (typeof b.year === 'number') ? b.year : -1;
			return yb - ya;
		});
		return items;
	}

	function subgroupHTML(DATA, sg) {
		var items = papersForTheme(DATA, sg.id);
		var h = '<div class="sub-group' + (sg.current ? ' current' : '') + '">';
		h += '<div class="sub-hdr">';
		h +=   '<span class="sub-name">' + esc(sg.name) + '</span>';
		h +=   '<span class="sub-meta">' + esc(sg.meta) + '</span>';
		h += '</div>';
		if (sg.alias) h += '<div class="sub-alias">' + esc(sg.alias) + '</div>';
		if (sg.desc) h += '<div class="sub-desc">' + esc(sg.desc) + '</div>';
		h += items.map(paperHTML).join('\n');
		h += '</div>';
		return h;
	}

	function themeHTML(DATA, t) {
		var h = '<div class="theme">';
		h += '<div class="theme-hdr">';
		h +=   '<span class="theme-name">' + esc(t.name) + '</span>';
		h +=   '<span class="theme-meta">' + esc(t.meta) + '</span>';
		h += '</div>';
		if (t.desc) h += '<div class="theme-desc">' + esc(t.desc) + '</div>';
		if (t.subgroups && t.subgroups.length) {
			h += t.subgroups.map(function (sg) { return subgroupHTML(DATA, sg); }).join('\n');
		} else {
			h += papersForTheme(DATA, t.id).map(paperHTML).join('\n');
		}
		h += '</div>';
		return h;
	}

	function renderThemes(DATA, container) {
		container.innerHTML = DATA.structure.map(function (t) { return themeHTML(DATA, t); }).join('\n');
	}

	function renderFlatList(DATA, container) {
		var all = DATA.papers.slice().sort(function (a, b) { return b.year - a.year; });
		var html = '<ul class="pub-list">';
		html += all.map(function (p) { return '<li>' + paperHTML(p) + '</li>'; }).join('\n');
		html += '</ul>';
		container.innerHTML = html;
	}

	function render(DATA) {
		var researchSlot = document.getElementById('research-slot');
		if (researchSlot) renderThemes(DATA, researchSlot);
		var pubSlot = document.getElementById('publications-slot');
		if (pubSlot) renderFlatList(DATA, pubSlot);
	}

	// Load data and render.
	fetch('papers.json')
		.then(function (r) {
			if (!r.ok) throw new Error('HTTP ' + r.status);
			return r.json();
		})
		.then(render)
		.catch(function (err) {
			console.error('Failed to load papers.json:', err);
			var slots = document.querySelectorAll('#research-slot, #publications-slot');
			slots.forEach(function (el) {
				el.innerHTML = '<p style="color:#b91c1c;font-size:13px;padding:12px;background:#fef2f2;border:1px solid #fecaca;border-radius:4px">Couldn\'t load <code>papers.json</code> (likely due to <code>file://</code> CORS). Run <code>python3 -m http.server</code> in the <code>new/</code> folder and open <a href="http://localhost:8000/">http://localhost:8000/</a> instead.</p>';
			});
		});

})();
