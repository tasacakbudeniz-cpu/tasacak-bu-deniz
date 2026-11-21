// destek.js — Uygulamaya Destek: reklam izleyerek destekçi seviyesi, rozet, sıralama; Play bağlantılı paylaşım
const PLAY='https://play.google.com/store/apps/details?id=com.tasacakbudeniz.fan';
const SUPL=[[1,'🥉','Destekçi',30],[10,'🥈','Gümüş Destekçi',100],[30,'🥇','Altın Destekçi',300],[100,'💎','Elmas Destekçi',1000]];
SUPL.forEach((x,i)=>B.push(['sup'+i,x[1],x[2],x[0]+' reklam izleyerek uygulamaya destek ol',()=>0]));
regLB({id:'sup',name:'Destekçiler',emoji:'💛',c:'#d9a52b,#8a5a0a',sub:'İzlenen reklam',scale:100});
const supLv=()=>{let l=-1;SUPL.forEach((x,i)=>{if((S.sa||0)>=x[0])l=i});return l};
function shareApp(){S.sh++;let g='';if(S.shd!=T()){S.shd=T();S.c+=10;g=' · +10 🐟';}sv();const d={title:'Taşacak Bu Deniz',text:'Taşacak Bu Deniz hayran uygulaması: quiz, mini oyunlar, liderlik tablosu ve Teori Köşesi! 🌊',url:PLAY};try{navigator.share?navigator.share(d):(navigator.clipboard.writeText(d.text+' '+PLAY),toast('Bağlantı kopyalandı'+g));if(g)toast('Teşekkürler!'+g)}catch(e){toast('Paylaşılamadı')}}
function supCopy(){try{navigator.clipboard.writeText(PLAY);toast('Bağlantı kopyalandı 🔗')}catch(e){toast(PLAY)}}
function supAd(){if(S.spd!=T()){S.spd=T();S.spn=0}if(S.spn>=3)return toast('Bugünlük bu kadar, teşekkürler! Yarın yine bekleriz 💛');showRewardedAd(()=>{S.spn++;S.sa=(S.sa||0)+1;S.c+=20;let m='💛 Teşekkürler! +20 🐟';SUPL.forEach((x,i)=>{if(S.sa==x[0]){S.b['sup'+i]=1;S.c+=x[3];m='🎉 '+x[2]+' oldun! +'+(x[3]+20)+' 🐟'}});S.lb=S.lb||{};S.lb.sup=S.sa;sv();toast(m);go('sup')})}
function sup(){const l=supLv(),n=S.sa||0,nx=SUPL[l+1],left=(S.spd==T()?3-S.spn:3);return bk()+`<h2>💛 Uygulamaya Destek</h2><div class="c">Bu uygulama ücretsiz ve reklam geliriyle yaşıyor. Kısa bir reklam izleyerek destek olursun, karşılığında hamsi, rozet ve Destekçi unvanı kazanırsın.</div><div class="c"><div class="r"><b>${l>=0?SUPL[l][1]+' '+SUPL[l][2]:'Henüz destekçi değilsin'}</b><b>${n} reklam</b></div>${nx?`<div class="bar" style="margin:8px 0"><i style="width:${Math.min(100,n/nx[0]*100)}%"></i></div><div class="s">Sonraki: ${nx[1]} ${nx[2]} · ${nx[0]-n} reklam kaldı · ödül +${nx[3]} 🐟</div>`:'<div class="s">En üst seviyedesin, çok teşekkürler! 💎</div>'}</div><button class="b" onclick="supAd()">📺 Reklam izle · +20 🐟 (bugün ${left} hak)</button><button class="g" onclick="shareApp()">📤 Arkadaşlarına öner (günde 1 kez +10 🐟)</button><button class="g" onclick="supCopy()">🔗 Uygulama bağlantısını kopyala</button><button class="g" onclick="go('rate')">⭐ Puanla</button><div class="c s" style="margin-top:8px">Destekçiler sıralamada ana sayfada görünür. İsteğe bağlıdır, izlemek zorunda değilsin.</div>`}
SUBS.sup=sup;

// ---- Dalga Kuşu: hız ekran yenileme hızından bağımsız (120 Hz telefonlarda 2 kat hızlanmasın) ----
function flpS(){const cv=$('#fc');if(!cv)return;const x=cv.getContext('2d'),im=S.pic?Object.assign(new Image(),{src:S.pic}):0;let y=200,v=0,p=[],f=0,sc=0,st=0,dead=0,lt=0;
 const fl=()=>{if(dead){if(dead==2){dead=0;y=200;v=0;p=[];f=0;sc=0;st=0}return}st=1;v=-6.4;snd(700,.05)};
 cv.onpointerdown=e=>{e.preventDefault();fl()};
 const bird=()=>{x.save();x.beginPath();x.arc(80,y,16,0,7);x.clip();if(im&&im.complete&&im.naturalWidth)x.drawImage(im,64,y-16,32,32);else{x.fillStyle='#ffc94d';x.fillRect(64,y-16,32,32);x.font='24px serif';x.textAlign='center';x.fillText(AV[S.av]||'🐟',80,y+9)}x.restore();x.strokeStyle='#fff';x.lineWidth=2;x.beginPath();x.arc(80,y,16,0,7);x.stroke()};
 (function L(t){if(sub!='flp'||!$('#fc'))return;
  const k=lt?Math.min(3,(t-lt)/16.667):1;lt=t;
  const g=x.createLinearGradient(0,0,0,440);g.addColorStop(0,'#14466e');g.addColorStop(1,'#04101f');x.fillStyle=g;x.fillRect(0,0,320,440);
  if(st&&!dead){v+=.38*k;y+=v*k;f+=k;if(f>=95){f-=95;p.push({x:330,g:70+Math.random()*190,s:0})}
   p.forEach(o=>{o.x-=2.2*k;if(!o.s&&o.x<64){o.s=1;sc++;sOk()}});p=p.filter(o=>o.x>-60);
   if(y>424||y<16||p.some(o=>o.x<96&&o.x>26&&(y<o.g-62||y>o.g+62)))dead=1}
  p.forEach(o=>{x.fillStyle='#3b5a6e';x.fillRect(o.x,0,50,o.g-62);x.fillRect(o.x,o.g+62,50,440);x.fillStyle='#5f8aa3';x.fillRect(o.x-4,o.g-76,58,14);x.fillRect(o.x-4,o.g+62,58,14)});
  bird();x.fillStyle='#fff';x.font='bold 30px sans-serif';x.textAlign='center';x.fillText(sc,160,50);
  if(!st){x.font='16px sans-serif';x.fillText('Başlamak için dokun',160,330);x.fillText('En iyi: '+(S.fb||0),160,360)}
  if(dead==1){dead=2;const h=sc?gHam(sc*3):0;S.c+=h;if(sc>(S.fb||0))S.fb=sc;if(sc)lbPost('flp',sc,'max');S.m++;sv();sNo();toast('Skor '+sc+(h?' · +'+h+' 🐟':''))}
  if(dead==2){x.fillStyle='#000a';x.fillRect(40,150,240,120);x.fillStyle='#fff';x.font='bold 22px sans-serif';x.fillText('Oyun bitti: '+sc,160,195);x.font='15px sans-serif';x.fillText('Tekrar için dokun',160,235)}
  requestAnimationFrame(L)})(0)}

// ---- Oyunlara girişte ödüllü reklam (ilk tık ve her 60 sn'de bir) ----
window.__gt=0;
document.addEventListener('click',e=>{const el=e.target.closest&&e.target.closest('[onclick]');if(!el)return;const c=el.getAttribute('onclick')||'';if(!/^(nav\('play'\)|find\(\)|go\('(mem|flp|kim|kel|plat)'\))$/.test(c))return;if(Date.now()-window.__gt<60000)return;e.stopImmediatePropagation();e.preventDefault();showRewardedAd(()=>{window.__gt=Date.now();new Function(c)()})},true);
