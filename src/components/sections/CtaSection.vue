<template>
  <section class="cta-section section-padding" id="contact">
    <div class="container cta-section__container">
      <!-- Clean, Light Grey Card Container -->
      <div class="cta-container reveal">
        
        <!-- Delicate Grey Dot Grid Pattern (Top-Left) -->
        <svg class="cta-pattern cta-pattern--dots-tl" width="72" height="72" fill="none">
          <pattern id="dots-tl" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(100, 116, 139, 0.12)" />
          </pattern>
          <rect width="72" height="72" fill="url(#dots-tl)" />
        </svg>

        <!-- Delicate Grey Dot Grid Pattern (Bottom-Left) -->
        <svg class="cta-pattern cta-pattern--dots-bl" width="72" height="72" fill="none">
          <pattern id="dots-bl" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(100, 116, 139, 0.12)" />
          </pattern>
          <rect width="72" height="72" fill="url(#dots-bl)" />
        </svg>

        <!-- Faint, Abstract Concentric Curved Line Pattern (Right Side) -->
        <svg class="cta-pattern cta-pattern--curves" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="200" r="120" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="160" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="200" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="240" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="280" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="320" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="360" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
          <circle cx="400" cy="200" r="400" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.25"/>
        </svg>

        <div class="cta-content">
          <!-- Left Panel: Text Headings -->
          <div class="cta-left-panel">
            <div class="cta-badge reveal delay-100">
              <span class="cta-badge__dot">●</span>
              MULAI SEKARANG
            </div>
            
            <h2 class="cta-title reveal delay-200">
              Siap Memulai<br/>Revolusi <span class="highlight">Digital</span> Anda?
            </h2>

            <div class="cta-divider reveal delay-200"></div>
            
            <p class="cta-subtitle reveal delay-300">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan visi dan teknologi Anda menjadi nilai yang luar biasa.
            </p>
          </div>

          <!-- Right Panel: Floating Card Button and Feature Badges -->
          <div class="cta-right-panel">
            <!-- White floated panel acting as the button -->
            <div class="cta-action-wrap reveal delay-400">
              <a href="mailto:hello@ngodingngedit.id" class="cta-btn-card">
                <div class="cta-btn-left">
                  <svg class="cta-btn-icon cta-btn-icon--envelope" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span class="cta-btn-text">Hubungi Kami Sekarang</span>
                </div>
                <svg class="cta-btn-icon cta-btn-icon--arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <!-- Features list (Horizontal on Desktop, stacked on Mobile) -->
            <div class="cta-features reveal delay-500">
              <div class="cta-feature-item">
                <div class="cta-feature-icon-box">
                  <svg class="cta-feature-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span class="cta-feature-text">Respons dalam &lt; 24 jam</span>
              </div>
              
              <div class="cta-vertical-divider"></div>

              <div class="cta-feature-item">
                <div class="cta-feature-icon-box">
                  <svg class="cta-feature-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span class="cta-feature-text">Konsultasi gratis</span>
              </div>

              <div class="cta-vertical-divider"></div>

              <div class="cta-feature-item">
                <div class="cta-feature-icon-box">
                  <svg class="cta-feature-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span class="cta-feature-text">Privasi data terjamin</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.cta-section .reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.cta-section {
  position: relative;
  background-color: #F9F7F7; /* Slightly textured off-white background */
  padding: var(--space-3xl) 0;
  overflow: hidden;
}

/* Light Grey Outer Container Card */
.cta-container {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.05);
  border-radius: 24px;
  padding: 4.5rem var(--space-3xl);
  overflow: hidden;
  box-shadow: 
    inset 0 2px 6px rgba(255, 255, 255, 0.6), 
    0 16px 48px -12px rgba(17, 45, 78, 0.06);
}

/* Background Patterns inside container */
.cta-pattern {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.cta-pattern--dots-tl {
  top: 24px;
  left: 24px;
}

.cta-pattern--dots-bl {
  bottom: 24px;
  left: 24px;
}

.cta-pattern--curves {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
}

/* Layout Alignments */
.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3xl);
}

.cta-left-panel {
  flex: 1;
  text-align: left;
}

/* Pill Tag Badge */
.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(37, 99, 235, 0.08); /* Soft blue */
  color: #2563EB; /* Bright Blue */
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
}

.cta-badge__dot {
  font-size: 0.6rem;
  margin-right: 2px;
}

/* Navy Typography */
.cta-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.8vw, 2.75rem);
  font-weight: 800;
  color: #112D4E; /* Deep Navy Blue */
  line-height: 1.15;
  margin: 0;
}

.cta-title .highlight {
  color: #2563EB; /* Bright Blue */
}

/* Accent Divider line */
.cta-divider {
  width: 44px;
  height: 3.5px;
  background: #2563EB;
  border-radius: 2px;
  margin: 1.5rem 0;
}

.cta-subtitle {
  color: #64748B; /* Dark Muted Grey */
  font-size: 1.025rem;
  line-height: 1.65;
  max-width: 460px;
  margin: 0;
}

/* Right Panel Layout */
.cta-right-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;
  width: 100%;
  max-width: 420px; /* Aligns perfectly with the button's max-width! */
}

.cta-action-wrap {
  width: 100%;
}

/* White Floated Button Card */
.cta-btn-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.04);
  border-radius: 16px;
  padding: 1.25rem 1.75rem;
  text-decoration: none;
  box-shadow: 
    0 1px 2px rgba(17, 45, 78, 0.02),
    0 12px 30px rgba(17, 45, 78, 0.06);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-btn-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 4px 6px rgba(17, 45, 78, 0.02),
    0 20px 40px rgba(17, 45, 78, 0.12);
}

.cta-btn-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cta-btn-icon {
  color: #2563EB; /* Blue icon */
  transition: transform 0.3s ease;
}

.cta-btn-icon--arrow {
  color: #2563EB;
}

.cta-btn-card:hover .cta-btn-icon--arrow {
  transform: translateX(4px);
}

.cta-btn-text {
  color: #112D4E; /* Deep Navy */
  font-weight: 700;
  font-size: 1.0625rem;
}

/* Features List */
.cta-features {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Perfect left-to-right parallel distribution! */
  width: 100%;
}

.cta-feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 125px; /* Restrict width so it wraps into two lines beautifully */
}

.cta-feature-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08); /* Soft blue round */
  color: #2563EB;
  flex-shrink: 0;
}

.cta-feature-text {
  font-size: 0.785rem; /* Sleek, crisp size for wrapping */
  font-weight: 600;
  color: #112D4E; /* Navy Blue text */
  line-height: 1.35;
  white-space: normal; /* Enables premium two-line wrapping */
}

/* Vertical Separator */
.cta-vertical-divider {
  width: 1.5px;
  height: 24px; /* Slightly taller for two-line text alignment */
  background: rgba(17, 45, 78, 0.08);
  flex-shrink: 0;
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
  .cta-container {
    padding: 3.5rem var(--space-xl);
  }

  .cta-content {
    gap: var(--space-xl);
  }

  .cta-right-panel {
    width: 50%;
  }

  .cta-features {
    gap: var(--space-xs);
  }

  .cta-feature-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 992px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .cta-left-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cta-title {
    font-size: clamp(2.25rem, 5vw, 2.75rem);
  }

  .cta-divider {
    margin: 1.25rem auto; /* Centered line */
  }

  .cta-subtitle {
    max-width: 100%;
  }

  .cta-right-panel {
    width: 100%;
    align-items: center;
    gap: 2rem;
  }

  .cta-btn-card {
    margin: 0 auto;
  }

  .cta-features {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .cta-container {
    padding: 3rem 1.5rem;
  }

  /* Patterns scaled down and repositioned so they don't overlap centered text */
  .cta-pattern--dots-tl {
    top: 16px;
    left: 16px;
    width: 50px;
    height: 50px;
  }

  .cta-pattern--dots-bl {
    bottom: 16px;
    left: 16px;
    width: 50px;
    height: 50px;
  }

  .cta-pattern--curves {
    width: 250px;
    height: 250px;
    opacity: 0.5;
  }

  .cta-badge {
    margin-bottom: 1rem;
  }

  /* Feature points stack in a single centered vertical column below button */
  .cta-features {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .cta-vertical-divider {
    display: none; /* Hide desktop dividers in mobile vertical stack */
  }

  .cta-feature-item {
    max-width: none;
    width: 100%;
    justify-content: center;
  }

  .cta-feature-text {
    font-size: 0.85rem;
    white-space: normal;
  }
}
</style>
