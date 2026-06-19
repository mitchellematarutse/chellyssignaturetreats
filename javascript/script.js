/* ============================================================
   CHELLY'S SIGNATURE TREATS — script.js
   Covers: index.html · aboutus.html · product.html
           loyaltyandreward.html · contactdetail.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initProductFilter();
  initGiftForm();
  initContactForm();
  initAddToCart();
  highlightActiveNavLink();
});


/* ─────────────────────────────────────────
   1. PRODUCT FILTER + LIVE SEARCH (products.html)
   Combines category filtering and keyword
   search so both work together. Typing in
   the search box filters by product name
   and description; clicking a category
   button filters by category. Both rules
   apply at the same time.
───────────────────────────────────────── */
let currentCategory = 'all';
let currentSearchTerm = '';

function initProductFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterButtons.length === 0 && productCards.length === 0) return;

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentCategory = button.getAttribute('data-filter');

      // Update active button styling
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      applyProductFilters();

      // If filtering by a specific category (and not searching),
      // scroll to that section for convenience
      if (currentCategory !== 'all' && !currentSearchTerm) {
        const targetSection = document.getElementById(currentCategory);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  initProductSearch();
}


/* ─────────────────────────────────────────
   1b. LIVE SEARCH INPUT HANDLER
───────────────────────────────────────── */
function initProductSearch() {
  const searchInput = document.getElementById('product-search');
  const clearSearchLink = document.getElementById('clear-search-link');

  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    applyProductFilters();
  });

  if (clearSearchLink) {
    clearSearchLink.addEventListener('click', function (event) {
      event.preventDefault();
      searchInput.value = '';
      currentSearchTerm = '';
      applyProductFilters();
      searchInput.focus();
    });
  }
}


/* ─────────────────────────────────────────
   1c. APPLY COMBINED FILTERS
   Loops through every product card and shows
   it only if it matches BOTH the active
   category and the current search term.
───────────────────────────────────────── */
function applyProductFilters() {
  const productCards = document.querySelectorAll('.product-card');
  const categorySections = document.querySelectorAll('.product-category-section');
  const noResultsMessage = document.getElementById('no-results-message');
  const resultsCount = document.getElementById('search-results-count');

  let visibleCount = 0;

  productCards.forEach(function (card) {
    const cardCategory = card.getAttribute('data-category');
    const nameElement = card.querySelector('h3');
    const descElement = card.querySelector('.product-info > p:not(.product-price)');

    const cardText =
      (nameElement ? nameElement.textContent : '') +
      ' ' +
      (descElement ? descElement.textContent : '');

    const matchesCategory =
      currentCategory === 'all' || cardCategory === currentCategory;

    const matchesSearch =
      currentSearchTerm === '' ||
      cardText.toLowerCase().includes(currentSearchTerm);

    const isVisible = matchesCategory && matchesSearch;

    card.style.display = isVisible ? '' : 'none';

    if (isVisible) visibleCount++;
  });

  // Hide/show entire category sections when every card inside is hidden
  categorySections.forEach(function (section) {
    const visibleCardsInSection = section.querySelectorAll(
      '.product-card:not([style*="display: none"])'
    );
    section.style.display = visibleCardsInSection.length > 0 ? '' : 'none';
  });

  // Show "no results" message when nothing matches
  if (noResultsMessage) {
    noResultsMessage.hidden = visibleCount !== 0;
  }

  // Update results count text (only show while actively searching)
  if (resultsCount) {
    if (currentSearchTerm) {
      resultsCount.textContent =
        visibleCount === 0
          ? ''
          : visibleCount + (visibleCount === 1 ? ' treat found' : ' treats found');
    } else {
      resultsCount.textContent = '';
    }
  }
}


/* ─────────────────────────────────────────
   2. ADD TO CART BUTTONS (products.html, index.html)
   Simple cart counter stored in memory for
   the current session.
───────────────────────────────────────── */
let cartCount = 0;

function initAddToCart() {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      cartCount++;

      // Find the product name from the nearest product card
      const card = button.closest('.product-card') || button.closest('.treat-card');
      const productName = card ? card.querySelector('h3').textContent : 'Item';

      // Brief visual confirmation on the button itself
      const originalText = button.textContent;
      button.textContent = 'Added ✓';
      button.disabled = true;

      setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
      }, 1200);

      console.log(productName + ' added to cart. Total items: ' + cartCount);
    });
  });
}


/* ─────────────────────────────────────────
   3. GIFT FORM VALIDATION (loyalty.html)
   "Send a Sweet Surprise" form — validates
   required fields before showing confirmation.
───────────────────────────────────────── */
function initGiftForm() {
  const giftForm = document.querySelector('.gift-form');

  if (!giftForm) return;

  giftForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const recipientName = document.getElementById('recipient-name');
    const recipientEmail = document.getElementById('recipient-email');
    const recipientAddress = document.getElementById('recipient-address');
    const treatSelection = document.getElementById('treat-selection');
    const senderName = document.getElementById('sender-name');

    const errors = [];

    if (!recipientName.value.trim()) {
      errors.push('Recipient name is required.');
    }

    if (!recipientEmail.value.trim() || !isValidEmail(recipientEmail.value)) {
      errors.push('A valid recipient email is required.');
    }

    if (!recipientAddress.value.trim()) {
      errors.push('Delivery address is required.');
    }

    if (!treatSelection.value) {
      errors.push('Please select a treat to send.');
    }

    if (!senderName.value.trim()) {
      errors.push('Your name is required.');
    }

    if (errors.length > 0) {
      alert('Please fix the following:\n\n' + errors.join('\n'));
      return;
    }

    // All valid — show confirmation
    const recipient = recipientName.value.trim();
    alert(
      'Thank you! Your sweet surprise for ' +
        recipient +
        ' is on its way. We\'ll send a confirmation email shortly. 🎁'
    );

    giftForm.reset();
  });
}


/* ─────────────────────────────────────────
   4. CONTACT FORM VALIDATION (contact.html)
───────────────────────────────────────── */
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const subject = document.getElementById('contact-subject');
    const message = document.getElementById('contact-message');

    const errors = [];

    if (!name.value.trim()) {
      errors.push('Please enter your name.');
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      errors.push('Please enter a valid email address.');
    }

    if (!subject.value) {
      errors.push('Please select a subject.');
    }

    if (!message.value.trim()) {
      errors.push('Please enter a message.');
    }

    if (errors.length > 0) {
      alert('Please fix the following:\n\n' + errors.join('\n'));
      return;
    }

    alert('Thank you for your message! We\'ll be in touch within 24 hours. 💛');
    contactForm.reset();
  });
}


/* ─────────────────────────────────────────
   5. EMAIL VALIDATION HELPER
───────────────────────────────────────── */
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.trim());
}


/* ─────────────────────────────────────────
   6. INTERACTIVE GOOGLE MAP (contact.html)
   Called automatically by the Google Maps
   JavaScript API once it finishes loading
   (see the script tag in contact.html).
───────────────────────────────────────── */
function initBakeryMap() {
  const mapElement = document.getElementById('bakery-map');

  if (!mapElement) return;

  // Replace with your bakery's real coordinates
  const bakeryLocation = { lat: -33.9249, lng: 18.4241 }; // Cape Town city centre (placeholder)

  const map = new google.maps.Map(mapElement, {
    center: bakeryLocation,
    zoom: 14,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  const marker = new google.maps.Marker({
    position: bakeryLocation,
    map: map,
    title: "Chelly's Signature Treats"
  });

  const infoWindow = new google.maps.InfoWindow({
    content:
      '<div style="font-family: Open Sans, sans-serif; padding: 4px;">' +
      '<strong style="color:#A24857;">Chelly\'s Signature Treats</strong><br>' +
      'Cape Town, Western Cape<br>' +
      'Mon–Fri: 08:00–17:00 | Sat: 08:00–14:00' +
      '</div>'
  });

  // Open info window on marker click
  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  });

  // Open info window automatically on page load
  infoWindow.open(map, marker);
}


/* ─────────────────────────────────────────
   7. ACTIVE NAV LINK HIGHLIGHT
   Adds aria-current="page" to the nav link
   matching the current page URL.
───────────────────────────────────────── */
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
}