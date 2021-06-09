<template>
  <div>

    <h1>Asides</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#links"># Links</a></li>
          <li><a href="#details"># Details</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Asides are used to display side menus and vertical navigation with an accordion effect using <code>details</code> elements. Asides have no padding by default and should be used with the <code>--padding</code> utility.</p>

          <figure>
            <header>
              <aside class="--padding-4">
                <a href="" class="link">Home</a>
                <details>
                  <summary>Development <i class="icon lni lni-chevron-right"></i></summary>
                  <div class="content">
                    <a href="https://atom.io" target="_blank" class="link">Atom</a>
                    <a href="https://github.com" target="_blank" class="link">Github</a>
                    <a href="https://slack.com" target="_blank" class="link">Slack</a>
                  </div>
                </details>
              </aside>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;aside class=&quot;--padding-4&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;link&quot;&gt;Home&lt;/a&gt;
                    &lt;details&gt;
                      &lt;summary&gt;Development &lt;i class=&quot;icon lni lni-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
                      &lt;div class=&quot;content&quot;&gt;
                        &lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Atom&lt;/a&gt;
                        &lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Github&lt;/a&gt;
                        &lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Slack&lt;/a&gt;
                      &lt;/div&gt;
                    &lt;/details&gt;
                  &lt;/aside&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="links" class="jump"><a href="#links"># Links</a></h2>
          <p>Ungrouped links can be make by using the <code>link</code> class on anchors.</p>

          <figure>
            <header>
              <aside class="--padding-4">
                <a href="https://atom.io" target="_blank" class="link">Atom</a>
                <a href="https://github.com" target="_blank" class="link">Github</a>
                <a href="https://slack.com" target="_blank" class="link">Slack</a>
              </aside>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;aside class=&quot;--padding-4&quot;&gt;
                    &lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Atom&lt;/a&gt;
                    &lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Github&lt;/a&gt;
                    &lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Slack&lt;/a&gt;
                  &lt;/aside&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="details" class="jump"><a href="#details"># Details</a></h2>
          <p>Link are grouped together by <code>details</code> elements that contain <code>link</code> classed anchors. See <router-link :to="{ name: 'elements.detail'}">details</router-link>.</p>

          <figure>
            <header>
              <aside class="--padding-4">
                <details>
                  <summary>Development <i class="icon lni lni-chevron-right"></i></summary>
                  <div class="content">
                    <a href="https://atom.io" target="_blank" class="link">Atom</a>
                    <a href="https://github.com" target="_blank" class="link">Github</a>
                    <a href="https://slack.com" target="_blank" class="link">Slack</a>
                  </div>
                </details>
              </aside>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;aside class=&quot;--padding-4&quot;&gt;
                    &lt;details&gt;
                      &lt;summary&gt;Development &lt;i class=&quot;icon lni lni-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
                      &lt;div class=&quot;content&quot;&gt;
                        &lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Atom&lt;/a&gt;
                        &lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Github&lt;/a&gt;
                        &lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Slack&lt;/a&gt;
                      &lt;/div&gt;
                    &lt;/details&gt;
                  &lt;/aside&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
