<template>
  <div>

    <h1>Figures</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#headers"># Headers</a></li>
          <li><a href="#footers"># Footers</a></li>
          <li><a href="#actions"># Actions</a></li>
          <li><a href="#horizontal"># Horizontal</a></li>
          <li><a href="#colors"># Colors</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Figures are a way of diplaying content and media inside a uniform container and are classless by default. Figures take up the full width of the parent and should be paired with the grid system.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <figure>
                  <img src="/images/placeholder.png">
                  <figcaption>Figure Caption</figcaption>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <figcaption>Figure Caption</figcaption>
                  <img src="/images/placeholder.png">
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;column -md-4&quot;&gt;
    &lt;figure&gt;
      &lt;img src=&quot;/images/placeholder.png&quot;&gt;
      &lt;figcaption&gt;Figure Caption&lt;/figcaption&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;h3 class=&quot;title&quot;&gt;Title&lt;/h3&gt;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
      &lt;/div&gt;
    &lt;/figure&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="headers" class="jump"><a href="#headers"># Headers</a></h2>
        <p>Figures can have <code>header</code> elements.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <figure>
                  <header>
                    HEADER
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;figure&gt;
  &lt;header&gt;
    HEADER
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/figure&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="footers" class="jump"><a href="#footers"># Footers</a></h2>
        <p>Figures can have <code>footer</code> elements.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <figure>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <footer>
                    FOOTER
                  </footer>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;figure&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;footer&gt;
    FOOTER
  &lt;/footer&gt;
&lt;/figure&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="actions" class="jump"><a href="#actions"># Actions</a></h2>
        <p>Figures can have an <code>actions</code> classed element added to create flexed and bordered anchors or button groups.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <figure>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="primary">Action</button>
                  </div>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
...
&lt;figure&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;h3 class=&quot;title&quot;&gt;Title&lt;/h3&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
  &lt;/div&gt;
  &lt;div class=&quot;action&quot;&gt;
    &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
    &lt;button class=&quot;primary&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="horizontal" class="jump"><a href="#horizontal"># Horizontal</a></h2>
        <p>Figures with the <code>-horizontal</code> modifier can use the grid system inside to change the layout of the card. Margins for rows and paddings for columns will be removed. Images will use <code>object-fit: cover;</code>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-6">
                <figure class="-horizontal">
                  <div class="row">
                    <div class="column -12 -xl-6">
                      <img src="/images/placeholder.png">
                      <figcaption>Figure Caption</figcaption>
                    </div>
                    <div class="column -12 -xl-6">
                      <div class="content">
                        <h3 class="title">Title</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="column -md-6">
                <figure class="-horizontal">
                  <div class="row">
                    <div class="column -12 -xl-6">
                      <div class="content">
                        <h3 class="title">Title</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                    <div class="column -12 -xl-6">
                      <img src="/images/placeholder.png">
                      <figcaption>Figure Caption</figcaption>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
...
&lt;figure class=&quot;-horizontal&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -12 -xl-6&quot;&gt;
      &lt;img src=&quot;/images/placeholder.png&quot;&gt;
      &lt;figcaption&gt;Figure Caption&lt;/figcaption&gt;
    &lt;/div&gt;
    &lt;div class=&quot;column -12 -xl-6&quot;&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;h3 class=&quot;title&quot;&gt;Title&lt;/h3&gt;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-horizontal&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-6&quot;&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;h3 class=&quot;title&quot;&gt;Title&lt;/h3&gt;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;column -md-6&quot;&gt;
      &lt;img src=&quot;/images/placeholder.png&quot;&gt;
      &lt;figcaption&gt;Figure Caption&lt;/figcaption&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
        <p>Figures have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <figure class="-primary">
                  <header>
                    PRIMARY
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-success">Action</button>
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure class="-success">
                  <header>
                    SUCCESS
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-warning">Action</button>
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure class="-warning">
                  <header>
                    WARNING
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-danger">Action</button>
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure class="-danger">
                  <header>
                    DANGER
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-dark">Action</button>
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure class="-dark">
                  <header>
                    DARK
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-light">Action</button>
                  </div>
                </figure>
              </div>
              <div class="column -md-4">
                <figure class="-light">
                  <header>
                    LIGHT
                  </header>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus massa eu suscipit maximus.
                  </div>
                  <div class="actions">
                    <a href="">Action</a>
                    <a href="">Action</a>
                    <button class="-primary">Action</button>
                  </div>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
                <code class="language-html">
...
&lt;figure class=&quot;-primary&quot;&gt;
  &lt;header&gt;
    PRIMARY
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-success&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-success&quot;&gt;
  &lt;header&gt;
    SUCCESS
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-warning&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-warning&quot;&gt;
  &lt;header&gt;
    WARNING
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-danger&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-danger&quot;&gt;
  &lt;header&gt;
    DANGER
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-dark&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-dark&quot;&gt;
  &lt;header&gt;
    DARK
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-light&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
...
&lt;figure class=&quot;-light&quot;&gt;
  &lt;header&gt;
    DARK
  &lt;/header&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
    ...
    &lt;button class=&quot;-primary&quot;&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/figure&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

</div>
</template>

<script>
  export default {
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>
