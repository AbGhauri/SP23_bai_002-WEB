document.addEventListener('DOMContentLoaded', function() {
    const shopGroup = document.querySelector('.shop-group');
    const megaMenu = document.querySelector('.mega-menu');
  
    if (shopGroup && megaMenu) {
      let timer;
      shopGroup.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        megaMenu.classList.add('flex');
        megaMenu.classList.remove('hidden');
      });
      shopGroup.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
          megaMenu.classList.remove('flex');
          megaMenu.classList.add('hidden');
        }, 100);
      });
      megaMenu.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        megaMenu.classList.add('flex');
        megaMenu.classList.remove('hidden');
      });
      megaMenu.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
          megaMenu.classList.remove('flex');
          megaMenu.classList.add('hidden');
        }, 100);
      });
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const bridalGroup = document.querySelector('.bridal-group');
    const bridalMenu = document.querySelector('.bridal-menu');
  
    if (bridalGroup && bridalMenu) {
      let timer;
      bridalGroup.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        bridalMenu.classList.add('flex');
        bridalMenu.classList.remove('hidden');
      });
      bridalGroup.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
          bridalMenu.classList.remove('flex');
          bridalMenu.classList.add('hidden');
        }, 100);
      });
      bridalMenu.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        bridalMenu.classList.add('flex');
        bridalMenu.classList.remove('hidden');
      });
      bridalMenu.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
          bridalMenu.classList.remove('flex');
          bridalMenu.classList.add('hidden');
        }, 100);
      });
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  const interiorsGroup = document.querySelector('.interiors-group');
  const interiorsMenu = document.querySelector('.interiors-menu');

  if (interiorsGroup && interiorsMenu) {
    let timer;
    interiorsGroup.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      interiorsMenu.classList.add('flex');
      interiorsMenu.classList.remove('hidden');
    });
    interiorsGroup.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        interiorsMenu.classList.remove('flex');
        interiorsMenu.classList.add('hidden');
      }, 100);
    });
    interiorsMenu.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      interiorsMenu.classList.add('flex');
      interiorsMenu.classList.remove('hidden');
    });
    interiorsMenu.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        interiorsMenu.classList.remove('flex');
        interiorsMenu.classList.add('hidden');
      }, 100);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const lookbooksGroup = document.querySelector('.lookbooks-group');
  const lookbooksMenu = document.querySelector('.lookbooks-menu');

  if (lookbooksGroup && lookbooksMenu) {
    let timer;
    lookbooksGroup.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      lookbooksMenu.classList.add('flex');
      lookbooksMenu.classList.remove('hidden');
    });
    lookbooksGroup.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        lookbooksMenu.classList.remove('flex');
        lookbooksMenu.classList.add('hidden');
      }, 100);
    });
    lookbooksMenu.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      lookbooksMenu.classList.add('flex');
      lookbooksMenu.classList.remove('hidden');
    });
    lookbooksMenu.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        lookbooksMenu.classList.remove('flex');
        lookbooksMenu.classList.add('hidden');
      }, 100);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const discoverGroup = document.querySelector('.discover-group');
  const discoverMenu = document.querySelector('.discover-menu');

  if (discoverGroup && discoverMenu) {
    let timer;
    discoverGroup.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      discoverMenu.classList.add('flex');
      discoverMenu.classList.remove('hidden');
    });
    discoverGroup.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        discoverMenu.classList.remove('flex');
        discoverMenu.classList.add('hidden');
      }, 100);
    });
    discoverMenu.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      discoverMenu.classList.add('flex');
      discoverMenu.classList.remove('hidden');
    });
    discoverMenu.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        discoverMenu.classList.remove('flex');
        discoverMenu.classList.add('hidden');
      }, 100);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const searchGroup = document.querySelector('.search-group');
  const searchMenu = document.querySelector('.search-menu');

  if (searchGroup && searchMenu) {
    let timer;
    searchGroup.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      searchMenu.classList.add('flex');
      searchMenu.classList.remove('hidden');
    });
    searchGroup.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        searchMenu.classList.remove('flex');
        searchMenu.classList.add('hidden');
      }, 100);
    });
    searchMenu.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      searchMenu.classList.add('flex');
      searchMenu.classList.remove('hidden');
    });
    searchMenu.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        searchMenu.classList.remove('flex');
        searchMenu.classList.add('hidden');
      }, 100);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // --- Product Card Hover Effect & Size Bar Behavior ---
  document.querySelectorAll('.product-card').forEach(function(card) {
    const mainImg = card.querySelector('.main-image');
    const hoverImg = card.querySelector('.hover-image');
    const sizeBar = card.querySelector('.size-bar');

    card.addEventListener('mouseenter', function() {
      if (hoverImg) {
        hoverImg.classList.remove('hidden');
        hoverImg.classList.add('block');
      }
      if (mainImg) {
        mainImg.classList.remove('block');
        mainImg.classList.add('hidden');
      }
      if (sizeBar) {
        sizeBar.classList.remove('hidden');
        sizeBar.classList.add('flex');
      }
    });

    card.addEventListener('mouseleave', function() {
      if (hoverImg) {
        hoverImg.classList.remove('block');
        hoverImg.classList.add('hidden');
      }
      if (mainImg) {
        mainImg.classList.remove('hidden');
        mainImg.classList.add('block');
      }
      if (sizeBar) {
        sizeBar.classList.remove('flex');
        sizeBar.classList.add('hidden');
      }
    });
  });

  // --- Color Selection ---
  document.querySelectorAll('.color-bar').forEach(function(bar) {
    bar.querySelectorAll('.color-option').forEach(function(option) {
      option.addEventListener('click', function() {
        bar.querySelectorAll('.color-option').forEach(o => o.classList.remove('ring-2', 'ring-black'));
        option.classList.add('ring-2', 'ring-black');
      });
    });
  });

  // --- Size Selection ---
  document.querySelectorAll('.size-bar').forEach(function(bar) {
    bar.querySelectorAll('.size-option').forEach(function(option) {
      option.addEventListener('click', function() {
        bar.querySelectorAll('.size-option').forEach(o => o.classList.remove('font-bold', 'underline'));
        option.classList.add('font-bold', 'underline');
      });
    });
  });

  // --- Product Slider Functionality ---
  const productSlider = document.querySelector('.product-slider');
  const prevBtn = document.querySelector('.slider-btn-back');
  const nextBtn = document.querySelector('.slider-btn-next');

  if (productSlider && prevBtn && nextBtn) {
    const updateButtonVisibility = () => {
      // Check if scrollLeft is at the very beginning (0 or very close to 0)
      prevBtn.style.display = productSlider.scrollLeft <= 5 ? 'none' : 'flex'; // Use 5 as a small buffer
      // Check if scrollLeft is at the very end (max scroll position)
      const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth;
      nextBtn.style.display = productSlider.scrollLeft >= maxScrollLeft - 5 ? 'none' : 'flex'; // Use 5 as a small buffer
    };

    const scrollSlider = (direction) => {
      const firstCard = productSlider.querySelector('.product-slider-card');
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = parseFloat(getComputedStyle(productSlider).gap) || 0;
      const scrollAmount = cardWidth + gap; // Scroll by one card plus the gap

      if (direction === 'next') {
        productSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        productSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }

      // Update button visibility after scroll animation (might need a slight delay)
      setTimeout(updateButtonVisibility, 600); // Adjust delay as needed
    };

    prevBtn.addEventListener('click', () => scrollSlider('prev'));
    nextBtn.addEventListener('click', () => scrollSlider('next'));

    // Initial button visibility setup
    productSlider.addEventListener('scroll', updateButtonVisibility); // Update on user scroll
    window.addEventListener('resize', updateButtonVisibility); // Update on resize
    updateButtonVisibility(); // Initial check
  }
});

// User dropdown toggle (for logged-in users)
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');
if (userMenuBtn && userDropdown) {
  userMenuBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('hidden');
  });
}
