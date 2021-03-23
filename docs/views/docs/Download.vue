<template>
  <div>

    <h1>Download</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#compiled"># Compiled CSS</a></li>
          <li><a href="#cdn"># CDN via jsDelivr</a></li>
          <li><a href="#node"># NPM/Yarn</a></li>
          <li>
            <a href="#source"># Source</a>
            <ul>
              <li><a href="#docs"># Docs</a></li>
              <li><a href="#build"># Building</a></li>
            </ul>
          </li>
          <li><a href="#using"># Using ASH CSS</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="compiled" class="jump"><a href="#compiled"># Compiled CSS</a></h2>
          <p>Download compiled CSS to use in your self-hosted project. This includes the following files:</p>
          <ul class="-circle">
            <li><code>ash.css</code> -> compiled and unminified</li>
            <li><code>ash.css.map</code> -> compiled CSS map</li>
            <li><code>ash.min.css</code> -> compiled and minified</li>
          </ul>
          <p>These files do not include documentation or source files.</p>
          <a href="https://github.com/ash-rocks/ash-css/releases" target="_blank" rel="noreferrer" class="button -primary">Download</a>
        </section>

        <section>
          <h2 id="cdn" class="jump"><a href="#cdn"># CDN via jsDelivr</a></h2>
          <p>Use the code below to drop-in ASH CSS to your project from our CDN. The CDN will be cached, minified, and gzipped.</p>
          <pre>
            <code class="language-html">
              &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/ash-rocks/ash-css@0.2.1/dist/ash/ash.min.css&quot;&gt;
            </code>
          </pre>
        </section>

        <section>
          <h2 id="node" class="jump"><a href="#node"># NPM/Yarn</a></h2>
          <p>ASH can be installed in a NodeJS project using NPM or Yarn.</p>
          <pre>
            <code class="language-shell">
              npm install ash-css --save
            </code>
          </pre>
          <pre>
            <code class="language-shell">
              yarn add ash-css
            </code>
          </pre>
          <pre>
            <code class="language-js">
              import 'ash-css/dist/ash/ash.min.css';
            </code>
          </pre>
        </section>

        <section>
          <h2 id="source" class="jump"><a href="#source"># Source</a></h2>
          <p>Clone ASH CSS from source for when you want to contribute or customize to fit your needs. The source includes the docs you see here and can be used as a playground for customization.</p>
          <pre class="--rounded">
            <code class="language-shell">
              git clone https://github.com/ash-rocks/ash-css.git
              cd ash-css
              npm install
            </code>
          </pre>
        </section>

        <section>
          <h3 id="docs" class="jump"><a href="#docs"># Docs</a></h3>
          <p>After you clone ASH CSS from source code you can run the docs locally. Local docs are totally offline and will be available at <a href="http://localhost:8080/">http://localhost:8080/</a></p>
          <pre>
            <code class="language-shell">
              npm run docs
            </code>
          </pre>
        </section>

        <section>
          <h3 id="build" class="jump"><a href="#build"># Building</a></h3>
          <p>After you clone ASH CSS from source code you can build your own customized version. All built files will be available in <code>dist/ash</code></p>
          <pre>
            <code class="language-shell">
              npm run build-ash
            </code>
          </pre>
        </section>

        <section>
          <h2 id="using" class="jump"><a href="#using"># Using ASH CSS</a></h2>
          <p>After downloading a compiled release, using the CDN, or building from source just include the minified version in the head of your HTML. Use the below starting template:</p>
          <pre>
            <code class="language-html">
              &lt;!DOCTYPE html&gt;
              &lt;html lang=&quot;en&quot;&gt;
                &lt;head&gt;
                  &lt;meta charset=&quot;utf-8&quot;&gt;
                  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;
                  &lt;title&gt;YOUR APP&lt;/title&gt;
                  &lt;link rel=&quot;stylesheet&quot; href=&quot;/path/to/ash/css/or/cdn&quot;&gt;
                &lt;/head&gt;
                &lt;body&gt;
                  ...
                &lt;/body&gt;
              &lt;/html&gt;
            </code>
          </pre>
          <p>You can use the included dark mode my adding the <code>dark</code> class to the <code>html</code> tag. This can be toggled by using JavaScript to add or remove the class from the html tag or by watching the <code>prefers-color-scheme</code> media query.</p>
          <pre>
            <code class="language-html">
              &lt;html class=&quot;dark&quot;&gt;
              ...
              &lt;/html&gt;
            </code>
          </pre>
        </section>

      </div>
    </div>

  </div>
</template>
