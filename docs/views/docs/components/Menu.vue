<template>
  <div>

    <h1>Menus</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Menus are styled lists used for navigation and can be created by using the <code>menu</code> class on an unordered list. Menus are great to use on details, sidebars, sidebar link groups, or dropdowns.</p>

          <figure>
            <header>
              <ul class="menu">
                <li><a href="https://atom.io" target="_blank">Atom</a></li>
                <li><a href="https://github.com" target="_blank">Github</a></li>
                <li><a href="https://slack.com" target="_blank">Slack</a></li>
              </ul>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;ul class=&quot;menu&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;https://atom.io&quot; target=&quot;_blank&quot;&gt;Atom&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;https://github.com&quot; target=&quot;_blank&quot;&gt;Github&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;https://slack.com&quot; target=&quot;_blank&quot;&gt;Slack&lt;/a&gt;&lt;/li&gt;
                  &lt;/ul&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
