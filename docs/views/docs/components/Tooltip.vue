<template>
  <div>

    <h1>Tooltips</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#elements"># Elements</a></li>
          <li><a href="#position"># Position</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Tooltips can be created by using the <code>tooltip</code> class along with a <code>data-tooltip</code> attribute</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <button class="button tooltip" data-tooltip="this is a tooltip">Tooltip</button>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;button class=&quot;button tooltip&quot; data-tooltip=&quot;this is a tooltip&quot;&gt;Tooltip&lt;/button&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="elements" class="jump"><a href="#elements"># Elements</a></h2>
        <p>Tooltips can be added to any inline element</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <a class="tooltip -top --margin-right-1" data-tooltip="this is an anchor tooltip">Anchor</a>
            <button class="button tooltip -top" data-tooltip="this is a button tooltip">Button</button>
            <label class="tooltip -top --margin-left-1" data-tooltip="this is a label tooltip">Label</label>
            <p>This is a <u><span class="tooltip -bottom" data-tooltip="this is a span tooltip">tooltip</span></u> inside a paragraph</p>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;a class=&quot;tooltip -top&quot; data-tooltip=&quot;this is an anchor tooltip&quot;&gt;Anchor&lt;/a&gt;
&lt;button class=&quot;button tooltip -top&quot; data-tooltip=&quot;this is a button tooltip&quot;&gt;Button&lt;/button&gt;
&lt;label class=&quot;tooltip -top&quot; data-tooltip=&quot;this is a label tooltip&quot;&gt;Label&lt;/label&gt;
&lt;p&gt;This is a &lt;u&gt;&lt;span class=&quot;tooltip -bottom&quot; data-tooltip=&quot;this is a span tooltip&quot;&gt;tooltip&lt;/span&gt;&lt;/u&gt; inside a paragraph&lt;/p&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="position" class="jump"><a href="#position"># Position</a></h2>
        <p>By default tooltips open to the top of the element but can be changed with the <code>left</code>, <code>right</code>, or <code>bottom</code> modifiers</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <button class="button tooltip -left" data-tooltip="this is a left tooltip">Left</button>
            <button class="button tooltip" data-tooltip="this is a top tooltip">Top</button>
            <button class="button tooltip -right" data-tooltip="this is a right tooltip">Right</button>
            <button class="button tooltip -bottom" data-tooltip="this is a bottom tooltip">Bottom</button>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;button class=&quot;button tooltip -left&quot; data-tooltip=&quot;this is a left tooltip&quot;&gt;Left&lt;/button&gt;
&lt;button class=&quot;button tooltip&quot; data-tooltip=&quot;this is a top tooltip&quot;&gt;Top&lt;/button&gt;
&lt;button class=&quot;button tooltip -right&quot; data-tooltip=&quot;this is a right tooltip&quot;&gt;Right&lt;/button&gt;
&lt;button class=&quot;button tooltip -bottom&quot; data-tooltip=&quot;this is a bottom tooltip&quot;&gt;Bottom&lt;/button&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
