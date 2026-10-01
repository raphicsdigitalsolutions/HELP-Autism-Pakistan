import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// --- DATA DEFINITIONS ---

const ORG = {
  name: "HELP Autism Pakistan",
  parentOrg: "A project of A&S Welfare Society",
  director: "Dr Aniqa Sohail",
  directorTitle: "Founder & Project Director",
  directorQualifications: "MBBS (KEMC, Gold Medalist), FCPS & MCPS Paediatrics (CPSP), Head of Paediatric Department at WTHC Lahore, Certified ABA Consultant in Autism (USA), Certified Floortime Practitioner (ICDL, USA), B.Sc. (Punjab University), Member ACLM, Certified in ADHD Awareness & Management (USA), Autism Assistive Communication & Natural Play Therapy graduate (USA), PAS Professional Series — RDI Program (India), Diploma in Advanced Autism Awareness (USA), Certified Lifestyle Medicine Coach (RISLM), Certified in Training for Autism Social Integration (USA). Mother of an autistic child.",
  address: "P Block, Model Town Extension, Lahore, Pakistan",
  timing: "Monday to Saturday, 9:00 am – 5:00 pm",
  phones: ["+92 344 404 0074", "+92 300 675 2325", "+92 35165661"],
  primaryPhone: "+92 344 404 0074",
  email: "aniqasohail@gmail.com",
  whatsapp: "https://wa.me/923444040074",
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
    heroImage: "https://static.wixstatic.com/media/563e77_b0f2574fbdf04ccdb5a7bb3ceedab97c~mv2.jpg/v1/fill/w_1280,h_719,al_c,q_85,enc_avif,quality_auto/aba%203.jpg",
    image: "https://static.wixstatic.com/media/563e77_02f5ed5587d94fddae1d3085112d5ef0~mv2.jpg/v1/crop/x_0,y_17,w_535,h_519/fill/w_598,h_520,al_c,lg_1,q_80,enc_avif,quality_auto/1-1_edited.jpg",
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
    heroImage: "https://static.wixstatic.com/media/563e77_597da98f4020401984548bd891f6ab2a~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202022-05-16%20at%2011_02_edited.jpg",
    image: "https://static.wixstatic.com/media/563e77_597da98f4020401984548bd891f6ab2a~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202022-05-16%20at%2011_02_edited.jpg",
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
    heroImage: "https://static.wixstatic.com/media/563e77_ec6b93cb205147aaab5e36275f3ed35b~mv2.jpg/v1/fill/w_1280,h_708,al_c,q_85,enc_avif,quality_auto/OC.jpg",
    image: "https://static.wixstatic.com/media/563e77_17e200490623400f94d0c3a2a73ff498~mv2.jpg/v1/crop/x_122,y_0,w_1291,h_1024/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/custom%20solutions%20autism.jpg",
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
    heroImage: "https://static.wixstatic.com/media/563e77_c5a8003151b24b53bfaf413999373448~mv2.jpg/v1/crop/x_0,y_0,w_1079,h_1030/fill/w_600,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/INNNN.jpg",
    image: "https://static.wixstatic.com/media/563e77_c5a8003151b24b53bfaf413999373448~mv2.jpg/v1/crop/x_0,y_0,w_1079,h_1030/fill/w_600,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/INNNN.jpg",
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
    heroImage: "https://static.wixstatic.com/media/563e77_d970b83bf9144abeb372cfe514d7f0da~mv2.jpg/v1/fill/w_988,h_1008,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/floor%203.jpg",
    image: "https://static.wixstatic.com/media/563e77_701ea7fec9a543f68a7166194aba6aec~mv2.jpg/v1/crop/x_0,y_30,w_498,h_419/fill/w_561,h_503,al_c,lg_1,q_80,enc_avif,quality_auto/grooooop.jpg",
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
    tagline: "Structured visual systems fostering predictable, independent learning",
    heroImage: "https://static.wixstatic.com/media/563e77_105f7f18e8a744e9a2f643d2b11a6142~mv2.jpg/v1/crop/x_166,y_0,w_930,h_720/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AVJADJDNVNFV.jpg",
    image: "https://static.wixstatic.com/media/563e77_105f7f18e8a744e9a2f643d2b11a6142~mv2.jpg/v1/crop/x_166,y_0,w_930,h_720/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AVJADJDNVNFV.jpg",
    description: "Treatment and Education of Autistic and Related Communication-Handicapped Children (TEACCH) utilizes structured teaching, clear physical boundaries, visual schedules, and left-to-right work stations.",
    whoFor: "Visual learners who experience anxiety with ambiguity, routine disruptions, or unstructured classroom settings.",
    sessionLook: "Individual work stations equipped with visual schedules, task organizer bins, visual countdowns, and predictable sequence checklists that teach autonomous task completion.",
    goals: [
      "Increase independent task execution without verbal prompting",
      "Provide visual structure to smooth transitions between activities",
      "Reduce classroom stress through transparent expectations",
      "Build organizational competence for future educational success"
    ]
  },
  {
    slug: "play-therapy",
    title: "Play Therapy & Social Skills",
    tagline: "Natural joyful play that sparks friendship and perspective taking",
    heroImage: "https://static.wixstatic.com/media/563e77_7458ee94d2504105a2a4e343a32091d2~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FUNGVRJVGNRJFNBJFNBFJB.jpg",
    image: "https://static.wixstatic.com/media/563e77_7458ee94d2504105a2a4e343a32091d2~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FUNGVRJVGNRJFNBJFNBFJB.jpg",
    description: "Therapeutic play is the most natural medium for a child to express feelings, develop narrative comprehension, understand social roles, and build lasting peer relationships.",
    whoFor: "Children exhibiting solitary play, rigid play patterns, difficulty with turn-taking, sharing, or grasping conversational social cues.",
    sessionLook: "Imaginative role-playing, cooperative board games, sensory toy exploration, social stories, and small guided peer interaction circles.",
    goals: [
      "Transition from parallel play to cooperative interactive play",
      "Develop theory of mind and empathy for playmates",
      "Encourage flexible thinking when play rules shift",
      "Make peer friendships spontaneous and rewarding"
    ]
  },
  {
    slug: "music-therapy",
    title: "Music Therapy",
    tagline: "Rhythm, melody, and harmony unlocking expressive potential",
    heroImage: "https://static.wixstatic.com/media/563e77_68c9f97d04fc4f829d5d172fb361ebb2~mv2.jpg/v1/fill/w_1200,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MUSIC%202.jpg",
    image: "https://static.wixstatic.com/media/563e77_8db66caf4c454eafae9391d77fbdd2db~mv2.jpg/v1/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.jpg",
    description: "Clinical music interventions harness auditory rhythm, singing, percussion, and musical games to stimulate neural pathways responsible for speech, emotion regulation, and motor coordination.",
    whoFor: "Children who respond strongly to melodies or sounds, non-verbal children seeking expressive outlets, and children needing auditory processing stimulation.",
    sessionLook: "Percussion rhythm tapping, interactive song-singing with tempo shifts, melodic intonation for phrase learning, and relaxing ambient music sessions.",
    goals: [
      "Stimulate auditory processing and verbal articulation through singing",
      "Enhance gross and fine motor synchronization via rhythm instruments",
      "Provide an emotionally soothing, non-demanding sensory experience",
      "Build joint musical attention and shared group joy"
    ]
  },
  {
    slug: "functional-living-skills",
    title: "Functional Living Skills",
    tagline: "Practical life competencies for lifelong dignity and autonomy",
    heroImage: "https://static.wixstatic.com/media/563e77_c32c408948ba43dea8a70ad13bc8ab5a~mv2.jpg/v1/crop/x_0,y_3,w_893,h_734/fill/w_600,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AGROUPP.jpg",
    image: "https://static.wixstatic.com/media/563e77_c32c408948ba43dea8a70ad13bc8ab5a~mv2.jpg/v1/crop/x_0,y_3,w_893,h_734/fill/w_600,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AGROUPP.jpg",
    description: "Targeted training in personal hygiene, dressing, eating, kitchen safety, money handling, and self-advocacy that prepares neurodivergent individuals for greater self-reliance.",
    whoFor: "Children, adolescents, and young adults who require structured, step-by-step guidance to master routine daily living tasks.",
    sessionLook: "Real-world simulated home environments: brushing teeth, preparing simple meals, organizing personal belongings, folding clothes, and safely navigating community settings.",
    goals: [
      "Achieve independent toileting, dressing, and grooming routines",
      "Safely prepare basic snacks and handle utensils",
      "Understand personal boundaries, safety protocols, and emergency awareness",
      "Reduce parental dependency for everyday tasks"
    ]
  },
  {
    slug: "academics-school-training",
    title: "Academics & School Readiness",
    tagline: "Individualized Education Plans bridging therapy and mainstream schooling",
    heroImage: "https://static.wixstatic.com/media/563e77_937517a01dac42c9bbd9f351defc7a50~mv2.jpg/v1/crop/x_54,y_297,w_485,h_373/fill/w_582,h_446,al_c,lg_1,q_80,enc_avif,quality_auto/6.jpg",
    image: "https://static.wixstatic.com/media/563e77_937517a01dac42c9bbd9f351defc7a50~mv2.jpg/v1/crop/x_54,y_297,w_485,h_373/fill/w_582,h_446,al_c,lg_1,q_80,enc_avif,quality_auto/6.jpg",
    description: "Preparing neurodiverse children to succeed in academic classrooms through foundational literacy, numeracy, attention endurance, desk routines, and peer collaboration.",
    whoFor: "Preschoolers and school-age children facing challenges in conventional school settings or preparing for inclusive mainstream transitions.",
    sessionLook: "Simulated classroom circle time, structured desk work, visual learning modules, reading and math manipulatives, and school etiquette practice.",
    goals: [
      "Build sustained seated attention for 20-30 minute learning blocks",
      "Develop pencil grasp, phonics, number sense, and comprehension",
      "Learn classroom routines: hand-raising, lining up, unpacking backpacks",
      "Collaborate with partner schools on Individualized Education Plans (IEP)"
    ]
  },
  {
    slug: "vocational-therapy",
    title: "Vocational Therapy & Handloom",
    tagline: "Honoring talent through specialized craftsmanship and vocational dignity",
    heroImage: "https://static.wixstatic.com/media/563e77_bfc14fafc45e4b348102a20a9bccf6d2~mv2.jpg/v1/crop/x_0,y_0,w_1080,h_938/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AAAAAAAAAAAAAAAAAAAAAAAA.jpg",
    image: "https://static.wixstatic.com/media/563e77_bfc14fafc45e4b348102a20a9bccf6d2~mv2.jpg/v1/crop/x_0,y_0,w_1080,h_938/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AAAAAAAAAAAAAAAAAAAAAAAA.jpg",
    description: "Vocational skills training tailored for young adults on the spectrum, highlighted by ASAD's Woven Wonders handloom initiative, packaging skills, computer data entry, and craft production.",
    whoFor: "Teens and young adults transitioning toward economic empowerment, meaningful work, and vocational accomplishment.",
    sessionLook: "Hands-on workbenches for handloom weaving, product assembly, sorting, packaging, quality checking, and supervised workshop duties.",
    goals: [
      "Master tangible vocational crafts such as weaving, printing, and packaging",
      "Cultivate workplace stamina, task commitment, and punctuality",
      "Earn income and build self-worth through finished goods",
      "Foster inclusive community employment pathways"
    ]
  },
  {
    slug: "diagnostic-evaluation",
    title: "Diagnostic Evaluation & Assessment",
    tagline: "Compassionate, standardized clinical assessments by pediatric specialists",
    heroImage: "https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg/v1/fill/w_346,h_356,al_c,q_80,enc_avif,quality_auto/abcd.jpg",
    image: "https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg/v1/fill/w_346,h_356,al_c,q_80,enc_avif,quality_auto/abcd.jpg",
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
    title: "Internship Programs",
    summary: "Clinical hands-on internships for psychology, speech therapy, and special education graduates.",
    audience: "Undergraduate and postgraduate students in psychology, behavioral sciences, and allied healthcare.",
    duration: "4 to 12 weeks clinical placements with live case observation and supervised intervention.",
    image: "https://static.wixstatic.com/media/563e77_cf8acaf7ecad470aa37a075f3fc5cd7c~mv2.jpg/v1/fill/w_1260,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/P6.jpg"
  },
  {
    slug: "parent-trainings",
    title: "Parent Trainings",
    summary: "Empowering parents as co-therapists through evidence-backed behavioral and communication strategies.",
    audience: "Parents, guardians, and primary caregivers of autistic children and individuals with ADHD.",
    duration: "Weekend cohorts, bi-weekly workshops, and practical home-coaching modules.",
    image: "https://static.wixstatic.com/media/563e77_701ea7fec9a543f68a7166194aba6aec~mv2.jpg/v1/crop/x_0,y_30,w_498,h_419/fill/w_561,h_503,al_c,lg_1,q_80,enc_avif,quality_auto/grooooop.jpg"
  },
  {
    slug: "hands-on-trainings",
    title: "Intensive Hands-on Trainings",
    summary: "Practical clinical workshops focusing on ABA data collection, sensory room protocols, and Floortime mastery.",
    audience: "Therapists, special educators, shadow teachers, and school interventionists.",
    duration: "Multi-day intensive certification tracks with real-time feedback.",
    image: "https://static.wixstatic.com/media/563e77_97b16ce0afd046d182433ff4ed30bbb7~mv2.jpg/v1/fill/w_1280,h_714,al_c,q_85,enc_avif,quality_auto/P2.jpg"
  },
  {
    slug: "sibling-trainings",
    title: "Sibling Trainings (Sibling Power)",
    summary: "Fostering loving, resilient bonds between neurotypical siblings and their autistic brothers and sisters.",
    audience: "Brothers and sisters of autistic children, aged 5 to 18 years.",
    duration: "Interactive group play sessions, empathetic dialogue circles, and cooperative fun.",
    image: "https://static.wixstatic.com/media/563e77_de243e64bdcb4c248df6596d981a1089~mv2.jpg/v1/crop/x_0,y_322,w_540,h_601/fill/w_648,h_712,al_c,lg_1,q_85,enc_avif,quality_auto/OCCCC.jpg"
  },
  {
    slug: "certificate-courses",
    title: "Certificate Courses",
    summary: "Formal credentialed diploma and certificate courses in autism management and special education.",
    audience: "Educators, doctors, psychologists, and NGO professionals.",
    duration: "3-month and 6-month comprehensive theoretical and clinical curricula.",
    image: "https://static.wixstatic.com/media/563e77_e0b015f827b044e89787edd61fc0dad4~mv2.jpg/v1/fill/w_1032,h_619,al_c,q_85,enc_avif,quality_auto/P9.jpg"
  },
  {
    slug: "community-awareness",
    title: "Community Awareness Programs",
    summary: "Seminars, school visits, and public campaigns breaking autism stigma across Pakistan.",
    audience: "Schools, universities, pediatric clinics, corporate organizations, and the general public.",
    duration: "Ongoing outreach lectures, World Autism Awareness Day initiatives, and media engagement.",
    image: "https://static.wixstatic.com/media/563e77_5be3968018eb4128a44af02222f8420d~mv2.jpg/v1/fill/w_1023,h_585,al_c,q_85,enc_avif,quality_auto/HELP.jpg"
  }
];

const VIDEOS = [
  { slug: "aba-videos", title: "ABA Therapy Videos", topic: "Applied Behavior Analysis, discrete trials, and positive reinforcement in action", image: "https://static.wixstatic.com/media/563e77_b0f2574fbdf04ccdb5a7bb3ceedab97c~mv2.jpg/v1/fill/w_684,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aba%203.jpg" },
  { slug: "speech-therapy-videos", title: "Speech & Language Therapy Videos", topic: "Oral-motor stimulation, speech prompts, and articulation drills", image: "https://static.wixstatic.com/media/563e77_597da98f4020401984548bd891f6ab2a~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202022-05-16%20at%2011_02_edited.jpg" },
  { slug: "occupational-therapy-videos", title: "Occupational Therapy Videos", topic: "Fine motor exercise demos, pencil grip refinement, and coordination", image: "https://static.wixstatic.com/media/563e77_ec6b93cb205147aaab5e36275f3ed35b~mv2.jpg/v1/fill/w_770,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OC.jpg" },
  { slug: "safety-training-videos", title: "Safety Training Videos", topic: "Road safety, water safety, elopement prevention, and home danger awareness", image: "https://static.wixstatic.com/media/563e77_97b16ce0afd046d182433ff4ed30bbb7~mv2.jpg/v1/fill/w_645,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P2.jpg" },
  { slug: "academic-videos", title: "Academic & School Readiness Videos", topic: "Desk work routines, math manipulatives, and visual reading strategies", image: "https://static.wixstatic.com/media/563e77_937517a01dac42c9bbd9f351defc7a50~mv2.jpg/v1/crop/x_54,y_297,w_485,h_373/fill/w_582,h_446,al_c,lg_1,q_80,enc_avif,quality_auto/6.jpg" },
  { slug: "functional-living-skills-videos", title: "Functional Living Skills Videos", topic: "Brushing teeth, dressing up, handwashing, and independent meal preparation", image: "https://static.wixstatic.com/media/563e77_c32c408948ba43dea8a70ad13bc8ab5a~mv2.jpg/v1/crop/x_0,y_3,w_893,h_734/fill/w_600,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AGROUPP.jpg" },
  { slug: "vocational-videos", title: "Vocational Skills & Weaving Videos", topic: "Handloom weaving, packaging, crafts, and workplace training", image: "https://static.wixstatic.com/media/563e77_bfc14fafc45e4b348102a20a9bccf6d2~mv2.jpg/v1/crop/x_0,y_0,w_1080,h_938/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AAAAAAAAAAAAAAAAAAAAAAAA.jpg" },
  { slug: "floortime-videos", title: "Floortime (DIR) Sessions Videos", topic: "Floor play engagement, opening/closing communication circles, and joint play", image: "https://static.wixstatic.com/media/563e77_d970b83bf9144abeb372cfe514d7f0da~mv2.jpg/v1/fill/w_494,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/floor%203.jpg" },
  { slug: "social-skills-videos", title: "Social Skills Videos", topic: "Turn-taking games, peer greeting protocols, and emotion identification", image: "https://static.wixstatic.com/media/563e77_7458ee94d2504105a2a4e343a32091d2~mv2.jpg/v1/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FUNGVRJVGNRJFNBJFNBFJB.jpg" },
  { slug: "play-videos", title: "Play Therapy Videos", topic: "Pretend play, toy exploration, and interactive sensory games", image: "https://static.wixstatic.com/media/563e77_aaeafb64c7f8459596d5729bfe6ad571~mv2.jpg/v1/fill/w_612,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aba%204.jpg" },
  { slug: "hands-on-trainings-videos", title: "Hands-on Clinical Training Videos", topic: "Real therapist demonstrations, prompts, fading, and reinforcement schedules", image: "https://static.wixstatic.com/media/563e77_cf8acaf7ecad470aa37a075f3fc5cd7c~mv2.jpg/v1/fill/w_630,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P6.jpg" },
  { slug: "cognitive-behavior-videos", title: "Cognitive Behavior (CBT) Videos", topic: "Emotional regulation, anger management, and anxiety mitigation", image: "https://static.wixstatic.com/media/563e77_972ee7cc1f6b4b1d8a6454d97882f1ed~mv2.jpg/v1/fill/w_525,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P13.jpg" },
  { slug: "inclusive-education-videos", title: "Inclusive Education Videos", topic: "Mainstream classroom accommodations, shadow teaching, and peer support", image: "https://static.wixstatic.com/media/563e77_937517a01dac42c9bbd9f351defc7a50~mv2.jpg/v1/crop/x_54,y_297,w_485,h_373/fill/w_582,h_446,al_c,lg_1,q_80,enc_avif,quality_auto/6.jpg" },
  { slug: "teacch-intervention-videos", title: "TEACCH Intervention Videos", topic: "Visual task boxes, structured work systems, and schedule boards", image: "https://static.wixstatic.com/media/563e77_105f7f18e8a744e9a2f643d2b11a6142~mv2.jpg/v1/crop/x_166,y_0,w_930,h_720/fill/w_598,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AVJADJDNVNFV.jpg" },
  { slug: "pecs-visual-videos", title: "PECS & Visual Strategies Videos", topic: "Picture exchange phases, choice boards, and first-then charts", image: "https://static.wixstatic.com/media/563e77_02f5ed5587d94fddae1d3085112d5ef0~mv2.jpg/v1/crop/x_0,y_17,w_535,h_519/fill/w_598,h_520,al_c,lg_1,q_80,enc_avif,quality_auto/1-1_edited.jpg" },
  { slug: "peer-mediated-videos", title: "Peer Mediated Interventions Videos", topic: "Neurotypical peer modeling and inclusive playground play", image: "https://static.wixstatic.com/media/563e77_6acd79dbeb87462583f06f3926fdc79c~mv2.jpg/v1/fill/w_651,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa%205.jpg" },
  { slug: "parent-power-videos", title: "Power Parent Programs Videos", topic: "Home intervention routines, managing tantrums, and daily co-therapy", image: "https://static.wixstatic.com/media/563e77_701ea7fec9a543f68a7166194aba6aec~mv2.jpg/v1/crop/x_0,y_30,w_498,h_419/fill/w_561,h_503,al_c,lg_1,q_80,enc_avif,quality_auto/grooooop.jpg" },
  { slug: "nutrition-supplements-videos", title: "Nutrition & Diet Guidelines Videos", topic: "Gut-brain connection, gluten/casein guidance, and dietary protocols", image: "https://static.wixstatic.com/media/563e77_7f5e3032284f4e88a0477e6c2273653b~mv2.jpg/v1/crop/x_83,y_0,w_1114,h_854/fill/w_600,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nurition_edited.jpg" },
  { slug: "facilitated-communication-videos", title: "Facilitated Communication & RPM Videos", topic: "Rapid Prompting Method, letter boards, and typing for non-verbal voices", image: "https://static.wixstatic.com/media/563e77_17e200490623400f94d0c3a2a73ff498~mv2.jpg/v1/crop/x_122,y_0,w_1291,h_1024/fill/w_580,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/custom%20solutions%20autism.jpg" },
  { slug: "rdi-videos", title: "Relationship Development (RDI) Videos", topic: "Dynamic thinking, flexible problem solving, and parental guided participation", image: "https://static.wixstatic.com/media/563e77_f0290c14fa044fec8dc5c031044e90f3~mv2.jpg/v1/fill/w_588,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aba%201.jpg" }
];

const RESOURCES = [
  { slug: "journals", title: "Research Journals & Clinical Papers", desc: "Peer-reviewed scientific publications on autism prevalence, behavioral interventions, and neurological research.", image: "https://static.wixstatic.com/media/563e77_cf8acaf7ecad470aa37a075f3fc5cd7c~mv2.jpg/v1/fill/w_630,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P6.jpg" },
  { slug: "books", title: "Recommended Books & Reading Lists", desc: "Curated literature for parents, clinical therapists, and educators navigating autism and neurodiversity.", image: "https://static.wixstatic.com/media/563e77_972ee7cc1f6b4b1d8a6454d97882f1ed~mv2.jpg/v1/fill/w_525,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P13.jpg" },
  { slug: "free-consultations", title: "Free Consultations & Screening Guides", desc: "Guidance on booking developmental reviews, early red flags checklists, and community assistance programs.", image: "https://static.wixstatic.com/media/563e77_28cfd4d786cd4578985fcf0bd0bfa430~mv2.jpg/v1/fill/w_346,h_356,al_c,q_80,enc_avif,quality_auto/abcd.jpg" },
  { slug: "autism-resource-library", title: "Autism Resource Library", desc: "Free downloadable PDF visual schedules, PECS starter icon packs, token economy charts, and social stories.", image: "https://static.wixstatic.com/media/563e77_02f5ed5587d94fddae1d3085112d5ef0~mv2.jpg/v1/crop/x_0,y_17,w_535,h_519/fill/w_598,h_520,al_c,lg_1,q_80,enc_avif,quality_auto/1-1_edited.jpg" },
  { slug: "photos-library", title: "Photos & Media Gallery", desc: "A photographic journey through our specialized therapy facilities, classrooms, sensory gym, and community events.", image: "https://static.wixstatic.com/media/563e77_5be3968018eb4128a44af02222f8420d~mv2.jpg/v1/fill/w_1023,h_585,al_c,q_85,enc_avif,quality_auto/HELP.jpg" }
];

// --- NAVIGATION BUILDERS ---

function renderHeader(activePage = '') {
  return `
  <header class="site-header" id="site-header">
    <div class="header-inner container">
      <a href="index.html" class="brand-link" aria-label="HELP Autism Pakistan Home">
        <img src="assets/img/logo.png" alt="HELP Autism Pakistan Logo" class="brand-logo" width="46" height="46" onerror="this.style.opacity='0'">
        <div class="brand-text">
          <span class="brand-name">${ORG.name}</span>
          <span class="brand-sub">${ORG.parentOrg}</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
          </li>
          
          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
              Services <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="programs.html" class="dropdown-item highlight-item"><strong>All Services — Overview</strong></a>
              <div class="dropdown-divider"></div>
              ${SERVICES.map(s => `<a href="${s.slug}.html" class="dropdown-item">${s.title}</a>`).join('')}
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
              Trainings <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="programs.html#trainings" class="dropdown-item highlight-item"><strong>Trainings Overview</strong></a>
              <div class="dropdown-divider"></div>
              ${TRAININGS.map(t => `<a href="${t.slug}.html" class="dropdown-item">${t.title}</a>`).join('')}
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
              Free resources <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="resources.html" class="dropdown-item highlight-item"><strong>Resource Hub Overview</strong></a>
              <div class="dropdown-divider"></div>
              <a href="resources.html#video-libraries" class="dropdown-item">Free Video Libraries (20)</a>
              <a href="autism-resource-library.html" class="dropdown-item">Instructional Materials & Visuals</a>
              <a href="books.html" class="dropdown-item">Books & Handouts</a>
              <a href="journals.html" class="dropdown-item">Research Journals</a>
              <a href="free-consultations.html" class="dropdown-item">Free Consultations</a>
              <a href="photos-library.html" class="dropdown-item">Photos Library</a>
            </div>
          </li>

          <li class="nav-item">
            <a href="parent-trainings.html" class="nav-link ${activePage === 'parents' ? 'active' : ''}">For parents</a>
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
        <a href="contact.html" class="btn btn-primary btn-sm btn-3d">Book a consultation</a>
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay Backdrop -->
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>

    <!-- Mobile Drawer Navigation -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="mobile-drawer-header">
        <div class="brand-text">
          <span class="brand-name">${ORG.name}</span>
          <span class="brand-sub">${ORG.parentOrg}</span>
        </div>
        <button class="drawer-close" id="drawer-close" aria-label="Close menu">&times;</button>
      </div>
      <div class="mobile-drawer-content">
        <a href="index.html" class="mobile-nav-link">Home</a>
        <a href="about.html" class="mobile-nav-link">About Us</a>
        <a href="programs.html" class="mobile-nav-link">All Services & Therapies</a>
        
        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Therapy Services (12)</summary>
          <div class="accordion-body">
            ${SERVICES.map(s => `<a href="${s.slug}.html" class="accordion-sublink">${s.title}</a>`).join('')}
          </div>
        </details>

        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Trainings & Workshops</summary>
          <div class="accordion-body">
            ${TRAININGS.map(t => `<a href="${t.slug}.html" class="accordion-sublink">${t.title}</a>`).join('')}
          </div>
        </details>

        <details class="mobile-accordion">
          <summary class="mobile-nav-link">Free Resources & Videos</summary>
          <div class="accordion-body">
            <a href="resources.html" class="accordion-sublink">Resources Overview</a>
            <a href="resources.html#video-libraries" class="accordion-sublink">All 20 Video Libraries</a>
            <a href="autism-resource-library.html" class="accordion-sublink">Autism Resource Library</a>
            <a href="books.html" class="accordion-sublink">Books & Handouts</a>
            <a href="journals.html" class="accordion-sublink">Research Journals</a>
            <a href="free-consultations.html" class="accordion-sublink">Free Consultations</a>
            <a href="photos-library.html" class="accordion-sublink">Photos Library</a>
          </div>
        </details>

        <a href="parent-trainings.html" class="mobile-nav-link">For Parents (Power Programs)</a>
        <a href="vocational-therapy.html" class="mobile-nav-link">ASAD's Woven Wonders</a>
        <a href="contact.html" class="mobile-nav-link">Contact & Location</a>
        
        <div class="mobile-drawer-cta">
          <a href="contact.html" class="btn btn-primary btn-block btn-3d">Book a consultation</a>
          <a href="${ORG.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-green btn-block btn-3d">
            WhatsApp Us Directly
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
          <img src="assets/img/logo.png" alt="HELP Autism Pakistan Logo" class="footer-logo" width="56" height="56" loading="lazy" onerror="this.style.opacity='0'">
          <div>
            <h3 class="footer-brand-title">${ORG.name}</h3>
            <p class="footer-brand-subtitle">${ORG.parentOrg}</p>
          </div>
        </div>
        <p class="footer-mission">
          Dedicated to empowering children with Autism Spectrum Disorder, ADHD, and learning differences through evidence-based therapies, professional training, and wholehearted parent partnership in Lahore, Pakistan.
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
        <h4 class="footer-heading">Trainings & Resources</h4>
        <ul class="footer-links">
          <li><a href="internship-programs.html">Internship Programs</a></li>
          <li><a href="parent-trainings.html">Parent Trainings</a></li>
          <li><a href="hands-on-trainings.html">Intensive Hands-on Workshops</a></li>
          <li><a href="certificate-courses.html">Certificate Courses</a></li>
          <li><a href="resources.html#video-libraries">20 Free Video Libraries</a></li>
          <li><a href="autism-resource-library.html">Visual Strategies & Worksheets</a></li>
          <li><a href="books.html">Books & Clinical Handouts</a></li>
        </ul>
      </div>

      <div class="footer-col contact-col">
        <h4 class="footer-heading">Visit & Connect</h4>
        <p class="contact-line">
          <strong>Address:</strong><br>${ORG.address}
        </p>
        <p class="contact-line">
          <strong>Timing:</strong><br>${ORG.timing}
        </p>
        <p class="contact-line">
          <strong>Call Us:</strong><br>
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
        <p class="footer-address-note">Model Town Extension, Lahore, Pakistan &middot; Timing: Mon&ndash;Sat 9:00 am &ndash; 5:00 pm</p>
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

function renderHtmlEnvelope({ title, description, activePage = '', content, ogImage = 'assets/img/logo.png' }) {
  const pageTitle = activePage === 'home' ? 'HELP Autism Pakistan' : `${title} | HELP Autism Pakistan`;
  const pageDesc = activePage === 'home'
    ? 'HELP Autism Pakistan — A project of A&S Welfare Society. A dedicated therapy, training and awareness centre for children with autism, ADHD and learning differences in Lahore, Pakistan.'
    : description;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
    <link rel="icon" type="image/png" href="assets/img/logo.png" />

    <!-- Open Graph / Meta -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDesc}" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Shared Stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css" />

    <!-- Safe JS detection -->
    <script>document.documentElement.classList.add('js');</script>
  </head>
  <body>
    ${renderHeader(activePage)}
    
    <main id="main-content">
      ${content}
    </main>

    ${renderFooter()}

    <!-- Shared Null-Safe Script -->
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
