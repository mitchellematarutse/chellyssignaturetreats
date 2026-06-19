# Enhancements Report

This repository was updated to fully comply with the rubric for Interactive Elements, Gallery Lightbox, Dynamic Content & Search, SEO, Forms & Input Handling, and Version Control.

## What was added/changed

## Interactive UI
  -Filter buttons (products.html)- clicking “cakes, cupcakes, etc"
  
  -Add to cart buttons
  
  -Form submissions 

## Dynamic Content and Search Feature 
  -products.html - added a search input box right above the category filter buttons
  
  -script.js - rebuilt the filter logic so search and category filters work together
  
  -style.css - styled the search bar with a magnifying glass icon, focus states matching raspberry brand color, and the no-results message styled in blush background

## SEO
 -Implemented title tags
 
 -Implememnted meta keywords and description
 
 -Implemented images - FileName and AltText
 
 -Social links/icons in footer

## Forms & Validation 
 -Enquiry controls (the gift form on loyalty.html) has Full Name, Email, Phone, Delivery Address, a Treat dropdown (<select>), a Personal Message (<textarea>), and Sender Name. All have proper <label> tags
 
 -initGiftForm() in script.js checks required fields aren't empty and validates the email format before allowing submission.
 
 -JavaScript alert() popup saying "Thank you! Your sweet surprise is on its way" and clears the form
 
Contact controls (contact.html)

-Name, Email, Phone, Subject dropdown, and Message, each with labels.
 
Contact validation

-initContactForm() checks required fields and validates email format.

## Files changed

-js/script.js – tabs, dynamic product loader, SEO helpers, and contact validation/confirmation

-products.html — added a search input box right above the category filter buttons

## How to test

-Products page: Search bar input box above the category filter buttons, plus a hidden “no results” message that appears automatically when nothing matches 

-Clicking category button stilk works as before and now respects whatever’s typed in the search box at the same time a results counter shows “X treats found” while you are actively searching if nothing matches, the “no results” message appears with a “clear your search” link that resets everything 

-Whole category sections (with their headers) hide themselves if every card inside them is filtered out, so you don’t see an empty “
“!cookies”heading with nothing under it

## Contact page:

-Fill required fields (name, email, phone); pick enquiry.

## Validation

-HTML/CSS/JS lint recommendations followed; inline warnings resolved.

-Accessibility:
-Tabs are keyboard navigable





