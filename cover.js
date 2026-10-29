/**
 * DCU Cover Page Generator Logic
 */
const $ = id => document.getElementById(id);
const KEY = 'dcuCoverV2';
const F = ['campus','dept','courseCode','courseName','topic','studentName','studentClass','studentRoll','session','mobile','submitDate','teacherInfo','members','declText','apprText','ackText','tocText'];
const D = {
  campus: 'MAIN CAMPUS, DHAKA',
  dept: 'DEPARTMENT OF COMPUTER SCIENCE',
  topic: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE',
  studentName: 'ABDUL KARIM',
  studentClass: 'BSc Honours 1st Year',
  studentRoll: '101',
  session: '2025-26',
  mobile: '01700000000',
  submitDate: '12/02/2026',
  teacherInfo: 'Prof. Dr. X\nAssociate Professor\nCourse Instructor',
  members: 'ABDUL KARIM, 101\nRAHIM UDDIN, 102\nKARIMA BEGUM, 103'
};
const P = {
  campus: ['prev-campus'],
  dept: ['prev-dept','prev-tdept'],
  topic: ['prev-topic'],
  studentName: ['prev-sname'],
  studentClass: ['prev-sclass'],
  studentRoll: ['prev-sroll'],
  session: ['prev-session'],
  mobile: ['prev-mobile'],
  submitDate: ['prev-date']
};

const EXTRA = ['docType','lang','digits','font','bs','dateFmt','wm','sign','gut'];
const CHK = ['pgDecl','pgAppr','pgAck','pgToc'];
const LG = {
  en: {
    uni: 'DHAKA CENTRAL UNIVERSITY',
    by: 'SUBMITTED BY',
    byg: 'SUBMITTED BY (GROUP)',
    to: 'SUBMITTED TO',
    roll: 'Class Roll:',
    cls: 'Class/Degree:',
    ses: 'Session:',
    mob: 'Mobile No:',
    dt: 'Submission Date:',
    course: 'COURSE: ',
    r: 'Roll: ',
    col: 'Dhaka Central University',
    sg1: "Student's Signature",
    sg2: "Teacher's Signature"
  },
  bn: {
    uni: 'ঢাকা সেন্ট্রাল ইউনিভার্সিটি',
    by: 'জমাদানকারী',
    byg: 'জমাদানকারী (গ্রুপ)',
    to: 'জমা গ্রহণকারী',
    roll: 'ক্লাস রোল:',
    cls: 'ক্লাস/ডিগ্রি:',
    ses: 'সেশন:',
    mob: 'মোবাইল নম্বর:',
    dt: 'জমার তারিখ:',
    course: 'কোর্স: ',
    r: 'রোল: ',
    col: 'ঢাকা সেন্ট্রাল ইউনিভার্সিটি',
    sg1: 'শিক্ষার্থীর স্বাক্ষর',
    sg2: 'শিক্ষকের স্বাক্ষর'
  }
};
const TY = {
  assignment: ['ASSIGNMENT','অ্যাসাইনমেন্ট','TOPIC','বিষয়'],
  lab: ['LAB REPORT','ল্যাব রিপোর্ট','EXPERIMENT','পরীক্ষণ'],
  presentation: ['PRESENTATION','প্রেজেন্টেশন','TOPIC','বিষয়'],
  project: ['PROJECT','প্রজেক্ট','TITLE','শিরোনাম'],
  quiz: ['QUIZ','কুইজ','SUBJECT','বিষয়']
};

const SP = {
  en: {
    decl: 'DECLARATION',
    appr: 'APPROVAL CERTIFICATE',
    ack: 'ACKNOWLEDGEMENT',
    toc: 'TABLE OF CONTENTS',
    sig: 'Signature',
    date: 'Date',
    sup: 'Supervisor',
    declT: (n,t,k,s) => `I, ${n}, hereby declare that the ${k} titled “${t}” is my own original work${s ? ', carried out under the supervision of ' + s : ''}. It has not been submitted elsewhere for any other degree, diploma or course.`,
    apprT: (n,r,ss,t,k) => `This is to certify that ${n} (Roll: ${r}, Session: ${ss}) has satisfactorily completed the ${k} titled “${t}” under my supervision.`,
    ackD: s => `I would like to express my sincere gratitude to everyone who helped me complete this work. I am especially thankful to my respected supervisor${s ? ', ' + s : ''}, for continuous guidance, encouragement and valuable suggestions. I also thank my teachers, friends and family for their constant support.`,
    toc0: 'Introduction | 1\nLiterature Review | 5\nMethodology | 12\nResults and Discussion | 20\nConclusion | 30\nReferences | 34'
  },
  bn: {
    decl: 'ঘোষণাপত্র',
    appr: 'অনুমোদনপত্র',
    ack: 'কৃতজ্ঞতা স্বীকার',
    toc: 'সূচিপত্র',
    sig: 'স্বাক্ষর',
    date: 'তারিখ',
    sup: 'তত্ত্বাবধায়ক',
    declT: (n,t,k,s) => `আমি ${n} ঘোষণা করছি যে “${t}” শীর্ষক ${k} আমার নিজস্ব মৌলিক কর্ম${s ? ' এবং ' + s + '-এর তত্ত্বাবধানে সম্পাদিত' : ''}। এটি অন্য কোনো ডিগ্রি, ডিপ্লোমা বা কোর্সের জন্য কোথাও জমা দেওয়া হয়নি।`,
    apprT: (n,r,ss,t,k) => `এই মর্মে প্রত্যয়ন করা যাচ্ছে যে ${n} (রোল: ${r}, সেশন: ${ss}) আমার তত্ত্বাবধানে “${t}” শীর্ষক ${k} সন্তোষজনকভাবে সম্পন্ন করেছেন।`,
    ackD: s => `এই কাজটি সম্পন্ন করতে যাঁরা সহায়তা করেছেন, তাঁদের সবার প্রতি আমি আন্তরিক কৃতজ্ঞতা জানাই। বিশেষত আমার শ্রদ্ধেয় তত্ত্বাবধায়ক${s ? ' ' + s : ''}-এর নিরন্তর দিকনির্দেশনা, উৎসাহ ও মূল্যবান পরামর্শের জন্য আমি ঋণী। এছাড়া শিক্ষকমণ্ডলী, বন্ধুবান্ধব ও পরিবারের সদস্যদের সহযোগিতার জন্যও ধন্যবাদ জানাই।`,
    toc0: 'ভূমিকা | 1\nসাহিত্য পর্যালোচনা | 5\nপদ্ধতি | 12\nফলাফল ও আলোচনা | 20\nউপসংহার | 30\nগ্রন্থপঞ্জি | 34'
  }
};

const UI = Object.fromEntries([
  ['তথ্য প্রদান করুন','Enter Information'],
  ['📁 সংরক্ষিত প্রোফাইল (কোর্স/শিক্ষক অনুযায়ী):','📁 Saved Profiles (by course / teacher):'],
  ['কভার পেজ টেমপ্লেট নির্বাচন করুন:','Select Cover Page Template:'],
  ['🎨 থিমের রং:','🎨 Theme Colour:'],
  ['← কাস্টম রং','← Custom colour'],
  ['📝 কভারের ধরন:','📝 Cover Type:'],
  ['অ্যাসাইনমেন্ট','Assignment'],
  ['ল্যাব রিপোর্ট','Lab Report'],
  ['প্রেজেন্টেশন','Presentation'],
  ['প্রজেক্ট / থিসিস','Project / Thesis'],
  ['কুইজ / পরীক্ষা','Quiz / Exam'],
  ['🌐 কভারের ভাষা:','🌐 Cover Language:'],
  ['🔢 সংখ্যা:','🔢 Digits:'],
  ['🔤 শিরোনামের ফন্ট:','🔤 Title Font:'],
  ['🖼️ সীমারেখা (বর্ডার):','🖼️ Border:'],
  ['সীমারেখাবিহীন','No border'],
  ['দ্বৈত রেখা','Double line'],
  ['একক রেখা','Single line'],
  ['অলংকৃত','Ornate'],
  ['🏛️ নিজস্ব লোগো (ঐচ্ছিক):','🏛️ Custom Logo (optional):'],
  ['↩️ মূল লোগো পুনরুদ্ধার','↩️ Restore default logo'],
  ['💧 ওয়াটারমার্ক:','💧 Watermark:'],
  ['টেমপ্লেট অনুযায়ী','Per template'],
  ['চালু','On'],
  ['বন্ধ','Off'],
  ['✍️ স্বাক্ষরের স্থান:','✍️ Signature Area:'],
  ['ক্যাম্পাসের নাম:','Campus Name:'],
  ['ডিপার্টমেন্ট:','Department:'],
  ['কোর্স কোড (ঐচ্ছিক):','Course Code (optional):'],
  ['কোর্সের নাম (ঐচ্ছিক):','Course Name (optional):'],
  ['অ্যাসাইনমেন্টের বিষয় (Topic):','Topic:'],
  ['Submitted By (শিক্ষার্থী)','Submitted By (Student)'],
  ['Submitted To (শিক্ষক)','Submitted To (Teacher)'],
  ['জমাদানের ধরন:','Submission Type:'],
  ['👤 একক (Individual)','👤 Individual'],
  ['👥 গ্রুপ (Group)','👥 Group'],
  ['শিক্ষার্থীর পূর্ণ নাম:','Student Full Name:'],
  ['ক্লাস রোল নম্বর:','Class Roll No.:'],
  ['গ্রুপ সদস্য (প্রতি লাইনে একজন: নাম, রোল):','Group Members (one per line: Name, Roll):'],
  ['সর্বোচ্চ ৮ জন সদস্য সুন্দরভাবে প্রদর্শিত হবে।','Up to 8 members fit neatly.'],
  ['ক্লাস/ডিগ্রি:','Class / Degree:'],
  ['অ্যাকাডেমিক সেশন:','Academic Session:'],
  ['মোবাইল নম্বর:','Mobile Number:'],
  ['জমাদানের তারিখ:','Submission Date:'],
  ['📅 আজকের তারিখ',"📅 Today's date"],
  ['শিক্ষকের নাম ও পদবি (প্রতি লাইনে একজন):','Teacher Name & Designation (one per line):'],
  ['সংরক্ষিত শিক্ষক (ক্লিক করে ব্যবহার করুন):','Saved Teachers (click to use):'],
  ['তালিকা মুছুন','Clear list'],
  ['অতিরিক্ত পেজ (থিসিস / প্রজেক্ট)','Extra Pages (Thesis / Project)'],
  ['ঘোষণাপত্র (Declaration)','Declaration'],
  ['অনুমোদনপত্র (Approval Certificate)','Approval Certificate'],
  ['কৃতজ্ঞতা স্বীকার (Acknowledgement)','Acknowledgement'],
  ['সূচিপত্র (Table of Contents)','Table of Contents'],
  ['প্রতি লাইনে: অধ্যায়ের নাম | পৃষ্ঠা নম্বর','One per line: Chapter title | Page number'],
  ['🖼️ PNG ডাউনলোড','🖼️ Download PNG'],
  ['📝 Word (সম্পাদনাযোগ্য)','📝 Word (editable)'],
  ['🔗 লিংক শেয়ার','🔗 Share Link'],
  ['🗑️ সব তথ্য মুছে ফেলুন','🗑️ Clear All Data'],
  ['✅ আপনার তথ্য এই ব্রাউজারে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়; পরবর্তী ব্যবহারে পুনরায় লিখতে হবে না।','✅ Your data is saved automatically in this browser, so you won’t need to retype it next time.'],
  ['লাইভ প্রিভিউ','Live Preview'],
  ['বন্ধুদের সঙ্গে শেয়ার করুন:','Share with friends:'],
  ['💬 মতামত জানান','💬 Send Feedback'],
  ['এড়িয়ে যান','Skip'],
  ['পরবর্তী','Next'],
  ['সমাপ্ত','Finish'],
  ['— নির্বাচন করুন —','— Select —'],
  ['⚠️ মোবাইল নম্বরটি সঠিক নয় (উদাহরণ: 01712345678)','⚠️ Mobile number looks invalid (e.g. 01712345678)'],
  ['⚠️ লেখা অত্যধিক হওয়ায় কভারের নিচের অংশ কেটে যেতে পারে; তথ্য সংক্ষিপ্ত করুন।','⚠️ Too much text; the bottom of the cover may be cut off. Please shorten it.'],
  ['ছবি প্রস্তুত করা হচ্ছে...','Preparing image...'],
  ['ডাউনলোড শুরু হয়েছে','Download started'],
  ['ছবি তৈরি করা যায়নি; অনুগ্রহ করে PDF ব্যবহার করুন','Could not create the image; please use PDF'],
  ['লিংক কপি করা হয়েছে','Link copied'],
  ['প্রোফাইল সংরক্ষিত হয়েছে','Profile saved'],
  ['প্রোফাইল লোড হয়েছে','Profile loaded'],
  ['ছবির আকার বড়, সংরক্ষণ করা যায়নি','Image too large to save'],
  ['Word ফাইল ডাউনলোড হয়েছে','Word file downloaded'],
  ['লিংকটি কপি করুন:','Copy this link:'],
  ['১/৪ — প্রথমে পছন্দের টেমপ্লেট নির্বাচন করুন।','1/4 — Start by choosing a template.'],
  ['২/৪ — পছন্দমতো থিমের রং নির্বাচন করুন।','2/4 — Pick a theme colour you like.'],
  ['৩/৪ — ডিপার্টমেন্ট, কোর্স ও নিজের তথ্য পূরণ করুন; ডান পাশে সরাসরি প্রিভিউ দেখা যাবে।','3/4 — Fill in department, course and your details; the preview updates live.'],
  ['৪/৪ — সবশেষে PDF, PNG বা Word আকারে ডাউনলোড করুন।','4/4 — Finally, download as PDF, PNG or Word.'],
  ['📎 বাইন্ডিং মার্জিন (বাম পাশে):','📎 Binding Margin (left side):'],
  ['৫ মিমি — হালকা স্ট্যাপল','5 mm — light staple'],
  ['১০ মিমি — স্ট্যাপল / ক্লিপ','10 mm — staple / clip'],
  ['১৫ মিমি — স্পাইরাল','15 mm — spiral'],
  ['২০ মিমি — হার্ড বাইন্ডিং','20 mm — hard binding'],
  ['বাইন্ডিংয়ে বাম পাশ ঢাকা পড়ে; এটি দিলে লেখা ও বর্ডার ডানে সরে আসবে। প্রিভিউতে ধূসর অংশটিই বাইন্ডিং এলাকা।','Binding hides part of the left edge. This shifts text and borders to the right; the grey strip in the preview is the binding area.']
]);

let SL = 'bn';
let ti = -1;

const val = id => {
  const el = $(id);
  return (el && el.value.trim()) || D[id] || '';
};
const lines = t => (t || '').split('\n').map(l => l.trim()).filter(Boolean);
const T = b => SL === 'en' ? (UI[b] || b) : b;
const L = () => LG[($('lang') && $('lang').value) || 'en'];
const esc = t => String(t || '').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

function toast(msg) {
  const t = $('toast');
  if (!t) return;
  t.textContent = T(msg);
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 2200);
}

/* ========================================================
   ✨ আধুনিক কাস্টম পপআপ মোডাল সিস্টেম
   ======================================================== */
function showModal({ icon = '💾', title, text, input = false, value = '', placeholder = '', confirmText = 'ঠিক আছে', cancelText = 'বাতিল', isDanger = false, onConfirm }) {
  const old = document.getElementById('customModalOverlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'customModalOverlay';
  overlay.className = 'c-modal-overlay';

  overlay.innerHTML = `
    <div class="c-modal-box">
      <div class="c-modal-head">
        <span class="c-modal-icon">${icon}</span>
        <h3>${esc(title)}</h3>
      </div>
      ${text ? `<p class="c-modal-desc">${esc(text)}</p>` : ''}
      ${input ? `<input type="text" id="cModalInput" class="c-modal-input" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off" maxlength="60">` : ''}
      <div class="c-modal-actions">
        <button type="button" class="c-modal-btn cancel" id="cModalCancel">${esc(cancelText)}</button>
        <button type="button" class="c-modal-btn confirm ${isDanger ? 'danger' : ''}" id="cModalConfirm">${esc(confirmText)}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('active'));

  const inp = document.getElementById('cModalInput');
  const confirmBtn = document.getElementById('cModalConfirm');
  const cancelBtn = document.getElementById('cModalCancel');

  if (inp) {
    inp.focus();
    inp.select();
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        confirmBtn.click();
      }
    });
  } else {
    confirmBtn.focus();
  }

  const close = () => {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 250);
    document.removeEventListener('keydown', onKey);
  };

  const onKey = e => {
    if (e.key === 'Escape') close();
  };
  document.addEventListener('keydown', onKey);

  cancelBtn.onclick = close;
  overlay.onclick = e => {
    if (e.target === overlay) close();
  };

  confirmBtn.onclick = () => {
    const enteredVal = inp ? inp.value.trim() : true;
    if (input && !enteredVal) {
      if (inp) {
        inp.classList.add('shake');
        inp.focus();
        setTimeout(() => inp.classList.remove('shake'), 400);
      }
      return;
    }
    close();
    if (typeof onConfirm === 'function') onConfirm(enteredVal);
  };
}

function setTheme(p, a) {
  document.documentElement.style.setProperty('--pri', p);
  document.documentElement.style.setProperty('--acc', a);
  // color-mix এড়াতে সরাসরি ভ্যালু সেট
  document.documentElement.style.setProperty('--pri2', p);
  document.documentElement.style.setProperty('--acc2', a);
  if ($('cPri')) $('cPri').value = p;
  if ($('cAcc')) $('cAcc').value = a;
}

function get() {
  const f = {};
  F.forEach(i => { const el = $(i); f[i] = el ? el.value : ''; });
  return {
    t: $('templateSelector') ? $('templateSelector').value : 'theme-classic',
    m: $('mode') ? $('mode').value : 'single',
    c: [$('cPri') ? $('cPri').value : '#0a2240', $('cAcc') ? $('cAcc').value : '#e5a83b'],
    x: EXTRA.map(i => $(i) ? $(i).value : ''),
    k: CHK.map(i => $(i) ? $(i).checked : false),
    f
  };
}

function render() {
  const cover = $('cover-template');
  if (!cover) return;

  const grp = $('mode') && $('mode').value === 'group';
  cover.className = 'a4-page ' + ($('templateSelector') ? $('templateSelector').value : 'theme-classic') +
                    ' bs-' + ($('bs') ? $('bs').value : 'none') +
                    ($('lang') && $('lang').value === 'bn' ? ' bn-lang' : '') +
                    ' wm-' + ($('wm') ? $('wm').value : 'auto');

  if ($('prev-sign')) $('prev-sign').style.display = ($('sign') && $('sign').value === 'on') ? 'flex' : 'none';
  document.documentElement.style.setProperty('--gut', (($('gut') ? +$('gut').value : 0) || 0) + 'mm');
  if ($('font')) cover.style.setProperty('--font', "'" + $('font').value + "'");

  document.querySelectorAll('.tpl').forEach(b => b.classList.toggle('on', b.dataset.v === ($('templateSelector') ? $('templateSelector').value : '')));
  document.body.classList.toggle('grp', grp);

  for (const id in P) {
    P[id].forEach(pid => { if ($(pid)) $(pid).textContent = val(id); });
  }

  if ($('prev-tcampus')) {
    $('prev-tcampus').textContent = ($('campus') && $('campus').value.trim()) ? 'Dhaka Central University, ' + $('campus').value.trim() : 'Dhaka Central University';
  }

  loc();

  const course = [$('courseCode') ? $('courseCode').value.trim() : '', $('courseName') ? $('courseName').value.trim() : ''].filter(Boolean).join(' — ');
  if ($('prev-course')) {
    $('prev-course').textContent = course ? L().course + course : '';
    $('prev-course').style.display = course ? 'block' : 'none';
  }

  const tBox = $('prev-teachers');
  if (tBox) {
    tBox.textContent = '';
    lines(val('teacherInfo')).forEach((l, i) => {
      const p = document.createElement('p');
      p.className = i ? 'teacher-item' : 'teacher-item lead';
      p.textContent = l;
      tBox.appendChild(p);
    });
  }

  const mBox = $('prev-members');
  if (mBox) {
    mBox.textContent = '';
    lines(val('members')).forEach((l, i) => {
      const k = Math.max(l.lastIndexOf(','), l.lastIndexOf('|'));
      const name = k > -1 ? l.slice(0, k).trim() : l;
      const roll = k > -1 ? l.slice(k + 1).trim() : '';
      const row = document.createElement('p');
      row.className = 'member uppercase';
      const a = document.createElement('span');
      a.textContent = (i + 1) + '. ' + name;
      const b = document.createElement('span');
      b.textContent = roll ? L().r + roll : '';
      row.append(a, b);
      mBox.appendChild(row);
    });
  }

  supRender();
  pvTabs();
  fit();
  digitsPass();
  checks();
  pvLayout();

  try { localStorage.setItem(KEY, JSON.stringify(get())); } catch(e){}
}

function apply(s) {
  F.forEach(i => { if ($(i)) $(i).value = (s.f && s.f[i]) || ''; });
  if ($('templateSelector')) $('templateSelector').value = s.t || 'theme-classic';
  if ($('mode')) $('mode').value = s.m || 'single';
  EXTRA.forEach((i, k) => {
    if ($(i)) $(i).value = (s.x && s.x[k] !== undefined && s.x[k] !== '') ? s.x[k] : ($(i).options[0] ? $(i).options[0].value : '');
  });
  CHK.forEach((i, j) => { if ($(i)) $(i).checked = !!(s.k && s.k[j]); });
  setTheme(...(s.c || ['#0a2240', '#e5a83b']));
  render();
}

function loc() {
  const l = L();
  const b = ($('lang') && $('lang').value === 'bn') ? 1 : 0;
  const docTypeVal = ($('docType') && $('docType').value) || 'assignment';
  const ty = TY[docTypeVal];
  const c = ($('campus') && $('campus').value.trim()) || '';

  if ($('prev-uni')) $('prev-uni').textContent = l.uni;
  if ($('prev-bylabel')) $('prev-bylabel').textContent = ($('mode') && $('mode').value === 'group') ? l.byg : l.by;
  if ($('prev-tolabel')) $('prev-tolabel').textContent = l.to;
  if ($('prev-doc')) $('prev-doc').textContent = ty[b];
  if ($('prev-tlabel')) $('prev-tlabel').textContent = ty[2 + b];

  document.querySelectorAll('[data-k]').forEach(e => {
    if (l[e.dataset.k]) e.textContent = l[e.dataset.k];
  });

  if ($('prev-tcampus')) $('prev-tcampus').textContent = l.col + (c ? ', ' + c : '');
}

function digitsPass() {
  if (!$('digits') || $('digits').value !== 'bn') return;
  const m = '০১২৩৪৫৬৭৮৯';
  [$('cover-template'), $('supPages')].forEach(r => {
    if (!r) return;
    const w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) n.nodeValue = n.nodeValue.replace(/\d/g, d => m[d]);
  });
}

function checks() {
  const m = $('mobile') ? $('mobile').value.replace(/[\s-]/g, '') : '';
  const c = $('cover-template');
  if ($('mobWarn')) $('mobWarn').textContent = (!m || /^(\+?88)?01[3-9]\d{8}$/.test(m)) ? '' : T('⚠️ মোবাইল নম্বরটি সঠিক নয় (উদাহরণ: 01712345678)');
  if ($('ovWarn') && c) $('ovWarn').textContent = c.scrollHeight > c.clientHeight + 2 ? T('⚠️ লেখা অত্যধিক হওয়ায় কভারের নিচের অংশ কেটে যেতে পারে; তথ্য সংক্ষিপ্ত করুন।') : '';
}

function fit() {
  const c = $('cover-template');
  if (!c) return;
  let f = 1;
  c.style.setProperty('--fit', 1);
  while (c.scrollHeight > c.clientHeight + 2 && f > .55) {
    f = Math.round((f - .05) * 100) / 100;
    c.style.setProperty('--fit', f);
  }
}

function supRender() {
  const supContainer = $('supPages');
  if (!supContainer) return;

  const bn = $('lang') && $('lang').value === 'bn';
  const S = SP[bn ? 'bn' : 'en'];
  const docTypeVal = ($('docType') && $('docType').value) || 'assignment';
  const ty = TY[docTypeVal];
  const kind = bn ? ty[1] : ty[0].toLowerCase();
  const grp = $('mode') && $('mode').value === 'group';
  const tl = lines(val('teacherInfo'));
  const sv = esc(tl[0] || (bn ? 'তত্ত্বাবধায়ক' : 'Supervisor'));
  const names = esc(grp ? lines(val('members')).map(l => l.split(/[,|]/)[0].trim()).join(', ') : val('studentName'));
  const topic = esc(val('topic'));
  const roll = esc(val('studentRoll'));
  const ses = esc(val('session'));

  const pg = (badgeTitle, mainTitle, contentHtml) => `
    <div class="page-sep-label">📄 ${badgeTitle}</div>
    <div class="a4-page sup-page${bn ? ' bn-lang' : ''}">
      <h2 class="sp-t">${mainTitle}</h2>
      ${contentHtml}
    </div>`;
  const sg = (leftText, rightText) => `
    <div class="sg">
      <div><span class="ln"></span><p>${leftText}</p></div>
      <div><span class="ln"></span><p>${rightText}</p></div>
    </div>`;

  let h = '';
  let activePageCount = 1;

  // ১. ঘোষণাপত্র
  const isDecl = $('pgDecl') && $('pgDecl').checked;
  if ($('declBox')) $('declBox').style.display = isDecl ? 'block' : 'none';
  if (isDecl) {
    activePageCount++;
    const customDecl = $('declText') && $('declText').value.trim();
    const declBody = customDecl ? esc(customDecl).replace(/\n/g, '<br>') : S.declT(names, topic, kind, sv);
    h += pg(
      bn ? 'পৃষ্ঠা ' + activePageCount + ': ঘোষণাপত্র' : 'Page ' + activePageCount + ': Declaration',
      S.decl,
      `<p class="sp-p">${declBody}</p>${sg(S.sig + ' — ' + names, S.date)}`
    );
  }

  // ২. অনুমোদনপত্র
  const isAppr = $('pgAppr') && $('pgAppr').checked;
  if ($('apprBox')) $('apprBox').style.display = isAppr ? 'block' : 'none';
  if (isAppr) {
    activePageCount++;
    const customAppr = $('apprText') && $('apprText').value.trim();
    const apprBody = customAppr ? esc(customAppr).replace(/\n/g, '<br>') : S.apprT(names, roll, ses, topic, kind);
    h += pg(
      bn ? 'পৃষ্ঠা ' + activePageCount + ': অনুমোদনপত্র' : 'Page ' + activePageCount + ': Approval Certificate',
      S.appr,
      `<p class="sp-p">${apprBody}</p>${sg(S.sup + ' — ' + sv + (tl[1] ? '<br>' + esc(tl[1]) : ''), S.date)}`
    );
  }

  // ৩. কৃতজ্ঞতা স্বীকার
  const isAck = $('pgAck') && $('pgAck').checked;
  if ($('ackBox')) $('ackBox').style.display = isAck ? 'block' : 'none';
  if (isAck) {
    activePageCount++;
    const customAck = $('ackText') && $('ackText').value.trim();
    const ackBody = (customAck ? esc(customAck) : S.ackD(sv)).replace(/\n/g, '<br>');
    h += pg(
      bn ? 'পৃষ্ঠা ' + activePageCount + ': কৃতজ্ঞতা স্বীকার' : 'Page ' + activePageCount + ': Acknowledgement',
      S.ack,
      `<p class="sp-p">${ackBody}</p><p class="sp-r">${names}</p>`
    );
  }

  // ৪. সূচিপত্র
  const isToc = $('pgToc') && $('pgToc').checked;
  if ($('tocBox')) $('tocBox').style.display = isToc ? 'block' : 'none';
  if (isToc) {
    activePageCount++;
    const tocRaw = ($('tocText') && $('tocText').value) || S.toc0;
    const tocItems = lines(tocRaw).map(l => {
      const k = l.lastIndexOf('|');
      const a = k > -1 ? l.slice(0, k).trim() : l;
      const b = k > -1 ? l.slice(k + 1).trim() : '';
      return `<div class="toc"><span>${esc(a)}</span><i></i><span>${esc(b)}</span></div>`;
    }).join('');
    h += pg(
      bn ? 'পৃষ্ঠা ' + activePageCount + ': সূচিপত্র' : 'Page ' + activePageCount + ': Table of Contents',
      S.toc,
      tocItems
    );
  }

  supContainer.innerHTML = h;

  const badge = $('pageCountBadge');
  if (badge) {
    badge.textContent = activePageCount > 1 
      ? (bn ? `(মোট ${activePageCount}টি পেজ)` : `(Total ${activePageCount} Pages)`) 
      : '';
  }
}

function applyUI() {
  document.documentElement.lang = SL;
  document.querySelectorAll('.form-section label, .form-section h2, .form-section h3, .form-section button, .form-section option, .form-section small, .form-section .hint:not(.warn), .form-section .cb span, .preview-section > h2, footer span, footer a, header a, #tourBox button').forEach(e => {
    if (e.children.length) return;
    const k = e.dataset.bn || (e.dataset.bn = e.textContent.trim());
    if (UI[k]) e.textContent = SL === 'en' ? UI[k] : k;
  });
}

// ইনফিনিট লুপ প্রতিরোধের লক
let inLangSync = false;
function setSite(l, fromExternal = false) {
  if (inLangSync) return;
  inLangSync = true;
  try {
    SL = l;
    try { localStorage.setItem('dcuSL', l); } catch(e){}
    if ($('langBtn')) $('langBtn').textContent = l === 'bn' ? 'EN' : 'বাং';
    applyUI();
    if (!fromExternal && typeof window.$applyL === 'function') {
      window.$applyL(l);
    }
    profList($('profSel') ? $('profSel').value : '');
    showCnt();
    render();
  } finally {
    inLangSync = false;
  }
}

function today() {
  const d = new Date();
  const l = ($('lang') && $('lang').value === 'bn') ? 'bn-BD' : 'en-GB';
  if ($('submitDate')) {
    $('submitDate').value = ($('dateFmt') && $('dateFmt').value === 'long') ? d.toLocaleDateString(l, {day:'numeric',month:'long',year:'numeric'}) : d.toLocaleDateString('en-GB');
  }
  render();
}

const TOUR = [
  ['.gal', '১/৪ — প্রথমে পছন্দের টেমপ্লেট নির্বাচন করুন।'],
  ['.themes', '২/৪ — পছন্দমতো থিমের রং নির্বাচন করুন।'],
  ['#dept', '৩/৪ — ডিপার্টমেন্ট, কোর্স ও নিজের তথ্য পূরণ করুন; ডান পাশে সরাসরি প্রিভিউ দেখা যাবে।'],
  ['.btns .full', '৪/৪ — সবশেষে PDF, PNG বা Word আকারে ডাউনলোড করুন।']
];

function tour(i) {
  document.querySelectorAll('.tour-hl').forEach(e => e.classList.remove('tour-hl'));
  if (i >= TOUR.length) {
    if ($('tourBox')) $('tourBox').style.display = 'none';
    try { localStorage.setItem('dcuTour', '1'); } catch(e){}
    return;
  }
  ti = i;
  const el = document.querySelector(TOUR[i][0]);
  if (!el) return;
  el.classList.add('tour-hl');
  el.scrollIntoView({ block: 'center', behavior: 'smooth' });
  if ($('tourTxt')) $('tourTxt').textContent = T(TOUR[i][1]);
  if ($('tourNext')) $('tourNext').textContent = T(i === TOUR.length - 1 ? 'সমাপ্ত' : 'পরবর্তী');
  if ($('tourBox')) $('tourBox').style.display = 'block';
}

const PK = 'dcuProfiles';
const profs = () => { try { return JSON.parse(localStorage.getItem(PK)) || {}; } catch(e){ return {}; } };

function profList(sel) {
  const s = $('profSel');
  if (!s) return;
  s.innerHTML = '';
  s.add(new Option(T('— নির্বাচন করুন —'), ''));
  Object.keys(profs()).forEach(k => s.add(new Option(k, k)));
  if (sel) s.value = sel;
}

// ✨ স্টাইলিশ মোডাল দিয়ে প্রোফাইল সেভ
function profSave() {
  const bn = SL === 'bn';
  showModal({
    icon: '💾',
    title: bn ? 'প্রোফাইল সংরক্ষণ করুন' : 'Save Profile',
    text: bn ? 'কোর্সের নাম বা শিক্ষকের তথ্য পরবর্তীতে দ্রুত ব্যবহারের জন্য একটি নাম দিয়ে সংরক্ষণ করুন:' : 'Save your course & teacher details to quickly load them anytime:',
    input: true,
    placeholder: bn ? 'যেমন: CSE-101 – রহমান স্যার' : 'e.g. CSE-101 – Prof. Rahman',
    confirmText: bn ? 'সংরক্ষণ করুন' : 'Save',
    cancelText: bn ? 'বাতিল' : 'Cancel',
    onConfirm: (n) => {
      const p = profs();
      p[n] = get();
      localStorage.setItem(PK, JSON.stringify(p));
      profList(n);
      toast('প্রোফাইল সংরক্ষিত হয়েছে');
    }
  });
}

function profLoad() {
  const s = profs()[$('profSel').value];
  if (s) { apply(s); toast('প্রোফাইল লোড হয়েছে'); }
}

// ✨ স্টাইলিশ মোডাল দিয়ে প্রোফাইল ডিলিট
function profDel() {
  const n = $('profSel').value;
  const bn = SL === 'bn';
  if (!n) {
    toast(bn ? 'আগে একটি প্রোফাইল নির্বাচন করুন' : 'Please select a profile first');
    return;
  }
  showModal({
    icon: '🗑️',
    title: bn ? 'প্রোফাইল মুছে ফেলবেন?' : 'Delete Profile?',
    text: `"${n}" — ` + (bn ? 'এই প্রোফাইলটি আপনি কি স্থায়ীভাবে মুছে ফেলতে চান?' : 'Are you sure you want to permanently delete this profile?'),
    confirmText: bn ? 'মুছে ফেলুন' : 'Delete',
    cancelText: bn ? 'বাতিল' : 'Cancel',
    isDanger: true,
    onConfirm: () => {
      const p = profs();
      delete p[n];
      localStorage.setItem(PK, JSON.stringify(p));
      profList();
      toast(bn ? 'প্রোফাইল মুছে ফেলা হয়েছে' : 'Profile deleted');
    }
  });
}

function setLogo(src) {
  const el = document.querySelector('.dcu-logo');
  if (el) el.src = src;
  if ($('cover-template')) $('cover-template').style.setProperty('--wmurl', 'url(' + src + ')');
}

function logoReset() {
  try { localStorage.removeItem('dcuLogo'); } catch(e){}
  setLogo('./logo.png');
  if ($('cover-template')) $('cover-template').style.removeProperty('--wmurl');
  if ($('logoFile')) $('logoFile').value = '';
}

function showCnt() {
  let n = 0;
  try { n = +localStorage.getItem('dcuCnt') || 0; } catch(e){}
  const cEl = $('cnt');
  if (cEl) cEl.textContent = n ? (SL === 'en' ? '🎉 You have created ' + n + ' cover(s) so far' : '🎉 আপনি এ পর্যন্ত ' + n + 'টি কভার তৈরি করেছেন') : '';
}

function bump() {
  tsave();
  try { localStorage.setItem('dcuCnt', (+localStorage.getItem('dcuCnt') || 0) + 1); } catch(e){}
  showCnt();
}

const TK = 'dcuTeachers';
const tlist = () => { try { return JSON.parse(localStorage.getItem(TK)) || []; } catch(e){ return []; } };

function tsave() {
  const el = $('teacherInfo');
  if (!el) return;
  const v = el.value.trim();
  if (!v) return;
  const a = tlist().filter(x => x !== v);
  a.unshift(v);
  try { localStorage.setItem(TK, JSON.stringify(a.slice(0, 8))); } catch(e){}
  tchips();
}

function tchips() {
  const b = $('tchips'), a = tlist();
  if (!b) return;
  b.innerHTML = '';
  a.forEach(v => {
    const c = document.createElement('button');
    c.type = 'button';
    c.className = 'chip';
    c.textContent = v.split('\n')[0];
    c.title = v;
    c.onclick = () => { if ($('teacherInfo')) $('teacherInfo').value = v; render(); };
    b.appendChild(c);
  });
  if ($('tchipBox')) $('tchipBox').style.display = a.length ? 'block' : 'none';
}

function tclear() {
  try { localStorage.removeItem(TK); } catch(e){}
  tchips();
}

/* ========================================================
   🖼️ নিখুঁত PNG ডাউনলোড (কভার + সকল অতিরিক্ত পেজ সহ)
   ======================================================== */
async function downloadPNG() {
  toast('ছবি প্রস্তুত করা হচ্ছে...');
  const target = $('cover-template');
  if (!target) return;

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const pages = [target, ...document.querySelectorAll('#supPages .sup-page')];

    for (let i = 0; i < pages.length; i++) {
      const pg = pages[i];
      const isCover = (i === 0);

      const c = await html2canvas(pg, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (clonedDoc) => {
          const el = isCover
            ? clonedDoc.getElementById('cover-template')
            : clonedDoc.querySelectorAll('#supPages .sup-page')[i - 1];
          if (el) {
            el.classList.remove('pv-off');
            el.style.transform = 'none';
            el.style.margin = '0';
            el.style.boxShadow = 'none';
            el.style.width = '210mm';
            el.style.height = '297mm';
          }
        }
      });

      await new Promise(resolve => {
        c.toBlob(blob => {
          if (blob) {
            const a = document.createElement('a');
            const suffix = isCover ? 'cover' : `page-${i + 1}`;
            a.download = `cover-page-${val('studentName').replace(/\s+/g, '-') || 'dcu'}-${suffix}.png`;
            a.href = URL.createObjectURL(blob);
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
              a.remove();
              URL.revokeObjectURL(a.href);
            }, 1000);
          }
          setTimeout(resolve, 350);
        }, 'image/png');
      });
    }

    toast(pages.length > 1 ? `✅ ${pages.length}টি পেজের PNG ডাউনলোড সম্পন্ন` : '✅ PNG ডাউনলোড সম্পন্ন হয়েছে');
    bump();
  } catch (err) {
    console.error("PNG Download Error:", err);
    toast('❌ ছবি তৈরি করা যায়নি: ' + (err.message || 'Error'));
  }
}

function downloadDoc() {
  const p = $('cPri') ? $('cPri').value : '#0a2240';
  const a = $('cAcc') ? $('cAcc').value : '#e5a83b';
  const t = id => $(id) ? esc($(id).textContent) : '';
  const grp = $('mode') && $('mode').value === 'group';
  const kids = id => $(id) ? Array.from($(id).children) : [];

  const by = (grp ? kids('prev-members').map(r => esc(r.children[0].textContent + '  ' + r.children[1].textContent)) : [t('prev-sname'), esc(L().roll) + ' ' + t('prev-sroll')])
    .concat(['cls','ses','mob','dt'].map(k => {
      const e = document.querySelector('[data-k="' + k + '"]');
      return e && e.nextElementSibling ? esc(e.textContent) + ' ' + esc(e.nextElementSibling.textContent) : '';
    }));
  const to = kids('prev-teachers').map(x => esc(x.textContent)).concat([t('prev-tdept'), t('prev-tcampus')]);
  const li = arr => arr.filter(Boolean).map(x => '<p style="margin:4pt 0;font-size:12pt">' + x + '</p>').join('');
  const course = (!$('prev-course') || $('prev-course').style.display === 'none') ? '' : '<p style="font-size:12pt;color:' + a + '"><b>' + t('prev-course') + '</b></p>';

  let extraDoc = '';
  const pb = '<br clear="all" style="page-break-before:always;mso-break-type:section-break" />';
  document.querySelectorAll('#supPages .sup-page').forEach(pg => {
    const title = pg.querySelector('.sp-t') ? pg.querySelector('.sp-t').textContent : '';
    const bodyClone = pg.cloneNode(true);
    const tEl = bodyClone.querySelector('.sp-t');
    if (tEl) tEl.remove();
    extraDoc += pb + '<h2 align="center" style="color:' + p + ';font-size:20pt;margin-top:30pt;margin-bottom:15pt;border-bottom:2pt solid ' + a + ';padding-bottom:6pt">' + esc(title) + '</h2>' + bodyClone.innerHTML;
  });

  const h = '<html><head><meta charset="utf-8"><style>@page{size:21cm 29.7cm;margin:2cm 2cm 2cm ' + (2 + (($('gut') ? +$('gut').value : 0) || 0) / 10) + 'cm}body{font-family:Calibri,Arial,sans-serif;color:#111}.sg{margin-top:40pt;display:flex;justify-content:space-between}.sg div{text-align:center}.toc{margin-bottom:6pt}</style></head><body>' +
    '<h1 align="center" style="color:' + p + ';font-size:26pt;margin:30pt 0 4pt">' + t('prev-uni') + '</h1>' +
    '<p align="center" style="color:' + a + ';font-size:13pt"><b>' + t('prev-campus') + '</b></p>' +
    '<p align="center" style="font-size:14pt;margin:18pt 0"><b>' + t('prev-dept') + '</b></p><hr style="color:' + p + '">' +
    '<h1 align="center" style="color:' + p + ';font-size:34pt;letter-spacing:4pt;margin:40pt 0 10pt">' + t('prev-doc') + '</h1>' +
    '<p align="center" style="font-size:11pt;color:' + a + '"><b>' + t('prev-tlabel') + '</b></p>' +
    '<p align="center" style="font-size:16pt;margin-bottom:6pt"><b>' + t('prev-topic') + '</b></p><div align="center">' + course + '</div><br><br><br>' +
    '<table width="100%" cellpadding="8"><tr><td width="50%" valign="top" style="border-top:3pt solid ' + p + '"><p style="color:' + p + ';font-size:13pt"><b>' + t('prev-bylabel') + '</b></p>' + li(by) +
    '</td><td width="50%" valign="top" style="border-top:3pt solid ' + a + '"><p style="color:' + a + ';font-size:13pt"><b>' + t('prev-tolabel') + '</b></p>' + li(to) + '</td></tr></table>' + extraDoc + '</body></html>';

  const l = document.createElement('a');
  l.download = 'cover-page.doc';
  l.href = URL.createObjectURL(new Blob(['\ufeff' + h], { type: 'application/msword' }));
  l.click();
  bump();
  toast('Word ফাইল ডাউনলোড হয়েছে');
}

function share() {
  const u = location.href.split('#')[0] + '#' + btoa(unescape(encodeURIComponent(JSON.stringify(get()))));
  (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject())
    .then(() => toast('লিংক কপি করা হয়েছে'))
    .catch(() => prompt(T('লিংকটি কপি করুন:'), u));
}

// ✨ স্টাইলিশ মোডাল দিয়ে রিসেট
function resetAll() {
  const bn = SL === 'bn';
  showModal({
    icon: '⚠️',
    title: bn ? 'সব তথ্য মুছে ফেলবেন?' : 'Reset All Information?',
    text: bn ? 'আপনার কভার পেজের সমস্ত লেখা রিসেট হয়ে যাবে। আপনি কি নিশ্চিত?' : 'All the details entered will be reset. Are you sure?',
    confirmText: bn ? 'হ্যাঁ, সব মুছুন' : 'Yes, Clear All',
    cancelText: bn ? 'বাতিল' : 'Cancel',
    isDanger: true,
    onConfirm: () => {
      try { localStorage.removeItem(KEY); } catch(e){}
      history.replaceState(null, '', location.pathname);
      apply({});
      toast(bn ? 'সব তথ্য মুছে ফেলা হয়েছে' : 'All data cleared');
    }
  });
}

// ন্যাভবার ভাষা পরিবর্তন হ্যান্ডলার (লুপ প্রোটেকশন সহ)
window.onLang = function(l) {
  const targetLang = l || (typeof window.$lang === 'function' ? window.$lang() : localStorage.getItem('dcuSL')) || 'bn';
  setSite(targetLang, true);
};

// ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
  let s = null;
  try {
    if (location.hash.length > 1) s = JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(1)))));
  } catch(e){}
  if (!s) {
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch(e){}
  }
  apply(s || {});

  document.querySelectorAll('.tpl').forEach(b => b.addEventListener('click', () => {
    if ($('templateSelector')) $('templateSelector').value = b.dataset.v;
    render();
  }));

  if ($('logoFile')) {
    $('logoFile').addEventListener('change', e => {
      const f = e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        setLogo(r.result);
        try { localStorage.setItem('dcuLogo', r.result); } catch(x){ toast('ছবির আকার বড়, সংরক্ষণ করা যায়নি'); }
      };
      r.readAsDataURL(f);
    });
  }

  try {
    const lg = localStorage.getItem('dcuLogo');
    if (lg) setLogo(lg);
    if (localStorage.getItem('dcuDark')) document.body.classList.add('dark');
  } catch(e){}

  try { SL = localStorage.getItem('dcuSL') || 'bn'; } catch(e){}
  if ($('teacherInfo')) $('teacherInfo').addEventListener('blur', tsave);
  tchips();

  setSite(SL);

  try {
    if (!localStorage.getItem('dcuTour') && !location.hash) setTimeout(() => tour(0), 900);
  } catch(e){}

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

  if ($('coverForm')) {
    $('coverForm').addEventListener('input', render);
    $('coverForm').addEventListener('change', render);
  }

  document.querySelectorAll('.sw').forEach(b => b.addEventListener('click', () => {
    setTheme(b.dataset.p, b.dataset.a);
    render();
  }));

  ['cPri','cAcc'].forEach(id => {
    if ($(id)) $(id).addEventListener('input', () => { setTheme($('cPri').value, $('cAcc').value); render(); });
  });

  // অতিরিক্ত ৪টি পেজের চেকবক্স হ্যান্ডলার
  ['pgDecl', 'pgAppr', 'pgAck', 'pgToc'].forEach(id => {
    const el = $(id);
    if (el) {
      el.addEventListener('change', () => {
        render();
        if (el.checked) {
          toast('✅ নতুন পেজ প্রিভিউতে যুক্ত হয়েছে (নিচে স্ক্রল করে দেখুন)');
        }
      });
    }
  });

  // অতিরিক্ত ৪টি পেজের টেক্সটবক্স হ্যান্ডলার
  ['declText', 'apprText', 'ackText', 'tocText'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('input', render);
  });
});


/* ========================================================
   📌 লাইভ প্রিভিউ: ট্যাব (কভার / অতিরিক্ত পেজ) + স্টিকি + অটো-ফিট
   ======================================================== */
let pvKey = 'cover';

function pvTabs() {
  const cover = $('cover-template');
  if (!cover) return;
  const ids = ['pgDecl', 'pgAppr', 'pgAck', 'pgToc'].filter(i => $(i) && $(i).checked);
  const sups = [...document.querySelectorAll('#supPages .sup-page')];
  const labels = [...document.querySelectorAll('#supPages .page-sep-label')];
  const items = [{ key: 'cover', el: cover, name: SL === 'en' ? 'Cover' : 'কভার' }];
  sups.forEach((p, i) => {
    const key = ids[i] || ('p' + i);
    p.dataset.pg = key;
    const t = labels[i] ? labels[i].textContent.replace('📄', '').trim() : '';
    const k = t.indexOf(':');
    items.push({ key, el: p, name: (k > -1 ? t.slice(k + 1) : t).trim() || ('Page ' + (i + 2)) });
  });
  if (!items.some(x => x.key === pvKey)) pvKey = 'cover';
  items.forEach(x => x.el.classList.toggle('pv-off', x.key !== pvKey));

  let bar = $('pvTabs');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'pvTabs';
    bar.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      pvKey = b.dataset.k;
      pvTabs();
      pvLayout();
    });
    cover.parentNode.insertBefore(bar, cover);
  }
  bar.style.display = items.length > 1 ? 'flex' : 'none';
  bar.innerHTML = items.map(x =>
    `<button type="button" data-k="${x.key}" class="${x.key === pvKey ? 'on' : ''}">${esc(x.name)}</button>`
  ).join('');
}

function pvLayout() {
  const sec = document.querySelector('.preview-section');
  if (!sec) return;
  const wide = window.innerWidth >= 900;

  // হেডার/টিকার যতটুকু ওপরে আটকে থাকে, তার নিচে প্রিভিউ বসবে
  let top = 0;
  if (wide) {
    document.querySelectorAll('#hdr, #hdr *, header, .global-blood-ticker, .sh').forEach(el => {
      if (sec.contains(el) || el.closest('main')) return;
      const pos = getComputedStyle(el).position;
      if (pos !== 'sticky' && pos !== 'fixed') return;
      const r = el.getBoundingClientRect();
      if (r.height > 0 && r.top < 200 && r.bottom < 400 && r.bottom > top) top = r.bottom;
    });
    top += 25;
  }
  sec.style.setProperty('--pvtop', (top || 25) + 'px');

  const PW = 793.7, PH = 1122.5;               // 210mm × 297mm (px)
  const h2 = sec.querySelector(':scope > h2');
  const bar = $('pvTabs');
  const used = (h2 ? h2.offsetHeight + 15 : 0) + (bar && bar.style.display !== 'none' ? bar.offsetHeight + 12 : 0);
  const availH = wide ? sec.clientHeight - used - 6 : Infinity;
  const availW = sec.clientWidth - 4;
  const s = Math.max(.25, Math.min(1, availW / PW, availH / PH));
  sec.style.setProperty('--pvs', s.toFixed(3));
}

(function pvInit() {
  ['pgDecl', 'pgAppr', 'pgAck', 'pgToc'].forEach(id => {
    const cb = $(id);
    if (cb) cb.addEventListener('change', () => {
      if (cb.checked) setTimeout(() => { pvKey = id; pvTabs(); pvLayout(); }, 0);
    });
  });
  window.addEventListener('resize', pvLayout);
  window.addEventListener('load', () => { pvLayout(); setTimeout(pvLayout, 400); setTimeout(pvLayout, 1500); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(pvLayout);
  pvTabs();
  pvLayout();
})();
