import fs from 'fs';
import path from 'path';

const cssContent = `/**
 * HELP AUTISM PAKISTAN — OFFICIAL STYLESHEET
 * A project of A&S Welfare Society
 * 
 * TABLE OF CONTENTS:
 * 1. CSS Variables & Theme Tokens (Authentic Brand Identity)
 * 2. Reset & Base Typography
 * 3. Layout, Container & Grid System
 * 4. 3D Buttons & UI Elements
 * 5. Header, Navigation & Dropdowns (Desktop & Mobile Drawer)
 * 6. Hero Section & 3D Medallion Parallax
 * 7. Stats Counter Strip
 * 8. Infinite Approach Marquee (Deep Navy)
 * 9. Founder Card with Gradient Border & Badges
 * 10. 3D Tilt Service Cards & Grids
 * 11. Trainings & Knowledge Transfer Section (Soft Blue Slate Tint)
 * 12. Video Libraries Grid (Deep Navy Section, Pure White & Gold Typography)
 * 13. Service & Subpage Hero (Rich Deep Navy Brand Gradient)
 * 14. Video Player Placeholder & Watch Card
 * 15. Real Embedded Google Map & Contact Section
 * 16. Footer & Legal Information
 * 17. Floating Action Buttons (WhatsApp & Call)
 * 18. Scroll-Reveal Animations (.reveal)
 * 19. Responsive Layouts (Mobile, Tablet & Desktop)
 * 20. Accessibility & Motion Preferences
 */

/* -------------------------------------------------------------------------
   1. CSS VARIABLES & THEME TOKENS
   ------------------------------------------------------------------------- */
:root {
  --color-blue: #1A6FC4;
  --color-blue-deep: #0D3F7A;
  --color-navy: #08243F;
  --color-green: #00A650;
  --color-green-deep: #047A3C;
  --color-red: #E32227;
  --color-accent-sun: #FFB43A;

  /* Official Brand Palette: Soothing, warm healthcare background */
  --color-bg: #F2F6FB;
  --color-bg-subtle: #E8F0FA;
  --color-bg-alt: #DEEAF7;
  --color-surface: #FFFFFF;
  --color-surface-translucent: rgba(255, 255, 255, 0.94);
  --color-border: #D9E4F0;
  --color-border-subtle: #E4EDF7;

  /* Text colors for crisp readability */
  --color-text: #123049;
  --color-text-muted: #4C6781;
  --color-text-subtle: #68849E;

  /* Header sizing */
  --header-height: 74px;

  /* Typography */
  --font-heading: 'Bricolage Grotesque', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Elevation & Layered Shadows */
  --shadow-sm: 0 2px 8px rgba(8, 36, 63, 0.05);
  --shadow-md: 0 8px 24px -4px rgba(8, 36, 63, 0.08), 0 2px 6px -1px rgba(8, 36, 63, 0.04);
  --shadow-lg: 0 16px 36px -6px rgba(8, 36, 63, 0.12), 0 4px 12px -2px rgba(8, 36, 63, 0.06);
  --shadow-xl: 0 24px 50px -10px rgba(8, 36, 63, 0.18), 0 8px 20px -4px rgba(8, 36, 63, 0.08);
  --shadow-3d-blue: 0 4px 0 #0D3F7A, 0 8px 20px rgba(26, 111, 196, 0.35);
  --shadow-3d-green: 0 4px 0 #047A3C, 0 8px 20px rgba(0, 166, 80, 0.32);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.15s cubic-bezier(0.2, 0, 0, 1);
  --transition-normal: 0.25s cubic-bezier(0.2, 0, 0, 1);
  --transition-bounce: 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* 3D dynamic tilt vars (updated by JS) */
  --tilt-x: 0deg;
  --tilt-y: 0deg;
}

/* -------------------------------------------------------------------------
   2. RESET & BASE TYPOGRAPHY
   ------------------------------------------------------------------------- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--color-bg);
  width: 100%;
}

main {
  flex: 1;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-navy);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2rem, 3.8vw, 3.2rem); font-weight: 800; }
h2 { font-size: clamp(1.65rem, 2.8vw, 2.4rem); }
h3 { font-size: clamp(1.25rem, 2vw, 1.65rem); }
h4 { font-size: 1.15rem; }

p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

p:last-child {
  margin-bottom: 0;
}

a {
  color: var(--color-blue);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-blue-deep);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
}

/* -------------------------------------------------------------------------
   3. LAYOUT, CONTAINER & GRID SYSTEM
   ------------------------------------------------------------------------- */
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.container-narrow {
  max-width: 920px;
}

.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
  background: var(--color-bg);
}

.section-white {
  background: #FFFFFF;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.section-alt {
  background: var(--color-bg-subtle);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.section-sm {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.section-title-wrap {
  text-align: center;
  max-width: 740px;
  margin: 0 auto 3.5rem auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-blue);
  background: #FFFFFF;
  padding: 0.35rem 0.95rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 6px rgba(8, 36, 63, 0.06);
}

.section-title {
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* -------------------------------------------------------------------------
   4. 3D BUTTONS & UI ELEMENTS
   ------------------------------------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.85rem 1.65rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  border: none;
  line-height: 1.2;
  white-space: nowrap;
}

/* 3D Pressed-Edge Buttons */
.btn-primary.btn-3d {
  background: var(--color-blue);
  color: #FFFFFF !important;
  box-shadow: var(--shadow-3d-blue);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 #0D3F7A, 0 12px 24px rgba(26, 111, 196, 0.4);
  color: #FFFFFF !important;
}

.btn-primary.btn-3d:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #0D3F7A, 0 4px 10px rgba(26, 111, 196, 0.3);
}

.btn-green.btn-3d {
  background: var(--color-green);
  color: #FFFFFF !important;
  box-shadow: var(--shadow-3d-green);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-green.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 #047A3C, 0 12px 24px rgba(0, 166, 80, 0.4);
  color: #FFFFFF !important;
}

.btn-green.btn-3d:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #047A3C, 0 4px 10px rgba(0, 166, 80, 0.3);
}

.btn-secondary {
  background: #FFFFFF;
  color: var(--color-navy) !important;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: #F4F8FC;
  border-color: var(--color-blue);
  color: var(--color-blue) !important;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-sm {
  padding: 0.55rem 1.15rem;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
}

.btn-lg {
  padding: 1.1rem 2.2rem;
  font-size: 1.05rem;
  border-radius: var(--radius-lg);
}

.btn-block {
  width: 100%;
}

/* -------------------------------------------------------------------------
   5. HEADER, NAVIGATION & DROPDOWNS
   ------------------------------------------------------------------------- */
.site-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--transition-normal);
}

.site-header.scrolled {
  box-shadow: 0 4px 20px rgba(8, 36, 63, 0.08);
}

.header-inner,
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  width: 100%;
}

/* Brand Link */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-logo {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 8px rgba(8, 36, 63, 0.15);
  object-fit: cover;
  background: #FFFFFF;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-navy);
  line-height: 1.1;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.brand-sub {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--color-blue);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

/* Desktop Navigation (Single line, strictly no wrap) */
.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-item {
  position: relative;
  white-space: nowrap;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  padding: 0.45rem 0.65rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover, .nav-item.dropdown-open .nav-link {
  color: var(--color-blue);
  background: #EBF3FC;
}

.nav-link.active {
  color: var(--color-blue);
  font-weight: 700;
}

.dropdown-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
}

.chevron {
  transition: transform var(--transition-fast);
}

.nav-item.dropdown-open .chevron {
  transform: rotate(180deg);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 260px;
  max-width: 320px;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  padding: 0.6rem 0.4rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.98);
  transform-origin: top left;
  transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
  z-index: 1100;
  max-height: 80vh;
  overflow-y: auto;
}

.nav-item.dropdown-open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.dropdown-item {
  display: block;
  font-size: 0.86rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast), color var(--transition-fast);
  white-space: normal;
  line-height: 1.35;
}

.dropdown-item:hover {
  background: #F0F6FC;
  color: var(--color-blue);
}

.dropdown-item.featured {
  font-weight: 700;
  color: var(--color-navy);
  border-bottom: 1px solid var(--color-border-subtle);
  margin-bottom: 0.25rem;
}

.dropdown-divider {
  height: 1px;
  background: var(--color-border-subtle);
  margin: 0.4rem 0.5rem;
}

.header-cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

/* Mobile Toggle Hamburger */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 9px;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.mobile-toggle .bar {
  width: 100%;
  height: 2px;
  background: var(--color-navy);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

/* Mobile Drawer Overlay Backdrop */
.mobile-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(8, 36, 63, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1999;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}

.mobile-drawer-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 360px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: var(--shadow-xl);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transition: right var(--transition-normal);
  overflow-y: auto;
}

.mobile-drawer.open {
  right: 0;
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-subtle);
  position: sticky;
  top: 0;
  z-index: 10;
}

.drawer-close {
  font-size: 2rem;
  line-height: 1;
  color: var(--color-text-muted);
  cursor: pointer;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  transition: background var(--transition-fast);
}

.drawer-close:hover {
  background: #E8EFF7;
  color: var(--color-navy);
}

.mobile-drawer-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.mobile-nav-link {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid var(--color-border-subtle);
  display: block;
  text-decoration: none;
}

.mobile-nav-link:hover {
  color: var(--color-blue);
}

.mobile-accordion {
  border-bottom: 1px solid var(--color-border-subtle);
  padding: 0.25rem 0;
}

.mobile-accordion summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-accordion summary::-webkit-details-marker {
  display: none;
}

.mobile-accordion summary::after {
  content: "+";
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-blue);
}

.mobile-accordion[open] summary::after {
  content: "−";
}

.accordion-body {
  padding-left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.4rem;
  margin-bottom: 0.5rem;
}

.accordion-sublink {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  padding: 0.45rem 0.5rem;
  display: block;
  border-radius: var(--radius-sm);
  text-decoration: none;
}

.accordion-sublink:hover {
  background: #F4F8FC;
  color: var(--color-blue);
}

.mobile-drawer-cta {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

/* -------------------------------------------------------------------------
   6. HERO SECTION & 3D MEDALLION
   ------------------------------------------------------------------------- */
.hero-section {
  padding: 4.5rem 0 5rem 0;
  background: radial-gradient(circle at 85% 20%, rgba(26, 111, 196, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 15% 85%, rgba(0, 166, 80, 0.08) 0%, transparent 50%),
              #F2F6FB;
  position: relative;
  overflow: visible;
  border-bottom: 1px solid var(--color-border);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-badge-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.hero-headline {
  margin-bottom: 1.25rem;
  color: var(--color-navy);
}

.hero-headline span.accent {
  color: var(--color-blue);
  position: relative;
  display: inline-block;
}

.hero-headline span.accent::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
  height: 8px;
  background: rgba(255, 180, 58, 0.4);
  z-index: -1;
  border-radius: 4px;
}

.hero-intro {
  font-size: 1.12rem;
  line-height: 1.65;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  max-width: 620px;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.hero-beliefs {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
}

.belief-tag {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-navy);
  background: #FFFFFF;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 4px rgba(8, 36, 63, 0.04);
}

/* 3D Hero Medallion */
.hero-visual-stage {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2.5rem 0;
  overflow: visible;
}

.medallion-container {
  width: 320px;
  height: 320px;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
  transition: transform 0.1s cubic-bezier(0.2, 0, 0, 1);
  margin: 1rem auto;
}

/* Extruded Disc */
.medallion-disc {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(145deg, #FFFFFF, #EAF1FA);
  border: 10px solid #FFFFFF;
  box-shadow:
    0 10px 0 #CBDCEE,
    0 18px 0 #B5CCE5,
    0 30px 50px rgba(8, 36, 63, 0.22),
    inset 0 2px 6px rgba(255, 255, 255, 0.8),
    inset 0 -6px 12px rgba(8, 36, 63, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translateZ(20px);
}

/* Moving Light Sweep / Shine */
.medallion-disc::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 60%
  );
  transform: rotate(25deg);
  animation: shineSweep 4.5s infinite;
}

@keyframes shineSweep {
  0% { transform: translateY(-100%) rotate(25deg); }
  35% { transform: translateY(100%) rotate(25deg); }
  100% { transform: translateY(100%) rotate(25deg); }
}

.medallion-logo {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 10px rgba(8, 36, 63, 0.1));
}

/* Floating 3D Pill Chips */
.floating-chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  background: #FFFFFF;
  color: var(--color-navy);
  font-size: 0.82rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 20px rgba(8, 36, 63, 0.14), 0 2px 5px rgba(8, 36, 63, 0.06);
  white-space: nowrap;
  transition: all var(--transition-bounce);
  text-decoration: none;
  cursor: pointer;
}

.floating-chip:hover {
  background: var(--color-navy);
  color: #FFFFFF;
  border-color: var(--color-navy);
  transform: scale(1.08) translateZ(65px) !important;
  box-shadow: 0 14px 28px rgba(8, 36, 63, 0.25);
}

.chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.chip-dot.blue { background: var(--color-blue); }
.chip-dot.green { background: var(--color-green); }
.chip-dot.red { background: var(--color-red); }
.chip-dot.sun { background: var(--color-accent-sun); }

.chip-1 {
  top: -10px;
  left: -20px;
  transform: translateZ(45px);
  animation: floatOrb 5s ease-in-out infinite alternate;
}

.chip-2 {
  top: 40px;
  right: -25px;
  transform: translateZ(35px);
  animation: floatOrb 6s ease-in-out 0.8s infinite alternate-reverse;
}

.chip-3 {
  bottom: 30px;
  left: -25px;
  transform: translateZ(52px);
  animation: floatOrb 5.5s ease-in-out 0.4s infinite alternate;
}

.chip-4 {
  bottom: -15px;
  right: -10px;
  transform: translateZ(42px);
  animation: floatOrb 6.2s ease-in-out 1.2s infinite alternate-reverse;
}

@keyframes floatOrb {
  0% { transform: translateY(0px) translateZ(48px); }
  100% { transform: translateY(-8px) translateZ(55px); }
}

/* -------------------------------------------------------------------------
   7. STATS COUNTER STRIP
   ------------------------------------------------------------------------- */
.stats-strip {
  background: #FFFFFF;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 16px rgba(8, 36, 63, 0.05);
  padding: 2.5rem 0;
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--color-border-subtle);
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-blue);
  line-height: 1.1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.2rem;
}

.stat-sub {
  font-size: 0.78rem;
  color: var(--color-text-subtle);
}

/* -------------------------------------------------------------------------
   8. MARQUEE STRIP (DEEP NAVY BRAND BAR)
   ------------------------------------------------------------------------- */
.marquee-section {
  background: var(--color-navy);
  color: #FFFFFF;
  overflow: hidden;
  padding: 1.15rem 0;
  white-space: nowrap;
  position: relative;
  border-top: 2px solid #0D3F7A;
  border-bottom: 2px solid #0D3F7A;
}

.marquee-track {
  display: inline-flex;
  gap: 2.5rem;
  animation: marqueeScroll 35s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF !important; /* CRISP WHITE */
}

.marquee-badge {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent-sun);
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* -------------------------------------------------------------------------
   9. FOUNDER CARD WITH GRADIENT FRAME
   ------------------------------------------------------------------------- */
.founder-section {
  background: #FFFFFF;
  border-bottom: 1px solid var(--color-border);
  overflow: visible;
  position: relative;
}

.founder-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 4rem;
}

.founder-card-wrap {
  position: relative;
  overflow: visible;
}

.founder-card-offset-frame {
  position: absolute;
  inset: 0.5rem -0.5rem -0.5rem 0.5rem;
  background: linear-gradient(135deg, var(--color-blue), var(--color-green), var(--color-accent-sun));
  border-radius: var(--radius-xl);
  transform: rotate(-2deg);
  opacity: 0.85;
  z-index: 1;
  transition: transform var(--transition-normal);
}

.founder-card-wrap:hover .founder-card-offset-frame {
  transform: rotate(0deg) scale(1.02);
}

.founder-card {
  position: relative;
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  z-index: 2;
}

.founder-photo-box {
  width: 100%;
  height: 340px;
  position: relative;
  background: #08243F;
  overflow: hidden;
}

.founder-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-info {
  padding: 1.75rem 2rem;
}

.founder-name {
  font-size: 1.4rem;
  color: var(--color-navy);
  margin-bottom: 0.25rem;
}

.founder-role {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-blue);
  margin-bottom: 0.5rem;
}

.founder-tag {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  background: #F0F6FC;
  color: var(--color-navy);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

.founder-qualifications-card {
  background: #F8FAFD;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  margin-top: 2rem;
}

.founder-qualifications-card h4 {
  font-size: 1.1rem;
  color: var(--color-navy);
  margin-bottom: 1rem;
}

.qual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.25rem;
}

.qual-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--color-text);
  line-height: 1.4;
}

.qual-item svg {
  flex-shrink: 0;
  color: var(--color-green);
  margin-top: 2px;
}

/* -------------------------------------------------------------------------
   10. 3D TILT SERVICE CARDS & GRIDS
   ------------------------------------------------------------------------- */
#services {
  background: #F2F6FB;
}

.services-grid-12 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-tilt-card {
  perspective: 900px;
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 24px -4px rgba(8, 36, 63, 0.08);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow var(--transition-fast), border-color var(--transition-fast), transform 0.15s ease-out;
  transform-style: preserve-3d;
  transform: perspective(900px) rotateX(var(--card-rx, 0deg)) rotateY(var(--card-ry, 0deg));
}

.service-tilt-card:hover {
  transform: perspective(900px) rotateX(var(--card-rx, 0deg)) rotateY(var(--card-ry, 0deg)) translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(8, 36, 63, 0.16), 0 8px 16px -4px rgba(8, 36, 63, 0.08);
  border-color: var(--color-blue);
}

.card-image-box {
  width: 100%;
  height: 200px;
  position: relative;
  background: #EDF3FA;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-tilt-card:hover .card-img {
  transform: scale(1.05);
}

.img-fallback-panel {
  display: none;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-blue-deep), var(--color-blue));
  color: #FFFFFF;
  padding: 1.5rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.card-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  color: var(--color-navy);
  margin-bottom: 0.5rem;
  transition: color var(--transition-fast);
}

.service-tilt-card:hover .card-title {
  color: var(--color-blue);
}

.card-text {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin-bottom: 1.25rem;
  flex: 1;
}

.card-footer-link {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-blue);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
}

/* -------------------------------------------------------------------------
   11. TRAININGS & KNOWLEDGE TRANSFER SECTION (SOFT BLUE TINT)
   ------------------------------------------------------------------------- */
.section-knowledge-transfer {
  background: #E8F0FA;
  border-top: 1px solid #D2E0EE;
  border-bottom: 1px solid #D2E0EE;
  position: relative;
}

.trainings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.training-card {
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  border: 1px solid #D2E0EE;
  box-shadow: 0 8px 24px -4px rgba(8, 36, 63, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  border-top: 4px solid var(--color-blue);
}

.training-card:nth-child(2) { border-top-color: var(--color-green); }
.training-card:nth-child(3) { border-top-color: var(--color-accent-sun); }
.training-card:nth-child(4) { border-top-color: var(--color-red); }
.training-card:nth-child(5) { border-top-color: var(--color-blue-deep); }
.training-card:nth-child(6) { border-top-color: var(--color-green-deep); }

.training-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px -8px rgba(26, 111, 196, 0.18);
}

.training-card-img-wrap {
  width: 100%;
  height: 180px;
  position: relative;
  background: #E8EFF7;
  overflow: hidden;
}

.training-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.training-card:hover .training-card-img {
  transform: scale(1.05);
}

.training-card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(8, 36, 63, 0.88);
  color: #FFFFFF;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.training-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.training-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-green-deep);
  background: rgba(0, 166, 80, 0.1);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  align-self: flex-start;
  margin-bottom: 0.75rem;
}

.training-title {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  color: var(--color-navy);
}

.training-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  flex: 1;
}

/* Parent Power Highlight Banner (Deep Navy Gradient with Crisp White Text - ZERO BLUE MERGING) */
.parent-power-banner {
  background: linear-gradient(135deg, #0A3568 0%, #08243F 100%);
  border-radius: var(--radius-xl);
  padding: 3.5rem;
  color: #FFFFFF !important;
  margin-top: 3.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 45px -10px rgba(8, 36, 63, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.parent-power-banner::after {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(0, 166, 80, 0.3) 0%, transparent 70%);
  border-radius: 50%;
}

.parent-power-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.parent-power-banner h3 {
  color: #FFFFFF !important;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.parent-power-banner p {
  color: #E2EDF8 !important; /* HIGH CONTRAST CRISP LIGHT TEXT */
  font-size: 1.05rem;
  line-height: 1.6;
}

.parent-power-banner .section-badge {
  background: rgba(255, 180, 58, 0.25);
  color: #FFB43A !important;
  border: 1px solid rgba(255, 180, 58, 0.5);
}

/* -------------------------------------------------------------------------
   12. VIDEO LIBRARIES GRID (DEEP NAVY SECTION, CRISP WHITE & GOLD TEXT)
   ------------------------------------------------------------------------- */
.video-section-dark {
  background: #08243F;
  border-top: 3px solid #0D3F7A;
  border-bottom: 3px solid #0D3F7A;
  color: #FFFFFF !important;
  padding: 5.5rem 0;
}

.video-section-dark .section-title {
  color: #FFFFFF !important;
}

.video-section-dark .section-subtitle {
  color: #B2CCE5 !important;
}

.video-section-dark .section-badge {
  background: rgba(255, 180, 58, 0.2);
  color: #FFB43A !important;
  border: 1px solid rgba(255, 180, 58, 0.4);
}

.videos-grid-20 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

/* Video Card: Rich navy container with 100% white and gold fonts */
.video-library-card {
  background: #0C335C;
  border: 1px solid #1E5088;
  border-radius: var(--radius-md);
  padding: 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #FFFFFF !important;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.video-library-card:hover {
  background: #124376;
  border-color: var(--color-accent-sun);
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.video-card-thumb-wrap {
  width: 100%;
  height: 140px;
  position: relative;
  background: #061A2E;
  overflow: hidden;
}

.video-card-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  opacity: 0.92;
}

.video-library-card:hover .video-card-thumb {
  transform: scale(1.06);
  opacity: 1;
}

.video-play-icon {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 42px;
  height: 42px;
  background: var(--color-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(227, 34, 39, 0.5);
  transition: transform var(--transition-bounce), background var(--transition-fast);
}

.video-library-card:hover .video-play-icon {
  transform: scale(1.15);
}

.video-card-body {
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* NO BLUE FONT: Number is bright gold, Title is pure white, Topic is clear light blue */
.video-card-num {
  font-size: 0.74rem;
  font-weight: 800;
  color: #FFB43A !important; /* GOLD FONT, NEVER BLUE */
  text-transform: uppercase;
  margin-bottom: 0.35rem;
  letter-spacing: 0.05em;
}

.video-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF !important; /* PURE WHITE FONT, NEVER BLUE */
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.video-card-topic {
  font-size: 0.82rem;
  color: #C2DBF2 !important; /* CRISP LIGHT WHITE-BLUE, NEVER DARK */
  line-height: 1.35;
}

/* -------------------------------------------------------------------------
   13. SERVICE & SUBPAGE HERO (RICH DEEP NAVY BRAND GRADIENT)
   ------------------------------------------------------------------------- */
.subpage-hero {
  padding: 4rem 0 3.5rem;
  background: linear-gradient(135deg, #0A3568 0%, #08243F 100%);
  border-bottom: 3px solid #1A6FC4;
  color: #FFFFFF !important;
  position: relative;
  overflow: hidden;
}

.subpage-hero::before {
  content: "";
  position: absolute;
  top: -60px;
  right: -60px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 166, 80, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.breadcrumb-nav a {
  color: #9ECBF7 !important; /* LIGHT BLUE FONT */
}

.breadcrumb-nav a:hover {
  color: #FFFFFF !important;
}

.breadcrumb-sep {
  color: #5F87B0;
}

.breadcrumb-current {
  color: #FFFFFF !important;
  font-weight: 700;
}

.subpage-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.subpage-hero-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.subpage-hero .section-badge {
  background: rgba(255, 180, 58, 0.2);
  color: #FFB43A !important;
  border: 1px solid rgba(255, 180, 58, 0.4);
}

.subpage-hero-title {
  margin-bottom: 0.25rem;
  color: #FFFFFF !important;
}

.subpage-tagline {
  font-size: 1.12rem;
  color: #CBDCEE !important;
  line-height: 1.6;
}

.subpage-hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
}

/* Hero featured image banner card */
.subpage-featured-card {
  position: relative;
  width: 100%;
  height: 290px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(8, 36, 63, 0.15);
  border: 4px solid rgba(255, 255, 255, 0.95);
  background: #08243F;
}

.subpage-featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.subpage-featured-card:hover .subpage-featured-img {
  transform: scale(1.03);
}

.subpage-banner-badge {
  position: absolute;
  bottom: 14px;
  left: 14px;
  background: rgba(8, 36, 63, 0.9);
  color: #FFFFFF !important;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00E676;
  box-shadow: 0 0 8px #00E676;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

/* Detail page layout with sidebar */
.service-detail-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 3.5rem;
  align-items: flex-start;
}

.service-main-col {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.service-info-block {
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  padding: 2.25rem;
  box-shadow: var(--shadow-sm);
}

.service-info-block h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-navy);
  margin-bottom: 1rem;
  font-size: 1.35rem;
}

.service-info-block ul {
  padding-left: 1.5rem;
  margin-top: 0.75rem;
}

.service-info-block li {
  margin-bottom: 0.6rem;
  color: var(--color-text-muted);
}

.service-sidebar-col {
  position: relative;
}

.service-sidebar-card {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
}

.service-sidebar-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
}

/* Quick pills navigation bar for subpages */
.pills-scroll-bar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.8rem 0;
  margin: 1.5rem 0 0.5rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  -webkit-overflow-scrolling: touch;
}

.pill-nav-item {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.45rem 0.95rem;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-navy);
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.pill-nav-item:hover, .pill-nav-item.active {
  background: var(--color-blue);
  color: #FFFFFF !important;
  border-color: var(--color-blue);
}

/* -------------------------------------------------------------------------
   14. VIDEO PLAYER PLACEHOLDER & WATCH CARD
   ------------------------------------------------------------------------- */
.video-player-box {
  background: #08243F;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  margin: 1.5rem 0 2rem;
  border: 1px solid #1B4572;
}

.video-screen-aspect {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: radial-gradient(circle, #0F365E 0%, #051A2E 100%);
}

.video-screen-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.video-play-btn-large {
  width: 72px;
  height: 72px;
  background: var(--color-red);
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(227, 34, 39, 0.6);
  margin-bottom: 1.25rem;
  transition: transform var(--transition-bounce);
  text-decoration: none;
}

.video-play-btn-large:hover {
  transform: scale(1.15);
}

.video-caption-strip {
  padding: 1rem 1.5rem;
  background: #061A2E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  border-top: 1px solid #143559;
}

.video-caption-strip span {
  font-size: 0.85rem;
  color: #CBDCEE !important;
}

.video-caption-strip a {
  font-size: 0.85rem;
  color: #FFB43A !important; /* GOLD FONT */
  font-weight: 700;
}

.video-caption-strip a:hover {
  color: #FFFFFF !important;
}

/* -------------------------------------------------------------------------
   15. REAL EMBEDDED GOOGLE MAP & CONTACT SECTION
   ------------------------------------------------------------------------- */
.contact-section-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3.5rem;
  align-items: flex-start;
}

.contact-card {
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 3rem;
  box-shadow: var(--shadow-lg);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.85rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--color-text);
  background: #F8FAFD;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.form-control:focus {
  outline: none;
  background: #FFFFFF;
  border-color: var(--color-blue);
  box-shadow: 0 0 0 4px rgba(26, 111, 196, 0.12);
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

.contact-meta-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meta-info-card {
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.meta-info-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-blue);
}

.meta-icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(26, 111, 196, 0.1);
  color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.meta-card-content h4 {
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.meta-card-content p {
  font-size: 0.9rem;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Real Interactive Google Map Embed Card */
.map-embed-card {
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
}

.map-header-bar, .map-header-strip {
  padding: 0.85rem 1.25rem;
  background: #F4F8FC;
  border-bottom: 1px solid var(--color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.map-header-info {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-navy);
}

.map-status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-green);
  box-shadow: 0 0 0 3px rgba(0, 166, 80, 0.2);
  display: inline-block;
  flex-shrink: 0;
}

.map-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-blue);
  background: #FFFFFF;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

.map-embed-frame-wrap, .map-iframe-container {
  position: relative;
  width: 100%;
  height: 290px;
  background: #E8F0FA;
}

.map-embed-frame-wrap iframe, .map-iframe-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.map-footer-bar, .map-footer-strip {
  padding: 0.9rem 1.25rem;
  background: #FFFFFF;
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.map-address-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.map-btn-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* -------------------------------------------------------------------------
   16. FOOTER & LEGAL INFORMATION (DEEP NAVY, ZERO BLUE MERGING)
   ------------------------------------------------------------------------- */
.site-footer {
  background: #08243F;
  color: #FFFFFF !important;
  padding-top: 5rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr 1fr;
  gap: 3rem;
  padding-bottom: 4rem;
}

.footer-col h4 {
  color: #FFFFFF !important;
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-col h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 2px;
  background: var(--color-accent-sun);
}

.footer-col p {
  color: #CBDCEE !important;
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-nav-link {
  color: #CBDCEE !important;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.footer-nav-link:hover {
  color: #FFFFFF !important;
  padding-left: 4px;
}

.contact-line {
  font-size: 0.88rem;
  color: #CBDCEE !important;
  margin-bottom: 0.85rem;
  line-height: 1.5;
}

.contact-line strong {
  color: #FFFFFF !important;
}

.contact-line a {
  color: #FFFFFF !important; /* PURE WHITE LINK, NEVER BLUE */
  text-decoration: underline;
  text-decoration-color: #FFB43A;
}

.contact-line a:hover {
  color: #FFB43A !important;
}

.social-links-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF !important;
  transition: all var(--transition-fast);
}

.social-icon:hover {
  background: var(--color-blue);
  color: #FFFFFF !important;
  transform: translateY(-2px);
}

.footer-bottom {
  background: #051A2E;
  padding: 1.5rem 0;
  border-top: 1px solid #0F2D4E;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.82rem;
  color: #9BB3CB !important;
}

.footer-address-note {
  margin-bottom: 0;
}

/* -------------------------------------------------------------------------
   17. FLOATING ACTION BUTTONS (ROUND WHATSAPP & PHONE)
   ------------------------------------------------------------------------- */
.floating-actions {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1500;
}

.fab-btn {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF !important;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(8, 36, 63, 0.3);
  transition: transform var(--transition-bounce), box-shadow var(--transition-fast);
}

.fab-btn:hover {
  transform: scale(1.12);
  box-shadow: 0 12px 30px rgba(8, 36, 63, 0.45);
}

.fab-whatsapp {
  background: #25D366;
}

.fab-phone {
  background: var(--color-blue);
}

/* -------------------------------------------------------------------------
   18. SCROLL-REVEAL ANIMATIONS (.reveal)
   ------------------------------------------------------------------------- */
/* Default safe visibility */
.reveal {
  opacity: 1;
  transform: none;
}

/* Progressive enhancement with JS */
html.js .reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

html.js .reveal.revealed,
html.js .reveal.active {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* -------------------------------------------------------------------------
   19. RESPONSIVE LAYOUTS (TABLET & MOBILE)
   ------------------------------------------------------------------------- */

/* Tablet Breakpoint (<= 980px) */
@media (max-width: 980px) {
  .desktop-nav {
    display: none !important;
  }

  .mobile-toggle {
    display: flex !important;
  }

  .header-container,
  .header-inner {
    padding: 0 1.25rem;
  }

  .services-grid-12 {
    grid-template-columns: repeat(2, 1fr);
  }

  .trainings-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .videos-grid-20 {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

/* Mid Tablet & Small Screens (<= 980px) */
@media (max-width: 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-content {
    align-items: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-beliefs {
    justify-content: center;
  }

  .subpage-hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .subpage-featured-card {
    height: 240px;
    max-width: 560px;
    margin: 0 auto;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-item {
    border-right: none;
    border-bottom: 1px solid var(--color-border-subtle);
    padding-bottom: 1.5rem;
  }

  .stat-item:nth-child(3), .stat-item:nth-child(4) {
    border-bottom: none;
    padding-bottom: 0.5rem;
  }

  .founder-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .service-detail-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .service-sidebar-card {
    position: static;
  }

  .contact-section-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .parent-power-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

/* Small Tablets / Large Phones (<= 768px) */
@media (max-width: 768px) {
  .section {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .videos-grid-20 {
    grid-template-columns: repeat(2, 1fr);
  }

  .parent-power-banner {
    padding: 2.5rem 1.75rem;
  }

  .qual-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Mobile Phones (<= 640px) */
@media (max-width: 640px) {
  .services-grid-12, .trainings-grid, .videos-grid-20 {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stat-item {
    border-bottom: 1px solid var(--color-border-subtle);
    padding-bottom: 1.25rem;
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .hero-section {
    padding: 3rem 0 3.5rem;
  }

  .parent-power-banner {
    padding: 2rem 1.25rem;
  }

  .contact-card {
    padding: 1.75rem 1.25rem;
  }

  .subpage-featured-card {
    height: 200px;
  }

  .subpage-hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .subpage-hero-actions .btn {
    width: 100%;
  }

  /* Prevent medallion overflow on narrow mobile screens */
  .medallion-container {
    width: 250px;
    height: 250px;
  }

  .medallion-logo {
    width: 180px;
    height: 180px;
  }

  .chip-1 { top: -8px; left: 8px; }
  .chip-2 { top: 50px; right: -5px; }
  .chip-3 { bottom: 50px; left: -5px; }
  .chip-4 { bottom: -8px; right: 8px; }

  .floating-chip {
    font-size: 0.72rem;
    padding: 0.35rem 0.65rem;
  }

  /* Hide header consultation button on small mobile so brand fits clean */
  .btn-header {
    display: none !important;
  }

  .brand-name {
    font-size: 0.95rem;
  }

  .brand-sub {
    font-size: 0.62rem;
  }

  .brand-logo {
    width: 38px;
    height: 38px;
  }

  .floating-actions {
    bottom: 16px;
    right: 16px;
    gap: 8px;
  }

  .fab-btn {
    width: 48px;
    height: 48px;
  }
}

/* -------------------------------------------------------------------------
   20. ACCESSIBILITY & PREFERS MODES
   ------------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .medallion-container, .service-tilt-card {
    transform: none !important;
  }

  .reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
`;

fs.writeFileSync(path.join(process.cwd(), 'assets/css/style.css'), cssContent);
if (fs.existsSync(path.join(process.cwd(), 'public/assets/css'))) {
  fs.writeFileSync(path.join(process.cwd(), 'public/assets/css/style.css'), cssContent);
}
console.log('Successfully wrote updated rich brand assets/css/style.css');
