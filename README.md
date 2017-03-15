# Frontend Guidelines
Frontend guidelines to make team members write consistent & cohesive code together.

## HTML
### HTML Principles
- **Standalone**  
HTML itself should work well without CSS and JavaScript. The content should be accessible, form should be able to submited.  
Disable images, CSS and JavaScript to check if it works.  

- **Semantics**  
Use semantics elements (`<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<header>`, `<footer>`, `<main>`, `<nav>`, `<section>`) instead of generic elements (`<div>`, `<span>`).   
http://html5bot.webflow.io/  

- **Document outline**  
Traditional way
```html
<div class="primary">
    <h1>Page Title</h1>

    <div class="article">
        <h2>Article Title</h2>
        <p>Llorem ipsum dolor sit amet.</p>

        <h3>Article Subtitle</h3>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>

        <h3>Article Subtitle</h3>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>
    </div>

    <div class="article">
        <h2>Article Title</h2>
        <p>Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
    </div>
</div>

<div class="sidebar">
    <h2>Related Articles</h2>
    ...
</div>
```
HTML5
```html
<div class="primary">
    <h1>Page Title</h1>

    <article>
        <h1>Article Title</h1>
        <p>Llorem ipsum dolor sit amet.</p>

        <h2>Article Subtitle</h2>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>

        <h2>Article Subtitle</h2>
        <p>Curabitur vulputate, ligula lacinia scelerisque tempor.</p>
    </article>

    <article>
        <h1>Article Title</h1>
        <p>Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
    </article>
</div>

<aside>
    <h1>Related Articles</h1>
    ...
</aside>
```
https://www.smashingmagazine.com/2011/08/html5-and-the-document-outlining-algorithm/  
http://html5doctor.com/outlines/  
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines  
https://bitsofco.de/document-outlines-in-html-5-1/  
https://gsnedders.html5.org/outliner/  

- Avoid **inline styles** or **event handlers**  
- **Indentation**  
Use 2 spaces for indentation. This is the only way to guarantee code renders the same in any environment.
```html
<ul>
••<li>Item</li>
</ul>
```

- **Attributes**  
HTML attributes should come in this order for easier reading:  
  1. `class`   
  2. `id, name`   
  3. `data-*`  
  4. `src, for, type, href, value`  
  5. `title, alt`, `role, aria-*`   

Classes are used most often, so they come first. Ids are more specific and should be used sparingly, for in-page bookmarks, so they come second.
```html
<a class="link" id="link" data-toggle="modal" href="#">Example link</a>
```

- **Classes**  
  - Always use lower case.  
  - The classes used for javaScript must start with `js-`.
```html
<a href="" class="js-popup">Log In</a>
```
- **Comments**  
Don't use HTML comments, because:
  - HTML comments should be visible only for developer.
  - HTML comments increase file size.  

Use comments in backend/templating language:
```php
<?php
// Some comments
?>
<p>Lorem ipsum dolor sit amet.</p>
```
```njk
{# Some comments #}
<p>Lorem ipsum dolor sit amet.</p>
```

### HTML Tools  
- **templating engine**   
Nunjucks: [website](https://mozilla.github.io/nunjucks/), [templating](https://mozilla.github.io/nunjucks/templating.html), [API](https://mozilla.github.io/nunjucks/api.html)  

---------------

## CSS 

### CSS Principles
- **What are some general principles your team should follow when writing CSS?** *(For example, modularity, avoiding long selector strings, etc. See [these](http://cssguidelin.es/) [resources](http://www.yellowshoe.com.au/standards/#css) [for](http://manuals.gravitydept.com/code/css) [inspiration](http://codeguide.co/#css))*

### CSS Methodology
- **Is your team using a CSS methodology** *(such as [SMACSS](https://smacss.com/), [BEM](https://en.bem.info/method/), or [OOCSS](http://oocss.org/))*? If yes, where is the documentation for that methodology?
- **Are you deviating from the methodology in any way?** If so, can you highlight these conventions?

### CSS Tools
- **Is the team using a preprocessor** *(such as [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/))*?
- **What are the guidelines for using that preprocessor** *(check out [Sass Guidelines](https://sass-guidelin.es/) for inspiration)*?
- **Are you using a CSS base** *(such as [Normalize](https://necolas.github.io/normalize.css/) or a [reset](http://meyerweb.com/eric/tools/css/reset/))*?
- **Are you using any CSS postprocessors** *(such as [Prefixfree](https://leaverou.github.io/prefixfree/) or [Autoprefixer](https://github.com/postcss/autoprefixer))*?
- **Are there specific CSS techniques you're utilizing** *(such as [critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/))*?

### CSS Frameworks
- **Is the team using a framework** *(such as [Bootstrap](https://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/))*? If yes, where is the documentation for that framework?
- **Are you deviating from the framework in any way?** If so, can you highlight these conventions?

### CSS Style
- **Spaces or Tabs?**
- **Spacing around rules?**
- **[Grouping](https://smacss.com/book/formatting#grouping) properties?**
- **What does CSS commenting look like?** 

---------------

## JavaScript

### JavaScript Principles
- **What are some general principles your team should follow when writing JavaScript?** *(See [these](https://github.com/airbnb/javascript) [resources](https://github.com/rwaldron/idiomatic.js) for [inspiration](https://github.com/styleguide/javascript))*


### JavaScript tools
- **Are you using a JavaScript framework** *(such as [jQuery](https://jquery.com/), [Ember](http://emberjs.com/), [Angular](https://angularjs.org/), etc)*?
- **Where is the documentation for those frameworks?**
- **Are you using any polyfills or shims** *(such as [any of these](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills))*?
- **What third-party scripts are dependencies for your project** *(such as scripts for form validation, graphs, animation, etc)*?
- **Do you test your JavaScript?** If so, what tools do you use *(such as [Jasmine](https://jasmine.github.io/), [Karma](https://github.com/karma-runner/karma), [Selenium](http://docs.seleniumhq.org/), etc)*?

### JavaScript Style 
*(See [these](https://github.com/airbnb/javascript) [resources](https://github.com/rwaldron/idiomatic.js) for [inspiration](https://github.com/styleguide/javascript))*
- **Spaces or Tabs?**
- **What does JS commenting look like?** 
- **What patterns are you following?** *(See [these](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) [resources](https://shichuan.github.io/javascript-patterns/))*

---------------

## Media
- **How are you handling icons** *(such as using SVG, icon fonts, etc)*?
- **How are you handling responsive images** *(such as using `srcset` & `<picture />`)*?
- **Are you using any [tools](https://addyosmani.com/blog/image-optimization-tools/) to optimize and serve images**?

---------------

## Fonts
- **How do you load custom fonts?**
- **Do you use any tools to help implement web fonts** *(such as [Font Squirrel](https://www.fontsquirrel.com/), etc)*?
- **Do you use a service to manage and serve custom fonts** *(such as [Fonts.com](https://www.fonts.com/), [Typekit](https://typekit.com/), etc)*?


---------------

## Performance
- **Do you use performance budgets?** If so, what [metrics](https://timkadlec.com/2014/11/performance-budget-metrics/) are you using to determine budgets? Where are you keeping track of performance budgets?
- **How are you measuring your project's speed** *(such as [Pingdom Speed Test](http://tools.pingdom.com/) or [Google PageSpeed](https://developers.google.com/speed/pagespeed/))*?
- **What techniques are you using to decrease file size** *(such as [Gzip](https://css-tricks.com/snippets/htaccess/active-gzip-compression/), [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization))*?
- **What performance-related tools are you using in your workflow?** *(such as [WebPagetest](http://www.webpagetest.org/), [BigRig](https://aerotwist.com/blog/bigrig/) [Speedcurve](https://speedcurve.com/))*?


---------------

## Accessibility
- **Are you following the accessibility recommendations laid out in [this checklist](http://a11yproject.com/checklist.html)?**
- **What accessibility-related [tools](http://a11yproject.com/resources.html) are you using in your workflow?**

---------------

## Tooling
- **Are you using a task runner** *(such as [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/))*?
- **Are you using a dependency manager** *(such as [Bower](http://bower.io/) or [Composer](https://getcomposer.org/))*?
- **Are you using any scaffolding tools** *(such as [Yeoman](http://yeoman.io/))*?
- **Are you using any tools to reinforce frontend style** *(such as [Editor Config](http://editorconfig.org/) or [linters](https://github.com/CSSLint/csslint))*?
- **Are any other specific pieces of software that are needed to work on this project?**

---------------

## Version control
- We use [Git](https://git-scm.com/) version control system to manage our code.  
- The code is hosted on [gitlab](https://about.gitlab.com/).  
- **Do you use a version control workflow** *(such as [gitflow](http://nvie.com/posts/a-successful-git-branching-model/), [centralized](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow), [feature-branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), etc)*?
- **Who's responsible for managing and governing the version controlled code?**
- **Where are issues tracked?**

-----------

## Support and Optimization
It's important to recognize the difference between ["support" and "optimization"](http://bradfrost.com/blog/mobile/support-vs-optimization/). You should do your best to support as many environments as possible while simultaneously optimizing for the environments that make the most sense for your business and users. 

- **What browsers are you *optimizing* for?** 
- **What devices are you *optimizing* for?** 
- **Are you using a [graded browser support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) system?**
- **Are there specific components that require [more specific grading](https://www.filamentgroup.com/lab/grade-the-components.html)?** 

-----------

## Localization
- **Is your website served in different languages?** If so, what considerations do you need to address when localizing for other languages?

-----------

## Deployment/Integration
- **How is your front-end code integrated into a production environment?**

-----------

## Documentation
- **Are you using a [pattern library tool](http://styleguides.io/tools.html) to document your front-end architecture?**
- **Where does your documentation live?** What are the links to the documentation?
- **Who's responsible for maintaining and governing the documentation?**
- **What happens when the guidelines are updated?**

-----------

**Reference**:   
http://www.yellowshoe.com.au/standards  
http://codeguide.co/  
http://manuals.gravitydept.com/code  
