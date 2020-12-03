<template>
  <div>

    <h1>List</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#inline"># Inline</a></li>
          <li><a href="#ordered"># Ordered</a></li>
          <li><a href="#unordered"># Unordered</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Lists are classless and have no list style by default. Lists are created with <code>ul</code> and <code>ol</code> elements.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-6">
                <h3>Tools</h3>
                <ul>
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div class="column -md-6">
                <h3>Tools</h3>
                <ol>
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul&gt;
  &lt;li&gt;Atom&lt;/li&gt;
  &lt;li&gt;Github&lt;/li&gt;
  &lt;li&gt;Slack&lt;/li&gt;
&lt;/ul&gt;
...
&lt;ol&gt;
  &lt;li&gt;Atom&lt;/li&gt;
  &lt;li&gt;Github&lt;/li&gt;
  &lt;li&gt;Slack&lt;/li&gt;
&lt;/ol&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="inline" class="jump"><a href="#inline"># Inline</a></h2>
        <p>You can make a list inline by using the <code>-inline</code> modifier.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-6">
                <h3>Tools</h3>
                <ul class="-inline">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div class="column -md-6">
                <h3>Tools</h3>
                <ol class="-inline">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul class=&quot;-inline&quot;&gt;
  &lt;li&gt;Atom&lt;/li&gt;
  &lt;li&gt;Github&lt;/li&gt;
  &lt;li&gt;Slack&lt;/li&gt;
&lt;/ul&gt;
...
&lt;ol class=&quot;-inline&quot;&gt;
  &lt;li&gt;Atom&lt;/li&gt;
  &lt;li&gt;Github&lt;/li&gt;
  &lt;li&gt;Slack&lt;/li&gt;
&lt;/ol&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="ordered" class="jump"><a href="#ordered"># Ordered</a></h2>
        <p>Ordered lists have several modifiers available for changing the list style.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <h4><code>-decimal</code></h4>
                <ol class="-decimal">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
              <div class="column -md-4">
                <h4><code>-leading-decimal</code></h4>
                <ol class="-leading-decimal">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
              <div class="column -md-4">
                <h4><code>-lower-alpha</code></h4>
                <ol class="-lower-alpha">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
              <div class="column -md-4">
                <h4><code>-lower-roman</code></h4>
                <ol class="-lower-roman">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
              <div class="column -md-4">
                <h4><code>-upper-alpha</code></h4>
                <ol class="-upper-alpha">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
              <div class="column -md-4">
                <h4><code>-upper-roman</code></h4>
                <ol class="-upper-roman">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ol>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ol class=&quot;-decimal&quot;&gt;
  ...
&lt;/ol&gt;
...
&lt;ol class=&quot;-leading-decimal&quot;&gt;
  ...
&lt;/ol&gt;
...
&lt;ol class=&quot;-lower-alpha&quot;&gt;
  ...
&lt;/ol&gt;
...
&lt;ol class=&quot;-lower-roman&quot;&gt;
  ...
&lt;/ol&gt;
...
&lt;ol class=&quot;-upper-alpha&quot;&gt;
  ...
&lt;/ol&gt;
...
&lt;ol class=&quot;-upper-roman&quot;&gt;
  ...
&lt;/ol&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="unordered" class="jump"><a href="#unordered"># Unordered</a></h2>
        <p>Unordered lists have a few modifiers available for changing the list style.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="row">
              <div class="column -md-4">
                <h4><code>-circle</code></h4>
                <ul class="-circle">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div class="column -md-4">
                <h4><code>-disc</code></h4>
                <ul class="-disc">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div class="column -md-4">
                <h4><code>-square</code></h4>
                <ul class="-square">
                  <li>Atom</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul class=&quot;-circle&quot;&gt;
  ...
&lt;/ul&gt;
...
&lt;ul class=&quot;-disc&quot;&gt;
  ...
&lt;/ul&gt;
...
&lt;ul class=&quot;-square&quot;&gt;
  ...
&lt;/ul&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
