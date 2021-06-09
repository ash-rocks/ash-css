<template>
  <div>

    <h1>Progress</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#indeterminate"># Indeterminate</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Progress bars are classless by default.</p>

          <figure>
            <header>
              <progress value="50" max="100"></progress>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;progress value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Progress bars have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>

          <figure>
            <header>
              <progress class="-primary" value="50" max="100"></progress>
              <progress class="-success" value="50" max="100"></progress>
              <progress class="-warning" value="50" max="100"></progress>
              <progress class="-danger" value="50" max="100"></progress>
              <progress class="-dark" value="50" max="100"></progress>
              <progress class="-light" value="50" max="100"></progress>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;progress class=&quot;-primary&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>Progress bars can be sized using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, and <code>-large</code> classes.</p>

          <figure>
            <header>
              <progress class="-small" value="100" max="100"></progress>
              <progress class="-normal" value="100" max="100"></progress>
              <progress class="-medium" value="100" max="100"></progress>
              <progress class="-large" value="100" max="100"></progress>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;progress class=&quot;-small&quot; value=&quot;100&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="indeterminate" class="jump"><a href="#indeterminate"># Indeterminate</a></h2>
          <p>Progress bars can be indeterminate by removing the <code>value</code> and/or <code>max</code> attribute. Indeterminate bars will be animated if <code>prefers-reduced-motion</code> is not set, otherwise they will be striped without animation.</p>

          <figure>
            <header>
              <progress></progress>
              <progress class="-primary" max="100"></progress>
              <progress class="-success" max="100"></progress>
              <progress class="-warning" max="100"></progress>
              <progress class="-danger" max="100"></progress>
              <progress class="-dark" max="100"></progress>
              <progress class="-light" max="100"></progress>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;progress&gt;&lt;/progress&gt;
                  &lt;progress class=&quot;-primary&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
