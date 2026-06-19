
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
   1. PRODUCT FILTER (products.html)
   Filters product cards by category when a
   filter button is clicked.
───────────────────────────────────────── */
function initProductFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
 
  if (filterButtons.length === 0) return;
 
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selectedCategory = button.getAttribute('data-filter');
 
      // Update active button styling
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
 
      // Show/hide product cards based on category
      productCards.forEach(function (card) {
        const cardCategory = card.getAttribute('data-category');
 
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
 
      // If filtering by a specific category, scroll to that section
      if (selectedCategory !== 'all') {
        const targetSection = document.getElementById(selectedCategory);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
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
   6. ACTIVE NAV LINK HIGHLIGHT
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
 