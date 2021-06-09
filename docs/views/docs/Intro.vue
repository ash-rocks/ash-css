<template>
  <div>

    <h1>Introduction</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#meet"># Meet ASH</a></li>
          <li><a href="#why"># Why ASH?</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="meet" class="jump"><a href="#meet"># Meet ASH</a></h2>
          <p>ASH (<strong>Accessibly Styled HTML</strong>) is an accessible CSS-only semantic framework with a built-in dark mode and a plethora of utilities. No JavaScript required! ASH makes it easy and quick to build elegant front ends.</p>
          <p>ASH will always be modern and will evolve with the web. ASH works in all of the following modern browsers on desktop and mobile: </p>
          <ul class="-circle">
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Microsoft Edge</li>
            <li>Opera</li>
            <li>Safari</li>
            <li>Browsers build on the WebKit, Blink, or Gecko engines</li>
          </ul>
          <p><strong>Internet Explorer does not meet modern standards and will not be supported</strong>. It's 2021, time to switch...</p>
        </section>

        <section>
          <h2 id="why" class="jump"><a href="#why"># Why ASH?</a></h2>
          <p>ASH was created to be a classless, semantic, and accessible framework with built-in dark mode and utilities. Other popular frameworks are not classless or accessible and require you to add classes to a good part of your markup. You needn't worry using classless markup since you shouldn't mix multiple frameworks and since ASH works with any JavaScript library.</p>

          <h3>Features</h3>
          <ul class="-circle">
            <li>Accessible color pallete with 91 colors</li>
            <li>Classless and symantic markup</li>
            <li>Dark mode that's easy on the eyes</li>
            <li>Mix of flat, fluent, and material design</li>
            <li>Mobile-first responsive flexed based layout</li>
            <li>Unique OMU (<strong>Object Modifier Utility</strong>) class naming</li>
            <li>Utilities with many responsive variants</li>
            <li>No JavaScript and only 20-25kB when compressed</li>
          </ul>

          <h3>Object Modifier Utility</h3>
          <p>Other generic frameworks are a great starting point but lack utilities and usually requires creating additional custom styling on top of them. Utility frameworks are also great but are very large with many unnecessary utilities for every single breakpoint and have no built-in default styling. ASH is a blend of these types of frameworks and is easy to customize and optimize.</p>
          <p>ASH uses unique object class naming and overrides with modifiers and utilities. Objects, modifiers, and utilities are easily distinguishable in your markup and are easy to understand what they do. This OMU structure work in the following way:</p>

          <h4 class="--align-center --margin-top-8">Specificity: object <small>-></small> -{modifier} <small>-></small> --{utility}</h4>

          <dl>
            <dt>Object</dt>
            <dd>Either a classless element or classed component. Objects will have default styling and will be symantic where possible.</dd>

            <dt>Modifier</dt>
            <dd>Class that can override the default styling or layout of an object, but is also unique to that object.</dd>

            <dt>Utility</dt>
            <dd>Class that can override any part of your markup, are global, and are not unique to any object.</dd>
          </dl>

          <pre>
            <code class="language-html">
              &lt;button class=&quot;-primary -large --uppercase&quot;&gt;ASH CSS&lt;/button&gt;
              &lt;button class=&quot;btn btn-primary btn-lg text-uppercase&quot;&gt;Bootstrap&lt;/button&gt;
              &lt;button class=&quot;button is-primary is-large is-uppercase&quot;&gt;Bulma&lt;/button&gt;
              &lt;button class=&quot;bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase&quot;&gt;Tailwind&lt;/button&gt;
            </code>
          </pre>

        </section>

      </div>
    </div>

  </div>
</template>
