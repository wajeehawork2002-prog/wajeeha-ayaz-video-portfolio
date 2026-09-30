/**
 * Wajeeha Ayaz — Video Editor Portfolio
 * Pure Vanilla JavaScript (ES6+)
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // PROJECT DATA
  // =========================================================

  const PROJECTS_DATA = {
    'project-1': {
      id: 'project-1',
      title: 'How to Shell and Eat a Whole Lobster',
      category: 'YouTube',
      categorySlug: 'youtube',
      videoSrc: '/videos/project-1.mp4',
      posterSrc: '/images/projects/project-1.jpg',
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
      videoSrc: '/videos/project-2.mp4',
      posterSrc: '/images/projects/project-2.jpg',
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
      videoSrc: '/videos/project-3.mp4',
      posterSrc: '/images/projects/project-3.jpg',
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
      videoSrc: '/videos/project-4.mp4',
      posterSrc: '/images/projects/project-4.jpg',
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
      videoSrc: '/videos/project-5.mp4',
      posterSrc: '/images/projects/project-5.jpg',
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
      videoSrc: '/videos/project-6.mp4',
      posterSrc: '/images/projects/project-6.jpg',
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
      videoSrc: '/videos/project-7.mp4',
      posterSrc: '/images/projects/project-7.jpg',
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
      videoSrc: '/videos/project-8.mp4',
      posterSrc: '/images/projects/project-8.jpg',
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
      videoSrc: '/videos/project-9.mp4',
      posterSrc: '/images/projects/project-9.jpg',
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
      videoSrc: '/videos/project-10.mp4',
      posterSrc: '/images/projects/project-10.jpg',
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
      videoSrc: '/videos/project-11.mp4',
      posterSrc: '/images/projects/project-11.jpg',
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
      videoSrc: '/videos/project-12.mp4',
      posterSrc: '/images/projects/project-12.jpg',
      fullDesc: 'A short food reel using engaging visuals, text, music, and quick pacing to highlight an iconic American food.',
      specs: {
        ratio: '9:16',
        duration: '—',
        sound: 'Music, voice & sound effects',
        palette: 'Basic color correction'
      }
    }
  };


  // =========================================================
  // HELPERS
  // =========================================================

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '00:00';
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }


  // =========================================================
  // MOBILE NAVIGATION
  // =========================================================

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (!mobileToggle || !mobileNav) return;

    mobileToggle.classList.add('active');
    mobileNav.classList.add('open');

    if (mobileBackdrop) {
      mobileBackdrop.classList.add('open');
    }

    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }

    if (mobileNav) {
      mobileNav.classList.remove('open');
    }

    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('open');
    }

    document.body.style.overflow = '';
  }

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
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


  // =========================================================
  // NAVIGATION HIGHLIGHT
  // =========================================================

  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener(
    'scroll',
    highlightNavOnScroll,
    { passive: true }
  );

  highlightNavOnScroll();


  // =========================================================
  // HERO TIMECODE
  // =========================================================

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

      heroTimecodeEl.textContent =
        `TC 00:${pad(min)}:${pad(sec)}:${pad(frame)}`;
    }, 1000 / 24);
  }


  // =========================================================
  // SHOWREEL PLAYER
  // =========================================================

  const showreelContainer =
    document.getElementById('showreelContainer');

  const showreelVideo =
    document.getElementById('showreelVideo');

  const showreelPlayOverlay =
    document.getElementById('showreelPlayOverlay');

  const showreelPlayBtn =
    document.getElementById('showreelPlayBtn');

  const showreelProgress =
    document.getElementById('showreelProgress');

  const showreelProgressFill =
    document.getElementById('showreelProgressFill');

  const showreelTimeCurrent =
    document.getElementById('showreelTimeCurrent');

  const showreelTimeDuration =
    document.getElementById('showreelTimeDuration');

  const showreelMuteBtn =
    document.getElementById('showreelMuteBtn');

  const showreelFullscreenBtn =
    document.getElementById('showreelFullscreenBtn');


  function updatePlayIcons(isPlaying) {
    if (!showreelPlayBtn) return;

    if (isPlaying) {
      showreelPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
          <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
        </svg>
      `;

      showreelPlayBtn.setAttribute(
        'aria-label',
        'Pause Showreel'
      );
    } else {
      showreelPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor"/>
        </svg>
      `;

      showreelPlayBtn.setAttribute(
        'aria-label',
        'Play Showreel'
      );
    }
  }


  function toggleShowreelPlay() {
    if (!showreelVideo) return;

    if (showreelVideo.paused) {
      showreelVideo.play()
        .then(() => {
          if (showreelContainer) {
            showreelContainer.classList.add('is-playing');
            showreelContainer.classList.remove('is-paused');
          }

          updatePlayIcons(true);
        })
        .catch(() => {});
    } else {
      showreelVideo.pause();

      if (showreelContainer) {
        showreelContainer.classList.remove('is-playing');
        showreelContainer.classList.add('is-paused');
      }

      updatePlayIcons(false);
    }
  }


  if (showreelPlayOverlay) {
    showreelPlayOverlay.addEventListener(
      'click',
      toggleShowreelPlay
    );
  }

  if (showreelPlayBtn) {
    showreelPlayBtn.addEventListener(
      'click',
      toggleShowreelPlay
    );
  }

  if (showreelVideo) {

    showreelVideo.addEventListener(
      'click',
      toggleShowreelPlay
    );

    showreelVideo.addEventListener(
      'timeupdate',
      () => {
        const current = showreelVideo.currentTime;
        const duration = Number.isFinite(showreelVideo.duration)
          ? showreelVideo.duration
          : 0;

        if (duration > 0 && showreelProgressFill) {
          const pct = (current / duration) * 100;
          showreelProgressFill.style.width = `${pct}%`;
        }

        if (showreelTimeCurrent) {
          showreelTimeCurrent.textContent =
            formatTime(current);
        }

        if (showreelTimeDuration) {
          showreelTimeDuration.textContent =
            formatTime(duration);
        }
      }
    );

    showreelVideo.addEventListener(
      'ended',
      () => {
        if (showreelContainer) {
          showreelContainer.classList.remove('is-playing');
          showreelContainer.classList.add('is-paused');
        }

        updatePlayIcons(false);
      }
    );


    if (showreelProgress) {
      showreelProgress.addEventListener(
        'click',
        event => {
          if (!Number.isFinite(showreelVideo.duration)) return;

          const rect =
            showreelProgress.getBoundingClientRect();

          const pos =
            (event.clientX - rect.left) / rect.width;

          showreelVideo.currentTime =
            Math.max(
              0,
              Math.min(1, pos)
            ) * showreelVideo.duration;
        }
      );
    }


    if (showreelMuteBtn) {
      showreelMuteBtn.addEventListener(
        'click',
        () => {
          showreelVideo.muted =
            !showreelVideo.muted;

          showreelMuteBtn.setAttribute(
            'aria-label',
            showreelVideo.muted
              ? 'Unmute Showreel'
              : 'Mute Showreel'
          );
        }
      );
    }


    if (showreelFullscreenBtn) {
      showreelFullscreenBtn.addEventListener(
        'click',
        () => {
          if (!document.fullscreenElement) {

            if (showreelContainer?.requestFullscreen) {
              showreelContainer.requestFullscreen();
            } else if (
              showreelVideo.webkitRequestFullscreen
            ) {
              showreelVideo.webkitRequestFullscreen();
            }

          } else if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      );
    }
  }


  // =========================================================
  // PROJECT FILTERING
  // =========================================================

  const filterTabs =
    document.querySelectorAll('.filter-tab');

  const projectCards =
    document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {

    tab.addEventListener(
      'click',
      () => {

        filterTabs.forEach(t =>
          t.classList.remove('active')
        );

        tab.classList.add('active');

        const filterVal =
          tab.getAttribute('data-filter');

        projectCards.forEach(card => {

          const category =
            card.getAttribute('data-category');

          if (
            filterVal === 'all' ||
            category === filterVal
          ) {
            card.classList.remove('is-hidden');

            card.style.opacity = '0';
            card.style.transform =
              'translateY(12px)';

            requestAnimationFrame(() => {
              card.style.transition =
                'opacity 0.3s ease, transform 0.3s ease';

              card.style.opacity = '1';
              card.style.transform =
                'translateY(0)';
            });

          } else {
            card.classList.add('is-hidden');
          }
        });
      }
    );
  });


  // =========================================================
  // PROJECT VIDEO MODAL
  // =========================================================

  const videoModal =
    document.getElementById('videoModal');

  const modalCloseBtn =
    document.getElementById('modalCloseBtn');

  const modalVideoPlayer =
    document.getElementById('modalVideoPlayer');

  const modalPlayOverlay =
    document.getElementById('modalPlayOverlay');

  const modalPlayBtn =
    document.getElementById('modalPlayBtn');

  const modalProgressBar =
    document.getElementById('modalProgressBar');

  const modalProgressFill =
    document.getElementById('modalProgressFill');

  const modalTimeCurrent =
    document.getElementById('modalTimeCurrent');

  const modalTimeDuration =
    document.getElementById('modalTimeDuration');

  const modalMuteBtn =
    document.getElementById('modalMuteBtn');

  const modalFullscreenBtn =
    document.getElementById('modalFullscreenBtn');

  const modalVideoBox =
    document.getElementById('modalVideoBox');

  const modalCategory =
    document.getElementById('modalCategory');

  const modalTitle =
    document.getElementById('modalTitle');

  const modalSummary =
    document.getElementById('modalSummary');

  const modalRatio =
    document.getElementById('modalRatio');

  const modalDuration =
    document.getElementById('modalDuration');

  const modalSound =
    document.getElementById('modalSound');

  const modalPalette =
    document.getElementById('modalPalette');

  let activeTriggerElement = null;


  function updateModalPlayIcons(isPlaying) {
    if (!modalPlayBtn) return;

    if (isPlaying) {
      modalPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
          <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
        </svg>
      `;

      modalPlayBtn.setAttribute(
        'aria-label',
        'Pause Video'
      );

    } else {
      modalPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor"/>
        </svg>
      `;

      modalPlayBtn.setAttribute(
        'aria-label',
        'Play Video'
      );
    }
  }


  function openProjectModal(
    projectId,
    triggerEl
  ) {
    const data = PROJECTS_DATA[projectId];

    if (!data || !videoModal || !modalVideoPlayer) {
      return;
    }

    activeTriggerElement = triggerEl || null;

    if (modalCategory) {
      modalCategory.textContent =
        data.category;
    }

    if (modalTitle) {
      modalTitle.textContent =
        data.title;
    }

    if (modalSummary) {
      modalSummary.textContent =
        data.fullDesc;
    }

    if (modalRatio) {
      modalRatio.textContent =
        data.specs.ratio;
    }

    if (modalDuration) {
      modalDuration.textContent =
        'Loading...';
    }

    if (modalSound) {
      modalSound.textContent =
        data.specs.sound;
    }

    if (modalPalette) {
      modalPalette.textContent =
        data.specs.palette;
    }

    modalVideoPlayer.src =
      data.videoSrc;

    modalVideoPlayer.poster =
      data.posterSrc;

    modalVideoPlayer.load();


    modalVideoPlayer.addEventListener(
      'loadedmetadata',
      () => {

        const duration =
          modalVideoPlayer.duration;

        if (modalDuration) {
          modalDuration.textContent =
            formatTime(duration);
        }

        if (modalTimeDuration) {
          modalTimeDuration.textContent =
            formatTime(duration);
        }

        try {
          modalVideoPlayer.currentTime = 0;
        } catch (_) {}
      },
      { once: true }
    );


    videoModal.classList.add('is-active');
    videoModal.setAttribute(
      'aria-hidden',
      'false'
    );

    document.body.style.overflow =
      'hidden';


    if (modalVideoBox) {
      modalVideoBox.classList.remove(
        'is-playing'
      );

      modalVideoBox.classList.add(
        'is-paused'
      );
    }

    updateModalPlayIcons(false);


    modalVideoPlayer.play()
      .then(() => {

        if (modalVideoBox) {
          modalVideoBox.classList.add(
            'is-playing'
          );

          modalVideoBox.classList.remove(
            'is-paused'
          );
        }

        updateModalPlayIcons(true);

      })
      .catch(() => {});


    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }


  function closeProjectModal() {

    if (
      !videoModal ||
      !videoModal.classList.contains('is-active')
    ) {
      return;
    }

    if (modalVideoPlayer) {
      modalVideoPlayer.pause();

      try {
        modalVideoPlayer.currentTime = 0;
      } catch (_) {}

      modalVideoPlayer.removeAttribute('src');
      modalVideoPlayer.load();
    }

    if (modalVideoBox) {
      modalVideoBox.classList.remove(
        'is-playing'
      );

      modalVideoBox.classList.add(
        'is-paused'
      );
    }

    videoModal.classList.remove(
      'is-active'
    );

    videoModal.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.style.overflow = '';

    if (activeTriggerElement) {
      activeTriggerElement.focus();
      activeTriggerElement = null;
    }
  }


  function toggleModalPlay() {

    if (!modalVideoPlayer) return;

    if (modalVideoPlayer.paused) {

      modalVideoPlayer.play()
        .then(() => {

          if (modalVideoBox) {
            modalVideoBox.classList.add(
              'is-playing'
            );

            modalVideoBox.classList.remove(
              'is-paused'
            );
          }

          updateModalPlayIcons(true);
        })
        .catch(() => {});

    } else {

      modalVideoPlayer.pause();

      if (modalVideoBox) {
        modalVideoBox.classList.remove(
          'is-playing'
        );

        modalVideoBox.classList.add(
          'is-paused'
        );
      }

      updateModalPlayIcons(false);
    }
  }


  projectCards.forEach(card => {

    card.addEventListener(
      'click',
      () => {
        const projectId =
          card.getAttribute('data-project');

        openProjectModal(
          projectId,
          card
        );
      }
    );


    card.addEventListener(
      'keydown',
      event => {

        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault();

          const projectId =
            card.getAttribute('data-project');

          openProjectModal(
            projectId,
            card
          );
        }
      }
    );
  });


  if (modalCloseBtn) {
    modalCloseBtn.addEventListener(
      'click',
      closeProjectModal
    );
  }


  if (videoModal) {
    videoModal.addEventListener(
      'click',
      event => {

        if (
          event.target === videoModal
        ) {
          closeProjectModal();
        }
      }
    );
  }


  if (modalPlayOverlay) {
    modalPlayOverlay.addEventListener(
      'click',
      toggleModalPlay
    );
  }


  if (modalPlayBtn) {
    modalPlayBtn.addEventListener(
      'click',
      toggleModalPlay
    );
  }


  if (modalVideoPlayer) {

    modalVideoPlayer.addEventListener(
      'click',
      toggleModalPlay
    );


    modalVideoPlayer.addEventListener(
      'timeupdate',
      () => {

        const current =
          modalVideoPlayer.currentTime;

        const duration =
          Number.isFinite(
            modalVideoPlayer.duration
          )
            ? modalVideoPlayer.duration
            : 0;


        if (
          duration > 0 &&
          modalProgressFill
        ) {
          const pct =
            (current / duration) * 100;

          modalProgressFill.style.width =
            `${pct}%`;
        }


        if (modalTimeCurrent) {
          modalTimeCurrent.textContent =
            formatTime(current);
        }


        if (modalTimeDuration) {
          modalTimeDuration.textContent =
            formatTime(duration);
        }
      }
    );


    modalVideoPlayer.addEventListener(
      'ended',
      () => {

        if (modalVideoBox) {
          modalVideoBox.classList.remove(
            'is-playing'
          );

          modalVideoBox.classList.add(
            'is-paused'
          );
        }

        updateModalPlayIcons(false);
      }
    );
  }


  if (
    modalProgressBar &&
    modalVideoPlayer
  ) {

    modalProgressBar.addEventListener(
      'click',
      event => {

        if (
          !Number.isFinite(
            modalVideoPlayer.duration
          )
        ) {
          return;
        }

        const rect =
          modalProgressBar.getBoundingClientRect();

        const pos =
          (event.clientX - rect.left) /
          rect.width;

        modalVideoPlayer.currentTime =
          Math.max(
            0,
            Math.min(1, pos)
          ) * modalVideoPlayer.duration;
      }
    );
  }


  if (
    modalMuteBtn &&
    modalVideoPlayer
  ) {

    modalMuteBtn.addEventListener(
      'click',
      () => {

        modalVideoPlayer.muted =
          !modalVideoPlayer.muted;

        modalMuteBtn.setAttribute(
          'aria-label',
          modalVideoPlayer.muted
            ? 'Unmute Video'
            : 'Mute Video'
        );
      }
    );
  }


  if (
    modalFullscreenBtn &&
    modalVideoBox
  ) {

    modalFullscreenBtn.addEventListener(
      'click',
      () => {

        if (!document.fullscreenElement) {

          if (
            modalVideoBox.requestFullscreen
          ) {
            modalVideoBox.requestFullscreen();

          } else if (
            modalVideoPlayer &&
            modalVideoPlayer.webkitRequestFullscreen
          ) {
            modalVideoPlayer.webkitRequestFullscreen();
          }

        } else if (
          document.exitFullscreen
        ) {
          document.exitFullscreen();
        }
      }
    );
  }


  // =========================================================
  // CONTACT MODAL
  // =========================================================

  const contactModal =
    document.getElementById('contactModal');

  const contactModalClose =
    document.getElementById('contactModalClose');

  const startProjectButtons =
    document.querySelectorAll('.js-start-project');

  const projectInquiryForm =
    document.getElementById('projectInquiryForm');

  const formFeedback =
    document.getElementById('formFeedback');


  function openContactModal() {

    if (!contactModal) return;

    contactModal.classList.add(
      'is-active'
    );

    contactModal.setAttribute(
      'aria-hidden',
      'false'
    );

    document.body.style.overflow =
      'hidden';

    const firstInput =
      contactModal.querySelector(
        'input, select, textarea'
      );

    if (firstInput) {
      firstInput.focus();
    }
  }


  function closeContactModal() {

    if (!contactModal) return;

    contactModal.classList.remove(
      'is-active'
    );

    contactModal.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.style.overflow =
      '';
  }


  startProjectButtons.forEach(btn => {

    btn.addEventListener(
      'click',
      event => {

        event.preventDefault();

        openContactModal();
      }
    );
  });


  if (contactModalClose) {
    contactModalClose.addEventListener(
      'click',
      closeContactModal
    );
  }


  if (contactModal) {
    contactModal.addEventListener(
      'click',
      event => {

        if (
          event.target === contactModal
        ) {
          closeContactModal();
        }
      }
    );
  }


  if (projectInquiryForm) {

    projectInquiryForm.addEventListener(
      'submit',
      async event => {

        event.preventDefault();

        const submitBtn =
          projectInquiryForm.querySelector(
            'button[type="submit"]'
          );


        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent =
            'Sending...';
        }


        try {

          const response =
            await fetch(
              projectInquiryForm.action,
              {
                method:
                  projectInquiryForm.method ||
                  'POST',

                body:
                  new FormData(
                    projectInquiryForm
                  ),

                headers: {
                  Accept:
                    'application/json'
                }
              }
            );


          if (!response.ok) {
            throw new Error(
              'Unable to send the inquiry.'
            );
          }


          if (formFeedback) {

            formFeedback.className =
              'form-feedback success';

            formFeedback.textContent =
              'Your inquiry has been sent successfully.';
          }


          projectInquiryForm.reset();


          setTimeout(() => {

            closeContactModal();

            if (formFeedback) {
              formFeedback.className =
                'form-feedback';

              formFeedback.textContent =
                '';
            }

            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent =
                'Send Inquiry';
            }

          }, 1800);


        } catch (error) {

          console.error(
            'Formspree error:',
            error
          );


          if (formFeedback) {

            formFeedback.className =
              'form-feedback error';

            formFeedback.textContent =
              'Something went wrong. Please try again.';
          }


          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent =
              'Send Inquiry';
          }
        }
      }
    );
  }


  // =========================================================
  // KEYBOARD ACCESSIBILITY
  // =========================================================

  document.addEventListener(
    'keydown',
    event => {

      if (event.key === 'Escape') {

        if (
          videoModal &&
          videoModal.classList.contains(
            'is-active'
          )
        ) {
          closeProjectModal();
        }

        if (
          contactModal &&
          contactModal.classList.contains(
            'is-active'
          )
        ) {
          closeContactModal();
        }

        if (
          mobileNav &&
          mobileNav.classList.contains(
            'open'
          )
        ) {
          closeMobileNav();
        }
      }


      if (
        event.key === ' ' &&
        videoModal &&
        videoModal.classList.contains(
          'is-active'
        )
      ) {

        const activeElement =
          document.activeElement;

        if (
          activeElement &&
          ['input', 'textarea', 'select'].includes(
            activeElement.tagName.toLowerCase()
          )
        ) {
          return;
        }

        event.preventDefault();

        toggleModalPlay();
      }
    }
  );


  // =========================================================
  // SCROLL REVEAL
  // =========================================================

  const revealElements =
    document.querySelectorAll('.reveal');


  /*
   * IMPORTANT:
   * Make all reveal elements visible first.
   * Then IntersectionObserver can animate them.
   *
   * This prevents the whole page from staying invisible
   * if the observer or browser behaves differently.
   */

  revealElements.forEach(el => {
    el.classList.add('is-revealed');
  });


  if ('IntersectionObserver' in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'is-revealed'
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          rootMargin:
            '0px 0px -40px 0px',

          threshold: 0.1
        }
      );


    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }


  // =========================================================
  // HERO SHOWREEL BUTTON
  // =========================================================

  const heroReelTrigger =
    document.getElementById(
      'heroReelTrigger'
    );


  if (heroReelTrigger) {

    heroReelTrigger.addEventListener(
      'click',
      () => {

        const showreelSec =
          document.getElementById(
            'showreel'
          );


        if (showreelSec) {

          showreelSec.scrollIntoView({
            behavior: 'smooth'
          });


          setTimeout(() => {

            if (
              showreelVideo &&
              showreelVideo.paused
            ) {
              toggleShowreelPlay();
            }

          }, 600);
        }
      }
    );
  }


  // =========================================================
  // INITIAL STATE
  // =========================================================

  updatePlayIcons(false);
  updateModalPlayIcons(false);

});