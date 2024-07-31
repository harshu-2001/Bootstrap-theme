new PureCounter();
function handleScroll() {
  if (window.scrollY > 0) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);
AOS.init();
document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
  let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
  let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
  let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

  let initIsotope;
  imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
    initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort
    });
  });

  isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
    filters.addEventListener('click', function () {
      isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
      this.classList.add('filter-active');
      initIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      if (typeof aosInit === 'function') {
        aosInit();
      }
    }, false);
  });

});

document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    faqItem.parentNode.classList.toggle('faq-active');
  });
});


function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);

window.addEventListener('load', function (e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const mobileNavToggleIcon = document.getElementById('mobile-nav-toggle-icon');

const listIconPath = `M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5`;
const closeIconPath = `M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708`;

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');

  if (mobileNavToggleIcon.querySelector('path').getAttribute('d') === listIconPath) {
    mobileNavToggleIcon.querySelector('path').setAttribute('d', closeIconPath);
  } else {
    mobileNavToggleIcon.querySelector('path').setAttribute('d', listIconPath);
  }
}

mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
