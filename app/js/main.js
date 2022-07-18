window.addEventListener('DOMContentLoaded', () => {
  // !
  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.today-bought__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: el.querySelector('.today-bought__slider .swiper-button-next'),
          prevEl: el.querySelector('.today-bought__slider .swiper-button-prev'),
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.similar-bouquets__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: document.querySelector(
          '.similar-bouquets__slider .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.similar-bouquets__slider .swiper-button-prev'
        ),
      },
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();
  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav-2', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main-2', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  function toggleActive() {
    const btns = document.querySelectorAll('.product-height__btn');

    function removeActive() {
      btns.forEach((btn) => {
        btn.classList.remove('product-height__btn--active');
      });
    }

    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        removeActive();
        btn.classList.toggle('product-height__btn--active');
      });
    });
  }
  toggleActive();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Filters
  (function showFilters() {
    const menuBtn = document.querySelector('.catalog__filter');
    const menu = document.querySelector('.catalog__side');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });

      overlay.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');
    if (this.scrollY >= 50) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');

  if (window.pageYOffset >= 50) {
    header.classList.add('scroll-header');
  }

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.reviews__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: document.querySelector('.reviews .swiper-button-next'),
          prevEl: document.querySelector('.reviews .swiper-button-prev'),
        },
      });
    });
  })();

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelector('#slider-handles');
    let minStep = document.querySelector('.range-slider__min');
    let maxStep = document.querySelector('.range-slider__max');
    if (handlesSlider) {
      noUiSlider.create(handlesSlider, {
        start: [1400, 1374688],
        connect: true,
        padding: [10, 10],
        range: {
          min: [0],
          max: [2000000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
          maxStep.innerHTML = values[handle];
        } else {
          minStep.innerHTML = values[handle];
        }
      });
    }
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Mixer
  function mix(mixContainer1, mixContainer2) {
    const containerEl1 = document.querySelector(mixContainer1);
    const containerEl2 = document.querySelector(mixContainer2);
  
    const config = {
      controls: {
        scope: 'local'
      }
    }
  
    if (containerEl1 || containerEl2) {
      const mixer1 = mixitup(containerEl1, config);
      const mixer2 = mixitup(containerEl2, config);
    }
  }
  mix('[data-ref="container-1"]', '[data-ref="container-2"]');

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.card-view__btn', '.popup--quick-view', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');
});
