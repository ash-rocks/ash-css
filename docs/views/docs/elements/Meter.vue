<template>
  <div>

    <h1>Meter</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#inverse"># Inverse</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Meters are classless by default.</p>

          <figure>
            <header>
              <meter min="0" max="100" low="25" high="75" optimum="50" value="50"></meter>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;50&quot; value=&quot;50&quot;&gt;&lt;/meter&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Meter bar colors are handled automatically by setting the <code>low</code>, <code>high</code>, and <code>optimum</code> attributes along with the current value.</p>

          <figure>
            <header>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="10"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="50"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="80"></meter>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;10&quot;&gt;&lt;/meter&gt;
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;50&quot;&gt;&lt;/meter&gt;
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;80&quot;&gt;&lt;/meter&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>Meters can be sized using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, and <code>-large</code> classes.</p>

          <figure>
            <header>
              <meter min="0" max="100" low="25" high="75" optimum="50" value="50" class="-small"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="50" value="50" class="-normal"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="50" value="50" class="-medium"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="50" value="50" class="-large"></meter>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;50&quot; value=&quot;50&quot; class=&quot;-small&quot;&gt;&lt;/meter&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="inverse" class="jump"><a href="#inverse"># Inverse</a></h2>
          <p>You can inverse the order of the coloring by adding the <code>-inverse</code> class.</p>

          <figure>
            <header>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="10" class="-inverse"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="50" class="-inverse"></meter>
              <meter min="0" max="100" low="25" high="75" optimum="100" value="80" class="-inverse"></meter>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;10&quot; class=&quot;-inverse&quot;&gt;&lt;/meter&gt;
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;50&quot; class=&quot;-inverse&quot;&gt;&lt;/meter&gt;
                  &lt;meter min=&quot;0&quot; max=&quot;100&quot; low=&quot;25&quot; high=&quot;75&quot; optimum=&quot;100&quot; value=&quot;80&quot; class=&quot;-inverse&quot;&gt;&lt;/meter&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
