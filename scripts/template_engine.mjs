import fs from 'fs';
import path from 'path';
import { VIDEO_CATEGORIES, OFFICIAL_CHANNEL_URL, OFFICIAL_CHANNEL_HANDLE } from './video_library_data.mjs';

const ROOT_DIR = process.cwd();

// --- DATA DEFINITIONS (CENTRAL SINGLE SOURCE OF TRUTH) ---

const ORG = {
  name: "HELP Autism Pakistan",
  parentOrg: "A project of A&S Welfare Society",
  director: "Dr Aniqa Sohail",
  directorTitle: "Founder & Project Director",
  directorQualifications: "MBBS (KEMC, Gold Medalist), FCPS & MCPS Paediatrics (CPSP), Head of Paediatric Department at WTHC Lahore, Certified ABA Consultant in Autism (USA), Certified Floortime Practitioner (ICDL, USA), B.Sc. (Punjab University), Member ACLM, Certified in ADHD Awareness & Management (USA), Autism Assistive Communication & Natural Play Therapy graduate (USA), PAS Professional Series — RDI Program (India), Diploma in Advanced Autism Awareness (USA), Certified Lifestyle Medicine Coach (RISLM), Certified in Training for Autism Social Integration (USA). Mother of an autistic child.",
  address: "P Block, Model Town Extension, Lahore, Pakistan",
  timing: "Monday to Saturday, 9:00 am – 5:00 pm (Sunday Closed)",
  timingShort: "Mon–Sat 9:00 AM – 5:00 PM",
  phones: ["+92 344 404 0074", "+92 300 675 2325", "+92 35165661"],
  primaryPhone: "+92 344 404 0074",
  email: "aniqasohail@gmail.com",
  whatsapp: "https://wa.me/923444040074",
  youtube: "https://www.youtube.com/@aniqasohail9327/videos",
  linkedin: "https://www.linkedin.com/company/help-autism-pakistan/",
  facebook: "https://www.facebook.com/helpautismpakistan",
  tiktok: "https://www.tiktok.com/@helpautismaniqaso",
  coreBeliefs: ["Communication", "Competence", "Confidence", "Independence"],
  oldSiteUrl: "https://www.helpautismpakistan.com"
};

const SERVICES = [
  {
    slug: "aba-therapy",
    title: "ABA Therapy",
    tagline: "Applied Behavior Analysis for meaningful functional progress",
    heroImage: "assets/img/social/therapy/aba-therapy-session-01.jpg",
    image: "assets/img/social/therapy/aba-therapy-session-01.jpg",
    description: "Applied Behavior Analysis (ABA) is an evidence-based therapy proven to increase helpful behaviors while decreasing challenging or barrier behaviors in individuals with Autism Spectrum Disorder (ASD).",
    whoFor: "Children with autism, developmental delays, behavioral challenges, and communication barriers needing structured, data-driven developmental support.",
    sessionLook: "Individualized 1:1 sessions utilizing Discrete Trial Training (DTT), Natural Environment Teaching (NET), positive reinforcement schedules, and functional communication training.",
    goals: [
      "Improve spontaneous verbal & non-verbal communication",
      "Build receptive and expressive language skills",
      "Reduce self-injurious, aggressive, or repetitive behaviors",
      "Foster foundational social interaction and imitation skills"
    ]
  },
  {
    slug: "speech-language-therapy",
    title: "Speech & Language Therapy",
    tagline: "Empowering children with their rightful voice and communication",
    heroImage: "assets/img/social/therapy/speech-language-stimulation-01.jpg",
    image: "assets/img/social/therapy/speech-language-stimulation-01.jpg",
    description: "Our Speech and Language Therapy focuses on assessing and treating speech articulation, oral motor difficulties, language comprehension, expression, and functional communicative intent.",
    whoFor: "Non-verbal, minimally verbal, or echolalic children, as well as children with pragmatic language difficulties, stuttering, and articulation disorders.",
    sessionLook: "Engaging interactive play, oral-motor stimulation exercises, PECS (Picture Exchange Communication System) integration, AAC speech device guidance, and phonetic training.",
    goals: [
      "Stimulate vocalization, syllable articulation, and vocabulary expansion",
      "Teach functional communicative gestures and AAC usage",
      "Enhance comprehension of multi-step instructions",
      "Develop reciprocal conversational turn-taking"
    ]
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    tagline: "Mastering motor skills, independence, and daily life routines",
    heroImage: "assets/img/social/therapy/occupational-therapy-session-01.jpg",
    image: "assets/img/social/therapy/occupational-therapy-gym-02.jpg",
    description: "Pediatric Occupational Therapy assists children in achieving maximum independence in daily activities by strengthening fine motor coordination, bilateral integration, and cognitive-motor planning.",
    whoFor: "Children struggling with handwriting, scissor skills, buttons, shoe tying, balance, hand-eye coordination, and general everyday self-care.",
    sessionLook: "Child-led activities featuring obstacle courses, therapeutic putty, grasp-strengthening tools, balance beams, bead threading, and bilateral coordination tasks.",
    goals: [
      "Refine fine motor dexterity for academic readiness (pencil grip, cutting)",
      "Strengthen gross motor stability and core posture",
      "Promote self-dressing, feeding, and hygiene autonomy",
      "Improve spatial awareness and hand-eye coordination"
    ]
  },
  {
    slug: "sensory-therapy",
    title: "Sensory Integration Therapy",
    tagline: "Calming sensory overloads and regulating nervous system balance",
    heroImage: "assets/img/social/therapy/sensory-integration-therapy-01.jpg",
    image: "assets/img/social/therapy/sensory-integration-therapy-01.jpg",
    description: "Our specialized sensory gym provides systematic stimulation and calming input to vestibular, proprioceptive, tactile, and auditory systems, helping children regulate their physiological responses.",
    whoFor: "Children with Sensory Processing Disorder (SPD), sensory defensiveness (sound, touch, light hypersensitivity), or sensory seeking behaviors (spinning, jumping, crashing).",
    sessionLook: "Movement across therapeutic swings, deep pressure compression rolls, textured sensory paths, ball pits, climbing walls, and weighted blankets in a supportive space.",
    goals: [
      "Regulate sensory arousal levels to maintain focus and calm",
      "Desensitize tactile and auditory aversions gradually",
      "Improve vestibular balance and body proprioception",
      "Decrease sensory meltdowns and environmental anxiety"
    ]
  },
  {
    slug: "floortime-approach",
    title: "Floortime (DIR) Approach",
    tagline: "Building warm emotional connections through child-led play",
    heroImage: "assets/img/social/therapy/floortime-communication-circle-01.jpg",
    image: "assets/img/social/therapy/floortime-communication-circle-01.jpg",
    description: "Developed by Dr. Stanley Greenspan, the DIRFloortime method meets children at their developmental level, following their natural interests to expand shared attention, engagement, and intentional social communication.",
    whoFor: "Children who struggle with social reciprocity, emotional connection, warm joint attention, and dynamic interpersonal problem-solving.",
    sessionLook: "The therapist and parents get down on the floor, entering the child's world through their chosen toys or games, gradually opening and closing developmental communication circles.",
    goals: [
      "Establish joyful, sustained two-way emotional engagement",
      "Foster reciprocal communication without rigid cueing",
      "Encourage complex shared social problem solving",
      "Bridge emotional connection into creative and abstract thinking"
    ]
  },
  {
    slug: "teacch-therapy",
    title: "TEACCH Autism Program",
    tagline: "Structured visual teaching for predictability and autonomy",
    heroImage: "assets/img/social/gallery/structured-classroom-learning-01.jpg",
    image: "assets/img/social/gallery/structured-classroom-learning-01.jpg",
    description: "Developed at the University of North Carolina, TEACCH utilizes structured teaching principles, physical boundary organization, and individualized visual schedules to help autistic learners thrive independently.",
    whoFor: "Children who experience high anxiety with unstructured time, transitions, ambiguous classroom tasks, or noisy learning environments.",
    sessionLook: "Workstation setups with clear left-to-right work systems, color-coded task bins, visual sequence schedules, and distinct quiet work zones.",
    goals: [
      "Foster independent work completion without verbal prompting",
      "Reduce transition anxiety between differing activities",
      "Enhance visual processing strengths for learning",
      "Provide predictable spatial and temporal classroom organization"
    ]
  },
  {
    slug: "play-therapy",
    title: "Play Therapy & Social Skills",
    tagline: "Cultivating imagination, peer connection, and reciprocal play",
    heroImage: "assets/img/social/gallery/play-therapy-floor-session-01.jpg",
    image: "assets/img/social/gallery/play-therapy-floor-session-01.jpg",
    description: "Play is the natural language of childhood. Our play therapy sessions use structured and naturalistic play to develop symbolic thinking, emotional regulation, and interactive peer social relationships.",
    whoFor: "Children showing isolated play, repetitive toy lining, difficulty with pretend play, or challenges in playing cooperatively with peers.",
    sessionLook: "Therapist-facilitated small group and dyadic play scenarios, role-play dress-up, puppet storytelling, cooperative board games, and turn-taking challenges.",
    goals: [
      "Expand functional play beyond repetitive motor patterns",
      "Teach reciprocal turn-taking and sharing dynamics",
      "Develop pretend and imaginative symbolic play scenarios",
      "Foster genuine peer friendships and empathy cues"
    ]
  },
  {
    slug: "music-therapy",
    title: "Music Therapy",
    tagline: "Rhythmic auditory stimulation for speech and motor harmony",
    heroImage: "assets/img/social/therapy/music-rhythm-therapy-01.jpg",
    image: "assets/img/social/therapy/music-rhythm-therapy-01.jpg",
    description: "Music therapy taps into neuroplastic auditory pathways. Rhythmic auditory stimulation assists with expressive speech cadence, emotional self-regulation, motor synchrony, and focused attention.",
    whoFor: "Children who are highly responsive to melodies, non-verbal learners, or those with emotional dysregulation and sensory gating challenges.",
    sessionLook: "Engaging percussion exercises (drums, xylophones, chimes), call-and-response vocal chants, rhythmic motor movement, and calming melodic soundscapes.",
    goals: [
      "Encourage vocal intonation and verbal imitation through song",
      "Enhance auditory processing and attentive listening focus",
      "Facilitate emotional grounding and release during stress",
      "Improve bilateral motor coordination through instrument playing"
    ]
  },
  {
    slug: "functional-living-skills",
    title: "Functional Living Skills",
    tagline: "Equipping young people for dignity, self-care, and daily life",
    heroImage: "assets/img/social/therapy/functional-adaptive-living-skills-01.jpg",
    image: "assets/img/social/therapy/functional-adaptive-living-skills-01.jpg",
    description: "Our Functional Living Skills curriculum trains essential daily living activities (ADLs), including personal hygiene, toilet independence, dressing, meal preparation, and personal safety navigation.",
    whoFor: "Children, adolescents, and teenagers who need structured step-by-step guidance to master independent daily self-care and community participation.",
    sessionLook: "Hands-on real-world task analysis in simulated home spaces (kitchenette, bathroom, dressing area) with visual prompt hierarchies and fading supports.",
    goals: [
      "Master tooth-brushing, handwashing, and personal hygiene",
      "Achieve independent toilet training routines",
      "Prepare simple snacks and manage table manners safely",
      "Understand home and road community safety awareness"
    ]
  },
  {
    slug: "academics-school-training",
    title: "Academics & School Readiness",
    tagline: "Individualized Education Plans (IEP) for classroom integration",
    heroImage: "assets/img/social/gallery/greening-arts-classroom-01.jpg",
    image: "assets/img/social/gallery/greening-arts-classroom-01.jpg",
    description: "We prepare neurodivergent children for successful mainstream or remedial school inclusion through customized Individualized Education Plans (IEP), pre-academic literacy, and group readiness skills.",
    whoFor: "Preschoolers and school-age children facing transition to mainstream or special schools, needing foundational academic and classroom sitting stamina.",
    sessionLook: "Simulated classroom circle time, desk-work task folders, letter and number recognition, following group instructions, and school bag organization.",
    goals: [
      "Build sitting tolerance and sustained attention in group settings",
      "Master pre-writing, phonics, and basic mathematical concepts",
      "Learn to raise hands, wait for turns, and follow teacher directives",
      "Collaborate with mainstream schools on shadow teacher transition"
    ]
  },
  {
    slug: "vocational-therapy",
    title: "ASAD's Woven Wonders (Vocational Handloom)",
    tagline: "Empowering autistic adolescents through artisanal craft and livelihood",
    heroImage: "assets/img/social/vocational/asad-woven-wonders-handloom-02.jpg",
    image: "assets/img/social/vocational/asad-woven-wonders-handloom-02.jpg",
    description: "A flagship vocational project of A&S Welfare Society named after Asad Sohail, teaching traditional handloom weaving, packaging, and artisanal craft to empower autistic young adults with lifelong dignity and livelihood.",
    whoFor: "Adolescents (ages 14+) and adults on the autism spectrum ready for vocational apprenticeship, repetitive motor focus, and career readiness.",
    sessionLook: "Step-by-step master artisan instruction on wooden handlooms, yarn spinning, color pattern selection, fabric quality control, and retail packaging.",
    goals: [
      "Develop vocational motor endurance and precise handcraft skills",
      "Experience the pride of creating tangible, marketable woven textiles",
      "Earn income and build self-worth through finished goods",
      "Foster inclusive community employment pathways"
    ]
  },
  {
    slug: "diagnostic-evaluation",
    title: "Diagnostic Evaluation & Assessment",
    tagline: "Compassionate, standardized clinical assessments by pediatric specialists",
    heroImage: "assets/img/social/team/dr-aniqa-sohail-founder-01.jpg",
    image: "assets/img/social/facilities/diagnostic-consultation-room-01.jpg",
    description: "Led by Dr. Aniqa Sohail (FCPS Paediatrics, Certified ABA Consultant), our diagnostic evaluations utilize recognized international diagnostic criteria and developmental scales to chart clear intervention roadmaps.",
    whoFor: "Infants, toddlers, and children showing early signs of developmental delays, speech regressions, sensory sensitivities, or behavioral differences.",
    sessionLook: "Detailed clinical history taking, direct child observation across unstructured and structured tasks, standardized screening tools (CARS, ADOS-informed, Vineland), and a compassionate parent feedback session.",
    goals: [
      "Establish an accurate, timely developmental and behavioral profile",
      "Differentiate between ASD, ADHD, GDD, and speech apraxia",
      "Create a personalized roadmap of targeted therapeutic interventions",
      "Equip parents with immediate actionable home guidelines"
    ]
  }
];

const TRAININGS = [
  {
    slug: "internship-programs",
    title: "Internship & Fellowship Programs",
    summary: "Intensive 3-month and 6-month clinical rotations for psychologists, speech therapists, and special educators.",
    duration: "3 to 6 Months Rotations",
    audience: "Professionals & Graduates",
    image: "assets/img/social/team/internship-clinical-cohort-01.jpg",
    curriculum: [
      "Direct supervised 1:1 client therapy hours across ABA, OT, and Speech",
      "Data collection, behavioral graphing, and clinical session documentation",
      "Participation in weekly multidisciplinary clinical case conferences",
      "Supervised parent counseling and home plan design"
    ]
  },
  {
    slug: "parent-trainings",
    title: "Parent Empowerment Trainings",
    summary: "Transforming parents into confident, loving co-therapists through structured, compassionate group and individual workshops.",
    duration: "Ongoing 8-Week Cohorts",
    audience: "Parents & Primary Caregivers",
    image: "assets/img/social/training/parent-empowerment-group-01.jpg",
    curriculum: [
      "Understanding sensory overload and proactive antecedent strategies",
      "Natural environment language stimulation during daily home routines",
      "Positive behavior supports to replace tantrums and aggressive outbursts",
      "Fostering parental emotional resilience and mental health balance"
    ]
  },
  {
    slug: "hands-on-trainings",
    title: "Hands-on Practical Workshops",
    summary: "Live interactive clinical training workshops with real-time feedback from senior therapists and Dr. Aniqa Sohail.",
    duration: "2-Day Intensive Workshops",
    audience: "Therapists, Teachers & Shadow Aides",
    image: "assets/img/social/training/teacher-training-series-01.jpg",
    curriculum: [
      "Hands-on Discrete Trial Training (DTT) errorless prompting drills",
      "Sensory gym safety, vestibular regulation, and deep pressure application",
      "PECS Phase 1 through Phase 4 physical prompting and communication books",
      "Crisis de-escalation and safe non-aversive physical redirection"
    ]
  },
  {
    slug: "sibling-trainings",
    title: "Sibling Support & Integration",
    summary: "Dedicated empathetic groups helping brothers and sisters of autistic children understand neurodiversity with joy and pride.",
    duration: "Monthly Weekend Sessions",
    audience: "Siblings (Ages 6 to 18)",
    image: "assets/img/social/community/community-awareness-symposium-01.jpg",
    curriculum: [
      "Age-appropriate explanations of autism and sensory differences",
      "Fun reciprocal games siblings can play comfortably at home",
      "Safe space to express feelings of frustration, worry, or embarrassment",
      "Celebrating neurodiversity and building lifelong brotherly/sisterly bonds"
    ]
  },
  {
    slug: "certificate-courses",
    title: "Certificate Courses in Autism",
    summary: "Recognized foundational and advanced certificate courses covering international evidence-based methodologies.",
    duration: "4 to 12 Weeks (Weekend Modules)",
    audience: "Special Educators, Doctors & Therapists",
    image: "assets/img/social/training/certificate-award-ceremony-01.jpg",
    curriculum: [
      "Neurobiology and diagnostic criteria of ASD according to DSM-5",
      "Core principles of Applied Behavior Analysis and functional assessments",
      "Sensory integration frameworks and school accommodation plans",
      "Ethics, client dignity, and neurodiversity-affirming philosophies"
    ]
  },
  {
    slug: "community-awareness",
    title: "Community & School Awareness",
    summary: "Seminars for mainstream schools, pediatric clinics, and community centers to build widespread acceptance and early detection.",
    duration: "Half-Day Outreach Seminars",
    audience: "Schools, Pediatricians & Public",
    image: "assets/img/social/events/inclusive-education-symposium-01.jpg",
    curriculum: [
      "Early red flags of autism in toddlers for prompt pediatric referral",
      "Dispelling myths, stigma, and harmful cultural misconceptions in Pakistan",
      "Inclusive schooling accommodations for teachers and school heads",
      "Promoting neuro-inclusive public spaces, mosques, and parks"
    ]
  }
];

const VIDEOS = VIDEO_CATEGORIES;

const RESOURCES = [
  { slug: "journals", title: "Research Journals & Clinical Papers", desc: "Peer-reviewed scientific publications on autism prevalence, behavioral interventions, and neurological research.", image: "assets/img/social/training/mainstream-inclusion-lecture-02.jpg" },
  { slug: "books", title: "Recommended Books & Reading Lists", desc: "Curated literature for parents, clinical therapists, and educators navigating autism and neurodiversity.", image: "assets/img/social/training/hands-on-clinician-workshop-01.jpg" },
  { slug: "free-consultations", title: "Free Consultations & Screening Guides", desc: "Guidance on booking developmental reviews, early red flags checklists, and community assistance programs.", image: "assets/img/social/facilities/clinical-consultation-office-02.jpg" },
  { slug: "autism-resource-library", title: "Autism Resource Library", desc: "Free downloadable PDF visual schedules, PECS starter icon packs, token economy charts, and social stories.", image: "assets/img/social/gallery/visual-pecs-communication-01.jpg" },
  { slug: "photos-library", title: "Photos & Facilities Gallery", desc: "A photographic journey through our specialized therapy facilities, classrooms, sensory gym, and community events.", image: "assets/img/social/facilities/help-centre-reception-01.jpg" }
];

// --- NAVIGATION BUILDERS ---

function renderHeader(activePage = '') {
  return `
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header class="site-header" id="site-header">
    <div class="header-inner container">
      <a href="index.html" class="brand-link" aria-label="HELP Autism Pakistan Home">
        <img src="assets/img/logo.png" alt="HELP Autism Pakistan Official Logo" class="brand-logo" width="46" height="46" onerror="this.style.opacity='0'">
        <div class="brand-text">
          <span class="brand-name">${ORG.name}</span>
          <span class="brand-sub">${ORG.parentOrg}</span>
        </div>
      </a>

      <!-- Desktop Nav (Clean, Structured Hierarchy) -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
          </li>

          <li class="nav-item">
            <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
          </li>
          
          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle ${activePage === 'services' || activePage === 'programs' ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
              Services <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="programs.html" class="dropdown-item highlight-item"><strong>Services Overview (All 12 Disciplines)</strong></a>
              <div class="dropdown-divider"></div>
              ${SERVICES.map(s => `<a href="${s.slug}.html" class="dropdown-item">${s.title}</a>`).join('')}
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle ${activePage === 'trainings' ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
              Trainings <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="programs.html#trainings" class="dropdown-item highlight-item"><strong>Trainings Overview</strong></a>
              <div class="dropdown-divider"></div>
              ${TRAININGS.map(t => `<a href="${t.slug}.html" class="dropdown-item">${t.title}</a>`).join('')}
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle ${activePage === 'resources' ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
              Resources <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="resources.html" class="dropdown-item highlight-item"><strong>Resource Hub Overview</strong></a>
              <div class="dropdown-divider"></div>
              <a href="resources.html#video-libraries" class="dropdown-item">Video Libraries (20 Categories)</a>
              <a href="books.html" class="dropdown-item">Books &amp; Handouts</a>
              <a href="journals.html" class="dropdown-item">Research Journals</a>
              <a href="autism-resource-library.html" class="dropdown-item">Visual Resources &amp; Schedules</a>
              <a href="free-consultations.html" class="dropdown-item">Free Consultations &amp; Screening</a>
              <a href="photos-library.html" class="dropdown-item">Photos &amp; Facilities Gallery</a>
            </div>
          </li>

          <li class="nav-item">
            <a href="parent-trainings.html" class="nav-link ${activePage === 'parents' ? 'active' : ''}">For Parents</a>
          </li>

          <li class="nav-item">
            <a href="vocational-therapy.html" class="nav-link ${activePage === 'asad' ? 'active' : ''}">ASAD's Woven Wonders</a>
          </li>

          <li class="nav-item">
            <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="contact.html" class="btn btn-primary btn-sm btn-3d header-consultation-btn" aria-label="Book a Clinical Consultation">Book a Consultation</a>
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay Backdrop -->
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay" aria-hidden="true"></div>

    <!-- Mobile Drawer Navigation -->
    <div class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation Drawer">
      <div class="mobile-drawer-header">
        <div class="brand-text">
          <span class="brand-name">${ORG.name}</span>
          <span class="brand-sub">${ORG.parentOrg}</span>
        </div>
        <button class="drawer-close" id="drawer-close" aria-label="Close menu">&times;</button>
      </div>
      <div class="mobile-drawer-content">
        <a href="index.html" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="about.html" class="mobile-nav-link ${activePage === 'about' ? 'active' : ''}">About Us</a>
        
        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Services (12 Therapies)</summary>
          <div class="accordion-body">
            <a href="programs.html" class="accordion-sublink"><strong>All Services Overview</strong></a>
            ${SERVICES.map(s => `<a href="${s.slug}.html" class="accordion-sublink">${s.title}</a>`).join('')}
          </div>
        </details>

        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Trainings &amp; Internships</summary>
          <div class="accordion-body">
            <a href="programs.html#trainings" class="accordion-sublink"><strong>Trainings Overview</strong></a>
            ${TRAININGS.map(t => `<a href="${t.slug}.html" class="accordion-sublink">${t.title}</a>`).join('')}
          </div>
        </details>

        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Resources &amp; Video Hub</summary>
          <div class="accordion-body">
            <a href="resources.html" class="accordion-sublink"><strong>Resource Hub Overview</strong></a>
            <a href="resources.html#video-libraries" class="accordion-sublink">All 20 Video Libraries</a>
            <a href="books.html" class="accordion-sublink">Books &amp; Handouts</a>
            <a href="journals.html" class="accordion-sublink">Research Journals</a>
            <a href="autism-resource-library.html" class="accordion-sublink">Visual Schedules &amp; PECS</a>
            <a href="free-consultations.html" class="accordion-sublink">Free Consultations</a>
            <a href="photos-library.html" class="accordion-sublink">Photos Library</a>
          </div>
        </details>

        <a href="parent-trainings.html" class="mobile-nav-link ${activePage === 'parents' ? 'active' : ''}">For Parents (Power Programs)</a>
        <a href="vocational-therapy.html" class="mobile-nav-link ${activePage === 'asad' ? 'active' : ''}">ASAD's Woven Wonders</a>
        <a href="contact.html" class="mobile-nav-link ${activePage === 'contact' ? 'active' : ''}">Contact &amp; Location</a>
        
        <div class="mobile-drawer-cta">
          <a href="contact.html" class="btn btn-primary btn-block btn-3d">Book a Consultation</a>
          <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-block btn-3d">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </header>
  `;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col brand-col">
        <div class="footer-brand">
          <img src="assets/img/logo.png" alt="HELP Autism Pakistan Official Logo" class="footer-logo" width="56" height="56" loading="lazy" onerror="this.style.opacity='0'">
          <div>
            <h3 class="footer-brand-title">${ORG.name}</h3>
            <p class="footer-brand-subtitle">${ORG.parentOrg}</p>
          </div>
        </div>
        <p class="footer-mission">
          Dedicated to empowering children with Autism Spectrum Disorder, ADHD, and developmental delays through evidence-based multidisciplinary therapy, accredited clinical training, and wholehearted parent partnership in Lahore, Pakistan.
        </p>
        <div class="core-values-pill-row">
          <span class="value-tag">Communication</span>
          <span class="value-tag">Competence</span>
          <span class="value-tag">Confidence</span>
          <span class="value-tag">Independence</span>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Therapy Services</h4>
        <ul class="footer-links">
          ${SERVICES.slice(0, 6).map(s => `<li><a href="${s.slug}.html">${s.title}</a></li>`).join('')}
          <li><a href="programs.html" class="footer-more-link">View all 12 therapies &rarr;</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Trainings &amp; Resources</h4>
        <ul class="footer-links">
          <li><a href="internship-programs.html">Internship Programs</a></li>
          <li><a href="parent-trainings.html">Parent Trainings</a></li>
          <li><a href="hands-on-trainings.html">Intensive Hands-on Workshops</a></li>
          <li><a href="certificate-courses.html">Certificate Courses</a></li>
          <li><a href="resources.html#video-libraries">20 Free Video Libraries</a></li>
          <li><a href="autism-resource-library.html">Visual Strategies &amp; PECS</a></li>
          <li><a href="books.html">Books &amp; Clinical Handouts</a></li>
        </ul>
      </div>

      <div class="footer-col contact-col">
        <h4 class="footer-heading">Visit &amp; Connect</h4>
        <p class="contact-line">
          <strong>Address:</strong><br>${ORG.address}
        </p>
        <p class="contact-line">
          <strong>Hours:</strong><br>${ORG.timing}
        </p>
        <p class="contact-line">
          <strong>Direct Lines:</strong><br>
          <a href="tel:+923444040074">+92 344 404 0074</a><br>
          <a href="tel:+923006752325">+92 300 675 2325</a><br>
          <a href="tel:+9235165661">+92 35165661</a>
        </p>
        <p class="contact-line">
          <strong>Email:</strong><br>
          <a href="mailto:${ORG.email}">${ORG.email}</a>
        </p>
        <div class="social-links-row">
          <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Chat on WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 2.016.812 2.796.812 3.179 0 5.767-2.587 5.767-5.766.001-3.181-2.586-5.768-5.767-5.768zm3.364 8.19c-.14.394-.807.755-1.127.801-.307.043-.683.07-1.921-.444-1.285-.533-2.126-1.83-2.19-1.916-.064-.086-.522-.695-.522-1.325 0-.63.33-.941.447-1.066.117-.125.255-.157.341-.157.085 0 .17.001.245.006.079.004.185-.03.289.221.107.257.363.886.395.951.032.065.053.141.011.226-.043.085-.064.139-.128.213-.064.075-.134.167-.192.225-.064.064-.131.134-.056.262.075.128.332.548.712.887.489.435.901.57 1.029.634.128.064.202.053.277-.032.075-.085.32-.373.405-.501.085-.128.171-.107.288-.064.117.043.746.352.874.416.128.064.213.096.245.149.032.054.032.31-.107.705zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.14-1.348A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          </a>
          <a href="${ORG.facebook}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Visit Facebook Page">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="${ORG.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Visit LinkedIn Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
          </a>
          <a href="${ORG.tiktok}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Visit TikTok Channel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-6.62 6.29 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9a7.74 7.74 0 0 0 4.69 1.57v-3.46a4.84 4.84 0 0 1-1.5-.42z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2026 ${ORG.name} &middot; ${ORG.parentOrg}. All rights reserved.</p>
        <p class="footer-address-note">Model Town Extension, Lahore, Pakistan &middot; Timing: Mon&ndash;Sat 9:00 am &ndash; 5:00 pm (Sunday Closed)</p>
      </div>
    </div>

    <!-- Floating Action Buttons -->
    <div class="floating-actions">
      <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="fab-btn fab-whatsapp" aria-label="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 2.016.812 2.796.812 3.179 0 5.767-2.587 5.767-5.766.001-3.181-2.586-5.768-5.767-5.768zm3.364 8.19c-.14.394-.807.755-1.127.801-.307.043-.683.07-1.921-.444-1.285-.533-2.126-1.83-2.19-1.916-.064-.086-.522-.695-.522-1.325 0-.63.33-.941.447-1.066.117-.125.255-.157.341-.157.085 0 .17.001.245.006.079.004.185-.03.289.221.107.257.363.886.395.951.032.065.053.141.011.226-.043.085-.064.139-.128.213-.064.075-.134.167-.192.225-.064.064-.131.134-.056.262.075.128.332.548.712.887.489.435.901.57 1.029.634.128.064.202.053.277-.032.075-.085.32-.373.405-.501.085-.128.171-.107.288-.064.117.043.746.352.874.416.128.064.213.096.245.149.032.054.032.31-.107.705zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.14-1.348A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
      </a>
      <a href="tel:${ORG.primaryPhone.replace(/\s+/g, '')}" class="fab-btn fab-phone" aria-label="Call HELP Autism Pakistan">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  </footer>
  `;
}

function renderHtmlEnvelope({
  title,
  description,
  activePage = '',
  filename = 'index.html',
  content,
  ogImage = 'assets/img/logo.png',
  schemaType = 'MedicalBusiness'
}) {
  const pageTitle = activePage === 'home'
    ? 'HELP Autism Pakistan | Autism Therapy, Training & Resources in Lahore'
    : (title.includes('HELP Autism Pakistan') ? title : `${title} | HELP Autism Pakistan`);

  const pageDesc = activePage === 'home'
    ? 'HELP Autism Pakistan — A project of A&S Welfare Society. Evidence-based autism therapy, professional clinical training, and free resource libraries in Lahore, Pakistan.'
    : description;

  const canonicalUrl = `https://www.helpautismpakistan.com/${filename === 'index.html' ? '' : filename}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://www.helpautismpakistan.com/${ogImage.replace(/^\//, '')}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalOrganization"],
    "name": "HELP Autism Pakistan",
    "alternateName": "A&S Welfare Society - HELP Autism Pakistan",
    "url": "https://www.helpautismpakistan.com/",
    "logo": "https://www.helpautismpakistan.com/assets/img/logo.png",
    "image": "https://www.helpautismpakistan.com/assets/img/dr-aniqa-sohail.jpg",
    "description": pageDesc,
    "telephone": ORG.primaryPhone,
    "email": ORG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P Block, Model Town Extension",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54700",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.4795,
      "longitude": 74.3160
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "medicalSpecialty": [
      "Pediatrics",
      "Autism Spectrum Disorder",
      "Applied Behavior Analysis",
      "Speech-Language Pathology",
      "Occupational Therapy"
    ],
    "founder": {
      "@type": "Person",
      "name": ORG.director,
      "jobTitle": ORG.directorTitle
    }
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="icon" type="image/png" href="assets/img/logo.png" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${ORG.name}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:image" content="${fullOgImage}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDesc}" />
    <meta name="twitter:image" content="${fullOgImage}" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css" />

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>

    <!-- Safe JS detection -->
    <script>document.documentElement.classList.add('js');</script>
  </head>
  <body>
    ${renderHeader(activePage)}
    
    <main id="main-content">
      ${content}
    </main>

    ${renderFooter()}

    <!-- Main Client Script -->
    <script src="assets/js/main.js"></script>
  </body>
</html>`;
}

// Export data and helpers
export {
  ORG,
  SERVICES,
  TRAININGS,
  VIDEOS,
  RESOURCES,
  renderHtmlEnvelope,
  ROOT_DIR
};
