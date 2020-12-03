<template>
  <div>

    <h1>Pagination</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#block"># Block</a></li>
          <li><a href="#simple"># Simple</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Paginations can be created by using the <code>pagination</code> class on a <code>ul</code></p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <ul class="pagination">
              <li class="-disabled">
                <a href="#" tabindex="-1">Prev</a>
              </li>
              <li class="-active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
            <ul class="pagination">
              <li>
                <a href="#" tabindex="-1">Prev</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li class="-active">
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul class=&quot;pagination&quot;&gt;
  &lt;li class=&quot;-disabled&quot;&gt;
    &lt;a href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Prev&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;-active&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;1&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;2&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;3&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;span&gt;...&lt;/span&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;12&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;Next&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;ul class=&quot;pagination&quot;&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Prev&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;1&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;span&gt;...&lt;/span&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;4&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;-active&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;5&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;6&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;span&gt;...&lt;/span&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;12&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href=&quot;#&quot;&gt;Next&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="block" class="jump"><a href="#block"># Block</a></h2>
        <p>Pagination can be made to fill the parent and have flex items by using the <code>-block</code> modifier.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <ul class="pagination -block">
              <li>
                <a href="#" tabindex="-1">Prev</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li class="-active">
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul class=&quot;pagination -block&quot;&gt;
  ...
&lt;/ul&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="simple" class="jump"><a href="#simple"># Simple</a></h2>
        <p>Pagination can be simplified for pages or articles using the <code>-prev</code>, <code>-next</code> modifiers for items. To style the previous and next links <code>subtitle</code> and <code>title</code> classes can be used.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <ul class="pagination">
              <li class="-prev">
                <a href="#">
                  <span class="subtitle">Previous</span>
                  <span class="title h5">Getting started</span>
                </a>
              </li>
              <li class="-next">
                <a href="#">
                  <span class="subtitle">Next</span>
                  <span class="title h5">Layout</span>
                </a>
              </li>
            </ul>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;ul class=&quot;pagination&quot;&gt;
  &lt;li class=&quot;-prev&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;
      &lt;span class=&quot;subtitle&quot;&gt;Previous&lt;/span&gt;
      &lt;span class=&quot;title h5&quot;&gt;Getting started&lt;/span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;-next&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;
      &lt;span class=&quot;subtitle&quot;&gt;Next&lt;/span&gt;
      &lt;span class=&quot;title h5&quot;&gt;Layout&lt;/span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
