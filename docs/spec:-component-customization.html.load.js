montageDefine("bde39e3","docs/spec:-component-customization.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Component Customization - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Component Customization Editors António Afonso\n        Kris Kowal</p>\n\n<p>Index\nIntroduction\nFunctional Description\nAPI\nModification\nConditional Configuration\nApplication Algorithm\nCriterion Algorithm\nExamples\n\nIntroduction</p>\n\n<p>A fundamental part of component design is the ability to customize and extend the component in a way that doesn’t compromise its original design.</p>\n\n<p>The customization of a component can target different dimensions — color scheme, UX changes, region restrictions, specialization, etc. — however, they can be seen as a ui or controller extension of the component.</p>\n\n<p>This specification describes how a developer can extend his own, or 3rd party components, to achieve the desired customization.\nFunctional Description</p>\n\n<p>Any customization made on a component should be the result of extending the component and adding the necessary changes.</p>\n\n<p>The process of extending a component is detailed in the spec “Component Extending”.\nThe new component needs to have the same name of the component being extended. We use the same name as a convention to know which components a specific package overrides without having to declare them in a configuration file.</p>\n\n<p>Components customizations should be bundled in a specific package for that purpose. If this customization package is a dependency of any package in the application, it will find and apply its customizations to the package it is intended to modify.</p>\n\n<p>A theme, for instance, can be implemented as a package that extends a set of components in a way that modifies the color scheme of the components.\nAPI</p>\n\n<p>A theme is a package that is configured as being a modification of another package. This configuration is achieved by using the following properties on package.json:\nModification</p>\n\n<p>modifies: "" | {"location": "" | "name": ""}</p>\n\n<p>Identifies this package as a file overlay on another package, using a mapping-style dependency.  It can be either a string or an object.  If it is a string, it is equivalent to {"location": string}.  If it is an object it can have either location or name properties.  If it is a location, it must be a path relative to package.json to the other package directory, with or without a final slash.  If it is a name, the location is inferred from a package with the same name.\nThe name is potentially ambiguous, but generally the global namespace for package is managed by NPM.</p>\n\n<p>Modification creates a new package that replaces the original.  The new package.json is created by applying the modifier package.json to the original using the application algorithm.\nConditional Configuration</p>\n\n<p>if: {"": {"path": "", "manifest": ["", ...]}}</p>\n\n<p>The “if” object contains an ordered mapping from criteria to a modifier to the root of package.json.  For each criterion, in order, the modifier is applied using the application algorithm described below if the criterion is satisfied using the criterion algorithm.  Criteria can be a diverse set of conditions.\nApplication Algorithm</p>\n\n<p>[Kris Kowal will write this bit]\nCriterion Algorithm</p>\n\n<p>[Kris Kowal will write this bit]\nExamples</p>\n\n<p>{\n    "modifies": {"name": "montage"},\n    "manifest": [\n        "ui/slider.reel",\n        "ui/toggle.reel"\n    ]\n}</p>\n\n<p>{\n    "modifies": {"name": "montage"},\n    "if": {\n        "platform:android": {\n            "path": "android/",\n            "manifest": [\n                "ui/slider.reel",\n                "ui/toggle.reel"\n            ]\n        }\n    }\n}</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,r){var n,i=e.getElementsByTagName(t)[0];e.getElementById(r)||(n=e.createElement(t),n.id=r,n.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,r){var n,i=e.getElementsByTagName(t)[0];e.getElementById(r)||(n=e.createElement(t),n.id=r,n.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();</script>\n\n</body>\n</html>'});