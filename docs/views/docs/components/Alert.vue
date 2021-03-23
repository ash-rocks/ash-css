<template>
  <div>

    <h1>Alerts</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#shape"># Shape</a></li>
          <li><a href="#outline"># Outline</a></li>
          <li><a href="#dismissible"># Dismissible</a></li>
          <li><a href="#fixed"># Fixed</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Alerts are displayed inside of the page content to notify the user of a status or action.</p>

          <figure>
            <header>
              <div class="alert --margin-0" role="alert">
                <div class="content">
                  This is the default alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert&quot; role=&quot;alert&quot;&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is the default alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>The <code>alert</code> class has color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <div class="alert -primary" role="alert">
                <div class="content">
                  This is a primary alert
                </div>
              </div>
              <div class="alert -success" role="alert">
                <div class="content">
                  This is a success alert
                </div>
              </div>
              <div class="alert -warning" role="alert">
                <div class="content">
                  This is a warning alert
                </div>
              </div>
              <div class="alert -danger" role="alert">
                <div class="content">
                  This is a danger alert
                </div>
              </div>
              <div class="alert -dark" role="alert">
                <div class="content">
                  This is a dark alert
                </div>
              </div>
              <div class="alert -light --margin-0" role="alert">
                <div class="content">
                  This is a light alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert -primary&quot; role=&quot;alert&quot;&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is a primary alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="shape" class="jump"><a href="#shape"># Shape</a></h2>
          <p>You can change the shape of alerts by using the <router-link :to="{ name: 'utilities.border', hash: '#radius'}">border radius utility</router-link> on the <code>content</code> element.</p>

          <figure>
            <header>
              <div class="alert" role="alert">
                <div class="content --rectangle">
                  This is a rectangle alert
                </div>
              </div>
              <div class="alert" role="alert">
                <div class="content --rounded-sm">
                  This is a rounded small alert
                </div>
              </div>
              <div class="alert" role="alert">
                <div class="content --rounded">
                  This is a rounded alert
                </div>
              </div>
              <div class="alert" role="alert">
                <div class="content --rounded-lg">
                  This is a rounded large alert
                </div>
              </div>
              <div class="alert" role="alert">
                <div class="content --rounded-full">
                  This is a rounded full alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert&quot; role=&quot;alert&quot;&gt;
                    &lt;div class=&quot;content --rectangle&quot;&gt;
                      This is a rectangle alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="outline" class="jump"><a href="#outline"># Outline</a></h2>
          <p>Alerts can be outlined using the <code>-outline</code> modifier. Backgrounds will be transparent.</p>

          <figure>
            <header>
              <div class="alert -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -primary -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -success -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -warning -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -danger -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -dark -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
              <div class="alert -light -outline" role="alert">
                <div class="content">
                  This is an outlined alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert -outline&quot; role=&quot;alert&quot;&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is an outlined alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;alert -primary -outline&quot; role=&quot;alert&quot;&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is an outlined alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="dismissible" class="jump"><a href="#dismissible"># Dismissible</a></h2>
          <p>Alerts can be dismissible by adding the <code>-dismissible</code> modifier to the alert and both a <code>checkbox</code> and <code>label</code> above the content container. Dismissible alerts do not use any JavaScript.</p>

          <figure>
            <header>
              <div class="alert -primary -dismissible" role="alert">
                <input type="checkbox" id="dismissible1"/>
                <label for="dismissible1" title="close"><i class="icon lni lni-close"></i></label>
                <div class="content">
                  This is a dismissible alert
                </div>
              </div>
              <div class="alert -primary -outline -dismissible" role="alert">
                <input type="checkbox" id="dismissible2"/>
                <label for="dismissible2" title="close"><i class="icon lni lni-close"></i></label>
                <div class="content">
                  This is a dismissible alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert -primary -dismissible&quot; role=&quot;alert&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;dismissible1&quot;/&gt;
                    &lt;label for=&quot;dismissible1&quot; title=&quot;close&quot;&gt;&lt;i class=&quot;icon lni lni-close&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is a dismissible alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;alert -primary -outline -dismissible&quot; role=&quot;alert&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;dismissible2&quot;/&gt;
                    &lt;label for=&quot;dismissible2&quot; title=&quot;close&quot;&gt;&lt;i class=&quot;icon lni lni-close&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is a dismissible alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="fixed" class="jump"><a href="#fixed"># Fixed</a></h2>
          <p>Alerts can be fixed buy using the <code>-fixed</code> modifier along with <code>-top</code> or <code>-bottom</code> to affix an alert to the top or bottom of the page.</p>

          <figure>
            <header>
              <label for="fixed1" class="button">Toggle Top</label>
              <div class="alert -primary -dismissible -fixed -top" role="alert">
                <input type="checkbox" id="fixed1" checked/>
                <label for="fixed1" title="close"><i class="icon lni lni-close"></i></label>
                <div class="content">
                  This is a fixed top alert
                </div>
              </div>
              <label for="fixed2" class="button">Toggle Bottom</label>
              <div class="alert -primary -dismissible -fixed -bottom" role="alert">
                <input type="checkbox" id="fixed2" checked/>
                <label for="fixed2" title="close"><i class="icon lni lni-close"></i></label>
                <div class="content">
                  This is a fixed bottom alert
                </div>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;alert -primary -dismissible -fixed -top&quot; role=&quot;alert&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;fixed1&quot; checked/&gt;
                    &lt;label for=&quot;fixed1&quot; title=&quot;close&quot;&gt;&lt;i class=&quot;icon lni lni-close&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is a fixed top alert
                    &lt;/div&gt;
                  &lt;/div&gt;
                  ...
                  &lt;div class=&quot;alert -primary -dismissible -fixed -bottom&quot; role=&quot;alert&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; id=&quot;fixed2&quot; checked/&gt;
                    &lt;label for=&quot;fixed2&quot; title=&quot;close&quot;&gt;&lt;i class=&quot;icon lni lni-close&quot;&gt;&lt;/i&gt;&lt;/label&gt;
                    &lt;div class=&quot;content&quot;&gt;
                      This is a fixed bottom alert
                    &lt;/div&gt;
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
