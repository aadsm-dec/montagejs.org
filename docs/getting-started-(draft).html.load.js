montageDefine("1eabdb9","docs/getting-started-(draft).html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Getting Started (draft) - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Getting Started<a class=anchor id=Getting-Started href="#Getting-Started"></a>\n</h1>\n\n<p><em>(This is still a draft)</em></p>\n\n<p>This tutorial will show you how to assemble a simple Montage application. The goal is to quickly familiarize you with the basic building blocks of Montage. It should take no more than fifteen minutes for you to complete. To make the most of this tutorial, you should have some experience building web applications and be familiar with HTML, CSS, and JavaScript.</p>\n\n<h2>Set Up Montage Development<a class=anchor id=Set-Up-Montage-Development href="#Set-Up-Montage-Development"></a>\n</h2>\n\n<blockquote>\n<p><strong>Note</strong>: You can also follow this part of the tutorial on YouTube for <a href="http://www.youtube.com/watch?v=JfT1ML200JI">Mac OS X</a>, <a href="http://www.youtube.com/watch?v=HDOItFcfopY">Windows</a>, or <a href="http://www.youtube.com/watch?v=OcLN-zP3A00">Ubuntu Linux</a> users.</p>\n</blockquote>\n\n<h3>Step 1: Install Node and npm<a class=anchor id=Step-1:-Install-Node-and-npm href="#Step-1:-Install-Node-and-npm"></a>\n</h3>\n\n<p>To begin, you must have npm, the Node package manager, installed which is part of the Node ecosystem and distributed with Node.js. npm is required to fulfill dependencies throughout the Montage application development process. If you haven’t already, be sure to <a href="http://nodejs.org/download/">download</a> and run the prebuilt installer for your platform from the Node.js website before proceeding.</p>\n\n<h3>Step 2: Install the Montage Initializer<a class=anchor id=Step-2:-Install-the-Montage-Initializer href="#Step-2:-Install-the-Montage-Initializer"></a>\n</h3>\n\n<p>Next, you will need to install <code>minit</code>, the Montage Initializer.</p>\n\n<p><code>minit</code> is a command line utility that will help you kickstart your Montage project by generating prebuilt Montage application templates and components and placing the associated files inside the proper directories of your project. </p>\n\n<blockquote>\n<p><strong>Note</strong>: You don\'t have to use <code>minit</code> to build Montage application; you can just use a GIT client and start from scratch. However, using <code>minit</code> makes the process a little easier.</p>\n</blockquote>\n\n<p>Open a Terminal window and install the latest version of <code>minit</code>:</p>\n\n<p><strong>Mac OS X</strong></p>\n\n<p></p><div class=highlight><pre><span class=nv>$ </span>mkdir -p ~/.npm\n<span class=nv>$ </span>sudo npm install -gq minit@latest\n</pre></div>\n\n<blockquote>\n<p><strong>Note</strong>: <code>minit</code> does not need sudo access; this is a workaround due to a current <a href="https://github.com/joyent/node/issues/3821">issue</a> with the OS X node installer package.</p>\n</blockquote>\n\n<p><strong>Windows</strong></p>\n\n<p>Run the “Node.js command prompt”</p>\n\n<p></p><div class=highlight><pre><span class=nv>$ </span>npm install -gq minit@latest\n</pre></div>\n\n<h3>Step 3: Create the default application template<a class=anchor id=Step-3:-Create-the-default-application-template href="#Step-3:-Create-the-default-application-template"></a>\n</h3>\n\n<p>You are now ready to create your first Montage application.</p>\n\n<ol>\n<li>\n<p>Use <code>minit</code> to create a Montage application named hello.</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span>minit create:app -n hello\n</pre></div>\n\n<blockquote>\n<p><strong>Note</strong>: If you get an EACCES warning when trying to run <code>minit:create</code>, use <code>sudo chown -R &lt;username&gt; ~/.npm</code> and then use <code>$ minit create:app -n hello</code>. This is a workaround due to a bug in npm.</p>\n</blockquote>\n\n<p>This generates the hello directory—which contains the default Montage application template, including the production dependencies—in your current directory.</p>\n</li>\n<li>\n<p>To verify your installation, switch to the hello directory and serve your new Montage project using <code>minit</code>:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span><span class=nb>cd </span>hello\n<span class=nv>$ </span>minit serve &amp;\n</pre></div>\n</li>\n<li><p>Finally, point your browser to http://localhost:8083/.</p></li>\n</ol><p>Voilà—you are looking at your first Montage application. More precisely, you are looking at the contents of the Welcome component, which is explicitly loaded for no other reason than to accompany this tutorial and help kickstart your Montage application development skills. Think of this app and what follows as an expanded version of your standard “Hello World” application.</p>\n\n<p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_01.png" alt=GS_Figure1></p>\n\n<p>In the remaining part of this tutorial, you will learn how to assemble Montage components into a user interface, surface and synchronize data between Montage objects and the user interface, and listen for and react to events.</p>\n\n<h2>Say Hello to Montage<a class=anchor id=Say-Hello-to-Montage href="#Say-Hello-to-Montage"></a>\n</h2>\n\n<p>Montage applications consist of a model layer that handles the data and a view layer that reads from the models and handles user input and rendering. Components make up the view portion of a Montage application. As a rule, these components are stored in the ui directory of your Montage application and identified by a .reel suffix (which has the benefit that you can use any Montage package and easily locate the user interface components it provides).</p>\n\n<p>Check it out: In your file browser go to the hello/ui directory: inside you’ll find two components—main.reel and welcome.reel.</p>\n\n<p>A .reel suffix identifies a self-contained montage component that encapsulates the structure (HTML), appearance (CSS), and behavior (JavaScript) of the component. </p>\n\n<p>See for yourself: Open the welcome.reel directory and you will spot an HTML, a CSS, and a JS file. </p>\n\n<p>The welcome.html file contains the text and graphic that are rendered in the browser, the welcome.css file controls the appearance of the contents in welcome.html, and welcome.js controls its behavior (of which, frankly, there is not much at this point).</p>\n\n<blockquote>\n<p><strong>Note</strong>: For more details on the anatomy and key features of Montage components, refer to the Montage Basics document (coming soon).</p>\n</blockquote>\n\n<h3>Create a Custom UI Component<a class=anchor id=Create-a-Custom-UI-Component href="#Create-a-Custom-UI-Component"></a>\n</h3>\n\n<p>Let’s dress up the Welcome component by adding a user interface component. First, you will create and add a new component that spells “Hello World” and insert it in the Welcome component:</p>\n\n<ol>\n<li>\n<p>Open a new Terminal window, switch to the hello directory, and run the <code>minit</code> command to create a new component named hello-world:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span><span class=nb>cd </span>hello\n<span class=nv>$ </span>minit create:component -n hello-world\n</pre></div>\n<code>minit</code> creates the hello-world.reel directory in the ui directory of your hello app installation, complete with a default set of HTML, CSS, and JS files. Next, you need to add content to your new component that can be rendered inside the browser.</li>\n<li>\n<p>Go to the hello/ui/hello-world.reel directory, open the hello-world.html file in your preferred text editor, and insert "Hello World" inside the HTML body div:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"hello-world"</span> <span class=na>class=</span><span class=s>"HelloWorld"</span><span class=nt>&gt;</span>Hello World<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n</li>\n<li>\n<p>Save the hello-world.html template.</p>\n\n<p>Next, you need to tell the Welcome component to use your new component inside its template.</p>\n</li>\n<li>\n<p>Open the welcome.html template file located in the hello/ui/welcome.reel directory.</p>\n\n<p>In the head section, inside the montage-serialization script block, you’ll find a serialized object graph, which describes all the objects used in the document. (For more details on serialization in Montage refer to <a href="http://montagejs.org/docs/Montage-serialization-format.html">Montage Serialization Format</a> document.)</p>\n</li>\n<li>\n<p>Populate the existing entry for the helloWorld label with the component\'s ID (<code>protoype</code>) and properties:</p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"prototype"</span><span class=err>:</span> <span class=s2>"ui/hello-world.reel"</span><span class=err>,</span>\n<span class=s2>"properties"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"hello-world"</span><span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>This declares an instance of the HelloWorld component with an object label of “helloWorld” as a child of the Welcome component: The component’s module ID (“/ui/hello-world.reel”) allows Montage to recreate the component from its serialized form at runtime. The component’s <code>element</code> property, which corresponds to the associated HTML element on which the component operates, is set to the HTML body div with the <code>data-montage-id</code> attribute of “hello-world”.</p>\n</li>\n<li><p>Refresh the page.</p></li>\n</ol><p>You should see the contents of the HelloWorld component—a simple “Hello World” surrounded by a dotted outline (styled courtesy of the predefined rules in hello/ui/welcome.reel/welcome.css)—rendered inside this simple single-page application.</p>\n\n<blockquote>\n<p><strong>Note</strong>: You may have to clear your browser\'s cache for the change to appear.</p>\n</blockquote>\n\n<p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_02.png" alt=GS_Figure2></p>\n\n<p>That\'s how you build Montage applications—you assemble user interface components.</p>\n\n<h3>Modify a UI Component<a class=anchor id=Modify-a-UI-Component href="#Modify-a-UI-Component"></a>\n</h3>\n\n<p>Now suppose you wanted to dynamically change the contents of the HelloWorld component, say you wanted to replace the general word “World” in “Hello World” with a personal name based on user input, and, just to mix things up, you want that name to show in a different color. In broad strokes, here’s how you would go about architecting this part of your application:</p>\n\n<ol>\n<li>Create the component responsible for the replacement text.</li>\n<li>Instruct the HelloWorld component to use the replacement text.</li>\n<li>Provide an input component for user’s to enter text.</li>\n<li>Bind the components together so the contents of HelloWorld change in real time based on user input.</li>\n</ol><p>Follow these steps:</p>\n\n<ol>\n<li>\n<p>Open a new Terminal window, switch to the hello directory, and run <code>minit</code> to create a new component called name-tag:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span><span class=nb>cd </span>hello\n<span class=nv>$ </span>minit create:component -n name-tag\n</pre></div>\n\n<p>As you’d expect, <code>minit</code> creates the name-tag.reel directory complete with the associated files in the hello/ui directory. Next, you need to add the placeholder content that is to replace “World” in “Hello World.”</p>\n</li>\n<li>\n<p>Go to the hello/ui/name-tag.reel directory, open the name-tag.html file, and replace the default HTML body div with the following span:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"name-tag"</span> <span class=na>class=</span><span class=s>"NameTag"</span><span class=nt>&gt;</span>Name<span class=nt>&lt;/span&gt;</span> \n</pre></div>\n</li>\n<li><p>Save and close name-tag.html.</p></li>\n<li>\n<p>To have the content in this template appear in a different color, open the name-tag.css file and add the following rule:  </p>\n\n<p></p>\n<div class=highlight><pre><span class=nc>.NameTag</span> <span class=p>{</span>\n    <span class=k>color</span><span class=o>:</span> <span class=nb>red</span><span class=p>;</span>\n<span class=p>}</span>\n</pre></div>\n\n<blockquote>\n<p><strong>Note</strong>: Style sheets for newly created components only contain the class name of the root element. It’s up to you to populate them with your meticulously crafted rules. Note also that the CSS class name is a CamelCase version of the component’s name. This is part of our <a href=naming-conventions.html>CSS naming convention</a>; it allows us to scope each component\'s CSS so that it doesn\'t "leak out" and accidentally style other components.</p>\n</blockquote>\n\n<p>Next, you need to instruct the HelloWorld component to use the NameTag component.</p>\n</li>\n<li>\n<p>Go to hello/ui/hello-world.reel and open the hello-world.html template.</p>\n\n<p>In the head section, in the montage-serialization script block, following the “owner” property, add the serialization entry for the NameTag component ( <strong>be sure to add a comma following the “owner” entry to separate the objects</strong> ):</p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"nameTag"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"ui/name-tag.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"nameTag"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li>\n<p>In the HTML body, inside the div, replace “World” with the following span:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"main"</span> <span class=na>class=</span><span class=s>"Main"</span><span class=nt>&gt;</span>Hello <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"nameTag"</span><span class=nt>&gt;&lt;/span&gt;</span>\n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n</li>\n<li><p>Refresh the browser and enjoy the fancy red Name tag: The contents of the NameTag component are rendered using the <code>name-tag</code> element from its included HTML template and styled using its included CSS.</p></li>\n</ol><p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_03.png" alt=GS_Figure3></p>\n\n<p>You now have a pretty respectable component tree. But you’re not done yet. All you’ve done so far is assemble your visual component tree through the power of declarative programming. You have yet to connect its parts to an underlying model. For simplicity’s sake, we\'ll let our components serve as the model.</p>\n\n<h3>Assign Value Through Bindings<a class=anchor id=Assign-Value-Through-Bindings href="#Assign-Value-Through-Bindings"></a>\n</h3>\n\n<p>Your next task in your goal to create a more personalized greeting is to instruct the NameTag component on how to behave; more specifically, you want to pin a value on its name. Follow these steps:</p>\n\n<ol>\n<li>\n<p>Add a <code>name</code> property to the NameTag component\'s implementation in ui/name-tag.reel/name-tag.js: </p>\n\n<p></p>\n<div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>NameTag</span> <span class=o>=</span> <span class=nx>Component</span><span class=p>.</span><span class=nx>specialize</span><span class=p>(</span> <span class=cm>/** @lends NameTag# */</span> <span class=p>{</span>\n\n    <span class=nx>name</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=s2>"Alice"</span>\n    <span class=p>}</span>\n\n<span class=p>});</span>\n</pre></div>\n</li>\n<li>\n<p>Add a Montage-provided Text component to name-tag.html. In the head section, in the object graph, following the <code>owner</code> property, add the following serialization entry for the name object (remember to separate the objects in the object graph with a comma):</p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"name"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/text.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"name"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-"</span><span class=p>:</span> <span class=s2>"@owner.name"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li>\n<p>In the HTML body, inside the span, replace the “Name” text with the following span:\n</p>\n<div class=highlight><pre><span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"name"</span><span class=nt>&gt;&lt;/span&gt;</span>\n</pre></div>\nThis specifies that the <code>value</code> property of the Text component you create will be the same as the owner\'s <code>name</code> property (here: name-tag.html). Anytime the <code>owner.name</code> property changes, so will the value you see in the rendered view.</li>\n<li><p>Refresh the page. Instead of a red Name tag you should now see a red Alice.</p></li>\n</ol><p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_04.png" alt=GS_Figure4></p>\n\n<p>Bindings are among the pinnacle of declarative bliss. After declaring the binding between the two properties—<code>value</code> and <code>name</code>—you don\'t need to do anything else to make it happen.</p>\n\n<p>But wait, there\'s more. So far you have created only a placeholder for the replacement text and assigned a value to it. To complete your goal, you need to provide and hook up an input component.</p>\n\n<h3>Drive Changes Through Bindings<a class=anchor id=Drive-Changes-Through-Bindings href="#Drive-Changes-Through-Bindings"></a>\n</h3>\n\n<p>Conveniently, Montage provides a TextField component. First, however, you need to determine where to put it. Here\'s where you start architecting your application: As long as your application is small where to place your component is an easy decision to make; as your application expands, however, it\'s important to keep components, and all other objects, loosely coupled and highly cohesive to aid in determining where responsibilities live.</p>\n\n<p>For the purpose of this example, you want NameTag to be a read-only component, so you\'ll make editing the job of the HelloWorld component.</p>\n\n<ol>\n<li>\n<p>Add a Montage-provided TextField component to the template of your HelloWorld component at ui/hello-world.reel/hello-world.html; you know the drill by now:</p>\n\n<p><strong>Serialization</strong></p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"nameField"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"digit/ui/text-field.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"nameField"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@nameTag.name"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n<strong>HTML body</strong>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"main"</span> <span class=na>class=</span><span class=s>"Main"</span><span class=nt>&gt;</span>\n    Hello <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"nameTag"</span><span class=nt>&gt;&lt;/span&gt;</span>\n    <span class=nt>&lt;div&gt;&lt;input</span> <span class=na>type=</span><span class=s>"text"</span> <span class=na>data-montage-id=</span><span class=s>"nameField"</span><span class=nt>&gt;&lt;/div&gt;</span>\n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n\n<p>This binds the <code>value</code> property of the TextField component to the NameTag\'s <code>name</code> property, effectively making it a two-way binding as indicated by the double-headed arrow; changes on either side of this binding propagate to the other side. (In addition to deciding where components should live, you also have to decide which side to establish a binding on; but that\'s a topic for another tutorial.)</p>\n</li>\n<li>\n<p>Refresh the page and give it a try.</p>\n\n<p>As you type in the text field, the Name tag should update in real time.</p>\n</li>\n</ol><p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_05.png" alt=GS_Figure5></p>\n\n<p>You’re almost done. Just one more thing.</p>\n\n<h3>Listen for Events<a class=anchor id=Listen-for-Events href="#Listen-for-Events"></a>\n</h3>\n\n<p>Components can emit events in the same sense that DOM elements emit events. A Montage Button component, for example, dispatches an action event with itself as the target. This event is synthesized from a sequence of mouse or touch events that the button component itself observes on its own element. Here’s how you handle a button’s action event.</p>\n\n<ol>\n<li>\n<p>Add the Button component to the Hello-World component\'s template at ui/hello-world.reel/hello-world.html:</p>\n\n<p><strong>Serialization</strong> </p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"greetButton"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"digit/ui/button.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"greetButton"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"label"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-"</span><span class=p>:</span> <span class=s2>"@nameTag.name"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"listeners"</span><span class=p>:</span> <span class=p>[</span>\n        <span class=p>{</span>\n            <span class=nt>"type"</span><span class=p>:</span> <span class=s2>"action"</span><span class=p>,</span>\n            <span class=nt>"listener"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"owner"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>]</span>\n<span class=p>}</span>\n</pre></div>\n\n<p><strong>HTML body</strong></p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"main"</span> <span class=na>class=</span><span class=s>"Main"</span><span class=nt>&gt;</span>Hello\n <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"nameTag"</span><span class=nt>&gt;&lt;/span&gt;</span>\n <span class=nt>&lt;div&gt;&lt;input</span> <span class=na>type=</span><span class=s>"text"</span> <span class=na>data-montage-id=</span><span class=s>"nameField"</span><span class=nt>&gt;&lt;/div&gt;</span>\n <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"greetButton"</span><span class=nt>&gt;&lt;/button&gt;</span>\n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\nFor the sake of showing off bindings we use one here to bind the label of the <code>greetButton</code> element to the <code>nameTag.name</code> property. The listeners object contains an array (indicated by the square brackets: [ … ]) of listener entries that specify the event type being observed by name and the listener interested in handling the event. Of course, you can register many different listeners here.</li>\n<li>\n<p>Refresh the page. You should see a button whose label matches the current name.</p>\n\n<p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_06.png" alt=GS_Figure6></p>\n\n<p>Behold the joy of code-free declarative binding: change the name in the TextField component and see it reflected in both the <code>nameTag</code> and the <code>greetButton</code> component instances.</p>\n</li>\n<li>\n<p>To make the button do something, add some code to the listener object you specified (here: HelloWorld), inside ui/hello-world.reel/hello-world.js:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>HelloWorld</span> <span class=o>=</span> <span class=nx>Component</span><span class=p>.</span><span class=nx>specialize</span><span class=p>(</span><span class=cm>/** @lends HelloWorld# */</span> <span class=p>{</span>\n\n    <span class=nx>handleGreetButtonAction</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span> <span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>classList</span><span class=p>.</span><span class=nx>toggle</span><span class=p>(</span><span class=s2>"flip"</span><span class=p>);</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n\n<span class=p>});</span>\n</pre></div>\nNote the specifics here: While the standard JavaScript <code>addEventListener</code> either expects a function reference or an eventHandler object that implements a <code>handleEvent</code> method, Montage helps direct an event to a more specific handler method on a listener if implemented.\n\n<p>In this case you\'ve implemented <code>handleGreetButtonAction</code>, which describes that this method will handle action events emitted from a target with an identifier of <code>greetButton</code> during the bubble phase of event distribution. This is the most specific handler possible (less specific alternatives would have been: <code>handleAction</code> and <code>handleEvent</code>). It reduces the need for inspecting each event in a generic <code>handleEvent</code> method to determine what the event was and how it should be handled.</p>\n\n<p>The <code>classList</code> property manipulates the CSS classes applied to the HelloWorld component\'s element.</p>\n</li>\n<li><p>Refresh the browser and click the button. If everything works as expected, you should see the background color of the the Welcome component change color and flip diagonally.</p></li>\n</ol><p><img src="https://raw.github.com/montagejs/montagejs.org/master/source/docs/img/gs_tut_fig_07.png" alt=GS_Figure7></p>\n\n<h2>Take Off the Training Wheels<a class=anchor id=Take-Off-the-Training-Wheels href="#Take-Off-the-Training-Wheels"></a>\n</h2>\n\n<p>Although it has served you well so far, it\'s time to ditch the default Welcome component.</p>\n\n<ol>\n<li>\n<p>Inside index.html remove the explicit loading of the Welcome component from the owner entry and replace it with the Main component (part of the default Montage application installation):</p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"owner"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/loader.reel"</span>\n        <span class=s2>"mainModule"</span><span class=p>:</span> <span class=s2>"ui/main.reel"</span><span class=p>,</span>\n        <span class=nt>"mainName"</span><span class=p>:</span> <span class=s2>"Main"</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li><p>Refresh the browser and note that the Welcome component is no longer present, leaving nothing but a blank page for you to start your own project, with the Main component awaiting your assembly instructions.</p></li>\n</ol><p>You have barely scratched the surface of what Montage can do. What you should take away from this tutorial is how simple things are with a declarative framework that embraces components and bindings.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});
