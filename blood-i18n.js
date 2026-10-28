/* blood-i18n.js — ডোনার ডিরেক্টরির বাংলা ⇄ English অনুবাদ (site.js-এর ভাষা বাটনের সাথে কাজ করে)
   অনুবাদ নেই এমন লেখা দেখতে ইংরেজি মোডে কনসোলে লিখুন: __bnMissing  → তালিকা থেকে নিচের D-তে যোগ করুন */
(function () {
  var D = [
["জরুরি রক্তের অনুরোধ দেখুন","View urgent blood requests"],["🩸 DCU ব্লাড ডোনার ডিরেক্টরি","🩸 DCU Blood Donor Directory"],
["সাইন আউট","Sign out"],["রক্ত খুঁজুন","Find Blood"],["🚨 জরুরি রক্ত","🚨 Urgent Blood"],["ডোনার হোন","Become a Donor"],
["🔔 নোটিফিকেশন","🔔 Notifications"],["🏆 লিডারবোর্ড","🏆 Leaderboard"],["রক্তদাতা খুঁজুন","Find a Blood Donor"],
["রক্তের গ্রুপ","Blood group"],["সকল গ্রুপ","All groups"],["এলাকা নির্বাচন বা সার্চ করুন","Select or search an area"],
["যেমন: মিরপুর, গুলশান...","e.g. Mirpur, Gulshan..."],["শুধু","Show only"],["ভেরিফাইড ডোনার দেখান","verified donors"],
["লোড হচ্ছে...","Loading..."],["খোঁজা হচ্ছে...","Searching..."],["ডোনার হিসেবে নিবন্ধন করুন","Register as a Donor"],
["চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক।","fields are required."],["পূর্ণ নাম","Full name"],["আপনার নাম","Your name"],
["গ্রুপ সিলেক্ট করুন","Select group"],["বর্তমান এলাকা","Current area"],
["এলাকার নাম লিখুন, সাজেশন থেকে বেছে নিন","Type your area, pick from suggestions"],["মোবাইল নম্বর","Mobile number"],
["মোবাইল নম্বর আবার লিখুন","Re-enter mobile number"],["ভুল এড়াতে নম্বরটি আবার লিখুন","Re-enter the number to avoid mistakes"],
["মোট কতবার রক্ত দিয়েছেন?","How many times have you donated blood?"],["সর্বশেষ কবে রক্ত দিয়েছেন? (ঐচ্ছিক)","When did you last donate? (optional)"],
["তারিখ দিলে ৩ মাস পর থেকে প্রতি ১৫ দিন অন্তর আপনাকে রক্তদানের রিমাইন্ডার দেওয়া হবে।","If you give a date, you will get a donation reminder every 15 days starting 3 months later."],
["প্রোফাইল ছবি (ঐচ্ছিক)","Profile photo (optional)"],
["আমি সম্মত আছি যে, আমার এই তথ্য ডিরেক্টরিতে যে কেউ দেখতে পারবে। পাশাপাশি কেউ আমার মোবাইল নম্বর দেখতে চাইলে তার নাম, মোবাইল নম্বর ও ঠিকানা আমার ট্র্যাকিং নোটিফিকেশনে সংরক্ষিত হবে।","I agree that anyone can see this information in the directory. Also, if someone views my mobile number, their name, mobile number and address will be saved in my tracking notifications."],
["🛡️ আপনার ও আমাদের রক্তদাতাদের নিরাপত্তার জন্য ১-ক্লিকে গুগল সাইন-ইন করুন।","🛡️ For your safety and our donors’ safety, sign in with Google in one click."],
["নিবন্ধন সম্পন্ন করুন","Complete registration"],["🚨 জরুরি রক্তের অনুরোধ","🚨 Urgent Blood Requests"],["➕ নতুন অনুরোধ","➕ New request"],
["রোগীর জন্য জরুরি রক্ত লাগলে এখানে অনুরোধ দিন। একই গ্রুপ ও এলাকার ডোনাররা এটি দেখতে পাবেন।","Need urgent blood for a patient? Post a request here. Donors of the same group and area will see it."],
["প্রয়োজনীয় রক্তের গ্রুপ","Required blood group"],["কত ব্যাগ লাগবে","Bags needed"],["হাসপাতালের নাম","Hospital name"],
["যেমন: মিটফোর্ড হাসপাতাল","e.g. Mitford Hospital"],["এলাকা","Area"],["হাসপাতালের এলাকা","Hospital area"],["কবে রক্ত লাগবে","When is blood needed"],
["যোগাযোগকারীর নাম","Contact person’s name"],["রোগীর আত্মীয় বা যোগাযোগকারীর নাম","Patient’s relative or contact person’s name"],
["যোগাযোগের মোবাইল নম্বর","Contact mobile number"],["অতিরিক্ত তথ্য (ঐচ্ছিক)","Additional info (optional)"],
["যেমন: আজ রাতেই লাগবে, ওয়ার্ড ৫","e.g. Needed tonight, ward 5"],["🚨 অনুরোধ প্রকাশ করুন","🚨 Publish request"],["যেমন: মিরপুর","e.g. Mirpur"],
["🔔 কে আপনার নম্বর দেখেছে","🔔 Who viewed your number"],["যারা আপনার মোবাইল নম্বর দেখেছেন, তাদের পরিচয় এখানে দেখা যাবে। শুধু আপনি নিজে এটি দেখতে পারবেন।","People who viewed your mobile number will appear here. Only you can see this."],
["🏆 শীর্ষ রক্তদাতা লিডারবোর্ড","🏆 Top Donors Leaderboard"],["⚠️ জরুরি নিরাপত্তা সতর্কতা","⚠️ Important Security Notice"],
["রক্তদাতার মোবাইল নম্বর দেখতে হলে আপনার পরিচয় প্রদান বাধ্যতামূলক। আপনার এই তথ্য ও ফোন নম্বর নিরাপত্তাজনিত কারণে সংশ্লিষ্ট রক্তদাতার ট্র্যাকে সংরক্ষিত হবে।","To view a donor’s mobile number you must provide your identity. For security reasons, your details and phone number will be saved in that donor’s tracking log."],
["আপনার পূর্ণ নাম","Your full name"],["আপনার মোবাইল নম্বর","Your mobile number"],["আপনার বর্তমান ঠিকানা","Your current address"],
["যেমন: ধানমন্ডি, ঢাকা","e.g. Dhanmondi, Dhaka"],["🔐 Google দিয়ে সাইন ইন করে নম্বর দেখুন","🔐 Sign in with Google to view number"],
["নম্বর দেখুন","View number"],["বাতিল","Cancel"],["📲 কল করুন","📲 Call"],["📋 কপি","📋 Copy"],["✅ কপি হয়েছে","✅ Copied"],
["⚠️ সতর্কতা: আপনার পরিচয় ডোনারের ট্র্যাকিং লগে সংরক্ষিত হলো।","⚠️ Notice: your identity has been saved in the donor’s tracking log."],
["🚩 নম্বরটি ভুল বা বন্ধ? রিপোর্ট করুন","🚩 Wrong or switched-off number? Report it"],["বন্ধ করুন","Close"],["🚩 রিপোর্ট","🚩 Report"],
["এই ফিল্টারে কোনো অনুমোদিত রক্তদাতা পাওয়া যায়নি।","No approved donors found for this filter."],["ডেটা লোড করতে সমস্যা হয়েছে।","Failed to load data."],
["জানুয়ারি","January"],["ফেব্রুয়ারি","February"],["মার্চ","March"],["এপ্রিল","April"],["মে","May"],["জুন","June"],["জুলাই","July"],["আগস্ট","August"],
["সেপ্টেম্বর","September"],["অক্টোবর","October"],["নভেম্বর","November"],["ডিসেম্বর","December"],["দিন","Day"],["মাস","Month"],["বছর","Year"],
["তথ্য আপলোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...","Uploading, please wait..."],
["✅ আপনার নিবন্ধন সফল হয়েছে! এডমিন যাচাই করার পর এটি ডিরেক্টরিতে যুক্ত হবে।","✅ Registration successful! It will be added to the directory after admin verification."],
["❌ এই মোবাইল নম্বর দিয়ে ইতিমধ্যে একজন নিবন্ধন করেছেন। অন্য নম্বর দিন।","❌ Someone has already registered with this mobile number. Use another number."],
["❌ কিছু ঘরে ভুল আছে। লাল চিহ্নিত ঘরগুলো ঠিক করে আবার চেষ্টা করুন।","❌ Some fields have errors. Fix the red fields and try again."],
["❌ কিছু ঘরে ভুল আছে। লাল চিহ্নিত ঘরগুলো ঠিক করুন।","❌ Some fields have errors. Fix the red fields."],
["কিছু ঘরে ভুল আছে। লাল চিহ্নিত ঘরগুলো ঠিক করুন।","Some fields have errors. Fix the red fields."],
["❌ Google সাইন ইন সম্পন্ন হয়নি। আবার চেষ্টা করুন।","❌ Google sign-in did not complete. Please try again."],["Google সাইন ইন সম্পন্ন হয়নি। আবার চেষ্টা করুন।","Google sign-in did not complete. Please try again."],
["❌ ছবির সাইজ অনেক বড়। ছোট সাইজের বা অন্য একটি ছবি দিন।","❌ The photo is too large. Use a smaller or different photo."],
["মোবাইল নম্বর দিন","Enter a mobile number"],["শুধু সংখ্যা (০–৯) ব্যবহার করুন; অক্ষর বা চিহ্ন দেওয়া যাবে না","Use digits only (0–9); no letters or symbols"],
["নম্বর ০১ দিয়ে শুরু হতে হবে (যেমন: 01712345678)","The number must start with 01 (e.g. 01712345678)"],
["অপারেটর কোড ঠিক নয়: ০১৩ থেকে ০১৯ এর মধ্যে হতে হবে (010 বা 012 দিয়ে মোবাইল নম্বর হয় না)","Invalid operator code: it must be between 013 and 019 (010 or 012 are not valid)"],
["এই নম্বরটি সঠিক মনে হচ্ছে না; আপনার আসল নম্বর দিন","This number doesn’t look valid; enter your real number"],["আপনার পূর্ণ নাম লিখুন","Enter your full name"],
["রক্তের গ্রুপ বাছাই করুন","Select a blood group"],["✓ নম্বরের ফরম্যাট সঠিক","✓ Number format is correct"],
["নম্বরটি আবার লিখে নিশ্চিত করুন","Re-enter the number to confirm"],["✓ দুটি নম্বর মিলেছে","✓ Both numbers match"],
["দুটি নম্বর মিলছে না; আবার দেখুন","The two numbers don’t match; check again"],["চালিয়ে যেতে সম্মতি দিতে হবে","You must agree to continue"],
["✅ রক্তদানে প্রস্তুত","✅ Ready to donate"],["ভেরিফাইড ডোনার","Verified donor"],["ভেরিফাইড ডোনার: এডমিন যাচাইকৃত","Verified donor: checked by admin"],
["আজই","Today"],["আগামীকাল","Tomorrow"],["মেয়াদ শেষ","Expired"],["👤 আপনার অনুরোধ","👤 Your request"],
["🩸 আপনি এই গ্রুপে রক্ত দিতে পারেন","🩸 You can donate to this group"],["📍 আপনার এলাকায়","📍 In your area"],
["🔐 সাইন ইন করে নম্বর দেখুন","🔐 Sign in to view number"],["📤 শেয়ার","📤 Share"],["🖼️ ছবি শেয়ার","🖼️ Share image"],
["🚩 রিপোর্ট করুন","🚩 Report"],["✅ রক্ত পাওয়া গেছে","✅ Blood received"],["🗑️ মুছুন","🗑️ Delete"],
["এই মুহূর্তে কোনো জরুরি অনুরোধ নেই।","No urgent requests right now."],["জরুরি রক্ত","Urgent blood"],["বিস্তারিত","Details"],
["🚨 জরুরি রক্ত প্রয়োজন","🚨 Urgent blood needed"],["কার্ডটি বন্ধ করুন","Close card"],["সব দেখুন","See all"],["আগের","Previous"],["পরের","Next"],["আবার দেখান","Show again"],
["🔐 জরুরি অনুরোধ সবাই দেখতে পারেন। যোগাযোগের নম্বর দেখতে ও নতুন অনুরোধ দিতে Google দিয়ে সাইন ইন করুন।","🔐 Anyone can see urgent requests. Sign in with Google to view contact numbers and post new requests."],
["✏️ তথ্য সম্পাদনা করুন","✏️ Edit info"],["✏️ তথ্য সম্পাদনা","✏️ Edit info"],["🗑️ তথ্য মুছে ফেলুন","🗑️ Delete info"],["💾 সংরক্ষণ করুন","💾 Save"],
["সংরক্ষণ হচ্ছে...","Saving..."],["✅ আপনার তথ্য সফলভাবে হালনাগাদ হয়েছে।","✅ Your information has been updated."],
["✅ অনুমোদিত, ডিরেক্টরিতে দেখা যাচ্ছে","✅ Approved, visible in the directory"],["⏳ এডমিনের অনুমোদনের অপেক্ষায়","⏳ Awaiting admin approval"],
["দেওয়া হয়নি","Not given"],["এখনো কেউ আপনার নম্বর দেখেনি।","No one has viewed your number yet."],["নতুন","New"],
["🩸 রক্তদান রিমাইন্ডার","🩸 Blood donation reminder"],["✅ হ্যাঁ, আবার রক্ত দিয়েছি","✅ Yes, I donated again"],["না, এখনো দিইনি","No, not yet"],
["কবে রক্ত দিয়েছেন?","When did you donate?"],["💾 তারিখ সংরক্ষণ করুন","💾 Save date"],["🔐 Google দিয়ে সাইন ইন করুন","🔐 Sign in with Google"],
["ঠিক আছে","OK"],["কারণ","Reason"],["কারণ বাছাই করুন","Select a reason"],["আরও কিছু জানাতে চাইলে লিখুন (ঐচ্ছিক)","Add more details (optional)"],
["রিপোর্ট পাঠান","Send report"],["পাঠানো হচ্ছে...","Sending..."],["✅ ধন্যবাদ! রিপোর্টটি এডমিনের কাছে পৌঁছেছে।","✅ Thank you! Your report has reached the admin."],
["❌ আপনি এটি আগেই রিপোর্ট করেছেন (বা অনুমতি নেই)।","❌ You have already reported this (or you don’t have permission)."],
["ডোনারকে রিপোর্ট করুন","Report donor"],["অনুরোধটি রিপোর্ট করুন","Report request"],["অন্য কারণ","Other reason"],
["নম্বরটি ভুল, অন্য কারো নম্বর","Wrong number / belongs to someone else"],["নম্বরটি বন্ধ বা সংযোগ পাওয়া যায়নি","Number is switched off or unreachable"],
["ভুয়া বা সন্দেহজনক তথ্য","Fake or suspicious information"],["ডোনার রক্ত দিতে অনিচ্ছুক","Donor is unwilling to donate"],
["ভুয়া বা মিথ্যা অনুরোধ","Fake or false request"],["নম্বর বা তথ্য ভুল","Wrong number or information"],["রক্ত ইতিমধ্যে পাওয়া গেছে","Blood already received"],["স্প্যাম বা অপ্রাসঙ্গিক","Spam or irrelevant"],
["লিডারবোর্ড তৈরি হচ্ছে...","Building leaderboard..."],["এখনো কোনো ডোনারের তথ্য নেই।","No donor data yet."],["লিডারবোর্ড লোড করতে সমস্যা হয়েছে।","Failed to load leaderboard."],
["বার রক্তদান","donations"],["বার দান","donations"],["অনুরোধ পাঠানো হচ্ছে...","Sending request..."],
["✅ আপনার জরুরি অনুরোধ প্রকাশ করা হয়েছে। রক্ত পাওয়া গেলে 'রক্ত পাওয়া গেছে' চাপুন।","✅ Your urgent request has been published. Tap “Blood received” once you get blood."],
["রক্তের ব্যবস্থা হয়ে গেছে? অনুরোধটি তালিকা থেকে সরিয়ে ফেলা হবে।","Blood arranged? The request will be removed from the list."],["অনুরোধটি স্থায়ীভাবে মুছে ফেলবেন?","Delete this request permanently?"],
["আপনি কি নিশ্চিত যে আপনার ডোনার তথ্য স্থায়ীভাবে মুছে ফেলতে চান?","Are you sure you want to permanently delete your donor information?"],
["✅ আপনার তথ্য মুছে ফেলা হয়েছে। আবার ডোনার হতে চাইলে নিচের ফর্ম পূরণ করে নিবন্ধন করুন।","✅ Your information has been deleted. To become a donor again, fill in the form below."]
  ];
  var P = [
    [/(\d+) বার (?:দান|রক্তদান)/g, "$1 donations"], [/সর্বশেষ রক্তদান:/g, "Last donation:"], [/সর্বশেষ:/g, "Last:"],
    [/আরও (\d+) দিন পর প্রস্তুত/g, "Available in $1 days"], [/(\d+) ব্যাগ রক্ত লাগবে/g, "$1 bag(s) of blood needed"],
    [/📅 প্রয়োজন:/g, "📅 Needed:"], [/মোট (\d+) বার আপনার নম্বর দেখা হয়েছে।?/g, "Your number has been viewed $1 times in total."],
    [/সাইন ইন:/g, "Signed in:"], [/ত্রুটি হয়েছে:/g, "Error:"], [/নম্বর 11 ডিজিটের হতে হবে; আপনি দিয়েছেন (\d+) ডিজিট/g, "The number must be 11 digits; you entered $1"],
    [/আরও (\d+) ডিজিট বাকি/g, "$1 more digits needed"], [/(\d+)টি ব্যানার কার্ড আপনি বন্ধ করেছেন।/g, "You closed $1 banner card(s)."],
    [/(\d+) দিন পর প্রস্তুত/g, "Ready in $1 days"], [/পরবর্তী রক্তদানের রিমাইন্ডার:/g, "Next donation reminder:"],
    [/(\d+) (জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর),? (\d{4})/g,
      function (m, d, mo, y) { return d + " " + MON[mo] + " " + y; }],
    [/পূর্বাহ্ণ/g, "AM"], [/অপরাহ্ণ/g, "PM"]
  ];
  var MON = {}; D.slice(0).forEach(function (a) { MON[a[0]] = a[1]; });
  var BN = /[\u0980-\u09FF]/, ATTR = ["placeholder", "title", "aria-label"], M = {}, R = new WeakMap(), RA = new WeakMap();
  var fd = function (c) { return String.fromCharCode(c.charCodeAt(0) - 2534); };
  var N = function (s) { return String(s).replace(/[০-৯]/g, fd).replace(/\uFE0F/g, "").replace(/\s+/g, " ").trim(); };
  D.forEach(function (a) { M[N(a[0])] = a[1]; });
  window.__bnMissing = [];
  var en = function () { return typeof window.$lang === "function" && window.$lang() === "en"; };
  function tr(s) {
    var h = M[N(s)];
    if (h !== undefined) return s.match(/^\s*/)[0] + h + s.match(/\s*$/)[0];
    var t = s.replace(/[০-৯]/g, fd);
    P.forEach(function (p) { t = t.replace(p[0], p[1]); });
    if (BN.test(t) && window.__bnMissing.indexOf(N(s)) < 0) window.__bnMissing.push(N(s));
    return t;
  }
  function fixT(n) {
    var r = R.get(n), cur = n.data, base = r && cur === r.t ? r.o : cur;
    if (!r && !BN.test(cur)) return;
    var want = en() ? tr(base) : base;
    if (want !== cur) n.data = want;
    R.set(n, { o: base, t: want });
  }
  function fixE(e) {
    ATTR.forEach(function (a) {
      var v = e.getAttribute(a); if (v == null) return;
      var m = RA.get(e) || {}, r = m[a], base = r && v === r.t ? r.o : v;
      if (!r && !BN.test(v)) return;
      var want = en() ? tr(base) : base;
      if (want !== v) e.setAttribute(a, want);
      m[a] = { o: base, t: want }; RA.set(e, m);
    });
  }
  function walk(root) {
    if (root.nodeType === 3) { fixT(root); return; }
    if (root.nodeType !== 1) return;
    fixE(root);
    var w = document.createTreeWalker(root, 5), n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) { var p = n.parentNode && n.parentNode.nodeName; if (p !== "SCRIPT" && p !== "STYLE") fixT(n); }
      else fixE(n);
    }
  }
  ["alert", "confirm"].forEach(function (k) {
    var o = window[k]; window[k] = function (m) { return o.call(window, en() ? tr(String(m)) : m); };
  });
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === "childList") m.addedNodes.forEach(walk);
      else if (m.type === "characterData") fixT(m.target);
      else fixE(m.target);
    });
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  window.onLang = function () { walk(document.body); };   // site.js-এর ভাষা বাটন চাপলে এটি চলে
  walk(document.body);
})();
