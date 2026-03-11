/* ── LOADER ── */
document.body.classList.add('loading');
const loader = document.getElementById('loader');
let fontsReady = false, timeReady = false;

function hideLoader() {
  loader.classList.add('done');
  document.body.classList.remove('loading');
  triggerHeroEntrance();
}
function checkReady() { if (fontsReady && timeReady) hideLoader(); }
document.fonts.ready.then(() => { fontsReady = true; checkReady(); });
setTimeout(() => { timeReady = true; checkReady(); }, 1800);

/* ── HERO ENTRANCE ── */
function triggerHeroEntrance() {
  document.querySelectorAll('.ent').forEach(el => {
    void el.offsetWidth;
    el.classList.add('ent-up');
  });
}

/* ══ GROUP TABS ══ */
document.querySelectorAll('.grp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const group = tab.dataset.group;
    document.querySelectorAll('.grp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.grp-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('grp-' + group);
    if (panel) {
      panel.classList.add('active');
      if (group === 'sosmed') startSosmedAnim();
      if (group === 'ecommerce') startEcAnim();
      if (group === 'website') startWebAnim();
    }
  });
});

/* ══ SOSMED ANIMATIONS ══ */
const sosmedScripts = {
  sw: [300, 900, {t:1500}, {h:2400}, 3200, 4000],
  sf: [300, {b:800}, 1400, {t:2000}, {h:2900}],
  st: [300, {b:900}, 1500, {t:2100}, {h:3000}],
  sd: [200, 800, 1500, 2300]
};

function runPlatCard(pid, scriptKey) {
  const card = document.querySelector('.plat-card[data-pid="' + pid + '"]');
  if (!card) return;
  const msgs   = Array.from(card.querySelectorAll('.pc-msg'));
  const typing = card.querySelector('.pc-typing');
  const fbbtns = card.querySelectorAll('.pc-fbbtn');
  const tgbtns = card.querySelectorAll('.pc-tgbtn');

  msgs.forEach(m => { m.classList.remove('visible'); m.classList.add('hidden'); });
  if (typing) typing.classList.remove('show','visible');
  fbbtns.forEach(b => b.classList.remove('visible'));
  tgbtns.forEach(b => b.classList.remove('visible'));

  if (msgs[0]) { msgs[0].classList.remove('hidden'); setTimeout(() => msgs[0].classList.add('visible'), 50 + Math.random()*200); }

  let bi = 1;
  (sosmedScripts[scriptKey] || []).forEach(step => {
    if (typeof step === 'number') {
      const idx = bi++;
      setTimeout(() => {
        if (!msgs[idx]) return;
        msgs[idx].classList.remove('hidden');
        setTimeout(() => msgs[idx].classList.add('visible'), 40);
      }, step);
    } else if (step.t && typing) {
      setTimeout(() => { typing.classList.add('show'); setTimeout(() => typing.classList.add('visible'), 30); }, step.t);
    } else if (step.h && typing) {
      setTimeout(() => {
        typing.classList.remove('visible');
        setTimeout(() => typing.classList.remove('show'), 280);
        const idx = bi++;
        if (msgs[idx]) { msgs[idx].classList.remove('hidden'); setTimeout(() => msgs[idx].classList.add('visible'), 320); }
      }, step.h);
    } else if (step.b) {
      setTimeout(() => {
        fbbtns.forEach((b, i) => setTimeout(() => b.classList.add('visible'), i * 120));
        tgbtns.forEach((b, i) => setTimeout(() => b.classList.add('visible'), i * 100));
      }, step.b);
    }
  });
}

let sosmedTimer = null;
function startSosmedAnim() {
  if (sosmedTimer) clearTimeout(sosmedTimer);
  ['sw','sf','st','sd'].forEach((pid, i) => setTimeout(() => runPlatCard(pid, pid), i * 300));
  sosmedTimer = setTimeout(startSosmedAnim, 9000);
}

/* ══ E-COMMERCE CHAT ANIMATIONS ══ */
let ecTimer = null;

function runEcCard(ecid) {
  const card = document.querySelector('.ec-card[data-ecid="' + ecid + '"]');
  if (!card) return;

  const msgs   = Array.from(card.querySelectorAll('.ec-msg'));
  const typings = Array.from(card.querySelectorAll('.ec-typing'));

  // reset
  msgs.forEach(m => { m.classList.remove('visible'); m.classList.add('hidden'); });
  typings.forEach(t => t.classList.remove('show'));

  // script: buyer msg → typing → seller reply → buyer msg → typing → seller reply
  const steps = [
    { type: 'msg', idx: 0, delay: 200 },
    { type: 'typing', idx: 0, delay: 700 },
    { type: 'hidetyping', idx: 0, showmsg: 1, delay: 1600 },
    { type: 'msg', idx: 2, delay: 2400 },
    { type: 'typing', idx: 1, delay: 2900 },
    { type: 'hidetyping', idx: 1, showmsg: 3, delay: 3800 },
  ];

  steps.forEach(step => {
    setTimeout(() => {
      if (step.type === 'msg') {
        if (!msgs[step.idx]) return;
        msgs[step.idx].classList.remove('hidden');
        setTimeout(() => msgs[step.idx].classList.add('visible'), 40);
      } else if (step.type === 'typing') {
        if (typings[step.idx]) typings[step.idx].classList.add('show');
      } else if (step.type === 'hidetyping') {
        if (typings[step.idx]) typings[step.idx].classList.remove('show');
        if (msgs[step.showmsg]) {
          msgs[step.showmsg].classList.remove('hidden');
          setTimeout(() => msgs[step.showmsg].classList.add('visible'), 40);
        }
      }
    }, step.delay);
  });
}

function startEcAnim() {
  if (ecTimer) clearTimeout(ecTimer);
  const ids = ['shopee','tokped','lazada','blibli','bukalapak','jd'];
  ids.forEach((id, i) => setTimeout(() => runEcCard(id), i * 400));
  ecTimer = setTimeout(startEcAnim, 9000);
}

/* ══ WEBSITE ANIMATION ══ */
const webScript = [400, 1200, {t:2000}, {h:3000}, 3800, {t:4600}, {h:5500}];
let webTimer = null;

function startWebAnim() {
  if (webTimer) clearTimeout(webTimer);
  const msgs   = Array.from(document.querySelectorAll('.wcw-msg'));
  const typing = document.querySelector('.wcw-typing');
  if (!msgs.length) return;

  msgs.forEach(m => { m.classList.remove('visible'); m.classList.add('hidden'); });
  if (typing) typing.classList.remove('show');

  if (msgs[0]) { msgs[0].classList.remove('hidden'); setTimeout(() => msgs[0].classList.add('visible'), 50); }

  let bi = 1;
  webScript.forEach(step => {
    if (typeof step === 'number') {
      const idx = bi++;
      setTimeout(() => {
        if (!msgs[idx]) return;
        msgs[idx].classList.remove('hidden');
        setTimeout(() => msgs[idx].classList.add('visible'), 40);
      }, step);
    } else if (step.t && typing) {
      setTimeout(() => typing.classList.add('show'), step.t);
    } else if (step.h && typing) {
      setTimeout(() => {
        typing.classList.remove('show');
        const idx = bi++;
        if (msgs[idx]) { msgs[idx].classList.remove('hidden'); setTimeout(() => msgs[idx].classList.add('visible'), 320); }
      }, step.h);
    }
  });
  webTimer = setTimeout(startWebAnim, 8000);
}

/* ══ START ANIM WHEN SECTION VISIBLE ══ */
const showcaseSec = document.getElementById('platform-showcase');
if (showcaseSec) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      startSosmedAnim();
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 }).observe(showcaseSec);
}

/* ══ SCROLL REVEAL ══ */
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.svc-card,.pain-card,.platform-card,.price-card,.step-card,.why-item,.plat-card,.ec-card,.wf-item').forEach((c, i) => {
        c.style.cssText = 'opacity:0;transform:translateY(24px);transition:opacity .5s ' + (i*.07) + 's ease,transform .5s ' + (i*.07) + 's ease';
        setTimeout(() => { c.style.opacity='1'; c.style.transform='translateY(0)'; }, 60 + i*70);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.06 }).observe(el);
});

/* ── FAQ ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

/* ── NAV ── */
const navEl = document.querySelector('nav');
const secs  = document.querySelectorAll('section[id]');
const lks   = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  navEl.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,.07)' : 'none';
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  lks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : ''; });
}, { passive: true });

