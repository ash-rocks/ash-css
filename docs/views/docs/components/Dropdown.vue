<template>
  <div>

    <h1>Dropdowns</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#position"># Position</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Dropdowns are toggleable overlays that can display most type of content. Dropdowns should not contain forms or any elements that require multiple interactions since the content container will close as soon as it loses focus</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="dropdown">
              <a class="button dropdown-toggle" tabindex="0">Menu <i class="icon fas fa-chevron-down"></i></a>
              <div class="content">
                <ul class="menu">
                  <li class="item"><a href="https://atom.io" target="_blank">Atom</a></li>
                  <li class="item"><a href="https://github.com" target="_blank">Github</a></li>
                  <li class="item"><a href="https://slack.com" target="_blank">Slack</a></li>
                </ul>
              </div>
            </div>
            <div class="dropdown">
              <a class="button dropdown-toggle" tabindex="0">Card <i class="icon fas fa-chevron-down"></i></a>
              <div class="content">
                <figure>
                  <div class="content">
                    <h3 class="title">Title</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </figure>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;dropdown&quot;&gt;
  &lt;a class=&quot;button dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;Menu &lt;i class=&quot;icon fas fa-chevron-down&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;ul class=&quot;menu&quot;&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;dropdown&quot;&gt;
  &lt;a class=&quot;button dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;Card &lt;i class=&quot;icon fas fa-chevron-down&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      ...
    &lt;/div&gt;
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
        <h2 id="position" class="jump"><a href="#position"># Position</a></h2>
        <p>By default dropdowns open down and to the left but can be changed with the <code>-right</code> and <code>-top</code> modifiers. Positions can also be combined</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="dropdown -top">
              <a class="button dropdown-toggle" tabindex="0">Top <i class="icon fas fa-chevron-up"></i></a>
              <div class="content">
                <ul class="menu">
                  <li class="item"><a href="https://atom.io" target="_blank">Atom</a></li>
                  <li class="item"><a href="https://github.com" target="_blank">Github</a></li>
                  <li class="item"><a href="https://slack.com" target="_blank">Slack</a></li>
                </ul>
              </div>
            </div>
            <div class="dropdown -right">
              <a class="button dropdown-toggle" tabindex="0">Right <i class="icon fas fa-chevron-down"></i></a>
              <div class="content">
                <ul class="menu">
                  <li class="item"><a href="https://atom.io" target="_blank">Atom</a></li>
                  <li class="item"><a href="https://github.com" target="_blank">Github</a></li>
                  <li class="item"><a href="https://slack.com" target="_blank">Slack</a></li>
                </ul>
              </div>
            </div>
            <div class="dropdown -top -right">
              <a class="button dropdown-toggle" tabindex="0">Top Right <i class="icon fas fa-chevron-up"></i></a>
              <div class="content">
                <ul class="menu">
                  <li class="item"><a href="https://atom.io" target="_blank">Atom</a></li>
                  <li class="item"><a href="https://github.com" target="_blank">Github</a></li>
                  <li class="item"><a href="https://slack.com" target="_blank">Slack</a></li>
                </ul>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;dropdown -top&quot;&gt;
  &lt;a class=&quot;button dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;Top &lt;i class=&quot;icon fas fa-chevron-up&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;dropdown -right&quot;&gt;
  &lt;a class=&quot;button dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;Right &lt;i class=&quot;icon fas fa-chevron-down&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;dropdown -top -right&quot;&gt;
  &lt;a class=&quot;button dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;Top Right &lt;i class=&quot;icon fas fa-chevron-up&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
