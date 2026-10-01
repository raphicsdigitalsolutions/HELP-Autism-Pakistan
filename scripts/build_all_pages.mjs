import fs from 'fs';
import path from 'path';
import {
  ORG,
  SERVICES,
  TRAININGS,
  VIDEOS,
  RESOURCES,
  renderHtmlEnvelope,
} from './template_engine.mjs';

const ROOT_DIR = process.cwd();

function saveFile(filename, html) {
  const filePath = path.join(ROOT_DIR, filename);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Generated: ${filename}`);
}

// --------------------------------------------------------------------------
// 1. INDEX.HTML (HOMEPAGE)
// --------------------------------------------------------------------------
function buildIndexPage() {
  const content = `
    <!-- Hero Section with 3D Medallion -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <!-- Hero Text Column -->
        <div class="hero-content reveal">
          <div class="hero-badge-row">
            <span class="badge badge-accent">A project of A&amp;S Welfare Society</span>
            <span class="badge badge-green">P Block, Model Town Ext, Lahore</span>
          </div>

          <h1 class="hero-headline">
            Empowering Autistic Children Towards <span class="accent">Independence</span>, Confidence &amp; Joy.
          </h1>

          <p class="hero-intro">
            HELP Autism Pakistan provides evidence-based, multidisciplinary therapy and compassionate parent training led by <strong>Dr. Aniqa Sohail</strong> (Gold Medalist Paediatrician, Certified ABA Consultant, USA). We help every child unlock their fullest potential through individualized clinical care.
          </p>

          <div class="hero-buttons">
            <a href="contact.html" class="btn btn-primary btn-3d btn-lg">
              Book a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          <div class="hero-beliefs">
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--color-navy); margin-right: 0.5rem;">OUR PILLARS:</span>
            <span class="belief-tag">Communication</span>
            <span class="belief-tag">Competence</span>
            <span class="belief-tag">Confidence</span>
            <span class="belief-tag">Independence</span>
          </div>
        </div>

        <!-- 3D Hero Medallion Column -->
        <div class="hero-visual-stage reveal">
          <div class="medallion-container" id="medallion-disc">
            <div class="medallion-disc">
              <img src="assets/img/logo.png" alt="HELP Autism Pakistan Official Logo" class="medallion-logo" loading="eager">
            </div>

            <!-- 4 Floating 3D Pill Chips at Different Depths -->
            <a href="aba-therapy.html" class="floating-chip chip-1" title="Applied Behavior Analysis">
              <span class="chip-dot blue"></span>
              <span>ABA &amp; Speech</span>
            </a>

            <a href="parent-trainings.html" class="floating-chip chip-2" title="Empowering Parents as Co-Therapists">
              <span class="chip-dot green"></span>
              <span>Parent power programs</span>
            </a>

            <a href="certificate-courses.html" class="floating-chip chip-3" title="Professional Certifications">
              <span class="chip-dot sun"></span>
              <span>Certificate courses</span>
            </a>

            <a href="resources.html#video-libraries" class="floating-chip chip-4" title="20 Free Video Libraries">
              <span class="chip-dot red"></span>
              <span>Free video libraries</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Strip -->
    <section class="stats-strip">
      <div class="container stats-grid">
        <div class="stat-item reveal">
          <div class="stat-number" data-counter="12">0</div>
          <div class="stat-label">Therapy Disciplines</div>
          <div class="stat-sub">Specialized 1:1 Clinical Care</div>
        </div>

        <div class="stat-item reveal">
          <div class="stat-number" data-counter="20">0</div>
          <div class="stat-label">Free Video Libraries</div>
          <div class="stat-sub">Open-Access Demos &amp; Lectures</div>
        </div>

        <div class="stat-item reveal">
          <div class="stat-number" data-counter="6">0</div>
          <div class="stat-label">Training Programs</div>
          <div class="stat-sub">Parents, Interns &amp; Clinicians</div>
        </div>

        <div class="stat-item reveal">
          <div class="stat-number">9–5</div>
          <div class="stat-label">Mon &ndash; Sat Schedule</div>
          <div class="stat-sub">Model Town Ext, Lahore</div>
        </div>
      </div>
    </section>

    <!-- Who We Are + Founder Card Section -->
    <section class="section founder-section" id="founder">
      <div class="container founder-grid">
        <div class="founder-card-wrap reveal">
          <div class="founder-card-offset-frame"></div>
          <div class="founder-card">
            <div class="founder-photo-box">
              <img src="assets/img/dr-aniqa-sohail.jpg" alt="Dr Aniqa Sohail - Founder and Project Director" class="founder-photo" loading="lazy" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg';">
              <div class="img-fallback-panel">Dr Aniqa Sohail</div>
            </div>
            <div class="founder-info">
              <h3 class="founder-name">${ORG.director}</h3>
              <p class="founder-role">${ORG.directorTitle}</p>
              <span class="founder-tag">Gold Medalist &middot; Mother of an Autistic Child</span>
            </div>
          </div>
        </div>

        <div class="founder-content reveal">
          <span class="section-badge">Leadership &amp; Clinical Excellence</span>
          <h2 class="section-title">Founded with medical expertise and a mother’s devotion.</h2>
          <p>
            HELP Autism Pakistan was established by <strong>Dr. Aniqa Sohail</strong>, a distinguished paediatrician, gold medalist from King Edward Medical College, and certified international autism specialist. As the mother of an autistic son, Dr. Aniqa combines gold-standard international clinical protocols with deeply personal empathy, practical parent-first coaching, and unwavering respect for each child’s unique dignity.
          </p>
          <p>
            Operating under the non-profit charter of <strong>A&amp;S Welfare Society</strong>, the centre serves as a beacon of hope for families in Lahore and across Pakistan, delivering structured multi-disciplinary interventions under one coordinated roof.
          </p>

          <div class="founder-qualifications-card">
            <h4>Key Credentials &amp; Certifications</h4>
            <div class="qual-grid">
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>MBBS (KEMC, Gold Medalist)</span>
              </div>
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>FCPS &amp; MCPS Paediatrics (CPSP)</span>
              </div>
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Certified ABA Consultant in Autism (USA)</span>
              </div>
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Certified Floortime Practitioner (ICDL, USA)</span>
              </div>
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Certified in ADHD Awareness (USA)</span>
              </div>
              <div class="qual-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>RDI Program (PAS Series, India)</span>
              </div>
            </div>
            <div style="margin-top: 1.25rem;">
              <a href="about.html" class="btn btn-secondary btn-sm">Read full biography &amp; vision &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infinite Marquee Strip -->
    <section class="marquee-section" aria-label="Evidence-Based Approaches">
      <div class="marquee-track">
        <div class="marquee-item"><span class="marquee-badge"></span> ABA Therapy</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Speech &amp; Language</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Occupational Therapy</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Sensory Integration</div>
        <div class="marquee-item"><span class="marquee-badge"></span> DIRFloortime</div>
        <div class="marquee-item"><span class="marquee-badge"></span> TEACCH Intervention</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Son-Rise Principles</div>
        <div class="marquee-item"><span class="marquee-badge"></span> PECS &amp; AAC</div>
        <div class="marquee-item"><span class="marquee-badge"></span> RDI Relationship Development</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Music Therapy</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Vocational &amp; Handloom</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Inclusive Schooling</div>
        <!-- Infinite clone -->
        <div class="marquee-item"><span class="marquee-badge"></span> ABA Therapy</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Speech &amp; Language</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Occupational Therapy</div>
        <div class="marquee-item"><span class="marquee-badge"></span> Sensory Integration</div>
        <div class="marquee-item"><span class="marquee-badge"></span> DIRFloortime</div>
        <div class="marquee-item"><span class="marquee-badge"></span> TEACCH Intervention</div>
      </div>
    </section>

    <!-- Services Grid (12 3D Tilt Cards) -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Our Comprehensive Care</span>
          <h2 class="section-title">12 Evidence-Based Therapy Services</h2>
          <p class="section-subtitle">
            Every child undergoes structured assessment and receives a customized multi-disciplinary intervention plan crafted for tangible daily milestones.
          </p>
        </div>

        <div class="services-grid-12">
          ${SERVICES.map(s => `
            <a href="${s.slug}.html" class="service-tilt-card reveal">
              <div class="card-image-box">
                <img src="${s.image}" alt="${s.title}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <div class="img-fallback-panel">${s.title}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">${s.title}</h3>
                <p class="card-text">${s.description.substring(0, 130)}...</p>
                <span class="card-footer-link">
                  Learn about ${s.title} 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;" class="reveal">
          <a href="programs.html" class="btn btn-primary btn-3d btn-lg">View Full Programs Overview &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Trainings, Internships & Certificate Courses (Knowledge Transfer) -->
    <section class="section section-knowledge-transfer" id="trainings">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Knowledge Transfer</span>
          <h2 class="section-title">Trainings, Internships &amp; Certificate Courses</h2>
          <p class="section-subtitle">
            Building Pakistan’s special education and therapy capacity through clinical internships, accredited certifications, and empowering parent cohorts.
          </p>
        </div>

        <div class="trainings-grid">
          ${TRAININGS.map(t => `
            <div class="training-card reveal">
              <div class="training-card-img-wrap">
                <img src="${t.image}" alt="${t.title}" class="training-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <span class="training-card-badge">${t.audience.split(' ')[0]}</span>
              </div>
              <div class="training-card-body">
                <span class="training-tag">${t.audience.split(' ')[0]} Program</span>
                <h3 class="training-title">${t.title}</h3>
                <p class="training-desc">${t.summary}</p>
                <div style="margin-top: auto;">
                  <p style="font-size: 0.82rem; color: var(--color-text-subtle); margin-bottom: 0.75rem;">
                    <strong>Duration:</strong> ${t.duration}
                  </p>
                  <a href="${t.slug}.html" class="btn btn-secondary btn-sm btn-block">Program Details &rarr;</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Power Parent Programs Highlight Banner -->
        <div class="parent-power-banner reveal" id="parent-power">
          <div class="parent-power-grid">
            <div>
              <span class="section-badge">Flagship Community Initiative</span>
              <h3>Power Parent Programs &amp; Sibling Support</h3>
              <p>
                Parents are a child's foremost and lifelong advocates. Our specialized coaching equips mothers and fathers with practical techniques for de-escalating meltdowns, building daily communication, and nurturing loving neuro-inclusive family environments.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <a href="parent-trainings.html" class="btn btn-green btn-3d">Join Parent Training Cohort</a>
                <a href="sibling-trainings.html" class="btn btn-secondary">Explore Sibling Programs</a>
              </div>
            </div>
            <div style="text-align: center;">
              <img src="https://static.wixstatic.com/media/563e77_701ea7fec9a543f68a7166194aba6aec~mv2.jpg/v1/crop/x_0,y_30,w_498,h_419/fill/w_561,h_503,al_c,lg_1,q_80,enc_avif,quality_auto/grooooop.jpg" alt="Parent & Child Training Group" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-height: 260px; margin: 0 auto;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80';">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Free Video Libraries (Clean, High-Contrast 20 Libraries Grid) -->
    <section class="section video-section-dark" id="video-libraries">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Free Public Knowledge Hub</span>
          <h2 class="section-title">20 Free Video Libraries</h2>
          <p class="section-subtitle">
            Recorded clinical sessions, lectures, and step-by-step demonstrations freely available to parents and practitioners worldwide.
          </p>
        </div>

        <div class="videos-grid-20">
          ${VIDEOS.map((v, index) => `
            <a href="${v.slug}.html" class="video-library-card reveal" title="${v.title}">
              <div class="video-card-thumb-wrap">
                <img src="${v.image}" alt="${v.title}" class="video-card-thumb" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <div class="video-play-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <div class="video-card-body">
                <span class="video-card-num">Library #${String(index + 1).padStart(2, '0')}</span>
                <h3 class="video-card-title">${v.title}</h3>
                <p class="video-card-topic">${v.topic}</p>
              </div>
            </a>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;" class="reveal">
          <a href="resources.html" class="btn btn-secondary btn-lg">Explore Full Resources &amp; Handouts &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Contact & Consultation Booking Strip -->
    <section class="section" id="consultation">
      <div class="container contact-section-grid">
        <div class="contact-card reveal">
          <span class="section-badge">Start Your Journey</span>
          <h2 class="section-title" style="margin-bottom: 0.75rem;">Book a Clinical Consultation</h2>
          <p style="margin-bottom: 2rem;">
            Fill out the form below or message us directly on WhatsApp. Our clinical team in Model Town Extension, Lahore will review your request promptly.
          </p>

          <form id="home-consultation-form" class="consultation-form">
            <div class="form-group">
              <label for="parent-name">Parent or Guardian Full Name *</label>
              <input type="text" id="parent-name" name="name" class="form-control" placeholder="e.g. Fatima Tariq" required>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label for="child-age">Child's Age (Years) *</label>
                <input type="text" id="child-age" name="age" class="form-control" placeholder="e.g. 4 years" required>
              </div>
              <div class="form-group">
                <label for="phone-number">WhatsApp or Phone *</label>
                <input type="tel" id="phone-number" name="phone" class="form-control" placeholder="0344 404 0074" required>
              </div>
            </div>

            <div class="form-group">
              <label for="therapy-interest">Primary Service of Interest</label>
              <select id="therapy-interest" name="service" class="form-control">
                <option value="Initial Diagnostic Assessment">Initial Diagnostic Assessment</option>
                <option value="ABA Therapy">ABA Therapy</option>
                <option value="Speech & Language Therapy">Speech & Language Therapy</option>
                <option value="Occupational & Sensory Integration">Occupational & Sensory Integration</option>
                <option value="DIRFloortime">DIRFloortime</option>
                <option value="Parent Power Coaching">Parent Power Coaching</option>
                <option value="Other">Other Therapy Disciplines</option>
              </select>
            </div>

            <div class="form-group">
              <label for="concerns-notes">Brief Developmental Concerns</label>
              <textarea id="concerns-notes" name="notes" class="form-control" placeholder="Tell us about speech, eye contact, sensory sensitivity, or behavioral challenges..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-3d btn-block btn-lg">
              Submit Consultation Request &rarr;
            </button>
          </form>
        </div>

        <!-- Contact Meta Cards & Location -->
        <div class="contact-meta-cards reveal">
          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="meta-card-content">
              <h4>Center Address</h4>
              <p>${ORG.address}</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="meta-card-content">
              <h4>Operating Timing</h4>
              <p>${ORG.timing}</p>
              <p style="font-size: 0.8rem; color: var(--color-green-deep); font-weight: 600;">Closed Sundays</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="meta-card-content">
              <h4>Direct Phone Lines</h4>
              <p>
                <a href="tel:+923444040074"><strong>+92 344 404 0074</strong></a> &middot;
                <a href="tel:+923006752325">+92 300 675 2325</a> &middot;
                <a href="tel:+9235165661">+92 35165661</a>
              </p>
            </div>
          </div>

          <div class="map-embed-card">
            <div class="map-header-bar">
              <div class="map-header-info">
                <span class="map-status-dot"></span>
                <strong>Model Town Extension Centre, Lahore</strong>
              </div>
              <span class="map-badge">Open Mon&ndash;Sat 9AM&ndash;6PM</span>
            </div>
            <div class="map-embed-frame-wrap">
              <iframe
                title="HELP Autism Pakistan Centre - Model Town Extension, Lahore Location"
                src="https://maps.google.com/maps?q=Model+Town+Extension+Lahore+Pakistan&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="map-footer-bar">
              <div class="map-address-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>P-Block, Model Town Extension, Lahore, Punjab, Pakistan</span>
              </div>
              <div class="map-btn-group">
                <a href="https://maps.google.com/?q=Model+Town+Extension+Lahore+Pakistan" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-3d">
                  Directions in Maps &rarr;
                </a>
                <a href="tel:+923444040074" class="btn btn-secondary btn-sm">
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "HELP Autism Pakistan — Therapy, Training & Awareness Centre Lahore",
    description: "HELP Autism Pakistan (A project of A&S Welfare Society) is a dedicated therapy, training, and awareness centre for autism, ADHD, and learning differences in Lahore, Pakistan led by Dr Aniqa Sohail.",
    activePage: 'home',
    content
  });

  saveFile('index.html', html);
}

// --------------------------------------------------------------------------
// 2. ABOUT.HTML
// --------------------------------------------------------------------------
function buildAboutPage() {
  const content = `
    <section class="subpage-hero">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">About Us</span>
        </nav>
        <div class="subpage-hero-grid reveal">
          <div class="subpage-hero-content">
            <span class="section-badge">Who We Are</span>
            <h1 class="subpage-hero-title">About HELP Autism Pakistan</h1>
            <p class="subpage-tagline">
              A dedicated therapy, professional clinical training, and community awareness centre in Lahore operated under the non-profit charter of A&amp;S Welfare Society.
            </p>
            <div class="subpage-hero-actions">
              <a href="contact.html" class="btn btn-primary btn-3d">Book Consultation</a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d">Chat on WhatsApp</a>
            </div>
          </div>
          <div class="subpage-hero-media">
            <div class="subpage-featured-card">
              <img src="assets/img/dr-aniqa-sohail.jpg" alt="Dr Aniqa Sohail & Center Leadership" class="subpage-featured-img founder-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg';">
              <div class="subpage-banner-badge">
                <span class="pulse-dot"></span> Clinical Leadership &middot; Dr Aniqa Sohail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="founder-grid" style="align-items: flex-start;">
          <div class="founder-card-wrap reveal">
            <div class="founder-card-offset-frame"></div>
            <div class="founder-card">
              <div class="founder-photo-box">
                <img src="assets/img/dr-aniqa-sohail.jpg" alt="Dr Aniqa Sohail" class="founder-photo" loading="lazy" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg';">
                <div class="img-fallback-panel">Dr Aniqa Sohail</div>
              </div>
              <div class="founder-info">
                <h3 class="founder-name">${ORG.director}</h3>
                <p class="founder-role">${ORG.directorTitle}</p>
                <p style="font-size: 0.85rem; color: var(--color-text-muted);">
                  Head of Paediatric Department at WTHC Lahore &middot; Mother of an Autistic Child
                </p>
              </div>
            </div>
          </div>

          <div class="reveal">
            <span class="section-badge">Our Mission &amp; Genesis</span>
            <h2 class="section-title">Bridging Medical Rigor with Maternal Empathy</h2>
            <p>
              HELP Autism Pakistan was born out of a profound need for ethical, scientifically grounded, and compassionate autism intervention in Pakistan. Founded by Dr. Aniqa Sohail, a gold medalist paediatrician from King Edward Medical College and certified ABA consultant, the centre brings international methodologies to local families.
            </p>
            <p>
              Dr. Aniqa experienced firsthand the scarcity of structured, evidence-based autism resources in Pakistan when her own son was diagnosed. Rather than accepting passive limitations, she pursued intensive training across the United States and internationally, earning master credentials in Applied Behavior Analysis (ABA), DIRFloortime, ADHD management, and Natural Play Therapy.
            </p>
            <p>
              Today, HELP Autism Pakistan stands as an integrated ecosystem where children receive coordinated multi-disciplinary care, therapists gain clinical internships, and parents are coached to become competent co-therapists in their child’s everyday environment.
            </p>

            <div class="founder-qualifications-card" style="margin-top: 2rem;">
              <h4 style="margin-bottom: 1rem;">Complete Qualifications &amp; Accreditations</h4>
              <p style="font-size: 0.92rem; line-height: 1.7; color: var(--color-text);">
                ${ORG.directorQualifications}
              </p>
            </div>
          </div>
        </div>

        <!-- 4 Core Pillars Grid -->
        <div style="margin-top: 5rem;">
          <div class="section-title-wrap reveal">
            <span class="section-badge">Our Guiding Pillars</span>
            <h2 class="section-title">The Four Pillars of HELP Autism Pakistan</h2>
            <p class="section-subtitle">
              Every therapeutic plan, classroom setup, and parent workshop is anchored by these four timeless goals.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            <div class="training-card reveal" style="padding: 1.75rem;">
              <span class="training-tag" style="background: rgba(26, 111, 196, 0.1); color: var(--color-blue);">Pillar 01</span>
              <h3 class="training-title">Communication</h3>
              <p class="training-desc">
                Giving every child a reliable voice—whether through spontaneous speech, sign, PECS visual cards, or high-tech AAC devices.
              </p>
            </div>

            <div class="training-card reveal" style="padding: 1.75rem;">
              <span class="training-tag" style="background: rgba(0, 166, 80, 0.1); color: var(--color-green-deep);">Pillar 02</span>
              <h3 class="training-title">Competence</h3>
              <p class="training-desc">
                Building practical cognitive, motor, and functional self-care skills that allow the child to meaningfully navigate home, school, and public life.
              </p>
            </div>

            <div class="training-card reveal" style="padding: 1.75rem;">
              <span class="training-tag" style="background: rgba(255, 180, 58, 0.15); color: #B37400;">Pillar 03</span>
              <h3 class="training-title">Confidence</h3>
              <p class="training-desc">
                Replacing anxiety, sensory overload, and frustration with self-efficacy, emotional resilience, and joy in positive social interaction.
              </p>
            </div>

            <div class="training-card reveal" style="padding: 1.75rem;">
              <span class="training-tag" style="background: rgba(227, 34, 39, 0.1); color: var(--color-red);">Pillar 04</span>
              <h3 class="training-title">Independence</h3>
              <p class="training-desc">
                Fostering lifelong autonomy, functional living skills, and vocational productivity so every youth can live with pride and dignity.
              </p>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 4rem;" class="reveal">
          <a href="contact.html" class="btn btn-primary btn-3d btn-lg">Schedule an Evaluation Consultation &rarr;</a>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "About Us & Founder Dr Aniqa Sohail",
    description: "Learn about HELP Autism Pakistan, our mission as a project of A&S Welfare Society, and founder Dr Aniqa Sohail's clinical credentials and vision in Lahore.",
    activePage: 'about',
    content
  });

  saveFile('about.html', html);
}

// --------------------------------------------------------------------------
// 3. PROGRAMS.HTML (ALL SERVICES & TRAININGS OVERVIEW)
// --------------------------------------------------------------------------
function buildProgramsPage() {
  const content = `
    <section class="subpage-hero">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Programs &amp; Services</span>
        </nav>
        <div class="subpage-hero-grid reveal">
          <div class="subpage-hero-content">
            <span class="section-badge">Comprehensive Clinical Offerings</span>
            <h1 class="subpage-hero-title">Therapies, Trainings &amp; Programs Overview</h1>
            <p class="subpage-tagline">
              Explore our 12 specialized therapy disciplines, professional healthcare internships, parent power cohorts, and vocational programs.
            </p>
            <div class="subpage-hero-actions">
              <a href="#all-services" class="btn btn-primary btn-3d">Explore 12 Therapies</a>
              <a href="#trainings" class="btn btn-secondary">Training Programs</a>
            </div>
          </div>
          <div class="subpage-hero-media">
            <div class="subpage-featured-card">
              <img src="https://static.wixstatic.com/media/563e77_105f7f18e8a744e9a2f643d2b11a6142~mv2.jpg/v1/crop/x_166,y_0,w_930,h_720/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/AVJADJDNVNFV.jpg" alt="HELP Autism Pakistan Clinical Programs" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80';">
              <div class="subpage-banner-badge">
                <span class="pulse-dot"></span> 12 Clinical Disciplines in Lahore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12 Services Section -->
    <section class="section" id="all-services">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Part 1 &middot; Clinical Interventions</span>
          <h2 class="section-title">12 Core Therapy Services</h2>
          <p class="section-subtitle">
            Administered by qualified therapists under pediatric clinical oversight. Click on any discipline to read its full session structure and goals.
          </p>
        </div>

        <div class="services-grid-12">
          ${SERVICES.map(s => `
            <a href="${s.slug}.html" class="service-tilt-card reveal">
              <div class="card-image-box">
                <img src="${s.image}" alt="${s.title}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <div class="img-fallback-panel">${s.title}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">${s.title}</h3>
                <p class="card-text">${s.description.substring(0, 130)}...</p>
                <span class="card-footer-link">
                  View Full Details &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Trainings Section (Knowledge Transfer) -->
    <section class="section section-knowledge-transfer" id="trainings">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Part 2 &middot; Professional &amp; Caregiver Capacity</span>
          <h2 class="section-title">6 Training &amp; Capacity Programs</h2>
          <p class="section-subtitle">
            Transferring knowledge to psychology interns, teachers, parents, and siblings to expand neurodiversity support in Pakistan.
          </p>
        </div>

        <div class="trainings-grid">
          ${TRAININGS.map(t => `
            <div class="training-card reveal">
              <div class="training-card-img-wrap">
                <img src="${t.image}" alt="${t.title}" class="training-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <span class="training-card-badge">${t.audience.split(' ')[0]}</span>
              </div>
              <div class="training-card-body">
                <span class="training-tag">${t.audience.split(' ')[0]}</span>
                <h3 class="training-title">${t.title}</h3>
                <p class="training-desc">${t.summary}</p>
                <div style="margin-top: auto;">
                  <p style="font-size: 0.82rem; color: var(--color-text-subtle); margin-bottom: 0.75rem;">
                    <strong>Duration:</strong> ${t.duration}
                  </p>
                  <a href="${t.slug}.html" class="btn btn-secondary btn-sm btn-block">Read Program Curriculum &rarr;</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Parent Power Anchor -->
        <div class="parent-power-banner reveal" id="parent-power" style="margin-top: 4rem;">
          <div class="parent-power-grid">
            <div>
              <span class="section-badge">Co-Therapy Focus</span>
              <h3>Power Parent Programs &amp; Sibling Support</h3>
              <p>
                Therapy continues 24/7 in the home environment. We teach parents the behavioral science and emotional attunement required to turn everyday activities into developmental growth.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <a href="parent-trainings.html" class="btn btn-green btn-3d">Parent Trainings</a>
                <a href="sibling-trainings.html" class="btn btn-secondary">Sibling Workshops</a>
              </div>
            </div>
            <div style="text-align: center;">
              <img src="https://static.wixstatic.com/media/563e77_105f7f18e8a744e9a2f643d2b11a6142~mv2.jpg/v1/crop/x_166,y_0,w_930,h_720/fill/w_598,h_460,al_c,q_80,enc_avif,quality_auto/AVJADJDNVNFV.jpg" alt="Parent and Child Session" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-height: 260px;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80';">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "All Programs, Therapies & Trainings Overview",
    description: "Complete overview of the 12 clinical therapy services, 6 training programs, parent power cohorts, and internships at HELP Autism Pakistan.",
    activePage: 'programs',
    content
  });

  saveFile('programs.html', html);
}

// --------------------------------------------------------------------------
// 4. RESOURCES.HTML (RESOURCE HUB & 20 VIDEO LIBRARIES)
// --------------------------------------------------------------------------
function buildResourcesPage() {
  const content = `
    <section class="subpage-hero">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Free Resources</span>
        </nav>
        <div class="subpage-hero-grid reveal">
          <div class="subpage-hero-content">
            <span class="section-badge">Open Access Hub</span>
            <h1 class="subpage-hero-title">Free Autism Resources &amp; Video Libraries</h1>
            <p class="subpage-tagline">
              Empowering parents, teachers, and therapists across Pakistan with freely accessible video demonstrations, visual schedules, books, and handouts.
            </p>
            <div class="subpage-hero-actions">
              <a href="#video-libraries" class="btn btn-primary btn-3d">Watch 20 Video Libraries</a>
              <a href="#resource-collections" class="btn btn-secondary">Download Guides &amp; Handouts</a>
            </div>
          </div>
          <div class="subpage-hero-media">
            <div class="subpage-featured-card">
              <img src="https://static.wixstatic.com/media/563e77_17fe3637e6ee448c9ae7fc9038234be2~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/563e77_17fe3637e6ee448c9ae7fc9038234be2~mv2.jpg" alt="HELP Autism Pakistan Free Resources" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80';">
              <div class="subpage-banner-badge">
                <span class="pulse-dot"></span> Free Open-Access Clinical Library
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Resource Collections -->
    <section class="section" id="resource-collections">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Downloads &amp; Knowledge Base</span>
          <h2 class="section-title">Resource Collections</h2>
          <p class="section-subtitle">
            Browse our curated collections of instructional materials, scientific literature, and family guidelines.
          </p>
        </div>

        <div class="trainings-grid">
          ${RESOURCES.map(r => `
            <div class="training-card reveal">
              <div class="training-card-img-wrap">
                <img src="${r.image}" alt="${r.title}" class="training-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80';">
                <span class="training-card-badge">Collection</span>
              </div>
              <div class="training-card-body">
                <span class="training-tag" style="background: rgba(26, 111, 196, 0.08); color: var(--color-blue);">Reference Hub</span>
                <h3 class="training-title">${r.title}</h3>
                <p class="training-desc">${r.desc}</p>
                <div style="margin-top: auto;">
                  <a href="${r.slug}.html" class="btn btn-secondary btn-sm btn-block">Explore ${r.title.split(' ')[0]} &rarr;</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 20 Free Video Libraries (Clean High-Contrast Grid) -->
    <section class="section video-section-dark" id="video-libraries">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Clinical Demonstrations</span>
          <h2 class="section-title">20 Free Video Libraries</h2>
          <p class="section-subtitle">
            Watch real therapy sessions, discrete trial demos, sensory exercises, and speech routines led by Dr. Aniqa Sohail and our clinical therapists.
          </p>
        </div>

        <div class="videos-grid-20">
          ${VIDEOS.map((v, index) => `
            <a href="${v.slug}.html" class="video-library-card reveal" title="${v.title}">
              <div class="video-card-thumb-wrap">
                <img src="${v.image}" alt="${v.title}" class="video-card-thumb" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
                <div class="video-play-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <div class="video-card-body">
                <span class="video-card-num">Library #${String(index + 1).padStart(2, '0')}</span>
                <h3 class="video-card-title">${v.title}</h3>
                <p class="video-card-topic">${v.topic}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "Free Autism Resources & 20 Video Libraries",
    description: "Browse free autism resources, clinical research journals, download books, and watch 20 video libraries by HELP Autism Pakistan in Lahore.",
    activePage: 'resources',
    content
  });

  saveFile('resources.html', html);
}

// --------------------------------------------------------------------------
// 5. CONTACT.HTML
// --------------------------------------------------------------------------
function buildContactPage() {
  const content = `
    <section class="subpage-hero">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Contact Us</span>
        </nav>
        <div class="subpage-hero-grid reveal">
          <div class="subpage-hero-content">
            <span class="section-badge">Reach Our Centre</span>
            <h1 class="subpage-hero-title">Contact &amp; Book a Consultation</h1>
            <p class="subpage-tagline">
              We are here to support your child and family. Visit our centre in Model Town Extension, Lahore, or call us directly.
            </p>
            <div class="subpage-hero-actions">
              <a href="tel:+923444040074" class="btn btn-primary btn-3d">Call +92 344 404 0074</a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d">WhatsApp Directly</a>
            </div>
          </div>
          <div class="subpage-hero-media">
            <div class="subpage-featured-card">
              <img src="https://static.wixstatic.com/media/563e77_417d47225102434daaeec3b8ceea9be8~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/563e77_417d47225102434daaeec3b8ceea9be8~mv2.jpg" alt="HELP Autism Pakistan Lahore Centre" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80';">
              <div class="subpage-banner-badge">
                <span class="pulse-dot"></span> P Block, Model Town Ext, Lahore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container contact-section-grid">
        <div class="contact-card reveal">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Send an Online Inquiry</h2>
          <p style="margin-bottom: 2rem;">
            Whether you are seeking an initial diagnosis, ongoing therapy, or parent coaching, our intake coordinators will guide your next steps.
          </p>

          <form id="contact-full-form" class="consultation-form">
            <div class="form-group">
              <label for="contact-name">Parent or Guardian Full Name *</label>
              <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g. Tariq Mehmood" required>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label for="contact-phone">Phone / WhatsApp *</label>
                <input type="tel" id="contact-phone" name="phone" class="form-control" placeholder="0344 404 0074" required>
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address</label>
                <input type="email" id="contact-email" name="email" class="form-control" placeholder="parent@example.com">
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label for="child-details">Child Age &amp; Gender</label>
                <input type="text" id="child-details" name="child" class="form-control" placeholder="e.g. 5 years, Male">
              </div>
              <div class="form-group">
                <label for="contact-service">Service of Interest</label>
                <select id="contact-service" name="service" class="form-control">
                  <option value="Initial Diagnostic Assessment">Initial Diagnostic Assessment</option>
                  <option value="ABA Therapy">ABA Therapy</option>
                  <option value="Speech & Language Therapy">Speech & Language Therapy</option>
                  <option value="Occupational Therapy">Occupational Therapy</option>
                  <option value="Sensory Integration">Sensory Integration</option>
                  <option value="DIRFloortime">DIRFloortime</option>
                  <option value="TEACCH Program">TEACCH Program</option>
                  <option value="Parent Training Cohort">Parent Training Cohort</option>
                  <option value="Clinical Internship">Clinical Internship</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="contact-message">Tell Us About Your Child's Needs &amp; Goals</label>
              <textarea id="contact-message" name="message" class="form-control" placeholder="Include any existing diagnoses, school difficulties, speech delays, or sensory triggers..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-3d btn-block btn-lg">
              Send Message to Clinical Team &rarr;
            </button>
          </form>
        </div>

        <!-- Location & Direct Contacts -->
        <div class="contact-meta-cards reveal">
          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="meta-card-content">
              <h4>Physical Centre Address</h4>
              <p><strong>HELP Autism Pakistan</strong></p>
              <p>${ORG.address}</p>
              <p style="font-size: 0.85rem; color: var(--color-blue); margin-top: 0.25rem;">A project of A&amp;S Welfare Society</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="meta-card-content">
              <h4>Working Hours</h4>
              <p>${ORG.timing}</p>
              <p style="font-size: 0.85rem; color: var(--color-green-deep); font-weight: 600;">Sunday: Closed for deep sanitization</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="meta-card-content">
              <h4>Direct Telephone &amp; Mobile</h4>
              <p><a href="tel:+923444040074"><strong>+92 344 404 0074</strong></a> (Direct WhatsApp)</p>
              <p><a href="tel:+923006752325">+92 300 675 2325</a></p>
              <p><a href="tel:+9235165661">+92 35165661</a> (Landline)</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div class="meta-card-content">
              <h4>Email Communications</h4>
              <p><a href="mailto:${ORG.email}">${ORG.email}</a></p>
              <p style="font-size: 0.82rem; color: var(--color-text-subtle);">Direct inbox of Dr. Aniqa Sohail</p>
            </div>
          </div>

          <!-- Interactive Google Maps Box -->
          <div class="map-embed-card">
            <div class="map-header-bar">
              <div class="map-header-info">
                <span class="map-status-dot"></span>
                <strong>Model Town Extension Centre, Lahore</strong>
              </div>
              <span class="map-badge">Open Mon&ndash;Sat 9AM&ndash;6PM</span>
            </div>
            <div class="map-embed-frame-wrap">
              <iframe
                title="HELP Autism Pakistan Centre - Model Town Extension, Lahore Location"
                src="https://maps.google.com/maps?q=Model+Town+Extension+Lahore+Pakistan&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="map-footer-bar">
              <div class="map-address-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>P-Block, Model Town Extension, Lahore, Punjab, Pakistan</span>
              </div>
              <div class="map-btn-group">
                <a href="https://maps.google.com/?q=Model+Town+Extension+Lahore+Pakistan" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-3d">
                  Directions in Maps &rarr;
                </a>
                <a href="tel:+923444040074" class="btn btn-secondary btn-sm">
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "Contact HELP Autism Pakistan & Directions Lahore",
    description: "Contact HELP Autism Pakistan in Model Town Extension, Lahore. Phone: +92 344 404 0074, Email: aniqasohail@gmail.com. Book a clinical consultation.",
    activePage: 'contact',
    content
  });

  saveFile('contact.html', html);
}

// --------------------------------------------------------------------------
// 6. BUILD 12 SERVICE PAGES (WITH TOP FEATURED HERO BANNER)
// --------------------------------------------------------------------------
function buildServicePages() {
  SERVICES.forEach((service, index) => {
    const filename = `${service.slug}.html`;

    const content = `
      <section class="subpage-hero">
        <div class="container">
          <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep">/</span>
            <a href="programs.html">Services</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${service.title}</span>
          </nav>
          <div class="subpage-hero-grid reveal">
            <div class="subpage-hero-content">
              <span class="section-badge">Therapy Discipline #${String(index + 1).padStart(2, '0')}</span>
              <h1 class="subpage-hero-title">${service.title}</h1>
              <p class="subpage-tagline">${service.tagline}</p>
              <div class="subpage-hero-actions">
                <a href="contact.html" class="btn btn-primary btn-3d">Book Clinical Assessment</a>
                <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d">WhatsApp Inquiries</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card">
                <img src="${service.image}" alt="${service.title} at HELP Autism Pakistan" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> HELP Autism Pakistan Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pill bar to easily switch to any other service -->
      <div class="container">
        <div class="pills-scroll-bar" aria-label="All Services Navigation">
          ${SERVICES.map(s => `
            <a href="${s.slug}.html" class="pill-nav-item ${s.slug === service.slug ? 'active' : ''}">${s.title}</a>
          `).join('')}
        </div>
      </div>

      <section class="section" style="padding-top: 2rem;">
        <div class="container service-detail-grid">
          <div class="service-main-col reveal">
            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                What It Is
              </h3>
              <p>${service.description}</p>
              <p>
                At HELP Autism Pakistan, clinical protocols are directed by Dr. Aniqa Sohail. We emphasize individualized measurement, positive reinforcement schedules, and gradual skill mastery that transfers into real household and academic settings.
              </p>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Who It's For
              </h3>
              <p>${service.whoFor}</p>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-sun)" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                What a Session Looks Like
              </h3>
              <p>${service.sessionLook}</p>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Core Therapeutic Goals
              </h3>
              <ul>
                ${service.goals.map(g => `<li>${g}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Sidebar Booking Card -->
          <div class="service-sidebar-col reveal">
            <div class="service-sidebar-card">
              <img src="${service.image}" alt="${service.title} at HELP Autism Pakistan" class="service-sidebar-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80';">
              <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">${service.title} Consultation</h3>
              <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">
                Schedule an initial assessment and personalized roadmap for your child in Lahore.
              </p>
              <a href="contact.html" class="btn btn-primary btn-3d btn-block" style="margin-bottom: 0.75rem;">
                Book an Assessment &rarr;
              </a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-block">
                Inquire on WhatsApp
              </a>

              <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted);">
                <p style="margin-bottom: 0.4rem;"><strong>Center Timings:</strong> ${ORG.timing}</p>
                <p style="margin-bottom: 0.4rem;"><strong>Location:</strong> Model Town Ext, Lahore</p>
                <p style="margin-bottom: 0;"><strong>Phone:</strong> <a href="tel:+923444040074">+92 344 404 0074</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const html = renderHtmlEnvelope({
      title: `${service.title} — Evidence-Based Autism Therapy Lahore`,
      description: `${service.title} at HELP Autism Pakistan: ${service.tagline}. Evidence-based intervention led by Dr Aniqa Sohail in Lahore, Pakistan.`,
      activePage: 'programs',
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 7. BUILD 6 TRAINING PAGES (WITH TOP FEATURED HERO BANNER)
// --------------------------------------------------------------------------
function buildTrainingPages() {
  TRAININGS.forEach((training, index) => {
    const filename = `${training.slug}.html`;

    const content = `
      <section class="subpage-hero">
        <div class="container">
          <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep">/</span>
            <a href="programs.html#trainings">Trainings</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${training.title}</span>
          </nav>
          <div class="subpage-hero-grid reveal">
            <div class="subpage-hero-content">
              <span class="section-badge">Training Program #${String(index + 1).padStart(2, '0')}</span>
              <h1 class="subpage-hero-title">${training.title}</h1>
              <p class="subpage-tagline">${training.summary}</p>
              <div class="subpage-hero-actions">
                <a href="contact.html" class="btn btn-primary btn-3d">Enroll / Inquire Now</a>
                <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d">Ask on WhatsApp</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card">
                <img src="${training.image}" alt="${training.title} at HELP Autism Pakistan" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> Clinical Capacity Building &middot; Lahore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pill bar for trainings -->
      <div class="container">
        <div class="pills-scroll-bar" aria-label="All Training Programs Navigation">
          ${TRAININGS.map(t => `
            <a href="${t.slug}.html" class="pill-nav-item ${t.slug === training.slug ? 'active' : ''}">${t.title.split(' ')[0]} Training</a>
          `).join('')}
        </div>
      </div>

      <section class="section" style="padding-top: 2rem;">
        <div class="container service-detail-grid">
          <div class="service-main-col reveal">
            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                Course Overview &amp; Learning Outcomes
              </h3>
              <p>${training.summary}</p>
              <p>
                Led by Dr. Aniqa Sohail and senior multidisciplinary clinical staff, this curriculum bridges international theoretical science with hands-on application in Pakistani family dynamics and educational ecosystems.
              </p>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                Core Modules &amp; Practicum
              </h3>
              <ul>
                <li><strong>Theoretical Foundation &amp; Behavioral Principles:</strong> Understanding neurodivergent learning profiles, sensory integration, and evidence-based methodologies.</li>
                <li><strong>Functional Communication &amp; Positive Reinforcement:</strong> Discrete trial teaching, PECS/AAC implementation, and naturalistic developmental strategies.</li>
                <li><strong>De-escalation &amp; Meltdown Management:</strong> Identifying antecedent triggers, functional behavior assessments, and proactive sensory diet planning.</li>
                <li><strong>Real-World Home &amp; Classroom Generalization:</strong> Practical hands-on coaching and supervised practicum guided by Dr. Aniqa Sohail.</li>
              </ul>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-sun)" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Target Audience &amp; Prerequisites
              </h3>
              <p>${training.audience}</p>
              <p>
                Prior background in psychology, speech pathology, medicine, or early childhood education is beneficial for certification tracks; parent tracks require only love, commitment, and active participation.
              </p>
            </div>
          </div>

          <div class="service-sidebar-col reveal">
            <div class="service-sidebar-card">
              <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">Program Admission</h3>
              <div style="margin-bottom: 1.25rem;">
                <p style="font-size: 0.88rem; margin-bottom: 0.4rem;"><strong>Format:</strong> In-person Clinical Practicum &amp; Seminars</p>
                <p style="font-size: 0.88rem; margin-bottom: 0.4rem;"><strong>Duration:</strong> ${training.duration}</p>
                <p style="font-size: 0.88rem; margin-bottom: 0;"><strong>Credential:</strong> Certificate of Completion</p>
              </div>

              <a href="contact.html" class="btn btn-primary btn-3d btn-block" style="margin-bottom: 0.75rem;">
                Apply for Next Cohort &rarr;
              </a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-block">
                Inquire on WhatsApp
              </a>

              <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted);">
                <p style="margin-bottom: 0.4rem;"><strong>Location:</strong> Model Town Ext, Lahore</p>
                <p style="margin-bottom: 0;"><strong>Phone:</strong> <a href="tel:+923444040074">+92 344 404 0074</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const html = renderHtmlEnvelope({
      title: `${training.title} — Professional Training & Workshops`,
      description: `${training.title} at HELP Autism Pakistan: ${training.summary}. Clinical training in Lahore led by Dr Aniqa Sohail.`,
      activePage: 'programs',
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 8. BUILD 20 VIDEO LIBRARY PAGES (WITH TOP FEATURED HERO BANNER)
// --------------------------------------------------------------------------
function buildVideoPages() {
  VIDEOS.forEach((video, index) => {
    const filename = `${video.slug}.html`;

    const content = `
      <section class="subpage-hero">
        <div class="container">
          <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep">/</span>
            <a href="resources.html">Resources</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${video.title}</span>
          </nav>
          <div class="subpage-hero-grid reveal">
            <div class="subpage-hero-content">
              <span class="section-badge">Video Archive #${String(index + 1).padStart(2, '0')}</span>
              <h1 class="subpage-hero-title">${video.title}</h1>
              <p class="subpage-tagline">${video.topic}</p>
              <div class="subpage-hero-actions">
                <a href="#video-player" class="btn btn-primary btn-3d">Watch Video Demonstration</a>
                <a href="resources.html#video-libraries" class="btn btn-secondary">All 20 Libraries</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card">
                <img src="${video.image}" alt="${video.title} Video Demonstration" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> Clinical Video Demonstration &middot; Lahore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pill bar for all 20 video libraries -->
      <div class="container">
        <div class="pills-scroll-bar" aria-label="All Video Libraries Navigation">
          ${VIDEOS.map(v => `
            <a href="${v.slug}.html" class="pill-nav-item ${v.slug === video.slug ? 'active' : ''}">${v.title.replace(' Videos', '')}</a>
          `).join('')}
        </div>
      </div>

      <section class="section" style="padding-top: 1.5rem;" id="video-player">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-main-col reveal">
              <!-- Video Screen Placeholder / Player Card -->
              <div class="video-player-box">
                <div class="video-screen-aspect">
                  <div class="video-screen-content">
                    <a href="${ORG.oldSiteUrl}/${video.slug}" target="_blank" rel="noopener noreferrer" class="video-play-btn-large" aria-label="Watch video session on original portal">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </a>
                    <h3 style="color: #FFFFFF; margin-bottom: 0.5rem; font-size: 1.25rem;">Watch Video Collection: ${video.title}</h3>
                    <p style="color: #9BB3CB; font-size: 0.88rem; max-width: 500px; margin-bottom: 1.25rem;">
                      Stream full clinical session recordings, therapist lectures, and step-by-step demonstrations.
                    </p>
                    <a href="${ORG.oldSiteUrl}/${video.slug}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-sm">
                      Watch now on HELP portal &rarr;
                    </a>
                  </div>
                </div>
                <div class="video-caption-strip">
                  <span style="font-size: 0.85rem; color: #CBDCEE;">
                    &bull; Recorded at HELP Autism Pakistan Therapy Centre, Lahore
                  </span>
                  <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" style="font-size: 0.85rem; color: var(--color-accent-sun); font-weight: 700;">
                    Ask Dr. Aniqa a question about this video &rarr;
                  </a>
                </div>
              </div>

              <div class="service-info-block">
                <h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  What You'll Typically Find in This Library
                </h3>
                <p>
                  This video archive covers real, practical implementation of <strong>${video.title}</strong>, demonstrating techniques tested with neurodiverse children. Rather than pure theory, you observe our clinicians and Dr. Aniqa Sohail illustrating cues, reinforcement timings, physical prompts, and emotional attunement.
                </p>
                <ul style="margin-top: 1rem;">
                  <li>Direct 1:1 therapist-to-child intervention sessions</li>
                  <li>How to prompt without triggering resistance or meltdowns</li>
                  <li>Pacing, visual cues, and positive reinforcer delivery</li>
                  <li>Translating centre exercises into daily home routines</li>
                </ul>
              </div>
            </div>

            <div class="service-sidebar-col reveal">
              <div class="service-sidebar-card">
                <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">Need Individualized Help?</h3>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">
                  While videos provide powerful conceptual guidance, every autistic child has a unique sensory, behavioral, and communication profile.
                </p>
                <a href="contact.html" class="btn btn-primary btn-3d btn-block" style="margin-bottom: 0.75rem;">
                  Book a Consultation &rarr;
                </a>
                <a href="parent-trainings.html" class="btn btn-secondary btn-block">
                  View Parent Trainings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const html = renderHtmlEnvelope({
      title: `${video.title} — Free Clinical Video Archives`,
      description: `Watch free clinical demonstration videos for ${video.title} at HELP Autism Pakistan. Practical techniques for parents, teachers, and therapists in Lahore.`,
      activePage: 'resources',
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 9. BUILD 5 RESOURCE PAGES (WITH TOP FEATURED HERO BANNER)
// --------------------------------------------------------------------------
function buildResourcePages() {
  RESOURCES.forEach((res, index) => {
    const filename = `${res.slug}.html`;

    const content = `
      <section class="subpage-hero">
        <div class="container">
          <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep">/</span>
            <a href="resources.html">Resources</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${res.title}</span>
          </nav>
          <div class="subpage-hero-grid reveal">
            <div class="subpage-hero-content">
              <span class="section-badge">Resource Hub #${String(index + 1).padStart(2, '0')}</span>
              <h1 class="subpage-hero-title">${res.title}</h1>
              <p class="subpage-tagline">${res.desc}</p>
              <div class="subpage-hero-actions">
                <a href="#resource-access" class="btn btn-primary btn-3d">Access Materials</a>
                <a href="resources.html" class="btn btn-secondary">All Resources</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card">
                <img src="${res.image}" alt="${res.title} Collection" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> Open Knowledge &middot; HELP Autism Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pill bar for resources -->
      <div class="container">
        <div class="pills-scroll-bar" aria-label="All Resources Navigation">
          ${RESOURCES.map(r => `
            <a href="${r.slug}.html" class="pill-nav-item ${r.slug === res.slug ? 'active' : ''}">${r.title.split(' ')[0]}</a>
          `).join('')}
        </div>
      </div>

      <section class="section" style="padding-top: 1.5rem;" id="resource-access">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-main-col reveal">
              <div class="service-info-block">
                <h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Overview &amp; Available Materials
                </h3>
                <p>${res.desc}</p>
                <p>
                  As part of A&amp;S Welfare Society's charitable charter, HELP Autism Pakistan curates high-utility references, downloadable templates, and clinical literature to demystify autism spectrum disorder, ADHD, and sensory processing differences.
                </p>
              </div>

              <!-- Media / Resource Card -->
              <div class="service-info-block" style="text-align: center; padding: 3rem 2rem;">
                <h3 style="color: var(--color-navy); justify-content: center; margin-bottom: 0.75rem;">Access the ${res.title} Collection</h3>
                <p style="color: var(--color-text-muted); max-width: 580px; margin: 0 auto 1.5rem;">
                  Download handouts, view verified external reading materials, or access our complete digital library hosted on the HELP archive portal.
                </p>
                <a href="${ORG.oldSiteUrl}/${res.slug}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-3d btn-lg">
                  Open Digital Resource Archive &rarr;
                </a>
              </div>
            </div>

            <div class="service-sidebar-col reveal">
              <div class="service-sidebar-card">
                <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">Consult Our Specialists</h3>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">
                  Need tailored guidance on implementing these resources for your child or classroom?
                </p>
                <a href="contact.html" class="btn btn-primary btn-3d btn-block" style="margin-bottom: 0.75rem;">
                  Book Consultation &rarr;
                </a>
                <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-block">
                  Ask via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const html = renderHtmlEnvelope({
      title: `${res.title} — Autism Resources & Downloads`,
      description: `${res.title} at HELP Autism Pakistan: ${res.desc}. Curated reference materials and clinical handouts in Lahore.`,
      activePage: 'resources',
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 10. GENERATE README.TXT
// --------------------------------------------------------------------------
function buildReadme() {
  const content = `=============================================================================
HELP AUTISM PAKISTAN — REDESIGNED WEBSITE
A Project of A&S Welfare Society
=============================================================================
Directory of all 48 generated production HTML pages and assets:

├── index.html                    (Homepage: 3D Medallion, Stats, Founder, Services, Trainings, Videos, Contact)
├── about.html                    (About Us: Mission, Dr. Aniqa Sohail biography & credentials, 4 Pillars)
├── programs.html                 (Programs: 12 Services + 6 Trainings overview)
├── resources.html                (Resources: Curated collections + 20 Video libraries)
├── contact.html                  (Contact: Direct lines, Timing, Address, Consultation Form, Google Maps)
│
├── (12 Therapy Services)
│   ├── aba-therapy.html
│   ├── speech-language-therapy.html
│   ├── occupational-therapy.html
│   ├── sensory-integration.html
│   ├── floortime-approach.html
│   ├── TEACCH-therapy.html
│   ├── play-therapy.html
│   ├── music-therapy.html
│   ├── functional-living-skills.html
│   ├── academics-remedial.html
│   ├── vocational-training.html
│   └── diagnostic-evaluation.html
│
├── (6 Training Programs)
│   ├── internships.html
│   ├── parent-trainings.html
│   ├── hands-on-training.html
│   ├── sibling-trainings.html
│   ├── certificate-courses.html
│   └── community-awareness.html
│
├── (20 Video Library Archives)
│   ├── aba-videos.html
│   ├── speech-language-videos.html
│   ├── occupational-therapy-videos.html
│   ├── sensory-integration-videos.html
│   ├── floor-time-videos.html
│   ├── son-rise-videos.html
│   ├── social-skills-videos.html
│   ├── academics-remedial-videos.html
│   ├── functional-living-skills-videos.html
│   ├── vocational-training-videos.html
│   ├── play-videos.html
│   ├── hands-on-trainings-videos.html
│   ├── cognitive-behavior-videos.html
│   ├── inclusive-education-videos.html
│   ├── teacch-intervention-videos.html
│   ├── pecs-visual-videos.html
│   ├── peer-mediated-videos.html
│   ├── parent-power-videos.html
│   ├── nutrition-supplements-videos.html
│   └── rdi-videos.html
│
├── (5 Resource Collections)
│   ├── journals.html
│   ├── books.html
│   ├── free-consultations.html
│   ├── autism-resource-library.html
│   └── photos-library.html
│
└── assets/
    ├── css/style.css            (All responsive styles, variables, 3D effects)
    ├── js/main.js               (Tilt, parallax, counter, drawer, overlay)
    └── img/logo.png             (Brand logo)
`;

  saveFile('README.txt', content);
}

// --------------------------------------------------------------------------
// MAIN EXECUTION
// --------------------------------------------------------------------------
console.log('--- Generating All 48 Pages for HELP Autism Pakistan ---');
buildIndexPage();
buildAboutPage();
buildProgramsPage();
buildResourcesPage();
buildContactPage();
buildServicePages();
buildTrainingPages();
buildVideoPages();
buildResourcePages();
buildReadme();
console.log('--- Successfully Built All 48 Pages and Assets ---');
