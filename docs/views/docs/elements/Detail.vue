<template>
  <div>

    <h1>Details</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#groups"># Groups</a></li>
          <li><a href="#state"># State</a></li>
          <li><a href="#nested"># Nested</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Details are used to create collapsible content. The <code>summary</code> element is required to change the default label and is styled with uppercase text. Use a <code>content</code> classed container inside the detail for proper padding.</p>
        <div class="alert -primary">
          <div class="content">
            Icons should be used to convey to the user that the detail is interactive. This can be done by using a <code class="--background-black-lighten --padding-x-1">icon</code> classed element inside of the <code class="--background-black-lighten --padding-x-1">summary</code>.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <details class="--margin-bottom-0">
              <summary>Detail <i class="icon fas fa-chevron-right"></i></summary>
              <div class="content">
                This is the content of a detail
              </div>
            </details>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;details&gt;
  &lt;summary&gt;Detail &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
  &lt;div class=&quot;content&quot;&gt;
    This is the content of a detail
  &lt;/div&gt;
&lt;/details&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="groups" class="jump"><a href="#groups"># Groups</a></h2>
        <p>You can group together details by wrapping them in a <code>details</code> classed container.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="details --margin-bottom-0">
              <details>
                <summary>Detail <i class="icon fas fa-chevron-right"></i></summary>
                <div class="content">
                  This is the content of a detail
                </div>
              </details>
              <details>
                <summary>Detail <i class="icon fas fa-chevron-right"></i></summary>
                <div class="content">
                  This is the content of a detail
                </div>
              </details>
              <details>
                <summary>Detail <i class="icon fas fa-chevron-right"></i></summary>
                <div class="content">
                  This is the content of a detail
                </div>
              </details>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;details&quot;&gt;
  &lt;details&gt;
    &lt;summary&gt;Detail &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
    &lt;div class=&quot;content&quot;&gt;
      This is the content of a detail
    &lt;/div&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Detail &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
    &lt;div class=&quot;content&quot;&gt;
      This is the content of a detail
    &lt;/div&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Detail &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
    &lt;div class=&quot;content&quot;&gt;
      This is the content of a detail
    &lt;/div&gt;
  &lt;/details&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="state" class="jump"><a href="#state"># State</a></h2>
        <p>You can change the state of a detail by using the <code>open</code> attribute. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#Attributes" target="_blank">MDN</a> for more details.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <details>
              <summary>Closed <i class="icon fas fa-chevron-right"></i></summary>
              <div class="content">
                This is the content of a detail
              </div>
            </details>
            <details class="--margin-bottom-0" open>
              <summary>Opened <i class="icon fas fa-chevron-right"></i></summary>
              <div class="content">
                This is the content of a detail
              </div>
            </details>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;details&gt;
  &lt;summary&gt;Closed &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
  &lt;div class=&quot;content&quot;&gt;
    This is the content of a detail
  &lt;/div&gt;
&lt;/details&gt;
&lt;details open&gt;
  &lt;summary&gt;Opened &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
  &lt;div class=&quot;content&quot;&gt;
    This is the content of a detail
  &lt;/div&gt;
&lt;/details&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="nested" class="jump"><a href="#nested"># Nested</a></h2>
        <p>Details can be nested inside another detail.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <details class="--margin-bottom-0" open>
              <summary>Parent <i class="icon fas fa-chevron-right"></i></summary>
              <div class="content">
                <details class="--margin-bottom-0">
                  <summary>Child <i class="icon fas fa-chevron-right"></i></summary>
                  <div class="content">
                    This is the content of a detail
                  </div>
                </details>
              </div>
            </details>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;details open&gt;
  &lt;summary&gt;Parent &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;details class=&quot;_margin-bottom-0&quot;&gt;
      &lt;summary&gt;Child &lt;i class=&quot;icon fas fa-chevron-right&quot;&gt;&lt;/i&gt;&lt;/summary&gt;
      &lt;div class=&quot;content&quot;&gt;
        This is the content of a detail
      &lt;/div&gt;
    &lt;/details&gt;
  &lt;/div&gt;
&lt;/details&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
