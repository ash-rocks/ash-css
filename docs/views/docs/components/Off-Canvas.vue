<template>
  <div>

    <h1>Off-Canvas</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#aside"># Aside</a></li>
          <li><a href="#content"># Content</a></li>
          <li><a href="#overlay"># Overlay</a></li>
          <li><a href="#caveats"># Caveats</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>To create an off-canvas container you will need an <code>off-canvas</code> element that contains a checkbox with the class <code>canvas-toggle</code> along with a matching label, <code>aside</code>, <code>content</code>, and <code>overlay</code> classed elements. The <code>show</code> modifier can be added to show the sidebar on large (>=1140px) screens. Ash's documentation is made with an off-canvas.</p>
          <div class="alert -primary" role="alert">
            <div class="content">
              Since this documentation in made using an off-canvas, it cannot be displayed below. An off-canvas must be the root container.
            </div>
          </div>

          <figure>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;off-canvas show&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;canvas-toggle&quot; class=&quot;canvas-toggle&quot; /&gt;
                    &lt;label for=&quot;canvas-toggle&quot;&gt;&lt;i class=&quot;icon lni lni-menu&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;nav&gt;
                      ...
                    &lt;/nav&gt;
                    &lt;aside class=&quot;--padding-4&quot;&gt;
                      ...
                    &lt;/aside&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      &lt;div class=&quot;container&quot;&gt;
                        ...
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;label class=&quot;overlay&quot; for=&quot;canvas-toggle&quot;&gt;&lt;/label&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="aside" class="jump"><a href="#aside"># Aside</a></h2>
          <p>An aside is required and is what shows content on or off screen. Content inside off-canvas asides will overflow and scroll if too large. See <router-link :to="{ name: 'elements.aside'}">aside</router-link> documentation for more information.</p>

          <figure>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  ...
                  &lt;aside class=&quot;--padding-4&quot;&gt;
                    &lt;a class=&quot;link&quot;&gt;Home&lt;/a&gt;
                    &lt;div class=&quot;links&quot;&gt;
                      &lt;input type=&quot;checkbox&quot; id=&quot;development&quot; name=&quot;development&quot; hidden&gt;
                      &lt;label class=&quot;tab-label&quot; for=&quot;development&quot;&gt;Development &lt;i class=&quot;icon lni lni-chevron-right&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                      &lt;ul&gt;
                        &lt;li&gt;&lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot;&gt;Atom&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot;&gt;Github&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot;&gt;Slack&lt;/a&gt;&lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                  &lt;/aside&gt;
                  ...
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="content" class="jump"><a href="#content"># Content</a></h2>
          <p>A <code>content</code> classed element is required and is always displayed on screen. You can place a navbar or any other content inside. A direct child navbar will be fixed to the top. You should use the grid system inside the content.</p>

          <figure>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  ...
                  &lt;nav&gt;
                    ...
                  &lt;/nav&gt;
                  &lt;div class=&quot;content&quot;&gt;
                    &lt;div class=&quot;container&quot;&gt;
                      ...
                    &lt;/div&gt;
                  &lt;/div&gt;
                  ...
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="overlay" class="jump"><a href="#overlay"># Overlay</a></h2>
          <p>An <code>overlay</code> classed label that matches the off-canvas checkbox is required to display an overlay when the sidebar is opened. Clicking on an overlay will toggle the checkbox and thus the sidebar.</p>

          <figure>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  ...
                  &lt;label class=&quot;overlay&quot; for=&quot;canvas-toggle&quot;&gt;&lt;/label&gt;
                  ...
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="caveats" class="jump"><a href="#caveats"># Caveats</a></h2>
          <p>While no JavaScript is required to make an off-canvas layout, there are a few things to consider:</p>
          <ul class="-disc">
            <li>Page jumps using IDs in an anchor will not scroll correctly if there is a fixed navbar. Use the <code>jump</code> class on the ID of the element you wish to jump to or use JavaScript to correct the paddings/margins</li>
            <li>Clicking on a sidebar link on a SPA will not close the sidebar. Below is an example of some JavaScript that will close the sidebar and can be used as a function that is called using the onclick event:</li>
          </ul>

          <figure>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-js">
                  var canvas = document.getElementById('canvas-toggle')

                  if (canvas.checked) {
                    canvas.checked = false
                  }
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
