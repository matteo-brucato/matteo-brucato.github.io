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
		ext:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
		abstract: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="7" x2="19" y2="7"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="17" x2="14" y2="17"/></svg>',
		summary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg>',
		globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
		github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>'
	};

	function iconForLink(l) {
		if (l.icon && ICONS[l.icon]) return ICONS[l.icon];
		var label = String(l.label).toLowerCase();
		if (label.indexOf('github') !== -1) return ICONS.github;
		if (label.indexOf('talk') !== -1 || label.indexOf('video') !== -1) return ICONS.video;
		if (label.indexOf('slide') !== -1) return ICONS.slides;
		if (label.indexOf('poster') !== -1) return ICONS.poster;
		if (label.indexOf('paper') !== -1 || label.indexOf('pre-print') !== -1 || label.indexOf('preprint') !== -1 || label.indexOf('extended') !== -1) return ICONS.paper;
		return ICONS.ext;
	}

	function linksHTML(p) {
		var items = [];
		if (p.summary && !p.highlight) {
			items.push('<button type="button" class="abstract-toggle" data-toggle-target=".summary" aria-expanded="false"><span class="link-icon">' + ICONS.summary + '</span>Summary</button>');
		}
		if (p.abstract) {
			items.push('<button type="button" class="abstract-toggle" data-toggle-target=".abstract" aria-expanded="false"><span class="link-icon">' + ICONS.abstract + '</span>Abstract</button>');
		}
		if (p.links) {
			p.links.forEach(function (l) {
				items.push('<a href="' + esc(l.href) + '"><span class="link-icon">' + iconForLink(l) + '</span>' + esc(l.label) + '</a>');
			});
		}
		if (!items.length) return '';
		return '<span class="links">' + items.join(' ') + '</span>';
	}

	function paperHTML(p) {
		var yearLabel = (p.yearLabel !== undefined) ? p.yearLabel : p.year;
		var metaLeft = ['<span class="yr">' + esc(String(yearLabel)) + '</span>'];
		if (p.venue) {
			var venueInner = p.venueHref
				? '<a href="' + esc(p.venueHref) + '">' + esc(p.venue) + '</a>'
				: esc(p.venue);
			if (p.category) {
				venueInner += ' <span class="category">' + esc(p.category) + '</span>';
			}
			if (p.workshop) {
				venueInner += ' <span class="workshop">(' + esc(p.workshop) + ')</span>';
			}
			metaLeft.push('<span class="venue">' + venueInner + '</span>');
		}
		if (p.status) {
			metaLeft.push('<span class="status">' + esc(p.status) + '</span>');
		}
		if (p.award) {
			metaLeft.push('<span class="award">' + esc(p.award) + '</span>');
		}

		var parts = [
			'<div class="paper' + (p.highlight ? ' highlight' : '') + '">',
			'  <div class="meta-left">' + metaLeft.join('') + '</div>',
			'  <span class="title">',
			'    ' + titleHTML(p)
		];
		if (p.summary && p.highlight) {
			parts.push('    <span class="summary">' + esc(p.summary) + '</span>');
		}
		if (p.authors) {
			parts.push('    <span class="authors">' + esc(p.authors) + '</span>');
		}
		if (p.venueFull) {
			parts.push('    <span class="venue-full">' + esc(p.venueFull) + '</span>');
		}
		if ((p.links && p.links.length) || p.abstract || (p.summary && !p.highlight)) {
			parts.push('    ' + linksHTML(p));
		}
		if (p.summary && !p.highlight) {
			parts.push('    <span class="summary" hidden>' + esc(p.summary) + '</span>');
		}
		if (p.abstract) {
			parts.push('    <div class="abstract" hidden>' + esc(p.abstract) + '</div>');
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
		html += all.map(function (p) {
			return '<li' + (p.highlight ? ' class="highlight"' : '') + '>' + paperHTML(p) + '</li>';
		}).join('\n');
		html += '</ul>';
		container.innerHTML = html;
	}

	function render(DATA) {
		var researchSlot = document.getElementById('research-slot');
		if (researchSlot) renderThemes(DATA, researchSlot);
		var pubSlot = document.getElementById('publications-slot');
		if (pubSlot) renderFlatList(DATA, pubSlot);
	}

	// Toggle abstract / summary panels (event delegation).
	document.addEventListener('click', function (e) {
		var btn = e.target.closest && e.target.closest('.abstract-toggle');
		if (!btn) return;
		var selector = btn.getAttribute('data-toggle-target') || '.abstract';
		var title = btn.closest('.title');
		var panel = title && title.querySelector(selector);
		if (!panel) return;
		var open = panel.hasAttribute('hidden');
		if (open) {
			panel.removeAttribute('hidden');
			btn.setAttribute('aria-expanded', 'true');
		} else {
			panel.setAttribute('hidden', '');
			btn.setAttribute('aria-expanded', 'false');
		}
	});

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
