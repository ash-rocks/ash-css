<template>
  <div>

    <h1>Chips</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#shape"># Shape</a></li>
          <li><a href="#outline"># Outline</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Chips can be created by using the <code>chip</code> class.</p>

          <figure>
            <header>
              <span class="chip">Chip</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;chip&quot;&gt;Chip&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>The <code>chip</code> class has color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <span class="chip -primary">Primary</span>
              <span class="chip -success">Success</span>
              <span class="chip -warning">Warning</span>
              <span class="chip -danger">Danger</span>
              <span class="chip -dark">Dark</span>
              <span class="chip -light">Light</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;chip -primary&quot;&gt;Primary&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="shape" class="jump"><a href="#shape"># Shape</a></h2>
          <p>You can change the shape of chips by using the <router-link :to="{ name: 'utilities.border', hash: '#radius'}">border radius utility</router-link>.</p>

          <figure>
            <header>
              <span class="chip --rectangle">Rectangle</span>
              <span class="chip --rounded-sm">Small</span>
              <span class="chip --rounded">Normal</span>
              <span class="chip --rounded-lg">Large</span>
              <span class="chip --rounded-full">Full</span>
              <span class="chip --circle">Circle</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;chip --rectangle&quot;&gt;Rectangle&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="outline" class="jump"><a href="#outline"># Outline</a></h2>
          <p>Chips can be outlined using the <code>-outline</code> modifier. Backgrounds will be transparent.</p>

          <figure>
            <header>
              <span class="chip -outline">Default</span>
              <span class="chip -primary -outline">Primary</span>
              <span class="chip -success -outline">Success</span>
              <span class="chip -warning -outline">Warning</span>
              <span class="chip -danger -outline">Danger</span>
              <span class="chip -dark -outline">Dark</span>
              <span class="chip -light -outline">Light</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;chip -outline&quot;&gt;Default&lt;/span&gt;
                  &lt;span class=&quot;chip -primary -outline&quot;&gt;Primary&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
