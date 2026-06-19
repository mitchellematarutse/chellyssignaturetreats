# Chelly's Signature Treats Website

**By ST10539437**

## Project Overview

Chelly's Signature Treats is a bakery based in Cape Town, South Africa. Its website is the online home for this local business that has been bringing joy to its community since 2022 with celebratory cakes, cookies, cupcakes and brownies.

Chelly's Signature Treats website development takes 12 weeks. This plan breaks the work into three phases. Each phase builds on the last to create a strong online presence for the bakery
The website fixes the issue of no online presence and allows customers to place orders online. It highlights Chelly's Signature Treats commitment to using quality ingredients, making sure every bite is special. It also ensures that customers receive service in a warm and caring environment

The digital platform shows the restaurant's goal of becoming Cape Town’s most loved and recommended bakery by providing high-quality cakes and services. It also aims to open more branches across the country.

## Website Goals and Objectives

### Primary goals
The website has been designed to achieve several key objectives by allowing customers to order online

• Promote bakery products to attract customers: The website increases the high chances of getting customers and increases brand awareness

• Provide business information such as the bakery's location, contact details and operating hours

• Connect with customers by providing social media links allowing customers to communicate and make inquiries about the bakery

• Inform customers about discounts: Special offers and promotional deals to increase sales and orders

• Promote a positive and trustworthy image of the bakery

### Key Performance Indicators

The success of the restaurant will be measured through:

• Social media engagement
• Number of online orders placed
• Sales revenue
• Product Popularity

## Target Audience

Families and parents
Event planners planning for a birthday, wedding or special events
Local residents

### Key Features and Functionality

### Essential Pages Structure

The website has 6 pages each serving specific user needs

Homepage (index.html): Functions as a digital storefront with hero images of Chelly’s Signature Treats Cake, introduction to the bakery, clear Call to Action buttons for Order Now and menu items and services that are offered by the bakery.

About Us (about.html): Tells the bakery's brief history, values, social media links and custom cakes.

Products (product.html): Arranged in categories of the cakes, cupcakes and brownies, the prices and add to cart option.

Loyalty and Rewards(loyaltyandrewards.html): Requires the recipient’s information and gift details having a dropdown with different options of cakes, cupcakes and brownies.

Contact Details (contactdetail.html): Offers several communication options such as contact form for general enquiries, full address of the restaurant, phone number and email address, embedded Google Maps with exact location and detailed business hours.

### Core Functionality:

• Social media links: Provides a platform for customers to follow the bakeries social media pages

• Google and Maps Integration: Google and Apple Maps integration provides precise location information and driving directions.

• Mobile-friendly: The website works well on all device types, providing great experience on smartphones, tablets, and desktop computers

• Contact Forms: Provides platform customers for customers to leave their contact details when placing an order

## Technical Implementation

Using GitHub and VS Code, the website employs modern web technologies. It includes HTML5 for structure, CSS for styling and responsive design, and JavaScript for interactive features. The responsive framework ensures it is compatible with all devices and screen sizes.

Hosting is provided through 1Grid with the domain chellyssignaturetreats.co.za ensuring reliable South African-based service.

Technical architecture supports future scalability and maintenance requirements.

## Content Strategy
All website content has been developed through primary research. Visual elements utilize legally sourced stock photography from FreePik and Pixabay, professional typography from Google Fonts, and color schemes from Coolors that reflect the warm and welcoming bakery.
The content strategy emphasizes local relevance whilst maintaining professional presentation standards that build brand image and encourage online ordering.

## Development Timeline

### Phase 1: Foundation (Weeks 1 - 4)
During the first week I conducted organization research, created an initial file structure. set up GitHub repository. In week two, I created wireframes for all pages, sourced legal images and assets and organized content. During the third, I created a HTML Structure for all the 5 pages and integrated the content into the HTML files. In week four, I set up the private GitHub, pushed to Remote repository and submitted Part 1

## Phase 2: Visual Design and Responsive Development (Weeks 5 - 9)

This phase focused on transforming the HTML foundation into a visually appealing and responsive website using CSS styling techniques.

### Week 6: CSS Foundation and Base Styling
- Created external CSS stylesheet (`css/style.css`) and linked to all HTML pages
- Implemented CSS reset for cross-browser consistency
- Established base typography using Google Fonts ( Great Vibes and Cinzel font for the headings, Open Sans and Montserrat for the body )
-  Applied colour scheme based on bakery aesthetic
-  Dusty Raspberry Jam (#A24857)
-  Pale Blush (#FADADD)  
-  Vanilla Bean (F9F5FO)
-  Set default styling for consistent font family, sizes, and spacing
  
  ### Week 7: Advanced CSS and Layout Development
- Implemented CSS Grid and Flexbox layouts for structured content presentation
- Created responsive navigation menu with hover effects
- Applied visual styling including backgrounds, borders, and shadows
- Developed pseudo-classes for interactive elements (:hover, :focus, :active states)
- Styled all page components including headers, main content areas, and footers

### Week 8: Responsive Design Implementation
- Implemented media queries for multiple breakpoints:
-  Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 320px - 767px
- Created responsive navigation menu that adapts on mobile devices
- Optimised images for different screen sizes and resolutions
- Adjusted typography scales for readability across devices
- Modified grid layouts to stack appropriately on smaller screens

  ### Week 9: Final CSS Refinement and Testing
- Conducted cross-browser compatibility testing (Chrome, Firefox, Safari, Edge)
- Performed responsive design testing across multiple devices and screen sizes
- Refined spacing, alignments, and visual hierarchy
- Optimised CSS code for performance and maintainability
- Validated CSS code and resolved styling conflicts

### Key Achievements in Phase 2:
- **Responsive Design**: Website adapts to desktop, tablet, and mobile devices
- **Visual Identity**: Implemented colour scheme and typography reflecting Italian restaurant branding
- **Interactive Elements**: Added hover states and focus indicators for user experience
- **Cross-browser Compatibility**: Ensured consistent appearance across major web browsers
- **Performance Optimisation**: Created efficient CSS with minimal redundancy

- ### Technical Specifications:
- **CSS Framework**: Custom CSS with Grid and Flexbox layouts
- **Typography**: Google Fonts integration (Great Vibes and Cinzel font for the headings, Open Sans and Montserrat for the body)
- **Responsive Breakpoints**: Mobile-first approach with progressive enhancement
-  **Browser Support**: Modern browsers with graceful degradation
- **Code Organisation**: Modular CSS structure with clear commenting

  ## Phase 3: JavaScript Interactivity and Final Enhancements (Weeks 10 - 12)

  This final phase focused on implementing advanced JavaScript functionality, interactive features, and comprehensive enhancements to create a fully functional, user-friendly website experience.

### Week 10: JavaScript Foundation and Core Features
*Interactive Navigation Tabs (header-container)
*Managing active states smoothly across pages or menus without duplicating files 
*Form Validation (loyalty.html & contact.html) using processing rules inside initialization functions like initGiftForm() or initContactForm()
*Used JavaScript to dynamically manage product grid.
    
### Week 11: Interactive Elements and User Experience
•Filter buttons (products.html)- clicking “cakes, cupcakes,etc” actually shows/hides products and scrolls to that section

•Add to cart buttons- clicking one changes the button next to “Added” for 1,2 seconds then reverts. It also logs to the browser console

•Form submissions (gift form+contact form” typing into the fields and clicking submit triggers real validation. If you leave a required field empty or type a bad email, you’ll get an alert listing whats writing. 
If you everything’s filled in correctly, you’ll get a thank you alert and the form closes

•Added category accordions for collapsible menu sections

•Added a search bar input box above the category filter buttons, plus a hidden “no results” message that appears automatically when nothing matches 

•Implemented smooth scroll animations for enhanced user experience

### Week 12: SEO, Accessibility, and Final Polish
*Implemented SEO enhancements (meta tags, canonical links, keyword injection)
*Implemented Meta description
*Enquiry controls (the gift form on loyalty.html)
*Enquiry validation
*Contact controls and contact validatioN
*Removed debug styles and polished final code
*Part 3 Submission**: 19 June 2026

### Key Achievements in Phase 3:
 **Interactive searchbar
 **Dynamic Content Loading
 **Enhanced User Experience
 **Form Validation
 **SEO Optimisation
 **Accessibility
 **Performance
  
## Changelog

  ## Phase 1 
-Update index.html

-Adding logo and navigation links

-Update product.html

-Image links for the cookies

-Update aboutus.html

-Fixed the width and height of the icons

-Add changelog for project updates

-Edited HTML Structure

-Edited the ReadME

-Intergrated content in HTML files 

-Added Navigation on the HTML files

## Phase 2 
-Update CHANGELOG with recent changes

-Revise Changelog formatting and content

-Refine README by eliminating duplicate features

-Document Phase 2: Visual Design and Responsive Development

-Intergrated more content on html

-Update index.html

-Update about.html

-Added more pictures and information on product.html

-Update loyaltyandreward.html

-Update contact.html

-Create a new CSS file (e.g., `style.css`) and link it to your HTML files on the website

-Set default styles for your entire website, such as font family, font size, colour scheme, and
margin/padding.

-Use a CSS reset to ensure consistent styling across different brows

-Use the `srcset` and `sizes` attributes to provide different image resolutions for different
screen sizes.

-Use responsive image techniques like the `picture` element and `srcset` attribute to
optimise image loading.

-Use browser developer tools to test your website on different devices and screen sizes

-Use `%` for widths and heights to make elements responsive.

## Phase 3

-Fixed syntax error

-Fixing the syntax error breaking page width

-Changed the grid layout to force a 3-column structure for product cards

-Fixed syntax error in .product-category-section padding rule

-Fix the selector typo (missing dot)

-Grouped navigation links inside a ul block in product.html

-Enabled justify-content: space-between to push navigation to the far right

-Added link to Javascript file using refer in head

-Interactive elements- Filter buttons (products.html)- clicking “cakes, cupcakes,etc” actually shows/hides products and scrolls to that section

-Add to cart buttons- clicking one changes the button next to “Added” for 1,2 seconds then reverts. It also logs to the browser console

-Form submissions (gift form+contact form” typing into the fields and clicking submit triggers real validation. -If you leave a required field empty or type a bad email, you’ll get an alert listing whats writing.

-If you everything’s filled in correctly, you’ll get a thank you alert and the form closes

-Product.html- Added a search bar input box above the category filter buttons, plus a hidden “no results” message that appears automatically when nothing matches

-script.js- rebuilt the filter logic so search and category filters work together. typing in the search box filters live, matching against each product’s name and description text

-Clicking category button stilk works at begire and now respects whatever’s typed in the search box at the same time

-Aresults counter shows “X treats found” while you are actively searching , if nothing matches, the “no results” message appears with a “clear your search” link that resets everything . The whole category sections (with their headers) hide themselves if every card inside them is filtered out, so you don’t see an empty “!cookies” heading with nothing under it

-style.css- styled the search bar with a magnifying glass icon, focus states matching the raspberry brand color and the no-results message styled in the blush background


## Responsiveness Testing and Iteration Across Devices
- These screenshots show how the site responds on common devices after iterative testing and adjustments.

### Desktop
<img width="1366" height="728" alt="desktop" src="https://github.com/user-attachments/assets/a0acac74-6744-4547-bba3-c470dfa1b048" />

## References
Abela, J. C., 2010. Freepik. [Online] Available at: https://www.freepik.com/ [Accessed 19 April 2026].

Braxmeier, H., 2010. Pixabay. [Online] Available at: https://pixabay.com/ [Accessed 19 April 2026].

Crossland, D., 2010. Google Font. [Online] Available at: https://fonts.google.com/ [Accessed 5 April 2026].

F, B., n.d. Coolor. [Online] Available at: https://coolors.co/palettes/popular [Accessed 1 April 2026].

J.C, A., n.d. Freepik. [Online] Available at: https://www.freepik.com/ [Accessed 19 April 2026].

T, V., 1997. 1Grid. [Online] Available at: https://1grid.co.za/domains/domain-name-registration/ [Accessed 13 April 2026].

Instagram, 2026 chellyssignaturetreats https://www.instagram.com/ChellysSignatureTreats

Meta (Facebook), 2026 Chelly's Signature Treats https://www.facebook.com/ChellysSignatureTreats

TikTok chellyssignaturetreats https://www.tiktok.com/ChellysSignatureTreats






