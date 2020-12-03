<template>
  <div>

    <h1>Progress</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#indeterminate"># Indeterminate</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Progress bars are classless by default.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
        <p>Progress bars have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;progress class=&quot;-success&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-warning&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-danger&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-dark&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-light&quot; value=&quot;50&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
        <p>Progress bars can be sized using the <code>small</code>, <code>normal</code>, <code>medium</code>, and <code>large</code> classes.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;progress class=&quot;-normal&quot; value=&quot;100&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-medium&quot; value=&quot;100&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-large&quot; value=&quot;100&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="indeterminate" class="jump"><a href="#indeterminate"># Indeterminate</a></h2>
        <p>Progress bars can be indeterminate by removing the <code>value</code> and/or <code>max</code> attribute. Indeterminate bars will be animated.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;progress class=&quot;-success&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-warning&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-danger&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-dark&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;progress class=&quot;-light&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
