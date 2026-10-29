/* ============ সাইট কনফিগারেশন: শুধু এই অংশটুকু নিজের তথ্য দিয়ে বদলান ============ */
var DEV = {
  name: 'Md Abdullah Biswas',                       // আপনার নাম
  role: 'ওয়েব ডেভেলপার ও ওয়েব ডিজাইনার|Web Developer & Web Designer',               // পরিচিতি (বাংলা|English)
  bio: 'শিক্ষার্থীদের প্রতিদিনের কাজ সহজ করতে এই ওয়েবসাইট ও টুলগুলো তৈরি করেছি। আপনার মতামত পেলে সাইটটিকে আরও উন্নত করতে পারব।|I built this website and its tools to make everyday student work easier. Your feedback helps me improve it.',
  email: 'abdullah84402660@gmail.com',
  whatsapp: '8801784402660',                         // দেশ কোডসহ
  links: [                                           // খালি লিংক দেখানো হবে না
    ['Facebook', 'https://www.facebook.com/mdabdullah.biswas.84'],
    ['LinkedIn', 'https://www.linkedin.com/in/md-abdullah-biswas/'],
    ['Instagram', 'https://www.instagram.com/mdabdullah84_biswas/']
  ],
  skills: []
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

  // টুলস ড্রপডাউন তালিকা
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

  // হেডার
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
    'a.si{--c:#0a2240;display:inline-flex!important;align-items:center;justify-content:center;width:34px!important;height:34px!important;padding:0!important;margin:0;border-radius:50%!important;' +
      'background:#fff!important;color:var(--c)!important;border:1px solid #dbe3ec!important;box-shadow:0 1px 3px rgba(10,34,64,.15);text-decoration:none!important;line-height:0;' +
      'transition:transform .2s ease,background .2s ease,color .2s ease}' +
    'a.si svg{width:17px;height:17px;display:block}' +
    'a.si:hover,a.si:focus-visible{background:var(--c)!important;color:#fff!important;border-color:var(--c)!important;transform:translateY(-2px)}' +
    'a.si-github{--c:#181717}a.si-facebook{--c:#1877f2}a.si-linkedin{--c:#0a66c2}a.si-instagram{--c:#e4405f}a.si-email{--c:#ea4335}a.si-code{--c:#0a2240}a.si-link{--c:#5d6b7a}' +
    'a.si-instagram:hover{background:linear-gradient(45deg,#f9a03f,#e1306c 55%,#833ab4)!important;border-color:transparent!important}' +
    'body.dark a.si-code{--c:#243349}' +
    '#hdr{position:sticky;top:0;z-index:50}' +
    'html{scroll-padding-top:76px}' +
    /* লোগো ও ব্র্যান্ড টেক্সটের স্টাইল */
    '.brand-text{display:flex;flex-direction:column;line-height:1.15;text-align:left}' +
    '.brand-sub{font-size:10.5px;font-weight:600;color:#e8c179;letter-spacing:.6px;text-transform:uppercase;margin-top:2px}' +
    /* স্লিম ফুটার স্টাইল */
    '.sf{background:#07192f;color:#b9c7d8;margin-top:28px;font-size:13px;line-height:1.5}' +
    '.sf-in{max-width:1160px;margin:0 auto;padding:22px 18px 12px;display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:20px}' +
    '.sf h4{color:#e5a83b;font-size:14px;margin-bottom:6px;font-weight:700}' +
    '.sf a{display:block;color:#d5e0ee;text-decoration:none;padding:2px 0;font-size:13px;transition:color .15s}' +
    '.sf a:hover{color:#e5a83b}' +
    '.sf p{margin:0 0 6px;font-size:12.5px;color:#9fb0c3}' +
    '.sf .b{text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:10px;margin-bottom:6px}' +
    '.sf .b img{width:32px;height:32px}' +
    '.sf .b:hover span{color:#fff}' +
    '.sf a.dev-link{color:inherit;text-decoration:none}' +
    '.sf a.dev-link:hover{color:#e5a83b}' +
    '.sf .soc{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 6px}' +
    '.sf .soc a.si{width:32px!important;height:32px!important}' +
    '.sf .soc a.si svg{width:15px;height:15px}' +
    '.sf-note{max-width:1160px;margin:0 auto;padding:10px 18px 14px;border-top:1px solid rgba(255,255,255,.12);text-align:center;font-size:11.5px;color:#8596a8}' +
    '.sf-note p{margin:2px 0}' +
    '.sf-note a{display:inline;padding:0}' +
    '@media(max-width:768px){.sf-in{grid-template-columns:1fr 1fr;gap:16px}}' +
    /* রক্তের গ্রুপ ব্যাজ: আকার স্থির, শুধু চারপাশে নরম রিং-পালস (আকৃতি বদলায় না) */
    '.gbt-badge{position:relative;display:inline-block;animation:none!important;transform:none!important;box-shadow:none!important;border-radius:6px;line-height:1.5}' +
    '.gbt-badge::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;animation:gbtRing 1.9s ease-out infinite}' +
    '@keyframes gbtRing{0%{box-shadow:0 0 0 0 rgba(255,255,255,.65)}70%,100%{box-shadow:0 0 0 6px rgba(255,255,255,0)}}' +
    '.gbt-left{padding:7px 7px 7px 6px;margin:-7px 0 -7px -6px}' +
    '@media (prefers-reduced-motion:reduce){.gbt-badge::after{animation:none}}' +
    '.gbt-left{flex:1 1 auto;min-width:0}' +
    '.gbt-txt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}' +
    '.gbt-count{flex:none;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:2px 9px;font-size:12px;font-weight:700;letter-spacing:.3px}' +
    /* মোবাইল: কমপ্যাক্ট ফুটার ও হেডার */
    '@media(max-width:600px){' +
      '.sf{margin-top:20px;font-size:12.5px}' +
      '.sf-in{grid-template-columns:1fr 1fr;gap:10px 16px;padding:16px 16px 8px}' +
      '.sf-in>div:nth-child(1){grid-column:1/-1}' +
      '.sf-in>div:nth-child(2){grid-column:1;grid-row:2/span 2}' +
      '.sf-in>div:nth-child(4){grid-column:2;grid-row:2}' +
      '.sf-in>div:nth-child(3){grid-column:2;grid-row:3}' +
      '.sf-in>div:nth-child(3)>p{display:none}' +
      '.sf h4{margin-bottom:3px;font-size:13.5px}' +
      '.sf a{padding:3px 0}' +
      '.sf .soc{gap:6px;margin:6px 0 2px}' +
      '.sf .soc a.si{width:28px!important;height:28px!important}' +
      '.sf .soc a.si svg{width:13px;height:13px}' +
      '.sf-note{padding:8px 16px 12px;font-size:11px}' +
      '.sh-in{gap:8px;padding:6px 10px}' +
      '.sh .brand{font-size:12.5px;letter-spacing:.3px;white-space:normal;gap:8px;line-height:1.15}' +
      '.brand img{width:28px;height:28px;flex:none}' +
      '.brand-text{min-width:0}.brand-text span{white-space:normal}' +
      '.brand-sub{font-size:9px}' +
      '.sh .ut{flex:none;gap:4px}' +
      '.sh .ut button{padding:7px 9px;font-size:13px}' +
      '.dcu-tour-btn{padding:9px 18px}' +
      '.global-blood-ticker{position:static}' +
    '}' +
    /* গাইড বক্স স্টাইল */
    '.dcu-tour-box{position:fixed;bottom:calc(16px + env(safe-area-inset-bottom,0px));left:50%;transform:translateX(-50%);width:min(94vw,420px);background:var(--cd,#fff);color:var(--ink,#1c2733);border:1.5px solid var(--ln,#d5dde6);border-radius:14px;padding:16px 18px;box-shadow:0 12px 36px rgba(0,0,0,.28);z-index:99999;font-family:inherit;animation:dcuTourIn .2s ease-out}' +
    '@keyframes dcuTourIn{from{transform:translateX(-50%) translateY(14px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}' +
    '.dcu-tour-hl{outline:3.5px solid #e5a83b!important;outline-offset:4px!important;border-radius:8px!important}' +
    '.dcu-tour-step{font-size:11.5px;font-weight:700;color:#e5a83b;text-transform:uppercase;margin-bottom:2px}' +
    '.dcu-tour-title{font-size:16px;font-weight:800;color:var(--n,#0a2240);margin-bottom:4px}' +
    'body.dark .dcu-tour-title{color:#e5a83b}' +
    '.dcu-tour-txt{font-size:13.5px;line-height:1.5;margin-bottom:12px;color:var(--mu,#5d6b7a)}' +
    'body.dark .dcu-tour-txt{color:#cfd8e6}' +
    '.dcu-tour-acts{display:flex;justify-content:space-between;align-items:center;gap:8px}' +
    '.dcu-tour-btn{border:0;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}' +
    '.dcu-tour-btn.next{background:#0a2240;color:#e5a83b}' +
    'body.dark .dcu-tour-btn.next{background:#e5a83b;color:#0a2240}' +
    '.dcu-tour-btn.skip{background:transparent;color:var(--mu,#6c7a89);border:1px solid var(--ln,#d5dde6)}';
  document.head.appendChild(st);

  var soc = '<div class="soc">' + DEV.links.filter(function (l) { return l[1]; }).map(function (l) { return $SOC(l[0], l[1]); }).join('') +
    (DEV.email ? $SOC('email', 'mailto:' + DEV.email, 'Email', false) : '') + '</div>';

  // স্লিম এবং পরিচ্ছন্ন ফুটার স্ট্রাকচার
  var ft = '<div class="sf" role="contentinfo"><div class="sf-in">' +
    '<div><a class="b" href="./" title="Home"><img src="logo.png" alt="" onerror="this.remove()">' +
    '<div class="brand-text"><span>Dhaka Central University</span><small class="t brand-sub">আন-অফিশিয়াল|Unofficial</small></div></a>' +
    '<p class="t">শিক্ষার্থীদের জন্য বিনামূল্যের অ্যাসাইনমেন্ট কভার পেজ ও শিক্ষা টুল।|Free cover page generator & study tools for students.</p>' +
    '<p><span class="t">শেয়ার: |Share: </span><a id="wa" target="_blank" rel="noopener" style="display:inline;color:#25d366;font-weight:600;">WhatsApp</a> · <a id="fb" target="_blank" rel="noopener" style="display:inline;color:#1877f2;font-weight:600;">Facebook</a></p></div>' +
    '<div><h4 class="t">দ্রুত লিংক|Quick Links</h4>' +
    '<a class="t" href="./">কভার পেজ|Cover Page</a>' +
    '<a class="t" href="tools.html">সকল শিক্ষা টুলস|All Study Tools</a>' +
    '<a class="t" href="blood.html">🩸 ডোনার ডিরেক্টরি|Donor Directory</a>' +
    '<a class="t" href="tools.html#result">রেজাল্ট পোর্টাল|Results</a>' +
    '<a class="t" href="feedback.html">মতামত জানান|Feedback</a></div>' +
    '<div><h4 class="t">গোপনীয়তা|Privacy</h4><p class="t">আপনার তথ্য শুধু আপনার ডিভাইসের ব্রাউজারেই থাকে; কোনো সার্ভারে পাঠানো হয় না।|Your data stays only in your browser; never sent to any server.</p><a class="t" href="about.html#privacy">বিস্তারিত নীতি|Privacy Policy</a></div>' +
    '<div><h4 class="t">ডেভেলপার|Developer</h4><a class="dev-link" href="about.html" title="Profile"><b>' + DEV.name + '</b></a><p style="margin:1px 0 4px;" class="t">' + DEV.role + '</p>' + soc + '</div></div>' +
    '<div class="sf-note"><p class="t">⚠️ এটি একটি আন-অফিশিয়াল ওয়েবসাইট। বিশ্ববিদ্যালয়ের সাথে কোনো প্রাতিষ্ঠানিক সম্পর্ক নেই।|⚠️ Unofficial student initiative; not officially affiliated with the university.</p>' +
    '<p>© ' + new Date().getFullYear() + ' · <span class="t">তৈরি করেছেন|Developed by</span> <a class="dev-link" href="about.html" style="color:var(--g,#e5a83b);font-weight:700;"><b>' + DEV.name + '</b></a></p></div></div>';

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
  function readSL() {
    var v = 'en';
    try { v = localStorage.getItem('dcuSL') || 'en'; } catch (e) {}
    return v === 'bn' ? 'bn' : 'en';
  }
  document.getElementById('langBtn').onclick = function () {
    SL = readSL() === 'bn' ? 'en' : 'bn';   // সবসময় সংরক্ষিত মান থেকে উল্টাও
    try { localStorage.setItem('dcuSL', SL); } catch (e) {}
    applyL();
  };
  // Back/Forward (bfcache) বা অন্য ট্যাবে ভাষা বদলালে এই পেজ সিঙ্ক করো
  function syncL() { var v = readSL(); if (v !== SL) applyL(v); }
  window.addEventListener('pageshow', syncL);
  window.addEventListener('storage', function (e) { if (!e.key || e.key === 'dcuSL') syncL(); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) syncL(); });

  /* ================== প্রতিটি পেজের গাইড সিস্টেম ================== */
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
      ['#fb2, #ct', 'বার্তা পাঠান|Send Message', 'Gmail বা WhatsApp-এর মাধ্যমে সরাসরি ডেভেলপারের কাছে বার্তা পাঠান।|Send your message directly via Gmail or WhatsApp.']
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

    fetch("https://firestore.googleapis.com/v1/projects/dcu-blood-bank/databases/(default)/documents/blood_requests?pageSize=300")
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (!data.documents || !data.documents.length) return;
            var today = new Date().toISOString().slice(0, 10);
            var str = function(f) { return (f && f.stringValue) || ''; };
            var bagsOf = function(f) {
                var ks = ['bags', 'bagsNeeded', 'units', 'quantity', 'qty', 'count'];
                for (var i = 0; i < ks.length; i++) {
                    var v = f[ks[i]];
                    if (v) {
                        var n = parseInt(v.integerValue || v.stringValue || v.doubleValue, 10);
                        if (n > 0) return n;
                    }
                }
                return 0;
            };
            // সব খোলা অনুরোধ, সবচেয়ে কাছের তারিখ আগে
            var items = data.documents
                .map(function(d) {
                    var f = d.fields || {};
                    return {
                        group: str(f.group), hospital: str(f.hospital), area: str(f.area),
                        status: str(f.status), neededDate: str(f.neededDate), bags: bagsOf(f)
                    };
                })
                .filter(function(r) { return r.status === 'open' && r.neededDate >= today; })
                .sort(function(a, b) { return a.neededDate < b.neededDate ? -1 : a.neededDate > b.neededDate ? 1 : 0; });

            if (!items.length) return;
            var isBn = (localStorage.getItem('dcuSL') || 'en') === 'bn';

            var bar = document.createElement('a');
            bar.href = 'blood.html';
            bar.className = 'global-blood-ticker';
            bar.style.display = 'flex';

            var left = document.createElement('div'); left.className = 'gbt-left';
            var badge = document.createElement('span'); badge.className = 'gbt-badge';
            var txt = document.createElement('span'); txt.className = 'gbt-txt';
            left.appendChild(badge); left.appendChild(txt);
            bar.appendChild(left);

            var cnt = null;
            if (items.length > 1) {
                cnt = document.createElement('span'); cnt.className = 'gbt-count';
                bar.appendChild(cnt);
            }
            var btn = document.createElement('div'); btn.className = 'gbt-btn';
            btn.textContent = isBn ? 'বিস্তারিত দেখুন ›' : 'Details ›';
            bar.appendChild(btn);

            var idx = 0;
            function paint() {
                var r = items[idx];
                badge.textContent = r.group;
                txt.textContent = '';
                txt.appendChild(document.createTextNode('\uD83D\uDEA8 ' + (isBn ? 'জরুরি রক্ত প্রয়োজন:' : 'Urgent blood needed:') + ' '));
                var b = document.createElement('b'); b.textContent = r.hospital; txt.appendChild(b);
                if (r.area) txt.appendChild(document.createTextNode(' (' + r.area + ')'));
                if (r.bags) txt.appendChild(document.createTextNode(' · ' + r.bags + (isBn ? ' ব্যাগ' : (r.bags > 1 ? ' bags' : ' bag'))));
                if (cnt) cnt.textContent = (idx + 1) + '/' + items.length;
            }
            paint();

            if (items.length > 1) {
                var paused = false;
                bar.addEventListener('mouseenter', function() { paused = true; });
                bar.addEventListener('mouseleave', function() { paused = false; });
                left.style.transition = 'opacity .25s';
                setInterval(function() {
                    if (paused || document.hidden) return;
                    left.style.opacity = '0';
                    setTimeout(function() {
                        idx = (idx + 1) % items.length;
                        paint();
                        left.style.opacity = '1';
                    }, 260);
                }, 4500);
            }

            var hdr = document.getElementById('hdr');
            if (hdr) hdr.insertAdjacentElement('afterend', bar);
            else document.body.insertAdjacentElement('afterbegin', bar);
        })
        .catch(function() {});
})();

/* ============ 🔔 স্বাগত / অফিশিয়াল নয় — প্রিমিয়াম নোটিশ (ডিসমিস করলে ১৫ দিন আর আসবে না) ============ */
(function () {
  var KEY = 'dcuNoticeUntil', DAYS = 15, OFFICIAL = 'https://dcu.ac.bd/';
  if (!document.body || document.body.dataset.page === 'admin') return;

  function snoozed() {
    try {
      var u = parseInt(localStorage.getItem(KEY), 10) || 0, n = Date.now();
      return u > n && u <= n + DAYS * 864e5 + 6e4;
    } catch (e) {
      try { return sessionStorage.getItem(KEY) === '1'; } catch (e2) { return false; }
    }
  }
  function snooze() {
    try { localStorage.setItem(KEY, String(Date.now() + DAYS * 864e5)); }
    catch (e) { try { sessionStorage.setItem(KEY, '1'); } catch (e2) {} }
  }
  if (snoozed()) return;
  window.dcuNoticeOpen = true;            // গাইড-ট্যুর এর জন্য অপেক্ষা করবে

  // প্রিমিয়াম ফন্ট (লোড না হলে সাইটের বর্তমান ফন্টে ফিরে যাবে)
  if (!document.getElementById('dnFonts')) {
    var fl = document.createElement('link');
    fl.id = 'dnFonts'; fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Noto+Serif+Bengali:wght@600;700&display=swap';
    document.head.appendChild(fl);
  }

  var T = {
    en: {
      chip: 'Unofficial website',
      title: 'Not the official <em>DCU</em> website',
      lead: 'A free, independent project — not affiliated with, endorsed by, or operated by Dhaka Central University.',
      cap: 'Crafted to simplify campus life',
      tiles: [['doc', 'Cover pages'], ['calc', 'Study tools'], ['drop', 'Blood donors']],
      ok: 'Continue to site',
      off: 'Official site · dcu.ac.bd',
      fine: 'Shown once every 15 days',
      close: 'Close'
    },
    bn: {
      chip: 'অনানুষ্ঠানিক ওয়েবসাইট',
      title: 'এটি অফিশিয়াল <em>DCU</em> ওয়েবসাইট নয়',
      lead: 'একটি বিনামূল্যের স্বতন্ত্র উদ্যোগ — ঢাকা সেন্ট্রাল ইউনিভার্সিটির সাথে সম্পৃক্ত, অনুমোদিত বা পরিচালিত নয়।',
      cap: 'ক্যাম্পাস জীবন সহজ করতে নিবেদিত',
      tiles: [['doc', 'কভার পেজ'], ['calc', 'স্টাডি টুলস'], ['drop', 'রক্তদাতা']],
      ok: 'ওয়েবসাইটে চালিয়ে যান',
      off: 'অফিশিয়াল সাইট · dcu.ac.bd',
      fine: '১৫ দিনে একবার দেখানো হয়',
      close: 'বন্ধ করুন'
    }
  };
  var IC = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="dn-dr" pathLength="100" d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path class="dn-dr" pathLength="100" d="M12 8.5v4.5M12 16.4v.1"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/></svg>',
    calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7.5h7M9 12h.1M12 12h.1M15 12h.1M9 16h.1M12 16h.1M15 16h.1"/></svg>',
    drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  var css = document.createElement('style');
  css.textContent =
    '.dn-ov,.dn-ov *{box-sizing:border-box}' +
    '.dn-ov{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:18px;text-align:left;' +
      'font-family:"Hind Siliguri","Montserrat",sans-serif;color:#f4efe3;' +
      'background:radial-gradient(800px 460px at 50% -10%,rgba(232,176,74,.20),transparent 62%),rgba(3,10,22,.78);' +
      '-webkit-backdrop-filter:blur(9px) saturate(1.2);backdrop-filter:blur(9px) saturate(1.2);opacity:0;transition:opacity .35s ease}' +
    '.dn-ov.in{opacity:1}' +
    '.dn-ov .dn-card{position:relative;width:100%;max-width:430px;max-height:calc(100vh - 36px);max-height:calc(100dvh - 36px);display:flex;flex-direction:column;overflow:hidden;border-radius:26px;' +
      'border:1px solid transparent;' +
      'background:linear-gradient(165deg,#0d2b57 0%,#08193a 48%,#050f24 100%) padding-box,conic-gradient(from var(--dn-a,0deg),rgba(246,214,143,.16),#f6d68f 9%,rgba(246,214,143,.16) 22%,rgba(232,176,74,.10) 60%,rgba(246,214,143,.16)) border-box;animation:dnSpin 8s linear infinite;' +
      'box-shadow:0 40px 100px rgba(0,0,0,.6),0 0 60px rgba(232,176,74,.08);transform:translateY(28px) scale(.96);transition:transform .5s cubic-bezier(.2,.9,.25,1.1)}' +
    '.dn-ov.in .dn-card{transform:none}' +
    '.dn-ov .dn-card:before{content:"";position:absolute;top:-120px;right:-90px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(232,176,74,.30),transparent 66%);pointer-events:none;animation:dnDriftA 13s ease-in-out infinite alternate}' +
    '.dn-ov .dn-card:after{content:"";position:absolute;left:-110px;bottom:-130px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(70,130,220,.24),transparent 66%);pointer-events:none;animation:dnDriftB 16s ease-in-out infinite alternate}' +
    '.dn-ov .dn-main{position:relative;z-index:1;flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:18px 24px 6px;text-align:center}' +
    /* ওপরের সারি: ভাষা + বন্ধ */
    '.dn-ov .dn-bar{display:flex;align-items:center;justify-content:space-between;margin:0 -6px 6px}' +
    '.dn-ov .dn-lang{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;padding:3px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);-webkit-tap-highlight-color:transparent}' +
    '.dn-ov .dn-lang span{display:block;min-width:38px;padding:5px 10px;border-radius:999px;font:700 11.5px/1.2 "Montserrat","Hind Siliguri",sans-serif;letter-spacing:.6px;text-align:center;color:#a9b8d0;transition:background .2s,color .2s}' +
    '.dn-ov .dn-lang span.on{background:linear-gradient(135deg,#f6d68f,#e8b04a);color:#07152b}' +
    '.dn-ov .dn-x{all:unset;box-sizing:border-box;cursor:pointer;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;color:#c9d4e6;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);transition:background .2s,color .2s;-webkit-tap-highlight-color:transparent}' +
    '.dn-ov .dn-x svg{width:15px;height:15px}' +
    '.dn-ov .dn-x:hover,.dn-ov .dn-lang:hover{background:rgba(255,255,255,.16);color:#fff}' +
    /* হিরো */
    '.dn-ov .dn-ico{position:relative;width:64px;height:64px;margin:4px auto 14px;border-radius:50%;display:grid;place-items:center;color:#f6d68f;' +
      'background:radial-gradient(circle at 30% 25%,rgba(246,214,143,.28),rgba(246,214,143,.06));border:1.5px solid rgba(246,214,143,.7);box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 0 18px rgba(246,214,143,.12);animation:dnPop .7s .1s both cubic-bezier(.2,.9,.25,1.3),dnFloat 4.6s 1.2s ease-in-out infinite}' +
    '.dn-ov .dn-ico:after{content:"";position:absolute;top:-7px;right:-7px;bottom:-7px;left:-7px;border-radius:50%;border:1px solid rgba(246,214,143,.35);animation:dnHalo 2.8s ease-out infinite}' +
    '.dn-ov .dn-ico svg{width:30px;height:30px}' +
    '.dn-ov .dn-chip{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;margin-bottom:13px;font:700 10.5px/1.2 "Montserrat","Hind Siliguri",sans-serif;letter-spacing:2px;text-transform:uppercase;color:#f6d68f;background:rgba(232,176,74,.12);border:1px solid rgba(232,176,74,.4)}' +
    '.dn-ov .dn-chip i{width:6px;height:6px;border-radius:50%;background:#e8b04a;box-shadow:0 0 0 3px rgba(232,176,74,.25)}' +
    '.dn-ov .dn-title{margin:0 0 10px;font-weight:700;color:#fff;font-family:"Playfair Display","Cinzel",serif;font-size:27px;line-height:1.22;letter-spacing:.2px}' +
    '.dn-ov .dn-bn .dn-title{font-family:"Noto Serif Bengali","Hind Siliguri",serif;font-size:24px;line-height:1.45;letter-spacing:0}' +
    '.dn-ov .dn-title em{font-style:normal;background:linear-gradient(110deg,#e8b04a 20%,#fff3cf 40%,#e8b04a 60%) 0 0/220% auto;animation:dnShimmer 5s linear infinite;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}' +
    '.dn-ov .dn-lead{margin:0 auto;max-width:340px;font-size:14.5px;line-height:1.7;font-weight:400;color:#b9c6dc}' +
    '.dn-ov .dn-en .dn-lead{font-family:"Montserrat","Hind Siliguri",sans-serif;font-size:13.5px;line-height:1.75;font-weight:500}' +
    /* বিভাজক + টাইলস */
    '.dn-ov .dn-div{display:flex;align-items:center;gap:12px;margin:20px 0 14px;font:600 10.5px/1.2 "Montserrat","Hind Siliguri",sans-serif;letter-spacing:1.6px;text-transform:uppercase;color:#8ea2c2}' +
    '.dn-ov .dn-bn .dn-div{letter-spacing:.4px;text-transform:none;font-size:12.5px;font-family:"Hind Siliguri",sans-serif}' +
    '.dn-ov .dn-div:before,.dn-ov .dn-div:after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(246,214,143,.4))}' +
    '.dn-ov .dn-div:after{transform:scaleX(-1)}' +
    '.dn-ov .dn-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:6px}' +
    '.dn-ov .dn-tile{padding:14px 6px 12px;border-radius:16px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1)}' +
    '.dn-ov .dn-tile i{display:grid;place-items:center;width:40px;height:40px;margin:0 auto 9px;border-radius:12px;color:#07152b;background:linear-gradient(135deg,#f6d68f,#e8b04a);box-shadow:0 6px 16px rgba(232,176,74,.3)}' +
    '.dn-ov .dn-tile i svg{width:20px;height:20px}' +
    '.dn-ov .dn-tile b{display:block;font:600 12.5px/1.3 "Hind Siliguri","Montserrat",sans-serif;color:#eef2f9}' +
    '.dn-ov .dn-en .dn-tile b{font-family:"Montserrat","Hind Siliguri",sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.2px}' +
    /* ফুটার */
    '.dn-ov .dn-ft{position:relative;z-index:1;flex:none;padding:12px 24px calc(18px + env(safe-area-inset-bottom,0px));text-align:center}' +
    '.dn-ov .dn-ok{all:unset;box-sizing:border-box;cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:54px;padding:0 20px;border-radius:16px;' +
      'font:700 15.5px/1 "Hind Siliguri","Montserrat",sans-serif;letter-spacing:.2px;color:#07152b;background:linear-gradient(135deg,#f9dc9b,#e8b04a 55%,#d29a2e);' +
      'box-shadow:0 12px 28px rgba(232,176,74,.34),inset 0 1px 0 rgba(255,255,255,.5);transition:transform .2s,box-shadow .2s;-webkit-tap-highlight-color:transparent}' +
    '.dn-ov .dn-en .dn-ok{font-family:"Montserrat","Hind Siliguri",sans-serif;font-size:14.5px;letter-spacing:.4px}' +
    '.dn-ov .dn-ok:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(232,176,74,.46),inset 0 1px 0 rgba(255,255,255,.5)}' +
    '.dn-ov .dn-ok:active{transform:scale(.985)}' +
    '.dn-ov .dn-ok:after{content:"";position:absolute;top:0;left:-70%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);animation:dnShine 4s 1.2s infinite}' +
    '.dn-ov .dn-ok svg{width:18px;height:18px;flex:none}' +
    '.dn-ov .dn-go{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;margin-top:6px;padding:0 12px;border-radius:999px;' +
      'font:500 12px/1.2 "Montserrat","Hind Siliguri",sans-serif;letter-spacing:.2px;color:#8ea2c2;transition:color .2s;-webkit-tap-highlight-color:transparent}' +
    '.dn-ov .dn-go:hover{color:#f6d68f}' +
    '.dn-ov .dn-go svg{width:12px;height:12px;flex:none}' +
    '.dn-ov .dn-fine{margin:0;font-size:11px;color:#6f82a3}' +
    '.dn-ov button:focus-visible,.dn-ov a:focus-visible{outline:2px solid #f6d68f;outline-offset:2px}' +
    '@keyframes dnPop{from{transform:scale(.5);opacity:0}to{transform:none;opacity:1}}' +
    '@keyframes dnHalo{0%{transform:scale(.92);opacity:.9}100%{transform:scale(1.25);opacity:0}}' +
    '@keyframes dnUp{from{transform:translateY(12px);opacity:0}to{transform:none;opacity:1}}' +
    '@keyframes dnShine{0%{left:-70%}30%,100%{left:140%}}' +
    /* ✨ প্রিমিয়াম অ্যানিমেশন */
    '@property --dn-a{syntax:"<angle>";inherits:false;initial-value:0deg}' +
    '.dn-ov .dn-fx{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none;z-index:0}' +
    '.dn-ov .dn-fx i{position:absolute;bottom:-12px;left:var(--x);width:var(--s);height:var(--s);border-radius:50%;opacity:0;background:radial-gradient(circle,#fff7da,#f6d68f 45%,transparent 72%);animation:dnRise var(--t) var(--dl) infinite linear}' +
    '.dn-ov .dn-gloss{position:absolute;top:0;bottom:0;left:-60%;width:38%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.12),transparent);transform:skewX(-18deg);opacity:0}' +
    '.dn-ov.in .dn-gloss{animation:dnGloss 1.7s .45s ease-out 1 both}' +
    '.dn-ov:not(.in) .dn-st{opacity:0}' +
    '.dn-ov.in .dn-st{animation:dnUp .75s var(--d,0s) cubic-bezier(.2,.8,.2,1) backwards}' +
    '.dn-ov.in .dn-title.dn-st{animation-name:dnReveal}' +
    '.dn-ov .dn-dr{stroke-dasharray:100;stroke-dashoffset:100}' +
    '.dn-ov.in .dn-dr{animation:dnDraw 1.2s .35s cubic-bezier(.5,.1,.2,1) forwards}' +
    '.dn-ov .dn-tile{transition:transform .25s,border-color .25s,box-shadow .25s}' +
    '.dn-ov .dn-tile:hover{transform:translateY(-4px);border-color:rgba(246,214,143,.5);box-shadow:0 14px 28px rgba(0,0,0,.35),0 0 24px rgba(232,176,74,.16)}' +
    '.dn-ov .dn-tile i{animation:dnBob 3.6s ease-in-out infinite}' +
    '.dn-ov .dn-tile:nth-child(2) i{animation-delay:.5s}.dn-ov .dn-tile:nth-child(3) i{animation-delay:1s}' +
    '.dn-ov .dn-okw{position:relative}' +
    '.dn-ov .dn-okw:before{content:"";position:absolute;top:12px;right:16px;bottom:-8px;left:16px;border-radius:18px;background:#e8b04a;filter:blur(18px);opacity:.3;animation:dnBreathe 3.2s ease-in-out infinite}' +
    '.dn-ov .dn-ok{z-index:1}' +
    '.dn-ov .dn-ok svg{animation:dnNudge 1.9s ease-in-out infinite}' +
    '.dn-ov.re .dn-st,.dn-ov.re .dn-ico,.dn-ov.re .dn-dr{animation:none!important;opacity:1!important;stroke-dashoffset:0!important}' +
    '@keyframes dnSpin{to{--dn-a:360deg}}' +
    '@keyframes dnDriftA{from{transform:translate(0,0) scale(1)}to{transform:translate(-50px,70px) scale(1.25)}}' +
    '@keyframes dnDriftB{from{transform:translate(0,0) scale(1)}to{transform:translate(70px,-60px) scale(1.2)}}' +
    '@keyframes dnFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '@keyframes dnShimmer{to{background-position:-220% 0}}' +
    '@keyframes dnRise{0%{transform:translate(0,0) scale(.6);opacity:0}12%{opacity:.9}85%{opacity:.35}100%{transform:translate(var(--dx),-620px) scale(1);opacity:0}}' +
    '@keyframes dnGloss{0%{left:-60%;opacity:0}20%{opacity:1}100%{left:130%;opacity:0}}' +
    '@keyframes dnReveal{from{opacity:0;transform:translateY(14px);filter:blur(10px)}to{opacity:1;transform:none;filter:blur(0)}}' +
    '@keyframes dnDraw{to{stroke-dashoffset:0}}' +
    '@keyframes dnBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '@keyframes dnBreathe{0%,100%{opacity:.22;transform:scale(.96)}50%{opacity:.5;transform:scale(1.04)}}' +
    '@keyframes dnNudge{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}' +
    /* মোবাইল: নিচ থেকে ওঠা শিট */
    '@media(max-width:560px){' +
      '.dn-ov{padding:0;align-items:flex-end}' +
      '.dn-ov .dn-card{max-width:none;max-height:94vh;max-height:94dvh;border-radius:28px 28px 0 0;border-bottom:0;transform:translateY(100%)}' +
      '.dn-ov .dn-card .dn-main{padding:12px 20px 4px}' +
      '.dn-ov .dn-card .dn-main:before{content:"";display:block;width:40px;height:4px;margin:0 auto 12px;border-radius:4px;background:rgba(255,255,255,.22)}' +
      '.dn-ov .dn-title{font-size:25px}.dn-ov .dn-bn .dn-title{font-size:22px}' +
      '.dn-ov .dn-ft{padding:10px 20px calc(16px + env(safe-area-inset-bottom,0px))}' +
      '.dn-ov .dn-tile{padding:12px 4px 10px}' +
    '}' +
    '@media(max-height:620px){.dn-ov .dn-ico{display:none}.dn-ov .dn-div{margin:14px 0 10px}}' +
    '@media(prefers-reduced-motion:reduce){.dn-ov,.dn-ov *,.dn-ov *:before,.dn-ov *:after{animation:none!important;transition:none!important}.dn-ov .dn-st{opacity:1!important}.dn-ov .dn-dr{stroke-dashoffset:0}.dn-ov .dn-fx{display:none}}' +
    '@media print{.dn-ov{display:none!important}}';
  document.head.appendChild(css);

  var ov = document.createElement('div');
  ov.className = 'dn-ov';
  var prevFocus = null, prevOverflow = '';

  function lang() {
    var l = 'en';
    try { l = localStorage.getItem('dcuSL') || 'en'; } catch (e) {}
    return l === 'bn' ? 'bn' : 'en';
  }
  function sparks() {
    var X = [8, 21, 35, 49, 63, 77, 90, 14, 70], S = [3, 4, 2.5, 3.5, 2.5, 4, 3, 2, 3];
    var o = '';
    for (var i = 0; i < X.length; i++) {
      o += '<i style="--x:' + X[i] + '%;--s:' + S[i] + 'px;--t:' + (7 + (i % 4) * 1.6).toFixed(1) + 's;--dl:' + (i * 0.9).toFixed(1) + 's;--dx:' + ((i % 2 ? 1 : -1) * (14 + i * 3)) + 'px"></i>';
    }
    return o;
  }
  function render() {
    var l = lang(), t = T[l];
    ov.innerHTML =
      '<div class="dn-card dn-' + l + '" role="dialog" aria-modal="true" aria-labelledby="dnT">' +
        '<div class="dn-fx" aria-hidden="true"><b class="dn-gloss"></b>' + sparks() + '</div>' +
        '<div class="dn-main">' +
          '<div class="dn-bar">' +
            '<button type="button" class="dn-lang" data-a="lang" aria-label="Language"><span class="' + (l === 'bn' ? 'on' : '') + '">বাং</span><span class="' + (l === 'en' ? 'on' : '') + '">EN</span></button>' +
            '<button type="button" class="dn-x" data-a="close" aria-label="' + t.close + '">' + IC.x + '</button>' +
          '</div>' +
          '<div class="dn-ico">' + IC.shield + '</div>' +
          '<div class="dn-chip dn-st" style="--d:.3s"><i></i>' + t.chip + '</div>' +
          '<h2 class="dn-title dn-st" style="--d:.42s" id="dnT">' + t.title + '</h2>' +
          '<p class="dn-lead dn-st" style="--d:.58s">' + t.lead + '</p>' +
          '<div class="dn-div dn-st" style="--d:.7s">' + t.cap + '</div>' +
          '<div class="dn-tiles">' + t.tiles.map(function (it, i) {
            return '<div class="dn-tile dn-st" style="--d:' + (0.8 + i * 0.1).toFixed(2) + 's"><i>' + IC[it[0]] + '</i><b>' + it[1] + '</b></div>';
          }).join('') + '</div>' +
        '</div>' +
        '<div class="dn-ft">' +
          '<div class="dn-okw dn-st" style="--d:1.1s"><button type="button" class="dn-ok" data-a="close"><span>' + t.ok + '</span>' + IC.arrow + '</button></div>' +
          '<a class="dn-go dn-st" style="--d:1.2s" data-a="go" href="' + OFFICIAL + '" target="_blank" rel="noopener noreferrer"><span>' + t.off + '</span>' + IC.ext + '</a>' +
          '<p class="dn-fine dn-st" style="--d:1.25s">' + t.fine + '</p>' +
        '</div>' +
      '</div>';
  }

  function focusables() {
    return Array.prototype.slice.call(ov.querySelectorAll('button,a[href]'));
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var f = focusables(); if (!f.length) return;
    var first = f[0], last = f[f.length - 1], a = document.activeElement;
    if (!ov.contains(a)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
  }
  function close() {
    if (!ov.parentNode) return;
    snooze();
    document.removeEventListener('keydown', onKey, true);
    ov.classList.remove('in');
    document.documentElement.style.overflow = prevOverflow;
    window.dcuNoticeOpen = false;
    setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 380);
    try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) {}
    document.dispatchEvent(new CustomEvent('dcuNoticeClosed'));
  }

  ov.addEventListener('click', function (e) {
    if (e.target === ov) { close(); return; }
    var el = e.target.closest ? e.target.closest('[data-a]') : null;
    if (!el) return;
    var a = el.getAttribute('data-a');
    if (a === 'close') close();
    else if (a === 'go') close();                       // লিংক নিজে নতুন ট্যাবে খুলবে
    else if (a === 'lang') {
      var b = document.getElementById('langBtn');
      if (b) b.click();
      else { try { localStorage.setItem('dcuSL', lang() === 'bn' ? 'en' : 'bn'); } catch (er) {} }
      ov.classList.add('re');
      setTimeout(function () {
        render();
        var nb = ov.querySelector('.dn-lang'); if (nb) nb.focus();
      }, 0);
    }
  });

  function show() {
    render();
    prevFocus = document.activeElement;
    prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(ov);
    document.addEventListener('keydown', onKey, true);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        ov.classList.add('in');
        var ok = ov.querySelector('.dn-ok'); if (ok) ok.focus();
      });
    });
  }
  function start() { setTimeout(show, 350); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
