/**
 * Wajeeha Ayaz — Video Editor Portfolio
 * Pure Vanilla JavaScript (ES6+)
 * Handlers: Mobile Navigation, Showreel Player, Project Filtering, Video Modal,
 * Contact Modal, Scroll Animations, Keyboard Accessibility.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // --- Project Metadata Database ---
 const PROJECTS_DATA = {
  'project-1': {
    id: 'project-1',
    title: 'How to Shell and Eat a Whole Lobster',
    category: 'YouTube',
    categorySlug: 'youtube',
    videoSrc: 'videos/project-1.mp4',
    posterSrc: 'images/projects/project-1.jpg',
    fullDesc: 'A food-focused instructional video with clear step-by-step editing, supporting footage, and natural pacing.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-2': {
    id: 'project-2',
    title: 'Top 10 Most Popular American Foods',
    category: 'YouTube',
    categorySlug: 'youtube',
    videoSrc: 'videos/project-2.mp4',
    posterSrc: 'images/projects/project-2.jpg',
    fullDesc: 'A food list video edited with engaging visuals, clean transitions, music, text, and steady pacing.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-3': {
    id: 'project-3',
    title: '7 Worst and 7 Best American Pizza Chains',
    category: 'YouTube',
    categorySlug: 'youtube',
    videoSrc: 'videos/project-3.mp4',
    posterSrc: 'images/projects/project-3.jpg',
    fullDesc: 'A comparison-style food video with structured sections, supporting visuals, text, and smooth transitions.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-4': {
    id: 'project-4',
    title: '7 Worst and 7 Best US Grocery Stores',
    category: 'YouTube',
    categorySlug: 'youtube',
    videoSrc: 'videos/project-4.mp4',
    posterSrc: 'images/projects/project-4.jpg',
    fullDesc: 'A research-based comparison video with clear organization, supporting footage, text, and engaging pacing.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-5': {
    id: 'project-5',
    title: 'Every American Fast Food Explained',
    category: 'Documentary',
    categorySlug: 'documentary',
    videoSrc: 'videos/project-5.mp4',
    posterSrc: 'images/projects/project-5.jpg',
    fullDesc: 'A research-based food documentary with clear storytelling, supporting visuals, narration, and smooth pacing.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-6': {
    id: 'project-6',
    title: 'Why These 12 Luxury Brands You Buy Will Collapse by 2027',
    category: 'Documentary',
    categorySlug: 'documentary',
    videoSrc: 'videos/project-6.mp4',
    posterSrc: 'images/projects/project-6.jpg',
    fullDesc: 'A research-focused explainer edited with structured storytelling, supporting visuals, narration, and clear pacing.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-7': {
    id: 'project-7',
    title: 'Rotisserie Chicken Investigation',
    category: 'Documentary',
    categorySlug: 'documentary',
    videoSrc: 'videos/project-7.mp4',
    posterSrc: 'images/projects/project-7.jpg',
    fullDesc: 'An investigation-style food video comparing products from different stores with clear structure and supporting footage.',
    specs: {
      ratio: '16:9',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-8': {
    id: 'project-8',
    title: 'Top 5 Wild Geography Facts',
    category: 'Reels',
    categorySlug: 'reels',
    videoSrc: 'videos/project-8.mp4',
    posterSrc: 'images/projects/project-8.jpg',
    fullDesc: 'A fast-paced geography reel using quick cuts, text, visuals, and engaging pacing.',
    specs: {
      ratio: '9:16',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-9': {
    id: 'project-9',
    title: 'How to Edit Viral Reels in After Effects',
    category: 'Reels',
    categorySlug: 'reels',
    videoSrc: 'videos/project-9.mp4',
    posterSrc: 'images/projects/project-9.jpg',
    fullDesc: 'A short editing tutorial focused on clear steps, visual examples, text, and easy-to-follow pacing.',
    specs: {
      ratio: '9:16',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-10': {
    id: 'project-10',
    title: 'Why Nobody Can Cross the Darién Gap?',
    category: 'Reels',
    categorySlug: 'reels',
    videoSrc: 'videos/project-10.mp4',
    posterSrc: 'images/projects/project-10.jpg',
    fullDesc: 'A short-form geography video built around strong visuals, text, quick cuts, and engaging storytelling.',
    specs: {
      ratio: '9:16',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-11': {
    id: 'project-11',
    title: '2 Mind-Blowing USA Facts',
    category: 'Reels',
    categorySlug: 'reels',
    videoSrc: 'videos/project-11.mp4',
    posterSrc: 'images/projects/project-11.jpg',
    fullDesc: 'A short-form facts video using quick information, strong visuals, text, and engaging pacing.',
    specs: {
      ratio: '9:16',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  },

  'project-12': {
    id: 'project-12',
    title: 'The Cheeseburger — An American Icon',
    category: 'Reels',
    categorySlug: 'reels',
    videoSrc: 'videos/project-12.mp4',
    posterSrc: 'images/projects/project-12.jpg',
    fullDesc: 'A short food reel using engaging visuals, text, music, and quick pacing to highlight an iconic American food.',
    specs: {
      ratio: '9:16',
      duration: '—',
      sound: 'Music, voice & sound effects',
      palette: 'Basic color correction'
    }
  }
};

  // --- Helper: Format Time (MM:SS) ---
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // --- 1. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    mobileToggle.classList.add('active');
    mobileNav.classList.add('open');
    mobileBackdrop.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileToggle.classList.remove('active');
    mobileNav.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // --- 2. Active Navigation Highlight on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // --- 3. Hero Timecode Simulator ---
  const heroTimecodeEl = document.getElementById('heroTimecode');
  if (heroTimecodeEl) {
    let frame = 12;
    let sec = 42;
    let min = 14;
    setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      const pad = n => (n < 10 ? '0' : '') + n;
      heroTimecodeEl.textContent = `TC 00:${pad(min)}:${pad(sec)}:${pad(frame)}`;
    }, 1000 / 24);
  }

  // --- 4. Featured Showreel Video Player Controller ---
  const showreelContainer = document.getElementById('showreelContainer');
  const showreelVideo = document.getElementById('showreelVideo');
  const showreelPlayOverlay = document.getElementById('showreelPlayOverlay');
  const showreelPlayBtn = document.getElementById('showreelPlayBtn');
  const showreelProgress = document.getElementById('showreelProgress');
  const showreelProgressFill = document.getElementById('showreelProgressFill');
  const showreelTimeCurrent = document.getElementById('showreelTimeCurrent');
  const showreelTimeDuration = document.getElementById('showreelTimeDuration');
  const showreelMuteBtn = document.getElementById('showreelMuteBtn');
  const showreelMuteIcon = document.getElementById('showreelMuteIcon');
  const showreelFullscreenBtn = document.getElementById('showreelFullscreenBtn');

  function toggleShowreelPlay() {
    if (!showreelVideo) return;
    if (showreelVideo.paused) {
      showreelVideo.play().then(() => {
        showreelContainer.classList.add('is-playing');
        showreelContainer.classList.remove('is-paused');
        updatePlayIcons(true);
      }).catch(err => {
        console.warn('Playback prevented:', err);
      });
    } else {
      showreelVideo.pause();
      showreelContainer.classList.remove('is-playing');
      showreelContainer.classList.add('is-paused');
      updatePlayIcons(false);
    }
  }

  function updatePlayIcons(isPlaying) {
    if (!showreelPlayBtn) return;
    if (isPlaying) {
      showreelPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
          <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
        </svg>
      `;
      showreelPlayBtn.setAttribute('aria-label', 'Pause Showreel');
    } else {
      showreelPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor"/>
        </svg>
      `;
      showreelPlayBtn.setAttribute('aria-label', 'Play Showreel');
    }
  }

  if (showreelPlayOverlay) {
    showreelPlayOverlay.addEventListener('click', toggleShowreelPlay);
  }

  if (showreelPlayBtn) {
    showreelPlayBtn.addEventListener('click', toggleShowreelPlay);
  }

  if (showreelVideo) {
    showreelVideo.addEventListener('click', toggleShowreelPlay);

    showreelVideo.addEventListener('timeupdate', () => {
      const current = showreelVideo.currentTime;
      const duration = showreelVideo.duration || 8;
      const pct = (current / duration) * 100;

      if (showreelProgressFill) {
        showreelProgressFill.style.width = `${pct}%`;
      }
      if (showreelTimeCurrent) {
        showreelTimeCurrent.textContent = formatTime(current);
      }
      if (showreelTimeDuration) {
        showreelTimeDuration.textContent = formatTime(duration);
      }
    });

    showreelVideo.addEventListener('ended', () => {
      showreelContainer.classList.remove('is-playing');
      showreelContainer.classList.add('is-paused');
      updatePlayIcons(false);
    });

    if (showreelProgress) {
      showreelProgress.addEventListener('click', (e) => {
        const rect = showreelProgress.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const duration = showreelVideo.duration || 8;
        showreelVideo.currentTime = pos * duration;
      });
    }

    if (showreelMuteBtn) {
      showreelMuteBtn.addEventListener('click', () => {
        showreelVideo.muted = !showreelVideo.muted;
        if (showreelVideo.muted) {
          showreelMuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          `;
          showreelMuteBtn.setAttribute('aria-label', 'Unmute Showreel');
        } else {
          showreelMuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          `;
          showreelMuteBtn.setAttribute('aria-label', 'Mute Showreel');
        }
      });
    }

    if (showreelFullscreenBtn) {
      showreelFullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          if (showreelContainer.requestFullscreen) {
            showreelContainer.requestFullscreen();
          } else if (showreelVideo.webkitRequestFullscreen) {
            showreelVideo.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      });
    }
  }

  // --- 5. Project Filtering (YouTube, Documentary, Reels, All) ---
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // --- 6. Project Video Modal ---
  const videoModal = document.getElementById('videoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalPlayOverlay = document.getElementById('modalPlayOverlay');
  const modalPlayBtn = document.getElementById('modalPlayBtn');
  const modalProgressBar = document.getElementById('modalProgressBar');
  const modalProgressFill = document.getElementById('modalProgressFill');
  const modalTimeCurrent = document.getElementById('modalTimeCurrent');
  const modalTimeDuration = document.getElementById('modalTimeDuration');
  const modalMuteBtn = document.getElementById('modalMuteBtn');
  const modalFullscreenBtn = document.getElementById('modalFullscreenBtn');
  const modalVideoBox = document.getElementById('modalVideoBox');

  // Modal Info Elements
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalSummary = document.getElementById('modalSummary');
  const modalRatio = document.getElementById('modalRatio');
  const modalDuration = document.getElementById('modalDuration');
  const modalSound = document.getElementById('modalSound');
  const modalPalette = document.getElementById('modalPalette');

let activeTriggerElement = null; 
 
function openProjectModal(projectId, triggerEl) { 
  const data = PROJECTS_DATA[projectId]; 
  if (!data) return; 
 
  activeTriggerElement = triggerEl; 
 
  // Populate Data 
  modalCategory.textContent = data.category; 
  modalTitle.textContent = data.title; 
  modalSummary.textContent = data.fullDesc; 
  modalRatio.textContent = data.specs.ratio; 
  modalDuration.textContent = 'Loading...'; 
  modalSound.textContent = data.specs.sound; 
  modalPalette.textContent = data.specs.palette; 
 
  // Set Video Source 
  modalVideoPlayer.src = data.videoSrc; 
  modalVideoPlayer.poster = data.posterSrc; 
  modalVideoPlayer.load(); 
 
  modalVideoPlayer.addEventListener('loadedmetadata', () => { 
    modalDuration.textContent = formatTime(modalVideoPlayer.duration); 
    modalTimeDuration.textContent = formatTime(modalVideoPlayer.duration); 
    modalVideoPlayer.currentTime = 0; 
  }, { once: true }); 
 
  // Open Modal 
  videoModal.classList.add('is-active'); 
  videoModal.setAttribute('aria-hidden', 'false'); 
  document.body.style.overflow = 'hidden'; 
 
  // Auto Play Video 
  modalVideoBox.classList.remove('is-playing'); 
  modalVideoBox.classList.add('is-paused'); 
  updateModalPlayIcons(false); 
 
  modalVideoPlayer.play().then(() => { 
    modalVideoBox.classList.add('is-playing'); 
    modalVideoBox.classList.remove('is-paused'); 
    updateModalPlayIcons(true); 
  }).catch(() => { 
    // User gesture restrictions handled gracefully 
  }); 
 
  modalCloseBtn.focus(); 
} 
 
function closeProjectModal() { 
  if (!videoModal.classList.contains('is-active')) return; 
 
  modalVideoPlayer.pause(); 
  modalVideoPlayer.currentTime = 0; 
  modalVideoBox.classList.remove('is-playing'); 
 
  videoModal.classList.remove('is-active'); 
  videoModal.setAttribute('aria-hidden', 'true'); 
  document.body.style.overflow = ''; 
 
  if (activeTriggerElement) { 
    activeTriggerElement.focus(); 
    activeTriggerElement = null; 
  } 
} 
 
function toggleModalPlay() { 
  if (!modalVideoPlayer) return; 
  if (modalVideoPlayer.paused) { 
    modalVideoPlayer.play().then(() => { 
      modalVideoBox.classList.add('is-playing'); 
      modalVideoBox.classList.remove('is-paused'); 
      updateModalPlayIcons(true); 
    }); 
  } else { 
    modalVideoPlayer.pause(); 
    modalVideoBox.classList.remove('is-playing'); 
    modalVideoBox.classList.add('is-paused'); 
    updateModalPlayIcons(false); 
  } 
} 
 
function updateModalPlayIcons(isPlaying) { 
  if (!modalPlayBtn) return; 
  if (isPlaying) { 
    modalPlayBtn.innerHTML = ` 
      <svg viewBox="0 0 24 24" aria-hidden="true"> 
        <rect x="6" y="4" width="4" height="16" fill="currentColor"/> 
        <rect x="14" y="4" width="4" height="16" fill="currentColor"/> 
      </svg> 
    `; 
    modalPlayBtn.setAttribute('aria-label', 'Pause Video'); 
  } else { 
    modalPlayBtn.innerHTML = ` 
      <svg viewBox="0 0 24 24" aria-hidden="true"> 
        <path d="M8 5v14l11-7z" fill="currentColor"/> 
      </svg> 
    `; 
    modalPlayBtn.setAttribute('aria-label', 'Play Video'); 
  } 
} 
 
// Attach Open Handlers to Project Cards & Buttons 
projectCards.forEach(card => { 
  card.addEventListener('click', (e) => { 
    const projectId = card.getAttribute('data-project'); 
    openProjectModal(projectId, card); 
  }); 
 
  card.addEventListener('keydown', (e) => { 
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      const projectId = card.getAttribute('data-project'); 
      openProjectModal(projectId, card); 
    } 
  }); 
}); 
 
if (modalCloseBtn) { 
  modalCloseBtn.addEventListener('click', closeProjectModal); 
} 
 
if (videoModal) { 
  videoModal.addEventListener('click', (e) => { 
    if (e.target === videoModal) { 
      closeProjectModal(); 
    } 
  }); 
} 
 
if (modalPlayOverlay) { 
  modalPlayOverlay.addEventListener('click', toggleModalPlay); 
} 
 
if (modalPlayBtn) { 
  modalPlayBtn.addEventListener('click', toggleModalPlay); 
} 
 
if (modalVideoPlayer) { 
  modalVideoPlayer.addEventListener('click', toggleModalPlay); 
 
  modalVideoPlayer.addEventListener('timeupdate', () => { 
    const current = modalVideoPlayer.currentTime; 
    const duration = modalVideoPlayer.duration || 6; 
    const pct = (current / duration) * 100; 
 
    if (modalProgressFill) { 
      modalProgressFill.style.width = `${pct}%`; 
    } 
    if (modalTimeCurrent) { 
      modalTimeCurrent.textContent = formatTime(current); 
    } 
    if (modalTimeDuration) { 
      modalTimeDuration.textContent = formatTime(duration); 
    } 
  }); 
 
  modalVideoPlayer.addEventListener('ended', () => { 
    modalVideoBox.classList.remove('is-playing'); 
    modalVideoBox.classList.add('is-paused'); 
    updateModalPlayIcons(false); 
  }); 
} 
 
if (modalProgressBar && modalVideoPlayer) { 
  modalProgressBar.addEventListener('click', (e) => { 
    const rect = modalProgressBar.getBoundingClientRect(); 
    const pos = (e.clientX - rect.left) / rect.width; 
    const duration = modalVideoPlayer.duration || 6; 
    modalVideoPlayer.currentTime = pos * duration; 
  }); 
} 
 
if (modalMuteBtn && modalVideoPlayer) { 
  modalMuteBtn.addEventListener('click', () => { 
    modalVideoPlayer.muted = !modalVideoPlayer.muted; 
    if (modalVideoPlayer.muted) { 
      modalMuteBtn.innerHTML = ` 
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> 
          <path d="M11 5L6 9H2v6h4l5 4V5z"/> 
          <line x1="23" y1="9" x2="17" y2="15"/> 
          <line x1="17" y1="9" x2="23" y2="15"/> 
        </svg> 
      `; 
      modalMuteBtn.setAttribute('aria-label', 'Unmute Video'); 
    } else { 
      modalMuteBtn.innerHTML = ` 
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> 
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/> 
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/> 
        </svg> 
      `; 
      modalMuteBtn.setAttribute('aria-label', 'Mute Video'); 
    } 
  }); 
} 
 
if (modalFullscreenBtn && modalVideoBox) { 
  modalFullscreenBtn.addEventListener('click', () => { 
    if (!document.fullscreenElement) { 
      if (modalVideoBox.requestFullscreen) { 
        modalVideoBox.requestFullscreen(); 
      } else if (modalVideoPlayer.webkitRequestFullscreen) { 
        modalVideoPlayer.webkitRequestFullscreen(); 
      } 
    } else { 
      if (document.exitFullscreen) { 
        document.exitFullscreen(); 
      } 
    } 
  }); 
}
  // --- 7. Contact Modal (Start a Project) ---
  const contactModal = document.getElementById('contactModal');
  const contactModalClose = document.getElementById('contactModalClose');
  const startProjectButtons = document.querySelectorAll('.js-start-project');
  const projectInquiryForm = document.getElementById('projectInquiryForm');
  const formFeedback = document.getElementById('formFeedback');

  function openContactModal() {
    if (!contactModal) return;
    contactModal.classList.add('is-active');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = contactModal.querySelector('input, select, textarea');
    if (firstInput) firstInput.focus();
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('is-active');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  startProjectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  if (contactModalClose) {
    contactModalClose.addEventListener('click', closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }
if (projectInquiryForm) {
  projectInquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = projectInquiryForm.querySelector(
      'button[type="submit"]'
    );

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      const response = await fetch(projectInquiryForm.action, {
        method: projectInquiryForm.method || 'POST',
        body: new FormData(projectInquiryForm),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent =
            'Your inquiry has been sent successfully.';
        }

        projectInquiryForm.reset();

        setTimeout(() => {
          closeContactModal();

          if (formFeedback) {
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';
          }

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Inquiry';
          }
        }, 1800);

      } else {
        const data = await response.json().catch(() => ({}));

        throw new Error(
          data.error || 'Unable to send the inquiry. Please try again.'
        );
      }

    } catch (error) {
      console.error('Formspree error:', error);

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent =
          'Something went wrong. Please try again.';
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry';
      }
    }
  });
}

  // --- 8. Global Keyboard Listener (ESC, Space, Arrow Navigation) ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (videoModal && videoModal.classList.contains('is-active')) {
        closeProjectModal();
      }
      if (contactModal && contactModal.classList.contains('is-active')) {
        closeContactModal();
      }
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    }

    // Spacebar to pause/play modal video if open
    if (e.key === ' ' && videoModal && videoModal.classList.contains('is-active')) {
      // Don't trigger if typing in an input
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;
      e.preventDefault();
      toggleModalPlay();
    }
  });

  // --- 9. Scroll Reveal Animations (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // --- 10. Hero Preview Button Smooth Scroll to Showreel ---
  const heroReelTrigger = document.getElementById('heroReelTrigger');
  if (heroReelTrigger) {
    heroReelTrigger.addEventListener('click', () => {
      const showreelSec = document.getElementById('showreel');
      if (showreelSec) {
        showreelSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (showreelVideo && showreelVideo.paused) {
            toggleShowreelPlay();
          }
        }, 600);
      }
    });
  }

});
