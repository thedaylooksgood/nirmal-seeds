# Nirmal Seeds - Dynamic Website Blueprint

This is a comprehensive architectural blueprint for making the Nirmal Seeds website dynamic. This document outlines exactly what fields need to exist in the database, how the Admin Dashboard should be built to manage them, and how the Frontend will pull that data.

---

## 🌍 1. GLOBAL ELEMENTS (Appears on Every Page)
Before diving into specific pages, you need a single place in the Admin Dashboard to manage things that show up everywhere.

### The "Global Settings" Section:
**Header / Navbar:**
*   **Admin Dashboard input:** A file upload field for the `Website Logo`.
*   **Admin Dashboard input:** A dynamic list builder for `Navigation Links` (e.g., Name: "About", URL: "/about").

**Footer:**
*   **Admin Dashboard input:** Text fields for `Company Address`, `Phone Number`, and `Email Address`.
*   **Admin Dashboard input:** URL fields for `Social Media Links` (Facebook, Instagram, LinkedIn, Twitter).
*   **Admin Dashboard input:** A short text field for `Copyright Text` (e.g., "© 2024 Nirmal Seeds. All rights reserved.").

**How it works structurally:** Your database will have a `global_settings` table (usually just one row of data). Every single page on the frontend will fetch this row to render the top menu and the bottom footer.

---

## 🏠 2. HOME PAGE
The Home Page in the Admin Dashboard should be its own dedicated tab, broken down by sections.

### Section 2.1: The Hero Slider / Main Banner
*   **What it is:** The big changing images at the top of the website.
*   **Admin Dashboard needs:** A "Sliders" manager where you can Add/Edit/Delete individual slides.
*   **Fields per slide:**
    *   `Background Image` (File Upload)
    *   `Main Heading` (Short Text, e.g., "High Yielding Cotton Seeds")
    *   `Sub-heading` (Short Text, e.g., "Empowering farmers with quality...")
    *   `Button Text` (Short Text, e.g., "Explore Products")
    *   `Button Link` (URL field)
*   **Frontend Logic:** The frontend fetches the array of slides and loops through them to build the carousel.

### Section 2.2: "About Us" Quick Snippet (Introduction)
*   **What it is:** A small block of text summarizing the company, usually with an image next to it, leading to the full About page.
*   **Admin Dashboard needs:** A simple input form for the "Home Intro".
*   **Fields:**
    *   `Section Title` (e.g., "Welcome to Nirmal Seeds")
    *   `Description` (A WYSIWYG text editor so you can add bolding or paragraphs).
    *   `Side Image` (File Upload)
    *   `Years of Experience Number` (Number field, if you have a badge like "30+ Years").

### Section 2.3: Featured Categories / Top Products
*   **What it is:** A grid showing "Cotton", "Paddy", "Vegetables", etc.
*   **Admin Dashboard needs:** You don't necessarily recreate categories here. Instead, in your main "Categories" admin page (discussed later), you add a toggle switch/checkbox called `Show on Home Page?`.
*   **Frontend Logic:** The frontend fetches up to 4 or 6 categories from the database where `is_featured = true` and displays their image, name, and a link.

### Section 2.4: Statistics / Achievements Bar
*   **What it is:** The section with a highly visual banner containing numbers (e.g., "10,000+ Happy Farmers", "50+ Seed Varieties").
*   **Admin Dashboard needs:** A "Home Stats" manager. Complete with:
    *   `Stat 1 Number` & `Stat 1 Label`
    *   `Stat 2 Number` & `Stat 2 Label`
    *   `Stat 3 Number` & `Stat 3 Label`

---

## 📖 3. ABOUT US PAGE
This page needs to tell the company's story. The Admin Dashboard should have an "About Page Content" section.

### Section 3.1: Page Header Banner
*   **Admin Dashboard needs:** 
    *   `Banner Image` (File upload for the background at the top of the About page).
    *   `Page Title` (Usually just "About Nirmal Seeds").

### Section 3.2: Company History & Story
*   **Admin Dashboard needs:**
    *   `Main Story Title` (Text field).
    *   `Story Content` (WYSIWYG editor for multiple paragraphs).
    *   `Story Image` (File upload).

### Section 3.3: Vision & Mission Blocks
*   **Admin Dashboard needs:**
    *   `Target Vision Text` (TextArea).
    *   `Target Mission Text` (TextArea).
    *   *(Optional)* Upload fields for custom icons for both.

### Section 3.4: Board of Directors / Team (Dynamic Array)
*   **Admin Dashboard needs:** A "Team Manager" where you can add multiple people.
*   **Fields required for each person:**
    *   `Profile Photo` (File Upload)
    *   `Full Name` (Text)
    *   `Designation/Role` (Text)
    *   `Short Bio` (TextArea)
    *   `Sort Order` (Number - to control who appears first).
*   **Frontend Logic:** Loops through the 'Team' database table and prints out a card for each person.

---

## 🌱 4. PRODUCTS / SEEDS SYSTEM
Products need a full Relational Database setup in your Admin Dashboard. 

### Section 4.1: Category Management (Admin)
*   **What it is:** Pages for "Cereals", "Pulses", "Vegetables", "Oil Seeds".
*   **Admin Dashboard needs:** An interface to Create/Edit/Delete Categories.
*   **Fields:**
    *   `Category Name`.
    *   `Category Slug` (Used for the URL, e.g., `nirmalseeds.com/products/oil-seeds`).
    *   `Category Description`.
    *   `Category Cover Image`.

### Section 4.2: Product Management (Admin)
*   **What it is:** The individual seed varieties (e.g., "Nirmal-77 Cotton", "NS-999 Tomato").
*   **Admin Dashboard needs:** An interface to Create/Edit/Delete individual Products, linked to Categories.
*   **Fields required:**
    *   `Product Name`.
    *   `Slug` (URL friendly name).
    *   `Category Dropdown` (Assign the product to a Category).
    *   `Main Image` & `Additional Gallery Images` (Multiple file upload).
    *   **Seed Specifications:**
        *   `Crop Duration / Maturity` (e.g., "150-160 days")
        *   `Sowing Season` (e.g., "Kharif")
        *   `Yield Potential`
        *   `Disease Tolerance`
        *   `Special Features` (WYSIWYG editor)

### Section 4.3: How the Frontend displays this:
*   **The "All Products" Page:** Automatically lists all Categories.
*   **The "Category" Page:** Automatically pulls all Products assigned to that specific category.
*   **The "Product Detail" Page:** Populates the images, title, and all the specific seed specifications dynamically based on the URL clicked.

---

## 📞 5. CONTACT US PAGE
This page serves two structural purposes: Displaying info, and receiving data.

### Section 5.1: Contact Information Display
*   **Structurally:** You do NOT need to recreate these fields in the Admin Dashboard if you already created them in the **Global Settings** (Step 1). The frontend simply pulls the Address, Phone, and Email from the Global Settings database row.
*   **Google Maps Location:**
    *   **Admin Dashboard needs:** A field in Global Settings for `Google Maps Embed URL / Iframe` so you can update the pin location without touching code.

### Section 5.2: The Contact Form (Data Collection)
*   **Frontend Logic:** The user fills out Name, Email, Phone, and Message.
*   **Database Requirement:** A table called `contact_inquiries` or `leads`.
*   **Admin Dashboard needs:** A "Messages" or "Inquiries" inbox. This is a Read-Only section where you can:
    *   View a list of all form submissions.
    *   See the date/time they submitted it.
    *   Click to read the full message.
    *   *(Optional)* Change a status from "Unread" to "Followed Up".
