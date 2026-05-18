import * as THREE from 'three';
import './styles.css';

const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1xXEeh3xpPL28n5xi8E1gVg5A8PAmt3ug';
const contactEmail = 'aryan.varshney94@gmail.com';

const contactSubjects = [
  {
    value: 'profile-interest',
    label: 'Interested in my profile',
    subject: '[Web Resume] Interested in Aryan Varshney profile',
  },
  {
    value: 'interview',
    label: 'Interview opportunity',
    subject: '[Web Resume] Interview opportunity for Business Analyst role',
  },
  {
    value: 'ba-role',
    label: 'Business Analyst role',
    subject: '[Web Resume] Business Analyst role discussion',
  },
  {
    value: 'crm-saas',
    label: 'CRM / SaaS implementation',
    subject: '[Web Resume] CRM / SaaS implementation BA opportunity',
  },
  {
    value: 'networking',
    label: 'Networking / referral',
    subject: '[Web Resume] Networking or referral conversation',
  },
];

const proof = [
  { value: '70+', label: 'client discovery sessions' },
  { value: '20+', label: 'custom QloApps builds' },
  { value: '8+', label: 'integration partnerships' },
  { value: '100+', label: 'customer re-engagements' },
];

const hireSignals = [
  {
    title: 'Client-facing BA',
    text: 'Comfortable leading discovery, demos, requirement reviews, UAT walkthroughs, and milestone sign-offs.',
  },
  {
    title: 'Implementation ownership',
    text: 'Experience across SaaS custom builds, CRM configuration, release readiness, and production handover.',
  },
  {
    title: 'Product-minded delivery',
    text: 'Turns churn feedback, reporting gaps, and support patterns into roadmap inputs and measurable delivery clarity.',
  },
  {
    title: 'AI-ready analyst',
    text: 'Hands-on with LLM chatbot requirements, domain training data, response validation, and prompt testing.',
  },
];

const experience = [
  {
    company: 'Webkul (QloApps)',
    role: 'Business Analyst',
    date: 'Feb 2025 - Present',
    place: 'Noida, India',
    points: [
      'Led pre-sales and post-sales discovery for 70+ clients, keeping committed scope aligned with delivered SaaS outcomes.',
      'Defined requirements for an LLM support chatbot trained on QloApps domain data, then partnered with engineering through integration, QA validation, and feedback loops.',
      'Delivered 20+ client-specific hospitality builds covering booking logic, reservation flows, BRD/FRD/SRS, UAT sign-off, and production release.',
      'Managed 8+ third-party API integration partnerships to expand product functionality, automation, and market visibility.',
      'Mentored 2 junior BAs on documentation quality, user stories, stakeholder communication, and delivery discipline.',
      'Re-engaged 100+ churned customers and converted insights into roadmap feedback, Jira/ERP reporting improvements, and delivery visibility.',
    ],
  },
  {
    company: 'Girikon Solutions',
    role: 'Business Analyst',
    date: 'Apr 2024 - Feb 2025',
    place: 'Noida, India',
    points: [
      'Delivered 3 full-cycle CRM implementations across HubSpot and Salesforce Sales Cloud for FinTech and Healthcare clients.',
      'Owned workshops, demos, UAT walkthroughs, requirement sign-off, configuration alignment, and go-live readiness.',
      'Authored 100+ user stories and acceptance criteria while supporting sprint planning, backlog grooming, and Agile ceremonies.',
      'Configured 50+ CRM properties and pipelines, producing BRD, FRD, and UML documentation that improved onboarding speed.',
    ],
  },
];

const layers = [
  {
    title: 'Business Analysis',
    note: '// discovery · clarity',
    items: ['Requirement Gathering', 'BRD / FRD / SRS', 'User Stories', 'Acceptance Criteria', 'Process Mapping', 'UAT', 'UML', 'Wireframing'],
  },
  {
    title: 'Delivery',
    note: '// execution · release',
    items: ['Agile', 'Scrum', 'Waterfall', 'Sprint Planning', 'Backlog Grooming', 'Story Estimation', 'Release Planning', 'SDLC'],
  },
  {
    title: 'Product & Leadership',
    note: '// product · people',
    items: ['Client Management', 'Stakeholder Management', 'Product Discovery', 'KPI Definition', 'Customer Journey Mapping', 'Mentoring', 'Market Research'],
  },
  {
    title: 'Data, CRM & AI',
    note: '// tools · intelligence',
    items: ['SQL', 'Power BI', 'Tableau', 'Jira', 'Confluence', 'Salesforce', 'HubSpot', 'API Integration', 'ChatGPT', 'Claude', 'Prompt Engineering'],
  },
];

const labCards = [
  {
    number: '01',
    title: 'Requirements become delivery contracts',
    text: 'I structure ambiguous client needs into BRD, FRD, SRS, user stories, workflows, wireframes, and acceptance criteria teams can actually build against.',
  },
  {
    number: '02',
    title: 'CRM is treated as a business system',
    text: 'HubSpot and Salesforce work is framed around pipeline logic, properties, UAT readiness, adoption, reporting, and measurable operating outcomes.',
  },
  {
    number: '03',
    title: 'AI is used where support knowledge repeats',
    text: 'The QloApps chatbot work connects domain training data, prompt testing, response validation, and client feedback into practical support automation.',
  },
];

const artifacts = [
  { title: 'Discovery Notes', meta: 'stakeholders · pain points · goals' },
  { title: 'BRD / FRD Pack', meta: 'scope · workflows · acceptance' },
  { title: 'CRM Pipeline', meta: 'stages · fields · reporting' },
  { title: 'UAT Tracker', meta: 'test cases · sign-off · release' },
];

const shortlistReasons = [
  {
    stat: '70+ sessions',
    title: 'Strong client discovery',
    text: 'I can lead requirement conversations, ask clarifying questions, identify gaps, and align what was promised with what the team can deliver.',
  },
  {
    stat: '20+ builds',
    title: 'SaaS implementation ownership',
    text: 'I have handled custom QloApps implementation work from documentation and workflow mapping through UAT sign-off and release coordination.',
  },
  {
    stat: '3 CRM go-lives',
    title: 'CRM delivery exposure',
    text: 'I have delivered HubSpot and Salesforce work for FinTech and Healthcare clients, covering pipelines, configuration, UAT, and go-live readiness.',
  },
  {
    stat: '8+ integrations',
    title: 'API partnership thinking',
    text: 'I understand third-party integration requirements, partner coordination, product functionality, automation value, and visibility impact.',
  },
  {
    stat: 'LLM chatbot',
    title: 'AI-ready BA profile',
    text: 'I have defined chatbot requirements, worked with domain training data, validated responses, tested prompts, and iterated from client feedback.',
  },
];

const askAryan = [
  {
    question: 'How do you gather requirements?',
    answer:
      'I start with business goals, user roles, current pain points, constraints, and success metrics. Then I convert conversations into BRD/FRD/SRS, workflows, user stories, and acceptance criteria.',
  },
  {
    question: 'How do you handle scope change?',
    answer:
      'I clarify the change, map its impact on timeline, configuration, engineering effort, UAT, and release, then help stakeholders decide whether it belongs in current scope or backlog.',
  },
  {
    question: 'How do you manage UAT?',
    answer:
      'I prepare scenarios, acceptance criteria, test walkthroughs, issue logs, and sign-off checkpoints so the client validates the product against agreed requirements.',
  },
  {
    question: 'How do you work with developers?',
    answer:
      'I translate business context into clear implementation-ready requirements, remove ambiguity early, support sprint discussions, and stay available during QA/UAT for clarification.',
  },
];

const workspaceModes = [
  {
    key: 'docs',
    label: 'Docs',
    title: 'Requirement Architecture',
    text: 'BRD, FRD, SRS, workflows, wireframes, user stories, and acceptance criteria structured for delivery teams.',
    stat: 'BRD / FRD / SRS',
  },
  {
    key: 'crm',
    label: 'CRM',
    title: 'Implementation Logic',
    text: 'HubSpot and Salesforce delivery for FinTech and Healthcare clients, covering pipelines, UAT readiness, sign-off, and go-live.',
    stat: '3 CRM go-lives',
  },
  {
    key: 'kpi',
    label: 'KPI',
    title: 'Reporting Visibility',
    text: 'Jira, ERP reporting, market research, and roadmap feedback converted into measurable delivery visibility.',
    stat: '+48% visibility',
  },
  {
    key: 'ai',
    label: 'AI',
    title: 'Support Automation',
    text: 'LLM chatbot requirements, domain training data, prompt testing, response validation, and client feedback loops.',
    stat: 'LLM chatbot',
  },
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas class="scene" aria-hidden="true"></canvas>
  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="scroll-progress" aria-hidden="true"><i></i></div>
  <a class="sticky-resume" href="${resumeDownloadUrl}" target="_blank" rel="noreferrer" aria-label="Download Aryan Varshney resume">
    <span>Download Resume</span>
  </a>
  <main>
    <nav class="nav" aria-label="Primary">
      <a href="#top" class="brand">AV</a>
      <div>
        <a href="#experience">Experience</a>
        <a href="#system">System</a>
        <a href="#toolbox">Toolbox</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section class="hero" id="top">
      <div class="hero-kicker">
        <span>Business Analyst</span>
        <span>SaaS · CRM · Agile</span>
        <span>Open to BA/Product roles</span>
      </div>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="section-index">01 — Profile</p>
          <h1>Aryan Varshney</h1>
          <p class="lead">
            Business Analyst for teams that need someone who can face clients, structure requirements,
            coordinate delivery, validate UAT, and turn implementation learning into product decisions.
          </p>
          <div class="fit-strip" aria-label="Role fit">
            <span>SaaS BA</span>
            <span>CRM Implementation</span>
            <span>Product BA</span>
            <span>Client Success BA</span>
          </div>
          <div class="hero-actions" id="contact">
            <a class="button primary" href="mailto:aryan.varshney94@gmail.com">Email</a>
            <a class="button" href="tel:+919457357157">Call</a>
            <a class="button" href="https://wa.me/919457357157" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="button" href="https://linkedin.com/in/varshneyaryan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a class="button" href="https://github.com/thearyanvarshney" target="_blank" rel="noreferrer">GitHub</a>
            <a class="button" href="${resumeDownloadUrl}" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
          <div class="contact-line">
            <span>aryan.varshney94@gmail.com</span>
            <span>+91 9457357157</span>
            <span>Noida, India</span>
          </div>
        </div>
        <aside class="process-card" aria-label="Interactive BA process model">
          <p class="section-index">BA Operating Model</p>
          <h2>Requirement → story → UAT → release → insight</h2>
          <div class="mode-switcher" aria-label="3D workspace focus">
            ${workspaceModes
              .map(
                (mode, index) => `
                  <button class="${index === 0 ? 'active' : ''}" data-mode="${mode.key}" type="button">
                    ${mode.label}
                  </button>
                `,
              )
              .join('')}
          </div>
          <div class="inspector-panel" aria-live="polite">
            <span id="inspector-stat">${workspaceModes[0].stat}</span>
            <strong id="inspector-title">${workspaceModes[0].title}</strong>
            <p id="inspector-text">${workspaceModes[0].text}</p>
          </div>
          <div class="signal-row">
            <span>BRD</span>
            <span>FRD</span>
            <span>CRM</span>
            <span>UAT</span>
            <span>KPI</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="proof-grid" aria-label="Profile evidence">
      ${proof.map((item) => `<article><strong>${item.value}</strong><span>${item.label}</span></article>`).join('')}
    </section>

    <section class="section recruiter-console">
      <div class="section-heading">
        <p class="section-index">02 — Recruiter Console</p>
        <h2>Why shortlist me?</h2>
      </div>
      <div class="console-grid">
        <article class="shortlist-panel">
          <div>
            <p class="section-index">Shortlist Signals</p>
            <strong id="shortlist-stat">${shortlistReasons[0].stat}</strong>
            <h3 id="shortlist-title">${shortlistReasons[0].title}</h3>
            <p id="shortlist-text">${shortlistReasons[0].text}</p>
          </div>
          <div class="console-buttons" aria-label="Shortlist reasons">
            ${shortlistReasons
              .map(
                (reason, index) => `
                  <button class="${index === 0 ? 'active' : ''}" data-shortlist="${index}" type="button">
                    ${reason.stat}
                  </button>
                `,
              )
              .join('')}
          </div>
        </article>
        <article class="ask-panel">
          <p class="section-index">Ask Aryan</p>
          <h3 id="ask-question">${askAryan[0].question}</h3>
          <p id="ask-answer">${askAryan[0].answer}</p>
          <div class="question-list" aria-label="Interview questions">
            ${askAryan
              .map(
                (item, index) => `
                  <button class="${index === 0 ? 'active' : ''}" data-question="${index}" type="button">
                    ${item.question}
                  </button>
                `,
              )
              .join('')}
          </div>
        </article>
      </div>
    </section>

    <section class="section artifact-section">
      <div class="section-heading">
        <p class="section-index">03 — BA Workspace</p>
        <h2>Business Analyst artifacts I work with every day.</h2>
      </div>
      <div class="artifact-grid">
        ${artifacts
          .map(
            (artifact) => `
              <article>
                <span></span>
                <h3>${artifact.title}</h3>
                <p>${artifact.meta}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section hire-section">
      <div class="section-heading">
        <p class="section-index">04 — Why Interview Aryan</p>
        <h2>HR can contact me for these Business Analyst strengths.</h2>
      </div>
      <div class="hire-grid">
        ${hireSignals
          .map(
            (signal) => `
              <article>
                <h3>${signal.title}</h3>
                <p>${signal.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="statement section">
      <p class="section-index">05 — Principle</p>
      <h2>The BA is the product translator.</h2>
      <blockquote>
        A strong BA does more than collect requirements. I create the shared language between client, product,
        engineering, QA, and leadership so decisions are visible, testable, and ready for release.
      </blockquote>
    </section>

    <section class="section lab" id="system">
      <div class="section-heading">
        <p class="section-index">06 — BA System</p>
        <h2>How I turn ambiguity into shipped work.</h2>
      </div>
      <div class="lab-grid">
        ${labCards
          .map(
            (card) => `
              <article>
                <span>${card.number}</span>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
      <div class="terminal-card">
        <span>~/business-analysis · delivery-flow.txt</span>
        <code>
          › discover(client.context, gaps, success_metrics)<br>
          › define(BRD, FRD, SRS, workflows, acceptance_criteria)<br>
          › align(product + engineering + QA)<br>
          › validate(UAT, response_quality, sign_off)<br>
          › ship(release, reporting, roadmap_feedback)
        </code>
      </div>
    </section>

    <section class="section" id="experience">
      <div class="section-heading">
        <p class="section-index">07 — Experience</p>
        <h2>Client-facing BA experience from discovery to UAT sign-off.</h2>
      </div>
      <div class="timeline">
        ${experience
          .map(
            (job) => `
              <article class="timeline-item">
                <div class="timeline-meta">
                  <span>${job.date}</span>
                  <small>${job.place}</small>
                </div>
                <div>
                  <h3>${job.role} · ${job.company}</h3>
                  <ul>${job.points.map((point) => `<li>${point}</li>`).join('')}</ul>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section project-band">
      <div>
        <p class="section-index">08 — Product Ownership</p>
        <h2>CB Billing System</h2>
        <p>
          Offline-first SaaS billing platform for 3 live business users. I owned requirements,
          billing logic, sync workflows, UAT, release planning, product roadmap, and thermal print formats.
        </p>
      </div>
      <div class="stacked-proof">
        <span>Offline-first workflows</span>
        <span>Cloud sync logic</span>
        <span>Billing rules</span>
        <span>Thermal print formats</span>
      </div>
    </section>

    <section class="section toolbox" id="toolbox">
      <div class="section-heading">
        <p class="section-index">09 — Toolbox</p>
        <h2>Skills by layer.</h2>
      </div>
      <div class="toolbox-grid">
        ${layers
          .map(
            (layer) => `
              <article>
                <p>${layer.note}</p>
                <h3>${layer.title}</h3>
                <div>${layer.items.map((item) => `<span>${item}</span>`).join('')}</div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section credentials-section">
      <div class="section-heading">
        <p class="section-index">10 — Business Analyst Zone</p>
        <h2>Academic foundation for Business Analysis.</h2>
      </div>
      <div class="education-grid">
        <article class="education-card depth-card">
          <p class="section-index">Education</p>
          <div class="education-item">
            <span>2022-2024</span>
            <h3>MBA · Business Analytics</h3>
            <p>Jaipuria Institute of Management</p>
          </div>
          <div class="education-item">
            <span>2018-2021</span>
            <h3>BCA · Computer Applications</h3>
            <p>GLA University</p>
          </div>
        </article>
        <article class="credential-card depth-card">
          <p class="section-index">Volunteer Leadership</p>
          <div class="leadership-proof">
            <strong>95-member club</strong>
            <span>VP, IT & Analytics Club · tech events, analytics workshops, and hackathons.</span>
          </div>
          <div class="leadership-proof">
            <strong>500+ students</strong>
            <span>Campus Ambassador outreach and workshops with Coding Ninjas & Internshala.</span>
          </div>
        <div class="certification-list" aria-label="Certifications">
          <span>Data Analysis with R Programming · Google</span>
          <span>Agile Project Management · Google</span>
          <span>Tableau Advanced · Tableau e-Learning</span>
          <span>Business Analyst & Digital Media · ISB</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section hire-cta" id="hire">
      <div>
        <p class="section-index">11 — Hire Me</p>
        <h2>Hire Aryan for Business Analyst roles.</h2>
        <p>
          Available for Business Analyst, Product BA, SaaS Implementation, CRM Implementation,
          and Client-facing BA opportunities.
        </p>
      </div>
      <div class="hire-actions">
        <a class="button primary" href="mailto:aryan.varshney94@gmail.com">Email Aryan</a>
        <a class="button" href="tel:+919457357157">Call</a>
        <a class="button" href="https://wa.me/919457357157" target="_blank" rel="noreferrer">WhatsApp</a>
        <a class="button" href="https://linkedin.com/in/varshneyaryan" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="button" href="${resumeDownloadUrl}" target="_blank" rel="noreferrer">Download Resume</a>
        <span>Noida, India · Open to BA opportunities · Open to relocate</span>
        <form class="contact-form" id="contact-form">
          <label>
            Reason
            <select id="contact-reason" name="reason">
              ${contactSubjects
                .map((item) => `<option value="${item.value}">${item.label}</option>`)
                .join('')}
            </select>
          </label>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label class="message-field">
            Message
            <textarea name="message" rows="4" placeholder="Share the role, company, or next step." required></textarea>
          </label>
          <button class="button primary" type="submit">Open Email Draft</button>
          <small id="contact-feedback">This opens an email draft to Aryan with a role-specific subject. No third-party form service needed.</small>
        </form>
      </div>
    </section>

    <footer>
      <div>
        <strong>Aryan Varshney</strong>
        <span>Business Analyst · SaaS · CRM · Agile Delivery</span>
      </div>
      <nav aria-label="Footer contact links">
        <a href="mailto:aryan.varshney94@gmail.com">Email</a>
        <a href="https://linkedin.com/in/varshneyaryan" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/thearyanvarshney" target="_blank" rel="noreferrer">GitHub</a>
        <a href="${resumeDownloadUrl}" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </footer>
  </main>
`;

const canvas = document.querySelector<HTMLCanvasElement>('.scene')!;
const cursorGlow = document.querySelector<HTMLElement>('.cursor-glow')!;
const progressBar = document.querySelector<HTMLElement>('.scroll-progress i')!;
const stickyResume = document.querySelector<HTMLElement>('.sticky-resume')!;
const modeButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-mode]'));
const inspectorStat = document.querySelector<HTMLElement>('#inspector-stat')!;
const inspectorTitle = document.querySelector<HTMLElement>('#inspector-title')!;
const inspectorText = document.querySelector<HTMLElement>('#inspector-text')!;
const processCard = document.querySelector<HTMLElement>('.process-card')!;
const shortlistStat = document.querySelector<HTMLElement>('#shortlist-stat')!;
const shortlistTitle = document.querySelector<HTMLElement>('#shortlist-title')!;
const shortlistText = document.querySelector<HTMLElement>('#shortlist-text')!;
const shortlistButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-shortlist]'));
const askQuestion = document.querySelector<HTMLElement>('#ask-question')!;
const askAnswer = document.querySelector<HTMLElement>('#ask-answer')!;
const questionButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-question]'));
const contactReason = document.querySelector<HTMLSelectElement>('#contact-reason')!;
const contactForm = document.querySelector<HTMLFormElement>('#contact-form')!;
const contactFeedback = document.querySelector<HTMLElement>('#contact-feedback')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 3.6, 8.6);
camera.lookAt(0, 0.4, 0);

const workspace = new THREE.Group();
scene.add(workspace);

const glass = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.32,
  metalness: 0.05,
  transparent: true,
  opacity: 0.86,
});
const ink = new THREE.MeshStandardMaterial({ color: 0x172321, roughness: 0.5 });
const teal = new THREE.MeshStandardMaterial({ color: 0x3a9488, roughness: 0.38, metalness: 0.06 });
const gold = new THREE.MeshStandardMaterial({ color: 0xb89959, roughness: 0.48 });
const blue = new THREE.MeshStandardMaterial({ color: 0xe7edf1, roughness: 0.56 });

const base = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.08, 4.2), glass);
base.position.y = -0.08;
workspace.add(base);

const docs = new THREE.Group();
for (let i = 0; i < 5; i += 1) {
  const page = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.025, 0.72), i % 2 === 0 ? glass : blue);
  page.position.set(-2.35 + i * 0.09, 0.06 + i * 0.026, -0.88 + i * 0.035);
  page.rotation.y = -0.22;
  docs.add(page);
}
workspace.add(docs);

const pipeline = new THREE.Group();
[-1.8, -0.72, 0.36, 1.44].forEach((x, index) => {
  const height = 0.38 + index * 0.18;
  const column = new THREE.Mesh(new THREE.BoxGeometry(0.56, height, 0.44), index === 2 ? teal : blue);
  column.position.set(x, height / 2, 0.88);
  pipeline.add(column);
});
workspace.add(pipeline);

const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-2.7, 0.24, 1.15),
  new THREE.Vector3(-1.4, 0.42, 0.3),
  new THREE.Vector3(-0.2, 0.5, 1.25),
  new THREE.Vector3(1.2, 0.72, 0.1),
  new THREE.Vector3(2.4, 0.88, 0.82),
]);
const signal = new THREE.Mesh(
  new THREE.TubeGeometry(curve, 64, 0.026, 10, false),
  new THREE.MeshStandardMaterial({ color: 0x12201f, roughness: 0.35 }),
);
workspace.add(signal);

const nodes: THREE.Mesh[] = [];
curve.points.forEach((point, index) => {
  const node = new THREE.Mesh(new THREE.SphereGeometry(0.09, 24, 24), index === 4 ? teal : gold);
  node.position.copy(point);
  nodes.push(node);
  workspace.add(node);
});

const kpiBars = new THREE.Group();
[0.5, 0.82, 0.64, 1.04].forEach((height, index) => {
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.16, height, 0.16), index === 3 ? teal : ink);
  bar.position.set(2.35 + index * 0.24, height / 2, -1.1);
  kpiBars.add(bar);
});
workspace.add(kpiBars);

scene.add(new THREE.AmbientLight(0xffffff, 1.6));
const key = new THREE.DirectionalLight(0xffffff, 2.6);
key.position.set(4, 6, 5);
scene.add(key);
const accent = new THREE.PointLight(0x52dccd, 5.5, 12);
accent.position.set(-2, 2.5, 4);
scene.add(accent);

let pointerX = 0;
let pointerY = 0;
let activeMode = 0;
let pulse = 0;

window.addEventListener('pointermove', (event) => {
  pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
  pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
  cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
});

function setMode(index: number) {
  activeMode = index;
  pulse = 1;
  const mode = workspaceModes[index];
  processCard.dataset.activeMode = mode.key;
  inspectorStat.textContent = mode.stat;
  inspectorTitle.textContent = mode.title;
  inspectorText.textContent = mode.text;
  modeButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
}

modeButtons.forEach((button, index) => {
  button.addEventListener('click', () => setMode(index));
});

function setShortlist(index: number) {
  const reason = shortlistReasons[index];
  shortlistStat.textContent = reason.stat;
  shortlistTitle.textContent = reason.title;
  shortlistText.textContent = reason.text;
  shortlistButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
}

function setQuestion(index: number) {
  const item = askAryan[index];
  askQuestion.textContent = item.question;
  askAnswer.textContent = item.answer;
  questionButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
}

shortlistButtons.forEach((button, index) => {
  button.addEventListener('click', () => setShortlist(index));
});

questionButtons.forEach((button, index) => {
  button.addEventListener('click', () => setQuestion(index));
});

const tiltCards = Array.from(
  document.querySelectorAll<HTMLElement>(
    '.process-card, .shortlist-panel, .ask-panel, .artifact-grid article, .hire-grid article, .lab-grid article, .toolbox-grid article, .depth-card, .timeline-item',
  ),
);

tiltCards.forEach((card) => {
  card.classList.add('tilt-card');
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`);
    card.style.setProperty('--shine-x', `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--shine-y', `${((y + 0.5) * 100).toFixed(1)}%`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--shine-x', '50%');
    card.style.setProperty('--shine-y', '50%');
  });
});

function updateContactSubject() {
  const selected = contactSubjects.find((item) => item.value === contactReason.value) ?? contactSubjects[0];
  return selected.subject;
}

contactReason.addEventListener('change', updateContactSubject);
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = updateContactSubject();
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const reasonLabel = contactSubjects.find((item) => item.value === contactReason.value)?.label ?? 'Website inquiry';
  const message = String(formData.get('message') ?? '').trim();
  const body = [
    `Reason: ${reasonLabel}`,
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
    '',
    'Sent from Aryan Varshney web resume.',
  ].join('\n');
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  contactFeedback.textContent = 'Email draft opened. Please send it from your email app.';
});
updateContactSubject();

const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('.section, .proof-grid, .process-card, .timeline-item'));
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.14 },
);
revealTargets.forEach((target) => {
  target.classList.add('reveal');
  revealObserver.observe(target);
});

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
  canvas.classList.toggle('scene-soft', window.scrollY > window.innerHeight * 0.72);
  stickyResume.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.55);
}

window.addEventListener('scroll', updateScrollState);

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  workspace.position.x = window.innerWidth < 900 ? 1.65 : 2.3;
  workspace.position.y = window.innerWidth < 900 ? -1.9 : -0.35;
  workspace.scale.setScalar(window.innerWidth < 900 ? 0.58 : 0.86);
}

window.addEventListener('resize', resize);
resize();
setMode(0);
updateScrollState();

function animate(time: number) {
  const t = time * 0.001;
  pulse *= 0.92;
  workspace.rotation.y += (pointerX * 0.16 - 0.2 - workspace.rotation.y) * 0.035;
  workspace.rotation.x += (-pointerY * 0.08 - 0.06 - workspace.rotation.x) * 0.035;
  const focusScale = 1 + pulse * 0.08;
  docs.rotation.y = -0.06 + Math.sin(t * 0.9) * 0.04;
  pipeline.rotation.y = Math.sin(t * 0.7) * 0.035;
  docs.scale.setScalar(activeMode === 0 ? focusScale : 0.92);
  pipeline.scale.setScalar(activeMode === 1 ? focusScale : 0.94);
  kpiBars.scale.setScalar(activeMode === 2 ? focusScale : 0.95);
  signal.scale.setScalar(activeMode === 3 ? focusScale : 1);
  kpiBars.children.forEach((bar, index) => {
    bar.scale.y = 1 + Math.sin(t * 1.4 + index) * 0.05;
  });
  nodes.forEach((node, index) => {
    node.position.y = curve.points[index].y + Math.sin(t * 1.8 + index) * 0.035;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
