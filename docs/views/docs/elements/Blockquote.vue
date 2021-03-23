<template>
  <div>

    <h1>Blockquotes</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Blockquotes are classless by default. The <code>cite</code> attribute can be used to include the source or author of the blockquote.</p>

          <figure>
            <header>
              <blockquote cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar fringilla enim eget pellentesque. Proin sit amet commodo orci. Pellentesque et lorem a quam egestas vehicula. Aenean eget ipsum turpis.</p>
              </blockquote>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;blockquote cite=&quot;This Is The Cite Attribute&quot;&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar fringilla enim eget pellentesque. Proin sit amet commodo orci. Pellentesque et lorem a quam egestas vehicula. Aenean eget ipsum turpis.&lt;/p&gt;
                  &lt;/blockquote&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Horizontal rules have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <blockquote class="-primary" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
              <blockquote class="-success" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
              <blockquote class="-warning" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
              <blockquote class="-danger" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
              <blockquote class="-dark" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
              <blockquote class="-light" cite="This Is The Cite Attribute">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac arcu a dictum. Maecenas enim enim, pulvinar semper dapibus.</p>
              </blockquote>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;blockquote class=&quot;-primary&quot; cite=&quot;...&quot;&gt;
                    ...
                  &lt;/blockquote&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
