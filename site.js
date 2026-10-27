/* ============ সাইট কনফিগারেশন: শুধু এই অংশটুকু নিজের তথ্য দিয়ে বদলান ============ */
var DEV = {
  name: 'Md Abdullah Biswas',                       // আপনার নাম
  role: 'ওয়েব ডেভেলপার|Web Developer',               // পরিচিতি (বাংলা|English)
  bio: 'শিক্ষার্থীদের প্রতিদিনের কাজ সহজ করতে এই ওয়েবসাইট ও টুলগুলো তৈরি করেছি। আপনার মতামত পেলে সাইটটিকে আরও উন্নত করতে পারব।|I built this website and its tools to make everyday student work easier. Your feedback helps me improve it.',
  email: '',                                         // যেমন: you@gmail.com
  whatsapp: '',                                      // দেশ কোডসহ, যেমন: 8801XXXXXXXXX
  links: [                                           // খালি লিংক দেখানো হবে না
    ['GitHub', 'https://github.com/mdabdullahbiswas'],
    ['Facebook', ''],
    ['LinkedIn', ''],
    ['Messenger', '']
  ],
  skills: [],                                        // যেমন: ['HTML','CSS','JavaScript']
  repo: 'https://github.com/mdabdullahbiswas/dcu-cover-page'
};
/* ===================================================================== */
(function () {
  window.$DEV = DEV;
  var P = document.body.dataset.page || '', SL = 'bn';
  try { SL = localStorage.getItem('dcuSL') || 'bn'; } catch (e) {}
  var $L = function (s) { var p = String(s).split('|'); return SL === 'en' && p[1] ? p[1] : p[0]; };
  window.$L = $L; window.$lang = function () { return SL; };

  var TL = [['card', 'শেয়ার কার্ড|Share Card'], ['routine', 'ক্লাস রুটিন|Class Routine'], ['cgpa', 'CGPA ক্যালকুলেটর|CGPA Calculator'], ['exam', 'পরীক্ষা প্ল্যানার|Exam Planner'], ['pdf', 'PDF টুলকিট|PDF Toolkit']];
  var tl = TL.map(function (a) { return '<a class="t" href="tools.html#' + a[0] + '">' + a[1] + '</a>'; }).join('');
  var isI = P === 'index';

  var hd = '<div class="sh" role="banner"><div class="sh-in">' +
    '<a class="brand" href="./"><img src="logo.png" alt="" onerror="this.remove()"><span>Dhaka Central University</span></a>' +
    '<nav class="mn" id="mn" aria-label="Main">' +
    '<a class="t' + (isI ? ' on' : '') + '" href="./">অ্যাসাইনমেন্ট|Assignment</a>' +
    '<div class="dd"><button type="button" class="t' + (P === 'tools' ? ' on' : '') + '" id="ddb">টুলস ▾|Tools ▾</button><div class="ddm">' + tl + '</div></div>' +
    '<a class="t' + (P === 'about' ? ' on' : '') + '" href="about.html">ডেভেলপার|Developer</a>' +
    '<a class="t" href="about.html#feedback">মতামত|Feedback</a></nav>' +
    '<div class="ut">' + (isI ? '<button type="button" id="helpBtn" onclick="tour(0)" title="Guide">❓</button>' : '') +
    '<button type="button" id="langBtn"' + (isI ? ' onclick="setSite(SL===\'bn\'?\'en\':\'bn\')"' : '') + ' title="Language">' + (SL === 'bn' ? 'EN' : 'বাং') + '</button>' +
    '<button type="button" id="darkBtn" onclick="toggleDark()" title="Theme">🌙</button>' +
    '<button type="button" id="mt" aria-label="Menu" aria-expanded="false">☰</button></div></div></div>';

  var soc = DEV.links.filter(function (l) { return l[1]; }).map(function (l) { return '<a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + '</a>'; }).join('') +
    (DEV.email ? '<a href="mailto:' + DEV.email + '">' + DEV.email + '</a>' : '');
  var ft = '<div class="sf" role="contentinfo"><div class="sf-in">' +
    '<div><div class="b"><img src="logo.png" alt="" onerror="this.remove()"><span>Dhaka Central University</span></div>' +
    '<p class="t">শিক্ষার্থীদের জন্য বিনামূল্যের অ্যাসাইনমেন্ট কভার পেজ ও পড়াশোনার টুল।|Free assignment cover pages and study tools for students.</p><p id="cnt"></p>' +
    '<span class="t">বন্ধুদের সাথে শেয়ার করুন|Share with friends</span><a id="wa" target="_blank" rel="noopener">WhatsApp</a><a id="fb" target="_blank" rel="noopener">Facebook</a></div>' +
    '<div><h4 class="t">দ্রুত লিংক|Quick Links</h4><a class="t" href="./">অ্যাসাইনমেন্ট কভার পেজ|Assignment Cover Page</a>' + tl + '</div>' +
    '<div><h4 class="t">গোপনীয়তা|Privacy</h4><p class="t">আপনার সব তথ্য ও ফাইল শুধু আপনার ডিভাইসের ব্রাউজারেই থাকে। এগুলো কোনো সার্ভারে পাঠানো হয় না, তাই কেউ চাইলেও দেখতে পারে না।|Your data and files stay in your own browser. Nothing is sent to a server, so nobody else can see it.</p><a class="t" href="about.html#privacy">বিস্তারিত|Learn more</a></div>' +
    '<div><h4 class="t">ডেভেলপার|Developer</h4><a href="about.html"><b>' + DEV.name + '</b></a><span class="t" style="display:block">' + DEV.role + '</span>' + soc +
    '<a class="t" href="about.html#feedback">মতামত জানান|Send Feedback</a><a id="fbk" style="display:none"></a></div></div>' +
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
