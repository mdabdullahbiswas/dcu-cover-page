/* WideMath সায়েন্টিফিক ক্যালকুলেটর — tools.html-এ মূল স্ক্রিপ্টের পরে ও শেষ স্ক্রিপ্টের আগে লোড হয় */
/* ===== ৮. সায়েন্টিফিক ক্যালকুলেটর (WideMath) — ধাপ ১ ===== */
const NMS=[{t:'norm'},{t:'fix',n:2},{t:'fix',n:4},{t:'sci',n:3}];
const WS=ld('dcuWm',{});
const W={T:[],ci:0,sh:0,al:0,hyp:0,pend:'',ins:1,on:1,done:0,res:null,msg:'',menu:null,calc:null,hi:-1,eng:0,mixed:0,dms:0,aex:1,
 deg:WS.deg||'D',nm:WS.nm||0,frac:WS.frac!==false,ans:WS.ans||0,mode:'comp',base:10,cpol:0,ansC:null,M:Object.assign({A:0,B:0,C:0,D:0,E:0,F:0,X:0,Y:0,M:0},WS.M)};
let KH=ld('dcuKh2',[]);
const wsv=()=>sv('dcuWm',{deg:W.deg,nm:W.nm,frac:W.frac,ans:W.ans,M:W.M});
/* কী তালিকা: [লেবেল, সাধারণ কাজ, SHIFT [লেবেল,কাজ], ALPHA [লেবেল,কাজ], স্টাইল] */
const KS=[],mk=(m,n,s,a,c)=>{const k={m,n,s:s||0,a:a||0,c:c||'',i:KS.length};KS.push(k);return k};
const so=n=>'F:soon:'+n;
const kSH=mk('SHIFT','F:shift',0,0,'sh'),kAL=mk('ALPHA','F:alpha',0,0,'al'),kMO=mk('MODE','F:mode',['SETUP','F:setup']),kON=mk('ON','F:on');
const gA=[kSH,kAL,kMO,kON,
 mk('CALC','F:calc',['SOLVE =','F:solve'],['=','T:=']),mk('∫dx','T:∫(',['d/dx :','T:d/dx(']),mk('x⁻¹','T:^(-1)',['x!','T:!']),mk('logₐ','T:logb(',['Σ(','T:Σ(']),
 mk('□/□','T:⁄',['a b/c','T:⌟']),mk('√','T:√(',['∛','T:∛(']),mk('x²','T:^2',['x³','T:^3'],['DEC','F:bk:10']),mk('x■','T:^',['■√□','T:root('],['HEX','F:bk:16']),mk('log','T:log(',['10ˣ','T:10^'],['BIN','F:bk:2']),mk('ln','T:ln(',['eˣ','T:e^'],['OCT','F:bk:8']),
 mk('(-)','T:-',['∠','T:∠'],['A','T:A']),mk('° ′ ″','F:dmsk',['←','F:todms'],['B','T:B']),mk('hyp','F:hyp',['Abs','T:Abs('],['C','T:C']),mk('sin','H:sin',['sin⁻¹','H:asin'],['D','T:D']),mk('cos','H:cos',['cos⁻¹','H:acos'],['E','T:E']),mk('tan','H:tan',['tan⁻¹','H:atan'],['F','T:F']),
 mk('RCL','F:rcl',['STO','F:sto']),mk('ENG','F:eng',['← i','T:i']),mk('(','T:(',['%','T:%']),mk(')','T:)',[',','T:,'],['X','T:X']),mk('S⇔D','F:sd',['a b/c⇔d/c','F:mixed'],['Y','T:Y']),mk('M+','F:mplus',['M−','F:mminus'],['M','T:M'])];
const gB=[mk('7','T:7',['CONST','F:const'],0,'nm'),mk('8','T:8',['CONV','F:conv'],0,'nm'),mk('9','T:9',['CLR','F:clr'],0,'nm'),mk('DEL','F:del',['INS','F:insm'],0,'gr1'),mk('AC','F:ac',['OFF','F:off'],0,'gr2'),
 mk('4','T:4',['MATRIX','F:matrix'],0,'nm'),mk('5','T:5',['VECTOR','F:vector'],0,'nm'),mk('6','T:6',['FACT','F:fact'],0,'nm'),mk('×','T:×',['nPr','T:nPr']),mk('÷','T:÷',['nCr','T:nCr']),
 mk('1','T:1',['STAT','F:stat'],0,'nm'),mk('2','T:2',['CMPLX','F:cmplx'],0,'nm'),mk('3','T:3',['BASE','F:base'],0,'nm'),mk('+','T:+',['Pol','T:Pol(']),mk('−','T:−',['Rec','T:Rec(']),
 mk('0','T:0',['Rnd','T:Rnd('],['Ran#','T:Ran#'],'nm'),mk('.','T:.',['RanInt#','T:RanInt('],0,'nm'),mk('×10ˣ','T:ᴇ',['π','T:π'],['e','T:e'],'nm'),mk('Ans','T:Ans',['DRG▸','F:drg']),mk('=','F:eq',['≈','F:approx'])];
const kc=k=>`<div class="kc"><div class="kl"><span class="ks">${k.s?k.s[0]:''}</span><span class="ka">${k.a?k.a[0]:''}</span></div><button type="button" class="kb ${k.c}" data-i="${k.i}">${esc(k.m)}</button></div>`;
$('#kgA').innerHTML=`<div class="kpad"><button type="button" class="u" data-p="u" aria-label="Up">▲</button><button type="button" class="d" data-p="d" aria-label="Down">▼</button><button type="button" class="l" data-p="l" aria-label="Left">◀</button><button type="button" class="r" data-p="r" aria-label="Right">▶</button><i></i></div>`+gA.map(kc).join('');
$('#kgB').innerHTML=gB.map(kc).join('');
/* টোকেন: প্রদর্শন ও গণনার রূপ */
const DS={'asin(':'sin⁻¹(','acos(':'cos⁻¹(','atan(':'tan⁻¹(','asinh(':'sinh⁻¹(','acosh(':'cosh⁻¹(','atanh(':'tanh⁻¹(','^2':'²','^3':'³','^(-1)':'⁻¹','-':'−','nPr':'P','nCr':'C','ᴇ':'×10^','⌟':'⌟','Ran#':'Ran#','Rnd(':'Rnd(','RanInt(':'RanInt('};
const CVT={'×':'*','÷':'/','−':'-','π':'pi','√(':'sqrt(','∛(':'cbrt(','Abs(':'abs(','Ans':'ans','ᴇ':'*10^','nPr':'\u0001','nCr':'\u0002','Ran#':'ran(0)','RanInt(':'ranint(','Rnd(':'rnd(','ReP(':'rep(','ImP(':'imp(','x\u0302(':'xhat(','y\u0302(':'yhat(','∫(':'integ(','d/dx(':'deriv(','Σ(':'sigma('};
const conv=T=>T.map(t=>STV.has(t)?statSub(t):KV[t]?'('+nf(KV[t].v)+')':(CVT[t]??t)).join('');
const dsp=T=>T.map(t=>DS[t]||t).join('');
const TKS=[...new Set(KS.flatMap(k=>[k.n,k.s&&k.s[1],k.a&&k.a[1]]).filter(a=>a&&a.startsWith('T:')).map(a=>a.slice(2)).concat(['sin(','cos(','tan(','asin(','acos(','atan(','sinh(','cosh(','tanh(','asinh(','acosh(','atanh(']))].sort((a,b)=>b.length-a.length);
const tokenize=s=>{const o=[];for(let i=0;i<s.length;){const t=TKS.find(t=>s.startsWith(t,i));if(t){o.push(t);i+=t.length}else o.push(s[i++])}return o};
/* গণনা ইঞ্জিন */
const WORDS=/^(asinh|acosh|atanh|asin|acos|atan|sinh|cosh|tanh|sin|cos|tan|logb|log|ln|sqrt|cbrt|abs|rnd|ranint|ran|xhat|yhat|integ|deriv|sigma|root|pol|rec|pi|ans|e)/;
const fact=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r};
const perm=(n,r)=>{let v=1;for(let i=0;i<r;i++)v*=n-i;return v};
const comb=(n,r)=>{r=Math.min(r,n-r);let v=1;for(let i=0;i<r;i++)v=v*(n-i)/(i+1);return Math.round(v)};
function ev(s,vr){
 vr=vr||{};let p=0,ex=1,xt=null;
 const pk=()=>s[p],D=W.deg=='D'?Math.PI/180:W.deg=='G'?Math.PI/200:1,S=()=>{throw 'S'},Mt=()=>{throw 'M'},z=v=>Math.abs(v)<1e-14?0:v;
 const get=k=>k in vr?vr[k]:W.M[k];
 const fu={sin:v=>z(Math.sin(v*D)),cos:v=>z(Math.cos(v*D)),tan:v=>{if(Math.abs(Math.cos(v*D))<1e-12)Mt();return z(Math.tan(v*D))},asin:v=>Math.asin(v)/D,acos:v=>Math.acos(v)/D,atan:v=>Math.atan(v)/D,
  sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,asinh:Math.asinh,acosh:Math.acosh,atanh:Math.atanh,log:Math.log10,ln:Math.log,sqrt:Math.sqrt,cbrt:Math.cbrt,abs:Math.abs,rnd:v=>+v.toPrecision(10),xhat:v=>stEst(0,v),yhat:v=>stEst(1,v)};
 const sub=(x,v2)=>{if(x===undefined||x==='')S();const r=ev(x,Object.assign({},vr,v2));if(!r.ex)ex=0;return r.v};
 function raw(){let d=0,a=[],st=p+1,i=p;for(;i<s.length;i++){const c=s[i];if(c=='(')d++;else if(c==')'){d--;if(!d)break}else if(c==','&&d==1){a.push(s.slice(st,i));st=i+1}}a.push(s.slice(st,i));p=i+1;return a}
 function num(){const m=/^(\d+\.?\d*|\.\d+)/.exec(s.slice(p));if(!m)S();p+=m[0].length;if(m[0].includes('.'))ex=0;return parseFloat(m[0])}
 const pa=()=>pk()=='('?A():num();
 function E(){let v=T1();while(pk()=='+'||pk()=='-'){const o=s[p++],r=T1();v=o=='+'?v+r:v-r}return v}
 function T1(){let v=PC();for(;;){const c=pk();if(c=='*'||c=='/'){p++;const r=PC();v=c=='*'?v*r:v/r}else if(c&&/[(a-zA-Z]/.test(c))v*=PC();else return v}}
 function PC(){let v=U();while(pk()=='\u0001'||pk()=='\u0002'){const o=s[p++],r=U();if(v<0||r<0||v%1||r%1||r>v)Mt();v=o=='\u0001'?perm(v,r):comb(v,r)}return v}
 function U(){const c=pk();if(c=='-'){p++;return -U()}if(c=='+'){p++;return U()}return Pw()}
 function Pw(){const b=F();if(pk()=='^'){p++;const e=U();if(!Number.isInteger(e))ex=0;const r=Math.pow(b,e);if(isNaN(r))Mt();return r}return b}
 function F(){let v=A();for(;;){const c=pk();if(c=='!'){p++;if(v<0||v>170||v%1)Mt();v=fact(v)}else if(c=='%'){p++;v/=100}else if(c=='⁄'){p++;const d=pa();if(!d)Mt();v/=d}else return v}}
 function A(){const c=pk();
  if(c=='('){p++;const v=E();if(pk()==')')p++;else if(p<s.length)S();return v}
  if(c&&/[\d.]/.test(c)){let v=num();
   if(pk()=='⌟'){p++;const n1=num();if(pk()!='⁄')S();p++;const d=pa();if(!d)Mt();v+=n1/d}
   else if(pk()=='°'||pk()=='ʳ'||pk()=='ᵍ'){const u=s[p++];if(u=='°'){let q=/^(\d+\.?\d*)′/.exec(s.slice(p));if(q){p+=q[0].length;v+=parseFloat(q[1])/60;q=/^(\d+\.?\d*)″/.exec(s.slice(p));if(q){p+=q[0].length;v+=parseFloat(q[1])/3600}}v=v*Math.PI/180/D}else v=u=='ʳ'?v/D:v*Math.PI/200/D;ex=0}
   return v}
  if(c&&/[A-FXYM]/.test(c)){p++;return get(c)}
  const n=WORDS.exec(s.slice(p));if(!n)S();const w=n[0];p+=w.length;
  if(w=='pi'){ex=0;return Math.PI}if(w=='e'){ex=0;return Math.E}
  if(w=='ans'){if(!W.aex)ex=0;return W.ans}
  if(pk()!='(')S();
  if(w=='ran'){raw();ex=0;return Math.floor(Math.random()*1000)/1000}
  if(fu[w]){const v=A();if(!/^(sqrt|cbrt|abs|rnd)$/.test(w))ex=0;const r=fu[w](v);if(isNaN(r)||!isFinite(r))Mt();return r}
  const a=raw(),need=n=>{if(a.length!=n)S()};
  if(w=='logb'){need(2);ex=0;const r=Math.log(sub(a[1]))/Math.log(sub(a[0]));if(isNaN(r))Mt();return r}
  if(w=='root'){need(2);const n=sub(a[0]),x=sub(a[1]);let r=x<0&&n%2==1?-Math.pow(-x,1/n):Math.pow(x,1/n);if(isNaN(r)||!n)Mt();r=Math.abs(r-Math.round(r))<1e-12?Math.round(r):r;if(!Number.isInteger(r))ex=0;return r}
  if(w=='ranint'){need(2);const l=Math.ceil(sub(a[0])),h=Math.floor(sub(a[1]));if(h<l)Mt();ex=0;return l+Math.floor(Math.random()*(h-l+1))}
  if(w=='pol'){need(2);ex=0;const x=sub(a[0]),y=sub(a[1]),r=Math.hypot(x,y),t=Math.atan2(y,x)/D;W.M.X=r;W.M.Y=t;xt=[['r',r],['θ',t]];return r}
  if(w=='rec'){need(2);ex=0;const r=sub(a[0]),t=sub(a[1]),x=z(r*Math.cos(t*D)),y=z(r*Math.sin(t*D));W.M.X=x;W.M.Y=y;xt=[['x',x],['y',y]];return x}
  if(w=='integ'){need(3);ex=0;const lo=sub(a[1]),hi=sub(a[2]),n=2000,h=(hi-lo)/n,f=x=>ev(a[0],Object.assign({},vr,{X:x})).v;let t=f(lo)+f(hi);for(let i=1;i<n;i++)t+=f(lo+i*h)*(i%2?4:2);return t*h/3}
  if(w=='deriv'){need(2);ex=0;const x0=sub(a[1]),h=1e-3*Math.max(1,Math.abs(x0)),f=x=>ev(a[0],Object.assign({},vr,{X:x})).v;return(8*(f(x0+h)-f(x0-h))-(f(x0+2*h)-f(x0-2*h)))/(12*h)}
  if(w=='sigma'){need(3);const lo=Math.round(sub(a[1])),hi=Math.round(sub(a[2]));if(hi-lo>1e5)Mt();let t=0;for(let i=lo;i<=hi;i++)t+=sub(a[0],{X:i});return t}
  S()}
 const v=E();if(p<s.length)S();if(!isFinite(v)||isNaN(v))Mt();return{v,ex,x:xt}}
/* ফরম্যাট */
function toFr(v){const a=Math.abs(v);if(!isFinite(v)||a>=1e10||a<1e-9)return null;if(Number.isInteger(v))return[v,1];
 let h1=1,h0=0,k1=0,k0=1,x=a;
 for(let i=0;i<40;i++){const q=Math.floor(x),h2=q*h1+h0,k2=q*k1+k0;h0=h1;h1=h2;k0=k1;k1=k2;if(k1>99999)return null;if(Math.abs(a-h1/k1)<1e-11*Math.max(1,a))break;const f=x-q;if(f<1e-14)break;x=1/f}
 if(Math.abs(a-h1/k1)>=1e-11*Math.max(1,a)||(''+h1+k1).length>10)return null;return[Math.sign(v)*h1,k1]}
const trz=s=>s.includes('.')?s.replace(/\.?0+$/,''):s;
function numParts(v){if(v===0)return{m:'0'};const a=Math.abs(v),nm=NMS[W.nm];
 if(W.eng){let e=Math.floor(Math.log10(a)/3)*3,m=v/Math.pow(10,e),ms=trz(String(Number(m.toPrecision(10))));if(Math.abs(+ms)>=1000){e+=3;ms=trz(String(Number((m/1000).toPrecision(10))))}return{m:ms,e}}
 if(nm.t=='sci'){const[m,e]=v.toExponential(nm.n).split('e');return{m,e:+e}}
 if(nm.t=='fix'&&a<1e10)return{m:v.toFixed(nm.n)};
 if(a>=1e10||a<1e-2){const[m,e]=v.toExponential(9).split('e');return{m:trz(m),e:+e}}
 return{m:trz(String(Number(v.toPrecision(10))))}}
const numHTML=v=>{const o=numParts(v);return(o.m+(o.e!=null?'×10<sup>'+o.e+'</sup>':'')).replace(/-/g,'−')};
const numText=v=>{const o=numParts(v);return o.m+(o.e!=null?'E'+o.e:'')};
function frHTML(f){const n=Math.abs(f[0]),d=f[1],sg=f[0]<0?'−':'';
 if(W.mixed&&n>d){const w=Math.floor(n/d),r=n%d;return sg+w+(r?`<span class="fr"><i>${r}</i><i>${d}</i></span>`:'')}
 return sg+`<span class="fr"><i>${n}</i><i>${d}</i></span>`}
const dmsStr=v=>{const a=Math.abs(v);let d=Math.floor(a),m=Math.floor((a-d)*60),s=Math.round(((a-d)*60-m)*60*100)/100;if(s>=60){s-=60;m++}if(m>=60){m-=60;d++}return(v<0?'−':'')+d+'°'+m+'′'+s+'″'};
const fracOf=r=>{if(r.dec||!r.ex||r.html)return null;const f=toFr(r.v);return f&&f[1]!=1?f:null};
function resHTML(r){
 if(r.err)return`<span class="er">${r.err}</span>`;
 if(r.cx)return cxHTML(r.cx);if(r.bs!=null)return bsHTML(r.bs);
 if(r.html)return r.html;
 if(r.x)return r.x.map(([l,v])=>`<span class="mn">${l}=${numHTML(v)}</span>`).join('');
 if(W.dms)return dmsStr(r.v);
 const f=fracOf(r);return f?frHTML(f):numHTML(r.v)}
const plainRes=r=>{if(r.txt)return r.txt;if(r.cx)return cxHTML(r.cx).replace(/<[^>]+>/g,'');if(r.bs!=null)return bsTxt(r.bs);if(r.html)return r.html.replace(/<[^>]+>/g,'');if(r.x)return r.x.map(([l,v])=>l+'='+numText(v)).join(' ');const f=fracOf(r);return f?f[0]+'/'+f[1]:numText(r.v)};
/* LCD রেন্ডার */
function rend(){
 const nm=NMS[W.nm],b=(c,t,k)=>`<b class="${k||''} ${c?'on':''}">${t}</b>`;
 $('#wst').innerHTML=b(W.sh,'S')+b(W.al,'A')+b(W.M.M,'M')+b(W.pend=='sto','STO')+b(W.pend=='rcl','RCL')+b(W.mode=='stat','STAT','md')+b(W.mode=='cmplx','CMPLX','md')+b(W.mode=='mat','MAT','md')+b(W.mode=='vct','VCT','md')+b(W.mode=='base','BASE-'+{10:'d',16:'h',2:'b',8:'o'}[W.base],'md')+b(W.hyp,'hyp')+'<span class="sp"></span>'+b(nm.t=='fix','FIX')+b(nm.t=='sci','SCI')+b(W.eng,'ENG')+b(!W.ins,'OVR')+b(1,W.deg);
 $('#wlcd').classList.toggle('off',!W.on);
 $('#wdeg').textContent=W.deg=='D'?'DEG':W.deg=='R'?'RAD':'GRA';$('#wfrc').textContent=W.frac?'FRAC':'DEC';$('#wnrm').textContent=nm.t=='norm'?'NORM':nm.t.toUpperCase()+' '+nm.n;
 $$('.kb.sh').forEach(e=>e.classList.toggle('on',!!W.sh));$$('.kb.al').forEach(e=>e.classList.toggle('on',!!W.al));
 const L1=$('#wl1'),L2=$('#wl2');L2.className='';
 if(W.menu){L1.textContent=W.menu.t;L2.className='mnu';L2.innerHTML=W.menu.items.map((it,i)=>`<span data-m="${i}">${i+1}:${esc(it[0])}</span>`).join('');return}
 const cur='<i class="cur"></i>';
 if(W.calc){const c=W.calc;L1.innerHTML=esc(dsp(W.T));L2.className='sm';L2.innerHTML=esc(c.vs[c.i])+(c.solve?L(' অনুমান| guess'):'')+'= '+esc(dsp(c.buf))+cur;return}
 L1.innerHTML=W.T.map((t,i)=>(i==W.ci?cur:'')+esc(DS[t]||t)).join('')+(W.ci>=W.T.length?cur:'');
 const c=L1.querySelector('.cur');if(c){const l=c.offsetLeft;if(l>L1.scrollLeft+L1.clientWidth-24)L1.scrollLeft=l-L1.clientWidth+40;else if(l<L1.scrollLeft)L1.scrollLeft=Math.max(0,l-24)}
 if(W.msg){L2.innerHTML=`<span class="ms">${esc(W.msg)}</span>`}
 else{L2.innerHTML=W.res?resHTML(W.res):'0';if(W.res&&W.res.mx)L2.className='mx'}}
const flash=m=>{W.msg=m;rend()};
/* সম্পাদনা */
function ins(t){
 if(W.calc){W.calc.buf.push(t);return}
 if(W.done){const keep=/^(\+|−|×|÷|\^|\^2|\^3|\^\(-1\)|!|%|nPr|nCr|⁄|ᴇ|°|′|″)$/.test(t);W.T=keep?['Ans']:[];W.ci=W.T.length;W.done=0}
 W.res=null;W.hi=-1;
 if(!W.ins&&W.ci<W.T.length)W.T[W.ci]=t;else W.T.splice(W.ci,0,t);W.ci++}
function finish(o,dec){
 let v=Math.abs(o.v)<1e-15?0:o.v;
 W.res={v,ex:o.ex,x:o.x,cx:o.cx,bs:o.bs,html:o.html,mx:o.mx,txt:o.txt,dec:dec?true:!W.frac};W.ans=v;W.aex=o.ex;W.ansC=o.cx||null;W.ansV=o.mval||null;W.done=1;W.hi=-1;W.dms=0;wsv();
 KH.unshift([W.T.join(''),plainRes(W.res)]);KH=KH.slice(0,20);sv('dcuKh2',KH);khR()}
const err=e=>{W.res={err:e=='M'?'Math ERROR':'Syntax ERROR'};W.done=0;W.ci=W.T.length};
function eq(dec){
 if(W.calc)return calcStep();
 if(!W.T.length)return;
 try{finish(W.mode=='cmplx'?evc(conv(W.T)):W.mode=='base'?evb(W.T):W.mode=='mat'||W.mode=='vct'?evm(conv(W.T)):ev(conv(W.T)),dec)}catch(e){err(e)}}
function calcStep(){const c=W.calc;
 try{c.vals[c.vs[c.i]]=c.buf.length?ev(conv(c.buf)).v:0}catch(e){W.msg=L('ত্রুটি|Error');return}
 c.buf=[];c.i++;
 if(c.i>=c.vs.length){const vals=c.vals;W.calc=null;try{finish(c.solve?doSolve(vals.X):ev(conv(W.T),vals))}catch(e){err(e)}}}
const openMenu=(t,items)=>{W.menu={t,items}};
const loadH=i=>{W.hi=i;W.T=tokenize(KH[i][0]);W.ci=W.T.length;W.done=0;W.res=null};
const FN={
 shift(){W.sh=!W.sh;W.al=0},alpha(){W.al=!W.al;W.sh=0},hyp(){W.hyp=!W.hyp},
 soon(n){flash(n+' — '+L('পরের ধাপে আসছে|coming in the next step'))},
 on(){W.on=1;FN.ac()},off(){W.on=0;FN.ac()},
 ac(){Object.assign(W,{T:[],ci:0,res:null,done:0,calc:null,pend:'',hyp:0,hi:-1,menu:null,msg:'',dms:0})},
 del(){if(W.calc){W.calc.buf.pop();return}W.done=0;W.res=null;if(W.ci<W.T.length)W.T.splice(W.ci,1);else if(W.ci>0)W.T.splice(--W.ci,1)},
 insm(){W.ins=!W.ins},eq(){eq()},approx(){eq(1)},
 sd(){if(W.res&&!W.res.err&&!W.res.html&&!W.res.x&&!W.res.cx&&W.res.bs==null)W.res.dec=!W.res.dec},mixed(){W.mixed=!W.mixed},
 todms(){if(W.res&&!W.res.err)W.dms=!W.dms},eng(){W.eng=!W.eng},
 dmsk(){let i=W.ci-1,last='';while(i>=0&&/^[\d.°′″]$/.test(W.T[i])){if(/^[°′″]$/.test(W.T[i])){last=W.T[i];break}i--}ins(last=='°'?'′':last=='′'?'″':'°')},
 rcl(){W.pend='rcl'},sto(){W.pend='sto'},
 mplus(m){if(W.T.length&&!W.done)eq();if(W.res&&!W.res.err){W.M.M+=(m||1)*W.res.v;wsv()}},mminus(){FN.mplus(-1)},
 calc(){if(!W.T.length)return;const vs=[...new Set(W.T.filter(t=>/^[A-FXYM]$/.test(t)))];if(!vs.length)return eq();W.calc={vs,i:0,buf:[],vals:{}}},
 drg(){openMenu('DRG▸',[['°',()=>ins('°')],['ʳ',()=>ins('ʳ')],['ᵍ',()=>ins('ᵍ')]])},
 clr(){openMenu('CLR',[[L('সেটআপ|Setup'),()=>{W.deg='D';W.nm=0;W.frac=true;W.eng=0;W.mixed=0;wsv();flash(L('সেটআপ রিসেট|Setup reset'))}],[L('মেমোরি|Memory'),()=>{Object.keys(W.M).forEach(k=>W.M[k]=0);W.ans=0;wsv();flash(L('মেমোরি মুছেছে|Memory cleared'))}],[L('সব|All'),()=>{Object.keys(W.M).forEach(k=>W.M[k]=0);W.ans=0;W.deg='D';W.nm=0;W.frac=true;KH=[];sv('dcuKh2',KH);wsv();khR();FN.ac();flash(L('সব মুছেছে|All cleared'))}]])},
 fact(){const n=W.ans;if(!Number.isInteger(n)||n<2||n>1e10)return flash(L('শুধু পূর্ণসংখ্যা (২ বা বেশি)|Integers ≥ 2 only'));
  let m=n,f=[];for(let d=2;d*d<=m;d++){let e=0;while(m%d==0){m/=d;e++}if(e)f.push([d,e])}if(m>1)f.push([m,1]);
  W.res={v:n,ex:1,html:'<span style="font-size:.6em">'+n+' = '+f.map(([p,e])=>e>1?p+'<sup>'+e+'</sup>':p).join('×')+'</span>'};W.done=1},
 hist(d){if(!KH.length)return;const h=W.hi+d;if(h<0){W.hi=-1;W.T=[];W.ci=0;W.done=0;W.res=null;return}loadH(Math.min(h,KH.length-1))}};
function run(a){
 if(a[0]=='T')return ins(a.slice(2));
 if(a[0]=='H'){let n=a.slice(2);n+=W.hyp?'h(':'(';W.hyp=0;return ins(n)}
 const[,n,x]=a.split(':');FN[n](x)}
function press(k){
 if(!W.on&&k.n!='F:on')return;
 W.msg='';if(W.res&&W.res.err)W.res=null;
 if(W.menu){if(k.n=='F:ac')W.menu=null;else if(/^\d$/.test(k.m)&&W.menu.items[+k.m-1]){const f=W.menu.items[+k.m-1][1];W.menu=null;f()}W.sh=W.al=0;rend();return}
 const isV=a=>a&&/^[A-FXYM]$/.test(a[0]);
 if(W.mode=='base'&&!W.sh&&!W.al){const bm={'x²':10,'x■':16,'log':2,'ln':8}[k.m];if(bm){W.base=bm;rend();return}}
 if(W.pend&&isV(k.a)){const v=k.a[0],p=W.pend;W.pend='';W.sh=W.al=0;if(p=='sto'){W.M[v]=W.ans;wsv();W.msg=v+' = '+numText(W.ans)}else ins(v);rend();return}
 let act=k.n;
 if(W.al&&k.a)act=k.a[1];else if(W.sh&&k.s)act=k.s[1];
 if(W.calc&&!/^(T:[\d.\-−()+×÷]|F:(eq|del|ac|shift|alpha))/.test(act)){rend();return}
 run(act);
 if(act!='F:shift'&&act!='F:alpha')W.sh=W.al=0;
 rend()}
function pad(c){
 if(!W.on||W.menu||W.calc)return;W.msg='';if(W.res&&W.res.err)W.res=null;
 if(c=='l'||c=='r'){if(W.done){W.done=0;W.res=null;W.ci=c=='l'?W.T.length:0}W.ci=Math.max(0,Math.min(W.T.length,W.ci+(c=='l'?-1:1)))}
 else FN.hist(c=='u'?1:-1);
 rend()}
$('#wm').addEventListener('click',e=>{const b=e.target.closest('.kb'),p=e.target.closest('[data-p]'),m=e.target.closest('[data-m]');
 if(b)press(KS[+b.dataset.i]);else if(p)pad(p.dataset.p);
 else if(m&&W.menu){const f=W.menu.items[+m.dataset.m][1];W.menu=null;f();rend()}});
$('#wdeg').onclick=()=>{W.deg=W.deg=='D'?'R':W.deg=='R'?'G':'D';wsv();rend()};
$('#wfrc').onclick=()=>{W.frac=!W.frac;if(W.res)W.res.dec=!W.frac;wsv();rend()};
$('#wnrm').onclick=()=>{W.nm=(W.nm+1)%NMS.length;wsv();rend()};
$('#wzm').onclick=()=>$('#wlcd').classList.toggle('zm');
/* কীবোর্ড */
const KM={'+':'+','-':'−','*':'×','/':'÷','(':'(',')':')','^':'^','!':'!','%':'%',',':',','.':'.','p':'π'};
document.addEventListener('keydown',e=>{
 if(location.hash!='#calc'||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key;let h=1;
 if(/^\d$/.test(k)){if(W.menu||W.calc||W.on)press(gB.concat(gA).find(x=>x.m==k))}
 else if(KM[k]){const t=KM[k];if(W.on&&!W.menu)(W.calc&&!/[\d.\-−()+×÷]/.test(t))||(ins(t),rend())}
 else if(k=='Enter'||k=='='){press(KS.find(x=>x.m=='='))}
 else if(k=='Backspace'){if(W.on&&!W.menu){if(W.calc)W.calc.buf.pop();else{W.done=0;W.res=null;if(W.ci>0)W.T.splice(--W.ci,1)}rend()}}
 else if(k=='Delete')press(KS.find(x=>x.m=='DEL'));
 else if(k=='Escape')press(KS.find(x=>x.m=='AC'));
 else if(k=='ArrowLeft')pad('l');else if(k=='ArrowRight')pad('r');else if(k=='ArrowUp')pad('u');else if(k=='ArrowDown')pad('d');
 else if(W.mode=='base'&&/^[a-fA-F]$/.test(k)){if(W.on&&!W.menu&&!W.calc){ins(k.toUpperCase());rend()}}
 else if(W.mode=='cmplx'&&k=='i'){if(W.on&&!W.menu&&!W.calc){ins('i');rend()}}
 else if({s:'sin(',c:'cos(',t:'tan(',l:'log(',n:'ln(',r:'√('}[k]){if(W.on&&!W.menu&&!W.calc){ins({s:'sin(',c:'cos(',t:'tan(',l:'log(',n:'ln(',r:'√('}[k]);rend()}}
 else h=0;
 if(h)e.preventDefault()});
/* ===== ধাপ ২: MODE/SETUP, STAT, CMPLX, BASE ===== */
const XM='x\u0304',YM='y\u0304',XH='x\u0302',YH='y\u0302';
const STY=['1-VAR','A+BX','_+CX²','ln X','e^X','A·B^X','A·X^B','1/X'];
const STV=new Set(['n',XM,YM,'σx','σy','sx','sy','Σx','Σx²','Σy','Σy²','Σxy','minX','maxX','RegA','RegB','RegC','Regr']);
TKS.push(...STV,XH+'(',YH+'(','conj(','arg(','ReP(','ImP(','Not(','and','or','xor','xnor','i','∠');TKS.sort((a,b)=>b.length-a.length);
Object.assign(DS,{RegA:'A',RegB:'B',RegC:'C',Regr:'r','conj(':'Conjg(','Not(':'Not('});
W.st=ld('dcuSt',{ty:0,rows:Array.from({length:5},()=>['','',''])});
const stSave=()=>sv('dcuSt',W.st);
const nf=v=>{const[m,e]=v.toExponential(14).split('e');return+e==0?m:m+'*10^('+e+')'};
const det3=m=>m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1])-m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0])+m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]);
function solve3(M,b){const d=det3(M);if(!d)throw 'M';return[0,1,2].map(c=>det3(M.map((r,i)=>r.map((v,j)=>j==c?b[i]:v)))/d)}
function stCalc(){
 const t=W.st.ty,two=t>0,R=[];
 for(const[xs,fs,ys]of W.st.rows){if(xs===''&&ys==='')continue;const x=+xs,y=+ys,f=two||fs===''?1:+fs;if(xs===''||isNaN(x)||isNaN(f)||f<0||(two&&(ys===''||isNaN(y))))throw 'M';R.push({x,y,f})}
 if(!R.length)throw 'M';
 const sum=g=>R.reduce((s,r)=>s+r.f*g(r),0),n=sum(r=>1),sx=sum(r=>r.x),sx2=sum(r=>r.x*r.x);
 const o={n,[XM]:sx/n,'Σx':sx,'Σx²':sx2,'σx':Math.sqrt(Math.max(0,sx2/n-(sx/n)**2)),sx:n>1?Math.sqrt(Math.max(0,(sx2-sx*sx/n)/(n-1))):NaN,minX:Math.min(...R.map(r=>r.x)),maxX:Math.max(...R.map(r=>r.x))};
 if(!two)return o;
 const sy=sum(r=>r.y),sy2=sum(r=>r.y*r.y),sxy=sum(r=>r.x*r.y);
 Object.assign(o,{[YM]:sy/n,'Σy':sy,'Σy²':sy2,'Σxy':sxy,'σy':Math.sqrt(Math.max(0,sy2/n-(sy/n)**2)),sy:n>1?Math.sqrt(Math.max(0,(sy2-sy*sy/n)/(n-1))):NaN});
 if(t==2){const s3=sum(r=>r.x**3),s4=sum(r=>r.x**4),sx2y=sum(r=>r.x*r.x*r.y);[o.RegA,o.RegB,o.RegC]=solve3([[n,sx,sx2],[sx,sx2,s3],[sx2,s3,s4]],[sy,sxy,sx2y]);o.Regr=NaN}
 else{const fx=[0,x=>x,0,Math.log,x=>x,x=>x,Math.log,x=>1/x][t],fy=[0,y=>y,0,y=>y,Math.log,Math.log,Math.log,y=>y][t];
  const U=R.map(r=>fx(r.x)),V=R.map(r=>fy(r.y));if(U.some(v=>!isFinite(v))||V.some(v=>!isFinite(v)))throw 'M';
  const N=R.length,a_=(A,B)=>A.reduce((s,v,i)=>s+v*B[i],0),Su=a_(U,U.map(()=>1)),Sv=a_(V,V.map(()=>1)),Suu=a_(U,U),Svv=a_(V,V),Suv=a_(U,V),dn=N*Suu-Su*Su;
  if(!dn)throw 'M';const b=(N*Suv-Su*Sv)/dn,a=(Sv-b*Su)/N;
  o.RegA=t>=4&&t<=6?Math.exp(a):a;o.RegB=t==5?Math.exp(b):b;o.Regr=(N*Suv-Su*Sv)/Math.sqrt(dn*(N*Svv-Sv*Sv))}
 return o}
function stEst(w,v){const o=stCalc(),t=W.st.ty;if(!t)throw 'S';const A=o.RegA,B=o.RegB,C=o.RegC;
 if(w)return[0,A+B*v,A+B*v+C*v*v,A+B*Math.log(v),A*Math.exp(B*v),A*Math.pow(B,v),A*Math.pow(v,B),A+B/v][t];
 const d=B*B-4*C*(A-v);return[0,(v-A)/B,(-B+Math.sqrt(d))/(2*C),Math.exp((v-A)/B),Math.log(v/A)/B,Math.log(v/A)/Math.log(B),Math.pow(v/A,1/B),B/(v-A)][t]}
function statSub(t){const o=stCalc(),v=o[t];if(v===undefined||!isFinite(v))throw 'M';return'('+nf(v)+')'}
/* জটিল সংখ্যা */
function evc(s){let p=0;const pk=()=>s[p],S=()=>{throw 'S'},D=W.deg=='D'?Math.PI/180:W.deg=='G'?Math.PI/200:1,R=v=>[v,0];
 const cA=(a,b)=>[a[0]+b[0],a[1]+b[1]],cM=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],cD=(a,b)=>{const d=b[0]*b[0]+b[1]*b[1];if(!d)throw 'M';return[(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]};
 const ab=a=>Math.hypot(a[0],a[1]),pl=(r,t)=>[r*Math.cos(t),r*Math.sin(t)],ln=a=>{if(!ab(a))throw 'M';return[Math.log(ab(a)),Math.atan2(a[1],a[0])]},ex=a=>pl(Math.exp(a[0]),a[1]);
 const pw=(a,b)=>{if(!ab(a)){if(!ab(b))throw 'M';return[0,0]}if(!b[1]&&Number.isInteger(b[0])&&Math.abs(b[0])<=64){let r=[1,0];for(let i=0;i<Math.abs(b[0]);i++)r=cM(r,a);return b[0]<0?cD([1,0],r):r}return ex(cM(b,ln(a)))};
 const sq=a=>!a[1]?(a[0]>=0?[Math.sqrt(a[0]),0]:[0,Math.sqrt(-a[0])]):ex([ln(a)[0]/2,ln(a)[1]/2]);
 function E(){let v=T1();while(pk()=='+'||pk()=='-'){const o=s[p++],r=T1();v=o=='+'?cA(v,r):cA(v,[-r[0],-r[1]])}return v}
 function T1(){let v=U();for(;;){const c=pk();if(c=='*'){p++;v=cM(v,U())}else if(c=='/'){p++;v=cD(v,U())}else if(c&&/[(a-zA-Z]/.test(c))v=cM(v,U());else return v}}
 function U(){const c=pk();if(c=='-'){p++;const v=U();return[-v[0],-v[1]]}if(c=='+'){p++;return U()}return Pw()}
 function Pw(){const b=F();if(pk()=='^'){p++;return pw(b,U())}return b}
 function F(){let v=A();while(pk()=='∠'){p++;const t=U();v=pl(ab(v),t[0]*D)}return v}
 function A(){const c=pk();if(c=='('){p++;const v=E();if(pk()==')')p++;else if(p<s.length)S();return v}
  const m=/^(\d+\.?\d*|\.\d+)/.exec(s.slice(p));if(m){p+=m[0].length;return R(parseFloat(m[0]))}
  if(c&&/[A-FXYM]/.test(c)){p++;return R(W.M[c])}
  const n=/^(sqrt|abs|arg|conj|rep|imp|ln|log|sin|cos|pi|ans|e|i)/.exec(s.slice(p));if(!n)S();const w=n[1];p+=w.length;
  if(w=='pi')return R(Math.PI);if(w=='e')return R(Math.E);if(w=='i')return[0,1];if(w=='ans')return W.ansC||R(W.ans);
  if(pk()!='(')S();const a=A(),re=a[0]*D;
  switch(w){case'sqrt':return sq(a);case'abs':return R(ab(a));case'arg':return R(Math.atan2(a[1],a[0])/D);case'conj':return[a[0],-a[1]];case'rep':return R(a[0]);case'imp':return R(a[1]);case'ln':return ln(a);
   case'log':{const l=ln(a);return[l[0]/Math.LN10,l[1]/Math.LN10]}
   case'sin':return[Math.sin(re)*Math.cosh(a[1]),Math.cos(re)*Math.sinh(a[1])];case'cos':return[Math.cos(re)*Math.cosh(a[1]),-Math.sin(re)*Math.sinh(a[1])]}S()}
 const v=E();if(p<s.length)S();const z=a=>Math.abs(a)<1e-14?0:a,c=[z(v[0]),z(v[1])];if(!isFinite(c[0])||!isFinite(c[1]))throw 'M';return{v:c[0],cx:c}}
function cxHTML(c){const a=Math.abs(c[0])<1e-13?0:c[0],b=Math.abs(c[1])<1e-13?0:c[1],D=W.deg=='D'?Math.PI/180:W.deg=='G'?Math.PI/200:1;
 if(!b)return numHTML(a);
 if(W.cpol)return'<span style="font-size:.7em">'+numHTML(Math.hypot(a,b))+'∠'+numHTML(Math.atan2(b,a)/D)+'</span>';
 const im=Math.abs(b)==1?'':numHTML(Math.abs(b));
 return'<span style="font-size:.7em">'+(a?numHTML(a):'')+(a?(b<0?'−':'+'):(b<0?'−':''))+im+'i</span>'}
/* BASE-N (৩২ বিট) */
function evb(T){const B=W.base,w=v=>BigInt.asIntN(32,v);let i=0;const S=()=>{throw 'S'},pk=()=>T[i];
 function E(){let v=An();for(;;){const t=pk();if(t=='or'){i++;v=w(v|An())}else if(t=='xor'){i++;v=w(v^An())}else if(t=='xnor'){i++;v=w(~(v^An()))}else return v}}
 function An(){let v=Ad();while(pk()=='and'){i++;v=w(v&Ad())}return v}
 function Ad(){let v=Mu();for(;;){const t=pk();if(t=='+'){i++;v=w(v+Mu())}else if(t=='−'){i++;v=w(v-Mu())}else return v}}
 function Mu(){let v=Un();for(;;){const t=pk();if(t=='×'){i++;v=w(v*Un())}else if(t=='÷'){i++;const d=Un();if(!d)throw 'M';v=w(v/d)}else return v}}
 function Un(){const t=pk();if(t=='-'||t=='−'){i++;return w(-Un())}
  if(t=='Not('||t=='('){i++;const v=E();if(pk()==')')i++;else if(i<T.length)S();return t=='Not('?w(~v):v}
  let v=0n,n=0;while(i<T.length&&/^[0-9A-F]$/.test(T[i])){const d=parseInt(T[i],16);if(d>=B)S();v=v*BigInt(B)+BigInt(d);i++;n++}
  if(!n)S();if(B==10?v>2147483647n:v>4294967295n)throw 'M';return w(v)}
 const v=E();if(i<T.length)S();return{v:Number(v),bs:v}}
const bsTxt=b=>W.base==10?b.toString():BigInt.asUintN(32,b).toString(W.base).toUpperCase();
const bsHTML=b=>{const t=bsTxt(b).replace('-','−');return t.length>11?`<span style="font-size:.5em">${t}</span>`:t};
/* মোড ও মেনু */
function setMode(m){W.mode=m;W.base=10;FN.ac();$('#wstat').style.display=m=='stat'?'':'none';if(m=='stat')stR();$('#wmat').style.display=m=='mat'||m=='vct'?'':'none';if(m=='mat'||m=='vct')mtR();$('#wlist').style.display='none'}
const wtm=(t,a)=>openMenu(t,a.map(([l,k])=>[l,()=>ins(k)]));
const stType=()=>openMenu('STAT',STY.map((n,i)=>[n,()=>{W.st.ty=i;stSave();stR()}]));
Object.assign(FN,{
 mode(){openMenu('MODE',[['COMP',()=>setMode('comp')],['CMPLX',()=>setMode('cmplx')],['STAT',()=>{setMode('stat');stType()}],['BASE-N',()=>setMode('base')]])},
 setup(){const fr=v=>()=>{W.frac=v;if(W.res)W.res.dec=!v;wsv()},dg=(n,e)=>()=>{W.nm=n;W.eng=e;wsv()};
  openMenu('SETUP',[[L('কোণ|Angle'),()=>openMenu('ANGLE',[['DEG',()=>{W.deg='D';wsv()}],['RAD',()=>{W.deg='R';wsv()}],['GRA',()=>{W.deg='G';wsv()}]])],
   [L('ডিসপ্লে|Display'),()=>openMenu('DISPLAY',[['NORM',dg(0,0)],['FIX 2',dg(1,0)],['SCI 3',dg(3,0)],['ENG',dg(0,1)]])],
   [L('ফল|Result'),()=>openMenu('RESULT',[['FRAC',fr(true)],['DEC',fr(false)],['a b/c',()=>{W.mixed=1}],['d/c',()=>{W.mixed=0}]])]])},
 stat(){if(W.mode!='stat'){setMode('stat');stType();return}
  const t=W.st.ty,two=t>0,rg=[['A','RegA'],['B','RegB']];if(t==2)rg.push(['C','RegC']);else rg.push(['r','Regr']);rg.push([XH,XH+'('],[YH,YH+'(']);
  openMenu('STAT',[[L('ধরন|Type'),stType],[L('ডেটা|Data'),()=>$('#wstat').scrollIntoView({behavior:'smooth',block:'nearest'})],
   ['Sum',()=>wtm('Sum',[['Σx²','Σx²'],['Σx','Σx']].concat(two?[['Σy²','Σy²'],['Σy','Σy'],['Σxy','Σxy']]:[]))],
   ['Var',()=>wtm('Var',[['n','n'],[XM,XM],['σx','σx'],['sx','sx']].concat(two?[[YM,YM],['σy','σy'],['sy','sy']]:[]))],
   ['MinMax',()=>wtm('MinMax',[['minX','minX'],['maxX','maxX']])]].concat(two?[['Reg',()=>wtm('Reg',rg)]]:[]))},
 cmplx(){if(W.mode!='cmplx'){setMode('cmplx');return}
  openMenu('CMPLX',[['arg',()=>ins('arg(')],['Conjg',()=>ins('conj(')],['ReP',()=>ins('ReP(')],['ImP',()=>ins('ImP(')],['▶r∠θ',()=>{W.cpol=1}],['▶a+bi',()=>{W.cpol=0}]])},
 base(){if(W.mode!='base'){setMode('base');return}wtm('LOGIC',[['and','and'],['or','or'],['xor','xor'],['xnor','xnor'],['Not','Not(']])},
 bk(n){W.base=+n}});
/* STAT ডেটা প্যানেল */
function stR(){const t=W.st.ty,two=t>0;
 $('#wstat').innerHTML=`<h2>${L('স্ট্যাট ডেটা|STAT Data')}</h2><label>${L('ধরন|Type')}<select id="wsty">${STY.map((n,i)=>`<option value="${i}"${i==t?' selected':''}>${n}</option>`).join('')}</select></label>
<table style="margin-top:8px"><tr><th>#</th><th>X</th><th>${two?'Y':'FREQ'}</th></tr>${W.st.rows.map((r,i)=>`<tr><td>${i+1}</td><td><input data-r="${i}" data-c="0" inputmode="decimal" value="${esc(r[0])}"></td><td><input data-r="${i}" data-c="${two?2:1}" inputmode="decimal" value="${esc(two?r[2]:r[1])}"></td></tr>`).join('')}</table>
<div style="margin-top:8px"><button type="button" class="bs" data-s="add">+ ${L('সারি|Row')}</button> <button type="button" class="bs" data-s="del">− ${L('সারি|Row')}</button> <button type="button" class="bs" data-s="clr">${L('সব মুছুন|Clear')}</button></div>
<p class="hint">${L('ডেটা দিয়ে ক্যালকুলেটরে SHIFT+1 চাপুন → Sum / Var / MinMax / Reg থেকে মান বসিয়ে = চাপুন।|Enter data, then press SHIFT+1 on the calculator → pick Sum / Var / MinMax / Reg and press =.')}</p>`}
$('#wstat').addEventListener('input',e=>{const d=e.target.dataset;if(d.r!=null){W.st.rows[+d.r][+d.c]=e.target.value;stSave()}});
$('#wstat').addEventListener('change',e=>{if(e.target.id=='wsty'){W.st.ty=+e.target.value;stSave();stR()}});
$('#wstat').addEventListener('click',e=>{const a=e.target.dataset.s;if(!a)return;const R=W.st.rows;
 if(a=='add')R.push(['','','']);else if(a=='del'&&R.length>1)R.pop();else if(a=='clr')W.st.rows=Array.from({length:5},()=>['','','']);stSave();stR()});

/* ===== ধাপ ৩: SOLVE, CONST, CONV, MATRIX, VECTOR ===== */
const KC=[['mp','প্রোটনের ভর|Proton mass',1.67262192369e-27,'kg'],['mn','নিউট্রনের ভর|Neutron mass',1.67492749804e-27,'kg'],['me','ইলেকট্রনের ভর|Electron mass',9.1093837015e-31,'kg'],['mμ','মিউয়নের ভর|Muon mass',1.883531627e-28,'kg'],
['a0','বোর ব্যাসার্ধ|Bohr radius',5.29177210903e-11,'m'],['h','প্লাঙ্ক ধ্রুবক|Planck constant',6.62607015e-34,'J·s'],['μN','নিউক্লিয়ার ম্যাগনেটন|Nuclear magneton',5.0507837461e-27,'J/T'],['μB','বোর ম্যাগনেটন|Bohr magneton',9.2740100783e-24,'J/T'],
['ħ','ডিরাক ধ্রুবক|Reduced Planck',1.054571817e-34,'J·s'],['α','সূক্ষ্ম গঠন ধ্রুবক|Fine-structure',7.2973525693e-3,''],['re','ইলেকট্রনের ক্লাসিক্যাল ব্যাসার্ধ|Classical electron radius',2.8179403262e-15,'m'],['λc','কম্পটন তরঙ্গদৈর্ঘ্য|Compton wavelength',2.42631023867e-12,'m'],
['γp','প্রোটন জাইরোম্যাগনেটিক অনুপাত|Proton gyromagnetic ratio',2.6752218744e8,'1/(s·T)'],['λcp','প্রোটন কম্পটন তরঙ্গদৈর্ঘ্য|Proton Compton wavelength',1.32140985539e-15,'m'],['λcn','নিউট্রন কম্পটন তরঙ্গদৈর্ঘ্য|Neutron Compton wavelength',1.31959090581e-15,'m'],['R∞','রিডবার্গ ধ্রুবক|Rydberg constant',10973731.56816,'1/m'],
['u','পারমাণবিক ভর একক|Atomic mass unit',1.6605390666e-27,'kg'],['μp','প্রোটনের চৌম্বক ভ্রামক|Proton magnetic moment',1.41060679736e-26,'J/T'],['μe','ইলেকট্রনের চৌম্বক ভ্রামক|Electron magnetic moment',-9.2847647043e-24,'J/T'],['μn','নিউট্রনের চৌম্বক ভ্রামক|Neutron magnetic moment',-9.6623651e-27,'J/T'],
['μμ','মিউয়নের চৌম্বক ভ্রামক|Muon magnetic moment',-4.4904483e-26,'J/T'],['F','ফ্যারাডে ধ্রুবক|Faraday constant',96485.33212,'C/mol'],['e','মৌলিক চার্জ|Elementary charge',1.602176634e-19,'C'],['NA','অ্যাভোগাড্রো ধ্রুবক|Avogadro constant',6.02214076e23,'1/mol'],
['k','বোল্টজম্যান ধ্রুবক|Boltzmann constant',1.380649e-23,'J/K'],['Vm','মোলার আয়তন|Molar volume (STP)',0.022413969545,'m³/mol'],['R','সার্বজনীন গ্যাস ধ্রুবক|Gas constant',8.314462618,'J/(mol·K)'],['c0','আলোর বেগ|Speed of light',299792458,'m/s'],
['c1','প্রথম বিকিরণ ধ্রুবক|First radiation constant',3.7417718521927573e-16,'W·m²'],['c2','দ্বিতীয় বিকিরণ ধ্রুবক|Second radiation constant',0.01438776877,'m·K'],['σ','স্টেফান-বোল্টজম্যান ধ্রুবক|Stefan–Boltzmann',5.670374419e-8,'W/(m²·K⁴)'],['ε0','শূন্যস্থানের পারমিটিভিটি|Vacuum permittivity',8.8541878128e-12,'F/m'],
['μ0','শূন্যস্থানের পারমিয়াবিলিটি|Vacuum permeability',1.25663706212e-6,'N/A²'],['φ0','চৌম্বক ফ্লাক্স কোয়ান্টাম|Magnetic flux quantum',2.067833848e-15,'Wb'],['g','অভিকর্ষজ ত্বরণ (প্রমাণ)|Standard gravity',9.80665,'m/s²'],['G0','পরিবাহিতা কোয়ান্টাম|Conductance quantum',7.748091729e-5,'S'],
['Z0','শূন্যস্থানের ইম্পিডেন্স|Vacuum impedance',376.730313668,'Ω'],['t','শূন্য সেলসিয়াস (কেলভিনে)|0 °C in kelvin',273.15,'K'],['G','মহাকর্ষ ধ্রুবক|Gravitational constant',6.6743e-11,'m³/(kg·s²)'],['atm','প্রমাণ বায়ুমণ্ডল|Standard atmosphere',101325,'Pa']];
const KV={};KC.forEach((c,i)=>{const id='K'+String(i+1).padStart(2,'0');KV[id]={s:c[0],n:c[1],v:c[2],u:c[3],id};DS[id]=c[0]});
const CVD={len:['দৈর্ঘ্য|Length',[['m',1],['km',1e3],['cm',.01],['mm',.001],['in',.0254],['ft',.3048],['yd',.9144],['mile',1609.344],['nmi',1852]]],
 mass:['ভর|Mass',[['kg',1],['g',.001],['mg',1e-6],['t',1e3],['lb',.45359237],['oz',.028349523125]]],
 area:['ক্ষেত্রফল|Area',[['m²',1],['km²',1e6],['ha',1e4],['cm²',1e-4],['in²',6.4516e-4],['ft²',.09290304],['acre',4046.8564224]]],
 vol:['আয়তন|Volume',[['L',1],['mL',.001],['m³',1e3],['gal (US)',3.785411784],['qt (US)',.946352946],['cup (US)',.2365882365],['fl oz (US)',.0295735295625]]],
 temp:['তাপমাত্রা|Temperature',[['°C'],['K'],['°F']]],
 spd:['গতি|Speed',[['m/s',1],['km/h',1/3.6],['mph',.44704],['kn',1852/3600],['ft/s',.3048]]],
 prs:['চাপ|Pressure',[['Pa',1],['kPa',1e3],['bar',1e5],['atm',101325],['mmHg',133.322387415],['psi',6894.757293168]]],
 eng:['শক্তি|Energy',[['J',1],['kJ',1e3],['cal',4.184],['kcal',4184],['Wh',3600],['kWh',3.6e6],['eV',1.602176634e-19],['BTU',1055.05585262]]],
 pow:['ক্ষমতা|Power',[['W',1],['kW',1e3],['hp',745.69987158]]],
 time:['সময়|Time',[['s',1],['min',60],['h',3600],['day',86400],['week',604800],['year',31557600]]],
 ang:['কোণ|Angle',[['deg',1],['rad',180/Math.PI],['grad',.9]]]};
const cvt=(v,c,a,b)=>{if(c=='temp'){const C=a==0?v:a==1?v-273.15:(v-32)*5/9;return b==0?C:b==1?C+273.15:C*9/5+32}const u=CVD[c][1];return v*u[a][1]/u[b][1]};
function numToks(v){if(v===0)return['0'];const[m,e]=v.toExponential(9).split('e'),o=[];trz(m).split('').forEach(ch=>o.push(ch=='-'?'-':ch));if(+e){o.push('ᴇ');if(+e<0)o.push('-');String(Math.abs(+e)).split('').forEach(d=>o.push(d))}return o}
const lbox=()=>$('#wlist'),lclose='<button type="button" class="bs" data-x="1" style="float:right">✕</button>';
function constR(){lbox().style.display='';lbox().innerHTML=lclose+`<h2>${L('ধ্রুবক (CONST)|Constants (CONST)')}</h2><p class="hint">${L('একটিতে ট্যাপ করলে হিসাবে বসবে। মান CODATA ২০১৮।|Tap one to insert it. Values: CODATA 2018.')}</p><div style="max-height:300px;overflow:auto">`+Object.values(KV).map((c,i)=>`<div class="kh" data-k="${c.id}"><span><b>${i+1}. ${esc(c.s)}</b> — ${esc(L(c.n))}</span><b>${numText(c.v)} ${esc(c.u)}</b></div>`).join('')+'</div>'}
function convR(){const b=lbox();b.style.display='';
 b.innerHTML=lclose+`<h2>${L('একক রূপান্তর (CONV)|Unit Conversion (CONV)')}</h2><label>${L('ধরন|Category')}<select id="wcc">${Object.keys(CVD).map(k=>`<option value="${k}">${L(CVD[k][0])}</option>`).join('')}</select></label>
<div class="g3"><div><label>${L('মান|Value')}<input id="wcv" inputmode="decimal" value="1"></label></div><div><label>${L('থেকে|From')}<select id="wcf"></select></label></div><div><label>${L('এতে|To')}<select id="wct"></select></label></div></div>
<div class="tvb"><b id="wco"></b></div><button type="button" class="bs" id="wcu" style="margin-top:8px">${L('ফল হিসাবে বসান|Insert result')}</button>`;
 const cc=$('#wcc'),f=$('#wcf'),t=$('#wct'),v=$('#wcv'),o=$('#wco');
 const fill=()=>{const u=CVD[cc.value][1].map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('');f.innerHTML=u;t.innerHTML=u;t.value=Math.min(1,u.length-1);upd()};
 function upd(){const x=parseFloat(v.value),r=cvt(x,cc.value,+f.value,+t.value);o.textContent=isFinite(r)?(+v.value+' '+CVD[cc.value][1][+f.value][0]+' = '+numText(Math.abs(r)<1e-12?0:r)+' '+CVD[cc.value][1][+t.value][0]):'—';o._r=r}
 cc.onchange=fill;[f,t,v].forEach(e=>e.oninput=upd);f.onchange=t.onchange=upd;
 $('#wcu').onclick=()=>{const r=o._r;if(isFinite(r)){numToks(Math.abs(r)<1e-12?0:r).forEach(ins);lbox().style.display='none';rend()}};fill()}
lbox().addEventListener('click',e=>{if(e.target.closest('[data-x]')){lbox().style.display='none';return}const k=e.target.closest('[data-k]');if(k){ins(k.dataset.k);lbox().style.display='none';rend()}});
/* SOLVE */
function doSolve(g){const i=W.T.indexOf('='),a=conv(i<0?W.T:W.T.slice(0,i)),b=i<0||i==W.T.length-1?'0':conv(W.T.slice(i+1));
 const f=x=>ev(a,{X:x}).v-ev(b,{X:x}).v;
 const nw=x0=>{let x=x0;try{for(let k=0;k<200;k++){const fx=f(x);if(Math.abs(fx)<1e-14)return x;const h=1e-6*Math.max(1,Math.abs(x)),d=(f(x+h)-f(x-h))/(2*h);if(!d||!isFinite(d))return NaN;const nx=x-fx/d;if(!isFinite(nx))return NaN;if(Math.abs(nx-x)<1e-14*Math.max(1,Math.abs(x))){x=nx;break}x=nx}return x}catch(e){return NaN}};
 const ok=x=>{if(!isFinite(x))return false;try{return Math.abs(f(x))<1e-7*Math.max(1,Math.abs(x))}catch(e){return false}};
 let r=NaN;for(const s of[0,1,-1,2,-2,5,-5,10,-10,100,-100,1000,-1000]){const x=nw(g+s);if(ok(x)){r=x;break}}
 if(!isFinite(r))throw 'M';r=+r.toPrecision(12);if(Math.abs(r)<1e-12)r=0;W.M.X=r;wsv();
 return{v:r,ex:0,html:'X='+numHTML(r)}}
/* ম্যাট্রিক্স ও ভেক্টর */
const mkM=(r,c)=>({r,c,d:Array.from({length:r},()=>Array(c).fill(''))}),mkV=n=>({n,d:Array(n).fill('')});
W.mt=ld('dcuMt',null)||{A:mkM(2,2),B:mkM(2,2),C:mkM(2,2),VA:mkV(3),VB:mkV(3),VC:mkV(3)};W.mtab='A';W.ansV=null;
const mtSave=()=>sv('dcuMt',W.mt),cell=x=>x===''||x==null?0:ev(String(x).replace(/\s+/g,'')).v;
function mtR(){const vct=W.mode=='vct',ks=vct?['VA','VB','VC']:['A','B','C'];if(!ks.includes(W.mtab))W.mtab=ks[0];const k=W.mtab,m=W.mt[k],sel=(n,v,lo,hi)=>`<select data-d="${n}" style="width:auto;display:inline-block">${Array.from({length:hi-lo+1},(_,i)=>`<option${lo+i==v?' selected':''}>${lo+i}</option>`).join('')}</select>`;
 const inp=(i,j,v)=>`<td><input data-i="${i}" data-j="${j}" inputmode="decimal" value="${esc(v)}" style="min-width:48px"></td>`;
 $('#wmat').innerHTML=`<h2>${vct?L('ভেক্টর ডেটা|Vector Data'):L('ম্যাট্রিক্স ডেটা|Matrix Data')}</h2><div>${ks.map(x=>`<button type="button" class="bs${x==k?' on':''}" data-t="${x}">${vct?'Vct':'Mat'}${x.slice(-1)}</button>`).join(' ')}</div>
<p style="margin:8px 0 0">${vct?L('মাত্রা|Dim')+' '+sel('n',m.n,2,3):L('সারি|Rows')+' '+sel('r',m.r,1,4)+' × '+L('কলাম|Cols')+' '+sel('c',m.c,1,4)}</p>
<div class="sc"><table style="margin-top:8px">${vct?'<tr>'+m.d.map((v,j)=>inp(0,j,v)).join('')+'</tr>':m.d.map((r,i)=>'<tr>'+r.map((v,j)=>inp(i,j,v)).join('')+'</tr>').join('')}</table></div>
<p class="hint">${L('সংখ্যা বা 1/2 এর মতো হিসাব লিখতে পারেন। SHIFT+'+(vct?'5':'4')+' চেপে মেনু থেকে বসান।|You can type numbers or things like 1/2. Press SHIFT+'+(vct?'5':'4')+' to insert from the menu.')}</p>`}
$('#wmat').addEventListener('input',e=>{const d=e.target.dataset;if(d.j!=null){const m=W.mt[W.mtab];if(W.mode=='vct')m.d[+d.j]=e.target.value;else m.d[+d.i][+d.j]=e.target.value;mtSave()}});
$('#wmat').addEventListener('change',e=>{const n=e.target.dataset.d;if(!n)return;const m=W.mt[W.mtab],v=+e.target.value;
 if(n=='n'){m.n=v;m.d=Array.from({length:v},(_,j)=>m.d[j]||'')}else{m[n]=v;m.d=Array.from({length:m.r},(_,i)=>Array.from({length:m.c},(_,j)=>(m.d[i]||[])[j]||''))}mtSave();mtR()});
$('#wmat').addEventListener('click',e=>{const t=e.target.closest('[data-t]');if(t){W.mtab=t.dataset.t;mtR()}});
const mdet=m=>{const n=m.length;if(n!=m[0].length)throw 'M';const a=m.map(r=>r.slice());let d=1;for(let i=0;i<n;i++){let p=i;for(let r=i+1;r<n;r++)if(Math.abs(a[r][i])>Math.abs(a[p][i]))p=r;if(Math.abs(a[p][i])<1e-14)return 0;if(p!=i){[a[p],a[i]]=[a[i],a[p]];d=-d}d*=a[i][i];for(let r=i+1;r<n;r++){const f=a[r][i]/a[i][i];for(let c=i;c<n;c++)a[r][c]-=f*a[i][c]}}return d};
const minv=m=>{const n=m.length;if(n!=m[0].length||Math.abs(mdet(m))<1e-12)throw 'M';const a=m.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>+(i==j))]);
 for(let i=0;i<n;i++){let p=i;for(let r=i+1;r<n;r++)if(Math.abs(a[r][i])>Math.abs(a[p][i]))p=r;[a[p],a[i]]=[a[i],a[p]];const d=a[i][i];a[i]=a[i].map(x=>x/d);for(let r=0;r<n;r++)if(r!=i){const f=a[r][i];a[r]=a[r].map((x,c)=>x-f*a[i][c])}}return a.map(r=>r.slice(n))};
const cellTxt=v=>{v=Math.abs(v)<1e-12?0:v;const f=W.frac?toFr(v):null;return f&&f[1]!=1?f[0]+'/'+f[1]:numText(v)};
function evm(s){let p=0;const pk=()=>s[p],S=()=>{throw 'S'},Mt=()=>{throw 'M'},D=W.deg=='D'?Math.PI/180:W.deg=='G'?Math.PI/200:1;
 const N=a=>typeof a=='number',isM=a=>a&&a.m,isV=a=>a&&a.v;
 const add=(a,b,g)=>{if(N(a)&&N(b))return a+g*b;if(isM(a)&&isM(b)&&a.m.length==b.m.length&&a.m[0].length==b.m[0].length)return{m:a.m.map((r,i)=>r.map((x,j)=>x+g*b.m[i][j]))};if(isV(a)&&isV(b)&&a.v.length==b.v.length)return{v:a.v.map((x,i)=>x+g*b.v[i])};Mt()};
 const sc=(a,k)=>isM(a)?{m:a.m.map(r=>r.map(x=>x*k))}:isV(a)?{v:a.v.map(x=>x*k)}:a*k;
 const mul=(a,b)=>{if(N(a))return sc(b,a);if(N(b))return sc(a,b);
  if(isM(a)&&isM(b)){if(a.m[0].length!=b.m.length)Mt();return{m:a.m.map(r=>b.m[0].map((_,j)=>r.reduce((t,x,k)=>t+x*b.m[k][j],0)))}}
  if(isV(a)&&isV(b)){const x=[...a.v,0].slice(0,3),y=[...b.v,0].slice(0,3);return{v:[x[1]*y[2]-x[2]*y[1],x[2]*y[0]-x[0]*y[2],x[0]*y[1]-x[1]*y[0]]}}Mt()};
 const dv=(a,b)=>{if(!N(b)||!b)Mt();return sc(a,1/b)};
 const pw=(a,b)=>{if(N(a)&&N(b)){const r=Math.pow(a,b);if(isNaN(r))Mt();return r}
  if(!isM(a)||!N(b)||!Number.isInteger(b))Mt();let r=b<0?{m:minv(a.m)}:a,n=Math.abs(b);if(n==0)return{m:a.m.map((r,i)=>r.map((_,j)=>+(i==j)))};if(b<0&&n==1)return r;let t=r;for(let i=1;i<n;i++)t=mul(t,r);return t};
 function E(){let v=T1();while(pk()=='+'||pk()=='-'){const o=s[p++],r=T1();v=add(v,r,o=='+'?1:-1)}return v}
 function T1(){let v=U();for(;;){const c=pk();if(c=='*'){p++;v=mul(v,U())}else if(c=='/'){p++;v=dv(v,U())}else if(c&&/[(a-zA-Z]/.test(c))v=mul(v,U());else return v}}
 function U(){const c=pk();if(c=='-'){p++;return sc(U(),-1)}if(c=='+'){p++;return U()}return Pw()}
 function Pw(){const b=A();if(pk()=='^'){p++;return pw(b,U())}return b}
 function A(){const c=pk();if(c=='('){p++;const v=E();if(pk()==')')p++;else if(p<s.length)S();return v}
  const m=/^(\d+\.?\d*|\.\d+)/.exec(s.slice(p));if(m){p+=m[0].length;return parseFloat(m[0])}
  const n=/^(MatAns|Mat[ABC]|VctAns|Vct[ABC]|det|Trn|Ident|Dot|UnitV|abs|sqrt|sin|cos|tan|ln|log|pi|ans|e)/.exec(s.slice(p));if(!n)S();const w=n[1];p+=w.length;
  const mat=k=>({m:W.mt[k].d.map(r=>r.map(cell))}),vec=k=>({v:W.mt['V'+k].d.map(cell)});
  if(w=='pi')return Math.PI;if(w=='e')return Math.E;if(w=='ans')return W.ansV||W.ans;if(w=='MatAns'||w=='VctAns')return W.ansV||Mt();
  if(/^Mat[ABC]$/.test(w))return mat(w[3]);if(/^Vct[ABC]$/.test(w))return vec(w[3]);
  if(pk()!='(')S();p++;const a=E();let b;if(pk()==','){p++;b=E()}if(pk()==')')p++;else if(p<s.length)S();
  switch(w){case'det':if(!isM(a))Mt();return mdet(a.m);case'Trn':if(!isM(a))Mt();return{m:a.m[0].map((_,j)=>a.m.map(r=>r[j]))};
   case'Ident':if(!N(a)||a<1||a>4||a%1)Mt();return{m:Array.from({length:a},(_,i)=>Array.from({length:a},(_,j)=>+(i==j)))};
   case'Dot':if(!isV(a)||!isV(b)||a.v.length!=b.v.length)Mt();return a.v.reduce((t,x,i)=>t+x*b.v[i],0);
   case'UnitV':{if(!isV(a))Mt();const l=Math.hypot(...a.v);if(!l)Mt();return sc(a,1/l)}
   case'abs':return N(a)?Math.abs(a):isV(a)?Math.hypot(...a.v):Mt()}
  if(!N(a))Mt();const r={sqrt:Math.sqrt,sin:x=>Math.sin(x*D),cos:x=>Math.cos(x*D),tan:x=>Math.tan(x*D),ln:Math.log,log:Math.log10}[w](a);if(isNaN(r)||!isFinite(r))Mt();return Math.abs(r)<1e-14?0:r}
 const v=E();if(p<s.length)S();
 if(N(v)){if(!isFinite(v))Mt();return{v,ex:1}}
 const rows=isM(v)?v.m:[v.v],txt='['+rows.map(r=>'['+r.map(cellTxt).join(',')+']').join('')+']';
 return{v:0,ex:0,mval:v,mx:1,txt,html:'<table class="mt">'+rows.map(r=>'<tr>'+(isV(v)?'<td>[</td>':'')+r.map(x=>'<td>'+cellTxt(x).replace(/-/g,'−')+'</td>').join('')+(isV(v)?'<td>]</td>':'')+'</tr>').join('')+'</table>'}}
/* মেনু ও কী */
TKS.push(...Object.keys(KV),'MatA','MatB','MatC','MatAns','VctA','VctB','VctC','VctAns','det(','Trn(','Ident(','Dot(','UnitV(','=');TKS.sort((a,b)=>b.length-a.length);
Object.assign(FN,{
 const(){constR()},conv(){convR()},
 solve(){if(!W.T.length||W.mode!='comp')return;W.calc={vs:['X'],i:0,buf:[],vals:{},solve:1}},
 matrix(){if(W.mode!='mat'){setMode('mat');return}wtm('MATRIX',[['MatA','MatA'],['MatB','MatB'],['MatC','MatC'],['MatAns','MatAns'],['det','det('],['Trn','Trn('],['Ident','Ident('],['Abs','Abs(']])},
 vector(){if(W.mode!='vct'){setMode('vct');return}wtm('VECTOR',[['VctA','VctA'],['VctB','VctB'],['VctC','VctC'],['VctAns','VctAns'],['Dot','Dot('],['Abs','Abs('],['UnitV','UnitV(']])},
 mode(){openMenu('MODE',[['COMP',()=>setMode('comp')],['CMPLX',()=>setMode('cmplx')],['STAT',()=>{setMode('stat');stType()}],['BASE-N',()=>setMode('base')],['MATRIX',()=>setMode('mat')],['VECTOR',()=>setMode('vct')]])}});

/* ইতিহাস */
function khR(){$('#kh').innerHTML=KH.map(([d,r],i)=>`<div class="kh" data-i="${i}"><span>${esc(dsp(tokenize(d)))}</span><b>= ${esc(r)}</b></div>`).join('')||`<p class="hint">${L('এখনো কোনো হিসাব নেই।|No calculations yet.')}</p>`}
$('#kh').onclick=e=>{const r=e.target.closest('.kh');if(r){W.on=1;loadH(+r.dataset.i);rend()}};
$('#khc').onclick=()=>{KH=[];sv('dcuKh2',KH);khR()};

/* ===== মোবাইল: ভাইব্রেশন, আটকে থাকা LCD, প্যানেল দেখানো ===== */
(function(){
 const wm=$('#wm');if(!wm)return;
 const narrow=()=>matchMedia('(max-width:560px)').matches;
 /* ভাইব্রেশন (যে ডিভাইসে সমর্থিত) */
 const hb=$('#whap');let hap=ld('dcuHap',true);
 if(!navigator.vibrate)hb.style.display='none';
 const hapR=()=>{hb.style.opacity=hap?1:.4;hb.setAttribute('aria-pressed',hap)};hapR();
 hb.onclick=()=>{hap=!hap;sv('dcuHap',hap);hapR();if(hap&&navigator.vibrate)navigator.vibrate(15)};
 wm.addEventListener('click',e=>{if(hap&&navigator.vibrate&&e.target.closest('.kb,[data-p]'))try{navigator.vibrate(8)}catch(_){}});
 /* কী-তে লং-প্রেসে মেনু/সিলেকশন বন্ধ */
 wm.addEventListener('contextmenu',e=>{if(e.target.closest('.kb,.kpad'))e.preventDefault()});
 /* সাইটের ফিক্সড/স্টিকি হেডারের নিচে LCD আটকানো */
 let raf=0;
 const stk=()=>{raf=0;let m=0;try{for(const el of document.elementsFromPoint(Math.round(innerWidth/2),2)){if(wm.contains(el))continue;for(let n=el;n&&n!==document.body&&n!==document.documentElement;n=n.parentElement){const p=getComputedStyle(n).position;if(p=='fixed'||p=='sticky'){m=Math.max(m,n.getBoundingClientRect().bottom);break}}}}catch(_){}
  const r=document.documentElement.style;r.setProperty('--stk',Math.round(m)+'px');r.setProperty('--lcdh',($('#wlcd').offsetHeight||130)+'px')};
 const qs=()=>{if(!raf)raf=requestAnimationFrame(stk)};
 addEventListener('scroll',qs,{passive:true});addEventListener('resize',qs);addEventListener('orientationchange',qs);addEventListener('load',qs);qs();
 /* STAT / MATRIX প্যানেল খুললে সেখানে স্ক্রল; CONST / CONV শিটের পেছনে ব্যাকড্রপ */
 const bk=document.createElement('div');bk.id='wbk';document.body.appendChild(bk);
 const shown=e=>e.style.display!='none';
 const wl=$('#wlist'),sync=()=>bk.classList.toggle('on',narrow()&&shown(wl));
 bk.onclick=()=>{wl.style.display='none';sync()};
 new MutationObserver(sync).observe(wl,{attributes:true,attributeFilter:['style']});
 ['#wstat','#wmat'].forEach(id=>{const el=$(id);let was=shown(el);
  new MutationObserver(()=>{const now=shown(el);if(now&&!was&&narrow())setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),60);was=now}).observe(el,{attributes:true,attributeFilter:['style']})});
})();
