<template>
  <div>

    <h1>Introduction</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#get"># Get ASH CSS</a></li>
          <li><a href="#docs"># Running the docs</a></li>
          <li><a href="#build"># Building from source</a></li>
          <li><a href="#using"># Using ASH CSS</a></li>
          <li><a href="#customize"># Customizing</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="get" class="jump"><a href="#get"># Get ASH CSS</a></h2>
        <p>There are a few ways to get ASH CSS. You can download a compiled version, use our CDN, with NPM, or clone and build from the source.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3>Compiled CSS</h3>
        <p>Download compiled CSS to use in your self-hosted project. This includes compiled and minified CSS files.</p>
        <a href="https://github.com/ash-rocks/ash-css/releases" target="_blank" rel="noreferrer" class="button -primary">Download</a>

        <h3>CDN</h3>
        <p>Use the code below to drop-in ASH CSS to your project from our CDN. The CDN will be cached, minified, and gzipped.</p>
        <pre>
          <code class="language-html">
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/ash-rocks/ash-css@master/dist/ash/ash.min.css&quot;&gt;
          </code>
        </pre>

        <h3>NPM</h3>
        <p>ASH can be installed in a NodeJS project using NPM.</p>
        <pre>
          <code class="language-shell">
npm install ash-css --save
          </code>
        </pre>
        <pre>
          <code class="language-js">
import 'ash-css/dist/ash/ash.min.css';
          </code>
        </pre>

        <h3>Source</h3>
        <p>Clone ASH CSS from source for when you want to contribute or customize to fit your needs. The source includes the docs you see here and can be used as a playground for customization.</p>
        <pre class="--rounded">
          <code class="language-shell">
git clone https://github.com/ash-rocks/ash-css.git
cd ash-css
npm install
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="docs" class="jump"><a href="#docs"># Running the docs</a></h2>
        <p>After you clone ASH CSS from source code you can run the docs locally. Local docs are totally offline and will be available at <a href="http://localhost:8080/">http://localhost:8080/</a></p>
        <pre>
          <code class="language-shell">
cd ash-css
npm run docs
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="build" class="jump"><a href="#build"># Building from source</a></h2>
        <p>After you clone ASH CSS from source code you can build your own customized version. All built files will be available in <code>dist/ash</code></p>
        <pre>
          <code class="language-shell">
cd ash-css
npm run build-ash
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="using" class="jump"><a href="#using"># Using ASH CSS</a></h2>
        <p>After building from source, downloading the compiled release, or using the CDN just include the minified version in th head of your HTML. Use the below starting template:</p>
        <pre>
          <code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot;&gt;
    &lt;title&gt;YOUR APP&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;/path/to/ash/css/or/cdn&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    ...
  &lt;/body&gt;
&lt;/html&gt;
          </code>
        </pre>
        <p>You can use the included dark mode my adding the <code>dark</code> class to the <code>body</code> tag. This can be toggled by using JavaScript to add or remove the class from the body or by watching the <code>prefers-color-scheme</code> media query.</p>
        <pre>
          <code class="language-html">
&lt;body class=&quot;dark&quot;&gt;
...
&lt;/body&gt;
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="customize" class="jump"><a href="#customize"># Customizing</a></h2>
        <p>ASH uses LESS makes it easy to change variables and to exclude unneeded elements, components, and utilities. Almost have of the total size of ASH will be from utilities. All files needed for customization will be found in the <code>ash</code> folder. The main LESS file is <code>ash/ash.less</code>. Take a look!</p>
        <ul>
          <li><code>ash/ash.less</code> is the main LESS file and has all the includes used to make up ASH CSS. Just comment out lines if they are not needed!</li>
          <li><code>ash/base</code> includes base classes, resets, the grid system, and the base dark mode</li>
          <li><code>ash/components</code> includes classed components</li>
          <li><code>ash/elements</code> includes classless elements</li>
          <li><code>ash/utilities</code> includes all the extra utilities to extend ASH CSS</li>
          <li><code>ash/variables</code> includes all the variables used to build ASH CSS</li>
        </ul>
      </div>
    </div>

  </div>
</template>
