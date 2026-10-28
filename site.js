/* ============ সাইট কনফিগারেশন: শুধু এই অংশটুকু নিজের তথ্য দিয়ে বদলান ============ */
var DEV = {
  name: 'Md Abdullah Biswas',                       // আপনার নাম
  role: 'ওয়েব ডেভেলপার|Web Developer',               // পরিচিতি (বাংলা|English)
  bio: 'শিক্ষার্থীদের প্রতিদিনের কাজ সহজ করতে এই ওয়েবসাইট ও টুলগুলো তৈরি করেছি। আপনার মতামত পেলে সাইটটিকে আরও উন্নত করতে পারব।|I built this website and its tools to make everyday student work easier. Your feedback helps me improve it.',
  email: 'abdullah84402660@gmail.com',
  whatsapp: '8801784402660',                         // দেশ কোডসহ
  links: [                                           // খালি লিংক দেখানো হবে না
    ['GitHub', 'https://github.com/mdabdullahbiswas'],
    ['Facebook', 'https://www.facebook.com/mdabdullah.biswas.84'],
    ['LinkedIn', 'https://www.linkedin.com/in/md-abdullah-biswas/'],
    ['Instagram', 'https://www.instagram.com/mdabdullah84_biswas/']
  ],
  skills: [],
  repo: 'https://github.com/mdabdullahbiswas/dcu-cover-page'
};
var RESULT_URL = 'https://result.7college.du.ac.bd/';
var COLS = [['Dhaka College','ঢাকা কলেজ'],['Eden Mohila College','ইডেন মহিলা কলেজ'],['Government Titumir College','সরকারি তিতুমীর কলেজ'],['Government Bangla College','সরকারি বাঙলা কলেজ'],['Begum Badrunnessa Government Mohila College','বেগম বদরুন্নেসা সরকারি মহিলা কলেজ'],['Government Shaheed Suhrawardy College','সরকারি শহীদ সোহরাওয়ার্দী কলেজ'],['Kabi Nazrul Government College','কবি নজরুল সরকারি কলেজ']];
var DEPTS = [['Bangla','বাংলা'],['English','ইংরেজি'],['Arabic','আরবি'],['History','ইতিহাস'],['Islamic History & Culture','ইসলামের ইতিহাস ও সংস্কৃতি'],['Philosophy','দর্শন'],['Islamic Studies','ইসলামিক স্টাডিজ'],['Political Science','রাষ্ট্রবিজ্ঞান'],['Sociology','সমাজবিজ্ঞান'],['Social Work','সমাজকর্ম'],['Economics','অর্থনীতি'],['Marketing','মার্কেটিং'],['Finance & Banking','ফিন্যান্স এন্ড ব্যাংকিং'],['Accounting','হিসাববিজ্ঞান'],['Management','ব্যবস্থাপনা'],['Physics','পদার্থবিজ্ঞান'],['Chemistry','রসায়ন'],['Botany','উদ্ভিদবিজ্ঞান'],['Zoology','প্রাণিবিদ্যা'],['Mathematics','গণিত'],['Geography & Environment','ভূগোল ও পরিবেশ'],['Soil Science','মৃত্তিকাবিজ্ঞান'],['Psychology','মনোবিজ্ঞান'],['Home Economics','গার্হস্থ্য অর্থনীতি'],['Statistics','পরিসংখ্যান']];
/* ===================================================================== */
(function () {
  window.$DEV = DEV;
  var P = document.body.dataset.page || '', SL = 'en';
  try { SL = localStorage.getItem('dcuSL') || 'en'; } catch (e) {}
  var $L = function (s) { var p = String(s).split('|'); return SL === 'en' && p[1] ? p[1] : p[0]; };
  window.$L = $L; window.$lang = function () { return SL; };

  // টুলস ড্রপডাউন তালিকা (রেজাল্টসহ)
  var TL = [
    ['card', 'শেয়ার কার্ড|Share Card'],
    ['frame', 'প্রোফাইল ফ্রেম|Profile Frame'],
    ['cv', 'সিভি বিল্ডার|CV Builder'],
    ['routine', 'ক্লাস রুটিন|Class Routine'],
    ['cgpa', 'CGPA ক্যালকুলেটর|CGPA Calculator'],
    ['exam', 'পরীক্ষা প্ল্যানার|Exam Planner'],
    ['pdf', 'PDF টুলকিট|PDF Toolkit'],
    ['calc', 'সায়েন্টিফিক ক্যালকুলেটর|Scientific Calculator'],
    ['result', 'রেজাল্ট|Results']
  ];
  var tl = TL.map(function (a) { return '<a class="t" href="tools.html#' + a[0] + '">' + a[1] + '</a>'; }).join('');
  var isI = P === 'index';

  // হেডার: লোগো ও বিশ্ববিদ্যালয়ের নামের নিচে "আন-অফিশিয়াল" সাবটাইটেল (ক্লিকেবল)
  var hd = '<div class="sh" role="banner"><div class="sh-in">' +
    '<a class="brand" href="./" title="Home"><img src="logo.png" alt="" onerror="this.remove()">' +
    '<div class="brand-text"><span>Dhaka Central University</span><small class="t brand-sub">আন-অফিশিয়াল|Unofficial</small></div></a>' +
    '<nav class="mn" id="mn" aria-label="Main">' +
    '<a class="t' + (isI ? ' on' : '') + '" href="./">অ্যাসাইনমেন্ট|Assignment</a>' +
    '<div class="dd"><button type="button" class="t' + (P === 'tools' ? ' on' : '') + '" id="ddb">টুলস ▾|Tools ▾</button><div class="ddm">' + tl + '</div></div>' +
    '<a class="t' + (P === 'blood' ? ' on' : '') + '" href="blood.html">🩸 ডোনার ডিরেক্টরি|Donor Directory</a>' +
    '<a class="t' + (P === 'about' ? ' on' : '') + '" href="about.html">সম্পর্কে|About</a>' +
    '<a class="t' + (P === 'feedback' ? ' on' : '') + '" href="feedback.html">মতামত|Feedback</a></nav>' +
    '<div class="ut">' +
    '<button type="button" id="helpBtn" title="গাইড / Guide">❓</button>' +
    '<button type="button" id="langBtn" title="Language">' + (SL === 'bn' ? 'EN' : 'বাং') + '</button>' +
    '<button type="button" id="darkBtn" onclick="toggleDark()" title="Theme">🌙</button>' +
    '<button type="button" id="mt" aria-label="Menu" aria-expanded="false">☰</button></div></div></div>';

  /* ---------- সোশ্যাল আইকন ---------- */
  var IC = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5l8.5 6 8.5-6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };

  window.$SOC = function (name, url, label, blank) {
    var k = String(name).toLowerCase(), t = label || name;
    return '<a class="si si-' + (IC[k] ? k : 'link') + '" href="' + url + '"' + (blank === false ? '' : ' target="_blank" rel="noopener"') +
      ' aria-label="' + t + '" title="' + t + '">' + (IC[k] || IC.link) + '</a>';
  };

  var st = document.createElement('style');
  st.textContent =
    'a.si{--c:#0a2240;display:inline-flex!important;align-items:center;justify-content:center;width:44px!important;height:44px!important;padding:0!important;margin:0;border-radius:50%!important;' +
      'background:#fff!important;color:var(--c)!important;border:1px solid #dbe3ec!important;box-shadow:0 1px 3px rgba(10,34,64,.18),0 4px 12px rgba(10,34,64,.10);text-decoration:none!important;line-height:0;font-size:0;' +
      'transition:transform .22s ease,box-shadow .22s ease,background .22s ease,color .22s ease,border-color .22s ease}' +
    'a.si svg{width:21px;height:21px;display:block}' +
    'a.si:hover,a.si:focus-visible{background:var(--c)!important;color:#fff!important;border-color:var(--c)!important;transform:translateY(-3px);box-shadow:0 8px 18px rgba(10,34,64,.28)}' +
    'a.si:active{transform:translateY(-1px)}' +
    'a.si-github{--c:#181717}a.si-facebook{--c:#1877f2}a.si-linkedin{--c:#0a66c2}a.si-instagram{--c:#e4405f}a.si-email{--c:#ea4335}a.si-code{--c:#0a2240}a.si-link{--c:#5d6b7a}' +
    'a.si-instagram:hover,a.si-instagram:focus-visible{background:linear-gradient(45deg,#f9a03f,#e1306c 55%,#833ab4)!important;border-color:transparent!important}' +
    'body.dark a.si-code{--c:#243349}' +
    '.sf .soc{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0 8px}' +
    '.sf .soc a.si{width:40px!important;height:40px!important}.sf .soc a.si svg{width:19px;height:19px}' +
    '.sf .soc a.si:hover,.sf .soc a.si:focus-visible{color:#fff!important}' +
    '.ln{gap:10px!important}' +
    '#hdr{position:sticky;top:0;z-index:50}' +
    'html{scroll-padding-top:76px}' +
    /* লোগো ও ব্র্যান্ড টেক্সটের স্টাইল */
    '.brand-text{display:flex;flex-direction:column;line-height:1.15;text-align:left}' +
    '.brand-sub{font-size:11px;font-weight:600;color:#e8c179;letter-spacing:.6px;text-transform:uppercase;margin-top:2px}' +
    '.sf .b{text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:10px;margin-bottom:8px}' +
    '.sf .b:hover span{color:#fff}' +
    '.sf a.dev-link{color:inherit;text-decoration:none;transition:color .2s}' +
    '.sf a.dev-link:hover{color:#e5a83b}' +
    /* গাইড বক্স স্টাইল */
    '.dcu-tour-box{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);width:min(92vw,430px);background:var(--cd,#fff);color:var(--ink,#1c2733);border:1.5px solid var(--ln,#d5dde6);border-radius:14px;padding:18px 20px;box-shadow:0 12px 36px rgba(0,0,0,.28);z-index:99999;font-family:inherit;animation:dcuTourIn .2s ease-out}' +
    '@keyframes dcuTourIn{from{transform:translateX(-50%) translateY(14px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}' +
    '.dcu-tour-hl{outline:3.5px solid #e5a83b!important;outline-offset:4px!important;border-radius:8px!important;transition:outline .2s!important}' +
    '.dcu-tour-step{font-size:12px;font-weight:700;color:#e5a83b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}' +
    '.dcu-tour-title{font-size:17px;font-weight:800;color:var(--n,#0a2240);margin-bottom:6px}' +
    'body.dark .dcu-tour-title{color:#e5a83b}' +
    '.dcu-tour-txt{font-size:14px;line-height:1.6;margin-bottom:14px;color:var(--mu,#5d6b7a)}' +
    'body.dark .dcu-tour-txt{color:#cfd8e6}' +
    '.dcu-tour-acts{display:flex;justify-content:space-between;align-items:center;gap:8px}' +
    '.dcu-tour-btn{border:0;border-radius:8px;padding:8px 15px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit}' +
    '.dcu-tour-btn.next{background:#0a2240;color:#e5a83b}' +
    'body.dark .dcu-tour-btn.next{background:#e5a83b;color:#0a2240}' +
    '.dcu-tour-btn.skip{background:transparent;color:var(--mu,#6c7a89);border:1px solid var(--ln,#d5dde6)}';
  document.head.appendChild(st);

  var soc = '<div class="soc">' + DEV.links.filter(function (l) { return l[1]; }).map(function (l) { return $SOC(l[0], l[1]); }).join('') +
    (DEV.email ? $SOC('email', 'mailto:' + DEV.email, 'Email', false) : '') + '</div>';

  // ফুটার: লোগো ও বিশ্ববিদ্যালয়ের নাম ক্লিকেবল (হোমে যাবে) এবং ডেভেলপারের নামে ক্লিক করলে প্রোফাইল পেজে (about.html) যাবে
  var ft = '<div class="sf" role="contentinfo"><div class="sf-in">' +
    '<div><a class="b" href="./" title="Home"><img src="logo.png" alt="" onerror="this.remove()">' +
    '<div class="brand-text"><span>Dhaka Central University</span><small class="t brand-sub">আন-অফিশিয়াল|Unofficial</small></div></a>' +
    '<p class="t">শিক্ষার্থীদের জন্য বিনামূল্যের অ্যাসাইনমেন্ট কভার পেজ ও পড়াশোনার টুল।|Free assignment cover pages and study tools for students.</p><p id="cnt"></p>' +
    '<span class="t">বন্ধুদের সাথে শেয়ার করুন|Share with friends</span><a id="wa" target="_blank" rel="noopener">WhatsApp</a><a id="fb" target="_blank" rel="noopener">Facebook</a></div>' +
    '<div><h4 class="t">দ্রুত লিংক|Quick Links</h4><a class="t" href="./">অ্যাসাইনমেন্ট কভার পেজ|Assignment Cover Page</a>' + tl + '<a class="t" href="blood.html">🩸 ডোনার ডিরেক্টরি|Donor Directory</a></div>' +
    '<div><h4 class="t">গোপনীয়তা|Privacy</h4><p class="t">আপনার সব তথ্য ও ফাইল শুধু আপনার ডিভাইসের ব্রাউজারেই থাকে। এগুলো কোনো সার্ভারে পাঠানো হয় না, তাই কেউ চাইলেও দেখতে পারে না।|Your data and files stay in your own browser. Nothing is sent to a server, so nobody else can see it.</p><a class="t" href="about.html#privacy">বিস্তারিত|Learn more</a></div>' +
    '<div><h4 class="t">ডেভেলপার|Developer</h4><a class="dev-link" href="about.html" title="View Profile"><b>' + DEV.name + '</b></a><span class="t" style="display:block">' + DEV.role + '</span>' + soc +
    '<a class="t" href="feedback.html">মতামত জানান|Send Feedback</a><a id="fbk" style="display:none"></a></div></div>' +
    '<div class="sf-note"><p class="t">⚠️ এটি একটি আন-অফিশিয়াল (অনানুষ্ঠানিক) ওয়েবসাইট। Dhaka Central University কর্তৃপক্ষের সাথে এর কোনো সরকারি সম্পর্ক বা অনুমোদন নেই। অফিশিয়াল তথ্যের জন্য বিশ্ববিদ্যালয়ের নিজস্ব নোটিশ ও ওয়েবসাইট দেখুন।|⚠️ This is an unofficial website. It has no official affiliation with, or endorsement from, Dhaka Central University. For official information, please refer to the university\'s own notices and website.</p>' +
    '<p>© ' + new Date().getFullYear() + ' · <span class="t">তৈরি করেছেন|Developed by</span> <a class="dev-link" href="about.html" title="View Profile" style="color:var(--g,#e5a83b);font-weight:700;"><b>' + DEV.name + '</b></a></p></div></div>';

  function applyL(l) {
    if (l) SL = l;
    document.documentElement.lang = SL;
    document.querySelectorAll('.t').forEach(function (e) {
      if (e.children.length) return;
      var k = e.dataset.s || (e.dataset.s = e.textContent.trim());
      e.textContent = $L(k);
    });
    document.querySelectorAll('[data-p]').forEach(function (e) { e.placeholder = $L(e.dataset.p); });
    var b = document.getElementById('langBtn'); if (b) b.textContent = SL === 'bn' ? 'EN' : 'বাং';
    if (window.onLang) window.onLang();
  }
  window.$applyL = applyL;

  function dlist(id, html) {
    var d = document.getElementById(id);
    if (!d) { d = document.createElement('datalist'); d.id = id; document.body.appendChild(d); }
    d.innerHTML = html;
  }
  function opts(a) { return a.map(function (v) { return '<option value="' + v + '">'; }).join(''); }
  dlist('deptList', opts(DEPTS.map(function (d) { return 'DEPARTMENT OF ' + d[0].toUpperCase(); }).concat(DEPTS.map(function (d) { return d[1] + ' বিভাগ'; }))));
  dlist('campusList', opts(COLS.map(function (c) { return c[0].toUpperCase() + ' CAMPUS'; }).concat(COLS.map(function (c) { return c[1] + ' ক্যাম্পাস'; }))));
  dlist('deptPlain', opts(DEPTS.map(function (d) { return d[0]; }).concat(DEPTS.map(function (d) { return d[1]; }))));
  window.$DEPTS = DEPTS; window.$COLS = COLS; window.$RESULT = RESULT_URL;
  var h = document.getElementById('hdr'), f = document.getElementById('ftr');
  if (h) h.innerHTML = hd; if (f) f.innerHTML = ft;
  var mn = document.getElementById('mn'), mt = document.getElementById('mt'), dd = document.querySelector('.dd');
  mt.onclick = function () { var o = mn.classList.toggle('open'); mt.setAttribute('aria-expanded', o); };
  document.getElementById('ddb').onclick = function (e) { e.stopPropagation(); dd.classList.toggle('open'); };
  document.addEventListener('click', function (e) {
    if (!dd.contains(e.target)) dd.classList.remove('open');
    if (e.target.closest && e.target.closest('.ddm a')) { dd.classList.remove('open'); mn.classList.remove('open'); }
  });
  var u = encodeURIComponent(location.origin + '/');
  document.getElementById('wa').href = 'https://wa.me/?text=' + u;
  document.getElementById('fb').href = 'https://www.facebook.com/sharer/sharer.php?u=' + u;

  window.toggleDark = function () {
    var d = document.body.classList.toggle('dark');
    document.getElementById('darkBtn').textContent = d ? '☀️' : '🌙';
    try { localStorage.setItem('dcuDark', d ? '1' : ''); } catch (e) {}
  };
  try { if (localStorage.getItem('dcuDark')) window.toggleDark(); } catch (e) {}
  document.getElementById('langBtn').onclick = function () {
    SL = SL === 'bn' ? 'en' : 'bn';
    try { localStorage.setItem('dcuSL', SL); } catch (e) {}
    applyL();
  };

  /* ================== প্রতিটি পেজের স্মার্ট গাইড সিস্টেম ================== */
  var TOURS = {
    index: [
      ['.gal, #templateSelector', 'টেমপ্লেট নির্বাচন|Choose Template', 'আপনার পছন্দের কভার পেজ ডিজাইন (Classic, Minimal, Executive ইত্যাদি) বেছে নিন।|Select your preferred cover page design (Classic, Minimal, Executive, etc.).'],
      ['.themes', 'থিমের রং|Theme Colour', 'পছন্দের রঙের কম্বিনেশন বেছে নিন অথবা কাস্টম কালার পিকার দিয়ে রং দিন।|Pick a university color combination or set custom theme colors.'],
      ['#dept, #topic, #studentName', 'তথ্য পূরণ|Enter Details', 'ডিপার্টমেন্ট, কোর্সের নাম, রোল ও শিক্ষকের তথ্য দিন; ডানপাশে সরাসরি লাইভ প্রিভিউ দেখতে পাবেন।|Enter department, course, roll and teacher details; preview updates live.'],
      ['.btns', 'ডাউনলোড ও প্রিন্ট|Download & Print', 'সবশেষে PDF, PNG বা ওয়ার্ড (Word) ফাইল আকারে কভার পেজটি ডাউনলোড করুন।|Finally, download your ready cover page as PDF, PNG or editable Word file.']
    ],
    blood: [
      ['#findSection .filter-grid, .tabs', 'রক্ত খুঁজুন|Find Blood', 'রক্তের গ্রুপ ও এলাকা দিয়ে সার্চ করে সহজে নিকটস্থ রক্তদাতাদের খুঁজুন।|Search by blood group and area to find donors quickly.'],
      ['#urgentSection, #urgentTicker, #urgentBanner', 'জরুরি রক্তের অনুরোধ|Urgent Requests', 'জরুরি মুহূর্তে রোগীর জন্য রক্তের প্রয়োজন হলে সরাসরি অনুরোধ পোস্ট করুন।|Post an urgent blood request if blood is required for a patient.'],
      ['#registerSection', 'ডোনার নিবন্ধন|Become a Donor', 'নিজে রক্তদাতা হিসেবে যুক্ত হতে এই ফর্মটি পূরণ করে গুগল দিয়ে সাইন ইন করুন।|Fill out this form and sign in with Google to register as a blood donor.'],
      ['#notifySection', 'নিরাপত্তা ও নোটিফিকেশন|Safety & Notifications', 'আপনার মোবাইল নম্বর কে কে দেখেছে তা নোটিফিকেশন লগে সুরক্ষিত থাকবে।|See who viewed your phone number in secure tracking notifications.']
    ],
    tools: [
      ['.tabs', 'টুলস নির্বাচন|Select Tool', 'শেয়ার কার্ড, সিভি বিল্ডার, ক্লাস রুটিন, CGPA ক্যালকুলেটরসহ যেকোনো টুলে ক্লিক করে কাজ শুরু করুন।|Switch between Share Card, CV Builder, Class Routine, CGPA Calculator, and more.'],
      ['main section.on, .bx', 'টুলের ব্যবহার|Using the Tool', 'প্রয়োজনীয় তথ্য দিলে স্ক্রিনে সঙ্গে সঙ্গে ফলাফল, রুটিন বা প্রিভিউ তৈরি হয়ে যাবে।|Fill in the fields to generate instant results, charts, or printable previews.'],
      ['.pv', '১০০% নিরাপদ ও গোপনীয়|100% Private & Safe', 'আপনার কোনো তথ্য সার্ভারে যায় না; সবকিছু সম্পূর্ণ আপনার ডিভাইসের ব্রাউজারেই প্রসেস হয়।|All data stays only on your device browser; nothing is sent to any server.']
    ],
    about: [
      ['.hero', 'পরিচিতি|About Developer', 'সরকারি বাঙলা কলেজের শিক্ষার্থী কর্তৃক উন্মুক্ত শিক্ষা উদ্যোগ হিসেবে সাইটটি নির্মিত।|Developed by a student of Govt. Bangla College as an open student initiative.'],
      ['.bx:nth-of-type(2)', 'প্রজেক্ট সম্পর্কে|About Project', 'শিক্ষার্থীদের প্রতিদিনের কাজ ও কভার পেজ তৈরির প্রক্রিয়া সহজ করাই এর লক্ষ্য।|The mission is to make daily study tools and cover page creation free and easy.'],
      ['#privacy', 'গোপনীয়তা নীতি|Privacy First', 'আপনার কোনো ফাইল বা তথ্য সার্ভারে জমা হয় না, ব্রাউজারের ভেতর নিরাপদ থাকে।|Your files and data remain strictly inside your device browser.']
    ],
    feedback: [
      ['#ft', 'বার্তার ধরন|Feedback Type', 'পরামর্শ, বাগ রিপোর্ট বা প্রশ্ন—সঠিক ধরনটি বেছে নিন।|Choose whether you have a suggestion, bug report, or question.'],
      ['#fm', 'আপনার বার্তা|Your Message', 'আপনার মতামত, সমস্যা বা ধারণার কথা বিস্তারিত লিখুন।|Write your thoughts, ideas, or problems you encountered here.'],
      ['#fb2, #ct', 'বার্তা পাঠান|Send Message', 'Gmail, WhatsApp বা GitHub-এর মাধ্যমে সরাসরি ডেভেলপারের কাছে বার্তা পাঠান।|Send your message directly via Gmail, WhatsApp, or GitHub.']
    ],
    photo: [
      ['#file, #size', 'ছবি ও মাপ|Upload & Size', 'ছবি আপলোড করুন এবং পাসপোর্ট বা স্ট্যাম্প মাপ নির্বাচন করুন।|Upload any portrait photo and select Passport or Stamp photo size.'],
      ['#rm, #bg', 'ব্যাকগ্রাউন্ড পরিবর্তন|Background Change', 'AI দিয়ে ব্যাকগ্রাউন্ড মুছে সাদা, নীল বা যেকোনো ব্যাকগ্রাউন্ড সেট করুন।|Remove background using AI and pick official white, blue, or custom color.'],
      ['#z, #af', 'ফ্রেমিং ও টাচ-আপ|Framing & Touchup', 'মুখ স্বয়ংক্রিয়ভাবে ফ্রেমে সাজান এবং ব্রাশ দিয়ে কিনারা নিখুঁত করুন।|Auto-fit the face and use the touchup brush to perfect beard and hair edges.'],
      ['#d1, #d2, #pr', 'ডাউনলোড ও প্রিন্ট|Download & Print', 'একটি ছবি ডাউনলোড করুন অথবা পুরো A4 শিটে সাজিয়ে প্রিন্ট করুন।|Download a single photo or arrange multiple copies on an A4 sheet for instant printing.']
    ]
  };

  var curStep = 0, activeSteps = [];
  function closeTour() {
    document.querySelectorAll('.dcu-tour-hl').forEach(function(e) { e.classList.remove('dcu-tour-hl'); });
    var b = document.getElementById('dcuTourBox'); if (b) b.remove();
  }

  function showTourStep(idx) {
    closeTour();
    if (idx >= activeSteps.length) return;
    curStep = idx;
    var s = activeSteps[idx];
    var el = document.querySelector(s[0]);
    if (el) {
      el.classList.add('dcu-tour-hl');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    var box = document.createElement('div');
    box.id = 'dcuTourBox';
    box.className = 'dcu-tour-box';
    var isLast = idx === activeSteps.length - 1;
    box.innerHTML = '<div class="dcu-tour-step">' + $L('ধাপ|Step') + ' ' + (idx + 1) + ' / ' + activeSteps.length + '</div>' +
      '<div class="dcu-tour-title">' + $L(s[1]) + '</div>' +
      '<div class="dcu-tour-txt">' + $L(s[2]) + '</div>' +
      '<div class="dcu-tour-acts">' +
      '<button type="button" class="dcu-tour-btn skip" id="dcuTourSkip">' + $L('এড়িয়ে যান|Skip') + '</button>' +
      '<button type="button" class="dcu-tour-btn next" id="dcuTourNext">' + $L(isLast ? 'সমাপ্ত|Finish' : 'পরবর্তী|Next') + '</button>' +
      '</div>';
    document.body.appendChild(box);
    document.getElementById('dcuTourSkip').onclick = closeTour;
    document.getElementById('dcuTourNext').onclick = function () {
      if (isLast) closeTour();
      else showTourStep(idx + 1);
    };
  }

  window.startPageTour = function () {
    var pg = document.body.dataset.page || '';
    if (!pg) {
      var path = location.pathname;
      if (path.indexOf('blood') > -1) pg = 'blood';
      else if (path.indexOf('tools') > -1) pg = 'tools';
      else if (path.indexOf('about') > -1) pg = 'about';
      else if (path.indexOf('feedback') > -1) pg = 'feedback';
      else if (path.indexOf('photo') > -1) pg = 'photo';
      else pg = 'index';
    }
    activeSteps = TOURS[pg] || TOURS.index;
    showTourStep(0);
  };
  window.tour = window.startPageTour;

  document.getElementById('helpBtn').onclick = window.startPageTour;

  applyL();
})();

/* সব পাতায় জরুরি রক্ত নোটিশ বার দেখানো */
(function() {
    if (document.body.dataset.page === 'blood') return;

    fetch("https://firestore.googleapis.com/v1/projects/dcu-blood-bank/databases/(default)/documents/blood_requests")
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (!data.documents || !data.documents.length) return;
            var today = new Date().toISOString().slice(0, 10);
            var openRequests = data.documents
                .map(function(d) {
                    var f = d.fields || {};
                    return {
                        group: (f.group && f.group.stringValue) || '',
                        hospital: (f.hospital && f.hospital.stringValue) || '',
                        area: (f.area && f.area.stringValue) || '',
                        status: (f.status && f.status.stringValue) || '',
                        neededDate: (f.neededDate && f.neededDate.stringValue) || ''
                    };
                })
                .filter(function(r) { return r.status === 'open' && r.neededDate >= today; });

            if (!openRequests.length) return;
            var r = openRequests[0];
            var isBn = (localStorage.getItem('dcuSL') || 'bn') === 'bn';

            var bar = document.createElement('a');
            bar.href = 'blood.html';
            bar.className = 'global-blood-ticker';
            bar.style.display = 'flex';
            bar.innerHTML = '<div class="gbt-left">' +
                '<span class="gbt-badge">' + r.group + '</span>' +
                '<span>🚨 ' + (isBn ? 'জরুরি রক্ত প্রয়োজন:' : 'Urgent blood needed:') + ' <b>' + r.hospital + '</b> (' + r.area + ')</span>' +
                '</div>' +
                '<div class="gbt-btn">' + (isBn ? 'বিস্তারিত দেখুন ›' : 'Details ›') + '</div>';

            var hdr = document.getElementById('hdr');
            if (hdr) hdr.insertAdjacentElement('afterend', bar);
            else document.body.insertAdjacentElement('afterbegin', bar);
        })
        .catch(function() {});
})();
