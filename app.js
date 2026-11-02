(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   *  Constants
   * ------------------------------------------------------------------ */
  var D = window.RS_DATA;
  var KEY = 'rs-revision-v1';
  var DAY = 864e5;
  var CONF = ['Not started', 'Weak', 'Getting there', 'Secure'];
  var INTERVAL = [0, 1, 3, 7]; // days before an item is "due" again, by confidence
  var TYPE_LABEL = {
    recall: 'Recall key knowledge',
    why: 'Why was it developed?',
    define: 'Key terms',
    evaluate: 'Evaluate / discuss',
    compare: 'Compare',
    who: 'Who said it?'
  };
  var MINUTES = { recall: 6, why: 6, define: 3, evaluate: 25, compare: 15, who: 1 };
  var TIPS = {
    recall: 'AO1: be accurate, precise and selective. Name the thinker and the work, use technical terms, and develop each point (point → evidence → why it matters) rather than listing.',
    why: 'Link context to content. Say what problem or opponent the idea responded to, what influenced it, and how that shaped the idea (use "in response to…", "because…", "this led him to…").',
    define: 'Define precisely in one sentence, then show significance: how the term does work inside the argument. A short example or scholar reference lifts a definition to top band.',
    evaluate: 'AO2: state a line of argument in your first paragraph. Weigh strengths against criticisms, set scholar against scholar, and reach a justified judgement that says which point matters most and why. Avoid "some people say".',
    compare: 'Organise by theme, not by thinker. Find a real similarity and a real difference, then judge which approach is more convincing and justify it with a criticism or response.',
    who: 'Name the thinker and, where you can, the work, date and the problem they were addressing.'
  };
  var GENERIC = [
    'Accurate, relevant knowledge with correct technical vocabulary',
    'Named the key thinker(s) and work(s) involved',
    'Explained the reasoning, not just stated the conclusion',
    'Used an example, quotation reference or scholar response',
    'Reached a clear, justified conclusion or judgement'
  ];

  /* ------------------------------------------------------------------ *
   *  State
   * ------------------------------------------------------------------ */
  function blank() {
    return { conf: {}, last: {}, notes: {}, custom: [], hist: [], examDate: '' };
  }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === 'object') return Object.assign(blank(), s);
    } catch (e) { /* ignore */ }
    return blank();
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { toast('Could not save: browser storage is blocked.'); }
  }

  var ui = { topic: 'all', conf: 'all', search: '' };
  var cfg = { topics: null, types: Object.keys(TYPE_LABEL), focus: 'weakest', count: 10 };
  var sess = null;
  var timerH = null;
  var saveNotesH = null;

  /* ------------------------------------------------------------------ *
   *  Helpers
   * ------------------------------------------------------------------ */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function uid() { return 'c-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function items() { return D.cards.concat(state.custom); }
  function byId(id) { return items().filter(function (i) { return i.id === id; })[0]; }
  function conf(id) { return state.conf[id] || 0; }
  function topics() {
    var t = D.topics.slice();
    state.custom.forEach(function (c) { if (t.indexOf(c.topic) < 0) t.push(c.topic); });
    return t;
  }
  function localDay(ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function relTime(ts) {
    if (!ts) return 'Not practised yet';
    var d = Math.floor((Date.now() - ts) / DAY);
    if (localDay(ts) === localDay(Date.now())) return 'Practised today';
    if (d <= 1) return 'Practised yesterday';
    return 'Practised ' + d + ' days ago';
  }
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._h);
    toast._h = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }
  function lines(s) {
    return String(s || '').split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
  }
  function hasContent(i) {
    return !!((i.summary && i.summary.length) || (state.notes[i.id] && state.notes[i.id].trim()));
  }
  function dueRatio(i) {
    var c = conf(i.id), last = state.last[i.id];
    if (!last) return c === 0 ? 0.5 : 2;
    var days = (Date.now() - last) / DAY;
    return days / Math.max(INTERVAL[c], 0.25);
  }
  function calcStreak() {
    var days = {};
    state.hist.forEach(function (h) { days[localDay(h.ts)] = 1; });
    var n = 0, d = Date.now();
    if (!days[localDay(d)]) d -= DAY;
    while (days[localDay(d)]) { n++; d -= DAY; }
    return n;
  }
  function daysToExam() {
    if (!state.examDate) return null;
    var t = new Date(state.examDate + 'T00:00:00');
    if (isNaN(t)) return null;
    var now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((t - now) / DAY);
  }
  function mastery(list) {
    if (!list.length) return 0;
    var s = list.reduce(function (a, i) { return a + conf(i.id); }, 0);
    return Math.round(s / (3 * list.length) * 100);
  }
  function topicAccuracy(topic) {
    var ids = {};
    items().filter(function (i) { return i.topic === topic; }).forEach(function (i) { ids[i.id] = 1; });
    var recent = state.hist.filter(function (h) { return ids[h.id]; }).slice(-20);
    var max = recent.reduce(function (a, h) { return a + h.max; }, 0);
    var got = recent.reduce(function (a, h) { return a + h.got; }, 0);
    return max ? Math.round(got / max * 100) : null;
  }
  function keepScroll(fn) {
    var y = window.scrollY;
    fn();
    window.scrollTo(0, y);
  }

  /* ------------------------------------------------------------------ *
   *  Question generator
   * ------------------------------------------------------------------ */
  function qname(i) { return i.q || i.title; }

  function sameTopicOthers(i) {
    return items().filter(function (o) { return o.id !== i.id && o.topic === i.topic && o.summary && o.summary.length; });
  }

  function availableTypes(i, selected) {
    var rich = !!(i.summary && i.summary.length);
    var ok = ['recall', 'evaluate'];
    if (i.why && i.why.length) ok.push('why');
    if (i.terms && i.terms.length) ok.push('define');
    if (rich && sameTopicOthers(i).length) ok.push('compare');
    if (rich && i.thinker) ok.push('who');
    var out = ok.filter(function (t) { return selected.indexOf(t) >= 0; });
    return out.length ? out : ['recall'];
  }

  function notePoints(i, kind) {
    var n = lines(state.notes[i.id]);
    if (n.length) return n.map(function (t) { return { k: kind || 'Your note', t: t }; });
    return GENERIC.map(function (t) { return { k: 'Check', t: t }; });
  }

  function makeQ(i, type) {
    var q = qname(i), pts = [], prompt = '', ref = null;
    var th = i.thinker || '';
    if (type === 'recall') {
      prompt = pick([
        'Outline the key features of ' + q + '.',
        'Explain the main ideas of ' + q + '.',
        'Set out, with reference to the key terms, what you know about ' + q + '.'
      ]);
      pts = (i.summary && i.summary.length)
        ? i.summary.map(function (t) { return { k: 'Knowledge', t: t }; })
        : notePoints(i);
    } else if (type === 'why') {
      prompt = pick(th ? [
        'Explain why ' + th + ' put forward ' + q + '.',
        'Explain the problem that ' + q + ' (' + th + ') was designed to solve.',
        'Why was ' + q + ' developed? Refer to the context and the thinker\'s aims.'
      ] : [
        'Explain why ' + q + ' was developed.',
        'Explain the problem that ' + q + ' was designed to solve.'
      ]);
      pts = i.why.map(function (t) { return { k: 'Context', t: t }; });
      pts.push({ k: 'Link', t: 'Connected the context to the actual content of the idea (not just a list of background facts)' });
    } else if (type === 'define') {
      var term = pick(i.terms);
      prompt = pick([
        'Define \u2018' + term.t + '\u2019 and explain its importance for ' + q + '.',
        'What is meant by \u2018' + term.t + '\u2019? Explain how it is used in ' + q + '.'
      ]);
      pts = [
        { k: 'Definition', t: term.t + ': ' + term.d },
        { k: 'Link', t: 'Explained the role of the term within ' + q + ' (not just defined it)' },
        { k: 'Support', t: 'Gave an example, quotation reference or scholar link' }
      ];
    } else if (type === 'evaluate') {
      prompt = pick([
        'Evaluate the strengths and weaknesses of ' + q + '.',
        'To what extent is ' + q + ' convincing?',
        '\u2018' + cap(q) + ' fails.\u2019 Discuss.',
        'Assess the view that ' + q + ' is a successful response to the problem it addresses.'
      ]);
      var s = (i.strengths || []).map(function (t) { return { k: 'Strength', t: t }; });
      var w = (i.weaknesses || []).map(function (t) { return { k: 'Criticism', t: t }; });
      pts = s.concat(w);
      if (!pts.length) pts = notePoints(i);
      pts.push({ k: 'A* skill', t: 'Used at least one scholar\u2019s response or counter-argument to develop a point' });
      pts.push({ k: 'A* skill', t: 'Reached a justified judgement that weighs which strength or criticism matters most and why' });
    } else if (type === 'compare') {
      var o = pick(sameTopicOthers(i));
      prompt = pick([
        'Compare ' + q + ' with ' + qname(o) + '. Which is more convincing?',
        'Analyse the similarities and differences between ' + q + ' and ' + qname(o) + '.'
      ]);
      pts = i.summary.slice(0, 2).map(function (t) { return { k: i.title, t: t }; })
        .concat(o.summary.slice(0, 2).map(function (t) { return { k: o.title, t: t }; }));
      pts.push({ k: 'Analysis', t: 'Identified a genuine similarity (shared aim, assumption or method)' });
      pts.push({ k: 'Analysis', t: 'Identified a significant difference and explained why it matters' });
      pts.push({ k: 'Judgement', t: 'Reached and justified a conclusion about which is more convincing, using a criticism or response' });
    } else if (type === 'who') {
      prompt = 'Which thinker (or thinkers) is associated with this idea? Name them and the work if you can.\n\n\u201c' + i.summary[0] + '\u201d';
      pts = [{ k: 'Thinker', t: th }];
      var ctx = (i.why && i.why[0]) || i.summary[1];
      if (ctx) pts.push({ k: 'Context', t: ctx });
    }
    return { item: i, type: type, prompt: prompt, points: pts, tip: TIPS[type], mins: MINUTES[type] };
  }

  function buildSession(opts) {
    var pool;
    if (opts.ids) {
      pool = opts.ids.map(byId).filter(Boolean);
    } else {
      pool = items().filter(function (i) { return opts.topics.indexOf(i.topic) >= 0; });
      if (opts.focus === 'weakest') {
        pool = shuffle(pool).sort(function (a, b) { return conf(a.id) - conf(b.id); });
      } else if (opts.focus === 'due') {
        pool = shuffle(pool).sort(function (a, b) { return dueRatio(b) - dueRatio(a); });
      } else {
        pool = shuffle(pool);
      }
    }
    if (!pool.length) return null;
    var used = {}, qs = [], lastType = null;
    for (var n = 0; n < opts.count; n++) {
      var it = pool[n % pool.length];
      var types = shuffle(availableTypes(it, opts.types));
      var t = types.filter(function (x) { return !used[it.id + x] && x !== lastType; })[0]
        || types.filter(function (x) { return !used[it.id + x]; })[0]
        || types[0];
      used[it.id + t] = 1; lastType = t;
      qs.push(makeQ(it, t));
    }
    return { stage: 'run', qs: qs, i: 0, results: [], revealed: false, ticks: [], qStart: Date.now() };
  }

  /* ------------------------------------------------------------------ *
   *  Views
   * ------------------------------------------------------------------ */
  var VIEWS = { dashboard: dashboard, tracker: tracker, practice: practice, data: dataView };

  function render() {
    var r = (location.hash.replace(/^#\/?/, '') || 'dashboard');
    if (!VIEWS[r]) r = 'dashboard';
    clearInterval(timerH);
    $$('nav a').forEach(function (a) {
      a.setAttribute('aria-current', a.dataset.route === r ? 'page' : 'false');
    });
    $('#view').innerHTML = VIEWS[r]();
    if (r === 'practice') startTimer();
    if (r === 'data') fillTopicList();
    document.title = cap(r === 'tracker' ? 'spec tracker' : r) + ' \u00b7 A Level RS Revision';
  }

  /* ---------- Dashboard ---------- */
  function dashboard() {
    var all = items(), n = all.length;
    var pct = mastery(all);
    var secure = all.filter(function (i) { return conf(i.id) === 3; }).length;
    var started = all.filter(function (i) { return conf(i.id) > 0; }).length;
    var streak = calcStreak();
    var exam = daysToExam();

    var tl = topics().map(function (t) {
      var list = all.filter(function (i) { return i.topic === t; });
      var c = [0, 0, 0, 0];
      list.forEach(function (i) { c[conf(i.id)]++; });
      var acc = topicAccuracy(t);
      var seg = c.map(function (v, k) {
        return v ? '<i class="b' + k + '" style="width:' + (v / list.length * 100) + '%" title="' + CONF[k] + ': ' + v + '"></i>' : '';
      }).join('');
      return '<div class="topic-line"><div class="meta"><strong>' + esc(t) + '</strong><span class="muted">' +
        c[3] + '/' + list.length + ' secure' + (acc != null ? ' \u00b7 recent accuracy ' + acc + '%' : '') +
        '</span></div><div class="bar" role="img" aria-label="' + esc(t) + ': ' + CONF.map(function (nm, k) { return c[k] + ' ' + nm; }).join(', ') + '">' + seg + '</div></div>';
    }).join('');

    // due list
    var started2 = all.filter(function (i) { return conf(i.id) > 0 && dueRatio(i) >= 1; })
      .sort(function (a, b) { return conf(a.id) - conf(b.id) || dueRatio(b) - dueRatio(a); });
    var fresh = all.filter(function (i) { return conf(i.id) === 0; });
    var due = started2.slice(0, 5).concat(fresh.slice(0, Math.max(0, 6 - Math.min(5, started2.length))));
    var dueHtml = due.length ? '<ul class="list">' + due.map(function (i) {
      var c = conf(i.id);
      return '<li><div><div class="t">' + esc(i.title) + '</div><div class="s">' + esc(i.topic) + ' \u00b7 ' +
        (c === 0 ? 'new' : relTime(state.last[i.id]).toLowerCase()) + '</div></div>' +
        '<button class="btn small" data-action="practise-one" data-id="' + i.id + '">Practise</button></li>';
    }).join('') + '</ul>' : '<p class="muted">Nothing due. Nicely done \u2013 try a full mixed session in Practice.</p>';

    // 14-day chart
    var counts = [], max = 1;
    for (var d = 13; d >= 0; d--) {
      var key = localDay(Date.now() - d * DAY);
      var c2 = state.hist.filter(function (h) { return localDay(h.ts) === key; }).length;
      counts.push(c2); if (c2 > max) max = c2;
    }
    var chart = counts.map(function (v) {
      return '<div class="' + (v ? '' : 'zero') + '" style="height:' + (v ? Math.max(8, v / max * 100) : 3) + '%" title="' + v + ' question' + (v === 1 ? '' : 's') + '"></div>';
    }).join('');

    // focus suggestion
    var weakTopic = null, weakScore = 101;
    topics().forEach(function (t) {
      var list = all.filter(function (i) { return i.topic === t; });
      var m = mastery(list);
      if (list.length && m < weakScore) { weakScore = m; weakTopic = t; }
    });

    var recent = state.hist.slice(-6).reverse().map(function (h) {
      var it = byId(h.id);
      return '<li><div><div class="t">' + esc(it ? it.title : 'Removed item') + '</div><div class="s">' +
        esc(TYPE_LABEL[h.type] || h.type) + '</div></div><span class="pill ' + (h.got / h.max >= .8 ? 'c3' : h.got / h.max >= .5 ? 'c2' : 'c1') + '">' + h.got + '/' + h.max + '</span></li>';
    }).join('');

    return '<div class="page-head"><div><h1>Revision dashboard</h1><p>' +
      (started ? 'You have started ' + started + ' of ' + n + ' spec points.' : 'Start by rating where you are in the Spec tracker, then practise.') +
      '</p></div><div><a class="btn primary" href="#/practice">Start practising</a></div></div>' +
      '<div class="stats">' +
      '<div class="card stat"><div class="ring" style="--p:' + pct + '"><span>' + pct + '%</span></div><div class="num">' + secure + '/' + n + '</div><div class="lbl">Spec points secure</div></div>' +
      '<div class="card stat"><div class="num">' + state.hist.length + '</div><div class="lbl">Questions answered</div></div>' +
      '<div class="card stat"><div class="num">' + streak + '</div><div class="lbl">Day streak</div></div>' +
      '<div class="card stat"><div class="num">' + (exam == null ? '\u2013' : exam < 0 ? 'Done' : exam) + '</div><div class="lbl">' +
      (exam == null ? 'Set exam date in Data' : 'Days to exam') + '</div></div></div>' +
      '<div class="two-col"><section class="card"><h2>Progress by topic</h2>' + tl +
      '<div class="legend">' + CONF.map(function (nm, k) { return '<span style="--k:var(--c' + k + ')">' + nm + '</span>'; }).join('') + '</div>' +
      (weakTopic && started ? '<p class="small muted" style="margin-top:1rem">Weakest topic right now: <strong>' + esc(weakTopic) + '</strong>.</p>' : '') +
      '</section><div><section class="card" style="margin-bottom:1rem"><h2>Review next</h2>' + dueHtml + '</section>' +
      '<section class="card" style="margin-bottom:1rem"><h2>Last 14 days</h2><div class="chart" role="img" aria-label="Questions answered per day for the last 14 days">' + chart + '</div></section>' +
      (recent ? '<section class="card"><h2>Recent answers</h2><ul class="list">' + recent + '</ul></section>' : '') +
      '</div></div>';
  }

  /* ---------- Tracker ---------- */
  function cardHtml(i) {
    var out = '<div class="kn">';
    function sec(title, arr) {
      if (arr && arr.length) out += '<h5>' + title + '</h5><ul>' + arr.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
    }
    sec('Key knowledge', i.summary);
    sec('Why it was developed', i.why);
    if (i.terms && i.terms.length) {
      out += '<h5>Key terms</h5><dl>' + i.terms.map(function (t) { return '<dt>' + esc(t.t) + '</dt><dd>' + esc(t.d) + '</dd>'; }).join('') + '</dl>';
    }
    sec('Strengths', i.strengths);
    sec('Weaknesses and criticisms', i.weaknesses);
    if (!(i.summary && i.summary.length)) {
      out += '<p class="muted small">No key knowledge stored for this spec point. Add your own notes below: they become the mark scheme for generated questions.</p>';
    }
    return out + '</div>';
  }

  function rowHtml(i) {
    var c = conf(i.id);
    return '<article class="row" data-id="' + i.id + '" data-conf="' + c + '">' +
      '<div class="row-head"><div><h4>' + esc(i.title) + '</h4>' + (i.thinker ? '<p class="who">' + esc(i.thinker) + '</p>' : '') + '</div>' +
      '<div class="seg" role="group" aria-label="Confidence for ' + esc(i.title) + '">' +
      CONF.map(function (nm, v) { return '<button type="button" data-action="conf" data-id="' + i.id + '" data-v="' + v + '" aria-pressed="' + (v === c) + '">' + nm + '</button>'; }).join('') +
      '</div></div>' +
      '<div class="row-foot"><span class="muted small last">' + relTime(state.last[i.id]) + '</span><span class="grow"></span>' +
      (i.custom ? '<button class="btn small danger" data-action="delete-custom" data-id="' + i.id + '">Delete</button>' : '') +
      '<button class="btn small" data-action="practise-one" data-id="' + i.id + '">Practise this</button></div>' +
      '<details><summary>Key knowledge and my notes</summary>' + cardHtml(i) +
      '<label style="margin-top:1rem">My notes <textarea data-notes="' + i.id + '" placeholder="Your own examples, quotes, scholar names, links to other topics\u2026">' + esc(state.notes[i.id] || '') + '</textarea></label>' +
      '</details></article>';
  }

  function trackerList() {
    var q = ui.search.toLowerCase();
    var list = items().filter(function (i) {
      return (ui.topic === 'all' || i.topic === ui.topic) &&
        (ui.conf === 'all' || String(conf(i.id)) === ui.conf) &&
        (!q || (i.title + ' ' + (i.thinker || '') + ' ' + i.topic).toLowerCase().indexOf(q) >= 0);
    });
    if (!list.length) return '<div class="card empty">No spec points match. Clear the filters or add your own.</div>';
    return topics().map(function (t) {
      var g = list.filter(function (i) { return i.topic === t; });
      if (!g.length) return '';
      var all = items().filter(function (i) { return i.topic === t; });
      return '<section class="group"><h3>' + esc(t) + '<small>' + all.filter(function (i) { return conf(i.id) === 3; }).length + '/' + all.length + ' secure \u00b7 ' + mastery(all) + '% mastery</small></h3>' +
        g.map(rowHtml).join('') + '</section>';
    }).join('');
  }

  function tracker() {
    return '<div class="page-head"><div><h1>Specification tracker</h1><p>Rate each spec point honestly. Be strict: "Secure" means you could write it from memory under timed conditions.</p></div>' +
      '<div><button class="btn primary" data-action="open-add">+ Add spec point</button></div></div>' +
      '<div class="filters">' +
      '<label>Search<input type="search" data-ui="search" value="' + esc(ui.search) + '" placeholder="Thinker, idea or topic\u2026"></label>' +
      '<label>Topic<select data-ui="topic"><option value="all">All topics</option>' +
      topics().map(function (t) { return '<option' + (ui.topic === t ? ' selected' : '') + ' value="' + esc(t) + '">' + esc(t) + '</option>'; }).join('') + '</select></label>' +
      '<label>Confidence<select data-ui="conf"><option value="all">All</option>' +
      CONF.map(function (nm, v) { return '<option' + (ui.conf === String(v) ? ' selected' : '') + ' value="' + v + '">' + nm + '</option>'; }).join('') + '</select></label>' +
      '<button class="btn" data-action="clear-filters">Clear</button></div>' +
      '<div id="tlist">' + trackerList() + '</div>';
  }

  /* ---------- Practice ---------- */
  function practice() {
    if (sess && sess.stage === 'run') return practiceRun();
    if (sess && sess.stage === 'done') return practiceDone();
    return practiceSetup();
  }

  function practiceSetup() {
    var tps = topics();
    if (!cfg.topics) cfg.topics = tps.slice();
    cfg.topics = cfg.topics.filter(function (t) { return tps.indexOf(t) >= 0; });
    return '<div class="page-head"><div><h1>Practice</h1><p>Generate exam-style questions, write your answer, then self-mark against the mark scheme.</p></div></div>' +
      '<form class="card" id="setup">' +
      '<h2>Topics</h2><div class="chips">' + tps.map(function (t) {
        return '<label class="chip"><input type="checkbox" name="topic" value="' + esc(t) + '"' + (cfg.topics.indexOf(t) >= 0 ? ' checked' : '') + '><span>' + esc(t) + '</span></label>';
      }).join('') + '</div>' +
      '<h2>Question types</h2><div class="chips">' + Object.keys(TYPE_LABEL).map(function (k) {
        return '<label class="chip"><input type="checkbox" name="type" value="' + k + '"' + (cfg.types.indexOf(k) >= 0 ? ' checked' : '') + '><span>' + TYPE_LABEL[k] + '</span></label>';
      }).join('') + '</div>' +
      '<div class="setup-grid"><label>Choose spec points by<select name="focus">' +
      [['weakest', 'Weakest first'], ['due', 'Most due for review'], ['random', 'Random']].map(function (o) { return '<option value="' + o[0] + '"' + (cfg.focus === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></label><label>Number of questions<select name="count">' +
      [5, 10, 15, 20].map(function (n) { return '<option' + (cfg.count === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></label></div>' +
      '<button class="btn primary" type="submit" data-action="start">Start session</button></form>' +
      '<section class="card" style="margin-top:1rem"><h2>How to score top marks</h2><div class="kn"><ul>' +
      '<li><strong>AO1 (knowledge):</strong> accurate, specific and selective. Named thinkers, works, technical terms; develop each point rather than list.</li>' +
      '<li><strong>AO2 (evaluation):</strong> a line of argument from paragraph one, scholars set against each other, and a judgement that weighs why one point outweighs another.</li>' +
      '<li><strong>Self-marking:</strong> only tick a point if you could see it in your written answer. Writing the answer first is what makes recall stick.</li>' +
      '<li><strong>Spacing:</strong> the tracker schedules reviews at 1, 3 and 7 days as your confidence rises. Getting a point wrong brings it back sooner.</li></ul></div></section>';
  }

  function practiceRun() {
    var s = sess, q = s.qs[s.i];
    var done = s.i, total = s.qs.length;
    var html = '<div class="page-head"><div><h1>Practice</h1></div><div><button class="btn" data-action="end-session">End session</button></div></div>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + done + '"><i style="width:' + (done / total * 100) + '%"></i></div>' +
      '<section class="card qcard"><div class="qmeta"><span class="pill">Q' + (s.i + 1) + ' of ' + total + '</span><span>' + esc(q.item.topic) + '</span><span>' + TYPE_LABEL[q.type] + '</span>' +
      '<span>\u23f1 <span class="timer" id="timer">0:00</span> / suggested ' + q.mins + ' min</span></div>' +
      '<h2 class="qprompt">' + esc(q.prompt) + '</h2>' +
      '<label>Your answer<textarea id="ans" rows="' + (q.type === 'evaluate' || q.type === 'compare' ? 10 : 5) + '" placeholder="Write your answer here. Writing it out (even in note form) is what makes recall stick. It is not stored or sent anywhere."></textarea></label>';
    if (!s.revealed) {
      html += '<div class="actions"><button class="btn primary" data-action="reveal">Show mark scheme</button><button class="btn ghost" data-action="skip">Skip</button></div>';
    } else {
      var ticked = s.ticks.filter(Boolean).length, max = q.points.length;
      html += '<div class="tip"><strong>A* technique.</strong> ' + esc(q.tip) + '</div>' +
        '<h3>Mark yourself honestly</h3><p class="muted small">Tick each point you made (or clearly implied) in your answer.</p>' +
        q.points.map(function (p, idx) {
          return '<label class="check"><input type="checkbox" data-pt="' + idx + '"' + (s.ticks[idx] ? ' checked' : '') + '><span><span class="k">' + esc(p.k) + ':</span>' + esc(p.t) + '</span></label>';
        }).join('') +
        '<div class="scorebar"><span id="score">' + ticked + '/' + max + '</span><div class="bar"><i class="b3" id="scorebar" style="width:' + (ticked / max * 100) + '%"></i></div></div>' +
        '<div class="actions"><button class="btn primary" data-action="next">' + (s.i + 1 >= total ? 'Save and finish' : 'Save and next') + '</button></div>';
    }
    return html + '</section>';
  }

  function practiceDone() {
    var s = sess;
    var got = 0, max = 0;
    s.results.forEach(function (r) { if (!r.skipped) { got += r.got; max += r.max; } });
    var pct = max ? Math.round(got / max * 100) : 0;
    var weak = s.results.filter(function (r) { return !r.skipped && r.got / r.max < 0.6; });
    return '<div class="page-head"><div><h1>Session complete</h1></div></div>' +
      '<section class="card"><div class="big-score">' + pct + '%</div><p class="muted">' + got + ' of ' + max + ' marks self-awarded across ' + s.results.filter(function (r) { return !r.skipped; }).length + ' questions.' +
      (weak.length ? ' ' + weak.length + ' question' + (weak.length === 1 ? '' : 's') + ' below 60%: those spec points have been flagged to come back sooner.' : ' Strong session.') + '</p>' +
      s.results.map(function (r) {
        var it = byId(r.id);
        return '<div class="result-row"><div><strong>' + esc(it ? it.title : '') + '</strong><div class="small muted">' + TYPE_LABEL[r.type] + '</div></div>' +
          '<span class="pill ' + (r.skipped ? 'c0' : r.got / r.max >= .8 ? 'c3' : r.got / r.max >= .5 ? 'c2' : 'c1') + '">' + (r.skipped ? 'Skipped' : r.got + '/' + r.max) + '</span></div>';
      }).join('') +
      '<div class="actions"><button class="btn primary" data-action="restart">New session</button><a class="btn" href="#/tracker">Review spec tracker</a><a class="btn" href="#/dashboard">Dashboard</a></div></section>';
  }

  function startTimer() {
    var el = $('#timer');
    if (!el || !sess || sess.stage !== 'run') return;
    var q = sess.qs[sess.i];
    function tick() {
      var sec = Math.floor((Date.now() - sess.qStart) / 1000);
      el.textContent = Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);
      el.classList.toggle('over', sec > q.mins * 60);
    }
    tick();
    timerH = setInterval(tick, 1000);
  }

  function finishQ(skip) {
    var s = sess, q = s.qs[s.i];
    var got = skip ? 0 : s.ticks.filter(Boolean).length;
    var max = q.points.length;
    s.results.push({ id: q.item.id, type: q.type, got: got, max: max, skipped: !!skip });
    if (!skip) {
      var pct = got / max;
      var target = pct >= .8 ? 3 : pct >= .6 ? 2 : 1;
      var c = conf(q.item.id);
      if (target > c) c = c + 1; else if (target < c) c = c - 1;
      state.conf[q.item.id] = Math.max(1, c);
      state.last[q.item.id] = Date.now();
      state.hist.push({ ts: Date.now(), id: q.item.id, type: q.type, got: got, max: max });
      if (state.hist.length > 1500) state.hist = state.hist.slice(-1500);
      save();
    }
    s.i++;
    s.revealed = false; s.ticks = []; s.qStart = Date.now();
    if (s.i >= s.qs.length) s.stage = 'done';
    render();
    window.scrollTo(0, 0);
  }

  /* ---------- Data ---------- */
  function dataView() {
    var n = items().length;
    return '<div class="page-head"><div><h1>Data and settings</h1><p>Everything lives in this browser. Export regularly, especially before clearing site data.</p></div></div>' +
      '<div class="data-grid">' +
      '<section class="card"><h3>Exam date</h3><label>Final exam (for the countdown)<input type="date" id="exam" value="' + esc(state.examDate) + '"></label><p class="muted small">Optional. Shown on the dashboard.</p></section>' +
      '<section class="card"><h3>Back up and restore</h3><p class="muted small">Exports your confidence ratings, notes, history and custom spec points as a JSON file.</p>' +
      '<div class="actions" style="margin-top:0"><button class="btn primary" data-action="export">Export progress</button>' +
      '<label class="btn" style="margin:0">Import progress<input type="file" id="import-file" accept="application/json,.json" hidden></label></div></section>' +
      '<section class="card" style="grid-column:1/-1"><h3>Import your specification</h3>' +
      '<p class="muted small">Paste your exam board\u2019s specification content, one point per line. Lines starting with <code>#</code> become topic headings; bullet lines become spec points (optionally <code>Title | Thinker</code>). Each becomes trackable and generates questions from your own notes.</p>' +
      '<label>Specification text<textarea id="spec-text" rows="8" placeholder="# Religious Language\n- Via negativa | Maimonides\n- Aquinas\u2019 analogy | Aquinas\n\n# Ethics\n- Natural Law | Aquinas"></textarea></label>' +
      '<div class="actions" style="margin-top:0"><button class="btn primary" data-action="import-spec">Add to tracker</button><button class="btn" data-action="open-add">Add a single point with full detail</button></div></section>' +
      '<section class="card"><h3>Reset</h3><p class="muted small">' + n + ' spec points (' + state.custom.length + ' custom). Resetting clears ratings, notes, history and custom points.</p>' +
      '<button class="btn danger" data-action="reset">Reset all progress</button></section></div>';
  }

  function fillTopicList() { /* topic datalist in the add dialog is filled on open */ }

  function parseSpec(text) {
    var topic = 'Imported spec', out = [];
    String(text || '').split(/\r?\n/).forEach(function (line) {
      var l = line.trim();
      if (!l) return;
      var h = l.match(/^#{1,6}\s+(.*)$/);
      if (h) { topic = h[1].trim() || topic; return; }
      var b = l.replace(/^(?:[-*\u2022]|\d+[.)])\s+/, '').trim();
      if (!b) return;
      var parts = b.split('|').map(function (s) { return s.trim(); });
      out.push({ id: uid(), topic: topic, title: parts[0], q: parts[0], thinker: parts[1] || '', custom: true });
    });
    return out;
  }

  /* ------------------------------------------------------------------ *
   *  Events
   * ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-action]');
    if (!b) return;
    var a = b.dataset.action, id = b.dataset.id;

    if (a === 'conf') {
      var v = +b.dataset.v;
      state.conf[id] = v;
      if (v > 0 && !state.last[id]) { /* leave last untouched: rating is not practice */ }
      save();
      var row = b.closest('.row');
      row.dataset.conf = v;
      $$('.seg button', row).forEach(function (x) { x.setAttribute('aria-pressed', String(+x.dataset.v === v)); });
      return;
    }
    if (a === 'practise-one') {
      var s = buildSession({ ids: [id], count: 4, types: Object.keys(TYPE_LABEL) });
      if (!s) return;
      sess = s;
      location.hash = '#/practice';
      render();
      window.scrollTo(0, 0);
      return;
    }
    if (a === 'start') {
      e.preventDefault();
      var f = $('#setup');
      var tps = $$('input[name=topic]:checked', f).map(function (x) { return x.value; });
      var tys = $$('input[name=type]:checked', f).map(function (x) { return x.value; });
      if (!tps.length) { toast('Choose at least one topic.'); return; }
      if (!tys.length) { toast('Choose at least one question type.'); return; }
      cfg.topics = tps; cfg.types = tys;
      cfg.focus = f.elements.focus.value; cfg.count = +f.elements.count.value;
      sess = buildSession({ topics: tps, types: tys, focus: cfg.focus, count: cfg.count });
      if (!sess) { toast('No spec points in those topics.'); return; }
      render();
      window.scrollTo(0, 0);
      return;
    }
    if (a === 'reveal') {
      sess.revealed = true; sess.ticks = [];
      keepScroll(render);
      return;
    }
    if (a === 'next') { finishQ(false); return; }
    if (a === 'skip') { finishQ(true); return; }
    if (a === 'end-session') {
      if (sess && sess.results.length) { sess.stage = 'done'; } else { sess = null; }
      render();
      return;
    }
    if (a === 'restart') { sess = null; render(); return; }
    if (a === 'clear-filters') {
      ui = { topic: 'all', conf: 'all', search: '' };
      render();
      return;
    }
    if (a === 'open-add') {
      var dl = $('#topic-list');
      dl.innerHTML = topics().map(function (t) { return '<option value="' + esc(t) + '">'; }).join('');
      var dlg = $('#add-dlg');
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
      return;
    }
    if (a === 'close-add') { $('#add-dlg').close(); return; }
    if (a === 'delete-custom') {
      if (!confirm('Delete this custom spec point?')) return;
      state.custom = state.custom.filter(function (c) { return c.id !== id; });
      delete state.conf[id]; delete state.last[id]; delete state.notes[id];
      save();
      keepScroll(render);
      return;
    }
    if (a === 'import-spec') {
      var parsed = parseSpec($('#spec-text').value);
      if (!parsed.length) { toast('Nothing to import: add one point per line.'); return; }
      state.custom = state.custom.concat(parsed);
      save();
      toast('Added ' + parsed.length + ' spec point' + (parsed.length === 1 ? '' : 's') + ' to the tracker.');
      $('#spec-text').value = '';
      return;
    }
    if (a === 'export') {
      var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url; link.download = 'rs-revision-' + localDay(Date.now()) + '.json';
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      return;
    }
    if (a === 'reset') {
      if (!confirm('Reset ALL progress, notes and custom spec points? This cannot be undone. Export first if unsure.')) return;
      state = blank(); sess = null; save(); render();
      toast('Progress reset.');
      return;
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.ui) {
      ui[t.dataset.ui] = t.value;
      var l = $('#tlist'); if (l) l.innerHTML = trackerList();
      return;
    }
    if (t.dataset.pt !== undefined && sess) {
      sess.ticks[+t.dataset.pt] = t.checked;
      var q = sess.qs[sess.i];
      var n = sess.ticks.filter(Boolean).length;
      $('#score').textContent = n + '/' + q.points.length;
      $('#scorebar').style.width = (n / q.points.length * 100) + '%';
      return;
    }
    if (t.id === 'exam') { state.examDate = t.value; save(); toast('Exam date saved.'); return; }
    if (t.id === 'import-file' && t.files && t.files[0]) {
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var obj = JSON.parse(rd.result);
          if (!obj || typeof obj !== 'object' || !obj.conf) throw new Error('bad');
          state = Object.assign(blank(), obj);
          save(); sess = null; render();
          toast('Progress imported.');
        } catch (err) { toast('That file is not a valid progress export.'); }
      };
      rd.readAsText(t.files[0]);
    }
  });

  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset.ui === 'search') {
      ui.search = t.value;
      var l = $('#tlist'); if (l) l.innerHTML = trackerList();
      return;
    }
    if (t.dataset.notes) {
      state.notes[t.dataset.notes] = t.value;
      clearTimeout(saveNotesH);
      saveNotesH = setTimeout(save, 400);
    }
  });

  $('#add-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $('#f-title').value.trim(), topic = $('#f-topic').value.trim();
    if (!title || !topic) return;
    var terms = lines($('#f-terms').value).map(function (l) {
      var k = l.indexOf(':');
      return k > 0 ? { t: l.slice(0, k).trim(), d: l.slice(k + 1).trim() } : { t: l, d: '(add a definition)' };
    });
    var card = {
      id: uid(), custom: true, topic: topic, title: title,
      q: $('#f-q').value.trim() || title, thinker: $('#f-thinker').value.trim(),
      summary: lines($('#f-summary').value), why: lines($('#f-why').value),
      strengths: lines($('#f-strengths').value), weaknesses: lines($('#f-weaknesses').value), terms: terms
    };
    state.custom.push(card);
    save();
    $('#add-form').reset();
    $('#add-dlg').close();
    toast('Added \u201c' + title + '\u201d.');
    if (/tracker|data/.test(location.hash) || !location.hash) render();
  });

  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  window.__RS = { makeQ: makeQ, buildSession: buildSession, items: items, state: function () { return state; } };
  render();
})();
