<template>
  <div>

    <h1>Asides</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#links"># Links</a></li>
          <li><a href="#details"># Details</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Asides are used to display side menus and vertical navigation with an accordion effect using <code>details</code> elements. Asides have no padding by default and should be used with the <code>--padding</code> utility.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <aside class="--padding-4">
              <a class="link">Home</a>
              <details>
                <summary>Development <i class="icon fas fa-chevron-right"></i></summary>
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
&lt;aside class=&quot;_padding-4&quot;&gt;
  &lt;a class=&quot;link&quot;&gt;Home&lt;/a&gt;
  &lt;details&gt;
    &lt;summary&gt;Development &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
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
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="links" class="jump"><a href="#links"># Links</a></h2>
        <p>Ungrouped links can be make by using the <code>link</code> class on anchors.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;div class=&quot;sidebar --padding-4&quot;&gt;
  &lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Atom&lt;/a&gt;
  &lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Github&lt;/a&gt;
  &lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot; class=&quot;link&quot;&gt;Slack&lt;/a&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="details" class="jump"><a href="#details"># Details</a></h2>
        <p>Link are grouped together by <code>details</code> elements that contain <code>link</code> classed anchors. See <router-link :to="{ name: 'elements.detail'}">details</router-link>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <aside class="--padding-4">
              <details>
                <summary>Development <i class="icon fas fa-chevron-right"></i></summary>
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
&lt;aside class=&quot;_padding-4&quot;&gt;
  &lt;details&gt;
    &lt;summary&gt;Development &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
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
      </div>
    </div>

  </div>
</template>
