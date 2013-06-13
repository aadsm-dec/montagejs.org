montageDefine("bde39e3","docs/component-draw-cycle.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Component draw cycle - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Component draw cycle<a class=anchor id=Component-draw-cycle href="#Component-draw-cycle"></a>\n</h1>\n\n<p>When building HTML5 applications, especially on mobile, performance is important. Two things that can have a critical impact on web application performance are DOM manipulation (creating or modifying DOM structure or styles) and DOM inspection (querying an element’s calculated style, such <code>offsetWidth</code>). Repeatedly manipulating and reading the DOM, in a unmanaged fashion, can cause multiple style reflows that can slow down an application considerably, even on a desktop machine. The term “layout thrash” has been used to describe the result of this type of DOM manipulation.</p>\n\n<h2>Overview<a class=anchor id=Overview href="#Overview"></a>\n</h2>\n\n<p>To maximize application performance, Montage uses a deferred drawing model in which DOM updates and queries are batched together, limiting the number of DOM reflows. These features are implemented through a series of component method callbacks that the framework invokes. Each draw cycle involves two main stages:</p>\n\n<ol>\n<li>Building a list, called the “draw list”, of components that have set their <code>needsDraw</code> property to true.</li>\n<li>The draw phase, in which a series of callback methods are invoked on each component in the draw list.</li>\n</ol><p>Draw cycles are scheduled using <code>requestAnimationFrame()</code> on browsers that support it, or <code>setTimeout()</code> on legacy systems.</p>\n\n<h2>Building the draw list<a class=anchor id=Building-the-draw-list href="#Building-the-draw-list"></a>\n</h2>\n\n<p>During each draw cycle, Montage explores the application’s component tree for all components that have their <code>needsDraw</code> property set to <code>true</code>. Only components that have indicated they want to draw, or have a child that wants to draw are explored. If a component being added to the draw list is participating in a draw cycle for the first time, its <code>prepareForDraw()</code> callback method is invoked. A parent component can also block exploration of its child components by returning <code>false</code> from its <code>canDraw()</code> method.</p>\n\n<p>Once this initial list has been created, Montage invokes <code>willDraw()</code> on each component in the list. As a result of this, additional components may have had their <code>needsDraw</code> property set to <code>true</code>. For example, a parent component’s <code>willDraw()</code> implementation might determine that one of its child components needs to update its DOM, so it sets the component’s <code>needsDraw</code> property to true. To include these components in the current draw cycle, Montage explores the component tree again for new components that requested a draw and adds them to the draw list. It then invokes <code>willDraw()</code> on each of the newly added components. This process is repeated until no additional components have requested a draw. Any component that requests a draw during the remainder of the draw cycle will be part of the next draw cycle.</p>\n\n<h2>Drawing phase<a class=anchor id=Drawing-phase href="#Drawing-phase"></a>\n</h2>\n\n<p>Once the list of components that need to be redrawn has been generated, Montage invokes the <code>draw()</code> method on each member of the list. This method is the prescribed location for components to modify their DOM structure or CSS styles; those types of operations should not be performed outside of a component’s <code>draw()</code> method. Finally, <code>didDraw()</code> is called on each component in the draw list. If this was the first time a component in the draw list was drawn, that component automatically dispatches a <code>"firstDraw"</code> event.</p>\n\n<p>Children of a component are always drawn before their parents.</p>\n\n<h2>Callback methods and rules<a class=anchor id=Callback-methods-and-rules href="#Callback-methods-and-rules"></a>\n</h2>\n\n<p>The following are the component callback methods involved in the draw cycle. The framework calls these methods at the appropriate times, and should never be called directly by an application. Which methods a component implements depends on what it wants to do. But in general, any component that intends to directly update its DOM structure must implement a <code>draw()</code> method.</p>\n\n<h3>Callback methods<a class=anchor id=Callback-methods href="#Callback-methods"></a>\n</h3>\n\n<h4>canDraw()<a class=anchor id="canDraw()" href="#canDraw()"></a>\n</h4>\n\n<ul>\n<li>\n<strong>When invoked:</strong> While Montage walks the component tree determining which components to add to the draw list.</li>\n<li>\n<strong>Purpose:</strong> If a component returns <code>false</code> from this method then it won’t be added to the draw list, and its child component tree isn’t explored.</li>\n</ul><h4>prepareForDraw()<a class=anchor id="prepareForDraw()" href="#prepareForDraw()"></a>\n</h4>\n\n<ul>\n<li>\n<strong>When invoked:</strong> The first time a component is added to the draw list.</li>\n<li>\n<strong>Purpose:</strong> Provides the component a chance to prepare for it being drawn for the first time. For a component with an HTML template, this method is invoked when the template been loaded and applied to the DOM.</li>\n</ul><h4>willDraw()<a class=anchor id="willDraw()" href="#willDraw()"></a>\n</h4>\n\n<ul>\n<li>\n<strong>When invoked:</strong> Invoked on each component in the generated draw list.</li>\n<li>\n<strong>Purpose:</strong> Provides the component an opportunity to query the DOM for any necessary calculations before drawing. If the execution of this method sets <code>needsDraw</code> to true on other components, those components will be added to the current draw cycle.</li>\n</ul><h4>draw()<a class=anchor id="draw()" href="#draw()"></a>\n</h4>\n\n<ul>\n<li>\n<strong>When invoked:</strong> Invoked on each component in the generated draw list, after <code>willDraw()</code> has been invoked on each.</li>\n<li>\n<strong>Purpose:</strong> This is the prescribed location for components to update its DOM structure or modify its styles.</li>\n</ul><h4>didDraw()<a class=anchor id="didDraw()" href="#didDraw()"></a>\n</h4>\n\n<ul>\n<li>\n<strong>When invoked:</strong> Invoked on each component in the generated draw list, after <code>draw()</code> has been invoked on each.</li>\n<li>\n<strong>Purpose:</strong> Provides the component an opportunity to query the DOM for any necessary calculations after drawing.</li>\n</ul><p>Components must follow Rules for the draw cycle:\n1. A component should never perform any DOM manipulation outside of its <code>draw()</code> method. This includes element style changes, and appending or removing elements from the DOM.\n2. Any reading of the DOM for measurements (such as an element’s <code>offsetWidth</code>) should only be performed in the <code>willDraw()</code> or <code>didDraw()</code> methods, and never in <code>draw()</code> method.</p>\n\n<p>By implementing your component’s DOM changes and queries in this way will limit the amount of reflows by the browser which will help to improve performance.</p>\n\n<h2>Component tree model<a class=anchor id=Component-tree-model href="#Component-tree-model"></a>\n</h2>\n\n<p>A Montage application consists of one or more components arranged hierarchically in a tree, much like the DOM. Every Montage application has a root component that is created automatically by the framework. Every component (except the root) has a parent component. Every component also has an associated DOM element that is the component’s primary connection to the DOM, and is specified by the component’s <code>element</code> property. The component is the element’s “controller”, and can be accessed by reading the <code>controller</code> property on its DOM element. A component’s parent component, therefore, can be found by walking up the DOM tree from its own DOM element until it finds an element that has a non-null <code>controller</code> property.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}();</script>\n\n</body>\n</html>'});