import fs from 'fs';
import path from 'path';
import {
  ORG,
  SERVICES,
  TRAININGS,
  VIDEOS,
  RESOURCES,
  renderHtmlEnvelope,
  ROOT_DIR
} from './template_engine.mjs';
import { GALLERY_CATEGORIES, GALLERY_PHOTOS } from './gallery_data.mjs';

function saveFile(filename, html) {
  const filePath = path.join(ROOT_DIR, filename);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Generated: ${filename}`);
}

// --------------------------------------------------------------------------
// 1. INDEX.HTML (HOMEPAGE — FOCUSED PRODUCTION HIERARCHY)
// --------------------------------------------------------------------------
function buildIndexPage() {
  // Show 6 core foundational therapies on homepage (ABA, Speech, OT, Sensory, Floortime, TEACCH)
  const coreServices = SERVICES.slice(0, 6);

  const content = `
    <!-- 1. Hero Section -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <!-- Hero Text Column -->
        <div class="hero-content reveal">
          <div class="hero-badge-row">
            <span class="badge badge-accent">A project of A&amp;S Welfare Society</span>
            <span class="badge badge-green">P Block, Model Town Ext, Lahore</span>
          </div>

          <h1 class="hero-headline">
            Empowering Autistic Children Towards <span class="accent">Independence</span>, Confidence &amp; Communication.
          </h1>

          <p class="hero-intro">
            HELP Autism Pakistan provides evidence-based, multidisciplinary therapy and compassionate parent training led by <strong>Dr. Aniqa Sohail</strong> (Gold Medalist Paediatrician, Certified ABA Consultant). We help every child unlock their fullest potential through individualized clinical care in Lahore.
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

        <!-- 3D Hero Medallion Column (Calm, Healthcare-Grade) -->
        <div class="hero-visual-stage reveal">
          <div class="medallion-container" id="medallion-disc" aria-label="HELP Autism Pakistan Interactive Seal">
            <div class="medallion-disc">
              <img src="assets/img/logo.png" alt="HELP Autism Pakistan Official Logo" class="medallion-logo" loading="eager">
            </div>

            <!-- 4 Floating Pill Chips -->
            <a href="aba-therapy.html" class="floating-chip chip-1" title="Applied Behavior Analysis &amp; Speech">
              <span class="chip-dot blue"></span>
              <span class="chip-text">ABA &amp; Speech</span>
            </a>

            <a href="parent-trainings.html" class="floating-chip chip-2" title="Empowering Parents as Co-Therapists">
              <span class="chip-dot green"></span>
              <span class="chip-text">Parent Power</span>
            </a>

            <a href="certificate-courses.html" class="floating-chip chip-3" title="Professional Certificate Courses">
              <span class="chip-dot sun"></span>
              <span class="chip-text">Certifications</span>
            </a>

            <a href="resources.html#video-libraries" class="floating-chip chip-4" title="20 Free Video Libraries">
              <span class="chip-dot red"></span>
              <span class="chip-text">Free Videos</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. About & Organization Introduction (Concise Overview) -->
    <section class="section about-intro-section" id="about-intro">
      <div class="container">
        <div class="about-intro-grid reveal">
          <div class="about-intro-text">
            <span class="section-badge">Who We Are</span>
            <h2 class="section-title">A Dedicated Therapy &amp; Training Centre in Lahore</h2>
            <p>
              Operating under the charitable non-profit charter of <strong>A&amp;S Welfare Society</strong>, <strong>HELP Autism Pakistan</strong> provides comprehensive multidisciplinary care for children with Autism Spectrum Disorder (ASD), ADHD, and developmental delays.
            </p>
            <p>
              Located in Model Town Extension, Lahore, our centre combines international clinical standards with deep parental involvement, ensuring that therapeutic gains made at our facility carry over naturally into home, school, and community life.
            </p>
            <div style="margin-top: 1.5rem;">
              <a href="about.html" class="btn btn-secondary">Learn About Our Story &amp; Mission &rarr;</a>
            </div>
          </div>

          <div class="about-intro-stats">
            <div class="stats-grid">
              <div class="stat-item reveal">
                <div class="stat-number" data-counter="12">12</div>
                <div class="stat-label">Therapy Disciplines</div>
                <div class="stat-sub">Specialized 1:1 Care</div>
              </div>

              <div class="stat-item reveal">
                <div class="stat-number" data-counter="20">20</div>
                <div class="stat-label">Free Video Libraries</div>
                <div class="stat-sub">Open-Access Tutorials</div>
              </div>

              <div class="stat-item reveal">
                <div class="stat-number" data-counter="6">6</div>
                <div class="stat-label">Training Programs</div>
                <div class="stat-sub">Parents, Interns &amp; Clinicians</div>
              </div>

              <div class="stat-item reveal">
                <div class="stat-number">9–5</div>
                <div class="stat-label">Mon &ndash; Sat Schedule</div>
                <div class="stat-sub">Model Town Ext, Lahore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Services Section (Curated 6 Core Therapies Grid) -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Evidence-Based Clinical Care</span>
          <h2 class="section-title">Core Therapy Disciplines</h2>
          <p class="section-subtitle">
            Every child receives a personalized, multidisciplinary plan crafted for tangible developmental milestones.
          </p>
        </div>

        <div class="services-grid-12">
          ${coreServices.map(s => `
            <article class="service-tilt-card reveal">
              <div class="card-image-box">
                <img src="${s.image}" alt="${s.title} at HELP Autism Pakistan" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                <div class="img-fallback-panel">${s.title}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">${s.title}</h3>
                <p class="card-text">${s.description.substring(0, 125)}...</p>
                <a href="${s.slug}.html" class="card-footer-link" aria-label="Learn more about ${s.title}">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;" class="reveal">
          <a href="programs.html" class="btn btn-primary btn-3d btn-lg">View All 12 Therapy Services &rarr;</a>
        </div>
      </div>
    </section>

    <!-- 4. Founder / Clinical Leadership Section -->
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
          <span class="section-badge">Leadership &amp; Clinical Direction</span>
          <h2 class="section-title">Founded with medical expertise and a mother’s devotion.</h2>
          <p>
            HELP Autism Pakistan was established by <strong>Dr. Aniqa Sohail</strong>, a paediatrician and gold medalist from King Edward Medical College. As the mother of an autistic son, Dr. Aniqa combines international clinical training with maternal empathy and practical parent-first guidance.
          </p>
          <p>
            Operating under the non-profit charter of <strong>A&amp;S Welfare Society</strong>, the centre delivers structured multi-disciplinary therapies, professional clinician training, and community acceptance initiatives in Lahore.
          </p>

          <div class="founder-qualifications-card">
            <h4>Key Credentials &amp; Qualifications</h4>
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
                <span>Head of Paediatric Dept at WTHC Lahore</span>
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
            </div>
            <div style="margin-top: 1.25rem;">
              <a href="about.html#founder" class="btn btn-secondary btn-sm">Read Full Biography &amp; Vision &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Parent Support Section (Coaching, Siblings, Guidance) -->
    <section class="section section-knowledge-transfer" id="parent-support">
      <div class="container">
        <div class="parent-power-banner reveal">
          <div class="parent-power-grid">
            <div>
              <span class="section-badge">Caregiver Empowerment</span>
              <h2 class="parent-power-title" style="color: #FFFFFF; margin-bottom: 1rem;">Power Parent Programs &amp; Sibling Support</h2>
              <p style="color: #CBDCEE; margin-bottom: 1.5rem; line-height: 1.7;">
                Parents are a child's foremost advocates and lifelong co-therapists. Our training workshops equip mothers, fathers, and siblings with practical guidance for de-escalating meltdowns, building daily communication routines, and fostering loving, neuro-inclusive family environments.
              </p>
              <div class="parent-power-actions" style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="parent-trainings.html" class="btn btn-green btn-3d">Explore Parent Programs</a>
                <a href="sibling-trainings.html" class="btn btn-secondary">Sibling Support Sessions</a>
              </div>
            </div>
            <div style="text-align: center;">
              <img src="assets/img/migrated/563e77_701ea7fec9a543f68a7166194aba6aec.jpg" alt="Parent &amp; Child Training Group" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-height: 260px; margin: 0 auto; width: 100%; object-fit: cover;" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Free Resources Hub Section (Clear, Focused Highlights) -->
    <section class="section" id="resources-hub">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="section-badge">Free Community Knowledge</span>
          <h2 class="section-title">Free Autism Resource Hub</h2>
          <p class="section-subtitle">
            Open-access clinical video demonstrations, downloadable visual schedules, research papers, and curated reading lists for families and educators.
          </p>
        </div>

        <div class="trainings-grid">
          <div class="training-card reveal">
            <div class="training-card-img-wrap">
              <img src="assets/img/migrated/563e77_b0f2574fbdf04ccdb5a7bb3ceedab97c.jpg" alt="20 Free Video Libraries" class="training-card-img" loading="lazy">
              <span class="training-card-badge">20 Categories</span>
            </div>
            <div class="training-card-body">
              <h3 class="training-title">20 Free Video Libraries</h3>
              <p class="training-desc">Step-by-step video archives covering ABA, speech stimulation, sensory diet, functional living, and academic readiness.</p>
              <div style="margin-top: auto;">
                <a href="resources.html#video-libraries" class="btn btn-secondary btn-sm btn-block">Watch Video Archives &rarr;</a>
              </div>
            </div>
          </div>

          <div class="training-card reveal">
            <div class="training-card-img-wrap">
              <img src="assets/img/migrated/563e77_972ee7cc1f6b4b1d8a6454d97882f1ed.jpg" alt="Books &amp; Handouts" class="training-card-img" loading="lazy">
              <span class="training-card-badge">Literature</span>
            </div>
            <div class="training-card-body">
              <h3 class="training-title">Books &amp; Clinical Handouts</h3>
              <p class="training-desc">Curated reading lists and parent guides addressing developmental milestones, behavioral strategies, and autism parenting.</p>
              <div style="margin-top: auto;">
                <a href="books.html" class="btn btn-secondary btn-sm btn-block">Browse Books &rarr;</a>
              </div>
            </div>
          </div>

          <div class="training-card reveal">
            <div class="training-card-img-wrap">
              <img src="assets/img/migrated/563e77_cf8acaf7ecad470aa37a075f3fc5cd7c.jpg" alt="Research Journals" class="training-card-img" loading="lazy">
              <span class="training-card-badge">Evidence</span>
            </div>
            <div class="training-card-body">
              <h3 class="training-title">Research Journals &amp; Papers</h3>
              <p class="training-desc">Peer-reviewed publications and clinical studies on autism prevalence, early interventions, and neurodevelopment.</p>
              <div style="margin-top: auto;">
                <a href="journals.html" class="btn btn-secondary btn-sm btn-block">View Research &rarr;</a>
              </div>
            </div>
          </div>

          <div class="training-card reveal">
            <div class="training-card-img-wrap">
              <img src="assets/img/migrated/563e77_02f5ed5587d94fddae1d3085112d5ef0.jpg" alt="Visual Schedules &amp; PECS" class="training-card-img" loading="lazy">
              <span class="training-card-badge">Printables</span>
            </div>
            <div class="training-card-body">
              <h3 class="training-title">Autism Resource Library</h3>
              <p class="training-desc">Downloadable visual routine cards, token economy charts, and Picture Exchange Communication System (PECS) templates.</p>
              <div style="margin-top: auto;">
                <a href="autism-resource-library.html" class="btn btn-secondary btn-sm btn-block">Download Visuals &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 3rem;" class="reveal">
          <a href="resources.html" class="btn btn-primary btn-3d btn-lg">Explore Full Resource Hub &rarr;</a>
        </div>
      </div>
    </section>

    <!-- 6B. Inside HELP Autism Pakistan (Photo Gallery Preview) -->
    <section class="section" id="life-at-help" style="background: #F4F8FD; padding: 4.5rem 0;">
      <div class="container">
        <div class="section-title-wrap reveal" style="text-align: center;">
          <span class="section-badge">Inside HELP Autism Pakistan</span>
          <h2 class="section-title">Life at HELP Autism Pakistan</h2>
          <p class="section-subtitle" style="margin: 0 auto 2.5rem; max-width: 680px;">
            A glimpse into clinical therapy sessions, hands-on learning classrooms, vocational handloom weaving, and inclusive sports events in Lahore.
          </p>
        </div>

        <div class="home-gallery-preview-grid">
          ${[
            GALLERY_PHOTOS.find(p => p.id === 1),
            GALLERY_PHOTOS.find(p => p.id === 2),
            GALLERY_PHOTOS.find(p => p.id === 29),
            GALLERY_PHOTOS.find(p => p.id === 34),
            GALLERY_PHOTOS.find(p => p.id === 16),
            GALLERY_PHOTOS.find(p => p.id === 42)
          ].filter(Boolean).map(photo => {
            const isUncropped = photo.src.includes('certificate-award-ceremony-01') || photo.src.includes('teacher-training-series-01') || photo.src.includes('563e77_8db66caf4c454eafae9391d77fbdd2db');
            return `
            <a href="photos-library.html" class="gallery-card reveal" title="${photo.title}">
              <div class="gallery-card-thumb-wrap ${isUncropped ? 'uncropped-thumb-wrap' : ''}">
                <img src="${photo.src}" alt="${photo.alt}" class="gallery-card-thumb ${isUncropped ? 'uncropped-contain-img' : ''}" loading="lazy">
                <span class="gallery-card-badge">${photo.categoryLabel}</span>
                <span class="gallery-card-zoom-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </span>
              </div>
              <div class="gallery-card-body">
                <h3 class="gallery-card-title">${photo.title}</h3>
                <p class="gallery-card-caption">${photo.caption}</p>
              </div>
            </a>
          `;
          }).join('')}
        </div>

        <div style="text-align: center; margin-top: 2.75rem;" class="reveal">
          <a href="photos-library.html" class="btn btn-primary btn-3d btn-lg">
            View Full Photo Gallery (${GALLERY_PHOTOS.length} Photos) &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 7. Contact CTA & Consultation Strip -->
    <section class="section" id="consultation">
      <div class="container contact-section-grid">
        <div class="contact-card reveal">
          <span class="section-badge">Get in Touch</span>
          <h2 class="section-title" style="margin-bottom: 0.75rem;">Need Guidance for Your Child?</h2>
          <p style="margin-bottom: 1.75rem;">
            Book an evaluation consultation or reach out to our clinical intake team in Model Town Extension, Lahore.
          </p>

          <form class="consultation-form" id="home-consultation-form" novalidate>
            <!-- Anti-spam Honeypot -->
            <input type="text" name="_gotcha" style="display:none !important;" tabindex="-1" autocomplete="off" />

            <div class="form-group">
              <label for="parent-name">Parent or Guardian Full Name <span class="required-star">*</span></label>
              <input type="text" id="parent-name" name="name" class="form-control" placeholder="e.g. Fatima Tariq" required />
              <span class="field-error-msg" aria-live="polite"></span>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label for="child-age">Child's Age (Years) <span class="required-star">*</span></label>
                <input type="text" id="child-age" name="age" class="form-control" placeholder="e.g. 4 years" required />
                <span class="field-error-msg" aria-live="polite"></span>
              </div>
              <div class="form-group">
                <label for="phone-number">WhatsApp or Phone <span class="required-star">*</span></label>
                <input type="tel" id="phone-number" name="phone" class="form-control" placeholder="0344 404 0074" required />
                <span class="field-error-msg" aria-live="polite"></span>
              </div>
            </div>

            <div class="form-group">
              <label for="therapy-interest">Primary Service of Interest</label>
              <select id="therapy-interest" name="service" class="form-control">
                <option value="Initial Diagnostic Assessment">Initial Diagnostic Assessment</option>
                <option value="ABA Therapy">ABA Therapy</option>
                <option value="Speech & Language Therapy">Speech & Language Therapy</option>
                <option value="Occupational & Sensory Integration">Occupational & Sensory Integration</option>
                <option value="DIRFloortime Play Therapy">DIRFloortime Play Therapy</option>
                <option value="TEACCH Autism Program">TEACCH Autism Program</option>
                <option value="Parent Power Coaching">Parent Power Coaching</option>
                <option value="Other Disciplines">Other Therapy Disciplines</option>
              </select>
            </div>

            <div class="form-group">
              <label for="concerns-notes">Brief Developmental Concerns / Notes</label>
              <textarea id="concerns-notes" name="notes" class="form-control" rows="3" placeholder="Tell us about speech, sensory sensitivities, school readiness, or behavioral concerns..."></textarea>
            </div>

            <div class="form-actions-stack">
              <button type="submit" class="btn btn-primary btn-3d btn-block btn-lg submit-btn">
                <span class="btn-text">Submit Consultation Request &rarr;</span>
                <span class="btn-spinner" style="display:none;">Submitting...</span>
              </button>
              <button type="button" class="btn btn-green btn-block whatsapp-prefill-btn" style="margin-top: 0.75rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right: 6px;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                Or Send Form Details via WhatsApp
              </button>
            </div>

            <div class="form-feedback-box" style="display:none;" role="alert"></div>
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
              <p style="font-size: 0.85rem; color: var(--color-blue); margin-top: 0.25rem;">${ORG.parentOrg}</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="meta-card-content">
              <h4>Operating Hours</h4>
              <p>${ORG.timing}</p>
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
                <a href="tel:+924235165661">+92 42 35165661</a> (Landline: 042-35165661)
              </p>
            </div>
          </div>

          <div class="map-embed-card">
            <div class="map-header-bar">
              <div class="map-header-info">
                <span class="map-status-dot"></span>
                <strong>Model Town Extension Centre, Lahore</strong>
              </div>
              <span class="map-badge">${ORG.timingShort}</span>
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
                <span>${ORG.address}</span>
              </div>
              <div class="map-btn-group">
                <a href="https://maps.google.com/?q=Model+Town+Extension+Lahore+Pakistan" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-3d">
                  Directions &rarr;
                </a>
                <a href="tel:${ORG.primaryPhone.replace(/\s+/g, '')}" class="btn btn-secondary btn-sm">
                  Call Centre
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "HELP Autism Pakistan | Autism Therapy, Training & Resources in Lahore",
    description: "HELP Autism Pakistan — A project of A&S Welfare Society. A dedicated therapy, training and awareness centre for children with autism, ADHD and learning differences in Lahore, Pakistan.",
    activePage: 'home',
    filename: 'index.html',
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
              <img src="assets/img/dr-aniqa-sohail.jpg" alt="Dr Aniqa Sohail &amp; Center Leadership" class="subpage-featured-img founder-featured-img" loading="eager" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg';">
              <div class="subpage-banner-badge">
                <span class="pulse-dot"></span> Clinical Leadership &middot; Dr Aniqa Sohail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="founder">
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
    title: "About Us &amp; Founder Dr Aniqa Sohail",
    description: "Learn about HELP Autism Pakistan, our mission as a project of A&S Welfare Society, and founder Dr Aniqa Sohail's clinical credentials and vision in Lahore.",
    activePage: 'about',
    filename: 'about.html',
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
              Explore our 12 specialized therapy disciplines, professional healthcare internships, parent power cohorts, and vocational programs in Lahore.
            </p>
            <div class="subpage-hero-actions">
              <a href="#all-services" class="btn btn-primary btn-3d">Explore 12 Therapies</a>
              <a href="#trainings" class="btn btn-secondary">Training Programs</a>
            </div>
          </div>
          <div class="subpage-hero-media">
            <div class="subpage-featured-card">
              <img src="assets/img/migrated/563e77_105f7f18e8a744e9a2f643d2b11a6142.jpg" alt="HELP Autism Pakistan Clinical Programs" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
            <article class="service-tilt-card reveal">
              <div class="card-image-box ${s.image && s.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'has-contain-img' : ''}">
                <img src="${s.image}" alt="${s.title}" class="card-img ${s.image && s.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'img-contain-uncropped' : ''}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                <div class="img-fallback-panel">${s.title}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">${s.title}</h3>
                <p class="card-text">${s.description.substring(0, 130)}...</p>
                <a href="${s.slug}.html" class="card-footer-link" aria-label="View full details on ${s.title}">
                  View Full Details &rarr;
                </a>
              </div>
            </article>
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
          ${TRAININGS.map(t => {
            const isUncropped = t.image && (t.image.includes('certificate-award-ceremony-01') || t.image.includes('teacher-training-series-01') || t.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db'));
            return `
            <div class="training-card reveal">
              <div class="training-card-img-wrap ${isUncropped ? 'has-contain-img' : ''}">
                <img src="${t.image}" alt="${t.title}" class="training-card-img ${isUncropped ? 'img-contain-uncropped' : ''}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
          `;
          }).join('')}
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
              <img src="assets/img/migrated/563e77_701ea7fec9a543f68a7166194aba6aec.jpg" alt="Parent and Child Session" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-height: 260px; width: 100%; object-fit: cover;" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "All Programs, Therapies &amp; Trainings Overview",
    description: "Complete overview of the 12 clinical therapy services, 6 training programs, parent power cohorts, and internships at HELP Autism Pakistan in Lahore.",
    activePage: 'programs',
    filename: 'programs.html',
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
              <img src="assets/img/migrated/563e77_02f5ed5587d94fddae1d3085112d5ef0.jpg" alt="HELP Autism Pakistan Free Resources" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
                <img src="${r.image}" alt="${r.title}" class="training-card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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

    <!-- 20 Free Video Libraries -->
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
              <div class="video-card-thumb-wrap ${v.image && v.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'has-contain-img' : ''}">
                <img src="${v.image}" alt="${v.title}" class="video-card-thumb ${v.image && v.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'img-contain-uncropped' : ''}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
    title: "Free Autism Resources &amp; 20 Video Libraries",
    description: "Browse free autism resources, clinical research journals, download books, and watch 20 video libraries by HELP Autism Pakistan in Lahore.",
    activePage: 'resources',
    filename: 'resources.html',
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
              <img src="assets/img/migrated/563e77_5be3968018eb4128a44af02222f8420d.jpg" alt="HELP Autism Pakistan Lahore Centre" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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

          <form class="consultation-form" id="contact-full-form" novalidate>
            <!-- Anti-spam Honeypot -->
            <input type="text" name="_gotcha" style="display:none !important;" tabindex="-1" autocomplete="off" />

            <div class="form-group">
              <label for="contact-name">Parent or Guardian Full Name <span class="required-star">*</span></label>
              <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g. Tariq Mehmood" required />
              <span class="field-error-msg" aria-live="polite"></span>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label for="contact-phone">Phone / WhatsApp <span class="required-star">*</span></label>
                <input type="tel" id="contact-phone" name="phone" class="form-control" placeholder="0344 404 0074" required />
                <span class="field-error-msg" aria-live="polite"></span>
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address</label>
                <input type="email" id="contact-email" name="email" class="form-control" placeholder="parent@example.com" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label for="child-details">Child Age (Years)</label>
                <input type="text" id="child-details" name="age" class="form-control" placeholder="e.g. 5 years" />
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
              <textarea id="contact-message" name="notes" class="form-control" rows="4" placeholder="Include any existing diagnoses, speech delays, sensory triggers, or school goals..."></textarea>
            </div>

            <div class="form-actions-stack">
              <button type="submit" class="btn btn-primary btn-3d btn-block btn-lg submit-btn">
                <span class="btn-text">Send Message to Clinical Team &rarr;</span>
                <span class="btn-spinner" style="display:none;">Submitting...</span>
              </button>
              <button type="button" class="btn btn-green btn-block whatsapp-prefill-btn" style="margin-top: 0.75rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right: 6px;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                Send via WhatsApp
              </button>
            </div>

            <div class="form-feedback-box" style="display:none;" role="alert"></div>
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
              <p style="font-size: 0.85rem; color: var(--color-blue); margin-top: 0.25rem;">${ORG.parentOrg}</p>
            </div>
          </div>

          <div class="meta-info-card">
            <div class="meta-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="meta-card-content">
              <h4>Working Hours</h4>
              <p>${ORG.timing}</p>
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
              <p><a href="tel:+924235165661">+92 42 35165661</a> (Lahore Landline: 042-35165661)</p>
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

          <!-- Official Social Media Handles Card -->
          <div class="meta-info-card">
            <div class="meta-icon-circle" style="background: rgba(26, 111, 196, 0.1); color: var(--color-blue);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div class="meta-card-content">
              <h4>Official Social Media Handles</h4>
              <p style="font-size: 0.84rem; color: var(--color-text-subtle); margin-bottom: 0.5rem;">Connect with Dr. Aniqa Sohail &amp; HELP Autism Pakistan across verified channels:</p>
              <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
                <div><strong>YouTube:</strong> <a href="${ORG.youtube}" target="_blank" rel="noopener noreferrer">@aniqasohail9327</a> (Official Videos)</div>
                <div><strong>Facebook:</strong> <a href="${ORG.facebook}" target="_blank" rel="noopener noreferrer">@helpautismpakistan</a></div>
                <div><strong>Instagram:</strong> <a href="${ORG.instagram}" target="_blank" rel="noopener noreferrer">@helpautismpakistan</a></div>
                <div><strong>LinkedIn:</strong> <a href="${ORG.linkedin}" target="_blank" rel="noopener noreferrer">HELP Autism Pakistan</a></div>
                <div><strong>TikTok:</strong> <a href="${ORG.tiktok}" target="_blank" rel="noopener noreferrer">@helpautismaniqaso</a></div>
                <div><strong>WhatsApp:</strong> <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer">+92 344 404 0074</a></div>
              </div>
            </div>
          </div>

          <!-- Interactive Google Maps Box -->
          <div class="map-embed-card">
            <div class="map-header-bar">
              <div class="map-header-info">
                <span class="map-status-dot"></span>
                <strong>Model Town Extension Centre, Lahore</strong>
              </div>
              <span class="map-badge">${ORG.timingShort}</span>
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
                <span>${ORG.address}</span>
              </div>
              <div class="map-btn-group">
                <a href="https://maps.google.com/?q=Model+Town+Extension+Lahore+Pakistan" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-3d">
                  Directions in Maps &rarr;
                </a>
                <a href="tel:${ORG.primaryPhone.replace(/\s+/g, '')}" class="btn btn-secondary btn-sm">
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
    title: "Contact HELP Autism Pakistan &amp; Directions Lahore",
    description: "Contact HELP Autism Pakistan in Model Town Extension, Lahore. Phone: +92 344 404 0074, Email: aniqasohail@gmail.com. Book a clinical consultation.",
    activePage: 'contact',
    filename: 'contact.html',
    content
  });

  saveFile('contact.html', html);
}

// --------------------------------------------------------------------------
// 6. BUILD 12 SERVICE PAGES
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
              <div class="subpage-featured-card ${service.image && service.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'has-contain-img' : ''}">
                <img src="${service.image}" alt="${service.title} at HELP Autism Pakistan" class="subpage-featured-img ${service.image && service.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'img-contain-uncropped' : ''}" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
              <img src="${service.image}" alt="${service.title} at HELP Autism Pakistan" class="service-sidebar-img ${service.image && service.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'img-contain-uncropped' : ''}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
      title: `${service.title} in Lahore`,
      description: `${service.title} at HELP Autism Pakistan: ${service.tagline}. Evidence-based intervention led by Dr Aniqa Sohail in Lahore, Pakistan.`,
      activePage: 'programs',
      filename,
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 7. BUILD 6 TRAINING PAGES
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
              <div class="subpage-featured-card ${training.image && (training.image.includes('certificate-award-ceremony-01') || training.image.includes('teacher-training-series-01') || training.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db')) ? 'has-contain-img' : ''}">
                <img src="${training.image}" alt="${training.title} at HELP Autism Pakistan" class="subpage-featured-img ${training.image && (training.image.includes('certificate-award-ceremony-01') || training.image.includes('teacher-training-series-01') || training.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db')) ? 'img-contain-uncropped' : ''}" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
                ${training.curriculum.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>

            <div class="service-info-block">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-sun)" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Logistics, Cohort Schedule &amp; Eligibility
              </h3>
              <p><strong>Audience:</strong> ${training.audience}</p>
              <p><strong>Duration:</strong> ${training.duration}</p>
              <p><strong>Location:</strong> HELP Autism Pakistan Training Hall, Model Town Extension, Lahore (Hybrid virtual sessions available for overseas parents and distant cities).</p>
            </div>
          </div>

          <div class="service-sidebar-col reveal">
            <div class="service-sidebar-card">
              <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">Join This Cohort</h3>
              <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">
                Enroll in the next clinical training batch or schedule a preliminary interview in Lahore.
              </p>
              <a href="contact.html" class="btn btn-primary btn-3d btn-block" style="margin-bottom: 0.75rem;">
                Submit Application &rarr;
              </a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-block">
                Chat on WhatsApp
              </a>
              <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted);">
                <p><strong>Organized by:</strong> HELP Autism Pakistan</p>
                <p><strong>Parent Body:</strong> A&amp;S Welfare Society</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const html = renderHtmlEnvelope({
      title: `${training.title} in Lahore`,
      description: `${training.title} by HELP Autism Pakistan. ${training.summary} Directed by Dr Aniqa Sohail in Lahore, Pakistan.`,
      activePage: 'trainings',
      filename,
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 8. BUILD 20 VIDEO LIBRARY PAGES
// --------------------------------------------------------------------------
function buildVideoPages() {
  VIDEOS.forEach((video, index) => {
    const filename = `${video.slug}.html`;

    const hasVerified = video.verifiedVideos && video.verifiedVideos.length > 0;
    const primaryVideo = hasVerified ? video.verifiedVideos[0] : null;

    const videoPlayerHtml = hasVerified ? `
              <!-- Verified Official YouTube Player -->
              <div class="video-player-box" id="embedded-video-player">
                <div class="video-embed-wrapper">
                  <iframe
                    id="main-video-player-frame"
                    src="https://www.youtube.com/embed/${primaryVideo.videoId}?rel=0"
                    title="${primaryVideo.title} - HELP Autism Pakistan"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
                </div>
                <div class="video-caption-strip">
                  <div class="video-caption-meta">
                    <strong id="active-video-title" style="color: #FFFFFF; font-size: 0.95rem; display: block; margin-bottom: 0.25rem;">
                      ${primaryVideo.title}
                    </strong>
                    <span style="font-size: 0.82rem; color: #9BB3CB;">
                      &bull; Official YouTube Video &middot; HELP Autism Pakistan (@aniqasohail9327)
                    </span>
                  </div>
                  <div class="video-caption-btns">
                    <a id="active-yt-link" href="https://www.youtube.com/watch?v=${primaryVideo.videoId}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white btn-sm" style="font-size: 0.82rem; padding: 0.35rem 0.85rem;" title="Watch directly on YouTube">
                      Watch on YouTube
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-sm" style="font-size: 0.82rem; padding: 0.35rem 0.85rem;">
                      Ask Dr. Aniqa &rarr;
                    </a>
                  </div>
                </div>
              </div>

              ${video.verifiedVideos.length > 1 ? `
              <!-- Multi-Video Interactive Collection -->
              <div class="video-collection-wrap reveal" style="margin-top: 1.5rem; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                  <h3 style="font-size: 1.15rem; color: var(--color-navy); margin: 0;">
                    Videos in this Category (${video.verifiedVideos.length})
                  </h3>
                  <span style="font-size: 0.82rem; color: var(--color-text-muted); font-weight: 600;">
                    Click any video below to play directly above
                  </span>
                </div>
                <div class="video-cards-grid">
                  ${video.verifiedVideos.map((v, i) => `
                    <div class="video-selectable-card ${i === 0 ? 'active' : ''}" data-video-id="${v.videoId}" data-title="${v.title}" data-url="https://www.youtube.com/watch?v=${v.videoId}" role="button" tabindex="0" aria-label="Play ${v.title}">
                      <div class="video-card-thumb-frame">
                        <img src="https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg" alt="${v.title}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                        <span class="video-play-badge">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </span>
                      </div>
                      <div class="video-card-meta">
                        <h5>${v.title}</h5>
                        <span class="video-tag">${v.badge || 'Official Demonstration'}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              ` : ''}
    ` : `
              <!-- Curated Fallback Card (No verified video on channel yet) -->
              <div class="video-player-box">
                <div class="video-pending-card">
                  <div class="video-pending-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </div>
                  <span class="section-badge" style="background: rgba(255, 179, 0, 0.15); color: #FFB300; margin-bottom: 0.75rem;">
                    Video Resources in Preparation
                  </span>
                  <h3 style="color: #FFFFFF; font-size: 1.35rem; margin-bottom: 0.75rem;">
                    ${video.title} Recordings
                  </h3>
                  <p style="color: #CBDCEE; font-size: 0.92rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
                    Video resources for this program are currently being prepared. Clinical demonstration recordings for <strong>${video.title}</strong> are being curated and scheduled for upload to our official YouTube channel (<strong>@aniqasohail9327</strong>).
                  </p>
                  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
                    <a href="${ORG.youtube}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-3d btn-sm">
                      Visit Official YouTube Channel &rarr;
                    </a>
                    <a href="https://wa.me/923444040074?text=${encodeURIComponent('Hello Dr. Aniqa, I am inquiring about clinical video demonstrations for ' + video.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-sm">
                      Request Clinical Demos on WhatsApp
                    </a>
                  </div>
                </div>
                <div class="video-caption-strip">
                  <span style="font-size: 0.85rem; color: #CBDCEE;">
                    &bull; Official Video Archive &middot; HELP Autism Pakistan, Model Town Ext, Lahore
                  </span>
                  <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" style="font-size: 0.85rem; color: var(--color-accent-sun); font-weight: 700;">
                    Inquire with clinical coordinator &rarr;
                  </a>
                </div>
              </div>
    `;

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
              <span class="section-badge">Video Library Archive #${String(index + 1).padStart(2, '0')}</span>
              <h1 class="subpage-hero-title">${video.title}</h1>
              <p class="subpage-tagline">
                Open-access clinical video demonstrations recorded at HELP Autism Pakistan Centre in Lahore. Topics include ${video.topic}.
              </p>
              <div class="subpage-hero-actions">
                <a href="#video-player" class="btn btn-primary btn-3d">Watch Video Demos</a>
                <a href="resources.html" class="btn btn-secondary">All 20 Libraries</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card ${video.image && video.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'has-contain-img' : ''}">
                <img src="${video.image}" alt="${video.title} Video Archive" class="subpage-featured-img ${video.image && video.image.includes('563e77_8db66caf4c454eafae9391d77fbdd2db') ? 'img-contain-uncropped' : ''}" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> Clinical Video Archive &middot; ${video.count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pill bar for videos -->
      <div class="container">
        <div class="pills-scroll-bar" aria-label="All Video Libraries Navigation">
          ${VIDEOS.map(v => `
            <a href="${v.slug}.html" class="pill-nav-item ${v.slug === video.slug ? 'active' : ''}">${v.title.replace('Video Library', '').replace('Videos', '').trim()}</a>
          `).join('')}
        </div>
      </div>

      <section class="section" style="padding-top: 1.5rem;" id="video-player">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-main-col reveal">
              ${videoPlayerHtml}

              <div class="service-info-block">
                <h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  What You Will Observe in This Library
                </h3>
                <p>
                  This video archive covers practical application of <strong>${video.title}</strong>, demonstrating techniques tested with neurodiverse children. Rather than pure theory, you observe our clinicians and Dr. Aniqa Sohail illustrating cues, reinforcement timings, physical prompts, and emotional attunement.
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
                <h3 style="margin-bottom: 0.5rem; color: var(--color-navy);">Need Individualized Guidance?</h3>
                <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">
                  While videos provide conceptual guidance, every autistic child has a unique sensory, behavioral, and communication profile.
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
      title: `${video.title} | Free Video Library`,
      description: `Watch free clinical demonstration videos for ${video.title} at HELP Autism Pakistan. Practical techniques for parents, teachers, and therapists in Lahore.`,
      activePage: 'resources',
      filename,
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 9. BUILD 5 RESOURCE PAGES
// --------------------------------------------------------------------------
function buildResourcePages() {
  RESOURCES.forEach((res, index) => {
    const filename = `${res.slug}.html`;

    if (res.slug === 'photos-library') {
      const content = `
      <section class="subpage-hero">
        <div class="container">
          <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep">/</span>
            <a href="resources.html">Resources</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">Photos &amp; Facilities Gallery</span>
          </nav>
          <div class="subpage-hero-grid reveal">
            <div class="subpage-hero-content">
              <span class="section-badge">Official Organization Archive</span>
              <h1 class="subpage-hero-title">HELP Autism Pakistan Photo Gallery</h1>
              <p class="subpage-tagline">
                An authentic photographic journey through our specialized clinical therapy sessions, inclusive classrooms, hands-on teacher trainings, vocational handloom weaving, sports galas, and Model Town Extension facilities in Lahore.
              </p>
              <div class="subpage-hero-actions">
                <a href="#photo-gallery" class="btn btn-primary btn-3d">Browse All Photos &darr;</a>
                <a href="contact.html" class="btn btn-secondary">Visit Our Centre</a>
              </div>
            </div>
            <div class="subpage-hero-media">
              <div class="subpage-featured-card">
                <img src="assets/img/social/facilities/help-centre-reception-01.jpg" alt="HELP Autism Pakistan Centre Facilities Reception" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                <div class="subpage-banner-badge">
                  <span class="pulse-dot"></span> Model Town Extension Centre, Lahore &middot; 46 Curated Photos
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

      <section class="section" style="padding-top: 1.5rem;" id="photo-gallery">
        <div class="container">
          <!-- Gallery Category Filter Tabs -->
          <div class="gallery-filters" role="tablist" aria-label="Photo Gallery Filters">
            ${GALLERY_CATEGORIES.map((cat, idx) => `
              <button type="button" class="gallery-filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}" role="tab" aria-selected="${idx === 0 ? 'true' : 'false'}">
                ${cat.label} ${cat.id === 'all' ? `(${GALLERY_PHOTOS.length})` : `(${GALLERY_PHOTOS.filter(p => p.category === cat.id).length})`}
              </button>
            `).join('')}
          </div>

          <!-- 46 Authentic Photos Grid -->
          <div class="gallery-grid" id="main-gallery-grid">
            ${GALLERY_PHOTOS.map((photo) => {
              const isUncropped = photo.src.includes('certificate-award-ceremony-01') || photo.src.includes('teacher-training-series-01') || photo.src.includes('563e77_8db66caf4c454eafae9391d77fbdd2db');
              return `
              <div class="gallery-card reveal" data-category="${photo.category}" data-category-label="${photo.categoryLabel}" data-full-src="${photo.src}" data-title="${photo.title}" data-caption="${photo.caption}" role="button" tabindex="0" aria-label="View photo: ${photo.title}">
                <div class="gallery-card-thumb-wrap ${isUncropped ? 'uncropped-thumb-wrap' : ''}">
                  <img src="${photo.src}" alt="${photo.alt}" class="gallery-card-thumb ${isUncropped ? 'uncropped-contain-img' : ''}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/logo.png';">
                  <span class="gallery-card-badge">${photo.categoryLabel}</span>
                  <span class="gallery-card-zoom-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </span>
                </div>
                <div class="gallery-card-body">
                  <h3 class="gallery-card-title">${photo.title}</h3>
                  <p class="gallery-card-caption">${photo.caption}</p>
                </div>
              </div>
            `;
            }).join('')}
          </div>

          <!-- Bottom Consultation Strip -->
          <div style="background: #F4F8FD; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 3rem 2rem; margin-top: 4rem; text-align: center;" class="reveal">
            <span class="section-badge" style="margin-bottom: 0.75rem;">Experience Our Facilities in Person</span>
            <h2 style="font-size: 1.5rem; color: var(--color-navy); margin-bottom: 0.75rem;">Schedule an On-Site Centre Tour &amp; Evaluation</h2>
            <p style="color: var(--color-text-muted); max-width: 620px; margin: 0 auto 1.5rem; line-height: 1.6;">
              Observe our sensory gym, speech therapy pods, handloom weaving workstations, and developmental classrooms in Model Town Extension, Lahore.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <a href="contact.html" class="btn btn-primary btn-3d btn-lg">Book Clinical Consultation &rarr;</a>
              <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-lg">Chat with Director on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Accessible Modal Lightbox Dialog -->
      <div class="lightbox-modal" id="gallery-lightbox-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Photo Viewer">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-container">
          <div class="lightbox-dialog">
            <button type="button" class="lightbox-btn lightbox-close" aria-label="Close photo viewer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous photo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button type="button" class="lightbox-btn lightbox-next" aria-label="Next photo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <div class="lightbox-img-wrap">
              <img src="" alt="" class="lightbox-img">
            </div>
            <div class="lightbox-caption-box">
              <div class="lightbox-title"></div>
              <p class="lightbox-desc"></p>
              <div class="lightbox-meta-bar">
                <span class="lightbox-category" style="color: var(--color-accent-sun); font-weight: 700;"></span>
                <span>&bull;</span>
                <span class="lightbox-counter"></span>
                <span>&bull;</span>
                <span>HELP Autism Pakistan Official Archive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      const html = renderHtmlEnvelope({
        title: "Photos & Facilities Gallery | Official Archive",
        description: "Explore the official photo gallery of HELP Autism Pakistan in Lahore. Authentic clinical sessions, sensory gym, vocational handloom, teacher workshops, and community events.",
        activePage: 'resources',
        filename,
        content
      });

      saveFile(filename, html);
      return;
    }

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
                <img src="${res.image}" alt="${res.title} Collection" class="subpage-featured-img" loading="eager" onerror="this.onerror=null; this.src='assets/img/logo.png';">
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
                <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
                  <a href="contact.html" class="btn btn-primary btn-3d btn-lg">
                    Request Digital Resource Pack &rarr;
                  </a>
                  <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-3d btn-lg">
                    Inquire on WhatsApp
                  </a>
                </div>
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
      title: `${res.title} | Autism Resources`,
      description: `${res.title} at HELP Autism Pakistan: ${res.desc}. Curated reference materials and clinical handouts in Lahore.`,
      activePage: 'resources',
      filename,
      content
    });

    saveFile(filename, html);
  });
}

// --------------------------------------------------------------------------
// 10. 404.HTML (ERROR PAGE)
// --------------------------------------------------------------------------
function build404Page() {
  const content = `
    <section class="section" style="padding: 6rem 0; min-height: 65vh; display: flex; align-items: center;">
      <div class="container" style="text-align: center; max-width: 680px; margin: 0 auto;">
        <span class="section-badge" style="background: rgba(227, 34, 39, 0.1); color: var(--color-red);">Error 404</span>
        <h1 class="hero-headline" style="font-size: clamp(2.2rem, 6vw, 3.5rem); margin: 1rem 0;">Page Not Found</h1>
        <p style="font-size: 1.15rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 2.5rem;">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Use the helpful links below to find therapy programs, free resources, or contact our Lahore clinic.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="index.html" class="btn btn-primary btn-3d btn-lg">Return to Home</a>
          <a href="programs.html" class="btn btn-secondary btn-lg">Explore Services</a>
          <a href="resources.html" class="btn btn-secondary btn-lg">Free Resources</a>
          <a href="contact.html" class="btn btn-green btn-3d btn-lg">Contact Us</a>
        </div>
      </div>
    </section>
  `;

  const html = renderHtmlEnvelope({
    title: "Page Not Found (404)",
    description: "The page you requested could not be found. Navigate to HELP Autism Pakistan homepage, services, or contact our Lahore centre.",
    activePage: '404',
    filename: '404.html',
    content
  });

  saveFile('404.html', html);
}

// --------------------------------------------------------------------------
// 11. SITEMAP.XML & ROBOTS.TXT
// --------------------------------------------------------------------------
function buildSitemapAndRobots() {
  const baseUrl = "https://www.helpautismpakistan.com";
  const pages = [
    { url: "", changefreq: "weekly", priority: "1.0" },
    { url: "about.html", changefreq: "monthly", priority: "0.8" },
    { url: "programs.html", changefreq: "weekly", priority: "0.9" },
    { url: "resources.html", changefreq: "weekly", priority: "0.9" },
    { url: "contact.html", changefreq: "monthly", priority: "0.8" },
    ...SERVICES.map(s => ({ url: `${s.slug}.html`, changefreq: "monthly", priority: "0.8" })),
    ...TRAININGS.map(t => ({ url: `${t.slug}.html`, changefreq: "monthly", priority: "0.7" })),
    ...VIDEOS.map(v => ({ url: `${v.slug}.html`, changefreq: "monthly", priority: "0.6" })),
    ...RESOURCES.map(r => ({ url: `${r.slug}.html`, changefreq: "monthly", priority: "0.7" }))
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}/${p.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('Generated: sitemap.xml');

  // Copy to public/sitemap.xml as well
  fs.writeFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  fs.writeFileSync(path.join(ROOT_DIR, 'public', 'robots.txt'), robotsTxt, 'utf-8');
  console.log('Generated: robots.txt and public/robots.txt');
}

// --------------------------------------------------------------------------
// 12. GENERATE README.TXT
// --------------------------------------------------------------------------
function buildReadme() {
  const content = `=============================================================================
HELP AUTISM PAKISTAN — OFFICIAL PRODUCTION-READY SUITE
A Project of A&S Welfare Society
=============================================================================
Complete directory of all generated pages and assets:

Main Hubs:
- index.html (Homepage: Hero, Intro, 6 Core Therapies, Founder, Parent Support, Resource Highlights, Consultation Form, Google Maps)
- about.html (About Us: Mission, Dr. Aniqa Sohail biography & credentials, 4 Pillars)
- programs.html (All 12 Therapy Disciplines + 6 Training Programs overview)
- resources.html (Resource Hub + 20 Video Libraries)
- contact.html (Direct Lines, Verified Timings, Address, Form, Google Maps)
- 404.html (Branded Error Page with return navigation)

Therapy Services (12 Pages):
${SERVICES.map(s => `- ${s.slug}.html`).join('\n')}

Training Programs (6 Pages):
${TRAININGS.map(t => `- ${t.slug}.html`).join('\n')}

Video Libraries (20 Pages):
${VIDEOS.map(v => `- ${v.slug}.html`).join('\n')}

Resource Collections (5 Pages):
${RESOURCES.map(r => `- ${r.slug}.html`).join('\n')}

SEO & Deployment:
- sitemap.xml (Comprehensive XML Sitemap)
- robots.txt (Crawler configuration)
- MIGRATION_URL_MAP.md (Redirect map from legacy Wix URLs)
- MANAGEMENT_VERIFICATION.md (Checklist for human/management sign-off)
`;

  saveFile('README.txt', content);
}

// --------------------------------------------------------------------------
// MAIN EXECUTION
// --------------------------------------------------------------------------
console.log('--- Generating All 48 Pages + 404 + SEO Assets for HELP Autism Pakistan ---');
buildIndexPage();
buildAboutPage();
buildProgramsPage();
buildResourcesPage();
buildContactPage();
buildServicePages();
buildTrainingPages();
buildVideoPages();
buildResourcePages();
build404Page();
buildSitemapAndRobots();
buildReadme();
console.log('--- Successfully Built All Pages and Assets ---');
