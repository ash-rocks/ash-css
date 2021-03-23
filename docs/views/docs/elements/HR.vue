<template>
  <div>

    <h1>Horizontal Rule</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#sizing"># Sizing</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Horizontal rules are classless by default.</p>

          <figure>
            <header>
              <hr/>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;hr/&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Horizontal rules have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <hr class="-primary"/>
              <hr class="-success"/>
              <hr class="-warning"/>
              <hr class="-danger"/>
              <hr class="-dark"/>
              <hr class="-light"/>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;hr class=&quot;-primary&quot;/&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>Horizontal rules can be sized using the <code>-normal</code>, <code>-medium</code>, and <code>-large</code> classes.</p>

          <figure>
            <header>
              <hr class="-normal"/>
              <hr class="-medium"/>
              <hr class="-large"/>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;hr class=&quot;-normal&quot;/&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
