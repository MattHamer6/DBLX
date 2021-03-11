# DBLX

By Matt Hamer

## List of Technologies Used

- WordPress
- Advanced Custom Fields Flexible Content
- HTML5 / SASS
- jQuery
- AnimeJS Library
- GULP

After seeing the design I already had a few ideas of how I could bring my own flair to the website. After everything had been setup and installed I began work on the header & footer of the site - I decided to go with a smooth transitional slide out navigation menu, as I think it fits the site perfectly whilst remaining slick and minimal. I added a slide in and out effect on the navigation links through Anime to ensure the site looks professional and not stale and flat.

The whole site is built to be fully customisable from within the CMS, which is why I chose to use Advanced Custom Fields to create a page builder where you can easily reorder the different blocks on the page. The more static content (cotact information, social media pages etc...) take advantage of the ACF Option Pages - as they're unlikely to change all that often.

I had the idea to have the large words on the landing page slide up and down on page load, and then only after that animation is complete the main section of text will slowly fade and slide into place. This effect is carried on as you scroll down the page, where animations start only when the specific section is in your viewport.

Lastly, I added a small bit of jQuery that will make the page smoothly scroll to an anchor tag when clicked; and then added the JS Library Scrollify, to cater to the "Scroll to Navigate" part of the site - this makes it so you don't have to continuously scroll to browse the site, as it will auto scroll for you!
