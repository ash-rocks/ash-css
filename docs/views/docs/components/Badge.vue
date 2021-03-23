<template>
  <div>

    <h1>Badges</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#buttons"># Buttons</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Badges can be created by using the <code>badge</code> class along with a <code>data-badge</code> attribute.</p>

          <figure>
            <header>
              <span class="badge --padding-4">Badge</span>
              <span class="badge --padding-4" data-badge="99">Badge</span>
              <span class="badge --padding-4" data-badge="NEW">Badge</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;badge&quot;&gt;Badge&lt;/span&gt;
                  &lt;span class=&quot;badge&quot; data-badge=&quot;99&quot;&gt;Badge&lt;/span&gt;
                  &lt;span class=&quot;badge&quot; data-badge=&quot;NEW&quot;&gt;Badge&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>The <code>badge</code> class has color modifiers available with <code>-badge-primary</code>, <code>-badge-success</code>, <code>-badge-warning</code>, <code>-badge-danger</code>, <code>-badge-dark</code>, and <code>-badge-light</code>. The color modifiers are named differently since they can collide with other color modifiers.</p>

          <figure>
            <header>
              <span class="badge -badge-primary --padding-4 " data-badge="99">Primary</span>
              <span class="badge -badge-success --padding-4 " data-badge="99">Success</span>
              <span class="badge -badge-warning --padding-4 " data-badge="99">Warning</span>
              <span class="badge -badge-danger --padding-4 " data-badge="99">Danger</span>
              <span class="badge -badge-dark --padding-4 " data-badge="99">Dark</span>
              <span class="badge -badge-light --padding-4 " data-badge="99">Light</span>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;span class=&quot;badge -badge-primary&quot; data-badge=&quot;99&quot;&gt;Primary&lt;/span&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="buttons" class="jump"><a href="#buttons"># Buttons</a></h2>
          <p>Badges work with buttons and will not collide with other color modifiers.</p>

          <figure>
            <header>
              <button class="-primary -outline badge -badge-danger" data-badge="5">Primary Button</button>
              <button class="-primary badge -badge-danger" data-badge="5">Primary Button</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;-primary -outline badge -badge-danger&quot; data-badge=&quot;5&quot;&gt;Primary Button&lt;/button&gt;
                  &lt;button class=&quot;-primary badge -badge-danger&quot; data-badge=&quot;5&quot;&gt;Primary Button&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
