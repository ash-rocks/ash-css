<template>
  <div>

    <h1>Buttons</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#disabled"># Disabled</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#shape"># Shape</a></li>
          <li><a href="#outline"># Outline</a></li>
          <li><a href="#icons"># Icons</a></li>
          <li><a href="#groups"># Groups</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Buttons are classless by default.</p>

          <figure>
            <header>
              <button>Button</button>
              <input type="button" value="Input">
              <input type="reset">
              <input type="submit">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button&gt;Button&lt;/button&gt;
                  &lt;input type=&quot;button&quot; value=&quot;Input&quot;&gt;
                  &lt;input type=&quot;reset&quot;&gt;
                  &lt;input type=&quot;submit&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>

          <p>The <code>button</code> class can be added to the following elements:</p>
          <ul class="-circle">
            <li><code>&lt;a&gt;</code> anchor links</li>
            <li><code>&lt;button&gt;</code> buttons</li>
            <li><code>&lt;label&gt;</code> labels</li>
            <li><code>&lt;input type=&quot;button&quot;&gt;</code> button inputs</li>
            <li><code>&lt;input type=&quot;reset&quot;&gt;</code> reset inputs</li>
            <li><code>&lt;input type=&quot;submit&quot;&gt;</code> submit inputs</li>
          </ul>

          <figure>
            <header>
              <a class="button">Anchor</a>
              <button class="button">Button</button>
              <label class="button">Label</label>
              <input type="button" class="button" value="Input">
              <input type="reset" class="button">
              <input type="submit" class="button">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;a class=&quot;button&quot;&gt;Anchor&lt;/a&gt;
                  &lt;button class=&quot;button&quot;&gt;Button&lt;/button&gt;
                  &lt;label class=&quot;button&quot;&gt;Label&lt;/label&gt;
                  &lt;input type=&quot;button&quot; class=&quot;button&quot; value=&quot;Input&quot;&gt;
                  &lt;input type=&quot;reset&quot; class=&quot;button&quot;&gt;
                  &lt;input type=&quot;submit&quot; class=&quot;button&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>The <code>button</code> class has color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>

          <figure>
            <header>
              <button class="-primary">Primary</button>
              <button class="-success">Success</button>
              <button class="-warning">Warning</button>
              <button class="-danger">Danger</button>
              <button class="-dark">Dark</button>
              <button class="-light">Light</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;-primary&quot;&gt;Primary&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="disabled" class="jump"><a href="#disabled"># Disabled</a></h2>
          <p>Buttons can be disabled. Just add the <code>disabled</code> attribute.</p>

          <figure>
            <header>
              <button disabled>Button</button>
              <button class="-primary" disabled>Primary</button>
              <button class="-success" disabled>Success</button>
              <button class="-warning" disabled>Warning</button>
              <button class="-danger" disabled>Danger</button>
              <button class="-dark" disabled>Dark</button>
              <button class="-light" disabled>Light</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button disabled&gt;Button&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>Buttons can be sized using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, and <code>-large</code> modifiers.</p>

          <figure>
            <header>
              <button class="-small">Small</button>
              <button class="-normal">Normal</button>
              <button class="-medium">Medium</button>
              <button class="-large">Large</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;-small&quot;&gt;Small&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>

          <p>The <code>-block</code> modifier can be added to create block level buttons that span the full width of the parent.</p>

          <figure>
            <header>
              <button class="-block">Block</button>
              <button class="-primary -block">Block</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;-block&quot;&gt;Block&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="shape" class="jump"><a href="#shape"># Shape</a></h2>
          <p>You can change the shape of buttons by using the <router-link :to="{ name: 'utilities.border', hash: '#radius'}">border radius utility</router-link>.</p>

          <figure>
            <header>
              <button class="--rectangle">Button</button>
              <button class="--rounded-sm">Button</button>
              <button class="--rounded">Button</button>
              <button class="--rounded-lg">Button</button>
              <button class="--rounded-full">Button</button>
              <button class="--circle">Button</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;--rectangle&quot;&gt;Button&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="outline" class="jump"><a href="#outline"># Outline</a></h2>
          <p>Buttons can be outlined using the <code>-outline</code> modifier. Backgrounds will be transparent. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <button class="-outline">Button</button>
              <button class="-primary -outline">Primary</button>
              <button class="-success -outline">Success</button>
              <button class="-warning -outline">Warning</button>
              <button class="-danger -outline">Danger</button>
              <button class="-dark -outline">Dark</button>
              <button class="-light -outline">Light</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button class=&quot;-outline&quot;&gt;Button&lt;/button&gt;
                  &lt;button class=&quot;-primary -outline&quot;&gt;Primary&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="icons" class="jump"><a href="#icons"># Icons</a></h2>
          <p>Buttons are icon agnostic and will work with any icon fonts or SVGs. Icons are not included, but featured below are buttons with Line Icons.</p>

          <figure>
            <header>
              <button><i class="lni lni-heart"></i> Button</button>
              <button class="-primary"><i class="lni lni-heart"></i> Primary</button>
              <button class="-success"><i class="lni lni-heart"></i> Success</button>
              <button class="-warning"><i class="lni lni-heart"></i> Warning</button>
              <button class="-danger"><i class="lni lni-heart"></i> Danger</button>
              <button class="-dark"><i class="lni lni-heart"></i> Dark</button>
              <button class="-light"><i class="lni lni-heart"></i> Light</button>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;button&gt;&lt;i class=&quot;lni lni-heart&quot;&gt;&lt;/i&gt; Button&lt;/button&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="groups" class="jump"><a href="#groups"># Groups</a></h2>
          <p>You can group together buttons by wrapping them in a <code>buttons</code> container. Buttons in groups will have their left and right margins removed.</p>

          <figure>
            <header>
              <div class="buttons">
                <button class="button">Button</button>
                <button class="button">Button</button>
              </div>
              <div class="buttons">
                <button class="button -primary --rounded-left-full">Button</button>
                <button class="button -primary --rounded-right-full">Button</button>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;buttons&quot;&gt;
                    &lt;button class=&quot;button&quot;&gt;Button&lt;/button&gt;
                    &lt;button class=&quot;button&quot;&gt;Button&lt;/button&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;buttons&quot;&gt;
                    &lt;button class=&quot;button -primary --rounded-left-full&quot;&gt;Button&lt;/button&gt;
                    &lt;button class=&quot;button -primary --rounded-right-full&quot;&gt;Button&lt;/button&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
