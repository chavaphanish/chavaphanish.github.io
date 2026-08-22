const publications = [
  {year:2026,type:'journal',title:'Evaluation of Cryogenic Model Libraries for FDSOI CMOS Transistors',venue:'IEEE Transactions on Electron Devices 73(5), 2907–2914',doi:'https://doi.org/10.1109/TED.2026.3675187'},
  {year:2026,type:'conference',title:'Cryogenic-Aware EDA-Compatible Design Libraries for FD-SOI Transistors',venue:'10th IEEE Electron Devices Technology & Manufacturing Conference (EDTM 2026)',doi:'https://doi.org/10.1109/EDTM65772.2026.11497092'},
  {year:2025,type:'conference',title:'Cryogenic Performance Assessment of FD-SOI Transistors with Counter-Doped Channel',venue:'2025 IEEE European Solid-State Electronics Research Conference (ESSERC)',doi:'https://doi.org/10.1109/ESSERC66193.2025.11214120'},
  {year:2025,type:'journal',title:'High-Performance Silicon Nanowire Reconfigurable Field Effect Transistors Using Flash Lamp Annealing',venue:'ACS Applied Electronic Materials 7(6), 2284–2297',doi:'https://doi.org/10.1021/acsaelm.4c01896'},
  {year:2024,type:'journal',title:'Electrical characterization of multi-gated WSe₂/MoS₂ van der Waals heterojunctions',venue:'Scientific Reports 14, 5813',doi:'https://doi.org/10.1038/s41598-024-56455-x'},
  {year:2024,type:'journal',title:'Tuning the Electronic Characteristics of Monolayer MoS₂-Based Transistors by Ion Irradiation: The Role of the Substrate',venue:'Advanced Electronic Materials 10(9), 2400037',query:true},
  {year:2024,type:'journal',title:'2D BDiode – A Switchable Bidirectional Diode for Analog Electronic Circuits Fabricated Entirely from 2D Materials',venue:'Micro and Nano Engineering 23, 100246',query:true},
  {year:2024,type:'conference',title:'Evaluation of Cryogenic Models for FDSOI CMOS Transistors',venue:'16th IEEE Workshop on Low Temperature Electronics',query:true},
  {year:2024,type:'conference',title:'Fabrication, Characterisation and Application of 1D Semiconductor Nanomaterials',venue:'International Conference and School on Quantum Electronics',query:true},
  {year:2024,type:'conference',title:'Performance and Signal Quality Analysis of a Photonic Link from Room Temperature to 6 K Using Laser-Photodiodes',venue:'Applied Superconductivity Conference 2024',query:true},
  {year:2023,type:'journal',title:'Band-to-Band Tunneling Switches Based on Two-Dimensional van der Waals Heterojunctions',venue:'Applied Physics Reviews 10(1)',doi:'https://doi.org/10.1063/5.0130930'},
  {year:2023,type:'journal',title:'Fully Encapsulated and Stable Black Phosphorus Field-Effect Transistors',venue:'Advanced Materials Technologies 8(2), 2200546',query:true},
  {year:2023,type:'journal',title:'Novel Mixed-Dimensional hBN-Passivated Silicon Nanowire Reconfigurable Field Effect Transistors: Fabrication and Characterization',venue:'ACS Applied Materials & Interfaces 15(34), 40709–40718',query:true},
  {year:2023,type:'journal',title:'I-V-T Characteristics and Temperature Sensor Performance of a Fully 2-D WSe₂/MoS₂ Heterojunction Diode at Cryogenic Temperatures',venue:'IEEE Journal of the Electron Devices Society 11, 359–366',doi:'https://doi.org/10.1109/JEDS.2023.3289758'},
  {year:2023,type:'journal',title:'Correlating Optical Microspectroscopy with 4×4 Transfer Matrix Modeling for Characterizing Birefringent van der Waals Materials',venue:'Small Methods 7(10), 2300618',query:true},
  {year:2023,type:'journal',title:'Dry Release of MEMS Origami Using Thin Al₂O₃ Films for Facet-Based Device Integration',venue:'Micro and Nano Engineering 19, 100179',query:true},
  {year:2023,type:'conference',title:'Power Integrity Challenges in Large Scale Quantum Computers and Solutions',venue:'IEEE Workshop on Quantum Computing: Devices, Cryogenic Electronics and Packaging',query:true},
  {year:2022,type:'journal',title:'Self-Driven Broadband Photodetectors Based on MoSe₂/FePS₃ van der Waals n–p Type-II Heterostructures',venue:'ACS Applied Materials & Interfaces 14(9), 11927–11936',doi:'https://doi.org/10.1021/acsami.1c24308'},
  {year:2022,type:'conference',title:'Tunneling Transport in WSe₂-MoS₂ Heterojunction Transistor Enabled by a Two-Dimensional Device Architecture',venue:'Device Research Conference (DRC)',query:true},
  {year:2022,type:'conference',title:'Novel Mixed Dimensional Reconfigurable Field Effect Transistors: Fabrication and Electrical Characterization',venue:'Micro and Nano Engineering Conference',query:true},
  {year:2021,type:'journal',title:'Enhanced Trion Emission in Monolayer MoSe₂ by Constructing a Type-I Van der Waals Heterostructure',venue:'Advanced Functional Materials 31(40), 2104960',doi:'https://doi.org/10.1002/adfm.202104960'},
  {year:2020,type:'journal',title:'In-situ Characterization of MoS₂ Based Field Effect Transistors during Ion Irradiation',venue:'Microscopy and Microanalysis 26(S2), 294–296',doi:'https://doi.org/10.1017/S1431927620014105'},
  {year:2020,type:'journal',title:'Photoluminescence Dynamics in Few-Layer InSe',venue:'Physical Review Materials 4(4), 044001',doi:'https://doi.org/10.1103/PhysRevMaterials.4.044001'}
];

const list = document.querySelector('#publicationList');
const search = document.querySelector('#pubSearch');
const filters = [...document.querySelectorAll('.filter')];
let activeFilter = 'all';

const linkFor = p => p.doi || `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${p.title}"`)}`;

function renderPublications(){
  const term = search.value.trim().toLowerCase();
  const filtered = publications.filter(p => (activeFilter === 'all' || p.type === activeFilter) && (`${p.year} ${p.title} ${p.venue}`.toLowerCase().includes(term)));
  list.innerHTML = filtered.length ? filtered.map(p => `
    <article class="publication-item">
      <div class="pub-year">${p.year}</div>
      <div class="pub-body"><h3>${p.title}</h3><div class="pub-meta">${p.venue}<span class="pub-type">${p.type}</span></div></div>
      <a class="pub-link" href="${linkFor(p)}" target="_blank" rel="noreferrer" aria-label="Open publication: ${p.title}">↗</a>
    </article>`).join('') : '<div class="empty-state">No publications match your search.</div>';
}

filters.forEach(btn => btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderPublications()}));
search.addEventListener('input',renderPublications);
document.querySelector('#publicationCount').textContent = publications.length;
document.querySelector('#year').textContent = new Date().getFullYear();
renderPublications();

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const delay=entry.target.dataset.delay||0;setTimeout(()=>entry.target.classList.add('visible'),delay);observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme');
if(saved) document.documentElement.dataset.theme = saved;
toggle.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('theme',next)});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`},{passive:true});
