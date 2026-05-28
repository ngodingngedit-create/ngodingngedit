<template>
  <main class="pd-page">
    <!-- Breadcrumbs & Category Badge Header -->
    <header class="pd-header">
      <!-- Faint circular and dot grids background patterns -->
      <div class="pd-header__bg" aria-hidden="true">
        <!-- SVG Dot Pattern -->
        <svg class="pd-header__pattern pd-header__pattern--dots" width="100" height="100" fill="none">
          <pattern id="header-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(37, 99, 235, 0.08)" />
          </pattern>
          <rect width="100" height="100" fill="url(#header-dots)" />
        </svg>
        <!-- Concentric circles -->
        <svg class="pd-header__pattern pd-header__pattern--curves" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="100" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
          <circle cx="200" cy="200" r="150" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
          <circle cx="200" cy="200" r="200" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
        </svg>
      </div>

      <div class="container pd-header__container">
        <!-- Left Column: Headings, stack tags, buttons -->
        <div class="pd-header__left reveal">
          <nav class="pd-breadcrumbs" aria-label="Breadcrumb">
            <router-link to="/">{{ $t('pd.home') }}</router-link>
            <span class="divider">/</span>
            <router-link to="/#portfolio">{{ $t('pd.portfolio') }}</router-link>
            <span class="divider">/</span>
            <span class="current">EduLearn Platform</span>
          </nav>

          <span class="pd-badge">
            <span class="pd-badge__dot">●</span>
            EDUTECH
          </span>

          <h1 class="pd-title">EduLearn Platform</h1>
          
          <p class="pd-description">
            {{ $t('pd.description') }}
          </p>

          <!-- Tech stack tags -->
          <div class="pd-tags">
            <span class="pd-tag">Vue.js</span>
            <span class="pd-tag">TailwindCSS</span>
            <span class="pd-tag">Pinia</span>
            <span class="pd-tag">Node.js</span>
            <span class="pd-tag">PostgreSQL</span>
          </div>

          <!-- Primary Actions -->
          <div class="pd-actions">
            <a href="https://edulearn-platform.demo" target="_blank" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>{{ $t('pd.livePreview') }}</span>
            </a>
            <a href="https://github.com/ngodingngedit/edulearn-platform" target="_blank" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>Github</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Premium Mockup (Laptop & Overlapping Phone) -->
        <div class="pd-header__right reveal delay-200">
          <div class="mockup-wrap">
            <!-- MacBook Pro Laptop Mockup -->
            <div class="mockup-laptop">
              <div class="mockup-laptop__screen">
                <!-- Dashboard Web View -->
                <div class="mockup-web">
                  <!-- Sidebar -->
                  <div class="mockup-web__sidebar">
                    <div class="logo-dot"></div>
                    <div class="menu-item active"></div>
                    <div class="menu-item"></div>
                    <div class="menu-item"></div>
                    <div class="menu-item"></div>
                  </div>
                  <!-- Content -->
                  <div class="mockup-web__content">
                    <div class="mockup-web__header">
                      <div class="bar-title">EduLearn Portal</div>
                      <div class="avatar"></div>
                    </div>
                    <div class="mockup-web__grid">
                      <div class="card card--main">
                        <div class="card-bar"></div>
                        <div class="card-bar card-bar--short"></div>
                        <!-- Micro Line Chart -->
                        <svg class="mini-chart" viewBox="0 0 100 30">
                          <path d="M0,25 Q15,10 30,18 T60,5 T90,20 L100,20" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round"></path>
                          <circle cx="60" cy="5" r="3" fill="#2563EB"></circle>
                        </svg>
                      </div>
                      <div class="card card--side">
                        <div class="progress-ring">
                          <svg viewBox="0 0 36 36">
                            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EFF6FF" stroke-width="3"></path>
                            <path class="circle" stroke-dasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2563EB" stroke-width="3" stroke-linecap="round"></path>
                          </svg>
                          <span class="progress-val">78%</span>
                        </div>
                      </div>
                    </div>
                    <div class="mockup-web__list">
                      <div class="list-row"></div>
                      <div class="list-row"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mockup-laptop__base"></div>
            </div>

            <!-- Overlapping Smartphone Mockup -->
            <div class="mockup-phone">
              <div class="mockup-phone__screen">
                <div class="mockup-phone__content">
                  <div class="phone-header">
                    <div class="notch"></div>
                    <div class="phone-title">EduLearn App</div>
                  </div>
                  <!-- Mobile Course Grid -->
                  <div class="phone-card">
                    <div class="phone-img"></div>
                    <div class="phone-bar"></div>
                    <div class="phone-bar phone-bar--short"></div>
                  </div>
                  <div class="phone-card">
                    <div class="phone-img"></div>
                    <div class="phone-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Project Overview (4 Columns Desktop / Stack Mobile) -->
    <section class="pd-section pd-overview-section">
      <div class="container">
        <div class="pd-overview-grid reveal">
          <div class="overview-card">
            <span class="label">{{ $t('pd.role') }}</span>
            <h3 class="value">Lead Frontend</h3>
          </div>
          <div class="overview-card">
            <span class="label">{{ $t('pd.duration') }}</span>
            <h3 class="value">{{ $t('pd.durationValue') }}</h3>
          </div>
          <div class="overview-card">
            <span class="label">{{ $t('pd.category') }}</span>
            <h3 class="value">Edutech / LMS</h3>
          </div>
          <div class="overview-card">
            <span class="label">{{ $t('pd.client') }}</span>
            <h3 class="value">EduLearn Corp</h3>
          </div>
        </div>

        <div class="pd-section-intro reveal delay-100">
          <h2 class="section-title">{{ $t('pd.overviewTitle') }}</h2>
          <p class="section-subtitle">
            {{ $t('pd.overviewDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Fitur Utama (3 Columns Desktop / Stack Mobile) -->
    <section class="pd-section pd-features-section">
      <div class="container">
        <h2 class="section-title text-center reveal">{{ $t('pd.featuresTitle') }}</h2>
        
        <div class="pd-features-grid">
          <!-- Feature Card 1 -->
          <div class="feature-card reveal delay-100">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="12" x2="17" y2="12"></line>
                <line x1="12" y1="16" x2="17" y2="16"></line>
                <line x1="12" y1="8" x2="17" y2="8"></line>
              </svg>
            </div>
            <h3 class="feature-title">{{ $t('pd.feature1Title') }}</h3>
            <p class="feature-desc">
              {{ $t('pd.feature1Desc') }}
            </p>
          </div>

          <!-- Feature Card 2 -->
          <div class="feature-card reveal delay-200">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="feature-title">{{ $t('pd.feature2Title') }}</h3>
            <p class="feature-desc">
              {{ $t('pd.feature2Desc') }}
            </p>
          </div>

          <!-- Feature Card 3 -->
          <div class="feature-card reveal delay-300">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3 class="feature-title">{{ $t('pd.feature3Title') }}</h3>
            <p class="feature-desc">
              {{ $t('pd.feature3Desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tampilan Aplikasi (UI Gallery Interactive) -->
    <section class="pd-section pd-gallery-section">
      <div class="container">
        <h2 class="section-title text-center reveal">{{ $t('pd.galleryTitle') }}</h2>
        <p class="section-subtitle text-center reveal delay-100" style="margin-bottom: 3rem;">
          {{ $t('pd.gallerySubtitle') }}
        </p>

        <!-- Main Screenshot View -->
        <div class="pd-gallery-viewer reveal">
          <!-- Screen 1: Dashboard -->
          <div v-if="activeScreen === 0" class="gallery-mockup gallery-mockup--dash animate-fade">
            <div class="mockup-web-full">
              <!-- Sidebar -->
              <div class="web-sidebar">
                <div class="logo">EduLearn</div>
                <div class="nav-links">
                  <div class="link active"><span>{{ $t('pd.mockupDashboard') }}</span></div>
                  <div class="link"><span>{{ $t('pd.mockupMyClasses') }}</span></div>
                  <div class="link"><span>{{ $t('pd.mockupQuiz') }}</span></div>
                  <div class="link"><span>{{ $t('pd.mockupProgress') }}</span></div>
                </div>
              </div>
              <!-- Content Screen -->
              <div class="web-body">
                <div class="body-header">
                  <h3>{{ $t('pd.mockupDashboardTitle') }}</h3>
                  <div class="avatar-wrap">
                    <span class="user-name">Faisal A.</span>
                    <div class="user-avatar"></div>
                  </div>
                </div>
                <div class="body-cards">
                  <div class="b-card b-card--welcome">
                    <h4>{{ $t('pd.mockupWelcome') }}</h4>
                    <p>{{ $t('pd.mockupContinue') }}</p>
                  </div>
                  <div class="b-card">
                    <span class="b-label">{{ $t('pd.mockupStudyTime') }}</span>
                    <strong class="b-val">{{ $t('pd.mockupStudyVal') }}</strong>
                  </div>
                  <div class="b-card">
                    <span class="b-label">{{ $t('pd.mockupQuizDone') }}</span>
                    <strong class="b-val">{{ $t('pd.mockupQuizVal') }}</strong>
                  </div>
                </div>
                <!-- Main Chart Graph Area -->
                <div class="body-chart-card">
                  <h4>{{ $t('pd.mockupChartTitle') }}</h4>
                  <svg class="main-svg-chart" viewBox="0 0 600 150">
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.15"></stop>
                        <stop offset="100%" stop-color="#2563EB" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <!-- Area under chart -->
                    <path d="M0,130 L100,80 L200,95 L300,50 L400,65 L500,25 L600,60 L600,150 L0,150 Z" fill="url(#chart-grad)"></path>
                    <!-- Smooth line -->
                    <path d="M0,130 L100,80 L200,95 L300,50 L400,65 L500,25 L600,60" fill="none" stroke="#2563EB" stroke-width="3" stroke-linecap="round"></path>
                    <!-- Circles on vertices -->
                    <circle cx="100" cy="80" r="4" fill="#2563EB"></circle>
                    <circle cx="300" cy="50" r="4" fill="#2563EB"></circle>
                    <circle cx="500" cy="25" r="4" fill="#2563EB"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Screen 2: Video Player -->
          <div v-if="activeScreen === 1" class="gallery-mockup gallery-mockup--video animate-fade">
            <div class="mockup-web-full">
              <!-- Sidebar -->
              <div class="web-sidebar">
                <div class="logo">EduLearn</div>
                <div class="nav-links">
                  <div class="link"><span>Dashboard</span></div>
                  <div class="link active"><span>Kelas Saya</span></div>
                  <div class="link"><span>Kuis</span></div>
                </div>
              </div>
              <!-- Video body -->
              <div class="web-body" style="padding: 1.5rem;">
                <div class="video-container">
                  <div class="video-player">
                    <!-- Play icon overlay -->
                    <div class="play-btn">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <div class="video-controls">
                      <div class="progress-bar"></div>
                    </div>
                  </div>
                  <!-- Syllabus Panel right side -->
                  <div class="video-syllabus">
                    <h4>Materi Kelas: Vue.js Router</h4>
                    <div class="syll-item active">01. Pengantar Routing</div>
                    <div class="syll-item">02. Setup Vue Router</div>
                    <div class="syll-item">03. Dynamic Route Params</div>
                    <div class="syll-item">04. Navigation Guards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Screen 3: Quiz Screen -->
          <div v-if="activeScreen === 2" class="gallery-mockup gallery-mockup--quiz animate-fade">
            <div class="mockup-web-full">
              <!-- Sidebar -->
              <div class="web-sidebar">
                <div class="logo">EduLearn</div>
                <div class="nav-links">
                  <div class="link"><span>Dashboard</span></div>
                  <div class="link"><span>Kelas Saya</span></div>
                  <div class="link active"><span>Kuis</span></div>
                </div>
              </div>
              <!-- Quiz Content -->
              <div class="web-body">
                <div class="quiz-body-wrap">
                  <div class="quiz-progress-top">
                    <span>Soal 3 dari 10</span>
                    <div class="bar-bg"><div class="bar-fill" style="width: 30%;"></div></div>
                  </div>
                  <div class="quiz-question-card">
                    <h3>Bagaimana cara membuat rute dinamis pada Vue Router?</h3>
                    <div class="quiz-options">
                      <div class="quiz-option active">A. Menggunakan sintaks :id pada path rute</div>
                      <div class="quiz-option">B. Menggunakan method dynamicRoutes()</div>
                      <div class="quiz-option">C. Menambahkan query string dynamic=true</div>
                      <div class="quiz-option">D. Menggunakan tag v-route:dynamic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Thumbnails Selector (Horizontal Scroll Carousel on Mobile) -->
        <div class="pd-gallery-carousel reveal delay-200">
          <button 
            v-for="(thumb, idx) in thumbs" 
            :key="idx" 
            class="gallery-thumb"
            :class="{ active: activeScreen === idx }"
            @click="activeScreen = idx"
          >
            <span class="thumb-badge">Screen {{ idx + 1 }}</span>
            <span class="thumb-title">{{ thumb.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Proses Pengembangan (Horizontal Timeline Desktop / Vertical Mobile) -->
    <section class="pd-section pd-process-section">
      <div class="container">
        <h2 class="section-title text-center reveal">{{ $t('pd.processTitle') }}</h2>
        <p class="section-subtitle text-center reveal delay-100" style="margin-bottom: 4.5rem;">
          {{ $t('pd.processSubtitle') }}
        </p>

        <!-- Dynamic Timeline Grid -->
        <div class="pd-timeline-wrap reveal">
          <!-- Center connecting line for desktop -->
          <div class="pd-timeline__line"></div>

          <div class="pd-timeline-grid">
            <div class="timeline-step">
              <span class="step-num">Step 01</span>
              <div class="step-card">
                <h4 class="step-title">{{ $t('pd.step1Title') }}</h4>
                <p class="step-desc">{{ $t('pd.step1Desc') }}</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="step-num">Step 02</span>
              <div class="step-card">
                <h4 class="step-title">{{ $t('pd.step2Title') }}</h4>
                <p class="step-desc">{{ $t('pd.step2Desc') }}</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="step-num">Step 03</span>
              <div class="step-card">
                <h4 class="step-title">{{ $t('pd.step3Title') }}</h4>
                <p class="step-desc">{{ $t('pd.step3Desc') }}</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="step-num">Step 04</span>
              <div class="step-card">
                <h4 class="step-title">{{ $t('pd.step4Title') }}</h4>
                <p class="step-desc">{{ $t('pd.step4Desc') }}</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="step-num">Step 05</span>
              <div class="step-card">
                <h4 class="step-title">{{ $t('pd.step5Title') }}</h4>
                <p class="step-desc">{{ $t('pd.step5Desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Section (Tech Table & Challenges) -->
    <section class="pd-section pd-tech-section">
      <div class="container">
        <div class="pd-tech-layout">
          <!-- Left side: Tech Table -->
          <div class="pd-tech-left reveal">
            <h2 class="section-title">{{ $t('pd.techTitle') }}</h2>
            <p class="section-subtitle" style="margin-bottom: 2rem;">{{ $t('pd.techSubtitle') }}</p>
            
            <div class="table-wrap">
              <table class="tech-table">
                <thead>
                  <tr>
                    <th>{{ $t('pd.techCol1') }}</th>
                    <th>{{ $t('pd.techCol2') }}</th>
                    <th>{{ $t('pd.techCol3') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Vue.js 3</strong></td>
                    <td>{{ $t('pd.tech1Func') }}</td>
                    <td>{{ $t('pd.tech1Adv') }}</td>
                  </tr>
                  <tr>
                    <td><strong>TailwindCSS</strong></td>
                    <td>{{ $t('pd.tech2Func') }}</td>
                    <td>{{ $t('pd.tech2Adv') }}</td>
                  </tr>
                  <tr>
                    <td><strong>Pinia</strong></td>
                    <td>{{ $t('pd.tech3Func') }}</td>
                    <td>{{ $t('pd.tech3Adv') }}</td>
                  </tr>
                  <tr>
                    <td><strong>Node.js</strong></td>
                    <td>{{ $t('pd.tech4Func') }}</td>
                    <td>{{ $t('pd.tech4Adv') }}</td>
                  </tr>
                  <tr>
                    <td><strong>PostgreSQL</strong></td>
                    <td>{{ $t('pd.tech5Func') }}</td>
                    <td>{{ $t('pd.tech5Adv') }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right side: Challenges & Solutions -->
          <div class="pd-tech-right reveal delay-200">
            <h2 class="section-title">{{ $t('pd.challengesTitle') }}</h2>
            <p class="section-subtitle" style="margin-bottom: 2rem;">{{ $t('pd.challengesSubtitle') }}</p>

            <div class="challenges-list">
              <div class="challenge-item">
                <div class="challenge-header">
                  <span class="badge badge--red">{{ $t('pd.challenge1Label') }}</span>
                  <h4>{{ $t('pd.challenge1Title') }}</h4>
                </div>
                <p class="desc">
                  {{ $t('pd.challenge1Desc') }}
                </p>
                <div class="solution-header">
                  <span class="badge badge--green">{{ $t('pd.solution1Label') }}</span>
                </div>
                <p class="desc desc--sol">
                  {{ $t('pd.solution1Desc') }}
                </p>
              </div>

              <div class="challenge-item">
                <div class="challenge-header">
                  <span class="badge badge--red">{{ $t('pd.challenge2Label') }}</span>
                  <h4>{{ $t('pd.challenge2Title') }}</h4>
                </div>
                <p class="desc">
                  {{ $t('pd.challenge2Desc') }}
                </p>
                <div class="solution-header">
                  <span class="badge badge--green">{{ $t('pd.solution2Label') }}</span>
                </div>
                <p class="desc desc--sol">
                  {{ $t('pd.solution2Desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Section: Results & Testimonials -->
    <section class="pd-section pd-results-section">
      <div class="container">
        <h2 class="section-title text-center reveal">{{ $t('pd.resultsTitle') }}</h2>
        <p class="section-subtitle text-center reveal delay-100" style="margin-bottom: 4rem;">
          {{ $t('pd.resultsSubtitle') }}
        </p>

        <!-- 4 Cards Grid (Desktop horizontal / Mobile grid 2x2 or stack) -->
        <div class="pd-results-grid reveal delay-200">
          <div class="result-card">
            <h3 class="num">+120%</h3>
            <span class="label">{{ $t('pd.result1Label') }}</span>
          </div>

          <div class="result-card">
            <h3 class="num">98%</h3>
            <span class="label">{{ $t('pd.result2Label') }}</span>
          </div>

          <div class="result-card">
            <h3 class="num">&lt; 1.2s</h3>
            <span class="label">{{ $t('pd.result3Label') }}</span>
          </div>

          <div class="result-card">
            <h3 class="num">50.000+</h3>
            <span class="label">{{ $t('pd.result4Label') }}</span>
          </div>
        </div>

        <!-- Wide Card Testimonial -->
        <div class="pd-testimonial reveal delay-300">
          <div class="testimonial-content">
            <div class="quote-icon">“</div>
            <p class="quote-text">
              {{ $t('pd.quoteText') }}
            </p>
            <div class="quote-author">
              <div class="author-avatar"></div>
              <div class="author-info">
                <strong>Budi Darmawan</strong>
                <span>{{ $t('pd.quoteRole') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner (Banner full width, buttons far right desktop / stack centered mobile) -->
    <section class="pd-cta-banner-section reveal">
      <div class="container">
        <div class="cta-banner-card">
          <div class="cta-banner__left">
            <h2 class="cta-banner__title">{{ $t('pd.ctaTitle') }}</h2>
            <p class="cta-banner__sub">{{ $t('pd.ctaSubtitle') }}</p>
          </div>
          <div class="cta-banner__right">
            <a href="mailto:hello@ngodingngedit.id" class="btn btn-white">{{ $t('pd.ctaBtn') }}</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeScreen = ref(0)

const thumbs = computed(() => [
  { title: t('pd.screen1') },
  { title: t('pd.screen2') },
  { title: t('pd.screen3') }
])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.05 }
  )
  document.querySelectorAll('.pd-page .reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.pd-page {
  background: #FCFCFD;
  color: #112D4E;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  overflow-x: hidden;
  padding-top: var(--navbar-height, 72px);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Sections Global Settings */
.pd-section {
  padding: 6rem 0;
}

.section-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.25rem;
  font-weight: 800;
  color: #112D4E;
  line-height: 1.25;
  margin: 0 0 1rem;
}

.section-subtitle {
  color: #64748B;
  font-size: 1.0625rem;
  line-height: 1.65;
  max-width: 680px;
  margin: 0;
}

.text-center {
  text-align: center;
}

.text-center.section-subtitle {
  margin-left: auto;
  margin-right: auto;
}

/* Badge Style */
.pd-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
}

.pd-badge__dot {
  font-size: 0.6rem;
  margin-right: 2px;
}

/* Buttons global */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary {
  background: #2563EB;
  color: #ffffff;
  border: 1px solid #2563EB;
}

.btn-primary:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #2563EB;
  border: 1.5px solid #2563EB;
}

.btn-outline:hover {
  background: rgba(37, 99, 235, 0.06);
  transform: translateY(-2px);
}

/* ════ HEADER SECTION ════════════════════════════════════ */
.pd-header {
  position: relative;
  background: #f8fafc;
  padding: 5rem 0 7rem;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
  overflow: hidden;
}

.pd-header__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pd-header__pattern {
  position: absolute;
}

.pd-header__pattern--dots {
  top: 30px;
  left: 30px;
  opacity: 0.6;
}

.pd-header__pattern--curves {
  top: -50px;
  right: -50px;
  width: 400px;
  height: 400px;
  opacity: 0.5;
}

.pd-header__container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.pd-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.pd-breadcrumbs a {
  color: #64748B;
  text-decoration: none;
  transition: color 0.2s ease;
}

.pd-breadcrumbs a:hover {
  color: #2563EB;
}

.pd-breadcrumbs .divider {
  color: #cbd5e1;
}

.pd-breadcrumbs .current {
  color: #112D4E;
}

.pd-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #112D4E;
  line-height: 1.1;
  margin: 0 0 1.5rem;
}

.pd-description {
  color: #475569;
  font-size: 1.0625rem;
  line-height: 1.7;
  max-width: 580px;
  margin: 0 0 2rem;
}

.pd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2.25rem;
}

.pd-tag {
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.06);
  border-radius: 8px;
  padding: 0.4rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  box-shadow: 0 2px 4px rgba(17, 45, 78, 0.02);
}

.pd-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* MacBook Pro & Smartphone Overlay Mockup */
.mockup-wrap {
  position: relative;
  width: 100%;
}

.mockup-laptop {
  position: relative;
  width: 100%;
  max-width: 560px;
  margin-left: auto;
}

.mockup-laptop__screen {
  background: #1e293b;
  border: 12px solid #0f172a;
  border-bottom: 20px solid #0f172a;
  border-radius: 12px;
  aspect-ratio: 16/10;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.1);
  display: flex;
}

.mockup-laptop__base {
  width: 112%;
  height: 10px;
  background: #cbd5e1;
  border-radius: 4px;
  align-self: center;
  margin-left: -6%;
  margin-top: -3px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

/* Web View content screen mockup inside screen */
.mockup-web {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-columns: 50px 1fr;
}

.mockup-web__sidebar {
  background: #f8fafc;
  border-right: 1px solid #f1f5f9;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.mockup-web__sidebar .logo-dot {
  width: 16px;
  height: 16px;
  background: #2563EB;
  border-radius: 50%;
  margin-bottom: 10px;
}

.mockup-web__sidebar .menu-item {
  width: 20px;
  height: 20px;
  background: #e2e8f0;
  border-radius: 4px;
}

.mockup-web__sidebar .menu-item.active {
  background: #EFF6FF;
  border: 1px solid #2563EB;
}

.mockup-web__content {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mockup-web__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 6px;
}

.mockup-web__header .bar-title {
  font-size: 0.65rem;
  font-weight: 800;
  color: #112D4E;
}

.mockup-web__header .avatar {
  width: 14px;
  height: 14px;
  background: #cbd5e1;
  border-radius: 50%;
}

.mockup-web__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
}

.mockup-web__grid .card {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  padding: 8px;
  min-height: 52px;
}

.mockup-web__grid .card--main {
  background: #EFF6FF;
  border-color: #dbeafe;
}

.mockup-web__grid .card-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  width: 80%;
  margin-bottom: 4px;
}

.mockup-web__grid .card-bar--short {
  width: 50%;
  background: #cbd5e1;
}

.mini-chart {
  width: 100%;
  height: 20px;
  margin-top: 6px;
}

.progress-ring {
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 auto;
}

.progress-ring svg {
  transform: rotate(-90deg);
}

.circle-bg {
  stroke: #EFF6FF;
}

.circle {
  stroke: #2563EB;
}

.progress-val {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.5rem;
  font-weight: 800;
}

.mockup-web__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
}

.list-row {
  height: 5px;
  background: #f1f5f9;
  border-radius: 2px;
}

/* Smartphone Mockup */
.mockup-phone {
  position: absolute;
  bottom: -25px;
  right: -25px;
  width: 180px;
  background: #0f172a;
  border: 8px solid #0f172a;
  border-radius: 24px;
  aspect-ratio: 9/19;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.18);
  z-index: 10;
}

.mockup-phone__screen {
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.mockup-phone__content {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.phone-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 4px;
}

.phone-header .notch {
  width: 40px;
  height: 6px;
  background: #0f172a;
  border-radius: 0 0 4px 4px;
  margin-bottom: 4px;
}

.phone-header .phone-title {
  font-size: 0.5rem;
  font-weight: 800;
}

.phone-card {
  background: #f8fafc;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.phone-img {
  height: 48px;
  background: #EFF6FF;
  border-radius: 4px;
}

.phone-bar {
  height: 3px;
  background: #cbd5e1;
  border-radius: 1.5px;
  width: 70%;
}

.phone-bar--short {
  width: 40%;
}

/* ════ PROJECT OVERVIEW ══════════════════════════════════ */
.pd-overview-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-overview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: -9rem;
  margin-bottom: 5rem;
}

.overview-card {
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.05);
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: 0 8px 30px rgba(17, 45, 78, 0.03);
}

.overview-card .label {
  display: block;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #64748B;
  margin-bottom: 0.5rem;
}

.overview-card .value {
  font-size: 1.125rem;
  font-weight: 800;
  color: #112D4E;
  margin: 0;
}

.pd-section-intro {
  max-width: 800px;
  margin: 0 auto;
}

.pd-section-intro .section-title {
  margin-bottom: 1.25rem;
}

/* ════ FITUR UTAMA ═══════════════════════════════════════ */
.pd-features-section {
  background: #f8fafc;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-features-section .section-title {
  margin-bottom: 4rem;
}

.pd-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.04);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px rgba(17, 45, 78, 0.02);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(17, 45, 78, 0.06);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: #112D4E;
  margin: 0 0 1rem;
}

.feature-desc {
  color: #64748B;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* ════ UI GALLERY INTERACTIVE ══════════════════════════ */
.pd-gallery-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-gallery-viewer {
  background: #f8fafc;
  border: 1px solid rgba(17, 45, 78, 0.05);
  border-radius: 16px;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto 3rem;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.01), 0 20px 48px rgba(17, 45, 78, 0.03);
}

.gallery-mockup {
  width: 100%;
}

/* High Fidelity Interactive CSS Web Application Representation */
.mockup-web-full {
  width: 100%;
  aspect-ratio: 16/9;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(17, 45, 78, 0.04);
  display: grid;
  grid-template-columns: 180px 1fr;
}

.web-sidebar {
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.web-sidebar .logo {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #2563EB;
}

.web-sidebar .nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.web-sidebar .link {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748B;
}

.web-sidebar .link.active {
  background: #EFF6FF;
  color: #2563EB;
}

.web-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

.body-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1rem;
}

.body-header h3 {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
}

.avatar-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-name {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748B;
}

.user-avatar {
  width: 24px;
  height: 24px;
  background: #cbd5e1;
  border-radius: 50%;
}

.body-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.b-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.b-card--welcome {
  background: #EFF6FF;
  border-color: #dbeafe;
  grid-column: span 1;
}

.b-card h4 {
  font-size: 0.85rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
}

.b-card p {
  font-size: 0.7rem;
  color: #475569;
  margin: 0;
}

.b-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: #64748B;
  margin-bottom: 0.25rem;
}

.b-val {
  font-size: 1rem;
  font-weight: 800;
}

.body-chart-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem;
}

.body-chart-card h4 {
  font-size: 0.85rem;
  font-weight: 800;
  margin: 0 0 1rem;
}

.main-svg-chart {
  width: 100%;
  height: 100px;
}

/* Video Mockup Specifics */
.video-container {
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  gap: 1.5rem;
  height: 100%;
  align-items: stretch;
}

.video-player {
  background: #0f172a;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-player .play-btn {
  width: 60px;
  height: 60px;
  background: #2563EB;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37,99,235,0.3);
  cursor: pointer;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
}

.video-controls .progress-bar {
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
}

.video-syllabus {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.video-syllabus h4 {
  font-size: 0.85rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
}

.syll-item {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: #64748B;
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.syll-item.active {
  background: #EFF6FF;
  border-color: #dbeafe;
  color: #2563EB;
}

/* Quiz Mockup Specifics */
.quiz-body-wrap {
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
}

.quiz-progress-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748B;
  margin-bottom: 1rem;
}

.quiz-progress-top .bar-bg {
  width: 60%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.quiz-progress-top .bar-fill {
  height: 100%;
  background: #2563EB;
}

.quiz-question-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.quiz-option {
  padding: 1rem 1.25rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quiz-option.active {
  background: #EFF6FF;
  border-color: #2563EB;
  color: #2563EB;
}

/* Thumbs */
.pd-gallery-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}

.gallery-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-thumb:hover,
.gallery-thumb.active {
  background: #EFF6FF;
  border-color: #2563EB;
}

.gallery-thumb .thumb-badge {
  font-size: 0.65rem;
  font-weight: 800;
  color: #2563EB;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.gallery-thumb .thumb-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #112D4E;
}

.animate-fade {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

/* ════ PROSES PENGEMBANGAN TIMELINE ══════════════════════ */
.pd-process-section {
  background: #f8fafc;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-timeline-wrap {
  position: relative;
  width: 100%;
}

.pd-timeline__line {
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(37, 99, 235, 0.08);
  z-index: 1;
}

.pd-timeline-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.timeline-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2563EB;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.725rem;
  font-weight: 800;
  margin-bottom: 1.75rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.step-card {
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.04);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(17, 45, 78, 0.01);
  height: 100%;
}

.step-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.05rem;
  font-weight: 800;
  color: #112D4E;
  margin: 0 0 0.75rem;
}

.step-desc {
  color: #64748B;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
}

/* ════ TECHNICAL SECTION (Table & Challenges) ═════════════ */
.pd-tech-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-tech-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
}

.table-wrap {
  width: 100%;
  overflow-x: auto;
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.05);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(17, 45, 78, 0.02);
}

.tech-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.tech-table th,
.tech-table td {
  padding: 1.25rem 1.5rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f1f5f9;
}

.tech-table th {
  background: #f8fafc;
  font-weight: 700;
  color: #64748B;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tech-table tbody tr:last-child td {
  border-bottom: none;
}

.challenges-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.challenge-item {
  background: #f8fafc;
  border: 1px solid rgba(17, 45, 78, 0.04);
  border-radius: 16px;
  padding: 2rem;
}

.challenge-header,
.solution-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
}

.challenge-header h4 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.05rem;
  font-weight: 800;
  margin: 0;
}

.challenge-item .desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #64748B;
  margin: 0 0 1.25rem;
}

.challenge-item .desc--sol {
  color: #475569;
  font-weight: 600;
  margin-bottom: 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.badge--red {
  background: #FEF2F2;
  color: #EF4444;
}

.badge--green {
  background: #F0FDF4;
  color: #22C55E;
}

/* ════ RESULTS & TESTIMONIALS ════════════════════════════ */
.pd-results-section {
  background: #f8fafc;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4.5rem;
}

.result-card {
  background: #ffffff;
  border: 1px solid rgba(17, 45, 78, 0.04);
  border-radius: 16px;
  padding: 2.25rem 2rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(17, 45, 78, 0.02);
}

.result-card .num {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.5rem;
  font-weight: 800;
  color: #2563EB;
  margin: 0 0 0.5rem;
}

.result-card .label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748B;
}

/* Wide Testimonial */
.pd-testimonial {
  background: #ffffff;
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 16px;
  padding: 3.5rem;
  box-shadow: 0 16px 40px rgba(17, 45, 78, 0.02);
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.quote-icon {
  font-size: 5rem;
  color: rgba(37, 99, 235, 0.08);
  line-height: 1;
  font-family: serif;
  margin-bottom: -1rem;
}

.quote-text {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.7;
  color: #112D4E;
  margin: 0 0 2rem;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #cbd5e1;
}

.author-info {
  text-align: left;
}

.author-info strong {
  display: block;
  font-size: 0.95rem;
  color: #112D4E;
}

.author-info span {
  font-size: 0.8rem;
  color: #64748B;
}

/* ════ BOTTOM CTA BANNER ══════════════════════════════════ */
.pd-cta-banner-section {
  padding: 6rem 0;
  background: #ffffff;
}

.cta-banner-card {
  background: #2563EB;
  border-radius: 20px;
  padding: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  box-shadow: 0 24px 64px rgba(37, 99, 235, 0.15);
}

.cta-banner__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.cta-banner__sub {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0;
  max-width: 580px;
}

.btn-white {
  background: #ffffff;
  color: #2563EB;
  border: 1px solid #ffffff;
}

.btn-white:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

/* ════ RESPONSIVE MEDIA QUERIES ═════════════════════════ */
@media (max-width: 1024px) {
  .pd-header__container {
    gap: 2rem;
  }

  .pd-tech-layout {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .pd-results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .pd-header__container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }

  .pd-breadcrumbs,
  .pd-badge,
  .pd-tags,
  .pd-actions {
    justify-content: center;
  }

  .pd-description {
    margin-left: auto;
    margin-right: auto;
  }

  .mockup-laptop {
    margin-left: auto;
    margin-right: auto;
  }

  .pd-overview-grid {
    margin-top: 0;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4rem;
  }

  .pd-features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pd-timeline__line {
    display: none;
  }

  .pd-timeline-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .timeline-step {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .step-num {
    margin-bottom: 0;
    flex-shrink: 0;
    margin-top: 0.5rem;
  }

  .step-card {
    width: 100%;
  }

  .cta-banner-card {
    flex-direction: column;
    text-align: center;
    padding: 3.5rem 2rem;
  }

  .cta-banner__sub {
    margin-left: auto;
    margin-right: auto;
  }

  .btn-white {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .pd-section {
    padding: 4rem 0;
  }

  .pd-header {
    padding: 3rem 0 5rem;
  }

  /* Mockups move to the top on Mobile Header */
  .pd-header__container {
    display: flex;
    flex-direction: column-reverse;
  }

  .pd-gallery-viewer {
    padding: 0.5rem;
    border-radius: 8px;
  }

  .mockup-web-full {
    grid-template-columns: 1fr;
    aspect-ratio: auto;
  }

  .web-sidebar {
    display: none; /* Hide sidebar on mobile to optimize space */
  }

  .pd-gallery-carousel {
    flex-direction: column;
    width: 100%;
  }

  .gallery-thumb {
    width: 100%;
    align-items: center;
  }

  .pd-overview-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pd-results-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .pd-testimonial {
    padding: 2rem 1.5rem;
  }

  .quote-text {
    font-size: 1rem;
  }
}
</style>
