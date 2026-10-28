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
  skills: [],                                        // যেমন: ['HTML','CSS','JavaScript']
  repo: 'https://github.com/mdabdullahbiswas/dcu-cover-page'
};
var RESULT_URL = 'https://result.7college.du.ac.bd/';   // রেজাল্ট পেজের লিংক
var COLS = [['Dhaka College','ঢাকা কলেজ'],['Eden Mohila College','ইডেন মহিলা কলেজ'],['Government Titumir College','সরকারি তিতুমীর কলেজ'],['Government Bangla College','সরকারি বাঙলা কলেজ'],['Begum Badrunnessa Government Mohila College','বেগম বদরুন্নেসা সরকারি মহিলা কলেজ'],['Government Shaheed Suhrawardy College','সরকারি শহীদ সোহরাওয়ার্দী কলেজ'],['Kabi Nazrul Government College','কবি নজরুল সরকারি কলেজ']];
var DEPTS = [['Bangla','বাংলা'],['English','ইংরেজি'],['Arabic','আরবি'],['History','ইতিহাস'],['Islamic History & Culture','ইসলামের ইতিহাস ও সংস্কৃতি'],['Philosophy','দর্শন'],['Islamic Studies','ইসলামিক স্টাডিজ'],['Political Science','রাষ্ট্রবিজ্ঞান'],['Sociology','সমাজবিজ্ঞান'],['Social Work','সমাজকর্ম'],['Economics','অর্থনীতি'],['Marketing','মার্কেটিং'],['Finance & Banking','ফিন্যান্স এন্ড ব্যাংকিং'],['Accounting','হিসাববিজ্ঞান'],['Management','ব্যবস্থাপনা'],['Physics','পদার্থবিজ্ঞান'],['Chemistry','রসায়ন'],['Botany','উদ্ভিদবিজ্ঞান'],['Zoology','প্রাণিবিদ্যা'],['Mathematics','গণিত'],['Geography & Environment','ভূগোল ও পরিবেশ'],['Soil Science','মৃত্তিকাবিজ্ঞান'],['Psychology','মনোবিজ্ঞান'],['Home Economics','গার্হস্থ্য অর্থনীতি'],['Statistics','পরিসংখ্যান']];
/* ===================================================================== */
(function () {
  window.$DEV = DEV;
  var P = document.body.dataset.page || '', SL = 'en';
  try { SL = localStorage.getItem('dcuSL') || 'en'; } catch (e) {}
  var $L = function (s) { var p = String(s).split('|'); return SL === 'en' && p[1] ? p[1] : p[0]; };
  window.$L = $L; window.$lang = function () { return SL; };

  // রেজাল্ট টুলস ড্রপডাউনের ভেতরে যুক্ত করা হয়েছে
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

  // মূল মেনুবার থেকে রেজাল্ট অপশনটি বাদ দিয়ে টুলস ড্রপডাউনে নেওয়া হয়েছে
  var hd = '<div class="sh" role="banner"><div class="sh-in">' +
    '<a class="brand" href="./"><img src="logo.png" alt="" onerror="this.remove()"><span>Dhaka Central University</span></a>' +
    '<nav class="mn" id="mn" aria-label="Main">' +
    '<a class="t' + (isI ? ' on' : '') + '" href="./">অ্যাসাইনমেন্ট|Assignment</a>' +
    '<div class="dd"><button type="button" class="t' + (P === 'tools' ? ' on' : '') + '" id="ddb">টুলস ▾|Tools ▾</button><div class="ddm">' + tl + '</div></div>' +
    '<a class="t' + (P === 'blood' ? ' on' : '') + '" href="blood.html">🩸 ডোনার ডিরেক্টরি|Donor Directory</a>' +
    '<a class="t' + (P === 'about' ? ' on' : '') + '" href="about.html">সম্পর্কে|About</a>' +
    '<a class="t' + (P === 'feedback' ? ' on' : '') + '" href="feedback.html">মতামত|Feedback</a></nav>' +
    '<div class="ut">' + (isI ? '<button type="button" id="helpBtn" onclick="tour(0)" title="Guide">❓</button>' : '') +
    '<button type="button" id="langBtn"' + (isI ? ' onclick="setSite(SL===\'bn\'?\'en\':\'bn\')"' : '') + ' title="Language">' + (SL === 'bn' ? 'EN' : 'বাং') + '</button>' +
    '<button type="button" id="darkBtn" onclick="toggleDark()" title="Theme">🌙</button>' +
    '<button type="button" id="mt" aria-label="Menu" aria-expanded="false">☰</button></div></div></div>';

  /* ---------- সোশ্যাল আইকন (ইনলাইন SVG: কোনো বাইরের ফাইল/ইন্টারনেট লাগে না) ---------- */
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
    'html{scroll-padding-top:76px}';
  document.head.appendChild(st);

  var soc = '<div class="soc">' + DEV.links.filter(function (l) { return l[1]; }).map(function (l) { return $SOC(l[0], l[1]); }).join('') +
    (DEV.email ? $SOC('email', 'mailto:' + DEV.email, 'Email', false) : '') + '</div>';
  var ft = '<div class="sf" role="contentinfo"><div class="sf-in">' +
    '<div><div class="b"><img src="logo.png" alt="" onerror="this.remove()"><span>Dhaka Central University</span></div>' +
    '<p class="t">শিক্ষার্থীদের জন্য বিনামূল্যের অ্যাসাইনমেন্ট কভার পেজ ও পড়াশোনার টুল।|Free assignment cover pages and study tools for students.</p><p id="cnt"></p>' +
    '<span class="t">বন্ধুদের সাথে শেয়ার করুন|Share with friends</span><a id="wa" target="_blank" rel="noopener">WhatsApp</a><a id="fb" target="_blank" rel="noopener">Facebook</a></div>' +
    '<div><h4 class="t">দ্রুত লিংক|Quick Links</h4><a class="t" href="./">অ্যাসাইনমেন্ট কভার পেজ|Assignment Cover Page</a>' + tl + '<a class="t" href="blood.html">🩸 ডোনার ডিরেক্টরি|Donor Directory</a></div>' +
    '<div><h4 class="t">গোপনীয়তা|Privacy</h4><p class="t">আপনার সব তথ্য ও ফাইল শুধু আপনার ডিভাইসের ব্রাউজারেই থাকে। এগুলো কোনো সার্ভারে পাঠানো হয় না, তাই কেউ চাইলেও দেখতে পারে না।|Your data and files stay in your own browser. Nothing is sent to a server, so nobody else can see it.</p><a class="t" href="about.html#privacy">বিস্তারিত|Learn more</a></div>' +
    '<div><h4 class="t">ডেভেলপার|Developer</h4><a href="about.html"><b>' + DEV.name + '</b></a><span class="t" style="display:block">' + DEV.role + '</span>' + soc +
    '<a class="t" href="feedback.html">মতামত জানান|Send Feedback</a><a id="fbk" style="display:none"></a></div></div>' +
    '<div class="sf-note"><p class="t">⚠️ এটি একটি আন-অফিশিয়াল (অনানুষ্ঠানিক) ওয়েবসাইট। Dhaka Central University কর্তৃপক্ষের সাথে এর কোনো সরকারি সম্পর্ক বা অনুমোদন নেই। অফিশিয়াল তথ্যের জন্য বিশ্ববিদ্যালয়ের নিজস্ব নোটিশ ও ওয়েবসাইট দেখুন।|⚠️ This is an unofficial website. It has no official affiliation with, or endorsement from, Dhaka Central University. For official information, please refer to the university\'s own notices and website.</p>' +
    '<p>© ' + new Date().getFullYear() + ' · <span class="t">তৈরি করেছেন|Developed by</span> <b>' + DEV.name + '</b></p></div></div>';

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

  if (!isI) {
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
  }
  applyL();
})();

/* সব পাতায় জরুরি রক্ত নোটিশ বার দেখানো */
(function() {
    if (document.body.dataset.page === 'blood') return;

    fetch("https://firestore.googleapis.com/v1/projects/dcu-blood-bank/databases/(default)/documents/blood_requests")
        .then(res => res.json())
        .then(data => {
            if (!data.documents || !data.documents.length) return;
            const today = new Date().toISOString().slice(0, 10);
            const openRequests = data.documents
                .map(d => {
                    const f = d.fields || {};
                    return {
                        group: f.group?.stringValue || '',
                        hospital: f.hospital?.stringValue || '',
                        area: f.area?.stringValue || '',
                        status: f.status?.stringValue || '',
                        neededDate: f.neededDate?.stringValue || ''
                    };
                })
                .filter(r => r.status === 'open' && r.neededDate >= today);

            if (!openRequests.length) return;
            const r = openRequests[0];
            const isBn = (localStorage.getItem('dcuSL') || 'bn') === 'bn';

            const bar = document.createElement('a');
            bar.href = 'blood.html';
            bar.className = 'global-blood-ticker';
            bar.style.display = 'flex';
            bar.innerHTML = `
                <div class="gbt-left">
                    <span class="gbt-badge">${r.group}</span>
                    <span>🚨 ${isBn ? 'জরুরি রক্ত প্রয়োজন:' : 'Urgent blood needed:'} <b>${r.hospital}</b> (${r.area})</span>
                </div>
                <div class="gbt-btn">${isBn ? 'বিস্তারিত দেখুন ›' : 'Details ›'}</div>
            `;

            const hdr = document.getElementById('hdr');
            if (hdr) hdr.insertAdjacentElement('afterend', bar);
            else document.body.insertAdjacentElement('afterbegin', bar);
        })
        .catch(() => {});
})();
