<template>
  <div>

    <h1>Chips</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#rounded"># Rounded</a></li>
          <li><a href="#outline"># Outline</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Chips can be created by using the <code>chip</code> class.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
        <p>The <code>chip</code> class has color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;span class=&quot;chip -success&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;chip -warning&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;chip -danger&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;chip -dark&quot;&gt;Dark&lt;/span&gt;
&lt;span class=&quot;chip -light&quot;&gt;Light&lt;/span&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="shape" class="jump"><a href="#shape"># Shape</a></h2>
        <p>You can change the shape of chips by using the <router-link :to="{ name: 'utilities.border', hash: '#radius'}">border radius utility</router-link>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;span class=&quot;chip --rounded-sm&quot;&gt;Small&lt;/span&gt;
&lt;span class=&quot;chip --rounded&quot;&gt;Normal&lt;/span&gt;
&lt;span class=&quot;chip --rounded-lg&quot;&gt;Large&lt;/span&gt;
&lt;span class=&quot;chip --rounded-full&quot;&gt;Full&lt;/span&gt;
&lt;span class=&quot;chip --circle&quot;&gt;Circle&lt;/span&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="outline" class="jump"><a href="#outline"># Outline</a></h2>
        <p>Chips can be outlined using the <code>-outline</code> modifier. Backgrounds will be transparent.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
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
&lt;span class=&quot;chip -success -outline&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;chip -warning -outline&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;chip -danger -outline&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;chip -dark -outline&quot;&gt;Dark&lt;/span&gt;
&lt;span class=&quot;chip -light -outline&quot;&gt;Light&lt;/span&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
