// ═══════════════════════════════════════════════════════════════
// GameOps Planner — APP LOGIC
// ═══════════════════════════════════════════════════════════════

let currentPhase = 'cbt';
let currentRole = 'all';
let projectData = null;
let currentProjectType = 'poe2';

// ─── Tag selectors ───
document.querySelectorAll('.tag-selector:not(.single) .tag-btn').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('selected'));
});
document.querySelectorAll('.tag-selector.single .tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.tag-selector').querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// ─── Load PoE2 Preset ───
function loadPoe2Preset() {
  document.getElementById('projectName').value = 'Path of Exile 2';
  document.querySelectorAll('#genreSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='ARPG') b.classList.add('selected'); });
  document.querySelectorAll('#artSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='暗黑写实') b.classList.add('selected'); });
  document.querySelectorAll('#marketSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='全球') b.classList.add('selected'); });
  document.querySelectorAll('#phaseSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='ea') b.classList.add('selected'); });
  currentProjectType = 'poe2';
  generatePlan();
}

// ─── Load Rust Preset ───
function loadRustPreset() {
  document.getElementById('projectName').value = 'RUST / RUST Mobile';
  document.querySelectorAll('#genreSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='生存建造') b.classList.add('selected'); });
  document.querySelectorAll('#artSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='次世代写实') b.classList.add('selected'); });
  document.querySelectorAll('#marketSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='全球') b.classList.add('selected'); });
  document.querySelectorAll('#phaseSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='global') b.classList.add('selected'); });
  currentProjectType = 'rust';
  generatePlan();
}

// ─── Load Hunt Preset ───
function loadHuntPreset() {
  document.getElementById('projectName').value = 'Hunt: Showdown 1896';
  document.querySelectorAll('#genreSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='FPS/TPS') b.classList.add('selected'); });
  document.querySelectorAll('#artSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='暗黑写实') b.classList.add('selected'); });
  document.querySelectorAll('#marketSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='全球') b.classList.add('selected'); });
  document.querySelectorAll('#phaseSelector .tag-btn').forEach(b => { b.classList.remove('selected'); if(b.dataset.value==='global') b.classList.add('selected'); });
  currentProjectType = 'hunt';
  generatePlan();
}

// ─── Live Clock ───
function updateClock() {
  const el = document.getElementById('liveClock');
  if (el) el.textContent = new Date().toLocaleTimeString('zh-CN', { hour12:false });
}
setInterval(updateClock, 1000);
updateClock();

// ─── Generate Plan ───
function generatePlan() {
  const name = document.getElementById('projectName').value || '未命名项目';
  const sourceData = currentProjectType === 'rust' ? RUST_DATA : (currentProjectType === 'hunt' ? HUNT_DATA : POE2_DATA);
  projectData = JSON.parse(JSON.stringify(sourceData));
  projectData.name = name;
  projectData._type = currentProjectType;

  document.getElementById('projTitle').textContent = name;
  const tagsEl = document.getElementById('projTags');
  tagsEl.innerHTML = projectData.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  document.querySelector('.project-avatar').textContent = currentProjectType === 'rust' ? '🏗️' : (currentProjectType === 'hunt' ? '🤠' : '⚔️');

  document.getElementById('setupScreen').classList.remove('active');
  document.getElementById('dashboardScreen').classList.add('active');

  // Steam dashboard — all projects
  const steamEl = document.getElementById('steamDashboard');
  if (steamEl) {
    const steamData = currentProjectType === 'rust' ? (typeof RUST_STEAM!=='undefined'?RUST_STEAM:null) :
                      currentProjectType === 'hunt' ? (typeof HUNT_STEAM!=='undefined'?HUNT_STEAM:null) :
                      (typeof POE2_STEAM!=='undefined'?POE2_STEAM:null);
    if (steamData) {
      steamEl.style.display = 'block';
      renderSteamDashboard(steamData);
    } else {
      steamEl.style.display = 'none';
    }
  }

  renderGantt();
  switchPhase('cbt');
}

function showSetup() {
  document.getElementById('dashboardScreen').classList.remove('active');
  document.getElementById('setupScreen').classList.add('active');
}

// ─── Gantt Chart ───
function renderGantt() {
  const phasesEl = document.getElementById('ganttPhases');
  const phases = [
    { id:'cbt', label:'CBT', duration:'6-8w', flex:0.8 },
    { id:'ea', label:'EA', duration:'3-6m', flex:1.2 },
    { id:'soft', label:'Soft Launch', duration:'2-4m', flex:1.0 },
    { id:'global', label:'Global Launch', duration:'持续', flex:1.5 }
  ];
  phasesEl.innerHTML = phases.map(p =>
    `<div class="gantt-phase-bar" data-phase="${p.id}" style="flex:${p.flex}" onclick="switchPhase('${p.id}')">
      <span class="phase-label">${p.label}</span>
      <span class="phase-duration">${p.duration}</span>
    </div>`
  ).join('');

  const rowsEl = document.getElementById('ganttRows');
  const colors = { cbt:'var(--phase-cbt)', ea:'var(--phase-ea)', soft:'var(--phase-soft)', global:'var(--phase-global)' };
  rowsEl.innerHTML = GANTT_MILESTONES.map(m =>
    `<div class="gantt-row">
      <div class="gantt-row-label">${m.label}</div>
      <div class="gantt-row-track">
        <div class="segment" style="left:${m.start}%;width:${m.end - m.start}%;background:${colors[m.phase]}" onclick="switchPhase('${m.phase}')" title="${m.label}"></div>
      </div>
    </div>`
  ).join('');
}

// ─── Phase switching ───
function switchPhase(phase) {
  currentPhase = phase;
  document.querySelectorAll('.phase-tab').forEach(t => t.classList.toggle('active', t.dataset.phase === phase));
  renderPhaseCards();
}

function renderPhaseCards() {
  const container = document.getElementById('phaseContents');
  if (!projectData) return;
  const phaseData = projectData.phases[currentPhase];
  if (!phaseData) return;

  let cards = phaseData.cards;
  if (currentRole !== 'all') {
    const roleMap = { community:'community', ua:'ua', visual:'visual' };
    cards = cards.filter(c => c.role[roleMap[currentRole]]);
  }

  const priorityLabel = { high:'🔴 高', mid:'🟡 中', low:'🟢 低' };
  const priorityClass = { high:'priority-high', mid:'priority-mid', low:'priority-low' };
  const typeLabel = { event:'活动/Event', campaign:'Campaign', tvc:'TVC/视频', kv:'KV/主视觉', ua:'UA素材', aigc:'AIGC' };

  container.innerHTML = `
    <div class="phase-header" style="margin-bottom:16px;">
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:4px;">${phaseData.title}</h3>
      <p style="font-size:0.85rem;color:var(--text-secondary);">📌 ${phaseData.objective} &nbsp;|&nbsp; ⏱ ${phaseData.duration}</p>
    </div>
    <div class="ops-grid">
      ${cards.map(c => `
        <div class="ops-card" data-type="${c.type}" onclick="openRefPanel('${currentPhase}','${c.type}','${c.title}')">
          <div class="ops-card-header">
            <span class="ops-card-type">${typeLabel[c.type] || c.type}</span>
            <span class="ops-card-priority ${priorityClass[c.priority]}">${priorityLabel[c.priority]}</span>
          </div>
          <h4>${c.title}</h4>
          <p>${c.desc}</p>
          <div class="ops-card-tags">${c.tags.map(t => `<span class="ops-card-tag">${t}</span>`).join('')}</div>
          <div class="ops-card-footer">
            <span class="timing">🕐 ${c.timing}</span>
            <span class="ref-count" onclick="event.stopPropagation();openRefPanel('${currentPhase}','${c.type}','${c.title}')">📎 ${c.refCount} 参考案例 →</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ─── Role switching ───
function switchRole(role) {
  currentRole = role;
  document.querySelectorAll('#roleSwitcher button').forEach(b => b.classList.toggle('active', b.dataset.role === role));
  // Toggle highlights
  ['All','Community','Ua','Visual'].forEach(r => {
    const el = document.getElementById('highlight' + r);
    if (el) el.classList.toggle('active', role === r.toLowerCase() || (role === 'all' && r === 'All'));
  });
  renderPhaseCards();
}

// ─── Reference Panel ───
function openRefPanel(phase, type, cardTitle) {
  const panel = document.getElementById('refPanel');
  const overlay = document.getElementById('refOverlay');
  document.getElementById('refPanelTitle').textContent = `📚 参考案例 — ${cardTitle || phase.toUpperCase()}`;

  const refs = (currentProjectType === 'rust' ? RUST_REFERENCES : (currentProjectType === 'hunt' ? HUNT_REFERENCES : REFERENCES))[phase] || [];
  const aigc = (currentProjectType === 'rust' ? RUST_AIGC_PROMPTS : (currentProjectType === 'hunt' ? HUNT_AIGC_PROMPTS : AIGC_PROMPTS))[phase] || [];

  // Filter bar
  const types = [...new Set(refs.map(r => r.type))];
  document.getElementById('refFilterBar').innerHTML = `<button class="ref-filter-btn active" onclick="filterRefs(this,'all')">全部</button>` +
    types.map(t => `<button class="ref-filter-btn" onclick="filterRefs(this,'${t}')">${t}</button>`).join('');

  // Refs content — real thumbnails + external links
  let html = refs.map(r => `
    <div class="ref-item" data-rtype="${r.type}">
      <a href="${r.url || '#'}" target="_blank" rel="noopener" class="ref-item-thumb" style="text-decoration:none">
        ${r.thumb && r.thumb.startsWith('http')
          ? `<img src="${r.thumb}" alt="${r.title}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-sm);" onerror="this.style.display='none';this.parentElement.innerHTML+='🎮'">`
          : r.thumb || '🎮'}
        <span class="ref-item-badge">${r.type}</span>
      </a>
      <h5><a href="${r.url || '#'}" target="_blank" rel="noopener" style="color:var(--text-primary);text-decoration:none;">${r.title}</a></h5>
      <p class="ref-desc">${r.desc}</p>
      ${r.source ? `<div style="font-size:0.68rem;color:var(--accent-gold);margin-bottom:6px;">📰 来源: ${r.source}</div>` : ''}
      <div class="ref-tags">${r.tags.map(t => `<span class="ref-tag">${t}</span>`).join('')}</div>
      <div class="data-insight">
        <h6>📊 参考数据指标</h6>
        ${Object.entries(r.metrics).map(([k,v]) => `<div class="metric-row"><span>${k}</span><span class="val">${v}</span></div>`).join('')}
      </div>
      ${r.url ? `<a href="${r.url}" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;padding:4px 10px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:var(--radius-sm);font-size:0.72rem;color:var(--accent-blue);text-decoration:none;">🔗 查看原文 →</a>` : ''}
      <button class="collect-star-btn ${collection.some(c=>c.title===r.title)?'collected':''}" onclick="event.stopPropagation();collectRef('${r.title.replace(/'/g,"\\'")}','${(r.thumb||'').replace(/'/g,"\\'")}','${(r.url||'').replace(/'/g,"\\'")}','${(r.desc||'').slice(0,200).replace(/'/g,"\\'")}','${(r.tags||[]).join(',')}','${(r.source||'').replace(/'/g,"\\'")}',this)">
        ${collection.some(c=>c.title===r.title)?'✅ 已收藏':'⭐ 收藏'}
      </button>
    </div>
  `).join('');

  // AIGC section
  if (aigc.length > 0) {
    html += `<div class="aigc-section">
      <h5>🤖 AIGC灵感库 — 成熟Prompt参考</h5>
      ${aigc.map(a => `
        <div style="margin-bottom:12px;">
          <div style="font-size:0.82rem;font-weight:600;margin-bottom:4px;">${a.title} <span style="font-size:0.7rem;color:var(--text-muted);font-weight:400;">| ${a.tool}</span></div>
          <div class="aigc-prompt-card">
            <span class="copy-btn" onclick="copyPrompt(this,'${a.prompt.replace(/'/g,"\\'")}')">📋 复制</span>
            ${a.prompt}
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  document.getElementById('refContent').innerHTML = html;
  // Append update date
  document.getElementById('refContent').innerHTML += '<div style="margin-top:20px;padding:10px;text-align:center;font-size:0.68rem;color:var(--text-muted);border-top:1px solid var(--border-primary);">📅 参考案例库最后更新: 2026年4月14日 · 数据来源: YouTube / IGN / SteamCharts / TwitchTracker / GameDeveloper</div>';
  panel.classList.add('open');
  overlay.classList.add('open');
}

function closeRefPanel() {
  document.getElementById('refPanel').classList.remove('open');
  document.getElementById('refOverlay').classList.remove('open');
}

function filterRefs(btn, type) {
  btn.closest('.ref-filter-bar').querySelectorAll('.ref-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.ref-item').forEach(item => {
    item.style.display = (type === 'all' || item.dataset.rtype === type) ? '' : 'none';
  });
}

function copyPrompt(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ 已复制';
    setTimeout(() => btn.textContent = '📋 复制', 1500);
  });
}

// ─── Nav switching ───
function switchNav(nav) {
  document.querySelectorAll('#navLinks button').forEach(b => b.classList.toggle('active', b.dataset.nav === nav));
  if (nav === 'references' && projectData) {
    openRefPanel(currentPhase, 'all', projectData.phases[currentPhase]?.title);
  }
  if (nav === 'timeline') {
    document.getElementById('ganttSection').scrollIntoView({ behavior:'smooth' });
  }
}

// ─── Export ───
function openExportModal() { document.getElementById('exportModal').classList.add('open'); }
function closeExportModal() { document.getElementById('exportModal').classList.remove('open'); }

function exportAs(format) {
  if (!projectData) { alert('请先生成规划'); return; }
  closeExportModal();

  if (format === 'csv') {
    let csv = 'Phase,Type,Title,Priority,Timing,Tags\n';
    Object.entries(projectData.phases).forEach(([phase, data]) => {
      data.cards.forEach(c => {
        csv += `"${data.title}","${c.type}","${c.title}","${c.priority}","${c.timing}","${c.tags.join('; ')}"\n`;
      });
    });
    downloadFile(csv, `${projectData.name}_运营排期表.csv`, 'text/csv;charset=utf-8');
  }
  else if (format === 'json') {
    downloadFile(JSON.stringify(projectData, null, 2), `${projectData.name}_规划数据.json`, 'application/json');
  }
  else if (format === 'markdown') {
    let md = `# ${projectData.name} — 全生命周期运营规划\n\n`;
    md += `**品类标签:** ${projectData.tags.join(' | ')}\n\n---\n\n`;
    Object.entries(projectData.phases).forEach(([phase, data]) => {
      md += `## ${data.title}\n\n**周期:** ${data.duration} | **目标:** ${data.objective}\n\n`;
      md += `| 类型 | 动作 | 优先级 | 排期 |\n|---|---|---|---|\n`;
      data.cards.forEach(c => {
        md += `| ${c.type} | **${c.title}** — ${c.desc.slice(0,60)}... | ${c.priority} | ${c.timing} |\n`;
      });
      md += '\n';
    });
    downloadFile(md, `${projectData.name}_运营规划.md`, 'text/markdown;charset=utf-8');
  }
  else if (format === 'brief') {
    let brief = `# 📋 执行Brief — ${projectData.name}\n\n`;
    brief += `**生成日期:** ${new Date().toLocaleDateString('zh-CN')}\n**品类:** ${projectData.tags.join(' | ')}\n\n---\n\n`;
    const phaseData = projectData.phases[currentPhase];
    brief += `## 当前阶段: ${phaseData.title}\n\n**目标:** ${phaseData.objective}\n\n`;
    phaseData.cards.forEach((c, i) => {
      brief += `### ${i+1}. ${c.title}\n- **类型:** ${c.type}\n- **优先级:** ${c.priority}\n- **排期:** ${c.timing}\n- **描述:** ${c.desc}\n- **标签:** ${c.tags.join(', ')}\n\n`;
    });
    downloadFile(brief, `${projectData.name}_执行Brief_${phaseData.title}.md`, 'text/markdown;charset=utf-8');
  }
}

function downloadFile(content, filename, mime) {
  const blob = new Blob(['\ufeff' + content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ═══════════════════════════════════════════════════════════════
// COLLECTION — 素材收藏夹
// ═══════════════════════════════════════════════════════════════

const COLLECT_CATS = {
  tvc:'🎬 TVC/预告', kol:'🎤 KOL活动', event:'🎪 Event活动',
  pr:'📰 PR/媒体', collab:'🤝 品牌联名', ua:'📈 UA素材',
  kv:'🖼️ KV主视觉', other:'📦 其他'
};

let collection = JSON.parse(localStorage.getItem('gameops_collection') || '[]');
let pendingCollectRef = null;
let currentCollectFilter = 'all';

function saveCollection() {
  localStorage.setItem('gameops_collection', JSON.stringify(collection));
  updateCollectBadge();
}

function updateCollectBadge() {
  const badge = document.getElementById('collectBadge');
  if (badge) badge.textContent = collection.length > 0 ? collection.length : '';
}
updateCollectBadge();

// ─── Collect from ref panel ───
function collectRef(refTitle, refThumb, refUrl, refDesc, refTags, refSource, btn) {
  pendingCollectRef = { title:refTitle, thumb:refThumb, url:refUrl, desc:refDesc, tags:refTags, source:refSource };
  // Show category picker near the button
  const picker = document.getElementById('collectCatPicker');
  const rect = btn.getBoundingClientRect();
  picker.style.display = 'block';
  picker.style.position = 'fixed';
  picker.style.top = (rect.bottom + 4) + 'px';
  picker.style.left = Math.min(rect.left, window.innerWidth - 240) + 'px';
  picker.style.zIndex = '999';
  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', closeCatPickerOutside, { once:true });
  }, 50);
}

function closeCatPickerOutside(e) {
  const picker = document.getElementById('collectCatPicker');
  if (!picker.contains(e.target)) picker.style.display = 'none';
}

function confirmCollect(cat) {
  if (!pendingCollectRef) return;
  const item = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    category: cat,
    title: pendingCollectRef.title,
    thumb: pendingCollectRef.thumb || '',
    url: pendingCollectRef.url || '',
    desc: pendingCollectRef.desc || '',
    tags: pendingCollectRef.tags || '',
    source: pendingCollectRef.source || '',
    note: '',
    addedAt: new Date().toISOString()
  };
  collection.push(item);
  saveCollection();
  pendingCollectRef = null;
  document.getElementById('collectCatPicker').style.display = 'none';
  // Flash feedback
  showToast(`⭐ 已收藏到「${COLLECT_CATS[cat]}」`);
}

function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);padding:10px 24px;background:var(--accent-gold);color:#000;font-weight:600;font-size:0.85rem;border-radius:var(--radius-md);z-index:9999;opacity:0;transition:opacity 0.3s;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2000);
}

// ─── Add custom material ───
function openAddMaterialModal() {
  document.getElementById('addMaterialModal').classList.add('open');
  // Clear fields
  ['matTitle','matUrl','matThumb','matDesc','matTags'].forEach(id => document.getElementById(id).value = '');
  document.querySelectorAll('#matCatSelector .tag-btn').forEach(b => b.classList.remove('selected'));
}
function closeAddMaterialModal() {
  document.getElementById('addMaterialModal').classList.remove('open');
}
function selectMatCat(btn) {
  btn.closest('.tag-selector').querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function addCustomMaterial() {
  const title = document.getElementById('matTitle').value.trim();
  const catBtn = document.querySelector('#matCatSelector .tag-btn.selected');
  if (!title) { alert('请填写素材标题'); return; }
  if (!catBtn) { alert('请选择素材分类'); return; }

  const item = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    category: catBtn.dataset.value,
    title: title,
    thumb: document.getElementById('matThumb').value.trim(),
    url: document.getElementById('matUrl').value.trim(),
    desc: document.getElementById('matDesc').value.trim(),
    tags: document.getElementById('matTags').value.trim(),
    source: 'Manual',
    note: '',
    addedAt: new Date().toISOString()
  };
  collection.push(item);
  saveCollection();
  closeAddMaterialModal();
  showToast(`⭐ 已添加「${title}」到收藏夹`);
  if (document.getElementById('collectionScreen').classList.contains('active')) renderCollection();
}

// ─── Collection page rendering ───
function renderCollection() {
  const grid = document.getElementById('collectGrid');
  const empty = document.getElementById('collectEmpty');
  let items = collection;
  if (currentCollectFilter !== 'all') items = items.filter(i => i.category === currentCollectFilter);

  // Update counts
  const counts = {};
  collection.forEach(i => { counts[i.category] = (counts[i.category] || 0) + 1; });
  document.getElementById('catCountAll').textContent = collection.length;
  Object.keys(COLLECT_CATS).forEach(c => {
    const el = document.getElementById('catCount' + c.charAt(0).toUpperCase() + c.slice(1));
    if (el) el.textContent = counts[c] || 0;
  });

  if (items.length === 0) {
    empty.style.display = 'flex';
    grid.innerHTML = '';
    grid.appendChild(empty);
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = items.map(item => `
    <div class="collect-card" data-id="${item.id}">
      ${item.thumb ? `<div class="collect-card-thumb">
        <img src="${item.thumb}" alt="${item.title}" onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:2rem;\\'>${COLLECT_CATS[item.category]?.charAt(0) || '📂'}</div>'">
        <span class="collect-card-cat">${COLLECT_CATS[item.category] || item.category}</span>
      </div>` : `<div class="collect-card-thumb" style="display:flex;align-items:center;justify-content:center;font-size:2.5rem;">
        ${COLLECT_CATS[item.category]?.split(' ')[0] || '📂'}
        <span class="collect-card-cat">${COLLECT_CATS[item.category] || item.category}</span>
      </div>`}
      <div class="collect-card-body">
        <h4>${item.url ? `<a href="${item.url}" target="_blank" rel="noopener" style="color:var(--text-primary);text-decoration:none;">${item.title}</a>` : item.title}</h4>
        ${item.desc ? `<p class="collect-card-desc">${item.desc}</p>` : ''}
        ${item.tags ? `<div class="collect-card-tags">${item.tags.split(',').map(t => `<span class="ops-card-tag">${t.trim()}</span>`).join('')}</div>` : ''}
        ${item.source && item.source !== 'Manual' ? `<div style="font-size:0.68rem;color:var(--accent-gold);margin-top:4px;">📰 ${item.source}</div>` : ''}
        <div class="collect-card-note">
          <textarea placeholder="添加备注..." rows="2" onchange="updateNote('${item.id}',this.value)">${item.note || ''}</textarea>
        </div>
        <div class="collect-card-actions">
          <span style="font-size:0.68rem;color:var(--text-muted);">${new Date(item.addedAt).toLocaleDateString('zh-CN')}</span>
          <div style="display:flex;gap:6px;">
            ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener" class="collect-action-btn">🔗 打开</a>` : ''}
            <button class="collect-action-btn danger" onclick="removeCollectItem('${item.id}')">🗑️</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCollection(cat) {
  currentCollectFilter = cat;
  document.querySelectorAll('.collect-cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  renderCollection();
}

function updateNote(id, note) {
  const item = collection.find(i => i.id === id);
  if (item) { item.note = note; saveCollection(); }
}

function removeCollectItem(id) {
  collection = collection.filter(i => i.id !== id);
  saveCollection();
  renderCollection();
  showToast('🗑️ 已移除');
}

function clearCollection() {
  if (!confirm('确定清空所有收藏？此操作不可撤销。')) return;
  collection = [];
  saveCollection();
  renderCollection();
}

function exportCollection() {
  if (collection.length === 0) { alert('收藏夹是空的'); return; }
  let md = `# 📂 发行素材收藏夹\n\n**导出时间:** ${new Date().toLocaleString('zh-CN')}\n**总计:** ${collection.length} 条素材\n\n---\n\n`;
  const grouped = {};
  collection.forEach(i => { if (!grouped[i.category]) grouped[i.category] = []; grouped[i.category].push(i); });
  Object.entries(grouped).forEach(([cat, items]) => {
    md += `## ${COLLECT_CATS[cat] || cat}\n\n`;
    items.forEach((item, idx) => {
      md += `### ${idx+1}. ${item.title}\n`;
      if (item.url) md += `- **链接:** ${item.url}\n`;
      if (item.desc) md += `- **描述:** ${item.desc}\n`;
      if (item.tags) md += `- **标签:** ${item.tags}\n`;
      if (item.source) md += `- **来源:** ${item.source}\n`;
      if (item.note) md += `- **备注:** ${item.note}\n`;
      md += `- **收藏日期:** ${new Date(item.addedAt).toLocaleDateString('zh-CN')}\n\n`;
    });
  });
  downloadFile(md, '发行素材收藏夹.md', 'text/markdown;charset=utf-8');
}

// ─── Patch switchNav for collection ───
const _origSwitchNav = switchNav;
switchNav = function(nav) {
  // Hide/show screens
  document.getElementById('collectionScreen')?.classList.remove('active');
  document.getElementById('dashboardScreen')?.classList.remove('active');
  document.getElementById('setupScreen')?.classList.remove('active');
  document.getElementById('analysisScreen')?.classList.remove('active');

  document.querySelectorAll('#navLinks button').forEach(b => b.classList.toggle('active', b.dataset.nav === nav));

  if (nav === 'analysis') {
    if (!projectData) { document.getElementById('setupScreen').classList.add('active'); return; }
    document.getElementById('analysisScreen').classList.add('active');
    renderAnalysis();
    return;
  }
  if (nav === 'collection') {
    if (!projectData) { document.getElementById('setupScreen').classList.add('active'); return; }
    document.getElementById('collectionScreen').classList.add('active');
    renderCollection();
    return;
  }
  if (nav === 'references' && projectData) {
    document.getElementById('dashboardScreen').classList.add('active');
    openRefPanel(currentPhase, 'all', projectData.phases[currentPhase]?.title);
    return;
  }
  if (nav === 'timeline' && projectData) {
    document.getElementById('dashboardScreen').classList.add('active');
    document.getElementById('ganttSection').scrollIntoView({ behavior:'smooth' });
    return;
  }
  if (nav === 'dashboard') {
    if (projectData) document.getElementById('dashboardScreen').classList.add('active');
    else document.getElementById('setupScreen').classList.add('active');
  }
};

// ═══════════════════════════════════════════════════════════════
// ANALYSIS — 游戏分析页面
// ═══════════════════════════════════════════════════════════════

let currentCompetitor = 0;

function renderAnalysis() {
  const ad = currentProjectType === 'rust' ? RUST_ANALYSIS : (currentProjectType === 'hunt' ? HUNT_ANALYSIS : GAME_ANALYSIS);
  if (!ad) return;
  currentCompetitor = 0;
  currentRegion = 0;
  renderCoreFeatures(ad);
  renderCompetitors(ad);
  renderStrategies(ad);
  renderDiffPositioning();
  renderRegionalStrategy();
  renderAudienceSegmentation();
}

function renderCoreFeatures(ad) {
  const grid = document.getElementById('coreFeaturesGrid');
  if (!grid) return;
  grid.innerHTML = ad.coreFeatures.map(f => `
    <div class="analysis-card feature-card">
      <div class="analysis-card-icon">${f.icon}</div>
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
      <div class="marketing-angle">
        <div class="angle-label">💡 营销切入点</div>
        <div class="angle-text">${f.marketingAngle}</div>
      </div>
      <div class="ops-card-tags" style="margin-top:8px;">${f.tags.map(t => `<span class="ops-card-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderCompetitors(ad) {
  if (!ad) ad = currentProjectType === 'rust' ? RUST_ANALYSIS : currentProjectType === 'hunt' ? HUNT_ANALYSIS : GAME_ANALYSIS;
  const tabs = document.getElementById('competitorTabs');
  const content = document.getElementById('competitorContent');
  if (!tabs || !content) return;
  const projLabel = currentProjectType === 'rust' ? 'RUST' : currentProjectType === 'hunt' ? 'Hunt' : 'PoE2';

  tabs.innerHTML = ad.competitors.map((c, i) => `
    <button class="competitor-tab ${i === currentCompetitor ? 'active' : ''}" onclick="switchCompetitor(${i})">
      ${c.icon} ${c.name}
    </button>
  `).join('');

  const comp = ad.competitors[currentCompetitor];
  const advLabels = { us:'🟢 我方优势', them:'🔴 对方优势', tie:'🟡 持平' };
  const advClass = { us:'adv-us', them:'adv-them', tie:'adv-tie' };

  content.innerHTML = `
    <div class="competitor-detail animate-in">
      <div class="competitor-header">
        <span style="font-size:1.5rem;">${comp.icon}</span>
        <div>
          <h3>${projLabel} vs ${comp.name}</h3>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:2px;">${comp.positioning}</p>
        </div>
      </div>
      <div class="comparison-table">
        <div class="comp-row comp-header-row">
          <div class="comp-dim">维度</div>
          <div class="comp-us">${projLabel}</div>
          <div class="comp-them">${comp.name}</div>
          <div class="comp-adv">判定</div>
        </div>
        ${comp.comparison.map(row => `
          <div class="comp-row">
            <div class="comp-dim">${row.dimension}</div>
            <div class="comp-us">${row.us}</div>
            <div class="comp-them">${row.them}</div>
            <div class="comp-adv"><span class="${advClass[row.advantage]}">${advLabels[row.advantage]}</span></div>
          </div>
        `).join('')}
      </div>
      <div class="leverage-box">
        <div class="leverage-title">🎯 社群撬动策略</div>
        <div class="leverage-text">${comp.communityLeverage}</div>
      </div>
    </div>
  `;
}

function switchCompetitor(idx) {
  currentCompetitor = idx;
  renderCompetitors();
}

function renderStrategies(ad) {
  if (!ad) ad = currentProjectType === 'rust' ? RUST_ANALYSIS : currentProjectType === 'hunt' ? HUNT_ANALYSIS : GAME_ANALYSIS;
  const grid = document.getElementById('strategyGrid');
  if (!grid) return;
  grid.innerHTML = ad.communityStrategies.map(s => `
    <div class="analysis-card strategy-card">
      <div class="analysis-card-icon">${s.icon}</div>
      <h4>${s.title}</h4>
      <div class="strategy-problem"><strong>问题：</strong>${s.problem}</div>
      <div class="strategy-solution"><strong>策略：</strong>${s.solution}</div>
      <div class="strategy-actions">
        <div class="actions-title">📋 具体动作</div>
        <ul>${s.actions.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      <div class="strategy-kpi">
        <span class="kpi-icon">📊</span> ${s.kpi}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
// DIFFERENTIATION + REGIONAL STRATEGY
// ═══════════════════════════════════════════════════════════════
let currentRegion = 0;

function renderDiffPositioning() {
  const diff = currentProjectType === 'rust' ? (typeof RUST_DIFF!=='undefined'?RUST_DIFF:null) : currentProjectType === 'hunt' ? (typeof HUNT_DIFF!=='undefined'?HUNT_DIFF:null) : (typeof POE2_DIFF!=='undefined'?POE2_DIFF:null);
  const posEl = document.getElementById('diffPositionContent');
  const pillarsEl = document.getElementById('diffPillarsGrid');
  if (!diff || !posEl) return;

  // Positioning map
  posEl.innerHTML = `
    <div class="diff-position-card">
      <div class="diff-tagline">${diff.positioning.tagline}</div>
      <div class="diff-landscape">
        <div class="landscape-axis-x">${diff.positioning.axisX}</div>
        <div class="landscape-axis-y">${diff.positioning.axisY}</div>
        <div class="landscape-area">
          ${diff.positioning.landscape.map(g => `
            <div class="landscape-dot" style="left:${g.x}%;bottom:${g.y}%;width:${g.size}px;height:${g.size}px;background:${g.color};" title="${g.name}: ${g.tags}">
              <span class="dot-label">${g.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;

  // Pillars
  if (pillarsEl) {
    pillarsEl.innerHTML = diff.pillars.map(p => `
      <div class="analysis-card">
        <div class="analysis-card-icon">${p.icon}</div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="diff-moat"><strong>🏰 护城河:</strong> ${p.moat}</div>
        <div class="marketing-angle"><div class="angle-label">📢 UA方向</div><div class="angle-text">${p.uaAngle}</div></div>
      </div>
    `).join('');
  }
}

function renderRegionalStrategy() {
  const regions = currentProjectType === 'rust' ? (typeof RUST_REGIONAL!=='undefined'?RUST_REGIONAL:null) : currentProjectType === 'hunt' ? (typeof HUNT_REGIONAL!=='undefined'?HUNT_REGIONAL:null) : (typeof POE2_REGIONAL!=='undefined'?POE2_REGIONAL:null);
  const tabs = document.getElementById('regionTabs');
  const content = document.getElementById('regionContent');
  if (!regions || !tabs || !content) return;

  tabs.innerHTML = regions.map((r, i) => `
    <button class="competitor-tab ${i===currentRegion?'active':''}" onclick="switchRegion(${i})">${r.icon} ${r.region.replace(/🇺🇸🇬🇧|🌏|🇯🇵🇰🇷|🌎|🇸🇦/g,'').trim()}</button>
  `).join('');

  const r = regions[currentRegion];
  content.innerHTML = `
    <div class="competitor-detail animate-in">
      <div class="competitor-header">
        <span style="font-size:1.8rem;">${r.icon}</span>
        <div>
          <h3>${r.region}</h3>
          <p style="font-size:0.82rem;color:var(--accent-gold);margin-top:2px;font-weight:600;">${r.playerBase}</p>
        </div>
      </div>
      <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:16px;">${r.overview}</p>
      <div class="region-insights">
        <h5 style="font-size:0.82rem;font-weight:700;margin-bottom:8px;">🔍 关键洞察</h5>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">
          ${r.keyInsights.map(i => `<span class="ops-card-tag" style="padding:4px 10px;font-size:0.75rem;">${i}</span>`).join('')}
        </div>
      </div>
      <div class="region-actions">
        <h5 style="font-size:0.82rem;font-weight:700;margin-bottom:12px;">📋 宣发运营打法</h5>
        ${r.strategy.map((s,idx) => `
          <div class="region-action-item">
            <div class="region-action-num">${idx+1}</div>
            <div>
              <div class="region-action-title">${s.action}</div>
              <div class="region-action-detail">${s.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="strategy-kpi" style="margin-top:16px;">
        <span class="kpi-icon">📊</span> ${r.kpi}
      </div>
      <div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted);">⏱ 节奏: ${r.timing}</div>
    </div>
  `;
}

function switchRegion(idx) {
  currentRegion = idx;
  renderRegionalStrategy();
}

// ═══════════════════════════════════════════════════════════════
// AUDIENCE SEGMENTATION — 玩家人群分析
// ═══════════════════════════════════════════════════════════════
function renderAudienceSegmentation() {
  const aud = currentProjectType === 'rust' ? (typeof RUST_AUDIENCE!=='undefined'?RUST_AUDIENCE:null) : currentProjectType === 'hunt' ? (typeof HUNT_AUDIENCE!=='undefined'?HUNT_AUDIENCE:null) : (typeof POE2_AUDIENCE!=='undefined'?POE2_AUDIENCE:null);
  const funnelEl = document.getElementById('audienceFunnel');
  const segEl = document.getElementById('audienceSegments');
  if (!aud || !funnelEl || !segEl) return;

  // Funnel visualization
  funnelEl.innerHTML = `
    <div class="audience-funnel-card">
      <div class="funnel-bars">
        <div class="funnel-bar" style="width:${parseInt(aud.funnel.core)}%;background:var(--accent-red);">
          <span>🔴 核心 ${aud.funnel.core}</span>
        </div>
        <div class="funnel-bar" style="width:${parseInt(aud.funnel.broad)}%;background:var(--accent-orange);">
          <span>🟡 泛用户 ${aud.funnel.broad}</span>
        </div>
        <div class="funnel-bar" style="width:${parseInt(aud.funnel.casual)}%;background:var(--accent-green);">
          <span>🟢 非核心 ${aud.funnel.casual}</span>
        </div>
      </div>
    </div>
  `;

  // Segment cards
  segEl.innerHTML = aud.segments.map(seg => `
    <div class="audience-segment" style="border-left:4px solid ${seg.color};">
      <div class="seg-header">
        <div>
          <h3 class="seg-label">${seg.label}</h3>
          <div class="seg-size">${seg.size}</div>
        </div>
      </div>

      <div class="seg-portrait">
        <h5>👤 用户画像</h5>
        <div class="portrait-grid">
          <div class="portrait-item"><span class="p-key">他们是谁</span><span class="p-val">${seg.portrait.who}</span></div>
          <div class="portrait-item"><span class="p-key">年龄/性别</span><span class="p-val">${seg.portrait.age}</span></div>
          <div class="portrait-item"><span class="p-key">行为特征</span><span class="p-val">${seg.portrait.behavior}</span></div>
          <div class="portrait-item"><span class="p-key">核心动机</span><span class="p-val">${seg.portrait.motivation}</span></div>
          <div class="portrait-item"><span class="p-key">付费意愿</span><span class="p-val">${seg.portrait.spend}</span></div>
        </div>
      </div>

      <div class="seg-strategies">
        <h5>🎯 对应策略</h5>
        ${seg.strategy.map((s,i) => `
          <div class="region-action-item">
            <div class="region-action-num" style="background:${seg.color};">${i+1}</div>
            <div>
              <div class="region-action-title">${s.action}</div>
              <div class="region-action-detail">${s.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="seg-footer">
        <div class="seg-ua-box">
          <span style="font-weight:700;color:var(--accent-cyan);">📈 获客思路:</span> ${seg.uaApproach}
        </div>
        <div class="seg-content-box">
          <span style="font-weight:700;color:var(--accent-purple);">🎬 内容方向:</span> ${seg.contentStyle}
        </div>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
// STEAM DASHBOARD
// ═══════════════════════════════════════════════════════════════
function renderSteamDashboard(steamData) {
  const d = steamData;
  if (!d) return;
  const appId = d.appId || 0;
  const projName = currentProjectType === 'rust' ? 'RUST' : currentProjectType === 'hunt' ? 'Hunt: Showdown 1896' : 'Path of Exile 2';

  // Update title & link
  const titleEl = document.getElementById('steamTitle');
  const linkEl = document.getElementById('steamLink');
  if (titleEl) titleEl.textContent = '📈 Steam 实时在线数据 — ' + projName;
  if (linkEl) linkEl.href = 'https://steamcharts.com/app/' + appId;

  // Stats row
  document.getElementById('steamStatsRow').innerHTML = `
    <div class="steam-stat"><div class="steam-stat-label">当前在线</div><div class="steam-stat-value" style="color:var(--accent-green)">${(d.current).toLocaleString()}</div></div>
    <div class="steam-stat"><div class="steam-stat-label">24h峰值</div><div class="steam-stat-value" style="color:var(--accent-gold)">${(d.peak24h).toLocaleString()}</div></div>
    <div class="steam-stat"><div class="steam-stat-label">历史最高</div><div class="steam-stat-value" style="color:var(--accent-red)">${(d.allTimePeak).toLocaleString()}</div></div>
    <div class="steam-stat"><div class="steam-stat-label">月均在线</div><div class="steam-stat-value" style="color:var(--accent-blue)">${(d.avgMonth).toLocaleString()}</div></div>
    <div class="steam-stat"><div class="steam-stat-label">Twitch年观看</div><div class="steam-stat-value" style="color:var(--accent-purple)">30.5M h</div></div>
    <div class="steam-stat"><div class="steam-stat-label">Twitch峰值</div><div class="steam-stat-value" style="color:var(--accent-cyan)">102K</div></div>
  `;

  // Chart — simple bar chart using CSS
  const maxPeak = Math.max(...d.monthly.map(m => m.peak));
  document.getElementById('steamChart').innerHTML = `
    <div style="font-size:0.78rem;font-weight:600;margin-bottom:10px;color:var(--text-secondary);">月度趋势 (2025.01 - 2026.03)</div>
    <div class="steam-bars">
      ${d.monthly.map(m => {
        const avgH = (m.avg / maxPeak * 100).toFixed(1);
        const peakH = (m.peak / maxPeak * 100).toFixed(1);
        const label = m.m.split('-')[1] + '/' + m.m.split('-')[0].slice(2);
        return `<div class="steam-bar-group" title="${m.m}  均值:${m.avg.toLocaleString()}  峰值:${m.peak.toLocaleString()}">
          <div class="steam-bar-stack">
            <div class="steam-bar peak" style="height:${peakH}%"></div>
            <div class="steam-bar avg" style="height:${avgH}%"></div>
          </div>
          <div class="steam-bar-label">${label}</div>
        </div>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:16px;margin-top:8px;font-size:0.7rem;color:var(--text-muted);">
      <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent-gold);border-radius:2px;margin-right:4px;vertical-align:middle;"></span>月峰值</span>
      <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent-blue);border-radius:2px;margin-right:4px;vertical-align:middle;"></span>月均值</span>
    </div>
  `;
}
