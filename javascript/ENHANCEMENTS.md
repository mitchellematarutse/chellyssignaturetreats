# Enhancements Report

This repository was updated to fully comply with the rubric for Interactive Elements, Dynamic Content & Search, SEO, Forms & Input Handling, and Version Control.

## What was added/changed

- Interactive UI
  - Filter buttons (products.html)- clicking “cakes, cupcakes, etc"
  - Add to cart buttons
  - Form submissions 

- Dynamic Content and Search Feature 
  - products.html - added a search input box right above the category filter buttons
  - script.js - rebuilt the filter logic so search and category filters work together
  - style.css - styled the search bar with a magnifying glass icon, focus states matching raspberry brand color, and the no-results message styled in blush background

- SEO
  - Implemented title tags
  - Implememnted meta keywords and description
  - Implemented images - FileName and AltText
  - Social links/icons in footer

## Forms & Validation

### Enquiry Controls (Gift Form on `loyalty.html`)
* **Fields:** Full Name, Email, Phone, Delivery Address, a Treat dropdown, a personal Message (`<textarea>`), and Sender Name. 
* **Validation:** All inputs have proper tags. The `initGiftForm()` function in `script.js` checks that required fields aren't empty and validates the email format before allowing submission.
* **Submission:** Triggers a JavaScript `alert()` popup saying: *"Thank you! Your sweet surprise is on its way"* and automatically clears the form.

### Contact Controls (`contact.html`)
* **Fields:** Name, Email, Phone, Subject dropdown, and Message (each configured with matching labels).
* **Validation:** Driven by `initContactForm()`, which checks required fields and validates the email format.

## Files Changed
* **`js/script.js`:** Added tabs, dynamic product loader, SEO helpers, and contact validation/confirmation.
* **`product.html`:** Added a search input box directly above the category filter buttons.

## How to Test Features
### 1. Products Page (Search & Filters)
* **Search Input:**
   - Type into the new search bar located above the category filter buttons. 
* **Dynamic Behavior:**
  * Displays an **"X treats found"** results counter dynamically as you type.
  * If nothing matches, a hidden **"no results"** message automatically appears alongside a *"clear your search"* link that resets the grid.
  * Entire category sections (with their headers) will automatically hide if every product card inside them is filtered out (preventing empty category headings like `!cookies`).
* **Category Buttons:**
  - Clicking a category button still filters the grid normally, but now respects whatever text is currently typed into the search box.

### 2. Contact Page
* Fill out the required fields (Name, Email, Phone).
* Select an item from the enquiry dropdown.
* Verify that the HTML/CSS/JS meets all linting recommendations.




