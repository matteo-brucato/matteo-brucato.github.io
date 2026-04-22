/*
 * Papers data + renderers. Used by index.html (themed view) and publications.html (flat chronological view).
 * Edit the PAPERS and STRUCTURE arrays below to update everything in one place.
 */

(function () {

	var PAPERS = [

		{
			id: 'decisionhouse',
			year: 2026,
			title: 'Decisionhouse: Prescriptive Analytics in the Data Stack',
			authors: 'Matteo Brucato, Fjodor Kholodkov, Soren Little, Jakob Mayer, Duc Nguyen',
			venue: 'VLDB vision',
			theme: 'decisionhouse-deql'
		},

		{
			id: 'deql-studio',
			year: 2026,
			title: 'DeQL Studio: Declarative Decision-Making over Relational Data',
			authors: 'Matteo Brucato, Fjodor Kholodkov, Soren Little, Jakob Mayer, Duc Nguyen',
			venue: 'VLDB demo',
			theme: 'decisionhouse-deql'
		},

		{
			id: 'intent-synthesis-2026',
			year: 2026,
			title: 'Example-Driven Intent Synthesis for Constrained Data Bundle Retrieval: Focused Text Snippet Extraction and Beyond',
			authors: 'Whanhee Cho, Kuangfei Long, Mahmood Jasim, Matteo Brucato, Alexandra Meliou, Peter Haas, Anna Fariha',
			venue: 'VLDB',
			theme: 'usability'
		},

		{
			id: 'sketchrefine',
			year: 2025,
			title: 'Stochastic SketchRefine: Scaling In-Database Decision-Making under Uncertainty to Millions of Tuples',
			titleHref: 'https://www.vldb.org/pvldb/vol18/p3106-haque.pdf',
			authors: 'Riddho Ridwanul Haque, Anh Mai, Matteo Brucato, Azza Abouzied, Peter Haas, Alexandra Meliou',
			venue: 'VLDB',
			links: [
				{ label: 'Paper', href: 'https://www.vldb.org/pvldb/vol18/p3106-haque.pdf' },
				{ label: 'Extended', href: 'https://arxiv.org/abs/2411.17915' }
			],
			theme: 'spaql'
		},

		{
			id: 'fairnesseval',
			year: 2025,
			title: 'FairnessEval: A Framework for Evaluating Fairness of Machine Learning Models',
			titleHref: 'https://openproceedings.org/2025/conf/edbt/paper-346.pdf',
			authors: 'Andrea Baraldi, Matteo Brucato, Miroslav Dudík, Francesco Guerra, Matteo Interlandi',
			venue: 'EDBT demo',
			links: [ { label: 'Paper', href: 'https://openproceedings.org/2025/conf/edbt/paper-346.pdf' } ],
			theme: 'responsibility'
		},

		{
			id: 'wred',
			year: 2024,
			title: 'Wred: Workload Reduction for Scalable Index Tuning',
			titleHref: 'https://dl.acm.org/doi/abs/10.1145/3639305',
			authors: 'Matteo Brucato, Tarique Siddiqui, Wentao Wu, Vivek Narasayya, Surajit Chaudhuri',
			venue: 'SIGMOD',
			links: [ { label: 'Paper', href: 'https://dl.acm.org/doi/abs/10.1145/3639305' } ],
			theme: 'autotuning'
		},

		{
			id: 'scaling-package-billion',
			year: 2024,
			title: 'Scaling Package Queries to a Billion Tuples via Hierarchical Partitioning and Customized Optimization',
			titleHref: 'https://www.vldb.org/pvldb/vol17/p1146-mai.pdf',
			authors: 'Anh L. Mai, Pengyu Wang, Azza Abouzied, Matteo Brucato, Peter J. Haas, Alexandra Meliou',
			venue: 'VLDB',
			links: [
				{ label: 'Paper', href: 'https://www.vldb.org/pvldb/vol17/p1146-mai.pdf' },
				{ label: 'Extended', href: 'https://arxiv.org/pdf/2307.02860.pdf' }
			],
			theme: 'spaql'
		},

		{
			id: 'tois-ranking',
			year: 2022,
			title: 'Ranking Models for the Temporal Dimension of Text',
			titleHref: 'https://dl.acm.org/doi/pdf/10.1145/3565481',
			authors: 'Stefano Giovanni Rizzo, Matteo Brucato, Danilo Montesi',
			venue: 'ACM TOIS',
			links: [ { label: 'Paper', href: 'https://dl.acm.org/doi/pdf/10.1145/3565481' } ],
			theme: 'temporal'
		},

		{
			id: 'subsume',
			year: 2021,
			title: 'SubSumE: A Dataset for Subjective Summary Extraction from Wikipedia Documents',
			titleHref: 'https://aclanthology.org/2021.newsum-1.14.pdf',
			authors: 'Nishant Yadav, Matteo Brucato, Anna Fariha, Oscar Yongquist, Julian Killingback, Alexandra Meliou, Peter J. Haas',
			venue: 'NewSum @ EMNLP',
			links: [ { label: 'Paper', href: 'https://aclanthology.org/2021.newsum-1.14.pdf' } ],
			theme: 'usability'
		},

		{
			id: 'mdp-abstractions',
			year: 2021,
			title: 'Solving Markov Decision Processes with Partial State Abstractions',
			titleHref: '../files/NSBBGZicra21_cr.pdf',
			authors: 'Samer B. Nashed, Justin Svegliato, Matteo Brucato, Connor Basich, Rod Grupen, Shlomo Zilberstein',
			venue: 'ICRA',
			links: [ { label: 'Paper', href: '../files/NSBBGZicra21_cr.pdf' } ],
			theme: 'algorithms'
		},

		{
			id: 'spaql-tools',
			year: 2020,
			title: 'sPaQLTooLs: A Stochastic Package Query Interface for Scalable Constrained Optimization',
			titleHref: '../files/p1202-brucato.pdf',
			authors: 'Matteo Brucato, Miro Mannino, Azza Abouzied, Peter J. Haas, Alexandra Meliou',
			venue: 'VLDB demo',
			award: 'Best Demo',
			links: [
				{ label: 'Paper', href: '../files/p1202-brucato.pdf' },
				{ label: 'Talk', href: 'https://www.youtube.com/watch?v=1v5KevGKbfE' }
			],
			theme: 'spaql'
		},

		{
			id: 'sudocu',
			year: 2020,
			title: 'SuDocu: Summarizing Documents by Example',
			titleHref: 'https://www.vldb.org/pvldb/vol13/p2861-fariha.pdf',
			authors: 'Anna Fariha, Matteo Brucato, Peter J. Haas, Alexandra Meliou',
			venue: 'VLDB demo',
			award: 'Runner-up Best Demo',
			links: [
				{ label: 'Paper', href: 'https://www.vldb.org/pvldb/vol13/p2861-fariha.pdf' },
				{ label: 'Talk', href: 'https://www.youtube.com/watch?v=ZGzF6cBSYjo' }
			],
			theme: 'usability'
		},

		{
			id: 'spaql-sigmod',
			year: 2020,
			title: 'Stochastic Package Queries in Probabilistic Databases',
			titleHref: 'https://dl.acm.org/doi/10.1145/3318464.3389765',
			authors: 'Matteo Brucato, Nishant Yadav, Azza Abouzied, Peter J. Haas, Alexandra Meliou',
			venue: 'SIGMOD',
			links: [
				{ label: 'Paper', href: '../files/3318464.3389765.pdf' },
				{ label: 'Extended', href: 'https://arxiv.org/pdf/2103.06784.pdf' },
				{ label: 'Talk', href: 'https://www.youtube.com/watch?v=UrEOEplK06I' }
			],
			theme: 'spaql'
		},

		{
			id: 'cacm-paql',
			year: 2019,
			title: 'Scalable Computation of High-Order Optimization Queries',
			titleHref: 'https://cacm.acm.org/magazines/2019/2/234358-scalable-computation-of-high-order-optimization-queries/',
			authors: 'Matteo Brucato, Azza Abouzied, Alexandra Meliou',
			venue: 'CACM',
			award: 'Research Highlight',
			links: [
				{ label: 'Paper', href: '../files/cacm-paql.pdf' },
				{ label: 'Tech Perspective (Chaudhuri)', href: 'https://cacm.acm.org/magazines/2019/2/234345-technical-perspective-to-do-or-not-to-do' }
			],
			theme: 'paql'
		},

		{
			id: 'vldbj-paql',
			year: 2018,
			title: 'Package queries: efficient and scalable computation of high-order constraints',
			titleHref: 'https://doi.org/10.1007/s00778-017-0483-4',
			authors: 'Matteo Brucato, Azza Abouzied, Alexandra Meliou',
			venue: 'VLDBJ',
			links: [
				{ label: 'Pre-print', href: '../files/scalable-paql.pdf' },
				{ label: 'Publication', href: 'https://link.springer.com/' }
			],
			theme: 'paql'
		},

		{
			id: 'sigmod-rec',
			year: 2017,
			title: 'A Scalable Execution Engine for Package Queries',
			titleHref: 'https://sigmodrecord.org/publications/sigmodRecord/1703/pdfs/08_ASalable_RH_Brucato.pdf',
			authors: 'Matteo Brucato, Azza Abouzied, Alexandra Meliou',
			venue: 'SIGMOD Rec.',
			award: 'Research Highlight',
			links: [ { label: 'Paper', href: 'https://sigmodrecord.org/publications/sigmodRecord/1703/pdfs/08_ASalable_RH_Brucato.pdf' } ],
			theme: 'paql'
		},

		{
			id: 'redistributing-funds',
			year: 2017,
			title: 'Redistributing Funds across Charitable Crowdfunding Campaigns',
			titleHref: 'https://arxiv.org/abs/1706.00070',
			authors: 'Matteo Brucato, Azza Abouzied, Chris Blauvelt',
			venue: 'arXiv',
			links: [ { label: 'Paper', href: 'https://arxiv.org/pdf/1706.00070' } ],
			theme: 'paql'
		},

		{
			id: 'paql-vldb-2016',
			year: 2016,
			title: 'Scalable Package Queries in Relational Database Systems',
			titleHref: 'http://www.vldb.org/pvldb/vol9/p576-brucato.pdf',
			authors: 'Matteo Brucato, Juan Felipe Beltran, Azza Abouzied, Alexandra Meliou',
			venue: 'VLDB',
			award: 'Best Papers',
			links: [
				{ label: 'Paper', href: 'http://packagebuilder.cs.umass.edu/papers/p576-brucato.pdf' },
				{ label: 'Extended', href: 'http://arxiv.org/pdf/1512.03564v2.pdf' },
				{ label: 'Slides', href: 'http://packagebuilder.cs.umass.edu/papers/scalable-paql-presentation-share.pdf' },
				{ label: 'Poster', href: 'http://packagebuilder.cs.umass.edu/papers/scalable-paql-poster.pdf' }
			],
			theme: 'paql'
		},

		{
			id: 'query-relaxation',
			year: 2014,
			title: 'Improving Package Recommendations through Query Relaxation',
			titleHref: 'http://dl.acm.org/citation.cfm?id=2658843',
			authors: 'Matteo Brucato, Azza Abouzied, Alexandra Meliou',
			venue: 'Data4U @ VLDB',
			links: [
				{ label: 'Paper', href: 'http://packagebuilder.cs.umass.edu/papers/p3-brucato.pdf' },
				{ label: 'Slides', href: 'http://packagebuilder.cs.umass.edu/papers/package-recomm-slides-web.pdf' }
			],
			theme: 'paql'
		},

		{
			id: 'pkgbuilder-vldb-demo',
			year: 2014,
			title: 'PackageBuilder: From Tuples to Packages',
			titleHref: 'http://www.vldb.org/pvldb/vol7/p1593-brucato.pdf',
			authors: 'Matteo Brucato, Rahul Ramakrishna, Azza Abouzied, Alexandra Meliou',
			venue: 'VLDB demo',
			links: [
				{ label: 'Paper', href: 'http://packagebuilder.cs.umass.edu/papers/p1069-brucato.pdf' },
				{ label: 'Poster', href: 'http://packagebuilder.cs.umass.edu/papers/main-poster.pdf' }
			],
			theme: 'paql'
		},

		{
			id: 'pkgbuilder-sigmod-poster',
			year: 2014,
			title: 'PackageBuilder: Querying for packages of Tuples',
			titleHref: 'http://dl.acm.org/citation.cfm?doid=2588555.2612667',
			authors: 'Kevin Fernandes, Matteo Brucato, Rahul Ramakrishna, Azza Abouzied, Alexandra Meliou',
			venue: 'SIGMOD poster',
			links: [ { label: 'Paper', href: 'http://packagebuilder.cs.umass.edu/papers/p1613-fernandes.pdf' } ],
			theme: 'paql'
		},

		{
			id: 'metric-spaces',
			year: 2014,
			title: 'Metric Spaces for Temporal Information Retrieval',
			titleHref: 'http://link.springer.com/chapter/10.1007/978-3-319-06028-6_32',
			authors: 'Matteo Brucato, Danilo Montesi',
			venue: 'ECIR',
			links: [
				{ label: 'Paper', href: '../files/84160385_e.pdf' },
				{ label: 'Slides', href: '../files/TIR-ECIR14v1_web.pdf' }
			],
			theme: 'temporal'
		},

		{
			id: 'named-temporal',
			year: 2013,
			title: 'Recognising and Interpreting Named Temporal Expressions',
			titleHref: 'https://www.academia.edu/4477889/Recognising_and_Interpreting_Named_Temporal_Expressions',
			authors: 'Matteo Brucato, Leon Derczynski, Hector Llorens, Kalina Bontcheva, Christian S. Jensen',
			venue: 'RANLP',
			award: 'Best Young Researcher Nominee',
			links: [ { label: 'Paper', href: 'http://aclweb.org/anthology/R/R13/R13-1015.pdf' } ],
			theme: 'temporal'
		}

	];

	// Non-paper items (e.g., open-source contributions) that appear in themed view but not in the flat paper list.
	var EXTRAS = [
		{
			title: 'Fairlearn scalability contributions',
			titleHref: 'https://github.com/fairlearn/fairlearn',
			authors: 'Microsoft collaboration — open-source fairness library',
			yearLabel: '—',
			theme: 'responsibility'
		}
	];

	var STRUCTURE = [
		{
			id: 'systems',
			name: 'Data Systems · Query Languages &amp; Engines',
			meta: '2014–present',
			desc: 'How users express decisions and how the system solves them.',
			subgroups: [
				{
					id: 'decisionhouse-deql',
					name: 'Decisionhouse &amp; DeQL',
					meta: '2025–',
					current: true,
					desc: 'A new data-system category. DeQL generalizes the approach to the full space of decision queries.'
				},
				{
					id: 'spaql',
					name: 'Set Selection Under Uncertainty',
					meta: '2020–2025',
					alias: 'a.k.a. Stochastic Package Queries / sPaQL',
					desc: 'Packages over probabilistic data; risk-aware optimization at scale.'
				},
				{
					id: 'paql',
					name: 'Set Selection with Global Constraints',
					meta: '2014–2019',
					alias: 'a.k.a. Package Queries / PaQL / PackageBuilder',
					desc: 'The foundational work — selecting sets of tuples that jointly satisfy ILP-style constraints.'
				}
			]
		},
		{
			id: 'usability',
			name: 'Usability · Learning User Intent',
			meta: '2020–2026',
			desc: 'How systems learn what the user wants — making prescriptive tooling accessible to non-experts.'
		},
		{
			id: 'autotuning',
			name: 'Auto-Tuning · Workload Intelligence',
			meta: '2024',
			desc: 'How databases tune themselves — recommending indexes, compressing workloads.'
		},
		{
			id: 'algorithms',
			name: 'Planning &amp; Sequential Decision-Making',
			meta: '2021',
			desc: 'How classical AI tackles decision-making — abstractions, search, and approximation.'
		},
		{
			id: 'responsibility',
			name: 'Responsibility · Fair &amp; Equitable Decisions',
			meta: '2023–present',
			desc: 'How to keep automated decisions fair and accountable.'
		},
		{
			id: 'temporal',
			name: 'Temporal Reasoning',
			meta: '2013–2022',
			desc: 'How systems understand time in text and queries.'
		}
	];

	// ---- Rendering helpers -------------------------------------------------

	function esc(s) {
		return String(s).replace(/[&<>"]/g, function (c) {
			return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
		});
	}

	function titleHTML(p) {
		var t = esc(p.title);
		if (p.titleHref) {
			return '<a class="title-link" href="' + esc(p.titleHref) + '">' + t + '</a>';
		}
		return '<b>' + t + '</b>';
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
			parts.push('    <span class="venue">' + esc(p.venue) + '</span>');
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

	// Returns papers matching a theme-id or sub-group id, newest first.
	function papersForTheme(themeId) {
		var items = PAPERS.concat(EXTRAS).filter(function (p) { return p.theme === themeId; });
		items.sort(function (a, b) {
			var ya = (typeof a.year === 'number') ? a.year : -1;
			var yb = (typeof b.year === 'number') ? b.year : -1;
			return yb - ya;
		});
		return items;
	}

	function subgroupHTML(sg) {
		var items = papersForTheme(sg.id);
		var h = '<div class="sub-group' + (sg.current ? ' current' : '') + '">';
		h += '<div class="sub-hdr">';
		h +=   '<span class="sub-name">' + sg.name + '</span>';
		h +=   '<span class="sub-meta">' + sg.meta + '</span>';
		h += '</div>';
		if (sg.alias) h += '<div class="sub-alias">' + sg.alias + '</div>';
		if (sg.desc) h += '<div class="sub-desc">' + sg.desc + '</div>';
		h += items.map(paperHTML).join('\n');
		h += '</div>';
		return h;
	}

	function themeHTML(t) {
		var h = '<div class="theme">';
		h += '<div class="theme-hdr">';
		h +=   '<span class="theme-name">' + t.name + '</span>';
		h +=   '<span class="theme-meta">' + t.meta + '</span>';
		h += '</div>';
		if (t.desc) h += '<div class="theme-desc">' + t.desc + '</div>';
		if (t.subgroups && t.subgroups.length) {
			h += t.subgroups.map(subgroupHTML).join('\n');
		} else {
			h += papersForTheme(t.id).map(paperHTML).join('\n');
		}
		h += '</div>';
		return h;
	}

	function renderThemes(container) {
		container.innerHTML = STRUCTURE.map(themeHTML).join('\n');
	}

	function renderFlatList(container) {
		var all = PAPERS.slice().sort(function (a, b) { return b.year - a.year; });
		var html = '<ul class="pub-list">';
		html += all.map(function (p) { return '<li>' + paperHTML(p) + '</li>'; }).join('\n');
		html += '</ul>';
		container.innerHTML = html;
	}

	// ---- Entry points ------------------------------------------------------

	var researchSlot = document.getElementById('research-slot');
	if (researchSlot) renderThemes(researchSlot);

	var pubSlot = document.getElementById('publications-slot');
	if (pubSlot) renderFlatList(pubSlot);

})();
