48-Hour Website Delivery SOP
Standard Operating Procedure for delivering local business websites in 48 hours using Astro + Tailwind + Cloudflare Pages.

Overview
Total time: 5-6 hours of actual work spread across 48 hours
Tech stack: Astro, Tailwind CSS, Cloudflare Pages
Target clients: Plumbers, electricians, barbers, contractors, local service businesses
Timeline breakdown:

Phase 0: Pre-kick-off (30 min)
Phase 1: Setup (30 min)
Phase 2: Development (3-4 hours)
Phase 3: Review (1 hour)
Phase 4: Launch (30 min)


Phase 0: Pre-Kick-off (30 min)
Content Collection Checklist
Send this to the client immediately after signing:
Subject: What I need to build your website

Hi [Name],

To start your website, please send me:

REQUIRED:
□ Business name (exactly as you want it displayed)
□ Phone number
□ Email address
□ Physical address (if applicable)
□ Business hours
□ Services list (brief description of each)
□ About section (2-3 paragraphs about your business)
□ Photos (logo, team, work samples - at least 5-10 images)

OPTIONAL BUT HELPFUL:
□ Tagline or slogan
□ Social media links
□ License/certification numbers
□ Years in business
□ Service area
□ Customer testimonials (1-3)

Send everything to [your email]. I'll start as soon as I receive it.

[Your name]

Content Audit
When content arrives, verify:

Text content - Is it enough for each page?
Images - Are they high-resolution? (minimum 1200px wide)
Contact info - Phone, email, address complete?
Business details - Hours, services, about section?

If content is incomplete:
"Thanks for sending this. I'm missing [X, Y, Z]. Can you send 
those by [time] so we stay on schedule for [launch date]?"

Set Expectations
Before starting, confirm with client:
"I'll have a first draft ready in [24 hours]. I'll send you a 
preview link to review. Plan to spend 15 minutes clicking through 
and noting any changes. We'll make revisions and launch on [date]."


Phase 1: Setup (30 min)
1.1 Create Project from Template (5 min)
AI Prompt:
Create a new Astro project for a local [business type] website.

Business: [Business Name]
Location: [City, State]
Services: [List main services]

Setup requirements:
- Astro with Tailwind CSS
- Static output for Cloudflare Pages
- Responsive design (mobile-first)
- Contact form ready for Formspark integration
- SEO-friendly structure

Create the base project structure with placeholder components.

Manual setup (if not using template):
npm create astro@latest [project-name]cd [project-name]npx astro add tailwind
1.2 Set Up Git Repository (5 min)
git initgit add .git commit -m "Initial project setup"gh repo create [client-name]-website --private --push
1.3 Configure Cloudflare Pages (10 min)

Log into Cloudflare Dashboard
Go to Workers & Pages → Create application → Pages
Connect to Git → Select repository
Configure build settings:

Build command: npm run build
Build output directory: dist


Deploy initial version

Verify: Site is live at [project-name].pages.dev
1.4 Create Project Folder Structure (10 min)
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── Gallery.astro
│   ├── Contact.astro
│   └── Testimonials.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── services.astro
│   ├── gallery.astro
│   ├── contact.astro
│   └── privacy.astro
└── styles/
    └── global.css
public/
├── images/
├── favicon.ico
└── robots.txt


Phase 2: Development (3-4 hours)
2.1 Hero Section (30 min)
AI Prompt:
Create an Astro Hero component for [Business Name], a [business type] in [City].

Requirements:
- Full-width hero with background image or solid color
- Business name prominently displayed
- Clear value proposition headline
- Primary CTA button (e.g., "Call Now" or "Get a Quote")
- Phone number visible (click-to-call on mobile)
- Mobile-responsive (text readable on small screens)

Use Tailwind CSS. Make it professional and trustworthy.

Content:
- Business name: [Name]
- Tagline: [Tagline]
- Phone: [Phone]
- Primary CTA: [Action]

Quality check:

 CTA button is prominent
 Phone number is click-to-call (tel: link)
 Readable on mobile (test at 375px)
 No horizontal scroll

2.2 Services Section (45 min)
AI Prompt:
Create an Astro Services component for [Business Name].

Services to display:
1. [Service 1] - [brief description]
2. [Service 2] - [brief description]
3. [Service 3] - [brief description]
[etc.]

Requirements:
- Grid layout (2-3 columns on desktop, 1 on mobile)
- Each service has icon/image, title, brief description
- Optional: link to detailed service page
- Consistent card styling
- Use Tailwind CSS

Quality check:

 All services listed
 Cards align properly in grid
 Readable descriptions
 Mobile layout works

2.3 Gallery/Portfolio (30 min)
AI Prompt:
Create an Astro Gallery component for [Business Name].

Requirements:
- Responsive image grid (3 columns desktop, 2 tablet, 1 mobile)
- Images should be optimized (use Astro's Image component)
- Consistent aspect ratio (suggest 4:3 or 16:9)
- Optional: lightbox functionality
- Alt text for each image
- Lazy loading for performance

I have [X] images to display.

Quality check:

 Images are optimized (not huge file sizes)
 Consistent aspect ratios
 Alt text on all images
 Lazy loading enabled

2.4 Contact Section (30 min)
AI Prompt:
Create an Astro Contact component for [Business Name].

Include:
- Contact form (Name, Email, Phone, Message)
- Business phone number (click-to-call)
- Business email
- Physical address (if applicable)
- Business hours
- Google Maps embed (optional)

Form should:
- Submit to Formspark (action URL: [your formspark URL])
- Have loading state on submit button
- Show success/error messages
- Validate required fields

Use Tailwind CSS for styling.

Formspark integration:
<form action="https://submit-form.com/YOUR_FORM_ID" method="POST">  <input type="hidden" name="_redirect" value="https://yoursite.com/thank-you">  <!-- form fields --></form>
Quality check:

 Form submits successfully (test it)
 Phone is click-to-call
 Address links to Google Maps
 Hours are accurate
 Loading state works

2.5 Footer (20 min)
AI Prompt:
Create an Astro Footer component for [Business Name].

Include:
- Business name and brief tagline
- Contact info (phone, email)
- Physical address
- Business hours
- Social media links (if provided)
- Copyright notice with current year
- Privacy policy link

Use Tailwind CSS. Keep it clean and functional.

Quality check:

 All links work
 Copyright year is correct (use dynamic year)
 Privacy policy link present
 Social links open in new tab

2.6 Privacy Policy (15 min)
AI Prompt:
Create a basic privacy policy page for [Business Name], a [business type] 
in [City, State].

The website:
- Collects contact form submissions (name, email, phone, message)
- Uses [analytics tool if any]
- Does not use cookies for tracking (or specify if you do)

Make it professional but readable. Include:
- What data is collected
- How it's used
- Contact information for privacy questions

This is for a small local business website, not a complex application.

Quality check:

 Accurate to what the site actually does
 Business contact info included
 Linked from footer

2.7 SEO & Meta Tags (15 min)
AI Prompt:
Create SEO meta tags for [Business Name], a [business type] in [City].

For each page, provide:
- Title tag (under 60 characters)
- Meta description (under 160 characters)
- Open Graph tags
- Twitter card tags

Pages:
- Home
- About
- Services
- Gallery
- Contact

Also create:
- JSON-LD structured data for LocalBusiness
- Sitemap configuration
- robots.txt

Required meta tags per page:
<title>[Business Name] - [Service] in [City] | [Page Name]</title><meta name="description" content="[150-160 char description]"><meta name="viewport" content="width=device-width, initial-scale=1"><meta property="og:title" content="[Title]"><meta property="og:description" content="[Description]"><meta property="og:image" content="[URL to image]"><link rel="canonical" href="[Page URL]">

Phase 3: Review (1 hour)
3.1 Quality Gates Checklist
Run through the Critical 7:


Interactive elements work

 All buttons clickable
 Contact form submits
 All links work
 Navigation works on mobile



Mobile responsive (375px)

 No horizontal scrolling
 Text readable
 Buttons tappable
 Navigation functional



Meta tags present

 Unique titles per page
 Descriptions present
 OG image set
 Favicon works



No placeholder content

 Search for "lorem"
 Search for "TODO"
 All contact info real
 All images real



Loading states

 Form submit shows loading
 Button disabled during submit



Consistent spacing

 Sections have even padding
 Grid items aligned
 Visual rhythm maintained



Testimonials real (if applicable)

 Names are real
 Content is authentic



3.2 Performance Check
Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Run audit

Target scores:

Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+

Common fixes:

Compress images if Performance is low
Add alt text if Accessibility is low
Fix meta tags if SEO is low

3.3 Mobile Testing
Test on real device if possible, or use DevTools:

Chrome DevTools → Device Toolbar
Test at 375px width (iPhone SE)
Test at 768px width (tablet)
Click through every page
Submit contact form
Check navigation menu

3.4 Send Preview Link
Subject: [Business Name] Website Preview - Please Review

Hi [Name],

Your website is ready for review!

Preview link: [your-project.pages.dev]

Please check:
□ All text is accurate (especially phone, address, hours)
□ Photos look good
□ Services are listed correctly
□ Contact form works (submit a test)
□ Everything looks good on your phone

Let me know any changes by [date/time]. Once approved, I'll 
connect your domain and launch!

[Your name]


Phase 4: Launch (30 min)
4.1 Apply Client Feedback
Common feedback types:

Text changes → Quick edits
Image swaps → Replace in /public/images
Layout changes → Evaluate scope (may need to charge extra)

Commit changes:
git add .git commit -m "Apply client feedback"git push
Cloudflare auto-deploys on push.
4.2 Connect Custom Domain
In Cloudflare Pages:

Go to project → Custom domains
Add domain: www.clientdomain.com
Add domain: clientdomain.com (redirect to www or vice versa)
Update DNS at client's registrar (or transfer to Cloudflare)

DNS settings:
Type: CNAME
Name: www
Target: [project].pages.dev

Type: CNAME (or ALIAS/ANAME)
Name: @
Target: [project].pages.dev

Verify:

Site loads at custom domain
HTTPS works (automatic with Cloudflare)
www and non-www both work

4.3 Post-Launch Setup
Google Search Console:

Go to search.google.com/search-console
Add property → URL prefix → Client's domain
Verify via DNS or HTML file
Submit sitemap: https://domain.com/sitemap.xml

Google Analytics (if requested):

Create GA4 property
Add tracking code to BaseLayout
Verify data is flowing

4.4 Client Handoff
Send launch email:
Subject: Your Website is Live! 🎉

Hi [Name],

Great news—[Business Name] is now live at [domain.com]!

WHAT'S DONE:
✅ Website live and running
✅ SSL certificate active (HTTPS)
✅ Submitted to Google for indexing
✅ Mobile optimized
✅ Contact form working

WHAT'S NEXT:
- Google will start indexing within a few days
- Share your new site on social media
- Update your Google Business Profile with the new URL
- Add the URL to business cards and marketing

POST-LAUNCH SUPPORT:
For the next 30 days, minor text/image changes are included. 
After that, see maintenance options I'll send separately.

Congratulations on your new website!

[Your name]

P.S. If you know any other business owners who need a website, 
I'd appreciate the referral!


Quick Reference
AI Prompts Summary

































SectionKey prompt elementsHeroBusiness name, tagline, CTA, phoneServicesList of services with descriptionsGalleryNumber of images, aspect ratioContactForm fields, business contact infoFooterSocial links, hours, addressSEOCity, service type, page names
Time Estimates



































PhaseTimeCumulativePre-kick-off30 min30 minSetup30 min1 hourDevelopment3-4 hours4-5 hoursReview1 hour5-6 hoursLaunch30 min5.5-6.5 hours
Common Blockers

























BlockerSolutionClient hasn't sent contentSend reminder, offer to write for extra feeImages too smallRequest larger files or source stock photosClient unresponsive for reviewSet deadline, proceed after 48hDomain DNS issuesWalk client through or offer to manage

Related Documentation:

Quality Gates - Pre-ship checklist
Performance Standards - Speed optimization
SEO Standards - Search optimization
Client Management - Communication templates
Client Acquisition - Finding clients

Back to: Business Model Overview